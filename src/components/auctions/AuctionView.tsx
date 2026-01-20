/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  Table,
  Tag,
  Avatar,
  Button,
  Card,
  Row,
  Col,
  Space,
  Typography,
  ConfigProvider,
} from "antd";
import {
  ClockCircleOutlined,
  TeamOutlined,
  TrophyFilled,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const { Title, Text } = Typography;

// Mock data for participants (usually this would come from an API)
const participantsData = Array.from({ length: 24 }).map((_, i) => ({
  key: i + 1,
  id: 101 + i,
  name: `User #${101 + i}`,
  email: "user@mail.com",
  avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
  status: i === 0 ? "Winner" : "N/A",
  coinBalance: 7800 - i * 150,
  refundableCoin: i === 0 ? null : 300,
  winningBids: i === 0 ? 3 : 5,
}));

interface AuctionDetailProps {
  auction: any;
  onBack: () => void;
}

export default function AuctionDetailView({
  auction,
  onBack,
}: AuctionDetailProps) {
  const columns = [
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Avatar
            src={record.avatar}
            size={48}
            style={{ border: "1px solid #f0f0f0" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Text strong style={{ fontSize: "14px" }}>
              {record.name}
            </Text>
            <Text type="secondary" style={{ fontSize: "12px" }}>
              {record.email}
            </Text>
          </div>
        </Space>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) =>
        status === "Winner" ? (
          <Tag
            color="#2ecc71"
            icon={<TrophyFilled />}
            style={{
              borderRadius: "6px",
              padding: "4px 12px",
              fontWeight: "bold",
              border: "none",
            }}
          >
            Winner
          </Tag>
        ) : (
          <Text strong style={{ color: "#595959" }}>
            N/A
          </Text>
        ),
    },
    {
      title: "Coin Balance",
      dataIndex: "coinBalance",
      render: (val: number) => (
        <Text strong style={{ fontSize: "15px" }}>
          {val}
        </Text>
      ),
    },
    {
      title: "Refundable Coin",
      dataIndex: "refundableCoin",
      render: (val: number | null) => (
        <Button
          style={{
            borderRadius: "6px",
            background: val === null ? "#a0a0a0" : "#b1b1b1",
            color: "#fff",
            border: "none",
            fontSize: "13px",
            height: "32px",
            width: "160px",
          }}
        >
          {val === null ? "Not Refundable" : `Refundable Coin ${val}`}
        </Button>
      ),
    },
    {
      title: "Winning Bids",
      dataIndex: "winningBids",
      render: (val: number) => (
        <Tag
          color="black"
          style={{ borderRadius: "6px", padding: "4px 16px", fontSize: "14px" }}
        >
          {val} Bids
        </Tag>
      ),
    },
  ];

  return (
    <div style={{ padding: "24px", background: "#f8f9fa" }}>
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={onBack}
        style={{ marginBottom: "20px", borderRadius: "8px" }}
      >
        Back to Auctions
      </Button>

      {/* Top Details Card */}
      <Card
        style={{
          marginBottom: "32px",
          borderRadius: "12px",
          border: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        <Row gutter={24} align="middle">
          <Col span={4}>
            <Image
              src={auction.image}
              width={100}
              height={100}
              alt="Product"
              style={{ objectFit: "contain" }}
            />
          </Col>
          <Col span={6}>
            <Title level={4} style={{ margin: 0 }}>
              {auction.title}
            </Title>
            <Space style={{ color: "#8c8c8c", marginTop: "8px" }}>
              <span>
                <ClockCircleOutlined /> {auction.time}
              </span>
              <span>
                <TeamOutlined /> {auction.participants}
              </span>
            </Space>
          </Col>
          <Col
            span={5}
            style={{ borderLeft: "1px solid #f0f0f0", textAlign: "center" }}
          >
            <Text type="secondary">Market Price</Text>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              {auction.marketPrice || auction.currentPrice}
            </div>
          </Col>
          <Col
            span={5}
            style={{ borderLeft: "1px solid #f0f0f0", textAlign: "center" }}
          >
            <Text type="secondary">Auction Price</Text>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              {auction.auctionPrice}
            </div>
          </Col>
          <Col span={4} style={{ textAlign: "right" }}>
            <Tag
              style={{
                background: "#d9d9d9",
                border: "none",
                padding: "4px 12px",
                borderRadius: "4px",
              }}
            >
              {auction.status}
            </Tag>
          </Col>
        </Row>
      </Card>

      <Title level={4} style={{ marginBottom: "20px" }}>
        All Participants
      </Title>

      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "transparent",
              headerColor: "#000",
              rowHoverBg: "#fafafa",
            },
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={participantsData}
          pagination={{
            pageSize: 5,
            position: ["bottomRight"],
            showTotal: (total, range) =>
              `Showing ${range[0]} to ${range[1]} of ${total} results`,
          }}
          rowClassName={() => "custom-table-row"}
        />
      </ConfigProvider>

      <style jsx global>{`
        .custom-table-row td {
          padding: 12px 16px !important;
          background: white !important;
        }
        .ant-table-tbody > tr > td {
          border-bottom: 8px solid #f8f9fa !important;
        }
      `}</style>
    </div>
  );
}
