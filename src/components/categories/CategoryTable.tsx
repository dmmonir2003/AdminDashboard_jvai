// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState, useMemo } from "react";
// import {
//   Table,
//   Button,
//   Input,
//   Switch,
//   Space,
//   Row,
//   Col,
//   ConfigProvider,
// } from "antd";
// import {
//   SearchOutlined,
//   PlusOutlined,
//   EditOutlined,
//   DeleteOutlined,
// } from "@ant-design/icons";

// interface CategoryTableProps {
//   categories: any[];
//   onEdit: (record: any) => void;
//   onAdd: () => void;
// }

// export default function CategoryTable({
//   categories: initialCategories, // Rename prop to avoid conflict
//   onEdit,
//   onAdd,
// }: CategoryTableProps) {
//   const [searchText, setSearchText] = useState("");
//   // Initialize state with the passed categories array
//   const [categoryData, setCategoryData] = useState<any[]>(initialCategories);

//   // --- Fixed Toggle Logic ---
//   const handleToggleStatus = (key: string) => {
//     setCategoryData((prev) =>
//       prev.map((item) =>
//         item.key === key
//           ? {
//               ...item,
//               status: item.status === "Active" ? "Deactive" : "Active",
//             }
//           : item,
//       ),
//     );
//   };

//   // Update filter to use the local state (categoryData)
//   const filteredData = useMemo(() => {
//     return categoryData.filter((item) =>
//       item.categoryName.toLowerCase().includes(searchText.toLowerCase()),
//     );
//   }, [categoryData, searchText]);

//   const columns = [
//     {
//       title: "Category Name",
//       dataIndex: "categoryName",
//       key: "categoryName",
//       render: (text: string) => <span style={{ fontWeight: 500 }}>{text}</span>,
//     },
//     {
//       title: "Number of Products",
//       dataIndex: "productCount",
//       key: "productCount",
//       align: "center" as const,
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       align: "center" as const,
//       render: (_: any, record: any) => (
//         <Switch
//           checked={record.status === "Active"}
//           onChange={() => handleToggleStatus(record.key)}
//           style={{
//             // Green color when active, standard grey when inactive
//             backgroundColor: record.status === "Active" ? "#16A34A" : "#d9d9d9",
//           }}
//         />
//       ),
//     },
//     {
//       title: "Action",
//       key: "action",
//       align: "center" as const,
//       render: (_: any, record: any) => (
//         <Space size="middle">
//           <Button
//             icon={<EditOutlined />}
//             onClick={() => onEdit(record)}
//             style={{ borderRadius: "6px", fontWeight: 500 }}
//           >
//             Edit
//           </Button>
//           <Button
//             icon={<DeleteOutlined />}
//             danger
//             style={{ borderRadius: "6px", fontWeight: 500 }}
//           >
//             Delete
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div style={{ background: "#fff", padding: "20px", borderRadius: "12px" }}>
//       <Row
//         gutter={16}
//         justify="space-between"
//         align="middle"
//         style={{ marginBottom: "24px" }}
//       >
//         <Col span={18}>
//           <Input
//             placeholder="Search Categories"
//             prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
//             style={{ borderRadius: "8px", height: "45px" }}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//         </Col>
//         <Col>
//           <Button
//             onClick={onAdd}
//             type="primary"
//             icon={<PlusOutlined />}
//             size="large"
//             style={{ borderRadius: "8px", height: "45px", fontWeight: "bold" }}
//           >
//             Add Category
//           </Button>
//         </Col>
//       </Row>

//       <ConfigProvider
//         theme={{
//           components: { Table: { headerBg: "#fff", headerColor: "#000" } },
//         }}
//       >
//         <Table
//           columns={columns}
//           dataSource={filteredData}
//           pagination={{
//             pageSize: 5,
//             showTotal: (total, range) =>
//               `Showing ${range[0]} to ${range[1]} of ${total} results`,
//           }}
//           style={{
//             border: "1px solid #e8e8e8",
//             borderRadius: "10px",
//             overflow: "hidden",
//           }}
//         />
//       </ConfigProvider>
//     </div>
//   );
// }

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
  Grid,
  Card,
  Typography,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Text } = Typography;
const { useBreakpoint } = Grid;

interface CategoryTableProps {
  categories: any[];
  onEdit: (record: any) => void;
  onAdd: () => void;
}

export default function CategoryTable({
  categories: initialCategories,
  onEdit,
  onAdd,
}: CategoryTableProps) {
  const [searchText, setSearchText] = useState("");
  const [categoryData, setCategoryData] = useState<any[]>(initialCategories);

  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const handleToggleStatus = (key: string) => {
    setCategoryData((prev) =>
      prev.map((item) =>
        item.key === key
          ? {
              ...item,
              status: item.status === "Active" ? "Deactive" : "Active",
            }
          : item,
      ),
    );
  };

  const filteredData = useMemo(() => {
    return categoryData.filter((item) =>
      item.categoryName.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [categoryData, searchText]);

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
      render: (_: any, record: any) => (
        <Switch
          checked={record.status === "Active"}
          onChange={() => handleToggleStatus(record.key)}
          style={{
            backgroundColor: record.status === "Active" ? "#16A34A" : "#d9d9d9",
          }}
        />
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
    <div
      style={{
        background: isMobile ? "transparent" : "#fff",
        padding: isMobile ? "0" : "20px",
        borderRadius: "12px",
      }}
    >
      {/* Search and Add Header */}
      <Row
        gutter={[16, 16]}
        justify="space-between"
        align="middle"
        style={{ marginBottom: "24px" }}
      >
        <Col xs={24} md={18}>
          <Input
            placeholder="Search Categories"
            prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
            style={{ borderRadius: "8px", height: "45px" }}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Col>
        <Col xs={24} md={6}>
          <Button
            onClick={onAdd}
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            block={isMobile}
            style={{ borderRadius: "8px", height: "45px", fontWeight: "bold" }}
          >
            Add Category
          </Button>
        </Col>
      </Row>

      {!isMobile ? (
        /* DESKTOP VIEW: TABLE */
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
      ) : (
        /* MOBILE VIEW: CARDS */
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <Card
                key={item.key}
                style={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                }}
                styles={{ body: { padding: "16px" } }}
              >
                <Row
                  justify="space-between"
                  align="middle"
                  style={{ marginBottom: "12px" }}
                >
                  <Col>
                    <Text strong style={{ fontSize: "16px" }}>
                      {item.categoryName}
                    </Text>
                    <div style={{ fontSize: "12px", color: "#8c8c8c" }}>
                      {item.productCount} Products
                    </div>
                  </Col>
                  <Col>
                    <Switch
                      checked={item.status === "Active"}
                      onChange={() => handleToggleStatus(item.key)}
                      style={{
                        backgroundColor:
                          item.status === "Active" ? "#16A34A" : "#d9d9d9",
                      }}
                    />
                  </Col>
                </Row>
                <Row gutter={12}>
                  <Col span={12}>
                    <Button
                      block
                      icon={<EditOutlined />}
                      onClick={() => onEdit(item)}
                      style={{ borderRadius: "8px" }}
                    >
                      Edit
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button
                      block
                      danger
                      icon={<DeleteOutlined />}
                      style={{ borderRadius: "8px" }}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Card>
            ))
          ) : (
            <Card style={{ textAlign: "center", borderRadius: "12px" }}>
              No categories found
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
