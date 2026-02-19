/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// ============================================================================
// FILE 2: src/services/authService.ts
// ============================================================================
// Copy this ENTIRE file and replace your existing authService.ts

import apiClient, {
  secureCookieManager,
  SECURITY_CONFIG,
} from "../config/axiosInstance";
import { API_ENDPOINTS } from "../api/endpoints";

// Response Interfaces
interface LoginResponse {
  access: string;
  refresh: string;
  [key: string]: any;
}

interface ForgotPasswordResponse {
  temp_token: string;
  masked_email: string;
  message: string;
}

interface OtpVerifyResponse {
  [key: string]: any;
}

interface PasswordResetResponse {
  [key: string]: any;
}

// interface LogoutResponse {
//   [key: string]: any;
// }

// Auth Service
export const authService = {
  /**
   * Login with email and password
   */
  login: async (credentials: any): Promise<LoginResponse> => {
    try {
      const data: LoginResponse = await apiClient.post(
        API_ENDPOINTS.LOGIN,
        credentials,
      );

      // data.access = "123456789abcdef";

      if (data.access) {
        secureCookieManager.setToken(
          "accessToken",
          data.access,
          SECURITY_CONFIG.tokens.accessTokenExpiry,
        );
      }

      if (data.refresh) {
        secureCookieManager.setToken(
          "refreshToken",
          data.refresh,
          SECURITY_CONFIG.tokens.refreshTokenExpiry,
        );
      }

      if (data.user) {
        localStorage.setItem("userId", JSON.stringify(data.user.id));
      }

      return data;
    } catch (error) {
      console.error("[Auth Error] Login failed:", error);
      throw error;
    }
  },

  /**
   * Request password reset via email
   */
  forgotPassword: async (email: string): Promise<ForgotPasswordResponse> => {
    try {
      return await apiClient.post<any, ForgotPasswordResponse>(
        API_ENDPOINTS.FORGOT_PASSWORD,
        { email },
      );
    } catch (error) {
      console.error("[Auth Error] Forgot password failed:", error);
      throw error;
    }
  },

  /**
   * Verify OTP sent to user's email
   */
  verifyOtp: async (
    temp_token: string,
    otp: string,
  ): Promise<OtpVerifyResponse> => {
    try {
      return await apiClient.post(API_ENDPOINTS.OTP_VERIFY, {
        temp_token,
        otp,
      });
    } catch (error) {
      console.error("[Auth Error] OTP verification failed:", error);
      throw error;
    }
  },

  /**
   * Reset password with new password
   */
  resetPassword: async (data: {
    temp_token: string;
    new_password: string;
    new_password_confirm: string;
  }): Promise<PasswordResetResponse> => {
    try {
      return await apiClient.post(API_ENDPOINTS.PASSWORD_RESET, data);
    } catch (error) {
      console.error("[Auth Error] Password reset failed:", error);
      throw error;
    }
  },

  /**
   * Change password (logged-in user)
   */
  changePassword: async (data: {
    old_password: string;
    new_password: string;
    new_password_confirm: string;
  }): Promise<any> => {
    try {
      return await apiClient.post(API_ENDPOINTS.PASSWORD_CHANGE, data);
    } catch (error) {
      console.error("[Auth Error] Change password failed:", error);
      throw error;
    }
  },

  /**
   * Logout user and clear all tokens
   */
  logout: async (): Promise<void> => {
    try {
      await apiClient.post(API_ENDPOINTS.LOGOUT);
      localStorage.removeItem("userId");
    } catch (error) {
      console.warn("[Auth Warning] Logout API failed, clearing tokens anyway");
    } finally {
      secureCookieManager.clearAllTokens();
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
  },

  /**
   * Get current access token (for debugging)
   */
  /**
   * Get current access token
   * UPDATED: Now needs to be async
   */
  getAccessToken: async (): Promise<string | undefined> => {
    return await secureCookieManager.getToken("accessToken"); // Add await here
  },

  /**
   * Check if user is authenticated
   * UPDATED: Now needs to be async
   */
  isAuthenticated: async (): Promise<boolean> => {
    const token = await secureCookieManager.getToken("accessToken"); // Add await here
    return !!token;
  },

  /**
   * Clear all authentication data manually
   */
  clearAuth: (): void => {
    secureCookieManager.clearAllTokens();
  },
};
