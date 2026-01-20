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
    /* Screen background */
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Main Card */}
      <div
        className="flex bg-white overflow-hidden"
        style={{
          width: "1280px",
          height: "832px",
          borderRadius: "20px",
        }}
      >
        {/* LEFT IMAGE */}
        <div className="relative w-[630px] h-full">
          <Image
            src={authImage}
            alt="Auth Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT FORM AREA */}
        <div className="flex-1 flex items-center justify-center">
          {/* FORM BOX */}
          <div
            style={{
              width: "420px",
              height: "467px",
            }}
            className="flex items-center"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
