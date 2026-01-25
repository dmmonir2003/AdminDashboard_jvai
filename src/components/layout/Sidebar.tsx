// "use client";

// import React from "react";
// import { Layout, Menu, ConfigProvider } from "antd";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation"; // 1. Import usePathname
// import logo from "../../../public/images/Luqtaa_logo-removebg-preview 1.svg";

// // 2. Import diverse Lucide icons
// import {
//   LayoutDashboard,
//   Gavel,
//   Package,
//   Layers,
//   Users,
//   Coins,
//   ShoppingCart,
// } from "lucide-react";

// const { Sider } = Layout;

// export default function Sidebar({
//   collapsed = false,
// }: {
//   collapsed?: boolean;
// }) {
//   const pathname = usePathname(); // 3. Get the current URL path

//   const menuItems = [
//     {
//       key: "/dashboard",
//       icon: <LayoutDashboard size={18} />,
//       label: <Link href="/dashboard">Overview</Link>,
//     },
//     {
//       key: "/auctions",
//       icon: <Gavel size={18} />,
//       label: <Link href="/auctions">Auctions</Link>,
//     },
//     {
//       key: "/products",
//       icon: <Package size={18} />,
//       label: <Link href="/products">Products</Link>,
//     },
//     {
//       key: "/categories",
//       icon: <Layers size={18} />,
//       label: <Link href="/categories">Categories</Link>,
//     },
//     {
//       key: "/users",
//       icon: <Users size={18} />,
//       label: <Link href="/users">Users</Link>,
//     },
//     {
//       key: "/coins",
//       icon: <Coins size={18} />,
//       label: <Link href="/coins">Coins</Link>,
//     },
//     {
//       key: "/orders",
//       icon: <ShoppingCart size={18} />,
//       label: <Link href="/orders">Orders</Link>,
//     },
//   ];

//   return (
//     <Sider
//       collapsible
//       collapsed={collapsed}
//       trigger={null}
//       width={200}
//       style={{
//         background: "#ffffff",
//         height: "100vh",
//         position: "fixed",
//         borderRight: "1px solid #f0f0f0",
//       }}
//     >
//       <div
//         style={{ padding: "16px", display: "flex", justifyContent: "center" }}
//       >
//         <Image
//           src={logo}
//           alt="Logo"
//           width={collapsed ? 40 : 150}
//           height={collapsed ? 40 : 100}
//           priority
//           style={{ objectFit: "contain" }}
//         />
//       </div>

//       <ConfigProvider
//         theme={{
//           components: {
//             Menu: {
//               itemSelectedBg: "#0060DE",
//               itemSelectedColor: "#ffffff",
//               itemHoverBg: "#0060DE",
//               itemHoverColor: "#ffffff",
//               itemColor: "#000000",
//               // Ensure icons also turn white when selected
//             },
//           },
//         }}
//       >
//         <Menu
//           mode="inline"
//           // 4. Use selectedKeys (controlled) instead of defaultSelectedKeys
//           selectedKeys={[pathname]}
//           items={menuItems}
//           style={{ borderRight: 0 }}
//         />
//       </ConfigProvider>
//     </Sider>
//   );
// }

"use client";

import React, { useState } from "react";
import { Layout, Menu, ConfigProvider, Drawer, Button, Grid } from "antd";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/images/Luqtaa_logo-removebg-preview 1.svg";

import {
  LayoutDashboard,
  Gavel,
  Package,
  Layers,
  Users,
  Coins,
  ShoppingCart,
  Menu as MenuIcon, // Hamburger icon
} from "lucide-react";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

export default function Sidebar({
  collapsed = false,
}: {
  collapsed?: boolean;
}) {
  const pathname = usePathname();
  const screens = useBreakpoint();
  const [mobileVisible, setMobileVisible] = useState(false);

  // If screens.md is false, we are on a mobile device (less than 768px)
  const isMobile = screens.md === false;

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

  const MenuContent = (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemSelectedBg: "#0060DE",
            itemSelectedColor: "#ffffff",
            itemHoverBg: "#0060DE",
            itemHoverColor: "#ffffff",
            itemColor: "#000000",
          },
        },
      }}
    >
      <div
        style={{ padding: "16px", display: "flex", justifyContent: "center" }}
      >
        <Image
          src={logo}
          alt="Logo"
          width={collapsed && !isMobile ? 40 : 150}
          height={collapsed && !isMobile ? 40 : 100}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        items={menuItems}
        style={{ borderRight: 0 }}
        onClick={() => isMobile && setMobileVisible(false)} // Close drawer on click
      />
    </ConfigProvider>
  );

  return (
    <>
      {/* 1. Mobile Hamburger Button (Only visible on mobile) */}
      {isMobile && (
        <Button
          type="text"
          icon={<MenuIcon size={24} />}
          onClick={() => setMobileVisible(true)}
          style={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1000,
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        />
      )}

      {/* 2. Mobile Drawer */}
      <Drawer
        placement="left"
        onClose={() => setMobileVisible(false)}
        open={mobileVisible}
        width={250}
        styles={{ body: { padding: 0 } }}
        closable={false}
      >
        {MenuContent}
      </Drawer>

      {/* 3. Desktop Sidebar (Hidden on mobile) */}
      {!isMobile && (
        <Sider
          collapsible
          collapsed={collapsed}
          trigger={null}
          width={200}
          style={{
            background: "#ffffff",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            borderRight: "1px solid #f0f0f0",
          }}
        >
          {MenuContent}
        </Sider>
      )}
    </>
  );
}
