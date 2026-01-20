// "use client";

// import { Input } from "antd";
// import { MailOutlined } from "@ant-design/icons";

// import Link from "next/link";
// import AuthLayout from "@/src/components/layout/auth/AuthLayout";
// import AuthForm from "@/src/components/layout/auth/AuthForm";
// import { useAuth } from "@/src/hooks/useAuth";

// export default function LoginPage() {
//   const { login } = useAuth();

//   return (
//     <AuthLayout>
//       <div className="">
//         <AuthForm
//           title="Sign in"
//           onSubmit={login}
//           buttonLabel="Sign in"
//           fields={[
//             {
//               name: "email",
//               label: "Email",
//               rules: [
//                 { required: true, message: "Email is required" },
//                 { type: "email", message: "Please enter a valid email" },
//               ],
//               component: (
//                 <Input
//                   prefix={<MailOutlined />}
//                   placeholder="Enter your email"
//                   size="large"
//                 />
//               ),
//             },
//           ]}
//         />

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Remember your password?{" "}
//             <Link
//               href="/auth/login"
//               className="text-blue-500 hover:text-blue-600 font-semibold"
//             >
//               Back to login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </AuthLayout>
//   );
// }

"use client";

import React from "react";
import { Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useAuth } from "@/src/hooks/useAuth";
import AuthLayout from "@/src/components/auth/AuthLayout";
import AuthForm from "@/src/components/auth/AuthForm";

export default function LoginPage() {
  const { login } = useAuth();

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
    {
      name: "password",
      label: "Password",
      rules: [{ required: true, message: "Password is required" }],
      component: (
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Enter password"
          size="large"
        />
      ),
    },
  ];

  return (
    <AuthLayout>
      <div className="max-w-md mx-auto mt-20 p-6">
        <AuthForm
          title="Sign in"
          onSubmit={login}
          buttonLabel="Sign in"
          fields={fields}
        />
        <div className="mt-4 text-right">
          <Link
            href="/forgot-password"
            title="Forgot password?"
            className="text-gray-400"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
