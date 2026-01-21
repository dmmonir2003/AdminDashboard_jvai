/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

import { useAuth } from "@/src/hooks/useAuth";
import AuthLayout from "@/src/components/auth/AuthLayout";
import AuthForm from "@/src/components/auth/AuthForm";

export default function ResetPasswordPage() {
  const { resetPassword } = useAuth();

  const fields = [
    {
      name: "password",
      label: "Password",
      rules: [{ required: true, message: "Password is required" }],
      component: (
        <Input.Password
          prefix={<LockOutlined style={{ color: "#9ca3af" }} />}
          placeholder="Enter password"
          size="large"
          style={{ padding: "14px 12px" }}
        />
      ),
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      dependencies: ["password"],
      rules: [
        { required: true, message: "Confirm your password" },
        ({ getFieldValue }: any) => ({
          validator(_: any, value: any) {
            if (!value || getFieldValue("password") === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("Passwords do not match!"));
          },
        }),
      ],
      component: (
        <Input.Password
          prefix={<LockOutlined style={{ color: "#9ca3af" }} />}
          placeholder="Enter password"
          style={{ padding: "14px 12px" }}
        />
      ),
    },
  ];

  return (
    <AuthLayout>
      <div className="max-w-md mx-auto mt-20 p-6">
        <AuthForm
          title="Create new password"
          onSubmit={resetPassword}
          buttonLabel="Continue"
          fields={fields}
        />
      </div>
    </AuthLayout>
  );
}
