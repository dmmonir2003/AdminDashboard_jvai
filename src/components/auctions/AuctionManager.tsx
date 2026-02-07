/* eslint-disable @typescript-eslint/no-explicit-any */
// // "use client";

// // import React, { useState, useMemo } from "react";
// // import { Row, Col, Input, Button, Tabs, Empty } from "antd";
// // import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
// // import { AuctionFormModal } from "@/src/components/auctions/AuctionFormModal";
// // import AuctionDetailView from "@/src/components/auctions/AuctionView";
// // import AuctionCard from "./AuctionCard";

// // // Mock Data (Moved inside or imported)
// // const auctionsData = [
// //   {
// //     id: 1,
// //     title: "Iphone 14 Pro Max",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 500",
// //     category: "Phone",
// //     image:
// //       "https://p-m.com.sa/wp-content/uploads/2022/09/iphone-14-pro-max-gold.jpg",
// //     status: "ended",
// //   },
// //   {
// //     id: 2,
// //     title: "Macbook Pro",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 400",
// //     category: "Laptop",
// //     image:
// //       "https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e66769499v6u_large.jpg",
// //     status: "invalid",
// //   },
// //   {
// //     id: 3,
// //     title: "BMW Car",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 320",
// //     category: "Car",
// //     image:
// //       "https://media.istockphoto.com/id/1419936488/photo/bmw-m4.jpg?s=2048x2048&w=is&k=20&c=r_ylR20mRRM73xnyFUWsCx_thHmSHWirhVrghT5gBRY=",
// //     status: "upcoming",
// //   },
// //   {
// //     id: 4,
// //     title: "BMW Car",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 320",
// //     category: "Car",
// //     image:
// //       "https://media.istockphoto.com/id/1419936488/photo/bmw-m4.jpg?s=2048x2048&w=is&k=20&c=r_ylR20mRRM73xnyFUWsCx_thHmSHWirhVrghT5gBRY=",
// //     status: "live",
// //   },
// //   {
// //     id: 5,
// //     title: "BMW Car",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 320",
// //     category: "Car",
// //     image:
// //       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
// //     status: "live",
// //   },
// //   {
// //     id: 6,
// //     title: "BMW Car",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 320",
// //     category: "Car",
// //     image:
// //       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
// //     status: "live",
// //   },
// //   {
// //     id: 7,
// //     title: "BMW Car",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 320",
// //     category: "Car",
// //     image:
// //       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
// //     status: "live",
// //   },
// //   {
// //     id: 9,
// //     title: "BMW Car",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 320",
// //     category: "Car",
// //     image:
// //       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
// //     status: "live",
// //   },
// //   {
// //     id: 8,
// //     title: "BMW Car",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 320",
// //     category: "Car",
// //     image:
// //       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
// //     status: "invalid",
// //   },
// // ];

// // export default function AuctionManager() {
// //   const [searchText, setSearchText] = useState("");
// //   const [activeTab, setActiveTab] = useState("live");
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [editingAuction, setEditingAuction] = useState(null);
// //   const [selectedAuction, setSelectedAuction] = useState<any>(null);

// //   const counts = useMemo(
// //     () => ({
// //       live: auctionsData.filter((item) => item.status === "live").length,
// //       upcoming: auctionsData.filter((item) => item.status === "upcoming")
// //         .length,
// //       invalid: auctionsData.filter((item) => item.status === "invalid").length,
// //       ended: auctionsData.filter((item) => item.status === "ended").length,
// //     }),
// //     [],
// //   );

// //   const filteredData = auctionsData.filter((item) => {
// //     const matchesSearch = item.title
// //       .toLowerCase()
// //       .includes(searchText.toLowerCase());
// //     return matchesSearch && item.status === activeTab;
// //   });

// //   if (selectedAuction) {
// //     return (
// //       <AuctionDetailView
// //         auction={selectedAuction}
// //         onBack={() => setSelectedAuction(null)}
// //       />
// //     );
// //   }

// //   return (
// //     <div style={{ padding: "24px" }}>
// //       <Row
// //         gutter={16}
// //         justify="space-between"
// //         align="middle"
// //         style={{ marginBottom: "24px" }}
// //       >
// //         <Col flex="auto">
// //           <Input
// //             placeholder="Search Auctions"
// //             prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
// //             style={{ borderRadius: "8px", height: "45px", maxWidth: "90%" }}
// //             onChange={(e) => setSearchText(e.target.value)}
// //           />
// //         </Col>
// //         <Col>
// //           <Button
// //             type="primary"
// //             onClick={() => {
// //               setEditingAuction(null);
// //               setIsModalOpen(true);
// //             }}
// //             icon={<PlusOutlined />}
// //             size="large"
// //             style={{
// //               borderRadius: "8px",
// //               height: "45px",
// //               display: "flex",
// //               alignItems: "center",
// //             }}
// //           >
// //             Add Auction
// //           </Button>
// //         </Col>
// //       </Row>

// //       <Tabs
// //         activeKey={activeTab}
// //         onChange={setActiveTab}
// //         items={[
// //           { label: `Live (${counts.live})`, key: "live" },
// //           { label: `Upcoming (${counts.upcoming})`, key: "upcoming" },
// //           { label: `Invalid (${counts.invalid})`, key: "invalid" },
// //           { label: `Ended (${counts.ended})`, key: "ended" },
// //         ]}
// //         style={{ marginBottom: "16px" }}
// //         className="custom-tabs"
// //       />

// //       <div
// //         style={{
// //           maxHeight: "calc(100vh - 250px)",
// //           overflowY: "auto",
// //           paddingRight: "8px",
// //         }}
// //       >
// //         {filteredData.length > 0 ? (
// //           filteredData.map((item) => (
// //             <AuctionCard
// //               key={item.id}
// //               item={item}
// //               onEdit={(auction: React.SetStateAction<null>) => {
// //                 setEditingAuction(auction);
// //                 setIsModalOpen(true);
// //               }}
// //               onView={(auction: any) => setSelectedAuction(auction)}
// //             />
// //           ))
// //         ) : (
// //           <Empty
// //             description={`No ${activeTab} auctions found`}
// //             style={{ marginTop: "40px" }}
// //           />
// //         )}
// //       </div>

// //       <AuctionFormModal
// //         open={isModalOpen}
// //         initialValues={editingAuction}
// //         onCancel={() => setIsModalOpen(false)}
// //         onFinish={() => setIsModalOpen(false)}
// //         title={editingAuction ? "Edit Auction" : "Add Auction"}
// //       />

// //       <style jsx global>{`
// //         .custom-tabs .ant-tabs-nav::before {
// //           border-bottom: none !important;
// //         }
// //         .custom-tabs .ant-tabs-tab {
// //           background: #f0f2f5 !important;
// //           border-radius: 20px !important;
// //           padding: 4px 20px !important;
// //           margin-right: 12px !important;
// //           border: none !important;
// //         }
// //         .custom-tabs .ant-tabs-tab-active {
// //           background: #fff !important;
// //           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// //         }
// //         .custom-tabs .ant-tabs-ink-bar {
// //           display: none !important;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// /* eslint-disable @typescript-eslint/no-explicit-any */
// // "use client";

// // import React, { useState, useMemo } from "react";
// // import { Row, Col, Input, Button, Tabs, Empty, Grid } from "antd"; // 1. Added Grid
// // import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
// // import { AuctionFormModal } from "@/src/components/auctions/AuctionFormModal";
// // import AuctionDetailView from "@/src/components/auctions/AuctionView";
// // import AuctionCard from "./AuctionCard";

// // const { useBreakpoint } = Grid; // 2. Hook to detect screen size

// // // Mock Data remains the same...
// // const auctionsData = [
// //   {
// //     id: 1,
// //     title: "Iphone 14 Pro Max",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 500",
// //     category: "Phone",
// //     image:
// //       "https://p-m.com.sa/wp-content/uploads/2022/09/iphone-14-pro-max-gold.jpg",
// //     status: "ended",
// //   },
// //   {
// //     id: 2,
// //     title: "Macbook Pro",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 400",
// //     category: "Laptop",
// //     image:
// //       "https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e66769499v6u_large.jpg",
// //     status: "invalid",
// //   },
// //   {
// //     id: 3,
// //     title: "BMW Car",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 320",
// //     category: "Car",
// //     image:
// //       "https://media.istockphoto.com/id/1419936488/photo/bmw-m4.jpg?s=2048x2048&w=is&k=20&c=r_ylR20mRRM73xnyFUWsCx_thHmSHWirhVrghT5gBRY=",
// //     status: "upcoming",
// //   },
// //   {
// //     id: 4,
// //     title: "BMW Car",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 320",
// //     category: "Car",
// //     image:
// //       "https://media.istockphoto.com/id/1419936488/photo/bmw-m4.jpg?s=2048x2048&w=is&k=20&c=r_ylR20mRRM73xnyFUWsCx_thHmSHWirhVrghT5gBRY=",
// //     status: "live",
// //   },
// //   {
// //     id: 5,
// //     title: "BMW Car",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 320",
// //     category: "Car",
// //     image:
// //       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
// //     status: "live",
// //   },
// //   {
// //     id: 6,
// //     title: "BMW Car",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 320",
// //     category: "Car",
// //     image:
// //       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
// //     status: "live",
// //   },
// //   {
// //     id: 7,
// //     title: "BMW Car",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 320",
// //     category: "Car",
// //     image:
// //       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
// //     status: "live",
// //   },
// //   {
// //     id: 9,
// //     title: "BMW Car",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 320",
// //     category: "Car",
// //     image:
// //       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
// //     status: "live",
// //   },
// //   {
// //     id: 8,
// //     title: "BMW Car",
// //     time: "2h 34m",
// //     participants: 45,
// //     marketPrice: "SAR 895",
// //     auctionPrice: "SAR 320",
// //     category: "Car",
// //     image:
// //       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
// //     status: "invalid",
// //   },
// // ];

// // export default function AuctionManager() {
// //   const [searchText, setSearchText] = useState("");
// //   const [activeTab, setActiveTab] = useState("live");
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [editingAuction, setEditingAuction] = useState(null);
// //   const [selectedAuction, setSelectedAuction] = useState<any>(null);

// //   const screens = useBreakpoint(); // 3. Detect mobile
// //   const isMobile = !screens.md; // md is usually 768px

// //   const counts = useMemo(
// //     () => ({
// //       live: auctionsData.filter((item) => item.status === "live").length,
// //       upcoming: auctionsData.filter((item) => item.status === "upcoming")
// //         .length,
// //       invalid: auctionsData.filter((item) => item.status === "invalid").length,
// //       ended: auctionsData.filter((item) => item.status === "ended").length,
// //     }),
// //     [],
// //   );

// //   const filteredData = auctionsData.filter((item) => {
// //     const matchesSearch = item.title
// //       .toLowerCase()
// //       .includes(searchText.toLowerCase());
// //     return matchesSearch && item.status === activeTab;
// //   });

// //   if (selectedAuction) {
// //     return (
// //       <AuctionDetailView
// //         auction={selectedAuction}
// //         onBack={() => setSelectedAuction(null)}
// //       />
// //     );
// //   }

// //   return (
// //     <div style={{ padding: isMobile ? "16px" : "24px" }}>
// //       {" "}
// //       {/* Reduced padding for mobile */}
// //       <Row
// //         gutter={[16, 16]} // 4. Added vertical gutter for stacking
// //         justify="space-between"
// //         align="middle"
// //         style={{ marginBottom: "24px" }}
// //       >
// //         {/* 5. xs={24} forces full width on mobile, md={18} restores desktop view */}
// //         <Col xs={24} md={18} flex="auto">
// //           <Input
// //             placeholder="Search Auctions"
// //             prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
// //             style={{
// //               borderRadius: "8px",
// //               height: "45px",
// //               width: "100%", // Changed from maxWidth 90%
// //             }}
// //             onChange={(e) => setSearchText(e.target.value)}
// //           />
// //         </Col>

// //         {/* 6. xs={24} forces button to new line on mobile */}
// //         <Col xs={24} md={6} style={{ textAlign: isMobile ? "left" : "right" }}>
// //           <Button
// //             type="primary"
// //             block={isMobile} // 7. Button takes full width on mobile for better touch
// //             onClick={() => {
// //               setEditingAuction(null);
// //               setIsModalOpen(true);
// //             }}
// //             icon={<PlusOutlined />}
// //             size="large"
// //             style={{
// //               borderRadius: "8px",
// //               height: "45px",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //           >
// //             Add Auction
// //           </Button>
// //         </Col>
// //       </Row>
// //       <Tabs
// //         activeKey={activeTab}
// //         onChange={setActiveTab}
// //         items={[
// //           { label: `Live (${counts.live})`, key: "live" },
// //           { label: `Upcoming (${counts.upcoming})`, key: "upcoming" },
// //           { label: `Invalid (${counts.invalid})`, key: "invalid" },
// //           { label: `Ended (${counts.ended})`, key: "ended" },
// //         ]}
// //         style={{ marginBottom: "16px" }}
// //         className="custom-tabs"
// //       />
// //       <div
// //         style={{
// //           maxHeight: isMobile ? "calc(100vh - 300px)" : "calc(100vh - 250px)",
// //           overflowY: "auto",
// //           paddingRight: isMobile ? "0" : "8px",
// //         }}
// //       >
// //         {filteredData.length > 0 ? (
// //           filteredData.map((item) => (
// //             <AuctionCard
// //               key={item.id}
// //               item={item}
// //               onEdit={(auction: any) => {
// //                 setEditingAuction(auction);
// //                 setIsModalOpen(true);
// //               }}
// //               onView={(auction: any) => setSelectedAuction(auction)}
// //             />
// //           ))
// //         ) : (
// //           <Empty
// //             description={`No ${activeTab} auctions found`}
// //             style={{ marginTop: "40px" }}
// //           />
// //         )}
// //       </div>
// //       <AuctionFormModal
// //         open={isModalOpen}
// //         initialValues={editingAuction}
// //         onCancel={() => setIsModalOpen(false)}
// //         onFinish={() => setIsModalOpen(false)}
// //         title={editingAuction ? "Edit Auction" : "Add Auction"}
// //       />
// //       <style jsx global>{`
// //         .custom-tabs .ant-tabs-nav::before {
// //           border-bottom: none !important;
// //         }
// //         .custom-tabs .ant-tabs-tab {
// //           background: #f0f2f5 !important;
// //           border-radius: 20px !important;
// //           padding: 4px 16px !important; /* Adjusted for mobile */
// //           margin-right: 8px !important;
// //           border: none !important;
// //         }
// //         .custom-tabs .ant-tabs-tab-active {
// //           background: #fff !important;
// //           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// //         }
// //         .custom-tabs .ant-tabs-ink-bar {
// //           display: none !important;
// //         }
// //         /* Mobile scrollbar hide */
// //         @media (max-width: 768px) {
// //           .ant-tabs-nav-list {
// //             overflow-x: auto;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// "use client";

// import React, { useState, useMemo } from "react";
// import { Row, Col, Input, Button, Tabs, Empty, Grid, Select } from "antd"; // Added Select
// import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
// import { AuctionFormModal } from "@/src/components/auctions/AuctionFormModal";
// import AuctionDetailView from "@/src/components/auctions/AuctionView";
// import AuctionCard from "./AuctionCard";

// const { useBreakpoint } = Grid;

// // Mock Data...
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
//     marketPrice: "SAR 895",
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
//     marketPrice: "SAR 895",
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
//     marketPrice: "SAR 895",
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
//     marketPrice: "SAR 895",
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
//     marketPrice: "SAR 895",
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
//     marketPrice: "SAR 895",
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
//     marketPrice: "SAR 895",
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
//     marketPrice: "SAR 895",
//     auctionPrice: "SAR 320",
//     category: "Car",
//     image:
//       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
//     status: "invalid",
//   },
// ];
// export default function AuctionManager() {
//   const [searchText, setSearchText] = useState("");
//   const [activeTab, setActiveTab] = useState("live");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingAuction, setEditingAuction] = useState(null);
//   const [selectedAuction, setSelectedAuction] = useState<any>(null);

//   const screens = useBreakpoint();
//   const isMobile = !screens.md;

//   const counts = useMemo(
//     () => ({
//       live: auctionsData.filter((item) => item.status === "live").length,
//       upcoming: auctionsData.filter((item) => item.status === "upcoming")
//         .length,
//       invalid: auctionsData.filter((item) => item.status === "invalid").length,
//       ended: auctionsData.filter((item) => item.status === "ended").length,
//     }),
//     [],
//   );

//   const tabItems = [
//     { label: `Live (${counts.live})`, value: "live", key: "live" },
//     {
//       label: `Upcoming (${counts.upcoming})`,
//       value: "upcoming",
//       key: "upcoming",
//     },
//     { label: `Invalid (${counts.invalid})`, value: "invalid", key: "invalid" },
//     { label: `Ended (${counts.ended})`, key: "ended", value: "ended" },
//   ];

//   const filteredData = auctionsData.filter((item) => {
//     const matchesSearch = item.title
//       .toLowerCase()
//       .includes(searchText.toLowerCase());
//     return matchesSearch && item.status === activeTab;
//   });

//   if (selectedAuction) {
//     return (
//       <AuctionDetailView
//         auction={selectedAuction}
//         onBack={() => setSelectedAuction(null)}
//       />
//     );
//   }

//   return (
//     <div style={{ padding: isMobile ? "16px" : "24px" }}>
//       {/* Header Search and Add Button */}
//       <Row
//         gutter={[16, 16]}
//         justify="space-between"
//         align="middle"
//         style={{ marginBottom: "24px" }}
//       >
//         <Col xs={24} md={18} flex="auto">
//           <Input
//             placeholder="Search Auctions"
//             prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
//             style={{ borderRadius: "8px", height: "45px", width: "100%" }}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//         </Col>
//         <Col xs={24} md={6} style={{ textAlign: isMobile ? "left" : "right" }}>
//           <Button
//             type="primary"
//             block={isMobile}
//             onClick={() => {
//               setEditingAuction(null);
//               setIsModalOpen(true);
//             }}
//             icon={<PlusOutlined />}
//             size="large"
//             style={{ borderRadius: "8px", height: "45px" }}
//           >
//             Add Auction
//           </Button>
//         </Col>
//       </Row>

//       {/* MOBILE VIEW: Show Dropdown */}
//       {isMobile ? (
//         <Select
//           value={activeTab}
//           onChange={setActiveTab}
//           style={{ width: "100%", marginBottom: "16px" }}
//           size="large"
//           options={tabItems.map((item) => ({
//             label: item.label,
//             value: item.value,
//           }))}
//         />
//       ) : (
//         /* DESKTOP VIEW: Show Tabs */
//         <Tabs
//           activeKey={activeTab}
//           onChange={setActiveTab}
//           items={tabItems}
//           style={{ marginBottom: "16px" }}
//           className="custom-tabs"
//         />
//       )}

//       {/* Auction List Section */}
//       <div
//         style={{
//           maxHeight: isMobile ? "calc(100vh - 320px)" : "calc(100vh - 250px)",
//           overflowY: "auto",
//         }}
//       >
//         {filteredData.length > 0 ? (
//           filteredData.map((item) => (
//             <AuctionCard
//               key={item.id}
//               item={item}
//               onEdit={(auction: any) => {
//                 setEditingAuction(auction);
//                 setIsModalOpen(true);
//               }}
//               onView={(auction: any) => setSelectedAuction(auction)}
//             />
//           ))
//         ) : (
//           <Empty
//             description={`No ${activeTab} auctions found`}
//             style={{ marginTop: "40px" }}
//           />
//         )}
//       </div>

//       <AuctionFormModal
//         open={isModalOpen}
//         initialValues={editingAuction}
//         onCancel={() => setIsModalOpen(false)}
//         onFinish={() => setIsModalOpen(false)}
//         title={editingAuction ? "Edit Auction" : "Add Auction"}
//       />

//       <style jsx global>{`
//         /* Desktop Tab Styling */
//         .custom-tabs .ant-tabs-nav::before {
//           border-bottom: none !important;
//         }
//         .custom-tabs .ant-tabs-tab {
//           background: #f0f2f5 !important;
//           border-radius: 20px !important;
//           padding: 6px 20px !important;
//           margin-right: 8px !important;
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
//     </div>
//   );
// }

"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Row,
  Col,
  Input,
  Button,
  Tabs,
  Empty,
  Grid,
  Select,
  message,
} from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { AuctionFormModal } from "@/src/components/auctions/AuctionFormModal";
import AuctionDetailView from "@/src/components/auctions/AuctionView";
import AuctionCard from "./AuctionCard";
import { auctionService } from "@/src/services/auctionService";

const { useBreakpoint } = Grid;

const TAB_TO_STATUS = {
  publish: "publish",
  upcoming: "schedule",
  invalid: "invalid",
  ended: "ended",
  draft: "draft",
};

export default function AuctionManager({
  initialAuctions = [],
}: {
  initialAuctions: any[];
}) {
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("publish");
  const [auctions, setAuctions] = useState(initialAuctions);
  const [allAuctionsForCount, setAllAuctionsForCount] =
    useState<any[]>(initialAuctions);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAuction, setEditingAuction] = useState<any>(null);
  const [selectedAuction, setSelectedAuction] = useState<any>(null);

  // Loader state
  const [isSubmitting, setIsSubmitting] = useState(false);

  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const getStatusFromTab = (tab: string): string => {
    return TAB_TO_STATUS[tab as keyof typeof TAB_TO_STATUS] || tab;
  };

  const handleCountdownComplete = async (newStatus: string) => {
    try {
      const updatedData = await auctionService.getAllAuctions(newStatus);
      const allData = await auctionService.getAllAuctions("");
      setAllAuctionsForCount(allData);
      const currentStatus = getStatusFromTab(activeTab);
      if (currentStatus === newStatus) {
        setAuctions(updatedData);
      }
    } catch (error) {
      console.error(`Failed to refresh auctions:`, error);
    }
  };

  useEffect(() => {
    const fetchAllForCounts = async () => {
      try {
        const allData = await auctionService.getAllAuctions("");
        if (allData && Array.isArray(allData)) {
          setAllAuctionsForCount(allData);
        }
      } catch (err) {
        console.error("Failed to fetch counts:", err);
      }
    };
    fetchAllForCounts();
  }, []);

  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        const status = getStatusFromTab(activeTab);
        const data = await auctionService.getAllAuctions(status);
        setAuctions(data);
      } catch (err) {
        console.error("Failed to fetch filtered auctions:", err);
      }
    };
    fetchFilteredData();
  }, [activeTab]);

  const handleFormFinish = async (values: any) => {
    setIsSubmitting(true); // START LOADER
    const formData = new FormData();

    formData.append("product_name", values.product_name);
    formData.append("category", values.category);
    formData.append("description", values.description || "");
    formData.append("market_price", values.market_price);
    formData.append("auction_price", values.auction_price);
    formData.append("entry_fee_coins", values.entry_fee_coins);
    formData.append("status", values.status);

    if (values.scheduled_time) {
      formData.append(
        "scheduled_time",
        values.scheduled_time.format("YYYY-MM-DD HH:mm:ss"),
      );
    }
    if (values.auction_duration) {
      formData.append("auction_duration", values.auction_duration);
    }
    formData.append(
      "winning_claim_window",
      values.winning_claim_window || "02:00:00",
    );

    if (values.product_image && values.product_image.file) {
      formData.append("product_image", values.product_image.file);
    } else if (values.product_image?.fileList?.length > 0) {
      formData.append(
        "product_image",
        values.product_image.fileList[0].originFileObj,
      );
    }

    try {
      if (editingAuction) {
        await auctionService.updateAuction(editingAuction.auction_id, formData);
        message.success("Auction updated successfully!");
      } else {
        await auctionService.createAuction(formData);
        message.success("Auction created successfully!");
      }

      // Refresh Data
      const updatedList = await auctionService.getAllAuctions(
        getStatusFromTab(activeTab),
      );
      const updatedAll = await auctionService.getAllAuctions("");
      setAuctions(updatedList);
      setAllAuctionsForCount(updatedAll);

      setIsModalOpen(false);
      setEditingAuction(null);
    } catch (error) {
      console.error("Save failed:", error);
      message.error("Failed to save auction. Please check your connection.");
    } finally {
      setIsSubmitting(false); // STOP LOADER
    }
  };

  const counts = useMemo(() => {
    const data = allAuctionsForCount || [];
    return {
      live: data.filter((item: any) => item.status === "publish").length,
      upcoming: data.filter((item: any) => item.status === "schedule").length,
      invalid: data.filter((item: any) => item.status === "invalid").length,
      ended: data.filter((item: any) => item.status === "ended").length,
      draft: data.filter((item: any) => item.status === "draft").length,
    };
  }, [allAuctionsForCount]);

  const tabItems = [
    { label: `Live (${counts.live})`, value: "publish", key: "publish" },
    {
      label: `Upcoming (${counts.upcoming})`,
      value: "upcoming",
      key: "upcoming",
    },
    { label: `Invalid (${counts.invalid})`, value: "invalid", key: "invalid" },
    { label: `Ended (${counts.ended})`, value: "ended", key: "ended" },
  ];

  const filteredData = (auctions || []).filter((item: any) =>
    item.product_name?.toLowerCase().includes(searchText.toLowerCase()),
  );

  if (selectedAuction) {
    return (
      <AuctionDetailView
        auction={selectedAuction}
        onBack={() => setSelectedAuction(null)}
      />
    );
  }

  return (
    <div style={{ padding: isMobile ? "16px" : "24px" }}>
      <Row
        gutter={[16, 16]}
        justify="space-between"
        align="middle"
        style={{ marginBottom: "24px" }}
      >
        <Col xs={24} md={18} flex="auto">
          <Input
            placeholder="Search Auctions"
            prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
            style={{ borderRadius: "8px", height: "45px", width: "100%" }}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Col>
        <Col xs={24} md={6} style={{ textAlign: isMobile ? "left" : "right" }}>
          <Button
            type="primary"
            block={isMobile}
            onClick={() => {
              setEditingAuction(null);
              setIsModalOpen(true);
            }}
            icon={<PlusOutlined />}
            size="large"
            style={{ borderRadius: "8px", height: "45px" }}
          >
            Add Auction
          </Button>
        </Col>
      </Row>

      {isMobile ? (
        <Select
          value={activeTab}
          onChange={setActiveTab}
          style={{ width: "100%", marginBottom: "16px" }}
          size="large"
          options={tabItems}
        />
      ) : (
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={tabItems}
          style={{ marginBottom: "16px" }}
          className="custom-tabs"
        />
      )}

      <div
        style={{
          maxHeight: isMobile ? "calc(100vh - 320px)" : "calc(100vh - 250px)",
          overflowY: "auto",
        }}
      >
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <AuctionCard
              key={item.auction_id}
              item={item}
              activeTab={activeTab}
              onCountdownComplete={handleCountdownComplete}
              onEdit={(auction: any) => {
                const duration = auction.auction_duration;
                const formattedDuration =
                  duration && typeof duration === "object"
                    ? `${String(duration.hours || 0).padStart(2, "0")}:${String(duration.minutes || 0).padStart(2, "0")}:00`
                    : duration;

                setEditingAuction({
                  ...auction,
                  auction_duration: formattedDuration,
                });
                setIsModalOpen(true);
              }}
              onView={(auction: any) => setSelectedAuction(auction)}
            />
          ))
        ) : (
          <Empty
            description={`No ${activeTab} auctions found`}
            style={{ marginTop: "40px" }}
          />
        )}
      </div>

      <AuctionFormModal
        open={isModalOpen}
        initialValues={editingAuction}
        onCancel={() => setIsModalOpen(false)}
        onFinish={handleFormFinish}
        title={editingAuction ? "Edit Auction" : "Add Auction"}
        loading={isSubmitting} // Correctly passing the state here
      />

      <style jsx global>{`
        .custom-tabs .ant-tabs-nav::before {
          border-bottom: none !important;
        }
        .custom-tabs .ant-tabs-tab {
          background: #f0f2f5 !important;
          border-radius: 20px !important;
          padding: 6px 20px !important;
          margin-right: 8px !important;
          border: none !important;
          transition: all 0.3s;
        }
        .custom-tabs .ant-tabs-tab-active {
          background: #fff !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
        }
        .custom-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #1890ff !important;
          font-weight: 600 !important;
        }
        .custom-tabs .ant-tabs-ink-bar {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
