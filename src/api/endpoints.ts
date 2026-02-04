export const API_ENDPOINTS = {
  // Auth
  LOGIN: "/auth/login/",
  REGISTER: "/auth/register/",
  REFRESH_TOKEN: "/token/refresh/",
  OTP_VERIFY: "/auth/verify-reset-otp/",
  PASSWORD_RESET: "/auth/reset-password/",
  LOGOUT: "/auth/logout/",
  FORGOT_PASSWORD: "/auth/forgot-password/",

  ME: "/users/me",
  UPDATE_PROFILE: "/users/update",

  // categories
  GET_CATEGORIES: "/admin/categories/",
  CREATE_CATEGORY: "/admin/categories",
  EDIT_CATEGORY: "/admin/categories/edit/",
  DELETE_CATEGORY: "/admin/categories/delete/",

  AUCTIONS: "/admin/auctions/",
  // AUCTION_DETAIL: "/admin/auctions/detail/",

  PRODUCTS: "/products",
  PRODUCT_DETAILS: (id: string) => `/products/${id}`,
} as const;
