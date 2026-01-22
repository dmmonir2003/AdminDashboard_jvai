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
import React, { useEffect, useState } from "react";
import { Input, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import AuthLayout from "@/src/components/auth/AuthLayout";
import AuthForm from "@/src/components/auth/AuthForm";
import { authService } from "@/src/services/authService";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("resetEmail");
    if (savedEmail) setUserEmail(savedEmail);
  }, []);

  const handleLogin = async (values: any) => {
    setLoading(true);
    try {
      const response = await authService.login(values);
      if (response.access) {
        message.success("Login successful!");
        localStorage.removeItem("resetEmail"); // Cleanup
        router.push("/dashboard");
      }
    } catch (error: any) {
      message.error(error || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    {
      name: "email",
      label: "Email",
      initialValue: userEmail, // Pass the saved email here
      rules: [{ required: true, message: "Email required" }, { type: "email" }],
      component: (
        <Input
          prefix={<MailOutlined />}
          placeholder="Email"
          style={{ padding: "12px" }}
        />
      ),
    },
    {
      name: "password",
      label: "Password",
      rules: [{ required: true, message: "Password required" }],
      component: (
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Password"
          style={{ padding: "12px" }}
        />
      ),
    },
  ];

  return (
    <AuthLayout>
      <div className="max-w-md mx-auto mt-20 p-6">
        {/* The 'key' forces the form to re-render once userEmail is loaded */}
        <AuthForm
          key={userEmail}
          title="Sign in"
          onSubmit={handleLogin}
          fields={fields}
          loading={loading}
        />
      </div>
    </AuthLayout>
  );
}
