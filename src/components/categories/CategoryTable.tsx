/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from "react";
import {
  Table,
  Button,
  Input,
  Switch,
  Space,
  Row,
  Col,
  ConfigProvider,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

interface CategoryTableProps {
  categories: any[];
  onEdit: (record: any) => void;
  onAdd: () => void;
}

export default function CategoryTable({
  categories,
  onEdit,
  onAdd,
}: CategoryTableProps) {
  const [searchText, setSearchText] = useState("");

  const filteredData = useMemo(() => {
    return categories.filter((item) =>
      item.categoryName.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [categories, searchText]);

  const columns = [
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
      render: (text: string) => <span style={{ fontWeight: 500 }}>{text}</span>,
    },
    {
      title: "Number of Products",
      dataIndex: "productCount",
      key: "productCount",
      align: "center" as const,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center" as const,
      render: (status: boolean) => (
        <Switch defaultChecked={status} aria-label="Toggle Status" />
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center" as const,
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => onEdit(record)}
            style={{ borderRadius: "6px", fontWeight: 500 }}
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            danger
            style={{ borderRadius: "6px", fontWeight: 500 }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ background: "#fff", padding: "20px", borderRadius: "12px" }}>
      <Row
        gutter={16}
        justify="space-between"
        align="middle"
        style={{ marginBottom: "24px" }}
      >
        <Col span={18}>
          <Input
            placeholder="Search Products"
            prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
            style={{ borderRadius: "8px", height: "45px" }}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Col>
        <Col>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            onClick={onAdd}
            style={{ borderRadius: "8px", height: "45px", fontWeight: "bold" }}
          >
            Add Category
          </Button>
        </Col>
      </Row>

      <ConfigProvider
        theme={{
          components: { Table: { headerBg: "#fff", headerColor: "#000" } },
        }}
      >
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{
            pageSize: 5,
            showTotal: (total, range) =>
              `Showing ${range[0]} to ${range[1]} of ${total} results`,
          }}
          style={{
            border: "1px solid #e8e8e8",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        />
      </ConfigProvider>
    </div>
  );
}
