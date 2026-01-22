/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React from "react";
// import { Input } from "antd";
// import { useAuth } from "@/src/hooks/useAuth";
// import AuthLayout from "@/src/components/auth/AuthLayout";
// import AuthForm from "@/src/components/auth/AuthForm";
// export default function VerifyCodePage() {
//   const { verifyCode } = useAuth();
//   // Get email from localStorage to show in the UI
//   const email =
//     typeof window !== "undefined"
//       ? localStorage.getItem("resetEmail")
//       : "your email";

//   const fields = [
//     {
//       name: "code",
//       label: "", // Label is handled by the description text above
//       rules: [{ required: true, message: "Please enter the 5-digit code" }],
//       component: (
//         <Input.OTP
//           length={5}
//           size="large"
//           className="w-full flex justify-between"
//           formatter={(str) => str.toUpperCase()}
//         />
//       ),
//     },
//   ];

//   return (
//     <AuthLayout>
//       <div className="max-w-md mx-auto mt-20 p-6 text-center">
//         <p className="text-gray-400 mb-6">
//           We sent a 5-digit code to <span className="font-medium">{email}</span>
//         </p>
//         <AuthForm
//           title="Verification"
//           onSubmit={verifyCode}
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
import { useRouter } from "next/navigation";
import AuthLayout from "@/src/components/auth/AuthLayout";
import AuthForm from "@/src/components/auth/AuthForm";
import { authService } from "@/src/api/services/authService";

export default function VerifyCodePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [maskedEmail, setMaskedEmail] = useState("");
  const [isChecking, setIsChecking] = useState(true); // Added a checking state

  useEffect(() => {
    // Check for token safely
    const token = localStorage.getItem("temp_token");
    const email = localStorage.getItem("masked_email");

    if (!token) {
      // If no token, redirect back
      router.replace("/forgot-password");
    } else {
      setMaskedEmail(email || "your email");
      setIsChecking(false); // Finished checking, show the form
    }
  }, [router]);

  const handleVerify = async (values: { otp: string }) => {
    const token = localStorage.getItem("temp_token");
    if (!token) {
      message.error("Session expired. Please try again.");
      return router.push("/forgot-password");
    }

    setLoading(true);
    try {
      await authService.verifyOtp(token, values.otp);
      localStorage.setItem("otp_verified", values.otp);
      message.success("OTP Verified!");
      router.push("/reset-password");
    } catch (error: any) {
      message.error(error || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    {
      name: "otp",
      label: "",
      rules: [{ required: true, message: "Code required" }],
      component: <Input.OTP length={6} size="large" />,
    },
  ];

  // Prevent "flicker" where the form shows then disappears
  if (isChecking) return null;

  return (
    <AuthLayout>
      <div className="max-w-md mx-auto mt-20 p-6 text-center">
        <p className="text-gray-400 mb-6">Code sent to: {maskedEmail}</p>
        <AuthForm
          title="Verification"
          onSubmit={handleVerify}
          buttonLabel="Continue"
          fields={fields}
          loading={loading}
        />
      </div>
    </AuthLayout>
  );
}
