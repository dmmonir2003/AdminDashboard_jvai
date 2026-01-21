"use client";

import React from "react";
import { Card, Badge } from "antd";
import { ClockCircleOutlined, TeamOutlined } from "@ant-design/icons";

const liveAuctionsData = [
  {
    id: 1,
    title: "Iphone 14 Pro Max",
    price: "SAR 890",
    time: "5 Minutes",
    participants: 45,
  },
  {
    id: 2,
    title: "Macbook Pro",
    price: "SAR 1200",
    time: "5 Minutes",
    participants: 45,
  },
  {
    id: 3,
    title: "Apple Watch Ultra",
    price: "SAR 18920",
    time: "5 Minutes",
    participants: 45,
  },
  {
    id: 4,
    title: "Sony WH-1000XM5",
    price: "SAR 500",
    time: "2 Minutes",
    participants: 12,
  },
  {
    id: 5,
    title: "iPad Air",
    price: "SAR 2100",
    time: "10 Minutes",
    participants: 30,
  },
];

export default function LiveAuctions() {
  return (
    <Card
      title="Live Auctions"
      style={{
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
      }}
      styles={{
        header: {
          borderBottom: "none",
          padding: "24px 24px 0",
          fontSize: "20px",
          fontWeight: "bold",
        },
        body: { padding: "0 24px 24px 24px" },
      }}
    >
      <div
        style={{ maxHeight: "300px", overflowY: "auto", overflowX: "hidden" }}
      >
        {liveAuctionsData.map((item) => (
          <div
            key={item.id}
            style={{
              borderBottom: "1px solid #f0f0f0",
              padding: "16px 12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Left side */}
            <div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginBottom: "4px",
                }}
              >
                {item.title}
              </div>

              <div style={{ color: "#8c8c8c", fontSize: "14px" }}>
                <ClockCircleOutlined style={{ marginRight: "4px" }} />
                {item.time}
                <TeamOutlined
                  style={{ marginLeft: "12px", marginRight: "4px" }}
                />
                {item.participants}
              </div>
            </div>

            {/* Right side */}
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginBottom: "8px",
                }}
              >
                {item.price}
              </div>

              <Badge
                count="Live"
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: "1.5px solid #000",
                  fontWeight: "bold",
                  padding: "0 10px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
