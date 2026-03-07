/* eslint-disable @typescript-eslint/no-explicit-any */
// src/services/announcementService.ts
import apiClient from "../config/axiosInstance";
import { API_ENDPOINTS } from "../api/endpoints";

export const announcementService = {
  getAnnouncements: async (params: { page?: number }): Promise<any> => {
    try {
      // Cast the result to 'any' so TS knows we are returning the transformed data
      const response = await apiClient.get(
        API_ENDPOINTS.ADMIN_ANNOUNCEMENTS_LIST,
        { params },
      );
      return response;
    } catch (error) {
      console.error(
        "[Announcement Service] Failed to fetch announcements:",
        error,
      );
      throw error;
    }
  },

  searchUsers: async (query: string) => {
    const res: any = await apiClient.get(API_ENDPOINTS.ADMIN_USER_SEARCH, {
      params: { q: query },
    });
    return res.results || [];
  },

  createAnnouncement: async (formData: FormData) => {
    return await apiClient.post(
      API_ENDPOINTS.ADMIN_ANNOUNCEMENT_CREATE,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } },
    );
  },

  // DELETE
  deleteAnnouncement: async (id: number | string) => {
    await apiClient.delete(API_ENDPOINTS.ADMIN_ANNOUNCEMENT_DELETE(id));
  },
};
