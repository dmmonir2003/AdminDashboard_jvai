export const API_ENDPOINTS = {
  // Auth
  LOGIN: "/auth/login/",
  REGISTER: "/auth/register/",
  REFRESH_TOKEN: "/token/refresh/",
  OTP_VERIFY: "/auth/verify-reset-otp/",
  PASSWORD_RESET: "/auth/reset-password/",
  LOGOUT: "/auth/logout/",
  FORGOT_PASSWORD: "/auth/forgot-password/",

  // User
  ME: "/users/me",
  UPDATE_PROFILE: "/users/update",

  // Resources (Example)
  PRODUCTS: "/products",
  PRODUCT_DETAILS: (id: string) => `/products/${id}`,
} as const;
