/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React from "react";
// import { Input } from "antd";
// import { MailOutlined, LockOutlined } from "@ant-design/icons";

// import AuthLayout from "@/src/components/auth/AuthLayout";
// import AuthForm from "@/src/components/auth/AuthForm";
// import { authService } from "@/src/api/services/authService";

// export default function LoginPage() {
//   const { login } = authService;

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
//     {
//       name: "password",
//       label: "Password",
//       rules: [{ required: true, message: "Password is required" }],
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
//           title="Sign in"
//           onSubmit={login}
//           buttonLabel="Sign in"
//           fields={fields}
//         />
//       </div>
//     </AuthLayout>
//   );
// }
"use client";
import React from "react";
import { Input, message } from "antd"; // Import message for feedback
// Import useRouter
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import AuthLayout from "@/src/components/auth/AuthLayout";
import AuthForm from "@/src/components/auth/AuthForm";
import { authService } from "@/src/api/services/authService";
import { useRouter } from "next/navigation";

// import { redirect } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  // Create a handler for the form submission
  const handleLogin = async (values: any) => {
    try {
      const response = await authService.login(values);

      if (response.access) {
        message.success("Login successful! Redirecting...");
        router.push("/dashboard");

        // Option A: Standard SPA redirect
        // redirect("/dashboard");

        // Option B: Full page refresh redirect (recommended if middleware
        // needs to detect the new cookie immediately)
        // window.location.href = "/dashboard";
      }
    } catch (error: any) {
      console.error("Login failed:", error);
      message.error(error || "Invalid email or password");
    }
  };

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
          prefix={<MailOutlined style={{ color: "#9ca3af" }} />}
          placeholder="Enter email"
          style={{ padding: "14px 12px" }}
        />
      ),
    },
    {
      name: "password",
      label: "Password",
      rules: [{ required: true, message: "Password is required" }],
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
          title="Sign in"
          onSubmit={handleLogin} // Use the new handler here
          buttonLabel="Sign in"
          fields={fields}
        />
      </div>
    </AuthLayout>
  );
}
