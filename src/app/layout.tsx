import type { Metadata } from "next";
import "./globals.css";
import Providers from "../redux/Providers";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Professional admin dashboard application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
