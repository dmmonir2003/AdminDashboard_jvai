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
   * Logout user and clear all tokens
   */
  logout: async (): Promise<void> => {
    try {
      await apiClient.post(API_ENDPOINTS.LOGOUT);
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
  getAccessToken: (): string | undefined => {
    return secureCookieManager.getToken("accessToken");
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: (): boolean => {
    const token = secureCookieManager.getToken("accessToken");
    return !!token;
  },

  /**
   * Clear all authentication data manually
   */
  clearAuth: (): void => {
    secureCookieManager.clearAllTokens();
  },
};
