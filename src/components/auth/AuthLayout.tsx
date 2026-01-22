"use client";

import React from "react";
import Image from "next/image";
import authImage from "../../../public/images/auth_image.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* Full screen container */
    <div className="min-h-screen flex w-full bg-white">
      {/* LEFT HALF - IMAGE CONTAINER */}
      {/* Added w-1/2 to ensure it takes exactly half the width */}
      <div
        className="relative   md:w-1/2 h-screen"
        style={{ width: "50%", height: "100vh" }}
      >
        <Image
          src={authImage}
          alt="Auth Image"
          fill
          priority
          style={{ objectFit: "cover" }} // Ensures the image covers the area without stretching
        />
      </div>

      {/* RIGHT HALF - FORM AREA */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 lg:px-8 z-10 bg-white">
        {/* Constraint container for the form */}
        <div className="w-full max-w-112.5">{children}</div>
      </div>
    </div>
  );
}
