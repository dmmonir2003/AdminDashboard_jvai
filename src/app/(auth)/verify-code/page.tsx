"use client";

import React from "react";
import { Input } from "antd";
import { useAuth } from "@/src/hooks/useAuth";
import AuthLayout from "@/src/components/auth/AuthLayout";
import AuthForm from "@/src/components/auth/AuthForm";
export default function VerifyCodePage() {
  const { verifyCode } = useAuth();
  // Get email from localStorage to show in the UI
  const email =
    typeof window !== "undefined"
      ? localStorage.getItem("resetEmail")
      : "your email";

  const fields = [
    {
      name: "code",
      label: "", // Label is handled by the description text above
      rules: [{ required: true, message: "Please enter the 5-digit code" }],
      component: (
        <Input.OTP
          length={5}
          size="large"
          className="w-full flex justify-between"
          formatter={(str) => str.toUpperCase()}
        />
      ),
    },
  ];

  return (
    <AuthLayout>
      <div className="max-w-md mx-auto mt-20 p-6 text-center">
        <p className="text-gray-400 mb-6">
          We sent a 5-digit code to <span className="font-medium">{email}</span>
        </p>
        <AuthForm
          title="Verification"
          onSubmit={verifyCode}
          buttonLabel="Continue"
          fields={fields}
        />
      </div>
    </AuthLayout>
  );
}
