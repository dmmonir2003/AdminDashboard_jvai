/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Card, Row, Col, Space, Tag, Button } from "antd";
import {
  ClockCircleOutlined,
  TeamOutlined,
  EditOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import Image from "next/image";

interface Props {
  item: any;
  onEdit: (item: any) => void;
  onView: (item: any) => void;
}

export default function AuctionCard({ item, onEdit, onView }: Props) {
  return (
    <Card
      style={{
        marginBottom: "16px",
        borderRadius: "12px",
        border: "1px solid #f0f0f0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
      styles={{ body: { padding: "16px" } }}
    >
      <Row gutter={24} align="stretch">
        <Col xs={24} sm={4}>
          <div style={{ position: "relative", width: "100%", height: "120px" }}>
            <Image
              src={item.image}
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
              alt={item.title}
            />
          </div>
        </Col>

        <Col xs={24} sm={16}>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
            {item.title}
          </h3>
          <Space
            style={{ color: "#8c8c8c", fontSize: "14px", marginTop: "4px" }}
          >
            <span>
              <ClockCircleOutlined /> {item.time}
            </span>
            <span>
              <TeamOutlined /> {item.participants}
            </span>
          </Space>

          <Row gutter={16} style={{ marginTop: "16px" }}>
            <Col span={8}>
              <div
                style={{
                  color: "black",
                  fontSize: "14px",
                  fontWeight: "semibold",
                }}
              >
                Market Price
              </div>
              <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                {item.marketPrice}
              </div>
            </Col>
            <Col
              span={8}
              style={{ borderLeft: "1px solid #f0f0f0", paddingLeft: "16px" }}
            >
              <div
                style={{
                  color: "black",
                  fontSize: "14px",
                  fontWeight: "semibold",
                }}
              >
                Auction Price
              </div>
              <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                {item.auctionPrice}
              </div>
            </Col>
            <Col
              span={8}
              style={{ borderLeft: "1px solid #f0f0f0", paddingLeft: "16px" }}
            >
              <div
                style={{
                  color: "black",
                  fontSize: "14px",
                  fontWeight: "semibold",
                }}
              >
                Category
              </div>
              <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                {item.category}
              </div>
            </Col>
          </Row>
        </Col>

        <Col
          xs={24}
          sm={4}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "16px",
          }}
        >
          <Tag
            color={
              item.status === "live" || item.status === "invalid"
                ? "#f5222d"
                : item.status === "upcoming"
                  ? "#000000"
                  : "#bfbfbf"
            }
            style={{
              borderRadius: "8px",
              padding: "4px 16px",
              fontWeight: "bold",
              textTransform: "capitalize",
              border: "none",
              margin: 0,
            }}
          >
            {item.status}
          </Tag>

          <Space size="small">
            {(item.status === "live" || item.status === "upcoming") && (
              <Button
                onClick={() => onEdit(item)}
                icon={<EditOutlined />}
                style={{ borderRadius: "8px", fontWeight: "500" }}
              >
                Edit
              </Button>
            )}
            <Button
              onClick={() => onView(item)}
              icon={<EyeOutlined />}
              style={{ borderRadius: "8px", fontWeight: "500" }}
            >
              View
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}
