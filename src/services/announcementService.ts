// src/services/announcementService.ts
import apiClient from "../config/axiosInstance";
import { API_ENDPOINTS } from "../api/endpoints";

export const announcementService = {
  getAnnouncements: async (params: { page?: number }) => {
    // response is already the data object because of your interceptor
    return await apiClient.get(API_ENDPOINTS.ADMIN_ANNOUNCEMENTS_LIST, {
      params,
    });
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
