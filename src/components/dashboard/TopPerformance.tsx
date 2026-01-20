"use client";

import React from "react";
import { Card, List } from "antd";

const topPerformanceData = [
  {
    id: 1,
    title: "Iphone 14 Pro Max",
    price: "SAR 890",
    participants: "67 Participants",
  },
  {
    id: 2,
    title: "Macbook Pro",
    price: "SAR 890",
    participants: "54 Participants",
  },
  {
    id: 3,
    title: "Ipad Pro",
    price: "SAR 890",
    participants: "37 Participants",
  },
  {
    id: 4,
    title: "AirPods Max",
    price: "SAR 890",
    participants: "22 Participants",
  },
];

export default function TopPerformance() {
  return (
    <Card
      title="Top Performance Auctions"
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
        <List
          dataSource={topPerformanceData}
          renderItem={(item) => (
            <List.Item
              style={{
                borderBottom: "1px solid #f0f0f0",
                padding: "16px 12px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
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
                    {item.participants}
                  </div>
                </div>
                <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                  {item.price}
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </Card>
  );
}
