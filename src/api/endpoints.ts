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
  AUCTIONS_DETAIL: "/admin/auctions/detail/",
  DELETE_AUCTION: "/admin/auctions/delete/",
  END_AUCTION: "/admin/auctions/end/",
  // Add this line for the specific update path
  UPDATE_AUCTION: (id: number) => `/admin/auctions/${id}/update/`,
  // AUCTION_DETAIL: "/admin/auctions/detail/",

  ADMIN_COIN_PACKAGES_LIST: "/admin/coin-packages/",
  ADMIN_COIN_PACKAGES_CREATE: "/admin/coin-packages/",
  ADMIN_COIN_PACKAGES_EDIT: "/admin/coin-packages/edit/",
  ADMIN_COIN_PACKAGES_TOGGLE: "/admin/coin-packages/toggle/",
  // ADMIN_COIN_PACKAGES_DELETE: "/admin/coin-packages/delete/", // if implemented

  // ─── Overview / Dashboard ────────────────────────────────────────────────────
  STATS_OVERVIEW: "/admin/overview/",
  CHART_USER_PARTICIPATION_YEARLY: "/admin/chart/user-participation-yearly/",
  CHART_REVENUE_AUCTIONS_YEARLY: "/admin/chart/revenue-auctions-yearly/",
  TOP_AUCTIONS: "/admin/top-auctions/",

  //users
  // users
  ADMIN_USERS: "/admin/users/",
  ADMIN_USER_DETAILS: "/admin/users/details/",
  ADMIN_USER_HISTORY: "/admin/users/history/",
  ADMIN_USER_TRANSACTIONS: "/admin/users/transactions/",
  ADMIN_USER_TOGGLE_STATUS: "/admin/users/toggle-status/",

  PRODUCTS: "/products",
  PRODUCT_DETAILS: (id: string) => `/products/${id}`,
} as const;
