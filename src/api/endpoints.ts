export const API_ENDPOINTS = {
  // Auth
  LOGIN: "/auth/login/",
  REGISTER: "/auth/register/",
  REFRESH_TOKEN: "/token/refresh/",
  OTP_VERIFY: "/auth/verify-reset-otp/",
  PASSWORD_RESET: "/auth/reset-password/",
  PASSWORD_CHANGE: "/admin/profile/change-password/",
  LOGOUT: "/auth/logout/",
  FORGOT_PASSWORD: "/auth/forgot-password/",

  ME: "/admin/profile/me/",
  UPDATE_PROFILE: "/admin/profile/update/",

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

  ADMIN_COIN_STATS: "/admin/coin-stats/",
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

  // Products (Admin side)
  PRODUCTS_LIST: "/products/prod", // GET with ?product_type=physical|digital
  PRODUCT_CREATE: "/products/prod", // POST (multipart/form-data)
  PRODUCT_DETAIL: (id: number | string) => `/products/${id}`, // GET
  PRODUCT_UPDATE: (id: number | string) => `/products/${id}/`, // PATCH (multipart/form-data)
  PRODUCT_DELETE: (id: number | string) => `/products/${id}/`, // DELETE

  REVIEW_PRODUCT: "/admin/products/names/",
  // Shop Orders (Admin)
  ADMIN_ORDERS: "/admin/orders/",
  ADMIN_ORDER_DETAIL: (id: number | string) => `/admin/orders/${id}/`,
  ADMIN_MARK_ORDER_DELIVERED: (id: number | string) =>
    `/admin/orders/${id}/mark-delivered/`,

  // Reviews
  ADMIN_REVIEWS: "/admin/reviews/",
  ADMIN_REVIEW_DETAIL: (id: number | string) => `/admin/reviews/${id}/`,
  ADMIN_REVIEW_DELETE: (id: number | string) => `/admin/reviews/${id}/delete/`,

  // Announcements
  ADMIN_ANNOUNCEMENTS_LIST: "/admin/announcements/list/",
  ADMIN_ANNOUNCEMENT_CREATE: "/admin/announcements/",
  ADMIN_ANNOUNCEMENT_DELETE: (id: number | string) =>
    `/admin/announcements/${id}/delete/`,
  // Auction Orders (Admin)
  ADMIN_AUCTION_ORDERS: "/winner-claim/auction-orders/",
  ADMIN_AUCTION_ORDER_DETAIL: (id: number | string) =>
    `/winner-claim/auction-orders/${id}/`,
  ADMIN_MARK_AUCTION_DELIVERED: (id: number | string) =>
    `/winner-claim/auction-orders/${id}/mark-delivered/`,
  // User Search for Specific Announcements
  ADMIN_USER_SEARCH: "/admin/users/search/",
} as const;
