/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { Input } from "antd";
// import { MailOutlined } from "@ant-design/icons";

// import { useAuth } from "@/src/hooks/useAuth";
// import AuthLayout from "@/src/components/auth/AuthLayout";
// import AuthForm from "@/src/components/auth/AuthForm";

// export default function ForgotPasswordPage() {
//   const { forgotPassword } = useAuth();

//   const fields = [
//     {
//       name: "email",
//       label: "Email",
//       rules: [
//         { required: true, message: "Email is required" },
//         { type: "email", message: "Please enter a valid email" },
//       ],
//       component: (
//         <Input
//           prefix={<MailOutlined style={{ color: "#9ca3af" }} />}
//           placeholder="Enter email"
//           style={{ padding: "14px 12px" }}
//         />
//       ),
//     },
//   ];

//   return (
//     <AuthLayout>
//       <div className="max-w-md mx-auto mt-20 p-6 text-center">
//         <p className="text-gray-400 mb-4">Enter your email address</p>
//         <AuthForm
//           title="Forgot password"
//           onSubmit={forgotPassword}
//           buttonLabel="Continue"
//           fields={fields}
//         />
//         {/* <div className="mt-6">
//           <Link href="/login" className="text-blue-500 font-semibold">
//             Back to login
//           </Link>
//         </div> */}
//       </div>
//     </AuthLayout>
//   );
// }
"use client";
import React, { useState } from "react";
import { Input, message } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import AuthLayout from "@/src/components/auth/AuthLayout";
import AuthForm from "@/src/components/auth/AuthForm";
import { authService } from "@/src/services/authService";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (values: { email: string }) => {
    setLoading(true);
    try {
      const response = await authService.forgotPassword(values.email);

      // Step 1: Save to localStorage
      localStorage.setItem("resetEmail", values.email);
      localStorage.setItem("temp_token", response.temp_token);
      localStorage.setItem("masked_email", response.masked_email);

      message.success("OTP sent to your email!");

      // Step 2: Use router.push
      router.push("/verify-code");
    } catch (error: any) {
      message.error(error || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    {
      name: "email",
      label: "Email",
      rules: [
        { required: true, message: "Email is required" },
        { type: "email" },
      ],
      component: (
        <Input
          prefix={<MailOutlined />}
          placeholder="Enter email"
          style={{ padding: "12px" }}
        />
      ),
    },
  ];

  return (
    <AuthLayout>
      <div className="max-w-md mx-auto mt-20 p-6 text-center">
        <p className="text-gray-400 mb-4">Enter email to receive code</p>
        <AuthForm
          title="Forgot password"
          onSubmit={handleForgotPassword}
          buttonLabel="Continue"
          fields={fields}
          loading={loading}
        />
      </div>
    </AuthLayout>
  );
}
