/* eslint-disable @typescript-eslint/no-explicit-any */

// export default function AuctionCard({ item, onEdit, onView }: Props) {
//   return (
//     <Card
//       style={{
//         marginBottom: "16px",
//         borderRadius: "12px",
//         border: "1px solid #f0f0f0",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//       }}
//       styles={{ body: { padding: "16px" } }}
//     >
//       <Row gutter={24} align="stretch">
//         <Col xs={24} sm={4}>
//           <div style={{ position: "relative", width: "100%", height: "120px" }}>
//             <Image
//               src={item.image}
//               fill
//               style={{ objectFit: "cover", borderRadius: "8px" }}
//               alt={item.title}
//             />
//           </div>
//         </Col>

//         <Col xs={24} sm={16}>
//           <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
//             {item.title}
//           </h3>
//           <Space
//             style={{ color: "#8c8c8c", fontSize: "14px", marginTop: "4px" }}
//           >
//             <span>
//               <ClockCircleOutlined /> {item.time}
//             </span>
//             <span>
//               <TeamOutlined /> {item.participants}
//             </span>
//           </Space>

//           <Row gutter={16} style={{ marginTop: "16px" }}>
//             <Col span={8}>
//               <div
//                 style={{
//                   color: "black",
//                   fontSize: "14px",
//                   fontWeight: "semibold",
//                 }}
//               >
//                 Market Price
//               </div>
//               <div style={{ fontWeight: "bold", fontSize: "16px" }}>
//                 {item.marketPrice}
//               </div>
//             </Col>
//             <Col
//               span={8}
//               style={{ borderLeft: "1px solid #f0f0f0", paddingLeft: "16px" }}
//             >
//               <div
//                 style={{
//                   color: "black",
//                   fontSize: "14px",
//                   fontWeight: "semibold",
//                 }}
//               >
//                 Auction Price
//               </div>
//               <div style={{ fontWeight: "bold", fontSize: "16px" }}>
//                 {item.auctionPrice}
//               </div>
//             </Col>
//             <Col
//               span={8}
//               style={{ borderLeft: "1px solid #f0f0f0", paddingLeft: "16px" }}
//             >
//               <div
//                 style={{
//                   color: "black",
//                   fontSize: "14px",
//                   fontWeight: "semibold",
//                 }}
//               >
//                 Category
//               </div>
//               <div style={{ fontWeight: "bold", fontSize: "16px" }}>
//                 {item.category}
//               </div>
//             </Col>
//           </Row>
//         </Col>

//         <Col
//           xs={24}
//           sm={4}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "flex-end",
//             gap: "16px",
//           }}
//         >
//           <Tag
//             // Remove the hex from here to prevent Ant Design's default transparency logic
//             style={{
//               borderRadius: "8px",
//               padding: "4px 16px",
//               fontWeight: "bold",
//               textTransform: "capitalize",
//               border: "none",
//               margin: 0,
//               // Move background logic here for solid colors
//               backgroundColor:
//                 item.status === "live" || item.status === "invalid"
//                   ? "#DC2626" // Solid Dark Red
//                   : item.status === "upcoming"
//                     ? "#000000" // Solid Black
//                     : "#bfbfbf", // Solid Grey
//               // Solid white text for specific statuses
//               color:
//                 item.status === "live" ||
//                 item.status === "invalid" ||
//                 item.status === "upcoming"
//                   ? "#ffffff"
//                   : "#000000", // Change this to whatever you want for the "Ended" text
//             }}
//           >
//             {item.status}
//           </Tag>

//           <Space size="small">
//             {(item.status === "live" || item.status === "upcoming") && (
//               <Button
//                 onClick={() => onEdit(item)}
//                 icon={<EditOutlined />}
//                 style={{ borderRadius: "8px", fontWeight: "500" }}
//               >
//                 Edit
//               </Button>
//             )}
//             <Button
//               onClick={() => onView(item)}
//               icon={<EyeOutlined />}
//               style={{ borderRadius: "8px", fontWeight: "500" }}
//             >
//               View
//             </Button>
//           </Space>
//         </Col>
//       </Row>
//     </Card>
//   );
// }

"use client";

import React from "react";
import { Card, Row, Col, Space, Tag, Button, Grid } from "antd";
import {
  ClockCircleOutlined,
  TeamOutlined,
  EditOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import Image from "next/image";

interface Props {
  item: any;
  onEdit: (item: any) => void;
  onView: (item: any) => void;
}

const { useBreakpoint } = Grid;

export default function AuctionCard({ item, onEdit, onView }: Props) {
  const screens = useBreakpoint();
  // md is true for desktop (>= 768px)
  const isMobile = screens.md === false;

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "live":
      case "invalid":
        return "#DC2626";
      case "upcoming":
        return "#000000";
      default:
        return "#bfbfbf";
    }
  };

  return (
    <Card
      style={{
        marginBottom: "16px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
      styles={{ body: { padding: isMobile ? "12px" : "16px" } }}
    >
      <Row gutter={[16, 16]} align="stretch">
        {/* --- IMAGE SECTION --- */}
        <Col xs={24} md={4}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: isMobile ? "160px" : "120px",
            }}
          >
            <Image
              src={item.image}
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
              alt={item.title}
            />
          </div>
        </Col>

        {/* --- CONTENT SECTION --- */}
        <Col xs={24} md={16}>
          <h3
            style={{
              margin: 0,
              fontSize: isMobile ? "16px" : "18px",
              fontWeight: "bold",
            }}
          >
            {item.title}
          </h3>
          <Space
            style={{ color: "#8c8c8c", fontSize: "12px", marginTop: "4px" }}
          >
            <span>
              <ClockCircleOutlined /> {item.time}
            </span>
            <span>
              <TeamOutlined /> {item.participants}
            </span>
          </Space>

          <Row gutter={8} style={{ marginTop: "16px" }}>
            {["Market Price", "Auction Price", "Category"].map((label, idx) => (
              <Col
                span={8}
                key={label}
                style={{
                  borderLeft: idx > 0 ? "1px solid #f0f0f0" : "none",
                  paddingLeft: idx > 0 ? "8px" : "0",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    color: "#8c8c8c",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: isMobile ? "13px" : "15px",
                    color: "#000",
                  }}
                >
                  {idx === 0
                    ? item.marketPrice
                    : idx === 1
                      ? item.auctionPrice
                      : item.category}
                </div>
              </Col>
            ))}
          </Row>
        </Col>

        {/* --- ACTIONS SECTION --- */}
        <Col
          xs={24}
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // Center everything on mobile, align items to the right on desktop
            alignItems: isMobile ? "center" : "flex-end",
            gap: "12px",
            borderTop: isMobile ? "1px solid #f0f0f0" : "none",
            paddingTop: isMobile ? "12px" : "0",
          }}
        >
          {/* Status Tag */}
          <Tag
            style={{
              backgroundColor: getStatusColor(item.status),
              color: "#fff",
              borderRadius: "6px",
              padding: "4px 16px",
              fontWeight: "600",
              textTransform: "capitalize",
              border: "none",
              margin: 0,
            }}
          >
            {item.status}
          </Tag>

          {/* Action Buttons: Force horizontal (one row) on both mobile and desktop */}
          <Space
            size="small"
            direction="horizontal"
            style={{
              width: "100%",
              justifyContent: isMobile ? "center" : "flex-end",
            }}
          >
            {item.status === "upcoming" && (
              <Button
                onClick={() => onEdit(item)}
                icon={<EditOutlined />}
                size="small"
                style={{ borderRadius: "8px" }}
              >
                Edit
              </Button>
            )}
            <Button
              onClick={() => onView(item)}
              icon={<EyeOutlined />}
              size="small"
              style={{ borderRadius: "8px" }}
            >
              View
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}
