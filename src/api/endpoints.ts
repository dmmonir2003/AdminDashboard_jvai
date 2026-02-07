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
  CREATE_CATEGORY: "/admin/categories/",
  EDIT_CATEGORY: "/admin/categories/edit/",
  TOGGLE_CATEGORY: "/admin/categories/toggle-active/",
  DELETE_CATEGORY: "/admin/categories/delete/",

  // auctions
  AUCTIONS: "/admin/auctions/",
  DELETE_AUCTION: "/admin/auctions/delete/",
  END_AUCTION: "/admin/auctions/end/",
  // Add this line for the specific update path
  UPDATE_AUCTION: (id: number) => `/admin/auctions/${id}/update/`,
  // AUCTION_DETAIL: "/admin/auctions/detail/",

  PRODUCTS: "/products",
  PRODUCT_DETAILS: (id: string) => `/products/${id}`,
} as const;
