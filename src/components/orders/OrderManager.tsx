/* eslint-disable @typescript-eslint/no-unused-vars */

// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState, useMemo } from "react";
// import { Input, Button, Empty, Grid } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
// import AuctionOrderTable from "@/src/components/orders/AuctionOrderTable";
// import ShopOrderTable from "@/src/components/orders/ShopOrderTable";
// import OrderDetailView from "@/src/components/orders/OrderDetailView";
// const { useBreakpoint } = Grid;
// // Mock Data
// const auctionOrders = [
//   {
//     id: "#ORD-562",
//     title: "Iphone 14 Pro Max",
//     winner: "Jhonsmith125",
//     price: "SAR 895",
//     time: "24:12",
//     status: "In Progress",
//     image:
//       "https://p-m.com.sa/wp-content/uploads/2022/09/iphone-14-pro-max-gold.jpg",
//   },
//   {
//     id: "#ORD-563",
//     title: "Mackbook Pro",
//     winner: "Jhonsmith125",
//     price: "SAR 895",
//     time: "24:12",
//     status: "Delivered",
//     image:
//       "https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e66769499v6u_large.jpg",
//   },
//   {
//     id: "#ORD-564",
//     title: "BMW Car",
//     winner: "Jhonsmith125",
//     price: "SAR 895",
//     time: "24:12",
//     status: "In Progress",
//     image:
//       "https://media.istockphoto.com/id/1419936488/photo/bmw-m4.jpg?s=2048x2048&w=is&k=20&c=r_ylR20mRRM73xnyFUWsCx_thHmSHWirhVrghT5gBRY=",
//   },
//   {
//     id: "#ORD-565",
//     title: "BMW Car",
//     winner: "Jhonsmith125",
//     price: "SAR 895",
//     time: "24:12",
//     status: "In Progress",
//     image:
//       "https://media.istockphoto.com/id/1419936488/photo/bmw-m4.jpg?s=2048x2048&w=is&k=20&c=r_ylR20mRRM73xnyFUWsCx_thHmSHWirhVrghT5gBRY=",
//   },
// ];

// const shopOrders = [
//   {
//     id: "#ORD-999",
//     title: "Royal Duplax",
//     price: "SAR 895",
//     deliveryDate: "7 March, 2026",
//     status: "In Progress",
//     image:
//       "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
//   },
// ];

// export default function OrderManager() {
//   const [activeTab, setActiveTab] = useState("auction");
//   const [selectedOrder, setSelectedOrder] = useState<any>(null);
//   const [searchText, setSearchText] = useState("");

//   const screens = useBreakpoint();
//   const isMobile = !screens.md;

//   const filteredData = useMemo(() => {
//     const dataToFilter = activeTab === "auction" ? auctionOrders : shopOrders;
//     if (!searchText) return dataToFilter;
//     return dataToFilter.filter((item) =>
//       item.id.toLowerCase().includes(searchText.toLowerCase()),
//     );
//   }, [searchText, activeTab]);

//   if (selectedOrder) {
//     return (
//       <OrderDetailView
//         order={selectedOrder}
//         onBack={() => setSelectedOrder(null)}
//       />
//     );
//   }

//   return (
//     <div style={{ padding: isMobile ? "16px" : "24px" }}>
//       {/* Search Bar */}
//       <Input
//         placeholder="Search by order id"
//         prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
//         style={{
//           borderRadius: "8px",
//           height: "50px",
//           marginBottom: "24px",
//           background: "#fcfcfc",
//           width: "100%",
//         }}
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//       />

//       {/* Responsive Custom Tab Navigation */}
//       <div className="tab-container">
//         <div className="tab-scroll-wrapper">
//           <Button
//             onClick={() => {
//               setActiveTab("auction");
//               setSearchText("");
//             }}
//             style={{
//               borderRadius: "20px",
//               border: "none",
//               background: activeTab === "auction" ? "#fff" : "transparent",
//               boxShadow:
//                 activeTab === "auction" ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
//               fontWeight: 600,
//               padding: "0 24px",
//               flexShrink: 0,
//             }}
//           >
//             Auction order
//           </Button>
//           <Button
//             onClick={() => {
//               setActiveTab("shop");
//               setSearchText("");
//             }}
//             style={{
//               borderRadius: "20px",
//               border: "none",
//               background: activeTab === "shop" ? "#fff" : "transparent",
//               boxShadow:
//                 activeTab === "shop" ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
//               fontWeight: 600,
//               padding: "0 24px",
//               flexShrink: 0,
//             }}
//           >
//             Shop order
//           </Button>
//         </div>
//       </div>

//       <div style={{ marginTop: "16px" }}>
//         {filteredData.length > 0 ? (
//           activeTab === "auction" ? (
//             <AuctionOrderTable data={filteredData} onView={setSelectedOrder} />
//           ) : (
//             <ShopOrderTable data={filteredData} onView={setSelectedOrder} />
//           )
//         ) : (
//           <Empty
//             description={`No matching ${activeTab === "auction" ? "Auction" : "Shop"} Orders`}
//           />
//         )}
//       </div>

//       <style jsx>{`
//         .tab-container {
//           background: #f0f2f5;
//           width: ${isMobile ? "100%" : "fit-content"};
//           padding: 4px;
//           border-radius: 25px;
//           margin-bottom: 24px;
//           overflow: hidden;
//         }
//         .tab-scroll-wrapper {
//           display: flex;
//           gap: 10px;
//           overflow-x: auto;
//           scrollbar-width: none;
//         }
//         .tab-scroll-wrapper::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// }

// TODO: review for test

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Input, Button, Empty, Grid, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import AuctionOrderTable from "@/src/components/orders/AuctionOrderTable";
import ShopOrderTable from "@/src/components/orders/ShopOrderTable";
import { orderService } from "@/src/services/orderService";
import { auctionOrderService } from "@/src/services/auctionOrderService";

const { useBreakpoint } = Grid;

const auctionOrders = [
  {
    id: "#ORD-562",
    title: "Iphone 14 Pro Max",
    winner: "Jhonsmith125",
    price: "SAR 895",
    time: "24:12",
    status: "In Progress",
    image:
      "https://p-m.com.sa/wp-content/uploads/2022/09/iphone-14-pro-max-gold.jpg",
  },
];

export default function OrderManager() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("auction");
  const [searchText, setSearchText] = useState("");

  // Pagination & Data State
  const [shopOrders, setShopOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const [auctionOrders, setAuctionOrders] = useState<any[]>([]);
  const [auctionLoading, setAuctionLoading] = useState(false);
  const [auctionTotal, setAuctionTotal] = useState(0);
  const [auctionPage, setAuctionPage] = useState(1);

  const fetchAuctionOrders = useCallback(
    async (page: number, search?: string) => {
      setAuctionLoading(true);
      try {
        const response: any = await auctionOrderService.getAuctionOrders(
          page,
          search,
        );
        console.log("auctions orders", response.results);
        setAuctionOrders(response.results || []);
        setAuctionTotal(response.count || 0);
      } catch (error) {
        message.error("Failed to load auction orders");
      } finally {
        setAuctionLoading(false);
      }
    },
    [],
  );

  const fetchShopOrders = useCallback(async (page: number, search?: string) => {
    setLoading(true);
    try {
      const response: any = await orderService.getShopOrders(page, search);
      // Backend response mapping
      setShopOrders(response.results || []);
      setTotal(response.count || 0);
    } catch (error) {
      message.error("Failed to load shop orders");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (activeTab === "auction") {
      fetchAuctionOrders(auctionPage, searchText);
    } else {
      fetchShopOrders(currentPage, searchText);
    }
  }, [
    activeTab,
    auctionPage,
    currentPage,
    searchText,
    fetchAuctionOrders,
    fetchShopOrders,
  ]);

  // Re-fetch when tab, page, or search changes
  useEffect(() => {
    if (activeTab === "shop") {
      fetchShopOrders(currentPage, searchText);
    }
  }, [activeTab, currentPage, searchText, fetchShopOrders]);

  const handleSearch = (val: string) => {
    setSearchText(val);
    setCurrentPage(1); // Reset to page 1 on new search
    setAuctionPage(1);
  };

  return (
    <div style={{ padding: isMobile ? "16px" : "24px" }}>
      <Input
        placeholder="Search by order id"
        prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
        style={{
          borderRadius: "8px",
          height: "50px",
          marginBottom: "24px",
          background: "#fcfcfc",
          width: "100%",
        }}
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <div className="tab-container">
        <div className="tab-scroll-wrapper">
          <Button
            onClick={() => {
              setActiveTab("auction");
              setSearchText("");
            }}
            style={{
              borderRadius: "20px",
              border: "none",
              background: activeTab === "auction" ? "#fff" : "transparent",
              boxShadow:
                activeTab === "auction" ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
              fontWeight: 600,
              padding: "0 24px",
              flexShrink: 0,
            }}
          >
            Auction order
          </Button>
          <Button
            onClick={() => {
              setActiveTab("shop");
              setSearchText("");
            }}
            style={{
              borderRadius: "20px",
              border: "none",
              background: activeTab === "shop" ? "#fff" : "transparent",
              boxShadow:
                activeTab === "shop" ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
              fontWeight: 600,
              padding: "0 24px",
              flexShrink: 0,
            }}
          >
            Shop order
          </Button>
        </div>
      </div>

      <div style={{ marginTop: "16px" }}>
        {activeTab === "auction" ? (
          // <AuctionOrderTable
          //   data={auctionOrders}
          //   onView={(order: any) => router.push(`/orders/auction/${order.id}`)}
          // />

          <AuctionOrderTable
            data={auctionOrders}
            loading={auctionLoading}
            pagination={{
              current: auctionPage,
              total: auctionTotal,
              pageSize: 10,
              onChange: (page: number) => setAuctionPage(page),
              position: ["bottomRight"],
            }}
            // Passing claim_id for the URL as seen in your Postman images
            onView={(order: any) =>
              router.push(`/orders/${order.claim_id}?type=auction`)
            }
          />
        ) : (
          <ShopOrderTable
            data={shopOrders}
            loading={loading}
            pagination={{
              current: currentPage,
              total: total,
              pageSize: 5, // Based on your API default or preference
              onChange: (page: number) => setCurrentPage(page),
              showSizeChanger: false,
              position: ["bottomCenter"],
            }}
            onView={(order: any) =>
              router.push(`/orders/${order.order_id}?type=shop`)
            }
          />
        )}
      </div>

      <style jsx>{`
        .tab-container {
          background: #f0f2f5;
          width: ${isMobile ? "100%" : "fit-content"};
          padding: 4px;
          border-radius: 25px;
          margin-bottom: 24px;
          overflow: hidden;
        }
        .tab-scroll-wrapper {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .tab-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
