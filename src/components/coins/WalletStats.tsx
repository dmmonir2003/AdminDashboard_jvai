/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Card, Row, Col, Typography, Space } from "antd";

const { Text } = Typography;
interface Props {
  stats: any; // or CoinStats | null
}

export default function WalletStats({ stats }: Props) {
  console.log(stats);
  const statsData = [
    { title: "Sold Coins", value: stats?.solds_coins },
    { title: "Unused Coins", value: stats?.unused_coins },
    { title: "Refundable Coins", value: stats?.refundable_coins },
    { title: "Non Refundable Coins", value: stats?.non_refundable_coins },
    { title: "Saudi Rial Sold Coins", value: stats?.saudi_rial_sold_coins },
    { title: "Saudi Rial Unused Coins", value: stats?.saudi_rial_unused_coins },
    {
      title: "Saudi Rial Refundable Coins",
      value: stats?.saudi_rial_refundable_coins,
    },
    {
      title: "Saudi Rial Non Refundable Coins",
      value: stats?.saudi_rial_non_refundable_coins,
    },
  ];

  return (
    <Row gutter={[16, 16]} style={{ marginBottom: "32px" }}>
      {statsData.map((item, index) => (
        <Col xs={24} sm={12} lg={6} key={index}>
          <Card
            variant="borderless"
            style={{
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <Space
              direction="vertical"
              align="center"
              style={{ width: "100%" }}
            >
              <Space>
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
                {item.value !== undefined && item.value !== null
                  ? item.value
                  : "0"}{" "}
                {/* ✅ fallback */}
              </div>
            </Space>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
