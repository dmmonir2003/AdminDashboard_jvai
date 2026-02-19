// "use client";

// import { Layout, Button, Avatar, Space } from "antd";
// import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
// import { LogOut } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { authService } from "@/src/services/authService";

// const { Header } = Layout;

// interface HeaderProps {
//   collapsed: boolean;
//   onToggle: () => void;
// }

// export default function DashboardHeader({ collapsed, onToggle }: HeaderProps) {
//   // const dispatch = useAppDispatch();
//   const router = useRouter();

//   const { logout } = authService;

//   const handleLogout = () => {
//     logout();

//     // dispatch(logout);
//     // localStorage.removeItem("authToken");
//     router.push("/login");
//   };

//   return (
//     <Header
//       style={{
//         padding: "0 24px",
//         background: "#F4F4F4",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         height: "64px",
//         boxShadow: "none",
//         position: "relative", // Required for the absolute positioned line
//       }}
//     >
//       {/* Horizontal Line with Left/Right Padding */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: 0,
//           left: "24px", // Matches the header padding
//           right: "24px", // Matches the header padding
//           height: "1px",
//           backgroundColor: "#E5E7EB",
//         }}
//       />

//       <Space size="middle">
//         <Button
//           type="text"
//           icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//           onClick={onToggle}
//           style={{ fontSize: "16px" }}
//         />
//         <span
//           style={{
//             fontSize: "18px",
//             fontWeight: 600,
//             color: "#111827",
//             fontFamily: "inherit",
//           }}
//         >
//           Luqtaa Dashboard
//         </span>
//       </Space>

//       <Space size={16}>
//         <Avatar
//           src={"https://i.pravatar.cc/150"}
//           size={40}
//           style={{
//             border: "2px solid #00B2FF",
//             cursor: "pointer",
//           }}
//           onClick={() => router.push("/profile")}
//         />

//         <div
//           onClick={handleLogout}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "8px",
//             cursor: "pointer",
//             color: "#1f2937",
//             fontWeight: 500,
//           }}
//         >
//           <LogOut size={20} />
//           <span>Logout</span>
//         </div>
//       </Space>
//     </Header>
//   );
// }

"use client";

import { Layout, Button, Avatar, Space, Grid } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { authService } from "@/src/services/authService";
import { profileService } from "@/src/services/profileService";
import { useEffect, useState } from "react";

const { Header } = Layout;
const { useBreakpoint } = Grid;

interface HeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function DashboardHeader({ collapsed, onToggle }: HeaderProps) {
  const router = useRouter();
  const screens = useBreakpoint();
  const { logout } = authService;
  const [name, setName] = useState("");

  const getInitials = (name: string) => {
    if (!name) return "U";

    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();

    return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
  };

  // Fetch user profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await profileService.getMe();
        setName(data.first_name + " " + data.last_name || data.email);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  const isMobile = screens.md === false;
  const isVerySmall = screens.xs === true;

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <Header
      style={{
        padding: isMobile ? "0 12px" : "0 24px",
        background: "#F4F4F4",
        display: "flex",
        alignItems: "center",
        height: "64px",
        boxShadow: "none",
        position: "relative",
      }}
    >
      {/* Bottom Border Line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: isMobile ? "12px" : "24px",
          right: isMobile ? "12px" : "24px",
          height: "1px",
          backgroundColor: "#E5E7EB",
        }}
      />

      {/* 1. MENU BUTTON */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onToggle}
          style={{ fontSize: "18px" }}
        />
      </div>

      {/* 2. TITLE SECTION (Responsive Alignment) */}
      <div
        style={{
          flex: isMobile ? 1 : "none", // Takes full space on mobile to center
          textAlign: isMobile ? "center" : "left",
          marginLeft: isMobile ? "0px" : "12px", // Space from button on desktop
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontSize: isVerySmall ? "13px" : "18px",
            fontWeight: 600,
            color: "#111827",
            whiteSpace: "nowrap",
          }}
        >
          {isVerySmall ? "Luqtaa Dashboard" : "Luqtaa Dashboard"}
        </span>
      </div>

      {/* 3. SPACER (Desktop Only) 
          This pushes the right section to the end of the header on desktop 
      */}
      {!isMobile && <div style={{ flex: 1 }} />}

      {/* 4. RIGHT SECTION (Avatar & Logout) */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginRight: isMobile ? "8px" : "0px",
        }}
      >
        <Space size={isMobile ? 8 : 16}>
          <Avatar
            size={isMobile ? 30 : 40}
            style={{
              backgroundColor: "#00B2FF",
              color: "#fff",
              border: "2px solid #00B2FF",
              cursor: "pointer",
              flexShrink: 0,
              fontWeight: 600,
            }}
            onClick={() => router.push("/profile")}
          >
            {getInitials(name)}
          </Avatar>

          <div
            onClick={handleLogout}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              color: "#1f2937",
              fontWeight: 500,
              fontSize: isMobile ? "12px" : "14px",
              flexShrink: 0,
            }}
          >
            <LogOut size={isMobile ? 16 : 20} />
            {!isVerySmall && <span>Logout</span>}
          </div>
        </Space>
      </div>
    </Header>
  );
}
