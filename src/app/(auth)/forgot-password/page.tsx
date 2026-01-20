"use client";

import { Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useAuth } from "@/src/hooks/useAuth";
import AuthLayout from "@/src/components/auth/AuthLayout";
import AuthForm from "@/src/components/auth/AuthForm";

export default function ForgotPasswordPage() {
  const { forgotPassword } = useAuth();

  const fields = [
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
          placeholder="Enter email"
          size="large"
        />
      ),
    },
  ];

  return (
    <AuthLayout>
      <div className="max-w-md mx-auto mt-20 p-6 text-center">
        <p className="text-gray-400 mb-4">Enter your email address</p>
        <AuthForm
          title="Forgot password"
          onSubmit={forgotPassword}
          buttonLabel="Continue"
          fields={fields}
        />
        <div className="mt-6">
          <Link href="/login" className="text-blue-500 font-semibold">
            Back to login
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
