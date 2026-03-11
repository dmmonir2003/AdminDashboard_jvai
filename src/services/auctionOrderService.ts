// src/services/auctionService.ts
import apiClient from "../config/axiosInstance";
import { API_ENDPOINTS } from "../api/endpoints";

export const auctionOrderService = {
  getAuctionOrders: async (page: number = 1, search?: string) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.ADMIN_AUCTION_ORDERS, {
        params: {
          page: page,
          search: search || undefined,
        },
      });
      return response;
    } catch (error) {
      console.error("[Auction Service] Failed to fetch auction orders:", error);
      throw error;
    }
  },

  getAuctionOrderDetail: async (id: string | number) => {
    try {
      const response = await apiClient.get(
        API_ENDPOINTS.ADMIN_AUCTION_ORDER_DETAIL(id),
      );
      return response;
    } catch (error) {
      console.error(
        `[Auction Service] Failed to fetch auction order ${id}:`,
        error,
      );
      throw error;
    }
  },

  markAuctionAsDelivered: async (id: string | number) => {
    try {
      return await apiClient.patch(
        API_ENDPOINTS.ADMIN_MARK_AUCTION_DELIVERED(id),
      );
    } catch (error) {
      console.error(
        `[Auction Service] Failed to mark auction ${id} as delivered:`,
        error,
      );
      throw error;
    }
  },
};
