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

//TODO:  dsfdjsflds;
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { Card, Row, Col, Space, Tag, Button, Grid } from "antd";
// import {
//   ClockCircleOutlined,
//   TeamOutlined,
//   EditOutlined,
//   EyeOutlined,
// } from "@ant-design/icons";
// import Image from "next/image";
// import { getFirstImageForAuction } from "@/src/utils/getFirstImageForAuction";

// interface Props {
//   item: any;
//   onEdit: (item: any) => void;
//   onView: (item: any) => void;
//   activeTab?: string;
//   onCountdownComplete?: (status: string) => void;
// }

// const { useBreakpoint } = Grid;

// export default function AuctionCard({
//   item,
//   onEdit,
//   onView,
//   activeTab = "publish",
//   onCountdownComplete,
// }: Props) {
//   const screens = useBreakpoint();
//   const isMobile = screens.md === false;
//   const [countdown, setCountdown] = useState<string>("");
//   const hasTriggered = useRef(false);

//   const getStatusColor = (status: string) => {
//     switch (status?.toLowerCase()) {
//       case "publish":
//         return "red";
//       case "invalid":
//         return "#DC2626";
//       case "schedule":
//         return "#000000";
//       default:
//         return "#bfbfbf";
//     }
//   };

//   useEffect(() => {
//     hasTriggered.current = false;

//     const calculateInitialSeconds = () => {
//       if (activeTab === "publish") {
//         // 1. Parse remaining_time string (e.g., "0h 0m")
//         const hMatch = item.remaining_time?.match(/(\d+)h/);
//         const mMatch = item.remaining_time?.match(/(\d+)m/);
//         const sMatch = item.remaining_time?.match(/(\d+)s/);

//         const hours = hMatch ? parseInt(hMatch[1]) : 0;
//         const minutes = mMatch ? parseInt(mMatch[1]) : 0;
//         const seconds = sMatch ? parseInt(sMatch[1]) : 0;

//         let totalSeconds = hours * 3600 + minutes * 60 + seconds;

//         // 2. Fallback Logic: If backend says 0h 0m but it's a live auction,
//         // calculate based on created_at + auction_duration
//         if (totalSeconds <= 0 && item.created_at && item.auction_duration) {
//           const createdTime = new Date(item.created_at).getTime();
//           const durationSeconds =
//             (item.auction_duration.hours || 0) * 3600 +
//             (item.auction_duration.minutes || 0) * 60;

//           const endTime = createdTime + durationSeconds * 1000;
//           const now = new Date().getTime();
//           totalSeconds = Math.max(0, Math.floor((endTime - now) / 1000));
//         }

//         return totalSeconds;
//       } else if (activeTab === "upcoming" && item.scheduled_time) {
//         const target = new Date(item.scheduled_time).getTime();
//         const now = new Date().getTime();
//         return Math.max(0, Math.floor((target - now) / 1000));
//       }
//       return 0;
//     };

//     let secondsLeft = calculateInitialSeconds();

//     const updateDisplay = (totalSecs: number) => {
//       if (totalSecs <= 0) {
//         setCountdown("00:00:00");
//         return;
//       }
//       const d = Math.floor(totalSecs / (3600 * 24));
//       const h = Math.floor((totalSecs % (3600 * 24)) / 3600);
//       const m = Math.floor((totalSecs % 3600) / 60);
//       const s = Math.floor(totalSecs % 60);

//       const dDisplay = d > 0 ? `${d}d ` : "";
//       setCountdown(
//         `${dDisplay}${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`,
//       );
//     };

//     updateDisplay(secondsLeft);

//     const timer = setInterval(() => {
//       if (secondsLeft <= 0) {
//         clearInterval(timer);
//         updateDisplay(0);

//         // Check ref to ensure we only call this ONCE per auction component mount
//         if (!hasTriggered.current && onCountdownComplete) {
//           hasTriggered.current = true;

//           // Only trigger if the auction is in a state that actually needs refreshing
//           if (activeTab === "publish" || activeTab === "upcoming") {
//             const nextStatus = activeTab === "upcoming" ? "publish" : "ended";
//             onCountdownComplete(nextStatus);
//           }
//         }
//         return;
//       }

//       secondsLeft -= 1;
//       updateDisplay(secondsLeft);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [
//     item.auction_id,
//     activeTab,
//     item.remaining_time,
//     item.scheduled_time,
//     item.created_at,
//     item.auction_duration,
//     onCountdownComplete,
//   ]);

//   return (
//     <Card
//       style={{
//         marginBottom: "16px",
//         borderRadius: "12px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//       }}
//       styles={{ body: { padding: isMobile ? "12px" : "16px" } }}
//     >
//       <Row gutter={[16, 16]} align="stretch">
//         <Col xs={24} md={4}>
//           <div
//             style={{
//               position: "relative",
//               width: "100%",
//               height: isMobile ? "160px" : "120px",
//             }}
//           >
//             <Image
//               src={getFirstImageForAuction(item.product_image_url)}
//               fill
//               style={{ objectFit: "cover", borderRadius: "8px" }}
//               alt={item.product_name || "Auction Product"}
//             />
//           </div>
//         </Col>

//         <Col xs={24} md={16}>
//           <h3
//             style={{
//               margin: 0,
//               fontSize: isMobile ? "16px" : "18px",
//               fontWeight: "bold",
//             }}
//           >
//             {item.product_name}
//           </h3>
//           <Space
//             style={{ color: "#8c8c8c", fontSize: "12px", marginTop: "4px" }}
//           >
//             <span>
//               <ClockCircleOutlined /> {countdown || "00:00:00"}
//             </span>
//             <span>
//               <TeamOutlined /> {item.participant_count || 0} participants
//             </span>
//           </Space>

//           <Row gutter={8} style={{ marginTop: "16px" }}>
//             {[
//               { label: "Market Price", value: `$${item.market_price}` },
//               { label: "Auction Price", value: `$${item.auction_price}` },
//               { label: "Category", value: item.category_name },
//             ].map((col, idx) => (
//               <Col
//                 span={8}
//                 key={col.label}
//                 style={{
//                   borderLeft: idx > 0 ? "1px solid #f0f0f0" : "none",
//                   paddingLeft: idx > 0 ? "8px" : "0",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: "11px",
//                     color: "#8c8c8c",
//                     fontWeight: 500,
//                   }}
//                 >
//                   {col.label}
//                 </div>
//                 <div
//                   style={{
//                     fontWeight: "bold",
//                     fontSize: isMobile ? "13px" : "15px",
//                     color: "#000",
//                   }}
//                 >
//                   {col.value}
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         </Col>

//         <Col
//           xs={24}
//           md={4}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: isMobile ? "center" : "flex-end",
//             gap: "12px",
//           }}
//         >
//           <Tag
//             style={{
//               backgroundColor: getStatusColor(item.status),
//               color: "#fff",
//               borderRadius: "6px",
//               padding: "4px 16px",
//               fontWeight: "600",
//               textTransform: "capitalize",
//               border: "none",
//               margin: 0,
//             }}
//           >
//             {item.status === "publish" ? "Live" : item.status || "N/A"}
//           </Tag>
//           <Space
//             size="small"
//             style={{
//               width: "100%",
//               justifyContent: isMobile ? "center" : "flex-end",
//             }}
//           >
//             {item.status === "schedule" && (
//               <Button
//                 onClick={() => onEdit(item)}
//                 icon={<EditOutlined />}
//                 size="small"
//                 style={{ borderRadius: "8px" }}
//               >
//                 Edit
//               </Button>
//             )}
//             <Button
//               onClick={() => onView(item)}
//               icon={<EyeOutlined />}
//               size="small"
//               style={{ borderRadius: "8px" }}
//             >
//               View
//             </Button>
//           </Space>
//         </Col>
//       </Row>
//     </Card>
//   );
// }

// TODO:

"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, Row, Col, Space, Tag, Button, Grid } from "antd";
import {
  ClockCircleOutlined,
  TeamOutlined,
  EditOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { getFirstImageForAuction } from "@/src/utils/getFirstImageForAuction";

interface Props {
  item: any;
  onEdit: (item: any) => void;
  onView: (item: any) => void;
  activeTab?: string;
  onCountdownComplete?: (status: string) => void;
}

const { useBreakpoint } = Grid;

export default function AuctionCard({
  item,
  onEdit,
  onView,
  activeTab = "publish",
  onCountdownComplete,
}: Props) {
  const screens = useBreakpoint();
  const isMobile = screens.md === false;
  const [countdown, setCountdown] = useState<string>("");
  const hasTriggered = useRef(false);

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "publish":
        return "red";
      case "invalid":
        return "#DC2626";
      case "schedule":
        return "#000000";
      default:
        return "#bfbfbf";
    }
  };

  useEffect(() => {
    hasTriggered.current = false;
    const calculateInitialSeconds = () => {
      if (activeTab === "publish") {
        const hMatch = item.remaining_time?.match(/(\d+)h/);
        const mMatch = item.remaining_time?.match(/(\d+)m/);
        const sMatch = item.remaining_time?.match(/(\d+)s/);
        const hours = hMatch ? parseInt(hMatch[1]) : 0;
        const minutes = mMatch ? parseInt(mMatch[1]) : 0;
        const seconds = sMatch ? parseInt(sMatch[1]) : 0;
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;
        if (totalSeconds <= 0 && item.created_at && item.auction_duration) {
          const createdTime = new Date(item.created_at).getTime();
          const durationSeconds =
            (item.auction_duration.hours || 0) * 3600 +
            (item.auction_duration.minutes || 0) * 60;
          const endTime = createdTime + durationSeconds * 1000;
          const now = new Date().getTime();
          totalSeconds = Math.max(0, Math.floor((endTime - now) / 1000));
        }
        return totalSeconds;
      } else if (activeTab === "upcoming" && item.scheduled_time) {
        const target = new Date(item.scheduled_time).getTime();
        const now = new Date().getTime();
        return Math.max(0, Math.floor((target - now) / 1000));
      }
      return 0;
    };

    let secondsLeft = calculateInitialSeconds();

    const updateDisplay = (totalSecs: number) => {
      if (totalSecs <= 0) {
        setCountdown("00:00:00");
        return;
      }
      const d = Math.floor(totalSecs / (3600 * 24));
      const h = Math.floor((totalSecs % (3600 * 24)) / 3600);
      const m = Math.floor((totalSecs % 3600) / 60);
      const s = Math.floor(totalSecs % 60);
      const dDisplay = d > 0 ? `${d}d ` : "";
      setCountdown(
        `${dDisplay}${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`,
      );
    };

    updateDisplay(secondsLeft);

    const timer = setInterval(() => {
      if (secondsLeft <= 0) {
        clearInterval(timer);
        updateDisplay(0);
        if (!hasTriggered.current && onCountdownComplete) {
          hasTriggered.current = true;
          if (activeTab === "publish" || activeTab === "upcoming") {
            const nextStatus = activeTab === "upcoming" ? "publish" : "ended";
            onCountdownComplete(nextStatus);
          }
        }
        return;
      }
      secondsLeft -= 1;
      updateDisplay(secondsLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [
    item.auction_id,
    activeTab,
    item.remaining_time,
    item.scheduled_time,
    item.created_at,
    item.auction_duration,
    onCountdownComplete,
  ]);

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
        <Col xs={24} md={4}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: isMobile ? "160px" : "120px",
            }}
          >
            <Image
              src={getFirstImageForAuction(item.product_image_url)}
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
              alt={item.product_name || "Auction Product"}
            />
          </div>
        </Col>
        <Col xs={24} md={16}>
          <h3
            style={{
              margin: 0,
              fontSize: isMobile ? "16px" : "18px",
              fontWeight: "bold",
            }}
          >
            {item.product_name}
          </h3>
          <Space
            style={{ color: "#8c8c8c", fontSize: "12px", marginTop: "4px" }}
          >
            <span>
              <ClockCircleOutlined /> {countdown || "00:00:00"}
            </span>
            <span>
              <TeamOutlined /> {item.participant_count || 0} participants
            </span>
          </Space>
          <Row gutter={8} style={{ marginTop: "16px" }}>
            {[
              { label: "Market Price", value: `$${item.market_price}` },
              { label: "Auction Price", value: `$${item.auction_price}` },
              { label: "Category", value: item.category_name },
            ].map((col, idx) => (
              <Col
                span={8}
                key={col.label}
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
                  {col.label}
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: isMobile ? "13px" : "15px",
                    color: "#000",
                  }}
                >
                  {col.value}
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col
          xs={24}
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "flex-end",
            gap: "12px",
          }}
        >
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
            {item.status === "publish" ? "Live" : item.status || "N/A"}
          </Tag>
          <Space
            size="small"
            style={{
              width: "100%",
              justifyContent: isMobile ? "center" : "flex-end",
            }}
          >
            {item.status === "schedule" && (
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
