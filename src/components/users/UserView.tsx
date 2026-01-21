/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  Button,
  Card,
  Row,
  Col,
  Typography,
  Tag,
  Tabs,
  List,
  Space,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

//Mock Data for the Activities tabs
const auctionHistoryData = [
  { id: 1, title: "Participated in auction #100", date: "2 days ago", bids: 3 },
  { id: 2, title: "Participated in auction #200", date: "4 days ago", bids: 3 },
  { id: 3, title: "Participated in auction #300", date: "4 days ago", bids: 3 },
];

const walletTransactionData = [
  {
    id: 1,
    title: "Added funds to wallet",
    date: "1 week ago",
    amount: "+ SAR 500.00",
  },
  { id: 2, title: "Withdrawal", date: "2 weeks ago", amount: "- SAR 100.00" },
];

interface UserViewProps {
  user: any;
  onBack: () => void;
}

export default function UserView({ user, onBack }: UserViewProps) {
  // Custom rendering for Auction History List
  const renderAuctionItem = (item: any) => (
    <List.Item style={{ padding: "16px 0", borderBottom: "1px solid #f0f0f0" }}>
      <Row justify="space-between" align="middle" style={{ width: "100%" }}>
        <Col>
          <Text strong style={{ fontSize: "16px", display: "block" }}>
            {item.title}
          </Text>
          <Text type="secondary" style={{ fontSize: "14px" }}>
            {item.date}
          </Text>
        </Col>
        <Col>
          <Tag
            color="black"
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              borderRadius: "6px",
              padding: "4px 16px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {item.bids} Bids
          </Tag>
        </Col>
      </Row>
    </List.Item>
  );

  // Custom rendering for Wallet Transaction List
  const renderWalletItem = (item: any) => (
    <List.Item style={{ padding: "16px 0", borderBottom: "1px solid #f0f0f0" }}>
      <Row justify="space-between" align="middle" style={{ width: "100%" }}>
        <Col>
          <Text strong style={{ fontSize: "16px", display: "block" }}>
            {item.title}
          </Text>
          <Text type="secondary" style={{ fontSize: "14px" }}>
            {item.date}
          </Text>
        </Col>
        <Col>
          <Text
            strong
            style={{
              fontSize: "16px",
              color: item.amount.startsWith("+") ? "#2ecc71" : "#e74c3c",
            }}
          >
            {item.amount}
          </Text>
        </Col>
      </Row>
    </List.Item>
  );

  const tabItems = [
    {
      key: "1",
      label: "Auction History",
      children: (
        <List
          dataSource={auctionHistoryData}
          renderItem={renderAuctionItem}
          split={false}
        />
      ),
    },
    {
      key: "2",
      label: "Wallet Transactions",
      children: (
        <List
          dataSource={walletTransactionData}
          renderItem={renderWalletItem}
          split={false}
        />
      ),
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      {/* Header with Back Button */}
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={onBack}
        style={{
          marginBottom: "20px",
          border: "none",
          background: "transparent",
          paddingLeft: 0,
          fontSize: "16px",
          fontWeight: 500,
        }}
      >
        Back
      </Button>

      <Row gutter={24}>
        {/* --- Left Column: User Information Card --- */}
        <Col xs={24} md={8}>
          <Card
            bordered={false}
            style={{
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
            styles={{ body: { padding: "24px" } }}
          >
            <Title level={4} style={{ marginTop: 0, marginBottom: "24px" }}>
              User Information
            </Title>

            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <div>
                <Text type="secondary" style={labelStyle}>
                  Name
                </Text>
                <div style={valueStyle}>{user.name}</div>
              </div>
              <div>
                <Text type="secondary" style={labelStyle}>
                  Email
                </Text>
                <div style={valueStyle}>{user.email}</div>
              </div>
              <div>
                <Text type="secondary" style={labelStyle}>
                  Status
                </Text>
                <div>
                  <Tag
                    // color={user.status === "Active" ? "#2ecc71" : "#000"}
                    style={{
                      backgroundColor:
                        user.status === "Active" ? "#2ecc71" : "#000000",
                      borderRadius: "6px",
                      color: "#ffffff",
                      padding: "4px 16px",
                      fontWeight: 600,
                      border: "none",
                      fontSize: "14px",
                    }}
                  >
                    {user.status}
                  </Tag>
                </div>
              </div>
              <div>
                <Text type="secondary" style={labelStyle}>
                  Wallet Coins
                </Text>
                <div style={valueStyle}>{user.walletCoins}</div>
              </div>
              <div>
                <Text type="secondary" style={labelStyle}>
                  Refundable Coins
                </Text>
                <div style={valueStyle}>{user.refundableCoins}</div>
              </div>
            </Space>
          </Card>
        </Col>

        {/* --- Right Column: Activity Tabs Card --- */}
        <Col xs={24} md={16}>
          <Card
            bordered={false}
            style={{
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              height: "100%",
            }}
            styles={{ body: { padding: "24px" } }}
          >
            <Title level={4} style={{ marginTop: 0, marginBottom: "20px" }}>
              Activity
            </Title>

            {/* Custom styled Tabs to match the pill-box design */}
            <Tabs
              defaultActiveKey="1"
              items={tabItems}
              className="user-activity-tabs"
            />
          </Card>
        </Col>
      </Row>

      {/* Global styles specifically for the tab appearance in the image */}
      <style jsx global>{`
        .user-activity-tabs .ant-tabs-nav {
          margin-bottom: 24px !important;
        }
        .user-activity-tabs .ant-tabs-nav-list {
          background-color: #f0f2f5;
          border-radius: 25px;
          padding: 4px;
        }
        .user-activity-tabs .ant-tabs-tab {
          border-radius: 20px !important;
          padding: 8px 24px !important;
          margin: 0 !important;
          border: none !important;
          background: transparent;
          transition: all 0.3s ease;
        }
        .user-activity-tabs .ant-tabs-tab-active {
          background: #fff !important;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .user-activity-tabs .ant-tabs-tab-btn {
          color: #666 !important;
          font-weight: 500;
        }
        .user-activity-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #000 !important;
          font-weight: 600;
        }
        .user-activity-tabs .ant-tabs-ink-bar {
          display: none !important;
        }
      `}</style>
    </div>
  );
}

// Styles for labels and values in the left card
const labelStyle = { fontSize: "14px", marginBottom: "4px", display: "block" };
const valueStyle = { fontSize: "16px", fontWeight: 600, color: "#000" };
