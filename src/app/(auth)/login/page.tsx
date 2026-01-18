"use client";

import { Input } from "antd";
import { MailOutlined } from "@ant-design/icons";

import Link from "next/link";
import AuthLayout from "@/src/components/layout/auth/AuthLayout";
import AuthForm from "@/src/components/layout/auth/AuthForm";
import { useAuth } from "@/src/hooks/useAuth";

export default function ForgotPasswordPage() {
  const { forgotPassword } = useAuth();

  return (
    <AuthLayout>
      <div>
        <AuthForm
          title="Forgot Password"
          onSubmit={forgotPassword}
          buttonLabel="Send Code"
          fields={[
            {
              name: "email",
              label: "Email",
              rules: [
                { required: true, message: "Email is required" },
                { type: "email", message: "Please enter a valid email" },
              ],
              component: (
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Enter your email"
                  size="large"
                />
              ),
            },
          ]}
        />

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{" "}
            <Link
              href="/auth/login"
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
