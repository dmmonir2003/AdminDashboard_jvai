// "use client";

// import React, { useState, useMemo } from "react";
// import { Row, Col, Input, Button, Tabs, Empty } from "antd";
// import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
// import { AuctionFormModal } from "@/src/components/auctions/AuctionFormModal";
// import AuctionDetailView from "@/src/components/auctions/AuctionView";
// import AuctionCard from "./AuctionCard";

// // Mock Data (Moved inside or imported)
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
//     <div style={{ padding: "24px" }}>
//       <Row
//         gutter={16}
//         justify="space-between"
//         align="middle"
//         style={{ marginBottom: "24px" }}
//       >
//         <Col flex="auto">
//           <Input
//             placeholder="Search Auctions"
//             prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
//             style={{ borderRadius: "8px", height: "45px", maxWidth: "90%" }}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//         </Col>
//         <Col>
//           <Button
//             type="primary"
//             onClick={() => {
//               setEditingAuction(null);
//               setIsModalOpen(true);
//             }}
//             icon={<PlusOutlined />}
//             size="large"
//             style={{
//               borderRadius: "8px",
//               height: "45px",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             Add Auction
//           </Button>
//         </Col>
//       </Row>

//       <Tabs
//         activeKey={activeTab}
//         onChange={setActiveTab}
//         items={[
//           { label: `Live (${counts.live})`, key: "live" },
//           { label: `Upcoming (${counts.upcoming})`, key: "upcoming" },
//           { label: `Invalid (${counts.invalid})`, key: "invalid" },
//           { label: `Ended (${counts.ended})`, key: "ended" },
//         ]}
//         style={{ marginBottom: "16px" }}
//         className="custom-tabs"
//       />

//       <div
//         style={{
//           maxHeight: "calc(100vh - 250px)",
//           overflowY: "auto",
//           paddingRight: "8px",
//         }}
//       >
//         {filteredData.length > 0 ? (
//           filteredData.map((item) => (
//             <AuctionCard
//               key={item.id}
//               item={item}
//               onEdit={(auction: React.SetStateAction<null>) => {
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
//     </div>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from "react";
import { Row, Col, Input, Button, Tabs, Empty, Grid } from "antd"; // 1. Added Grid
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { AuctionFormModal } from "@/src/components/auctions/AuctionFormModal";
import AuctionDetailView from "@/src/components/auctions/AuctionView";
import AuctionCard from "./AuctionCard";

const { useBreakpoint } = Grid; // 2. Hook to detect screen size

// Mock Data remains the same...
const auctionsData = [
  {
    id: 1,
    title: "Iphone 14 Pro Max",
    time: "2h 34m",
    participants: 45,
    marketPrice: "SAR 895",
    auctionPrice: "SAR 500",
    category: "Phone",
    image:
      "https://p-m.com.sa/wp-content/uploads/2022/09/iphone-14-pro-max-gold.jpg",
    status: "ended",
  },
  {
    id: 2,
    title: "Macbook Pro",
    time: "2h 34m",
    participants: 45,
    marketPrice: "SAR 895",
    auctionPrice: "SAR 400",
    category: "Laptop",
    image:
      "https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e66769499v6u_large.jpg",
    status: "invalid",
  },
  {
    id: 3,
    title: "BMW Car",
    time: "2h 34m",
    participants: 45,
    marketPrice: "SAR 895",
    auctionPrice: "SAR 320",
    category: "Car",
    image:
      "https://media.istockphoto.com/id/1419936488/photo/bmw-m4.jpg?s=2048x2048&w=is&k=20&c=r_ylR20mRRM73xnyFUWsCx_thHmSHWirhVrghT5gBRY=",
    status: "upcoming",
  },
  {
    id: 4,
    title: "BMW Car",
    time: "2h 34m",
    participants: 45,
    marketPrice: "SAR 895",
    auctionPrice: "SAR 320",
    category: "Car",
    image:
      "https://media.istockphoto.com/id/1419936488/photo/bmw-m4.jpg?s=2048x2048&w=is&k=20&c=r_ylR20mRRM73xnyFUWsCx_thHmSHWirhVrghT5gBRY=",
    status: "live",
  },
  {
    id: 5,
    title: "BMW Car",
    time: "2h 34m",
    participants: 45,
    marketPrice: "SAR 895",
    auctionPrice: "SAR 320",
    category: "Car",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
    status: "live",
  },
  {
    id: 6,
    title: "BMW Car",
    time: "2h 34m",
    participants: 45,
    marketPrice: "SAR 895",
    auctionPrice: "SAR 320",
    category: "Car",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
    status: "live",
  },
  {
    id: 7,
    title: "BMW Car",
    time: "2h 34m",
    participants: 45,
    marketPrice: "SAR 895",
    auctionPrice: "SAR 320",
    category: "Car",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
    status: "live",
  },
  {
    id: 9,
    title: "BMW Car",
    time: "2h 34m",
    participants: 45,
    marketPrice: "SAR 895",
    auctionPrice: "SAR 320",
    category: "Car",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
    status: "live",
  },
  {
    id: 8,
    title: "BMW Car",
    time: "2h 34m",
    participants: 45,
    marketPrice: "SAR 895",
    auctionPrice: "SAR 320",
    category: "Car",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
    status: "invalid",
  },
];

export default function AuctionManager() {
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("live");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAuction, setEditingAuction] = useState(null);
  const [selectedAuction, setSelectedAuction] = useState<any>(null);

  const screens = useBreakpoint(); // 3. Detect mobile
  const isMobile = !screens.md; // md is usually 768px

  const counts = useMemo(
    () => ({
      live: auctionsData.filter((item) => item.status === "live").length,
      upcoming: auctionsData.filter((item) => item.status === "upcoming")
        .length,
      invalid: auctionsData.filter((item) => item.status === "invalid").length,
      ended: auctionsData.filter((item) => item.status === "ended").length,
    }),
    [],
  );

  const filteredData = auctionsData.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchesSearch && item.status === activeTab;
  });

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
      {" "}
      {/* Reduced padding for mobile */}
      <Row
        gutter={[16, 16]} // 4. Added vertical gutter for stacking
        justify="space-between"
        align="middle"
        style={{ marginBottom: "24px" }}
      >
        {/* 5. xs={24} forces full width on mobile, md={18} restores desktop view */}
        <Col xs={24} md={18} flex="auto">
          <Input
            placeholder="Search Auctions"
            prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
            style={{
              borderRadius: "8px",
              height: "45px",
              width: "100%", // Changed from maxWidth 90%
            }}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Col>

        {/* 6. xs={24} forces button to new line on mobile */}
        <Col xs={24} md={6} style={{ textAlign: isMobile ? "left" : "right" }}>
          <Button
            type="primary"
            block={isMobile} // 7. Button takes full width on mobile for better touch
            onClick={() => {
              setEditingAuction(null);
              setIsModalOpen(true);
            }}
            icon={<PlusOutlined />}
            size="large"
            style={{
              borderRadius: "8px",
              height: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Add Auction
          </Button>
        </Col>
      </Row>
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={[
          { label: `Live (${counts.live})`, key: "live" },
          { label: `Upcoming (${counts.upcoming})`, key: "upcoming" },
          { label: `Invalid (${counts.invalid})`, key: "invalid" },
          { label: `Ended (${counts.ended})`, key: "ended" },
        ]}
        style={{ marginBottom: "16px" }}
        className="custom-tabs"
      />
      <div
        style={{
          maxHeight: isMobile ? "calc(100vh - 300px)" : "calc(100vh - 250px)",
          overflowY: "auto",
          paddingRight: isMobile ? "0" : "8px",
        }}
      >
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <AuctionCard
              key={item.id}
              item={item}
              onEdit={(auction: any) => {
                setEditingAuction(auction);
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
        onFinish={() => setIsModalOpen(false)}
        title={editingAuction ? "Edit Auction" : "Add Auction"}
      />
      <style jsx global>{`
        .custom-tabs .ant-tabs-nav::before {
          border-bottom: none !important;
        }
        .custom-tabs .ant-tabs-tab {
          background: #f0f2f5 !important;
          border-radius: 20px !important;
          padding: 4px 16px !important; /* Adjusted for mobile */
          margin-right: 8px !important;
          border: none !important;
        }
        .custom-tabs .ant-tabs-tab-active {
          background: #fff !important;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .custom-tabs .ant-tabs-ink-bar {
          display: none !important;
        }
        /* Mobile scrollbar hide */
        @media (max-width: 768px) {
          .ant-tabs-nav-list {
            overflow-x: auto;
          }
        }
      `}</style>
    </div>
  );
}
