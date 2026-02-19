/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "../config/axiosInstance";
import { API_ENDPOINTS } from "../api/endpoints";

// --- Interfaces for profile ---
export interface UserProfile {
  id: number;
  username: string | null;
  email: string;
  phone_number: string | null;
  first_name: string;
  last_name: string;
  status: boolean;
  is_verified: boolean;
  date_joined: string;
}

export interface UpdateProfileRequest {
  first_name?: string;
  last_name?: string;
  email?: string;
}

// --- Service logic ---
export const profileService = {
  /**
   * Fetch current user profile
   * GET /admin/profile/me/
   */
  getMe: async (): Promise<UserProfile> => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.ME);
      return response as any as UserProfile;
    } catch (error) {
      console.error("[Profile Error] Fetch failed:", error);
      throw error;
    }
  },

  /**
   * Update current user profile
   * PATCH /admin/profile/update/
   */
  updateProfile: async (data: UpdateProfileRequest): Promise<UserProfile> => {
    try {
      const response = await apiClient.patch(
        API_ENDPOINTS.UPDATE_PROFILE,
        data,
      );
      return response as any as UserProfile;
    } catch (error) {
      console.error("[Profile Error] Update failed:", error);
      throw error;
    }
  },
};
