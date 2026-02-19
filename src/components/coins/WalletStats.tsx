"use client";

import React from "react";
import { Card, Row, Col, Typography, Space } from "antd";

const { Text } = Typography;

export default function WalletStats() {
  const stats = [
    { title: "Sold Coins", value: "1200,00", icon: "/icons/coin-gold.png" },
    { title: "Unused coins", value: "22,025", icon: "/icons/coin-gold.png" },
    {
      title: "Refundable Coins",
      value: "31,236",
      icon: "/icons/coin-gold.png",
    },
    {
      title: "Non Refundable Coins",
      value: "51,523",
      icon: "/icons/coin-gold.png",
    },
    {
      title: "Saudi Rial Sold Coins",
      value: "1200,00",
      icon: "/icons/coin-gold.png",
    },
    {
      title: "Saudi Rial Unused coins",
      value: "22,025",
      icon: "/icons/coin-gold.png",
    },
    {
      title: "Saudi Rial Refundable Coins",
      value: "31,236",
      icon: "/icons/coin-gold.png",
    },
    {
      title: "Saudi Rial Non Refundable Coins",
      value: "51,523",
      icon: "/icons/coin-gold.png",
    },
  ];

  return (
    <Row gutter={[16, 16]} style={{ marginBottom: "32px" }}>
      {stats.map((item, index) => (
        <Col xs={24} sm={12} lg={6} key={index}>
          <Card
            variant="borderless"
            style={{
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <Space
              orientation="vertical"
              align="center"
              style={{ width: "100%" }}
            >
              <Space>
                {/* Fallback to simple div if icon not found */}
                <div
                  style={{
                    background: "#f9f1db",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                >
                  🪙
                </div>
                <Text
                  type="secondary"
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  {item.title}
                </Text>
              </Space>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "8px",
                }}
              >
                {item.value}
              </div>
            </Space>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
