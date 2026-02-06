/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState, useMemo } from "react";
// import { Input, Button, Tabs, Card, Row, Col, Tag, Space, Empty } from "antd";
// import {
//   SearchOutlined,
//   PlusOutlined,
//   ClockCircleOutlined,
//   TeamOutlined,
//   EditOutlined,
//   EyeOutlined,
// } from "@ant-design/icons";
// import DashboardLayout from "@/src/components/layout/DashboardLayout";
// import Image from "next/image";
// import { AuctionFormModal } from "@/src/components/auctions/AuctionFormModal";
// import AuctionDetailView from "@/src/components/auctions/AuctionView";

// // --- Mock Data ---
// const auctionsData = [
//   {
//     id: 1,
//     title: "Iphone 14 Pro Max",
//     time: "2h 34m",
//     participants: 45,
//     marketPrice: "SAR 895",
//     auctionPrice: "SAR 500",
//     category: "Phone",
//     image:
//       "https://p-m.com.sa/wp-content/uploads/2022/09/iphone-14-pro-max-gold.jpg",
//     status: "ended",
//   },
//   {
//     id: 2,
//     title: "Macbook Pro",
//     time: "2h 34m",
//     participants: 45,
//     currentPrice: "SAR 895",
//     auctionPrice: "SAR 400",
//     category: "Laptop",
//     image:
//       "https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e66769499v6u_large.jpg",
//     status: "invalid",
//   },
//   {
//     id: 3,
//     title: "BMW Car",
//     time: "2h 34m",
//     participants: 45,
//     currentPrice: "SAR 895",
//     auctionPrice: "SAR 320",
//     category: "Car",
//     image:
//       "https://media.istockphoto.com/id/1419936488/photo/bmw-m4.jpg?s=2048x2048&w=is&k=20&c=r_ylR20mRRM73xnyFUWsCx_thHmSHWirhVrghT5gBRY=",
//     status: "upcoming",
//   },
//   {
//     id: 4,
//     title: "BMW Car",
//     time: "2h 34m",
//     participants: 45,
//     currentPrice: "SAR 895",
//     auctionPrice: "SAR 320",
//     category: "Car",
//     image:
//       "https://media.istockphoto.com/id/1419936488/photo/bmw-m4.jpg?s=2048x2048&w=is&k=20&c=r_ylR20mRRM73xnyFUWsCx_thHmSHWirhVrghT5gBRY=",
//     status: "live",
//   },
//   {
//     id: 5,
//     title: "BMW Car",
//     time: "2h 34m",
//     participants: 45,
//     currentPrice: "SAR 895",
//     auctionPrice: "SAR 320",
//     category: "Car",
//     image:
//       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
//     status: "live",
//   },
//   {
//     id: 6,
//     title: "BMW Car",
//     time: "2h 34m",
//     participants: 45,
//     currentPrice: "SAR 895",
//     auctionPrice: "SAR 320",
//     category: "Car",
//     image:
//       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
//     status: "live",
//   },
//   {
//     id: 7,
//     title: "BMW Car",
//     time: "2h 34m",
//     participants: 45,
//     currentPrice: "SAR 895",
//     auctionPrice: "SAR 320",
//     category: "Car",
//     image:
//       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
//     status: "live",
//   },
//   {
//     id: 9,
//     title: "BMW Car",
//     time: "2h 34m",
//     participants: 45,
//     currentPrice: "SAR 895",
//     auctionPrice: "SAR 320",
//     category: "Car",
//     image:
//       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
//     status: "live",
//   },
//   {
//     id: 8,
//     title: "BMW Car",
//     time: "2h 34m",
//     participants: 45,
//     currentPrice: "SAR 895",
//     auctionPrice: "SAR 320",
//     category: "Car",
//     image:
//       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
//     status: "invalid",
//   },
// ];

// export default function AuctionsPage() {
//   const [searchText, setSearchText] = useState("");
//   const [activeTab, setActiveTab] = useState("live");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingAuction, setEditingAuction] = useState(null);
//   const [selectedAuction, setSelectedAuction] = useState<any>(null);

//   const handleAdd = () => {
//     setEditingAuction(null); // Clear initial values
//     setIsModalOpen(true);
//   };

//   const handleEdit = (auction: any) => {
//     setEditingAuction(auction); // Pass existing data
//     setIsModalOpen(true);
//   };

//   const onFormFinish = (values: any) => {
//     console.log("Form Received:", values);
//     setIsModalOpen(false);
//     // Here you would call your API to save/update
//   };

//   const counts = useMemo(() => {
//     return {
//       live: auctionsData.filter((item) => item.status === "live").length,
//       upcoming: auctionsData.filter((item) => item.status === "upcoming")
//         .length,
//       invalid: auctionsData.filter((item) => item.status === "invalid").length,
//       ended: auctionsData.filter((item) => item.status === "ended").length,
//     };
//   }, []);

//   const filteredData = auctionsData.filter((item) => {
//     const matchesSearch = item.title
//       .toLowerCase()
//       .includes(searchText.toLowerCase());
//     const matchesStatus = item.status === activeTab;
//     return matchesSearch && matchesStatus;
//   });

//   // If we clicked View, show the component we made above
//   if (selectedAuction) {
//     return (
//       <DashboardLayout>
//         <AuctionDetailView
//           auction={selectedAuction}
//           onBack={() => setSelectedAuction(null)}
//         />
//       </DashboardLayout>
//     );
//   }

//   const renderAuctionCard = (item: any) => (
//     <Card
//       key={item.id}
//       style={{
//         marginBottom: "16px",
//         borderRadius: "12px",
//         border: item.isFocused ? "2px solid #1890ff" : "1px solid #f0f0f0",
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
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "flex-start",
//             }}
//           >
//             <div>
//               <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
//                 {item.title}
//               </h3>
//               <Space
//                 style={{ color: "#8c8c8c", fontSize: "14px", marginTop: "4px" }}
//               >
//                 <span>
//                   <ClockCircleOutlined /> {item.time}
//                 </span>
//                 <span>
//                   <TeamOutlined /> {item.participants}
//                 </span>
//               </Space>
//             </div>
//           </div>

//           <Row gutter={16} style={{ marginTop: "16px" }}>
//             <Col span={8}>
//               <div style={{ color: "#8c8c8c", fontSize: "14px" }}>
//                 {item.marketPrice ? "market Price" : "Current Price"}
//               </div>
//               <div style={{ fontWeight: "bold", fontSize: "16px" }}>
//                 {item.marketPrice || item.currentPrice}
//               </div>
//             </Col>
//             <Col
//               span={8}
//               style={{ borderLeft: "1px solid #f0f0f0", paddingLeft: "16px" }}
//             >
//               <div style={{ color: "#8c8c8c", fontSize: "14px" }}>
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
//               <div style={{ color: "#8c8c8c", fontSize: "14px" }}>Category</div>
//               <div style={{ fontWeight: "bold", fontSize: "16px" }}>
//                 {item.category}
//               </div>
//             </Col>
//           </Row>
//         </Col>

//         {/* Action column with Top-Right Tag and Bottom-Right Buttons */}
//         <Col
//           xs={24}
//           sm={4}
//           style={{
//             marginTop: "16px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center", // Centering vertically in the middle of the card
//             alignItems: "flex-end", // Keeping items aligned to the right side
//             gap: "16px", // Increased gap slightly for a cleaner look
//             height: "100%", // Ensures the column uses the full height of the Row
//           }}
//         >
//           <Tag
//             color={
//               item.status === "live" || item.status === "invalid"
//                 ? "#f5222d"
//                 : item.status === "upcoming"
//                   ? "#000000"
//                   : "#bfbfbf"
//             }
//             style={{
//               borderRadius: "8px",
//               padding: "4px 16px",
//               fontWeight: "bold",
//               textTransform: "capitalize",
//               border: "none",
//               margin: 0,
//             }}
//           >
//             {item.status}
//           </Tag>

//           <Space size="small">
//             {(item.status === "live" || item.status === "upcoming") && (
//               <Button
//                 onClick={handleEdit}
//                 icon={<EditOutlined />}
//                 style={{ borderRadius: "8px", fontWeight: "500" }}
//               >
//                 Edit
//               </Button>
//             )}
//             <Button
//               onClick={() => setSelectedAuction(item)}
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

//   const tabItems = [
//     { label: `Live (${counts.live})`, key: "live" },
//     { label: `Upcoming (${counts.upcoming})`, key: "upcoming" },
//     { label: `Invalid (${counts.invalid})`, key: "invalid" },
//     { label: `Ended (${counts.ended})`, key: "ended" },
//   ];

//   return (
//     <DashboardLayout>
//       <div style={{ padding: "24px" }}>
//         <Row
//           gutter={16}
//           justify="space-between"
//           align="middle"
//           style={{ marginBottom: "24px" }}
//         >
//           <Col flex="auto">
//             <Input
//               placeholder="Search Auctions"
//               prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
//               style={{ borderRadius: "8px", height: "45px", maxWidth: "90%" }}
//               onChange={(e) => setSearchText(e.target.value)}
//             />
//           </Col>
//           <Col>
//             <Button
//               type="primary"
//               onClick={handleAdd}
//               icon={<PlusOutlined />}
//               size="large"
//               style={{
//                 borderRadius: "8px",
//                 height: "45px",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               Add Auction
//             </Button>
//           </Col>
//         </Row>

//         <Tabs
//           activeKey={activeTab}
//           onChange={(key) => setActiveTab(key)}
//           items={tabItems}
//           style={{ marginBottom: "16px" }}
//           className="custom-tabs"
//         />

//         <div
//           style={{
//             maxHeight: "calc(100vh - 250px)",
//             overflowY: "auto",
//             paddingRight: "8px",
//           }}
//         >
//           {filteredData.length > 0 ? (
//             filteredData.map((item) => renderAuctionCard(item))
//           ) : (
//             <Empty
//               description={`No ${activeTab} auctions found`}
//               style={{ marginTop: "40px" }}
//             />
//           )}
//         </div>
//       </div>

//       <AuctionFormModal
//         open={isModalOpen}
//         initialValues={editingAuction}
//         onCancel={() => setIsModalOpen(false)}
//         onFinish={onFormFinish}
//         title={editingAuction ? "Edit Auction" : "Add Auction"}
//       />

//       <style jsx global>{`
//         .custom-tabs .ant-tabs-nav::before {
//           border-bottom: none !important;
//         }
//         .custom-tabs .ant-tabs-tab {
//           background: #f0f2f5 !important;
//           border-radius: 20px !important;
//           padding: 4px 20px !important;
//           margin-right: 12px !important;
//           border: none !important;
//         }
//         .custom-tabs .ant-tabs-tab-active {
//           background: #fff !important;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//         }
//         .custom-tabs .ant-tabs-ink-bar {
//           display: none !important;
//         }
//       `}</style>
//     </DashboardLayout>
//   );
// }

// import DashboardLayout from "@/src/components/layout/DashboardLayout";
// import AuctionManager from "@/src/components/auctions/AuctionManager";

// export default function AuctionsPage() {
//   return (
//     <DashboardLayout>
//       <AuctionManager />
//     </DashboardLayout>
//   );
// }

import DashboardLayout from "@/src/components/layout/DashboardLayout";
import AuctionManager from "@/src/components/auctions/AuctionManager";
import { auctionService } from "@/src/services/auctionService";

export default async function AuctionsPage() {
  // Initial fetch on the server
  let initialData: any[] = [];
  try {
    initialData = await auctionService.getAllAuctions();
  } catch (err) {
    console.error("Failed to load auctions on server", err);
  }

  return (
    <DashboardLayout>
      <AuctionManager initialAuctions={initialData} />
    </DashboardLayout>
  );
}
