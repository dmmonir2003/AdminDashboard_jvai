// "use client";

// import React from "react";
// import Image from "next/image";
// import authImage from "../../../public/images/auth_image.png";

// export default function AuthLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     /* Screen background */
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       {/* Main Card */}
//       <div
//         className="flex bg-white overflow-hidden"
//         style={{
//           width: "1280px",
//           height: "832px",
//           borderRadius: "20px",
//         }}
//       >
//         {/* LEFT IMAGE */}
//         <div className="relative w-[630px] h-full">
//           <Image
//             src={authImage}
//             alt="Auth Image"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* RIGHT FORM AREA */}
//         <div className="flex-1 flex items-center justify-center">
//           {/* FORM BOX */}
//           <div
//             style={{
//               width: "420px",
//               height: "467px",
//             }}
//             className="flex items-center"
//           >
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
        className="relative  lg:block lg:w-1/2 h-screen"
        style={{ width: "100%", height: "100vh" }}
      >
        <Image
          src={authImage}
          alt="Auth Image"
          fill // This tells the image to fill the parent container
          priority
          style={{ objectFit: "cover" }} // Ensures the image covers the area without stretching
          sizes="50vw" // Optimization for Next.js image loading
        />
      </div>

      {/* RIGHT HALF - FORM AREA */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 lg:px-8 z-10 bg-white">
        {/* Constraint container for the form */}
        <div className="w-full max-w-[450px]">{children}</div>
      </div>
    </div>
  );
}
