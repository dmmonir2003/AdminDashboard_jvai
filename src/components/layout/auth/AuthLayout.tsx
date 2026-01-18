"use client";

import React from "react";

import Image from "next/image";
import authImage from "@/public/images/auth_image.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="flex">
        <div className="hidden lg:flex justify-center">
          <Image
            height={832}
            width={630}
            src={authImage || "/placeholder.svg"}
            alt="Auth"
            className="object-cover rounded-l-lg"
          />
        </div>

        <div className="">{children}</div>
      </div>
    </div>
  );
}
