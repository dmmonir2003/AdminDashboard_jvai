// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { Spin } from "antd";

// export default function Home() {
//   const router = useRouter();

//   useEffect(() => {
//     // Redirect to dashboard or login based on auth status
//     const authToken = localStorage.getItem("authToken");
//     if (authToken) {
//       router.push("/dashboard");
//     } else {
//       router.push("/login");
//     }
//   }, [router]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <Spin size="large" />
//     </div>
//   );
// }

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken");

  if (token) {
    redirect("/dashboard");
  }

  redirect("/login");
}
