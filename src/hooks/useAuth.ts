/* eslint-disable @typescript-eslint/no-explicit-any */

import { message } from "antd";

import { useRouter } from "next/navigation";
import { authService } from "../services/authService";

// interface AuthFlowData {
//   type: "login" | "forgot-password" | "verify-code" | "reset-password";
//   data: Record<string, any>;
// }

export const useAuth = () => {
  const router = useRouter();
  const login = async (values: any) => {
    try {
      // 1. Call the actual authService
      await authService.login(values);

      message.success("Login successful");

      // 2. Redirect to dashboard
      // Note: authService already handles cookie storage
      router.push("/dashboard");
    } catch (error: any) {
      // error here will be the "customError" string from your apiClient interceptor
      message.error(typeof error === "string" ? error : "Login failed");
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
