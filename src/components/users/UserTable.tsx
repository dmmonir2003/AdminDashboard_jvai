// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState, useMemo } from "react";
// import { Table, Input, Switch, Space, Button, Tag, ConfigProvider } from "antd";
// import { SearchOutlined, EyeOutlined } from "@ant-design/icons";

// interface UserTableProps {
//   users: any[];
//   onView: (user: any) => void;
// }

// export default function UserTable({ users, onView }: UserTableProps) {
//   const [searchText, setSearchText] = useState("");

//   // Filtering logic for search bar
//   const filteredData = useMemo(() => {
//     return users.filter(
//       (item) =>
//         item.name.toLowerCase().includes(searchText.toLowerCase()) ||
//         item.email.toLowerCase().includes(searchText.toLowerCase()),
//     );
//   }, [users, searchText]);

//   const columns = [
//     {
//       title: "User Name",
//       dataIndex: "name",
//       key: "name",
//       render: (text: string) => <span style={{ fontWeight: 500 }}>{text}</span>,
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       key: "phone",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       // Renders a Green or Black tag based on status
//       render: (status: string) => (
//         <Tag
//           color={status === "Active" ? "#2ecc71" : "#000"}
//           style={{
//             borderRadius: "6px",
//             padding: "2px 12px",
//             fontWeight: 600,
//             border: "none",
//           }}
//         >
//           {status}
//         </Tag>
//       ),
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (_: any, record: any) => (
//         <Space size="middle">
//           <Switch
//             defaultChecked={record.status === "Active"}
//             style={{
//               backgroundColor:
//                 record.status === "Active" ? "#2ecc71" : undefined,
//             }}
//           />
//           <Button
//             icon={<EyeOutlined />}
//             shape="circle"
//             onClick={() => onView(record)}
//             style={{ border: "none", boxShadow: "none", color: "#666" }}
//           />
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div
//       style={{
//         background: "#fff",
//         padding: "24px",
//         borderRadius: "12px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//       }}
//     >
//       {/* Full width search bar */}
//       <Input
//         placeholder="Search users"
//         prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
//         style={{
//           borderRadius: "8px",
//           height: "50px",
//           marginBottom: "24px",
//           backgroundColor: "#f9f9f9",
//           border: "1px solid #f0f0f0",
//         }}
//         onChange={(e) => setSearchText(e.target.value)}
//       />

//       <ConfigProvider
//         theme={{
//           components: { Table: { headerBg: "#fafafa", headerColor: "#000" } },
//         }}
//       >
//         <Table
//           columns={columns}
//           dataSource={filteredData}
//           pagination={{
//             pageSize: 5,
//             position: ["bottomRight"],
//             showSizeChanger: false,
//             // Custom total text to match image
//             showTotal: (total, range) => (
//               <span style={{ fontWeight: 500, color: "#666" }}>
//                 Showing {range[0]} to {range[1]} of {total} results
//               </span>
//             ),
//           }}
//           rowKey="id"
//           style={{
//             border: "1px solid #f0f0f0",
//             borderRadius: "12px",
//             overflow: "hidden",
//           }}
//           rowClassName="user-table-row"
//         />
//       </ConfigProvider>
//       <style jsx global>{`
//         .user-table-row td {
//           padding: 20px 16px !important;
//         }
//       `}</style>
//     </div>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Table,
  Input,
  Switch,
  Space,
  Button,
  Tag,
  ConfigProvider,
  Grid,
  Card,
  Typography,
  Row,
  Col,
} from "antd";
import { App } from "antd";

import { SearchOutlined, EyeOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;
const { Text } = Typography;

interface UserTableProps {
  users: any[];
  onView: (user: any) => void;
}

export default function UserTable({
  users: initialUsers,
  onView,
}: UserTableProps) {
  const [dataSource, setDataSource] = useState(initialUsers);
  const [searchText, setSearchText] = useState("");
  const { message } = App.useApp();
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  useEffect(() => {
    setDataSource(initialUsers);
  }, [initialUsers]);

  const handleToggleStatus = (checked: boolean, record: any) => {
    const newStatus = checked ? "Active" : "Blocked";
    const updatedData = dataSource.map((user) =>
      user.id === record.id ? { ...user, status: newStatus } : user,
    );
    setDataSource(updatedData);
    message.success(`User ${record.name} is now ${newStatus}`);
  };

  const filteredData = useMemo(() => {
    return dataSource.filter(
      (item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.email.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [dataSource, searchText]);

  const columns = [
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <span style={{ fontWeight: 500 }}>{text}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag
          style={{
            backgroundColor: status === "Active" ? "#2ecc71" : "#000000",
            color: "#ffffff",
            borderRadius: "6px",
            padding: "2px 12px",
            fontWeight: 600,
            border: "none",
            width: "80px",
            textAlign: "center",
          }}
        >
          {status}
        </Tag>
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
            icon={<EyeOutlined />}
            shape="circle"
            onClick={() => onView(record)}
            style={{ border: "none", boxShadow: "none", color: "#666" }}
          />
        </Space>
      ),
    },
  ];

  return (
    <div
      style={{
        background: isMobile ? "transparent" : "#fff",
        padding: isMobile ? "0" : "24px",
        borderRadius: "12px",
        boxShadow: isMobile ? "none" : "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Responsive Search Input */}
      <Input
        placeholder="Search users"
        prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
        style={{
          borderRadius: "8px",
          height: "50px",
          marginBottom: "24px",
          backgroundColor: "#f9f9f9",
          border: "1px solid #f0f0f0",
        }}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {!isMobile ? (
        /* DESKTOP VIEW */
        <ConfigProvider
          theme={{
            components: {
              Table: { headerBg: "#fafafa", headerColor: "#000" },
              Switch: { colorPrimary: "#2ecc71" },
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={filteredData}
            pagination={{
              pageSize: 5,
              placement: ["bottom"] as any,
              showTotal: (total, range) => (
                <span style={{ fontWeight: 500, color: "#666" }}>
                  Showing {range[0]} to {range[1]} of {total} results
                </span>
              ),
            }}
            rowKey="id"
            style={{
              border: "1px solid #f0f0f0",
              borderRadius: "12px",
              overflow: "hidden",
            }}
            rowClassName="user-table-row"
          />
        </ConfigProvider>
      ) : (
        /* MOBILE VIEW: Cards */
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {filteredData.map((user) => (
            <Card
              key={user.id}
              style={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              <Row
                justify="space-between"
                align="top"
                style={{ marginBottom: "8px" }}
              >
                <Col>
                  <Text strong style={{ fontSize: "16px", display: "block" }}>
                    {user.name}
                  </Text>
                  <Text type="secondary" style={{ fontSize: "12px" }}>
                    {user.email}
                  </Text>
                </Col>
                <Col>
                  <Button
                    icon={<EyeOutlined />}
                    shape="circle"
                    onClick={() => onView(user)}
                    style={{ backgroundColor: "#f0f0f0", border: "none" }}
                  />
                </Col>
              </Row>

              <div style={{ margin: "12px 0", fontSize: "13px" }}>
                <Text type="secondary">Phone: </Text> <Text>{user.phone}</Text>
              </div>

              <Row
                justify="space-between"
                align="middle"
                style={{ marginTop: "16px" }}
              >
                <Col>
                  <Tag
                    style={{
                      backgroundColor:
                        user.status === "Active" ? "#2ecc71" : "#000000",
                      color: "#ffffff",
                      borderRadius: "6px",
                      border: "none",
                      fontWeight: 600,
                    }}
                  >
                    {user.status}
                  </Tag>
                </Col>
                <Col>
                  <Space>
                    <Text type="secondary">Status</Text>
                    <Switch
                      size="small"
                      checked={user.status === "Active"}
                      onChange={(checked) => handleToggleStatus(checked, user)}
                      style={{
                        backgroundColor:
                          user.status === "Active" ? "#2ecc71" : undefined,
                      }}
                    />
                  </Space>
                </Col>
              </Row>
            </Card>
          ))}
          {/* Mobile pagination summary */}
          <div style={{ textAlign: "center", color: "#666", marginTop: "8px" }}>
            Total {filteredData.length} users
          </div>
        </div>
      )}

      <style jsx global>{`
        .user-table-row td {
          padding: 20px 16px !important;
        }
      `}</style>
    </div>
  );
}
