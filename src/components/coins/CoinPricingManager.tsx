/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  Table,
  Button,
  Switch,
  Typography,
  ConfigProvider,
  Space,
  message,
} from "antd";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import CoinPricingModal from "@/src/components/coins/CoinPricingModal";

const { Title, Text } = Typography;

export default function CoinPricingManager() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  const [dataSource, setDataSource] = useState([
    { key: "1", packageName: "100 Coin", price: "SAR 100", status: "Active" },
    { key: "2", packageName: "200 Coin", price: "SAR 200", status: "Active" },
    { key: "3", packageName: "300 Coin", price: "SAR 300", status: "Active" },
    { key: "4", packageName: "500 Coin", price: "SAR 500", status: "Paused" },
    { key: "5", packageName: "1000 Coin", price: "SAR 1000", status: "Active" },
    { key: "6", packageName: "2000 Coin", price: "SAR 2000", status: "Paused" },
    { key: "7", packageName: "5000 Coin", price: "SAR 5000", status: "Active" },
    {
      key: "8",
      packageName: "10,000 Coin",
      price: "SAR 10,000",
      status: "Paused",
    },
  ]);

  const handleToggleStatus = (checked: boolean, record: any) => {
    const newStatus = checked ? "Active" : "Paused";
    const updatedData = dataSource.map((item) =>
      item.key === record.key ? { ...item, status: newStatus } : item,
    );
    setDataSource(updatedData);
    message.success(`${record.packageName} is now ${newStatus}`);
  };

  const columns = [
    { title: "Coin Packages", dataIndex: "packageName", key: "packageName" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <div
          style={{
            background: status === "Active" ? "#2ecc71" : "#000",
            color: "#fff",
            borderRadius: "6px",
            padding: "4px 12px",
            display: "inline-block",
            fontWeight: 600,
            fontSize: "12px",
            width: "70px",
            textAlign: "center" as const,
          }}
        >
          {status}
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Switch
            checked={record.status === "Active"}
            onChange={(checked) => handleToggleStatus(checked, record)}
            style={{
              backgroundColor:
                record.status === "Active" ? "#2ecc71" : undefined,
            }}
          />
          <Button
            icon={<EditOutlined />}
            type="text"
            onClick={() => {
              setSelectedPackage(record);
              setIsModalOpen(true);
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "20px",
          marginTop: "32px",
        }}
      >
        <div>
          <Title level={3} style={{ margin: 0 }}>
            Wallet & Coins
          </Title>
          <Text type="secondary">Manage wallet system and coin pricing</Text>
        </div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => {
            setSelectedPackage(null);
            setIsModalOpen(true);
          }}
          style={{ borderRadius: "8px", height: "45px", fontWeight: "bold" }}
        >
          Coin Pricing
        </Button>
      </div>

      <ConfigProvider
        theme={{ components: { Table: { headerBg: "#fafafa" } } }}
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          scroll={{ y: 400 }}
          style={{
            background: "#fff",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #f0f0f0",
          }}
        />
      </ConfigProvider>

      <CoinPricingModal
        open={isModalOpen}
        initialValues={selectedPackage}
        onCancel={() => setIsModalOpen(false)}
        onFinish={(values: any) => {
          console.log(values);
          setIsModalOpen(false);
        }}
      />
    </>
  );
}
