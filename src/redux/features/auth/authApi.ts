/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ user: any }, { email: string; password: string }>(
      {
        query: (data) => ({
          url: "/auth/login",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Auth"],
      },
    ),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),

    forgotPassword: builder.mutation<void, { email: string }>({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),

    verifyCode: builder.mutation<void, { code: string }>({
      query: (data) => ({
        url: "/auth/verify-code",
        method: "POST",
        body: data,
      }),
    }),

    resetPassword: builder.mutation<void, { token: string; password: string }>({
      query: ({ token, password }) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: { password },
        headers: {
          Authorization: `Bearer ${token}`, // ✅ TEMP token
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useVerifyCodeMutation,
  useResetPasswordMutation,
} = authApi;
