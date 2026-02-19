/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { io, Socket } from "socket.io-client";

/**
 * Base URL from env
 * Example:
 * NEXT_PUBLIC_SOCKET_URL=https://api.yoursite.com
 */
const RAW_SOCKET_URL =
  process.env.NEXT_PUBLIC_SOCKET_URL || "http://10.10.13.21:8000";

/**
 * Auto convert protocol:
 * http  -> ws
 * https -> wss
 */
function getSocketUrl(url: string): string {
  try {
    const parsed = new URL(url);

    if (parsed.protocol === "https:") {
      parsed.protocol = "wss:";
    } else if (parsed.protocol === "http:") {
      parsed.protocol = "ws:";
    }

    return parsed.toString();
  } catch (err) {
    console.error("❌ Invalid socket URL:", url);
    return url;
  }
}

const SOCKET_URL = getSocketUrl(RAW_SOCKET_URL);

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

    this.token = cleanToken;

    this.socket = io(SOCKET_URL, {
      auth: { token: cleanToken },
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
    });

    this.socket.on("connect", () => {
      console.log("✅ Socket connected:", this.socket?.id);
      onConnected?.();
    });

    this.socket.on("disconnect", (reason) => {
      console.log("⚠️ Socket disconnected:", reason);
    });

    this.socket.on("connect_error", (err) => {
      console.error("❌ Socket connection error:", err.message);
    });

    return this.socket;
  }

  /**
   * Monitor auction (admin view only)
   */
  monitorAuction(auctionId: string | number) {
    if (!this.socket) return;

    // if already connected → run immediately
    if (this.socket.connected) {
      console.log(`👁️ Monitoring auction ${auctionId}`);
      this.socket.emit("monitor_auction", { auction_id: auctionId });
      return;
    }

    // wait until connection is ready (fixes race condition)
    this.socket.once("connect", () => {
      console.log(`👁️ Monitoring auction ${auctionId}`);
      this.socket?.emit("monitor_auction", { auction_id: auctionId });
    });
  }

  // monitorAuction(auctionId: string | number) {
  //   if (!this.socket?.connected) throw new Error("Socket not connected");

  //   console.log(`👁️ Monitoring auction ${auctionId}`);
  //   this.socket.emit("monitor_auction", { auction_id: auctionId });
  // }
  // liveBidUsers(callback: (data: any) => void) {
  //     this.socket?.on("live_bid_users_response", callback
  // }

  /**
   * Join auction as participant
   */
  joinAuction(auctionId: string | number) {
    if (!this.socket?.connected) throw new Error("Socket not connected");

    console.log(`🎯 Joining auction ${auctionId}`);
    this.socket.emit("join_auction", { auction_id: auctionId });
  }

  /**
   * Place bid
   */
  placeBid(auctionId: string | number) {
    if (!this.socket?.connected) throw new Error("Socket not connected");

    console.log(`💰 Placing bid on auction ${auctionId}`);
    this.socket.emit("place_bid", { auction_id: auctionId });
  }

  /**
   * Event listeners
   */
  onNewBid(callback: (data: any) => void) {
    this.socket?.on("new_bid", callback);
  }

  onAuctionEnded(callback: (data: any) => void) {
    this.socket?.on("auction_ended", callback);
  }

  onAuctionState(callback: (data: any) => void) {
    this.socket?.on("auction_state", callback);
  }

  onError(callback: (data: any) => void) {
    this.socket?.on("error", callback);
  }

  /**
   * Remove listener
   */
  off(event: string, callback?: any) {
    this.socket?.off(event, callback);
  }

  /**
   * Disconnect socket safely
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
   * Check connection
   */
  isConnected(): boolean {
    return this.socket?.connected ?? false;
  }
}

/**
 * Singleton instance
 */
export const socketService = new SocketService();
