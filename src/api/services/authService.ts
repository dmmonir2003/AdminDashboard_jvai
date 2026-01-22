// import { AuthResponse, User } from "@/src/types/auth";
// import apiClient from "../axiosInstance";
// import { API_ENDPOINTS } from "../endpoints";
// import Cookies from "js-cookie";

// interface LoginResponse {
//   access: string;
//   refresh: string;
//   user: {
//     id: number;
//     email: string;
//     is_verified: boolean;
//   };
// }

// export const authService = {
//   /**
//    * Login user and store token
//    */
//   login: async (credentials: any): Promise<LoginResponse> => {
//     // We pass <any, LoginResponse> to tell TS:
//     // 1. Sending 'any' data
//     // 2. Receiving 'LoginResponse' directly (NOT AxiosResponse)
//     const data = await apiClient.post<any, LoginResponse>(
//       API_ENDPOINTS.LOGIN,
//       credentials,
//     );

//     // Now TypeScript knows 'data' IS the LoginResponse
//     const { access, refresh, user } = data;

//     if (access) {
//       Cookies.set("accessToken", access, { expires: 1 / 24, path: "/" });
//       Cookies.set("refreshToken", refresh, { expires: 7, path: "/" });
//       Cookies.set("userEmail", user.email, { expires: 7, path: "/" });
//     }

//     return data;
//   },

//   refreshToken: async (): Promise<string> => {
//     const currentRefreshToken = Cookies.get("refreshToken");
//     if (!currentRefreshToken) throw new Error("No refresh token available");

//     // Again, use <any, LoginResponse> to tell TS about the direct data return
//     const data = await apiClient.post<any, LoginResponse>(
//       API_ENDPOINTS.REFRESH_TOKEN,
//       {
//         refresh: currentRefreshToken,
//       },
//     );

//     const { access, refresh: newRefresh } = data;

//     if (access) {
//       Cookies.set("accessToken", access, {
//         expires: 1 / 24,
//         secure: true,
//         path: "/",
//       });
//       if (newRefresh) {
//         Cookies.set("refreshToken", newRefresh, {
//           expires: 7,
//           secure: true,
//           path: "/",
//         });
//       }
//     }

//     return access;
//   },

//   logout: async (): Promise<void> => {
//     try {
//       await apiClient.post(API_ENDPOINTS.LOGOUT);
//     } finally {
//       Cookies.remove("accessToken");
//       Cookies.remove("userEmail");
//       localStorage.removeItem("token");
//       window.location.href = "/login";
//     }
//   },
//   /**
//    * Get current authenticated user profile
//    */
//   getMe: (): Promise<User> => {
//     return apiClient.get(API_ENDPOINTS.ME);
//   },

//   /**
//    * Logout user and clear local storage
//    */
//   //   logout: async (): Promise<void> => {
//   //     try {
//   //       await apiClient.post(API_ENDPOINTS.LOGOUT);
//   //     } finally {
//   //       // Always clear local storage even if the API call fails
//   //       localStorage.removeItem("token");
//   //       window.location.href = "/login"; // Force redirect
//   //     }
//   //   },

//   forgotPassword: async (email: string): Promise<any> => {
//     return apiClient.post(API_ENDPOINTS.FORGOT_PASSWORD, { email });
//   },

//   /**
//    * Step 2: Verify OTP
//    */
//   verifyOtp: async (email: string, otp: string): Promise<any> => {
//     return apiClient.post("/auth/verify-otp", { email, otp });
//   },

//   /**
//    * Step 3: Set New Password
//    */
//   resetPassword: async (data: any): Promise<any> => {
//     return apiClient.post("/auth/reset-password", data);
//   },

//   /**
//    * Register a new user
//    */
//   register: (userData: any): Promise<AuthResponse> => {
//     return apiClient.post(API_ENDPOINTS.REGISTER, userData);
//   },
// };

/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "../axiosInstance";
import { API_ENDPOINTS } from "../endpoints";
import Cookies from "js-cookie";

// 1. Define the interface for the specific response
interface ForgotPasswordResponse {
  temp_token: string;
  masked_email: string;
  message: string;
}

export const authService = {
  login: async (credentials: any) => {
    // Using <any, any> as a quick fix or define a LoginResponse interface
    const data: any = await apiClient.post(API_ENDPOINTS.LOGIN, credentials);
    if (data.access) {
      Cookies.set("accessToken", data.access, { expires: 1 / 24, path: "/" });
      Cookies.set("refreshToken", data.refresh, { expires: 7, path: "/" });
    }
    return data;
  },

  forgotPassword: async (email: string): Promise<ForgotPasswordResponse> => {
    // 2. Pass the interface to the post method: post<RequestType, ResponseType>
    // Since your interceptor returns response.data, the second generic is the shape of that data.
    return apiClient.post<any, ForgotPasswordResponse>(
      API_ENDPOINTS.FORGOT_PASSWORD,
      { email },
    );
  },

  verifyOtp: async (temp_token: string, otp: string) => {
    return apiClient.post(API_ENDPOINTS.OTP_VERIFY, { temp_token, otp });
  },

  resetPassword: async (data: {
    temp_token: string;
    new_password: string;
    new_password_confirm: string;
  }) => {
    return apiClient.post(API_ENDPOINTS.PASSWORD_RESET, data);
  },
  logout: async () => {
    try {
      await apiClient.post(API_ENDPOINTS.LOGOUT);
    } finally {
      Cookies.remove("accessToken");
      localStorage.clear();
      window.location.href = "/login";
    }
  },
};
