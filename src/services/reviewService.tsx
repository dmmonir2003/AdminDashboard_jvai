// src/services/reviewService.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "../config/axiosInstance";
import { API_ENDPOINTS } from "../api/endpoints";

export const reviewService = {
  getReviews: async (params: {
    page?: number;
    product_id?: number;
    rating?: number;
    search?: string;
  }) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.ADMIN_REVIEWS, {
        params,
      });
      return response;
    } catch (error) {
      console.error("[Review Service] Failed to fetch reviews:", error);
      throw error;
    }
  },

  getProductsForReview: async () => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.REVIEW_PRODUCT);
      return response as any;
    } catch (error) {
      console.error(
        "[Review Service] Failed to fetch products for review:",
        error,
      );
      throw error;
    }
  },

  getReviewById: async (id: number | string) => {
    try {
      const response = await apiClient.get(
        API_ENDPOINTS.ADMIN_REVIEW_DETAIL(id),
      );
      return response as any;
    } catch (error) {
      console.error(`[Review Service] Failed to fetch review ${id}:`, error);
      throw error;
    }
  },

  deleteReview: async (id: number | string) => {
    try {
      await apiClient.delete(API_ENDPOINTS.ADMIN_REVIEW_DELETE(id));
    } catch (error) {
      console.error(`[Review Service] Failed to delete review ${id}:`, error);
      throw error;
    }
  },
};
