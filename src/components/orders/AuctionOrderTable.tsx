// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React from "react";
// import { Table, Tag, Button, Space } from "antd";
// import { EyeOutlined } from "@ant-design/icons";
// import Image from "next/image";

// interface AuctionTableProps {
//   data: any[];
//   onView: (record: any) => void;
// }

// export default function AuctionOrderTable({ data, onView }: AuctionTableProps) {
//   const columns = [
//     {
//       title: "Product",
//       dataIndex: "title",
//       key: "product",
//       render: (text: string, record: any) => (
//         <Space size="middle">
//           <Image
//             src={record.image}
//             alt={text}
//             width={150}
//             height={80}
//             style={{ borderRadius: "4px", objectFit: "cover" }}
//           />
//           <div>
//             <div style={{ fontWeight: 600 }}>{text}</div>
//             <div style={{ fontSize: "12px", color: "#8c8c8c" }}>
//               {record.id}
//             </div>
//           </div>
//         </Space>
//       ),
//     },
//     {
//       title: "Winner",
//       dataIndex: "winner",
//       key: "winner",
//       render: (text: string) => <span>#{text}</span>,
//     },
//     {
//       title: "Current Price",
//       dataIndex: "price",
//       key: "price",
//       render: (text: string) => <span style={{ fontWeight: 600 }}>{text}</span>,
//     },
//     {
//       title: "Claiming Time",
//       dataIndex: "time",
//       key: "time",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status: string) => (
//         <Tag
//           color={status === "Delivered" ? "green" : "black"}
//           style={{ borderRadius: "4px" }}
//         >
//           {status}
//         </Tag>
//       ),
//     },
//     {
//       title: "Action",
//       key: "action",
//       align: "right" as const,
//       render: (_: any, record: any) => (
//         <Button
//           icon={<EyeOutlined />}
//           onClick={() => onView(record)}
//           style={{ borderRadius: "6px" }}
//         >
//           View
//         </Button>
//       ),
//     },
//   ];

//   return (
//     <Table
//       columns={columns}
//       dataSource={data}
//       rowKey="id"
//       pagination={{ pageSize: 5 }}
//       style={{ background: "#fff", borderRadius: "8px" }}
//     />
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  Table,
  Tag,
  Button,
  Space,
  Grid,
  Card,
  Row,
  Col,
  Typography,
  Pagination,
} from "antd";
import { EyeOutlined } from "@ant-design/icons";
import Image from "next/image";

const { useBreakpoint } = Grid;
const { Text } = Typography;

// export default function AuctionOrderTable({ data, onView }: any) {
//   const screens = useBreakpoint();
//   const isMobile = !screens.md;

//   const columns = [
//     {
//       title: "Product",
//       dataIndex: "title",
//       render: (text: string, record: any) => (
//         <Space size="middle">
//           <Image
//             src={record.image}
//             alt={text}
//             width={80}
//             height={50}
//             style={{ borderRadius: "4px", objectFit: "cover" }}
//           />
//           <div>
//             <div style={{ fontWeight: 600 }}>{text}</div>
//             <div style={{ fontSize: "12px", color: "#8c8c8c" }}>
//               {record.id}
//             </div>
//           </div>
//         </Space>
//       ),
//     },
//     {
//       title: "Winner",
//       dataIndex: "winner",
//       render: (text: string) => <span>#{text}</span>,
//     },
//     {
//       title: "Current Price",
//       dataIndex: "price",
//       render: (text: string) => <span style={{ fontWeight: 600 }}>{text}</span>,
//     },
//     { title: "Claiming Time", dataIndex: "time" },
//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (status: string) => (
//         <Tag
//           color={status === "Delivered" ? "green" : "black"}
//           style={{ borderRadius: "4px" }}
//         >
//           {status}
//         </Tag>
//       ),
//     },
//     {
//       title: "Action",
//       align: "right" as const,
//       render: (_: any, record: any) => (
//         <Button icon={<EyeOutlined />} onClick={() => onView(record)}>
//           View
//         </Button>
//       ),
//     },
//   ];

//   if (!isMobile) {
//     return (
//       <Table
//         columns={columns}
//         dataSource={data}
//         rowKey="id"
//         pagination={{ pageSize: 5 }}
//         style={{
//           background: "#fff",
//           borderRadius: "8px",
//           border: "1px solid #f0f0f0",
//         }}
//       />
//     );
//   }

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//       {data.map((item: any) => (
//         <Card
//           key={item.id}
//           style={{ borderRadius: "12px", border: "none" }}
//           styles={{ body: { padding: "16px" } }}
//         >
//           <Row gutter={[12, 12]} align="middle">
//             <Col span={6}>
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={60}
//                 height={60}
//                 style={{ borderRadius: "8px", objectFit: "cover" }}
//               />
//             </Col>
//             <Col span={12}>
//               <Text strong style={{ display: "block" }}>
//                 {item.title}
//               </Text>
//               <Text type="secondary" style={{ fontSize: "12px" }}>
//                 ID: {item.id}
//               </Text>
//             </Col>
//             <Col span={6} style={{ textAlign: "right" }}>
//               <Button
//                 type="text"
//                 icon={<EyeOutlined />}
//                 onClick={() => onView(item)}
//               />
//             </Col>

//             <Col span={12}>
//               <Text
//                 type="secondary"
//                 style={{ fontSize: "11px", display: "block" }}
//               >
//                 Price
//               </Text>
//               <Text strong>{item.price}</Text>
//             </Col>
//             <Col span={12} style={{ textAlign: "right" }}>
//               <Tag
//                 color={item.status === "Delivered" ? "green" : "black"}
//                 style={{ margin: 0 }}
//               >
//                 {item.status}
//               </Tag>
//             </Col>
//           </Row>
//         </Card>
//       ))}
//     </div>
//   );
// }

// src/components/orders/AuctionOrderTable.tsx
export default function AuctionOrderTable({
  data,
  onView,
  loading,
  pagination,
}: any) {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const columns = [
    {
      title: "Product",
      key: "product",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Image
            src={record.thumbnail || "/placeholder.png"}
            alt={record.product_name}
            width={80}
            height={50}
            style={{ borderRadius: "4px", objectFit: "cover" }}
          />
          <div>
            <div style={{ fontWeight: 600 }}>{record.product_name}</div>
            <div style={{ fontSize: "12px", color: "#8c8c8c" }}>
              {record.order_id}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: "Winner",
      dataIndex: "winner_user",
      render: (user: string) => <span>@{user}</span>,
    },
    {
      title: "Current Price",
      dataIndex: "current_price",
      render: (price: number) => (
        <span style={{ fontWeight: 600 }}>SAR {price}</span>
      ),
    },
    { title: "Claiming Time", dataIndex: "claiming_time" },
    {
      title: "Status",
      dataIndex: "delivery_status",
      render: (status: string) => (
        <Tag
          color={status === "delivered" ? "green" : "black"}
          style={{ textTransform: "capitalize" }}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Action",
      align: "right" as const,
      render: (_: any, record: any) => (
        <Button icon={<EyeOutlined />} onClick={() => onView(record)}>
          View
        </Button>
      ),
    },
  ];

  if (!isMobile) {
    return (
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey="claim_id"
        pagination={pagination}
        style={{ background: "#fff", borderRadius: "8px" }}
      />
    );
  }

  // Mobile view remains same structure, just updated field names:
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {data.map((item: any) => (
        <Card key={item.claim_id} /* ... styling ... */>
          <Row gutter={[12, 12]} align="middle">
            <Col span={6}>
              <Image
                src={item.thumbnail}
                alt={item.product_name}
                width={60}
                height={60}
                style={{ borderRadius: "8px" }}
              />
            </Col>
            <Col span={12}>
              <Text strong>{item.product_name}</Text>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                ID: {item.order_id}
              </Text>
            </Col>
            <Col span={6} style={{ textAlign: "right" }}>
              <Button
                type="text"
                icon={<EyeOutlined />}
                onClick={() => onView(item)}
              />
            </Col>
            <Col span={12}>
              <Text type="secondary" style={{ fontSize: "11px" }}>
                Price
              </Text>
              <Text strong>SAR {item.current_price}</Text>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <Tag
                color={item.delivery_status === "delivered" ? "green" : "black"}
              >
                {item.delivery_status}
              </Tag>
            </Col>
          </Row>
        </Card>
      ))}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}
      >
        <Pagination {...pagination} simple size="small" />
      </div>
    </div>
  );
}
