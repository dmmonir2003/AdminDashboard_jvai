// /* eslint-disable @typescript-eslint/no-explicit-any */
// import axios, {
//   AxiosInstance,
//   InternalAxiosRequestConfig,
//   AxiosResponse,
//   AxiosError,
// } from "axios";
// import Cookies from "js-cookie";
// // import { API_ENDPOINTS } from "./endpoints";
// // import { authService } from "./services/authService";
// // Ensure this path is correct

// // Types for the refresh queue
// // interface PendingRequest {
// //   resolve: (token: string) => void;
// //   reject: (error: any) => void;
// // }

// // let isRefreshing = false;
// // let failedQueue: PendingRequest[] = [];

// // Process the queue after refresh is successful or failed
// // const processQueue = (error: any, token: string | null = null) => {
// //   failedQueue.forEach((prom) => {
// //     if (error) prom.reject(error);
// //     else prom.resolve(token!);
// //   });
// //   failedQueue = [];
// // };

// const apiClient: AxiosInstance = axios.create({
//   // baseURL: "http://10.10.13.21:8000/api",
//   baseURL: "https://ffm803lb-8000.inc1.devtunnels.ms/api", // process.env.NEXT_PUBLIC_API_URL
//   // timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // 1. Request Interceptor: Attach Token from Cookies
// apiClient.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     const token = Cookies.get("accessToken");
//     if (token && config.headers) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error: AxiosError) => Promise.reject(error),
// );

// // 2. Response Interceptor: Handle Data and Token Refresh
// // axiosInstance.ts
// apiClient.interceptors.response.use(
//   (response: AxiosResponse) => response.data as any,
//   async (error: AxiosError<any>) => {
//     // Ensure you return a rejected promise here so the 'catch' block in your pages works!
//     const errorMessage =
//       error.response?.data?.message || error.message || "Something went wrong";
//     return Promise.reject(errorMessage);
//   },
// );

// // apiClient.interceptors.response.use(
// //   (response: AxiosResponse) => response.data, // Direct data access
// //   async (error: AxiosError<any>) => {
// //     const originalRequest = error.config as InternalAxiosRequestConfig & {
// //       _retry?: boolean;
// //     };

// //     // Check if the error is 401 and not a retry
// //     if (error.response?.status === 401 && !originalRequest._retry) {
// //       // If the refresh token call itself fails, logout immediately
// //       if (originalRequest.url === API_ENDPOINTS.REFRESH_TOKEN) {
// //         authService.logout();
// //         return Promise.reject(error);
// //       }

// //       if (isRefreshing) {
// //         // If already refreshing, add request to queue
// //         return new Promise((resolve, reject) => {
// //           failedQueue.push({ resolve, reject });
// //         })
// //           .then((token) => {
// //             originalRequest.headers!.Authorization = `Bearer ${token}`;
// //             return apiClient(originalRequest);
// //           })
// //           .catch((err) => Promise.reject(err));
// //       }

// //       originalRequest._retry = true;
// //       isRefreshing = true;

// //       try {
// //         // Attempt to refresh the token
// //         const newAccessToken = await authService.refreshToken();

// //         processQueue(null, newAccessToken);
// //         isRefreshing = false;

// //         // Retry the original request with the new token
// //         originalRequest.headers!.Authorization = `Bearer ${newAccessToken}`;
// //         return apiClient(originalRequest);
// //       } catch (refreshError) {
// //         processQueue(refreshError, null);
// //         isRefreshing = false;
// //         authService.logout();
// //         return Promise.reject(refreshError);
// //       }
// //     }

// //     // Default error handling
// //     const customError =
// //       error.response?.data?.message || "An unexpected error occurred";
// //     return Promise.reject(customError);
// //   },
// // );

// export default apiClient;

/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import Cookies from "js-cookie";

// Types for the refresh queue
interface PendingRequest {
  resolve: (token: string) => void;
  reject: (error: any) => void;
}

let isRefreshing = false;
let failedQueue: PendingRequest[] = [];

// Process the queue after refresh is successful or failed
const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token!);
  });
  failedQueue = [];
};

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://ffm803lb-8000.inc1.devtunnels.ms/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 1. Request Interceptor: Attach Token from Cookies
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get("accessToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// 2. Response Interceptor: Handle Data and Token Refresh
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response.data as any,
  async (error: AxiosError<any>) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // Check if the error is 401 and not a retry
    if (error.response?.status === 401 && !originalRequest._retry) {
      // If the refresh token call itself fails, logout immediately
      if (originalRequest.url?.includes("/token/refresh/")) {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(error);
      }

      if (isRefreshing) {
        // If already refreshing, add request to queue
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
        // Attempt to refresh the token
        const refreshToken = Cookies.get("refreshToken");
        if (!refreshToken) throw new Error("No refresh token available");

        const response = await axios.post(
          "https://ffm803lb-8000.inc1.devtunnels.ms/api/token/refresh/",
          { refresh: refreshToken },
          {
            headers: { "Content-Type": "application/json" },
          },
        );

        const newAccessToken = response.data.access;

        Cookies.set("accessToken", newAccessToken, {
          expires: 1 / 24,
          path: "/",
        });

        processQueue(null, newAccessToken);
        isRefreshing = false;

        // Retry the original request with the new token
        originalRequest.headers!.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        isRefreshing = false;
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    // Default error handling
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong";
    return Promise.reject(errorMessage);
  },
);

export default apiClient;
