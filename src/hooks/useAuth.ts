/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { message } from "antd";

// interface AuthFlowData {
//   type: "login" | "forgot-password" | "verify-code" | "reset-password";
//   data: Record<string, any>;
// }

export const useAuth = () => {
  const router = useRouter();

  const login = async (values: any) => {
    try {
      // TODO: Replace with actual API call
      console.log("Logging in with:", values);

      // localStorage.setItem("authToken", "mock-token");
      // localStorage.setItem("userEmail", values.email);

      document.cookie = "authToken=test123; path=/; max-age=86400";
      window.location.href = "/dashboard";

      message.success("Login successful");
      router.push("/dashboard");
    } catch (error) {
      message.error("Login failed");
      console.error(error);
    }
  };

  const forgotPassword = async (values: any) => {
    try {
      // TODO: Replace with actual API call
      console.log("Forgot password for:", values.email);

      localStorage.setItem("resetEmail", values.email);
      message.success("Verification code sent to your email");
      router.push("/auth/verify-code");
    } catch (error) {
      message.error("Failed to send verification code");
      console.error(error);
    }
  };

  const verifyCode = async (values: any) => {
    try {
      // TODO: Replace with actual API call
      console.log("Verifying code:", values.code);

      localStorage.setItem("verificationCode", values.code);
      message.success("Code verified successfully");
      router.push("/auth/reset-password");
    } catch (error) {
      message.error("Invalid verification code");
      console.error(error);
    }
  };

  const resetPassword = async (values: any) => {
    try {
      // TODO: Replace with actual API call
      console.log("Resetting password");

      if (values.password !== values.confirmPassword) {
        message.error("Passwords do not match");
        return;
      }

      localStorage.removeItem("resetEmail");
      localStorage.removeItem("verificationCode");

      message.success("Password reset successfully");
      router.push("/auth/login");
    } catch (error) {
      message.error("Failed to reset password");
      console.error(error);
    }
  };

  return { login, forgotPassword, verifyCode, resetPassword };
};
