// src/services/orderService.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "../config/axiosInstance";
import { API_ENDPOINTS } from "../api/endpoints";

export interface ShopOrder {
  order_id: number;
  tracking_id: string;
  status: string;
  payment_status: string;
  payment_method: string;
  total_amount: number;
  created_at: string;
  user: {
    user_id: number;
    name: string;
    email: string;
  };
  items_count: number;
  products: Array<{
    product_id: number;
    product_name: string;
  }>;
}

export interface OrderItem {
  order_item_id: number;
  product_id: number;
  product_name: string;
  thumbnail: string;
  color: string;
  size: string;
  quantity: number;
  original_price: number;
  discount_percentage: number;
  discounted_price: number;
  item_total: number;
}

export interface ShopOrderDetail extends Omit<
  ShopOrder,
  "user" | "products" | "items_count"
> {
  updated_at: string;
  user_information: {
    user_id: number;
    name: string;
    email: string;
    street_address: string;
    apartment: string;
    city: string;
    zip_code: string;
  };
  items: OrderItem[];
}

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const orderService = {
  getShopOrders: async (page: number = 1, search?: string) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.ADMIN_ORDERS, {
        params: {
          page: page,
          search: search || undefined,
        },
      });
      return response;
    } catch (error) {
      console.error("[Order Service] Failed to fetch shop orders:", error);
      throw error;
    }
  },

  getShopOrderDetail: async (
    orderId: string | number,
  ): Promise<ShopOrderDetail> => {
    try {
      const response = await apiClient.get(
        API_ENDPOINTS.ADMIN_ORDER_DETAIL(orderId),
      );
      return response as unknown as ShopOrderDetail;
    } catch (error) {
      console.error(`[Order Service] Failed to fetch order ${orderId}:`, error);
      throw error;
    }
  },

  markAsDelivered: async (orderId: string | number): Promise<any> => {
    try {
      return await apiClient.patch(
        API_ENDPOINTS.ADMIN_MARK_ORDER_DELIVERED(orderId),
      );
    } catch (error) {
      console.error(
        `[Order Service] Failed to mark order ${orderId} as delivered:`,
        error,
      );
      throw error;
    }
  },
};
