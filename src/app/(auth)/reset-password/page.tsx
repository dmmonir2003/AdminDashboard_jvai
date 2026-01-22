/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React from "react";
// import { Input } from "antd";
// import { LockOutlined } from "@ant-design/icons";

// import { useAuth } from "@/src/hooks/useAuth";
// import AuthLayout from "@/src/components/auth/AuthLayout";
// import AuthForm from "@/src/components/auth/AuthForm";

// export default function ResetPasswordPage() {
//   const { resetPassword } = useAuth();

//   const fields = [
//     {
//       name: "password",
//       label: "Password",
//       rules: [{ required: true, message: "Password is required" }],
//       component: (
//         <Input.Password
//           prefix={<LockOutlined style={{ color: "#9ca3af" }} />}
//           placeholder="Enter password"
//           size="large"
//           style={{ padding: "14px 12px" }}
//         />
//       ),
//     },
//     {
//       name: "confirmPassword",
//       label: "Confirm Password",
//       dependencies: ["password"],
//       rules: [
//         { required: true, message: "Confirm your password" },
//         ({ getFieldValue }: any) => ({
//           validator(_: any, value: any) {
//             if (!value || getFieldValue("password") === value) {
//               return Promise.resolve();
//             }
//             return Promise.reject(new Error("Passwords do not match!"));
//           },
//         }),
//       ],
//       component: (
//         <Input.Password
//           prefix={<LockOutlined style={{ color: "#9ca3af" }} />}
//           placeholder="Enter password"
//           style={{ padding: "14px 12px" }}
//         />
//       ),
//     },
//   ];

//   return (
//     <AuthLayout>
//       <div className="max-w-md mx-auto mt-20 p-6">
//         <AuthForm
//           title="Create new password"
//           onSubmit={resetPassword}
//           buttonLabel="Continue"
//           fields={fields}
//         />
//       </div>
//     </AuthLayout>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { Input, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import AuthLayout from "@/src/components/auth/AuthLayout";
import AuthForm from "@/src/components/auth/AuthForm";
import { authService } from "@/src/api/services/authService";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Basic security: if no token exists, they shouldn't be here
    const token = localStorage.getItem("temp_token");
    if (!token) {
      router.replace("/forgot-password");
    }
  }, [router]);

  const handleReset = async (values: any) => {
    const token = localStorage.getItem("temp_token");

    if (!token) {
      message.error("Session expired. Please start over.");
      return router.push("/forgot-password");
    }

    setLoading(true);
    try {
      // Sending exact body format required by your backend
      await authService.resetPassword({
        temp_token: token,
        new_password: values.password,
        new_password_confirm: values.confirmPassword,
      });

      message.success("Password updated successfully!");

      // Cleanup sensitive data
      localStorage.removeItem("temp_token");
      localStorage.removeItem("masked_email");
      // Keep resetEmail if you want to auto-fill the login page

      router.push("/login");
    } catch (error: any) {
      message.error(error || "Reset failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    {
      name: "password",
      label: "New Password",
      rules: [{ required: true, message: "Password is required" }],
      component: (
        <Input.Password
          prefix={<LockOutlined style={{ color: "#9ca3af" }} />}
          placeholder="Enter new password"
          style={{ padding: "14px 12px" }}
        />
      ),
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      dependencies: ["password"],
      rules: [
        { required: true, message: "Please confirm your password" },
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
          placeholder="Confirm new password"
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
          onSubmit={handleReset}
          buttonLabel="Update Password"
          fields={fields}
          loading={loading}
        />
      </div>
    </AuthLayout>
  );
}
