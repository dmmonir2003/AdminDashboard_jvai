/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "../config/axiosInstance";
import { API_ENDPOINTS } from "../api/endpoints";

export interface User {
  id: number;
  username: string;
  email: string;
  phone_number: string | null;
  status: boolean;
  is_verified: boolean;
  date_joined: string;
}

export interface UserDetail {
  id: number;
  username: string;
  email: string;
  phone_number: string | null;
  status: boolean;
  is_verified: boolean;
  date_joined: string;
  wallet_coins: number;
  refundable_coins: number;
  total_spent_coins: number;
  total_wins: number;
}

export interface UserHistory {
  auction_title: string;
  joined_at: string;
  days_ago: number;
  total_bids: number;
}

export interface UserTransaction {
  id: number;
  transaction_type: string;
  amount: number;
  description: string;
  created_at: string;
}

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const userService = {
  /**
   * Fetch all users (paginated)
   */
  getAllUsers: async (page: number = 1): Promise<PaginatedResponse<User>> => {
    try {
      const response = (await apiClient.get(API_ENDPOINTS.ADMIN_USERS, {
        params: { page },
      })) as unknown as PaginatedResponse<User>;
      return response || { count: 0, next: null, previous: null, results: [] };
    } catch (error) {
      console.error("[User Service] Failed to fetch users:", error);
      throw error;
    }
  },

  /**
   * Fetch user details by ID
   */
  getUserById: async (userId: string | number): Promise<UserDetail> => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.ADMIN_USER_DETAILS, {
        params: { user_id: userId },
      });
      return response as unknown as UserDetail;
    } catch (error) {
      console.error(`[User Service] Failed to fetch user ${userId}:`, error);
      throw error;
    }
  },

  /**
   * Fetch user auction history by user ID
   */
  getUserHistory: async (
    userId: string | number,
    page: number = 1,
  ): Promise<PaginatedResponse<UserHistory>> => {
    try {
      const response = (await apiClient.get(API_ENDPOINTS.ADMIN_USER_HISTORY, {
        params: { user_id: userId, page },
      })) as unknown as PaginatedResponse<UserHistory>;
      return response || { count: 0, next: null, previous: null, results: [] };
    } catch (error) {
      console.error(
        `[User Service] Failed to fetch history for user ${userId}:`,
        error,
      );
      throw error;
    }
  },

  /**
   * Fetch user wallet transactions by user ID
   */
  getUserTransactions: async (
    userId: string | number,
    page: number = 1,
  ): Promise<PaginatedResponse<UserTransaction>> => {
    try {
      const response = (await apiClient.get(
        API_ENDPOINTS.ADMIN_USER_TRANSACTIONS,
        { params: { user_id: userId, page } },
      )) as unknown as PaginatedResponse<UserTransaction>;
      return response || { count: 0, next: null, previous: null, results: [] };
    } catch (error) {
      console.error(
        `[User Service] Failed to fetch transactions for user ${userId}:`,
        error,
      );
      throw error;
    }
  },

  /**
   * Toggle user active/blocked status
   */
  toggleUserStatus: async (userId: number): Promise<any> => {
    try {
      return await apiClient.post(API_ENDPOINTS.ADMIN_USER_TOGGLE_STATUS, {
        user_id: userId,
      });
    } catch (error) {
      console.error(
        `[User Service] Failed to toggle status for user ${userId}:`,
        error,
      );
      throw error;
    }
  },
};
