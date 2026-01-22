import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  // Changed "authToken" to "accessToken"
  const token = cookieStore.get("accessToken");

  if (token) {
    redirect("/dashboard");
  }

  redirect("/login");

  // This part is rarely reached but good for TS
  return null;
}
