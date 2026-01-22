/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthResponse, User } from "@/src/types/auth";
import apiClient from "../axiosInstance";
import { API_ENDPOINTS } from "../endpoints";
import Cookies from "js-cookie";

interface LoginResponse {
  access: string;
  refresh: string;
  user: {
    id: number;
    email: string;
    is_verified: boolean;
  };
}

export const authService = {
  /**
   * Login user and store token
   */
  login: async (credentials: any): Promise<LoginResponse> => {
    // We pass <any, LoginResponse> to tell TS:
    // 1. Sending 'any' data
    // 2. Receiving 'LoginResponse' directly (NOT AxiosResponse)
    const data = await apiClient.post<any, LoginResponse>(
      API_ENDPOINTS.LOGIN,
      credentials,
    );

    // Now TypeScript knows 'data' IS the LoginResponse
    const { access, refresh, user } = data;

    if (access) {
      Cookies.set("accessToken", access, { expires: 1 / 24, path: "/" });
      Cookies.set("refreshToken", refresh, { expires: 7, path: "/" });
      Cookies.set("userEmail", user.email, { expires: 7, path: "/" });
    }

    return data;
  },

  refreshToken: async (): Promise<string> => {
    const currentRefreshToken = Cookies.get("refreshToken");
    if (!currentRefreshToken) throw new Error("No refresh token available");

    // Again, use <any, LoginResponse> to tell TS about the direct data return
    const data = await apiClient.post<any, LoginResponse>(
      API_ENDPOINTS.REFRESH_TOKEN,
      {
        refresh: currentRefreshToken,
      },
    );

    const { access, refresh: newRefresh } = data;

    if (access) {
      Cookies.set("accessToken", access, {
        expires: 1 / 24,
        secure: true,
        path: "/",
      });
      if (newRefresh) {
        Cookies.set("refreshToken", newRefresh, {
          expires: 7,
          secure: true,
          path: "/",
        });
      }
    }

    return access;
  },

  logout: async (): Promise<void> => {
    try {
      await apiClient.post(API_ENDPOINTS.LOGOUT);
    } finally {
      Cookies.remove("accessToken");
      Cookies.remove("userEmail");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  },
  /**
   * Get current authenticated user profile
   */
  getMe: (): Promise<User> => {
    return apiClient.get(API_ENDPOINTS.ME);
  },

  /**
   * Logout user and clear local storage
   */
  //   logout: async (): Promise<void> => {
  //     try {
  //       await apiClient.post(API_ENDPOINTS.LOGOUT);
  //     } finally {
  //       // Always clear local storage even if the API call fails
  //       localStorage.removeItem("token");
  //       window.location.href = "/login"; // Force redirect
  //     }
  //   },

  /**
   * Register a new user
   */
  register: (userData: any): Promise<AuthResponse> => {
    return apiClient.post(API_ENDPOINTS.REGISTER, userData);
  },
};
