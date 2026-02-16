/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import React from "react";
// import {
//   Table,
//   Tag,
//   Avatar,
//   Button,
//   Card,
//   Row,
//   Col,
//   Space,
//   Typography,
//   ConfigProvider,
// } from "antd";
// import {
//   ClockCircleOutlined,
//   TeamOutlined,
//   TrophyFilled,
//   ArrowLeftOutlined,
// } from "@ant-design/icons";
// import Image from "next/image";

// const { Title, Text } = Typography;

// // Mock data for participants (usually this would come from an API)
// const participantsData = Array.from({ length: 24 }).map((_, i) => ({
//   key: i + 1,
//   id: 101 + i,
//   name: `User #${101 + i}`,
//   email: "user@mail.com",
//   avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
//   status: i === 0 ? "Winner" : "N/A",
//   coinBalance: 7800 - i * 150,
//   refundableCoin: i === 0 ? null : 300,
//   winningBids: i === 0 ? 3 : 5,
// }));

// interface AuctionDetailProps {
//   auction: any;
//   onBack: () => void;
// }

// export default function AuctionDetailView({
//   auction,
//   onBack,
// }: AuctionDetailProps) {
//   const columns = [
//     {
//       title: "User Name",
//       dataIndex: "name",
//       key: "name",
//       render: (_: any, record: any) => (
//         <Space size="middle">
//           <Avatar
//             src={record.avatar}
//             size={48}
//             style={{ border: "1px solid #f0f0f0" }}
//           />
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <Text strong style={{ fontSize: "14px" }}>
//               {record.name}
//             </Text>
//             <Text type="secondary" style={{ fontSize: "12px" }}>
//               {record.email}
//             </Text>
//           </div>
//         </Space>
//       ),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (status: string) =>
//         status === "Winner" ? (
//           <Tag
//             icon={<TrophyFilled />}
//             style={{
//               backgroundColor: "#FFF7E6",
//               borderRadius: "6px",
//               padding: "4px 12px",
//               fontWeight: "bold",
//               border: "none",
//             }}
//           >
//             Winner
//           </Tag>
//         ) : (
//           <Text strong style={{ color: "#595959" }}>
//             N/A
//           </Text>
//         ),
//     },
//     {
//       title: "Coin Balance",
//       dataIndex: "coinBalance",
//       render: (val: number) => (
//         <Text strong style={{ fontSize: "15px" }}>
//           {val}
//         </Text>
//       ),
//     },
//     {
//       title: "Refundable Coin",
//       dataIndex: "refundableCoin",
//       render: (val: number | null) => (
//         <Button
//           style={{
//             borderRadius: "6px",
//             background: val === null ? "#a0a0a0" : "#b1b1b1",
//             color: "#fff",
//             border: "none",
//             fontSize: "13px",
//             height: "32px",
//             width: "160px",
//           }}
//         >
//           {val === null ? "Not Refundable" : `Refundable Coin ${val}`}
//         </Button>
//       ),
//     },
//     {
//       title: "Winning Bids",
//       dataIndex: "winningBids",
//       render: (val: number) => (
//         <Tag
//           style={{
//             borderRadius: "6px",
//             padding: "4px 16px",
//             fontSize: "14px",
//             backgroundColor: "black",
//             color: "white",
//           }}
//         >
//           {val} Bids
//         </Tag>
//       ),
//     },
//   ];

//   return (
//     <div style={{ padding: "24px", background: "#f8f9fa" }}>
//       <Button
//         icon={<ArrowLeftOutlined />}
//         onClick={onBack}
//         style={{ marginBottom: "20px", borderRadius: "8px" }}
//       >
//         Back to Auctions
//       </Button>

//       {/* Top Details Card */}
//       <Card
//         style={{
//           marginBottom: "32px",
//           borderRadius: "12px",
//           border: "none",
//           boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
//         }}
//       >
//         <Row gutter={24} align="middle">
//           <Col span={4}>
//             <Image
//               src={auction.image}
//               width={100}
//               height={100}
//               alt="Product"
//               style={{ objectFit: "contain" }}
//             />
//           </Col>
//           <Col span={6}>
//             <Title level={4} style={{ margin: 0 }}>
//               {auction.title}
//             </Title>
//             <Space style={{ color: "#8c8c8c", marginTop: "8px" }}>
//               <span>
//                 <ClockCircleOutlined /> {auction.time}
//               </span>
//               <span>
//                 <TeamOutlined /> {auction.participants}
//               </span>
//             </Space>
//           </Col>
//           <Col
//             span={5}
//             style={{ borderLeft: "1px solid #f0f0f0", textAlign: "center" }}
//           >
//             <Text type="secondary">Market Price</Text>
//             <div style={{ fontSize: "18px", fontWeight: "bold" }}>
//               {auction.marketPrice || auction.currentPrice}
//             </div>
//           </Col>
//           <Col
//             span={5}
//             style={{ borderLeft: "1px solid #f0f0f0", textAlign: "center" }}
//           >
//             <Text type="secondary">Auction Price</Text>
//             <div style={{ fontSize: "18px", fontWeight: "bold" }}>
//               {auction.auctionPrice}
//             </div>
//           </Col>
//           <Col span={4} style={{ textAlign: "right" }}>
//             {/* <Tag
//               style={{
//                 background: "#d9d9d9",
//                 border: "none",
//                 padding: "4px 12px",
//                 borderRadius: "4px",
//               }}
//             >
//               {auction.status}
//             </Tag> */}

//             <Tag
//               style={{
//                 // Logic for Solid Background Color
//                 backgroundColor:
//                   auction.status === "live" || auction.status === "invalid"
//                     ? "#DC2626" // Dark Red
//                     : auction.status === "upcoming"
//                       ? "#000000" // Black
//                       : "#d9d9d9", // Grey (Ended/Default)

//                 // Logic for Text Color (White for dark backgrounds)
//                 color:
//                   auction.status === "live" ||
//                   auction.status === "invalid" ||
//                   auction.status === "upcoming"
//                     ? "#ffffff"
//                     : "#595959",

//                 border: "none",
//                 padding: "4px 16px",
//                 borderRadius: "8px",
//                 fontWeight: "bold",
//                 textTransform: "capitalize",
//                 margin: 0,
//               }}
//             >
//               {auction.status}
//             </Tag>
//           </Col>
//         </Row>
//       </Card>

//       <Title level={4} style={{ marginBottom: "20px" }}>
//         All Participants
//       </Title>

//       <ConfigProvider
//         theme={{
//           components: {
//             Table: {
//               headerBg: "transparent",
//               headerColor: "#000",
//               rowHoverBg: "#fafafa",
//             },
//           },
//         }}
//       >
//         <Table
//           columns={columns}
//           dataSource={participantsData}
//           pagination={{
//             pageSize: 5,
//             position: ["bottomRight"],
//             showTotal: (total, range) =>
//               `Showing ${range[0]} to ${range[1]} of ${total} results`,
//           }}
//           rowClassName={() => "custom-table-row"}
//         />
//       </ConfigProvider>

//       {/* NEW: End Auction Button Logic */}
//       {(auction.status === "live" ||
//         auction.status === "upcoming" ||
//         auction.status === "invalid") && (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "flex-end",
//             marginTop: "24px",
//           }}
//         >
//           <Button
//             danger
//             type="primary"
//             size="large"
//             style={{
//               backgroundColor: "#DC2626", // Dark Red
//               borderColor: "#DC2626",
//               borderRadius: "8px",
//               padding: "0 40px",
//               height: "45px",
//               fontWeight: "bold",
//             }}
//             onClick={() => console.log("Auction Ended")}
//           >
//             End Auction
//           </Button>
//         </div>
//       )}

//       {/* Logic for "Ended" status view (Grey disabled button as seen in image) */}
//       {auction.status === "ended" && (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "flex-end",
//             marginTop: "24px",
//           }}
//         >
//           <Button
//             disabled
//             size="large"
//             style={{
//               borderRadius: "8px",
//               padding: "0 40px",
//               height: "45px",
//               backgroundColor: "#e0e0e0",
//               color: "#a0a0a0",
//               border: "none",
//             }}
//           >
//             End Auction
//           </Button>
//         </div>
//       )}

//       <style jsx global>{`
//         .custom-table-row td {
//           padding: 12px 16px !important;
//           background: white !important;
//         }
//         .ant-table-tbody > tr > td {
//           border-bottom: 8px solid #f8f9fa !important;
//         }
//       `}</style>
//     </div>
//   );
// }

// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React from "react";
// import {
//   Table,
//   Tag,
//   Avatar,
//   Button,
//   Card,
//   Row,
//   Col,
//   Space,
//   Typography,
//   ConfigProvider,
//   Grid, // 1. Added Grid for breakpoint detection
// } from "antd";
// import {
//   ClockCircleOutlined,
//   TeamOutlined,
//   TrophyFilled,
//   ArrowLeftOutlined,
// } from "@ant-design/icons";
// import Image from "next/image";

// const { Title, Text } = Typography;
// const { useBreakpoint } = Grid; // 2. Hook to detect mobile vs desktop

// const participantsData = Array.from({ length: 24 }).map((_, i) => ({
//   key: i + 1,
//   id: 101 + i,
//   name: `User #${101 + i}`,
//   email: "user@mail.com",
//   avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
//   status: i === 0 ? "Winner" : "N/A",
//   coinBalance: 7800 - i * 150,
//   refundableCoin: i === 0 ? null : 300,
//   winningBids: i === 0 ? 3 : 5,
// }));

// interface AuctionDetailProps {
//   auction: any;
//   onBack: () => void;
// }

// export default function AuctionDetailView({
//   auction,
//   onBack,
// }: AuctionDetailProps) {
//   const screens = useBreakpoint();
//   const isMobile = !screens.md; // md is usually 768px

//   const columns = [
//     {
//       title: "User Name",
//       dataIndex: "name",
//       key: "name",
//       render: (_: any, record: any) => (
//         <Space size="middle">
//           <Avatar
//             src={record.avatar}
//             size={isMobile ? 40 : 48}
//             style={{ border: "1px solid #f0f0f0" }}
//           />
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <Text strong style={{ fontSize: isMobile ? "13px" : "14px" }}>
//               {record.name}
//             </Text>
//             <Text type="secondary" style={{ fontSize: "12px" }}>
//               {record.email}
//             </Text>
//           </div>
//         </Space>
//       ),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (status: string) =>
//         status === "Winner" ? (
//           <Tag
//             icon={<TrophyFilled />}
//             style={{
//               backgroundColor: "#FFF7E6",
//               borderRadius: "6px",
//               padding: "4px 12px",
//               fontWeight: "bold",
//               border: "none",
//             }}
//           >
//             Winner
//           </Tag>
//         ) : (
//           <Text strong style={{ color: "#595959" }}>
//             N/A
//           </Text>
//         ),
//     },
//     {
//       title: "Coin Balance",
//       dataIndex: "coinBalance",
//       render: (val: number) => (
//         <Text strong style={{ fontSize: "15px" }}>
//           {val}
//         </Text>
//       ),
//     },
//     {
//       title: "Refundable Coin",
//       dataIndex: "refundableCoin",
//       render: (val: number | null) => (
//         <Button
//           style={{
//             borderRadius: "6px",
//             background: val === null ? "#a0a0a0" : "#b1b1b1",
//             color: "#fff",
//             border: "none",
//             fontSize: "13px",
//             height: "32px",
//             width: isMobile ? "140px" : "160px",
//           }}
//         >
//           {val === null ? "Not Refundable" : `Refundable ${val}`}
//         </Button>
//       ),
//     },
//     {
//       title: "Winning Bids",
//       dataIndex: "winningBids",
//       render: (val: number) => (
//         <Tag
//           style={{
//             borderRadius: "6px",
//             padding: "4px 16px",
//             fontSize: "14px",
//             backgroundColor: "black",
//             color: "white",
//           }}
//         >
//           {val} Bids
//         </Tag>
//       ),
//     },
//   ];

//   return (
//     <div style={{ padding: isMobile ? "12px" : "24px", background: "#f8f9fa" }}>
//       <Button
//         icon={<ArrowLeftOutlined />}
//         onClick={onBack}
//         style={{
//           marginBottom: "20px",
//           borderRadius: "8px",
//           width: isMobile ? "100%" : "auto",
//         }}
//       >
//         Back to Auctions
//       </Button>

//       {/* Top Details Card */}
//       <Card
//         style={{
//           marginBottom: "32px",
//           borderRadius: "12px",
//           border: "none",
//           boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
//         }}
//         styles={{ body: { padding: isMobile ? "16px" : "24px" } }}
//       >
//         <Row gutter={[16, 16]} align="middle">
//           {/* Image - Full width and centered on mobile */}
//           <Col xs={24} md={4} style={{ textAlign: "center" }}>
//             <Image
//               src={auction.image}
//               width={isMobile ? 120 : 100}
//               height={isMobile ? 120 : 100}
//               alt="Product"
//               style={{ objectFit: "contain" }}
//             />
//           </Col>

//           {/* Title and stats - Centered on mobile */}
//           <Col
//             xs={24}
//             md={6}
//             style={{ textAlign: isMobile ? "center" : "left" }}
//           >
//             <Title level={isMobile ? 3 : 4} style={{ margin: 0 }}>
//               {auction.title}
//             </Title>
//             <Space style={{ color: "#8c8c8c", marginTop: "8px" }}>
//               <span>
//                 <ClockCircleOutlined /> {auction.time}
//               </span>
//               <span>
//                 <TeamOutlined /> {auction.participants}
//               </span>
//             </Space>
//           </Col>

//           {/* Market Price - Side-by-side on mobile */}
//           <Col
//             xs={12}
//             md={5}
//             style={{
//               borderLeft: isMobile ? "none" : "1px solid #f0f0f0",
//               textAlign: "center",
//             }}
//           >
//             <Text
//               type="secondary"
//               style={{ fontSize: isMobile ? "12px" : "14px" }}
//             >
//               Market Price
//             </Text>
//             <div
//               style={{
//                 fontSize: isMobile ? "16px" : "18px",
//                 fontWeight: "bold",
//               }}
//             >
//               {auction.marketPrice || auction.currentPrice}
//             </div>
//           </Col>

//           {/* Auction Price - Side-by-side on mobile */}
//           <Col
//             xs={12}
//             md={5}
//             style={{
//               borderLeft: "1px solid #f0f0f0",
//               textAlign: "center",
//             }}
//           >
//             <Text
//               type="secondary"
//               style={{ fontSize: isMobile ? "12px" : "14px" }}
//             >
//               Auction Price
//             </Text>
//             <div
//               style={{
//                 fontSize: isMobile ? "16px" : "18px",
//                 fontWeight: "bold",
//               }}
//             >
//               {auction.auctionPrice}
//             </div>
//           </Col>

//           {/* Status Tag - Centered bottom on mobile */}
//           <Col
//             xs={24}
//             md={4}
//             style={{ textAlign: isMobile ? "center" : "right" }}
//           >
//             <Tag
//               style={{
//                 backgroundColor:
//                   auction.status === "live" || auction.status === "invalid"
//                     ? "#DC2626"
//                     : auction.status === "upcoming"
//                       ? "#000000"
//                       : "#d9d9d9",
//                 color:
//                   auction.status === "live" ||
//                   auction.status === "invalid" ||
//                   auction.status === "upcoming"
//                     ? "#ffffff"
//                     : "#595959",
//                 border: "none",
//                 padding: "6px 20px",
//                 borderRadius: "8px",
//                 fontWeight: "bold",
//                 textTransform: "capitalize",
//                 margin: 0,
//               }}
//             >
//               {auction.status}
//             </Tag>
//           </Col>
//         </Row>
//       </Card>

//       <Title level={4} style={{ marginBottom: "20px" }}>
//         All Participants
//       </Title>

//       <ConfigProvider
//         theme={{
//           components: {
//             Table: {
//               headerBg: "transparent",
//               headerColor: "#000",
//               rowHoverBg: "#fafafa",
//             },
//           },
//         }}
//       >
//         {/* Table needs horizontal scroll on mobile to prevent squashing */}
//         <Table
//           columns={columns}
//           dataSource={participantsData}
//           scroll={{ x: isMobile ? 800 : undefined }}
//           pagination={{
//             pageSize: 5,
//             position: ["bottomRight"],
//             showTotal: (total, range) =>
//               isMobile
//                 ? `${range[0]}-${range[1]} of ${total}`
//                 : `Showing ${range[0]} to ${range[1]} of ${total} results`,
//           }}
//           rowClassName={() => "custom-table-row"}
//         />
//       </ConfigProvider>

//       {/* Responsive Footer Buttons */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: isMobile ? "center" : "flex-end",
//           marginTop: "24px",
//         }}
//       >
//         <Button
//           danger={auction.status !== "ended"}
//           disabled={auction.status === "ended"}
//           type={auction.status === "ended" ? "default" : "primary"}
//           size="large"
//           block={isMobile} // 3. Full-width button on mobile
//           style={{
//             backgroundColor: auction.status === "ended" ? "#e0e0e0" : "#DC2626",
//             borderColor: auction.status === "ended" ? "none" : "#DC2626",
//             color: auction.status === "ended" ? "#a0a0a0" : "#fff",
//             borderRadius: "8px",
//             padding: isMobile ? "0" : "0 40px",
//             height: "45px",
//             fontWeight: "bold",
//             border: auction.status === "ended" ? "none" : undefined,
//           }}
//           onClick={() =>
//             auction.status !== "ended" && console.log("Auction Ended")
//           }
//         >
//           End Auction
//         </Button>
//       </div>

//       <style jsx global>{`
//         .custom-table-row td {
//           padding: 12px 16px !important;
//           background: white !important;
//         }
//         .ant-table-tbody > tr > td {
//           border-bottom: 8px solid #f8f9fa !important;
//         }
//         /* Ensure table header doesn't wrap awkwardly on mobile */
//         .ant-table-thead > tr > th {
//           white-space: nowrap;
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import React, { useState, useMemo, useEffect } from "react";
// import {
//   Table,
//   Tag,
//   Avatar,
//   Button,
//   Card,
//   Row,
//   Col,
//   Space,
//   Typography,
//   Badge,
//   Statistic,
//   Pagination,
// } from "antd";
// import {
//   ClockCircleOutlined,
//   DollarOutlined,
//   FireOutlined,
//   TeamOutlined,
//   TrophyFilled,
// } from "@ant-design/icons";
// import { useAuctionRealtime } from "@/src/hooks/useAuctionRealtime";
// import Cookies from "js-cookie";

// const { Title, Text } = Typography;

// export default function AuctionDetailView({
//   auctionData,
//   onBack,
//   onActionSuccess,
// }: any) {
//   // 1. Extract pieces from the nested data
//   const auction = auctionData.auction || {};
//   const initialParticipantsList = auctionData.participants?.results || [];

//   const token = Cookies.get("accessToken") || "";

//   // 2. Real-time Hook
//   const {
//     participants: realtimeParticipants,
//     currentBid: realtimeCurrentBid,
//     remainingSeconds,
//     isConnected,
//     totalBids,
//     lastBidData,
//     winnerData,
//   } = useAuctionRealtime({
//     auctionId: auction.auction_id,
//     token,
//     isAdmin: true,
//   });

//   // 3. The "Master Merge" Logic
//   const tableData = useMemo(() => {
//     const participantMap = new Map();

//     // Fill with Initial REST Data
//     initialParticipantsList.forEach((p: any) => {
//       participantMap.set(p.user_id, {
//         key: p.user_id,
//         id: p.user_id,
//         name: p.user_name,
//         email: p.user_email,
//         avatar:
//           p.avatar_url ||
//           `https://api.dicebear.com/7.x/avataaars/svg?seed=${p.user_id}`,
//         status: p.status,
//         winningBids: p.bids_count || 0,
//         totalCoinsSpent: p.total_coins_spent || 0,
//         is_winner: p.status === "Winner",
//       });
//     });

//     // Overlay Real-time Socket Data
//     realtimeParticipants.forEach((rtp: any) => {
//       const existing = participantMap.get(rtp.user_id);
//       if (existing) {
//         participantMap.set(rtp.user_id, {
//           ...existing,
//           winningBids: rtp.bid_count,
//           totalCoinsSpent: rtp.total_coins_spent,
//           lastBidTime: rtp.last_bid_time,
//           lastBidNumber: rtp.last_bid_number,
//           is_winner: rtp.is_winner || existing.is_winner,
//         });
//       } else {
//         // New user joined while admin was watching
//         participantMap.set(rtp.user_id, {
//           key: rtp.user_id,
//           id: rtp.user_id,
//           name: rtp.user_name,
//           email: rtp.email || "New Joiner",
//           avatar:
//             rtp.avatar ||
//             `https://api.dicebear.com/7.x/avataaars/svg?seed=${rtp.user_id}`,
//           status: "Participant",
//           winningBids: rtp.bid_count,
//           totalCoinsSpent: rtp.total_coins_spent,
//           lastBidTime: rtp.last_bid_time,
//           lastBidNumber: rtp.last_bid_number,
//           is_winner: rtp.is_winner,
//         });
//       }
//     });

//     // Handle final winner announcement
//     if (winnerData?.winner_id) {
//       const winner = participantMap.get(winnerData.winner_id);
//       if (winner) {
//         participantMap.set(winnerData.winner_id, {
//           ...winner,
//           status: "Winner",
//           is_winner: true,
//         });
//       }
//     }

//     return Array.from(participantMap.values()).sort(
//       (a, b) => b.winningBids - a.winningBids,
//     );
//   }, [initialParticipantsList, realtimeParticipants, winnerData]);

//   const displayCurrentBid = realtimeCurrentBid || auction.auction_price || 0;

//   // Table Columns
//   const columns = [
//     {
//       title: "User",
//       dataIndex: "name",
//       render: (_: any, record: any) => (
//         <Space>
//           <Avatar src={record.avatar} />
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <Text strong>{record.name}</Text>
//             <Text type="secondary" style={{ fontSize: "11px" }}>
//               {record.email}
//             </Text>
//           </div>
//         </Space>
//       ),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (status: string, record: any) =>
//         record.is_winner ? (
//           <Tag color="gold" icon={<TrophyFilled />}>
//             Winner
//           </Tag>
//         ) : (
//           <Tag>Participant</Tag>
//         ),
//     },
//     {
//       title: "Bids Placed",
//       dataIndex: "winningBids",
//       render: (val: number) => <Tag color="blue">{val} Bids</Tag>,
//     },
//     {
//       title: "Coins Spent",
//       dataIndex: "totalCoinsSpent",
//       render: (val: number) => <Text strong>{val} Coins</Text>,
//     },
//   ];

//   return (
//     <div style={{ padding: "24px" }}>
//       <Button onClick={onBack} style={{ marginBottom: "20px" }}>
//         Back
//       </Button>

//       {/* Stats Section */}
//       <Card
//         style={{ marginBottom: "20px", background: "#001529", color: "white" }}
//       >
//         <Row gutter={16}>
//           <Col span={6}>
//             <Statistic
//               title={<span style={{ color: "#fff" }}>Current Bid</span>}
//               value={displayCurrentBid}
//               prefix="$"
//               valueStyle={{ color: "#fff" }}
//             />
//           </Col>
//           <Col span={6}>
//             <Statistic
//               title={<span style={{ color: "#fff" }}>Participants</span>}
//               value={tableData.length}
//               valueStyle={{ color: "#52c41a" }}
//             />
//           </Col>
//           <Col span={12} style={{ textAlign: "right" }}>
//             <Badge
//               status={isConnected ? "success" : "error"}
//               text={
//                 <span style={{ color: "#fff" }}>
//                   {isConnected ? "Live" : "Offline"}
//                 </span>
//               }
//             />
//           </Col>
//         </Row>
//       </Card>

//       <Title level={4}>Live Participants</Title>
//       <Table
//         dataSource={tableData}
//         columns={columns}
//         pagination={{ pageSize: 5 }}
//       />
//     </div>
//   );
// }
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Table,
  Tag,
  Avatar,
  Button,
  Card,
  Row,
  Col,
  Space,
  Typography,
  ConfigProvider,
  Grid,
  Pagination,
  message,
  Popconfirm,
  Badge,
} from "antd";
import {
  TeamOutlined,
  TrophyFilled,
  ArrowLeftOutlined,
  DeleteOutlined,
  PoweroffOutlined,
  CrownOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { auctionService } from "@/src/services/auctionService";
import { socketService } from "@/src/services/socketService";
import Cookies from "js-cookie";
import { getFirstImageForAuction } from "@/src/utils/getFirstImageForAuction";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

interface Participant {
  user_id: number;
  user_name: string;
  avatar: string | null;
  status: string;
  coin_balance: number;
  refundable_coin_text: string;
  winning_bids_text: string;
  is_winner: boolean;
  is_leading: boolean;
  total_bids: number;
}

interface LiveBidUsersResponse {
  auction_id: string;
  participants: Participant[];
}

interface AuctionDetailProps {
  auctionData: any; // Changed from 'auction' to 'auctionData'
  onBack: () => void;
  onActionSuccess?: () => void;
}

export default function AuctionDetailView({
  auctionData,
  onBack,
  onActionSuccess,
}: AuctionDetailProps) {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [loading, setLoading] = useState(false);
  const [liveParticipants, setLiveParticipants] = useState<Participant[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Extract auction object from auctionData
  const auction = auctionData?.auction || auctionData || {};

  const token = Cookies.get("accessToken") || "";

  // Connect to socket and fetch live data
  useEffect(() => {
    if (!token || !auction?.auction_id) return;

    // Connect socket
    socketService.connect(token, () => {
      console.log("✅ Socket connected for auction detail");
      setIsConnected(true);

      // Monitor auction (admin view)
      socketService.monitorAuction(auction.auction_id);

      // Request live bid users data
      const socket = socketService.getSocket();
      if (socket) {
        socket.emit("live_bid_users", { auction_id: auction.auction_id });
      }
    });

    // Listen for live bid users response
    const socket = socketService.getSocket();
    if (socket) {
      socket.on("live_bid_users_response", (data: LiveBidUsersResponse) => {
        console.log("📊 Live bid users received:", data);
        if (data.participants) {
          setLiveParticipants(data.participants);
        }
      });

      // Listen for new bids to update the table
      socket.on("new_bid", (bidData: any) => {
        console.log("💰 New bid received:", bidData);
        // Request updated participant list
        socket.emit("live_bid_users", { auction_id: auction.auction_id });
      });

      // Listen for auction ended
      socket.on("auction_ended", (endData: any) => {
        console.log("🏁 Auction ended:", endData);
        // Request final participant list
        socket.emit("live_bid_users", { auction_id: auction.auction_id });
        message.success("Auction has ended!");
      });
    }

    // Cleanup
    return () => {
      const socket = socketService.getSocket();
      if (socket) {
        socket.off("live_bid_users_response");
        socket.off("new_bid");
        socket.off("auction_ended");
      }
    };
  }, [auction?.auction_id, token]);

  const handleEndAuction = async () => {
    if (!auction?.auction_id) return;

    setLoading(true);
    try {
      await auctionService.endAuction(auction.auction_id);
      message.success("Auction has been ended.");
      if (onActionSuccess) onActionSuccess();
      onBack();
    } catch (error) {
      message.error("Failed to end auction.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAuction = async () => {
    if (!auction?.auction_id) return;

    setLoading(true);
    try {
      await auctionService.deleteAuction(auction.auction_id);
      message.success("Auction deleted successfully.");
      if (onActionSuccess) onActionSuccess();
      onBack();
    } catch (error) {
      message.error("Failed to delete auction.");
    } finally {
      setLoading(false);
    }
  };

  // Format participant data with fallbacks
  const formattedParticipants = useMemo(() => {
    return liveParticipants.map((p) => ({
      key: p.user_id,
      id: p.user_id,
      name: p.user_name || "N/A",
      email: p.user_name || "N/A",
      avatar:
        p.avatar ||
        `https://api.dicebear.com/7.x/avataaars/svg?seed=${p.user_id}`,
      status: p.status || "N/A",
      coinBalance: p.coin_balance ?? 0,
      refundableCoin: p.refundable_coin_text || "N/A",
      winningBids: p.winning_bids_text || "0 Bids",
      isWinner: p.is_winner || false,
      isLeading: p.is_leading || false,
      totalBids: p.total_bids ?? 0,
    }));
  }, [liveParticipants]);

  // Paginated data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return formattedParticipants.slice(startIndex, endIndex);
  }, [formattedParticipants, currentPage]);

  // Desktop Table Columns
  const columns = [
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Avatar
            src={record.avatar}
            size={48}
            style={{ border: "1px solid #f0f0f0" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Space>
              <Text strong style={{ fontSize: "14px" }}>
                {record.name}
              </Text>
              {record.isLeading && (
                <Badge
                  count={
                    <CrownOutlined style={{ color: "#faad14", fontSize: 16 }} />
                  }
                />
              )}
            </Space>
            <Text type="secondary" style={{ fontSize: "12px" }}>
              {record.email}
            </Text>
          </div>
        </Space>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string, record: any) => {
        if (record.isWinner) {
          return (
            <Tag
              icon={<TrophyFilled />}
              style={{
                backgroundColor: "#FFF7E6",
                borderRadius: "6px",
                padding: "4px 12px",
                fontWeight: "bold",
                border: "none",
                color: "#faad14",
              }}
            >
              Winner
            </Tag>
          );
        } else if (record.isLeading) {
          return (
            <Tag
              icon={<CrownOutlined />}
              style={{
                backgroundColor: "#FFF7E6",
                borderRadius: "6px",
                padding: "4px 12px",
                fontWeight: "bold",
                border: "none",
                color: "#faad14",
              }}
            >
              Leading
            </Tag>
          );
        } else {
          return (
            <Text strong style={{ color: "#595959" }}>
              {status}
            </Text>
          );
        }
      },
    },
    {
      title: "Coin Balance",
      dataIndex: "coinBalance",
      render: (val: number) => (
        <Text strong style={{ fontSize: "15px" }}>
          {val}
        </Text>
      ),
    },
    {
      title: "Refundable Coin",
      dataIndex: "refundableCoin",
      render: (val: string) => (
        <Button
          style={{
            borderRadius: "6px",
            background: val === "N/A" ? "#a0a0a0" : "#b1b1b1",
            color: "#fff",
            border: "none",
            fontSize: "13px",
            height: "32px",
            minWidth: "160px",
          }}
        >
          {val === "N/A" ? "Not Refundable" : val}
        </Button>
      ),
    },
    {
      title: "Winning Bids",
      dataIndex: "winningBids",
      render: (val: string) => (
        <Tag
          style={{
            borderRadius: "6px",
            padding: "4px 16px",
            fontSize: "14px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          {val}
        </Tag>
      ),
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "publish":
      case "live":
        return "#DC2626";
      case "invalid":
        return "#DC2626";
      case "upcoming":
      case "schedule":
        return "#000000";
      default:
        return "#bfbfbf";
    }
  };

  // Early return if no auction data
  if (!auction || !auction.auction_id) {
    return (
      <div style={{ padding: "24px", textAlign: "center" }}>
        <Text type="secondary">No auction data available</Text>
      </div>
    );
  }

  return (
    <div style={{ padding: isMobile ? "12px" : "24px", background: "#f8f9fa" }}>
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={onBack}
        style={{
          marginBottom: "20px",
          borderRadius: "8px",
          width: isMobile ? "100%" : "auto",
        }}
      >
        Back to Auctions
      </Button>

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
                src={getFirstImageForAuction(
                  auction.product_image_url || auction.image,
                )}
                fill
                style={{ objectFit: "cover", borderRadius: "8px" }}
                alt={auction.product_name || auction.title || "Auction Product"}
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
              {auction.product_name || auction.title || "N/A"}
            </h3>
            <Space
              style={{ color: "#8c8c8c", fontSize: "12px", marginTop: "4px" }}
            >
              <span>
                <TeamOutlined />{" "}
                {formattedParticipants.length || auction.participant_count || 0}{" "}
                participants
              </span>
              <Badge
                status={isConnected ? "success" : "error"}
                text={isConnected ? "Live" : "Offline"}
              />
            </Space>

            <Row gutter={8} style={{ marginTop: "16px" }}>
              {["Market Price", "Auction Price", "Category"].map(
                (label, idx) => (
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
                        ? `$${auction.market_price || auction.marketPrice || "N/A"}`
                        : idx === 1
                          ? `$${auction.auction_price || auction.auctionPrice || "N/A"}`
                          : auction.category_name || auction.category || "N/A"}
                    </div>
                  </Col>
                ),
              )}
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
              borderTop: isMobile ? "1px solid #f0f0f0" : "none",
              paddingTop: isMobile ? "12px" : "0",
            }}
          >
            <Tag
              style={{
                backgroundColor: getStatusColor(auction.status || ""),
                color: "#fff",
                borderRadius: "6px",
                padding: "4px 16px",
                fontWeight: "600",
                textTransform: "capitalize",
                border: "none",
                margin: 0,
              }}
            >
              {auction.status || "N/A"}
            </Tag>
          </Col>
        </Row>
      </Card>

      <Title level={4} style={{ marginBottom: "20px" }}>
        👥 Live Bid Users ({formattedParticipants.length})
      </Title>

      {formattedParticipants.length === 0 ? (
        <Card style={{ textAlign: "center", padding: "40px" }}>
          <Text type="secondary">No participants yet</Text>
        </Card>
      ) : !isMobile ? (
        <>
          <ConfigProvider
            theme={{
              components: {
                Table: {
                  headerBg: "transparent",
                  headerColor: "#000",
                  rowHoverBg: "#fafafa",
                },
              },
            }}
          >
            <Table
              columns={columns}
              dataSource={paginatedData}
              pagination={false}
              rowClassName={() => "custom-table-row"}
            />
          </ConfigProvider>
          <div style={{ marginTop: "16px", textAlign: "right" }}>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={formattedParticipants.length}
              onChange={(page) => setCurrentPage(page)}
              showTotal={(total, range) =>
                `Showing ${range[0]} to ${range[1]} of ${total} results`
              }
            />
          </div>
        </>
      ) : (
        <>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {paginatedData.map((record) => (
              <Card
                key={record.key}
                style={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                }}
                styles={{ body: { padding: "16px" } }}
              >
                <Row gutter={[12, 12]} align="middle">
                  <Col span={24}>
                    <Space size="middle">
                      <Avatar src={record.avatar} size={40} />
                      <div>
                        <Space>
                          <Text strong style={{ display: "block" }}>
                            {record.name}
                          </Text>
                          {record.isLeading && (
                            <CrownOutlined
                              style={{ color: "#faad14", fontSize: 16 }}
                            />
                          )}
                        </Space>
                        <Text type="secondary" style={{ fontSize: "12px" }}>
                          {record.email}
                        </Text>
                      </div>
                      <div style={{ marginLeft: "auto" }}>
                        {record.isWinner ? (
                          <Tag
                            color="gold"
                            icon={<TrophyFilled />}
                            style={{ margin: 0 }}
                          >
                            Winner
                          </Tag>
                        ) : record.isLeading ? (
                          <Tag
                            color="gold"
                            icon={<CrownOutlined />}
                            style={{ margin: 0 }}
                          >
                            Leading
                          </Tag>
                        ) : null}
                      </div>
                    </Space>
                  </Col>

                  <Col span={12}>
                    <Text
                      type="secondary"
                      style={{ display: "block", fontSize: "11px" }}
                    >
                      Coin Balance
                    </Text>
                    <Text strong>{record.coinBalance}</Text>
                  </Col>

                  <Col span={12} style={{ textAlign: "right" }}>
                    <Text
                      type="secondary"
                      style={{ display: "block", fontSize: "11px" }}
                    >
                      Winning Bids
                    </Text>
                    <Tag
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        margin: 0,
                      }}
                    >
                      {record.winningBids}
                    </Tag>
                  </Col>

                  <Col span={24}>
                    <Button
                      block
                      style={{
                        borderRadius: "8px",
                        background:
                          record.refundableCoin === "N/A"
                            ? "#f0f0f0"
                            : "#b1b1b1",
                        color:
                          record.refundableCoin === "N/A" ? "#bfbfbf" : "#fff",
                        border: "none",
                      }}
                    >
                      {record.refundableCoin === "N/A"
                        ? "Not Refundable"
                        : record.refundableCoin}
                    </Button>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
          <Pagination
            simple
            current={currentPage}
            total={formattedParticipants.length}
            pageSize={pageSize}
            onChange={(page) => setCurrentPage(page)}
            style={{ textAlign: "center", marginTop: "16px" }}
          />
        </>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-end",
          marginTop: "24px",
        }}
      >
        {auction.status === "schedule" ? (
          <Popconfirm
            title="Delete Auction"
            description="Are you sure you want to delete this upcoming auction?"
            onConfirm={handleDeleteAuction}
            okText="Yes"
            cancelText="No"
          >
            <Button
              danger
              type="primary"
              size="large"
              block={isMobile}
              loading={loading}
              icon={<DeleteOutlined />}
              style={{
                height: "45px",
                fontWeight: "bold",
                borderRadius: "8px",
                backgroundColor: "#DC2626",
                border: "none",
              }}
            >
              Delete Auction
            </Button>
          </Popconfirm>
        ) : auction.status === "publish" ? (
          <Popconfirm
            title="End Auction"
            description="Are you sure you want to end this live auction?"
            onConfirm={handleEndAuction}
            okText="Yes"
            cancelText="No"
          >
            <Button
              danger
              type="primary"
              size="large"
              block={isMobile}
              loading={loading}
              icon={<PoweroffOutlined />}
              style={{
                height: "45px",
                fontWeight: "bold",
                borderRadius: "8px",
                backgroundColor: "#DC2626",
                border: "none",
              }}
            >
              End Auction
            </Button>
          </Popconfirm>
        ) : (
          <Button
            disabled
            size="large"
            block={isMobile}
            style={{
              height: "45px",
              fontWeight: "bold",
              borderRadius: "8px",
              backgroundColor: "#e0e0e0",
              border: "none",
            }}
          >
            Auction Ended
          </Button>
        )}
      </div>

      <style jsx global>{`
        .custom-table-row td {
          padding: 12px 16px !important;
          background: white !important;
        }
        .ant-table-tbody > tr > td {
          border-bottom: 8px solid #f8f9fa !important;
        }
      `}</style>
    </div>
  );
}
