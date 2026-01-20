/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Table, Tag, Button, Space } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import Image from "next/image";

interface AuctionTableProps {
  data: any[];
  onView: (record: any) => void;
}

export default function AuctionOrderTable({ data, onView }: AuctionTableProps) {
  const columns = [
    {
      title: "Product",
      dataIndex: "title",
      key: "product",
      render: (text: string, record: any) => (
        <Space size="middle">
          <Image
            src={record.image}
            alt={text}
            width={40}
            height={40}
            style={{ borderRadius: "4px", objectFit: "cover" }}
          />
          <div>
            <div style={{ fontWeight: 600 }}>{text}</div>
            <div style={{ fontSize: "12px", color: "#8c8c8c" }}>
              {record.id}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: "Winner",
      dataIndex: "winner",
      key: "winner",
      render: (text: string) => <span>#{text}</span>,
    },
    {
      title: "Current Price",
      dataIndex: "price",
      key: "price",
      render: (text: string) => <span style={{ fontWeight: 600 }}>{text}</span>,
    },
    {
      title: "Claiming Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag
          color={status === "Delivered" ? "green" : "black"}
          style={{ borderRadius: "4px" }}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "right" as const,
      render: (_: any, record: any) => (
        <Button
          icon={<EyeOutlined />}
          onClick={() => onView(record)}
          style={{ borderRadius: "6px" }}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="id"
      pagination={{ pageSize: 5 }}
      style={{ background: "#fff", borderRadius: "8px" }}
    />
  );
}
