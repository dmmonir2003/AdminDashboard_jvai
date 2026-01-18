"use client";

import React from "react";
import { Layout, Button, Dropdown, Avatar, Space } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";

const { Header } = Layout;

interface HeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function DashboardHeader({ collapsed, onToggle }: HeaderProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  const menuItems = [
    {
      key: "1",
      label: "Profile",
      onClick: () => router.push("/profile"),
    },
    {
      key: "2",
      label: "Settings",
      onClick: () => router.push("/settings"),
    },
    {
      type: "divider",
    },
    {
      key: "3",
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

  return (
    <Header
      style={{
        padding: "0 16px",
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={onToggle}
        size="large"
      />

      <Space>
        <Dropdown menu={{ items: menuItems }} placement="bottomRight">
          <Space style={{ cursor: "pointer" }}>
            <Avatar icon={<LogoutOutlined />} />
            <span>{user?.name || "User"}</span>
          </Space>
        </Dropdown>
      </Space>
    </Header>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function logout(): any {
  throw new Error("Function not implemented.");
}
