import type { Metadata } from "next";
import "./globals.css";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App as AntdApp } from "antd";

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
      <body suppressHydrationWarning>
        <AntdRegistry>
          <AntdApp>{children}</AntdApp>
        </AntdRegistry>
      </body>
    </html>
  );
}
