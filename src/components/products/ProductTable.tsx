/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from "react";
import {
  Table,
  Button,
  Input,
  Select,
  Space,
  Row,
  Col,
  Typography,
  ConfigProvider,
  message,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Image from "next/image";
// Import your modal component here
import ProductFormModal from "./ProductFormModal";

const { Text } = Typography;

interface ProductTableProps {
  products: any[];
}

export default function ProductTable({
  products: initialProducts,
}: ProductTableProps) {
  // --- State Management ---
  const [products, setProducts] = useState(initialProducts);
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Physical");

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  // --- Handlers ---
  const handleOpenAddModal = () => {
    setSelectedProduct(null); // Ensure form is empty for "Add"
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (record: any) => {
    setSelectedProduct(record); // Pass existing product data
    setIsModalOpen(true);
  };

  const handleFormFinish = (values: any) => {
    if (selectedProduct) {
      // Logic for Edit: Update existing product in the local list
      setProducts((prev) =>
        prev.map((p) =>
          p.key === selectedProduct.key ? { ...p, ...values } : p,
        ),
      );
      message.success("Product updated successfully");
    } else {
      // Logic for Add: Create a new product entry
      const newProduct = {
        ...values,
        key: Date.now().toString(), // Generating a temporary unique key
        image: "https://via.placeholder.com/30", // Placeholder if no image logic is set
      };
      setProducts((prev) => [...prev, newProduct]);
      message.success("Product added successfully");
    }
    setIsModalOpen(false);
  };

  // --- Filtering Logic ---
  const filteredData = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const matchesCategory =
        item.type === categoryFilter || item.productType === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchText, categoryFilter]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: any) => (
        <Space>
          <Image src={record.image} width={30} height={30} alt={text} />
          <Text strong>{text}</Text>
        </Space>
      ),
    },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Size/Color",
      dataIndex: "specification",
      key: "specification",
      render: (_: any, record: any) =>
        record.specification ||
        `${record.size || "N/A"}, ${record.color || "N/A"}`,
    },
    { title: "Discount", dataIndex: "discount", key: "discount" },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            size="small"
            style={{ borderRadius: "4px" }}
            onClick={() => handleOpenEditModal(record)}
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            danger
            size="small"
            style={{ borderRadius: "4px" }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div
      style={{ background: "#f8f9fa", padding: "20px", borderRadius: "8px" }}
    >
      <Row
        gutter={16}
        justify="space-between"
        align="middle"
        style={{ marginBottom: "24px" }}
      >
        <Col span={20}>
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
            style={{ borderRadius: "8px", height: "45px", fontWeight: "bold" }}
            onClick={handleOpenAddModal}
          >
            Add Product
          </Button>
        </Col>
      </Row>

      <div style={{ marginBottom: "16px" }}>
        <Select
          defaultValue="Physical"
          variant="borderless"
          style={{ width: 120, fontWeight: "bold", fontSize: "16px" }}
          onChange={(value) => setCategoryFilter(value)}
          options={[
            { value: "Physical", label: "Physical" },
            { value: "Digital", label: "Digital" },
          ]}
        />
      </div>

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
            position: ["bottomRight"],
            showTotal: (total, range) =>
              `Showing ${range[0]} to ${range[1]} of ${total} results`,
          }}
          style={{
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid #f0f0f0",
            overflow: "hidden",
          }}
        />
      </ConfigProvider>

      {/* --- Reusable Modal --- */}
      <ProductFormModal
        open={isModalOpen}
        initialValues={selectedProduct}
        onCancel={() => setIsModalOpen(false)}
        onFinish={handleFormFinish}
      />
    </div>
  );
}
