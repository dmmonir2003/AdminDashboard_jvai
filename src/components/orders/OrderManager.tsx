/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from "react";
import { Input, Button, Empty } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import AuctionOrderTable from "@/src/components/orders/AuctionOrderTable";
import ShopOrderTable from "@/src/components/orders/ShopOrderTable";
import OrderDetailView from "@/src/components/orders/OrderDetailView";

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

  const filteredData = useMemo(() => {
    const dataToFilter = activeTab === "auction" ? auctionOrders : shopOrders;
    if (!searchText) return dataToFilter;
    return dataToFilter.filter((item) =>
      item.id.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [searchText, activeTab]);

  // Handle Detail View
  if (selectedOrder) {
    return (
      <OrderDetailView
        order={selectedOrder}
        onBack={() => setSelectedOrder(null)}
      />
    );
  }

  return (
    <div style={{ padding: "24px" }}>
      {/* Search Bar */}
      <Input
        placeholder="Search by order id"
        prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
        style={{
          borderRadius: "8px",
          height: "50px",
          marginBottom: "24px",
          background: "#fcfcfc",
        }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* Custom Tab Navigation */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "24px",
          background: "#f0f2f5",
          width: "fit-content",
          padding: "4px",
          borderRadius: "25px",
        }}
      >
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
          }}
        >
          Shop order
        </Button>
      </div>

      {/* Dynamic Table Selection */}
      <div style={{ marginTop: "16px" }}>
        {activeTab === "auction" ? (
          filteredData.length > 0 ? (
            <AuctionOrderTable
              data={filteredData}
              onView={(record) => setSelectedOrder(record)}
            />
          ) : (
            <Empty description="No matching Auction Orders" />
          )
        ) : filteredData.length > 0 ? (
          <ShopOrderTable
            data={filteredData}
            onView={(record) => setSelectedOrder(record)}
          />
        ) : (
          <Empty description="No matching Shop Orders" />
        )}
      </div>
    </div>
  );
}
