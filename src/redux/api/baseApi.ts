// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   baseUrl:
//     process.env.NEXT_PUBLIC_API_URL ||
//     "http://localhost:3000/api" ||
//     "https://admin-dashboard-jvai.vercel.app",
//   prepareHeaders: (headers) => {
//     const token =
//       typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery,
//   endpoints: () => ({}),
//   tagTypes: ["Auth", "User", "Dashboard"],
// });

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",

//   // 🔐 This sends HTTP-only cookies automatically
//   credentials: "include",

//   // ✅ Only for NON-auth metadata headers
//   prepareHeaders: (headers) => {
//     headers.set("x-client", "web");
//     headers.set("x-app-version", "1.0.0");
//     return headers;
//   },
// });

const baseQuery = fetchBaseQuery({
  // Ensure the production URL is the priority
  // baseUrl:
  //   process.env.NEXT_PUBLIC_API_URL ||
  //   "https://admin-dashboard-jvai.vercel.app/api",
  // prepareHeaders: (headers) => {
  //   // Check if token exists in localStorage (Client-side only)
  //   const token =
  //     typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
  //   if (token) {
  //     headers.set("authorization", `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: ["Auth", "User", "Dashboard"],
  endpoints: () => ({}),
});
