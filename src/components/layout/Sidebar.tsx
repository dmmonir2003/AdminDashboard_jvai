"use client";

import React from "react";
import { Layout, Menu, ConfigProvider } from "antd";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // 1. Import usePathname
import logo from "../../../public/images/Luqtaa_logo-removebg-preview 1.svg";

// 2. Import diverse Lucide icons
import {
  LayoutDashboard,
  Gavel,
  Package,
  Layers,
  Users,
  Coins,
  ShoppingCart,
} from "lucide-react";

const { Sider } = Layout;

export default function Sidebar({
  collapsed = false,
}: {
  collapsed?: boolean;
}) {
  const pathname = usePathname(); // 3. Get the current URL path

  const menuItems = [
    {
      key: "/dashboard",
      icon: <LayoutDashboard size={18} />,
      label: <Link href="/dashboard">Overview</Link>,
    },
    {
      key: "/auctions",
      icon: <Gavel size={18} />,
      label: <Link href="/auctions">Auctions</Link>,
    },
    {
      key: "/products",
      icon: <Package size={18} />,
      label: <Link href="/products">Products</Link>,
    },
    {
      key: "/categories",
      icon: <Layers size={18} />,
      label: <Link href="/categories">Categories</Link>,
    },
    {
      key: "/users",
      icon: <Users size={18} />,
      label: <Link href="/users">Users</Link>,
    },
    {
      key: "/coins",
      icon: <Coins size={18} />,
      label: <Link href="/coins">Coins</Link>,
    },
    {
      key: "/orders",
      icon: <ShoppingCart size={18} />,
      label: <Link href="/orders">Orders</Link>,
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={200}
      style={{
        background: "#ffffff",
        height: "100vh",
        position: "fixed",
        borderRight: "1px solid #f0f0f0",
      }}
    >
      <div
        style={{ padding: "16px", display: "flex", justifyContent: "center" }}
      >
        <Image
          src={logo}
          alt="Logo"
          width={collapsed ? 40 : 150}
          height={collapsed ? 40 : 100}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedBg: "#0060DE",
              itemSelectedColor: "#ffffff",
              itemHoverBg: "#0060DE",
              itemHoverColor: "#ffffff",
              itemColor: "#000000",
              // Ensure icons also turn white when selected
            },
          },
        }}
      >
        <Menu
          mode="inline"
          // 4. Use selectedKeys (controlled) instead of defaultSelectedKeys
          selectedKeys={[pathname]}
          items={menuItems}
          style={{ borderRight: 0 }}
        />
      </ConfigProvider>
    </Sider>
  );
}
