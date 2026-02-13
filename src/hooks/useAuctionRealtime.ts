/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useCallback, useRef } from "react";
import { message } from "antd";
import { socketService } from "@/src/services/socketService";

interface BidData {
  auction_id: number;
  current_bid: number;
  amount_saving: number;
  user_id: number;
  user_name: string;
  bid_time: string;
  bid_number: number;
  timer_extended: boolean;
}

interface CountdownData {
  auction_id: number;
  remaining_seconds: number;
  end_time: string;
}

interface AuctionEndedData {
  auction_id: number;
  winner_id: number | null;
  winner_name: string | null;
  final_bid: number;
}

interface ParticipantData {
  user_id: number;
  user_name: string;
  email: string;
  avatar?: string;
  bid_count: number;
  total_coins_spent: number;
  last_bid_time?: string;
  last_bid_number?: number;
  is_winner?: boolean;
}

interface UseAuctionRealtimeOptions {
  auctionId: string | number;
  token: string;
  isAdmin?: boolean; // If true, use monitor mode (no entry fee)
  onBidReceived?: (bid: BidData) => void;
  onCountdownUpdate?: (countdown: CountdownData) => void;
  onAuctionEnded?: (data: AuctionEndedData) => void;
}

export function useAuctionRealtime({
  auctionId,
  token,
  isAdmin = false,
  onBidReceived,
  onCountdownUpdate,
  onAuctionEnded,
}: UseAuctionRealtimeOptions) {
  const [participants, setParticipants] = useState<
    Map<number, ParticipantData>
  >(new Map());
  const [currentBid, setCurrentBid] = useState<number>(0);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(0);
  const [isConnected, setIsConnected] = useState(false);
  const [totalBids, setTotalBids] = useState(0);
  const [lastBidData, setLastBidData] = useState<BidData | null>(null);
  const [auctionEnded, setAuctionEnded] = useState(false);
  const [winnerData, setWinnerData] = useState<AuctionEndedData | null>(null);

  const participantsRef = useRef(participants);

  // Keep ref in sync
  useEffect(() => {
    participantsRef.current = participants;
  }, [participants]);

  // Handle new bid
  const handleNewBid = useCallback(
    (data: BidData) => {
      console.log("📥 New bid received:", data);

      // Update current bid
      setCurrentBid(data.current_bid);
      setTotalBids((prev) => prev + 1);
      setLastBidData(data);

      // Update participants map
      setParticipants((prevMap) => {
        const newMap = new Map(prevMap);
        const existing = newMap.get(data.user_id);

        if (existing) {
          // Update existing participant
          newMap.set(data.user_id, {
            ...existing,
            bid_count: existing.bid_count + 1,
            total_coins_spent: existing.total_coins_spent + 1,
            last_bid_time: data.bid_time,
            last_bid_number: data.bid_number,
          });
        } else {
          // Add new participant
          newMap.set(data.user_id, {
            user_id: data.user_id,
            user_name: data.user_name,
            email: "", // Will be populated if available
            bid_count: 1,
            total_coins_spent: 1,
            last_bid_time: data.bid_time,
            last_bid_number: data.bid_number,
            is_winner: false,
          });
        }

        return newMap;
      });

      // Show notification for timer extension
      if (data.timer_extended) {
        message.info("⏰ Auction extended by 5 seconds (anti-sniping)");
      }

      // Call custom callback
      if (onBidReceived) {
        onBidReceived(data);
      }
    },
    [onBidReceived],
  );

  // Handle countdown update
  const handleCountdown = useCallback(
    (data: CountdownData) => {
      setRemainingSeconds(data.remaining_seconds);

      if (onCountdownUpdate) {
        onCountdownUpdate(data);
      }
    },
    [onCountdownUpdate],
  );

  // Handle auction ended
  const handleAuctionEnded = useCallback(
    (data: AuctionEndedData) => {
      console.log("🏁 Auction ended:", data);

      setAuctionEnded(true);
      setWinnerData(data);
      setRemainingSeconds(0);

      // Mark winner in participants
      if (data.winner_id) {
        setParticipants((prevMap) => {
          const newMap = new Map(prevMap);
          const winner = newMap.get(data.winner_id!);
          if (winner) {
            newMap.set(data.winner_id!, {
              ...winner,
              is_winner: true,
            });
          }
          return newMap;
        });
      }

      // Show notification
      if (data.winner_name) {
        message.success(
          `🏆 Auction ended! Winner: ${data.winner_name} with $${data.final_bid}`,
        );
      } else {
        message.info("Auction ended with no bids");
      }

      if (onAuctionEnded) {
        onAuctionEnded(data);
      }
    },
    [onAuctionEnded],
  );

  // Handle auction state (initial state when joining)
  const handleAuctionState = useCallback((data: any) => {
    console.log("📊 Auction state received:", data);
    setCurrentBid(data.current_bid || 0);
  }, []);

  // Handle errors
  const handleError = useCallback((data: any) => {
    console.error("❌ Socket error:", data);
    message.error(data.error || "An error occurred");
  }, []);

  // Connect and join/monitor auction
  useEffect(() => {
    if (!token || !auctionId) return;

    // Connect socket
    socketService.connect(token, () => {
      setIsConnected(true);

      if (isAdmin) {
        socketService.monitorAuction(auctionId);
      } else {
        socketService.joinAuction(auctionId);
      }
    });

    // Subscribe to events
    socketService.onNewBid(handleNewBid);
    socketService.onCountdownUpdate(handleCountdown);
    socketService.onAuctionEnded(handleAuctionEnded);
    socketService.onAuctionState(handleAuctionState);
    socketService.onError(handleError);

    // Cleanup
    return () => {
      socketService.off("new_bid", handleNewBid);
      socketService.off("countdown_update", handleCountdown);
      socketService.off("auction_ended", handleAuctionEnded);
      socketService.off("auction_state", handleAuctionState);
      socketService.off("error", handleError);
    };
  }, [
    auctionId,
    token,
    isAdmin,
    handleNewBid,
    handleCountdown,
    handleAuctionEnded,
    handleAuctionState,
    handleError,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Don't disconnect immediately, other components might be using it
      // socketService.disconnect();
    };
  }, []);

  // Convert participants map to array
  const participantsArray = Array.from(participants.values()).sort(
    (a, b) => b.bid_count - a.bid_count,
  );

  return {
    participants: participantsArray,
    participantsMap: participants,
    currentBid,
    remainingSeconds,
    isConnected,
    totalBids,
    lastBidData,
    auctionEnded,
    winnerData,
    placeBid: () => socketService.placeBid(auctionId),
  };
}
