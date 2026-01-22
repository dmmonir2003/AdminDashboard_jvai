"use client";

import { Layout, Button, Avatar, Space } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

import { authService } from "@/src/api/services/authService";

const { Header } = Layout;

interface HeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function DashboardHeader({ collapsed, onToggle }: HeaderProps) {
  // const dispatch = useAppDispatch();
  const router = useRouter();

  const { logout } = authService;

  const handleLogout = () => {
    logout();

    // dispatch(logout);
    // localStorage.removeItem("authToken");
    router.push("/login");
  };

  return (
    <Header
      style={{
        padding: "0 24px",
        background: "#F4F4F4",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",
        boxShadow: "none",
        position: "relative", // Required for the absolute positioned line
      }}
    >
      {/* Horizontal Line with Left/Right Padding */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "24px", // Matches the header padding
          right: "24px", // Matches the header padding
          height: "1px",
          backgroundColor: "#E5E7EB",
        }}
      />

      <Space size="middle">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onToggle}
          style={{ fontSize: "16px" }}
        />
        <span
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#111827",
            fontFamily: "inherit",
          }}
        >
          Luqtaa Dashboard
        </span>
      </Space>

      <Space size={16}>
        <Avatar
          src={"https://i.pravatar.cc/150"}
          size={40}
          style={{
            border: "2px solid #00B2FF",
            cursor: "pointer",
          }}
          onClick={() => router.push("/profile")}
        />

        <div
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            color: "#1f2937",
            fontWeight: 500,
          }}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </Space>
    </Header>
  );
}
