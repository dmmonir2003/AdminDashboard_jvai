/* eslint-disable @typescript-eslint/no-explicit-any */
import { io, Socket } from "socket.io-client";

const SOCKET_URL =
  process.env.NEXT_PUBLIC_SOCKET_URL || "http://10.10.13.21:8000";

class SocketService {
  private socket: Socket | null = null;
  private token: string | null = null;

  /**
   * Initialize socket connection with JWT token
   */
  connect(token: string, onConnected?: () => void): Socket {
    if (this.socket?.connected) {
      onConnected?.();
      return this.socket;
    }

    const cleanToken = token.startsWith("Bearer ") ? token.substring(7) : token;

    this.socket = io(SOCKET_URL, {
      auth: { token: cleanToken },
      transports: ["websocket"],
      reconnection: true,
    });

    this.socket.on("connect", () => {
      console.log("✅ Socket connected:", this.socket?.id);
      onConnected?.(); // ⭐ IMPORTANT
    });

    this.socket.on("connect_error", (err) => {
      console.error("❌ socket error:", err.message);
    });

    return this.socket;
  }

  /**
   * Monitor auction (view-only, no entry fee, for admins)
   */
  monitorAuction(auctionId: string | number) {
    if (!this.socket?.connected) {
      throw new Error("Socket not connected");
    }

    console.log(`👁️ Monitoring auction ${auctionId} (admin view-only mode)`);
    this.socket.emit("monitor_auction", { auction_id: auctionId });
  }

  /**
   * Join auction as participant (requires entry fee)
   */
  joinAuction(auctionId: string | number) {
    if (!this.socket?.connected) {
      throw new Error("Socket not connected");
    }

    console.log(`🎯 Joining auction ${auctionId}`);
    this.socket.emit("join_auction", { auction_id: auctionId });
  }

  /**
   * Place a bid
   */
  placeBid(auctionId: string | number) {
    if (!this.socket?.connected) {
      throw new Error("Socket not connected");
    }

    console.log(`💰 Placing bid on auction ${auctionId}`);
    this.socket.emit("place_bid", { auction_id: auctionId });
  }

  /**
   * Subscribe to new bid events
   */
  onNewBid(callback: (data: any) => void) {
    if (!this.socket) return;
    this.socket.on("new_bid", callback);
  }

  /**
   * Subscribe to countdown updates
   */
  onCountdownUpdate(callback: (data: any) => void) {
    if (!this.socket) return;
    this.socket.on("countdown_update", callback);
  }

  /**
   * Subscribe to auction ended events
   */
  onAuctionEnded(callback: (data: any) => void) {
    if (!this.socket) return;
    this.socket.on("auction_ended", callback);
  }

  /**
   * Subscribe to auction state updates
   */
  onAuctionState(callback: (data: any) => void) {
    if (!this.socket) return;
    this.socket.on("auction_state", callback);
  }

  /**
   * Subscribe to error events
   */
  onError(callback: (data: any) => void) {
    if (!this.socket) return;
    this.socket.on("error", callback);
  }

  /**
   * Remove event listener
   */
  off(event: string, callback?: any) {
    if (!this.socket) return;
    this.socket.off(event, callback);
  }

  /**
   * Disconnect socket
   */
  disconnect() {
    if (this.socket) {
      console.log("🔌 Disconnecting socket...");
      this.socket.disconnect();
      this.socket = null;
      this.token = null;
    }
  }

  /**
   * Get socket instance
   */
  getSocket(): Socket | null {
    return this.socket;
  }

  /**
   * Check if socket is connected
   */
  isConnected(): boolean {
    return this.socket?.connected ?? false;
  }
}

// Export singleton instance
export const socketService = new SocketService();
