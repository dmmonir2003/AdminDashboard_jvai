/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from "react";
import { Input, Button, Empty, Grid } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import AuctionOrderTable from "@/src/components/orders/AuctionOrderTable";
import ShopOrderTable from "@/src/components/orders/ShopOrderTable";
import OrderDetailView from "@/src/components/orders/OrderDetailView";
const { useBreakpoint } = Grid;
// Mock Data
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
  {
    id: "#ORD-563",
    title: "Mackbook Pro",
    winner: "Jhonsmith125",
    price: "SAR 895",
    time: "24:12",
    status: "Delivered",
    image:
      "https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e66769499v6u_large.jpg",
  },
  {
    id: "#ORD-564",
    title: "BMW Car",
    winner: "Jhonsmith125",
    price: "SAR 895",
    time: "24:12",
    status: "In Progress",
    image:
      "https://media.istockphoto.com/id/1419936488/photo/bmw-m4.jpg?s=2048x2048&w=is&k=20&c=r_ylR20mRRM73xnyFUWsCx_thHmSHWirhVrghT5gBRY=",
  },
  {
    id: "#ORD-565",
    title: "BMW Car",
    winner: "Jhonsmith125",
    price: "SAR 895",
    time: "24:12",
    status: "In Progress",
    image:
      "https://media.istockphoto.com/id/1419936488/photo/bmw-m4.jpg?s=2048x2048&w=is&k=20&c=r_ylR20mRRM73xnyFUWsCx_thHmSHWirhVrghT5gBRY=",
  },
];

const shopOrders = [
  {
    id: "#ORD-999",
    title: "Royal Duplax",
    price: "SAR 895",
    deliveryDate: "7 March, 2026",
    status: "In Progress",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/m2-exterior-right-front-three-quarter-3.jpeg",
  },
];

export default function OrderManager() {
  const [activeTab, setActiveTab] = useState("auction");
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [searchText, setSearchText] = useState("");

  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const filteredData = useMemo(() => {
    const dataToFilter = activeTab === "auction" ? auctionOrders : shopOrders;
    if (!searchText) return dataToFilter;
    return dataToFilter.filter((item) =>
      item.id.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [searchText, activeTab]);

  if (selectedOrder) {
    return (
      <OrderDetailView
        order={selectedOrder}
        onBack={() => setSelectedOrder(null)}
      />
    );
  }

  return (
    <div style={{ padding: isMobile ? "16px" : "24px" }}>
      {/* Search Bar */}
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
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* Responsive Custom Tab Navigation */}
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
        {filteredData.length > 0 ? (
          activeTab === "auction" ? (
            <AuctionOrderTable data={filteredData} onView={setSelectedOrder} />
          ) : (
            <ShopOrderTable data={filteredData} onView={setSelectedOrder} />
          )
        ) : (
          <Empty
            description={`No matching ${activeTab === "auction" ? "Auction" : "Shop"} Orders`}
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
