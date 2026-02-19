/* eslint-disable @typescript-eslint/no-unused-vars */
// // ============================================================================
// // FILE 1: src/config/axiosInstance.ts
// // ============================================================================
// // Copy this ENTIRE file and replace your existing axiosInstance.ts

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import axios, {
//   AxiosInstance,
//   InternalAxiosRequestConfig,
//   AxiosResponse,
//   AxiosError,
// } from "axios";
// import Cookies from "js-cookie";

// // Security Configuration
// const SECURITY_CONFIG = {
//   isProduction: process.env.NODE_ENV === "production",
//   isDevelopment: process.env.NODE_ENV === "development",
//   api: {
//     baseURL:
//       process.env.NEXT_PUBLIC_API_URL ||
//       "https://ffm803lb-8000.inc1.devtunnels.ms/api",
//   },
//   cookies: {
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "strict" as const,
//     path: "/",
//   },
//   tokens: {
//     accessTokenExpiry: 1 / 24,
//     refreshTokenExpiry: 7,
//   },
// };

// // Types
// interface PendingRequest {
//   resolve: (token: string) => void;
//   reject: (error: any) => void;
// }

// // Queue Management
// let isRefreshing = false;
// let failedQueue: PendingRequest[] = [];

// const processQueue = (error: any, token: string | null = null) => {
//   failedQueue.forEach((prom) => {
//     if (error) prom.reject(error);
//     else prom.resolve(token!);
//   });
//   failedQueue = [];
// };

// // Secure Cookie Manager
// export const secureCookieManager = {
//   setToken: (name: string, value: string, expiryDays: number = 1) => {
//     if (typeof window === "undefined") return;

//     try {
//       const cookieOptions = {
//         expires: expiryDays,
//         path: SECURITY_CONFIG.cookies.path,
//         secure: SECURITY_CONFIG.cookies.secure,
//         sameSite: SECURITY_CONFIG.cookies.sameSite,
//       };

//       Cookies.set(name, value, cookieOptions);

//       if (SECURITY_CONFIG.isDevelopment) {
//         console.debug(`[Security] Cookie set: ${name}`, {
//           expiresIn: `${expiryDays} days`,
//           secure: SECURITY_CONFIG.cookies.secure,
//           sameSite: SECURITY_CONFIG.cookies.sameSite,
//         });
//       }
//     } catch (error) {
//       console.error(`[Security Error] Failed to set cookie ${name}:`, error);
//     }
//   },

//   getToken: (name: string): string | undefined => {
//     if (typeof window === "undefined") return undefined;

//     try {
//       return Cookies.get(name);
//     } catch (error) {
//       console.error(`[Security Error] Failed to get cookie ${name}:`, error);
//       return undefined;
//     }
//   },

//   removeToken: (name: string) => {
//     if (typeof window === "undefined") return;

//     try {
//       Cookies.remove(name, { path: SECURITY_CONFIG.cookies.path });
//     } catch (error) {
//       console.error(`[Security Error] Failed to remove cookie ${name}:`, error);
//     }
//   },

//   clearAllTokens: () => {
//     if (typeof window === "undefined") return;

//     try {
//       secureCookieManager.removeToken("accessToken");
//       secureCookieManager.removeToken("refreshToken");

//       if (typeof localStorage !== "undefined") {
//         localStorage.clear();
//       }

//       if (SECURITY_CONFIG.isDevelopment) {
//         console.debug("[Security] All tokens cleared");
//       }
//     } catch (error) {
//       console.error("[Security Error] Failed to clear tokens:", error);
//     }
//   },
// };

// // Create Axios Instance
// const apiClient: AxiosInstance = axios.create({
//   baseURL: SECURITY_CONFIG.api.baseURL,
//   headers: {
//     "Content-Type": "application/json",
//     ...(SECURITY_CONFIG.isProduction && {
//       "X-Content-Type-Options": "nosniff",
//     }),
//   },
//   // timeout: 10000,
//   withCredentials: SECURITY_CONFIG.isProduction,
// });

// // Request Interceptor
// apiClient.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     const token = secureCookieManager.getToken("accessToken");
//     if (token && config.headers) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error: AxiosError) => Promise.reject(error),
// );

// // Response Interceptor
// apiClient.interceptors.response.use(
//   (response: AxiosResponse) => response.data as any,
//   async (error: AxiosError<any>) => {
//     const originalRequest = error.config as InternalAxiosRequestConfig & {
//       _retry?: boolean;
//     };

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       if (originalRequest.url?.includes("/token/refresh/")) {
//         secureCookieManager.clearAllTokens();
//         if (typeof window !== "undefined") {
//           window.location.href = "/login";
//         }
//         return Promise.reject(error);
//       }

//       if (isRefreshing) {
//         return new Promise((resolve, reject) => {
//           failedQueue.push({ resolve, reject });
//         })
//           .then((token) => {
//             originalRequest.headers!.Authorization = `Bearer ${token}`;
//             return apiClient(originalRequest);
//           })
//           .catch((err) => Promise.reject(err));
//       }

//       originalRequest._retry = true;
//       isRefreshing = true;

//       try {
//         const refreshToken = secureCookieManager.getToken("refreshToken");
//         if (!refreshToken) {
//           throw new Error("No refresh token available");
//         }

//         const response = await axios.post(
//           `${SECURITY_CONFIG.api.baseURL}/token/refresh/`,
//           { refresh: refreshToken },
//           {
//             headers: { "Content-Type": "application/json" },
//             timeout: 10000,
//           },
//         );

//         const newAccessToken = response.data.access;

//         secureCookieManager.setToken(
//           "accessToken",
//           newAccessToken,
//           SECURITY_CONFIG.tokens.accessTokenExpiry,
//         );

//         processQueue(null, newAccessToken);
//         isRefreshing = false;

//         originalRequest.headers!.Authorization = `Bearer ${newAccessToken}`;
//         return apiClient(originalRequest);
//       } catch (refreshError) {
//         processQueue(refreshError, null);
//         isRefreshing = false;
//         secureCookieManager.clearAllTokens();
//         if (typeof window !== "undefined") {
//           window.location.href = "/login";
//         }
//         return Promise.reject(refreshError);
//       }
//     }

//     const errorMessage =
//       error.response?.data?.message || error.message || "Something went wrong";
//     return Promise.reject(errorMessage);
//   },
// );

// export default apiClient;
// export { SECURITY_CONFIG };

/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import Cookies from "js-cookie";

// Security Configuration
const SECURITY_CONFIG = {
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
  api: {
    baseURL:
      process.env.NEXT_PUBLIC_API_URL ||
      "https://ffm803lb-8000.inc1.devtunnels.ms/api",
  },
  cookies: {
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
  },
  tokens: {
    accessTokenExpiry: 1 / 24,
    refreshTokenExpiry: 7,
  },
};

// Types
interface PendingRequest {
  resolve: (token: string) => void;
  reject: (error: any) => void;
}

let isRefreshing = false;
let failedQueue: PendingRequest[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token!);
  });
  failedQueue = [];
};

// Secure Cookie Manager
const secureCookieManager = {
  setToken: (name: string, value: string, expiryDays: number = 1) => {
    if (typeof window === "undefined") return;
    try {
      Cookies.set(name, value, {
        expires: expiryDays,
        path: SECURITY_CONFIG.cookies.path,
        secure: SECURITY_CONFIG.cookies.secure,
        sameSite: SECURITY_CONFIG.cookies.sameSite,
      });
    } catch (error) {
      console.error(`[Security Error] Failed to set cookie ${name}:`, error);
    }
  },

  getToken: async (name: string): Promise<string | undefined> => {
    // 1. CLIENT SIDE
    if (typeof window !== "undefined") {
      try {
        return Cookies.get(name);
      } catch (error) {
        return undefined;
      }
    }

    // 2. SERVER SIDE (Safe for build)
    try {
      const { cookies } = await import("next/headers");
      const cookieStore = await cookies();
      return cookieStore.get(name)?.value;
    } catch (error) {
      return undefined;
    }
  },

  removeToken: (name: string) => {
    if (typeof window === "undefined") return;
    Cookies.remove(name, { path: SECURITY_CONFIG.cookies.path });
  },

  clearAllTokens: () => {
    if (typeof window === "undefined") return;
    secureCookieManager.removeToken("accessToken");
    secureCookieManager.removeToken("refreshToken");
    if (typeof localStorage !== "undefined") localStorage.clear();
  },
};

const apiClient: AxiosInstance = axios.create({
  baseURL: SECURITY_CONFIG.api.baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // Crucial for Dev Tunnels
});

// Request Interceptor: Now Awaits getToken
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await secureCookieManager.getToken("accessToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response.data as any,

  async (error: AxiosError<any>) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // ===============================
    // 401 TOKEN REFRESH LOGIC
    // ===============================
    if (error.response?.status === 401 && !originalRequest?._retry) {
      if (originalRequest?.url?.includes("/token/refresh/")) {
        secureCookieManager.clearAllTokens();
        if (typeof window !== "undefined") window.location.href = "/login";
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers!.Authorization = `Bearer ${token}`;
            return apiClient(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = await secureCookieManager.getToken("refreshToken");

        if (!refreshToken) throw new Error("No refresh token available");

        const response = await axios.post(
          `${SECURITY_CONFIG.api.baseURL}/token/refresh/`,
          { refresh: refreshToken },
          { headers: { "Content-Type": "application/json" } },
        );

        const newAccessToken = response.data.access;

        secureCookieManager.setToken(
          "accessToken",
          newAccessToken,
          SECURITY_CONFIG.tokens.accessTokenExpiry,
        );

        processQueue(null, newAccessToken);
        isRefreshing = false;

        originalRequest.headers!.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        isRefreshing = false;
        secureCookieManager.clearAllTokens();
        if (typeof window !== "undefined") window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    // ===============================
    // 🔥 HANDLE 404
    // ===============================
    if (error.response?.status === 404) {
      console.warn("🚨 API Not Found:", originalRequest?.url);
      return Promise.reject("API endpoint not found (404)");
    }

    // ===============================
    // 🔥 HANDLE NETWORK ERROR
    // ===============================
    if (!error.response) {
      console.error("🚨 Server not reachable / Network error");
      return Promise.reject("Server not reachable");
    }

    // ===============================
    // OTHER ERRORS
    // ===============================
    return Promise.reject(error.response?.data?.message || error.message);
  },
);
export default apiClient;
export { SECURITY_CONFIG, secureCookieManager };
