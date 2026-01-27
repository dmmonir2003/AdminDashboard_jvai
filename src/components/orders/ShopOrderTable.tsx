// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React from "react";
// import {
//   Table,
//   Tag,
//   Button,
//   Space,
//   Grid,
//   Card,
//   Row,
//   Col,
//   Typography,
// } from "antd";
// import { EyeOutlined } from "@ant-design/icons";
// import Image from "next/image";

// const { useBreakpoint } = Grid;
// const { Text } = Typography;

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
} from "antd";
import { EyeOutlined } from "@ant-design/icons";
import Image from "next/image";

const { useBreakpoint } = Grid;
const { Text } = Typography;

export default function ShopOrderTable({ data, onView }: any) {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

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
            width={80}
            height={50}
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
    // Changed "Winner" to "Customer" for Shop Orders
    {
      title: "Customer",
      dataIndex: "winner", // Keep dataIndex if your mock uses 'winner', otherwise use 'customer'
      key: "winner",
      render: (text: string) => <span>{text ? `@${text}` : "N/A"}</span>,
    },
    // Changed "Current Price" to "Price"
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text: string) => <span style={{ fontWeight: 600 }}>{text}</span>,
    },
    // Changed "Claiming Time" to "Delivery Date"
    {
      title: "Delivery Date",
      dataIndex: "deliveryDate", // Matches your shopOrders mock data key
      key: "deliveryDate",
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
        rowKey="id"
        pagination={{ pageSize: 5 }}
        style={{
          background: "#fff",
          borderRadius: "8px",
          border: "1px solid #f0f0f0",
        }}
      />
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {data.map((item: any) => (
        <Card
          key={item.id}
          style={{ borderRadius: "12px", border: "none" }}
          styles={{ body: { padding: "16px" } }}
        >
          <Row gutter={[12, 12]} align="middle">
            <Col span={6}>
              <Image
                src={item.image}
                alt={item.title}
                width={60}
                height={60}
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
            </Col>
            <Col span={12}>
              <Text strong style={{ display: "block" }}>
                {item.title}
              </Text>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                ID: {item.id}
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
              <Text
                type="secondary"
                style={{ fontSize: "11px", display: "block" }}
              >
                Price
              </Text>
              <Text strong>{item.price}</Text>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <Tag
                color={item.status === "Delivered" ? "green" : "black"}
                style={{ margin: 0 }}
              >
                {item.status}
              </Tag>
            </Col>

            {/* Added Delivery Date to Mobile Card */}
            <Col span={24}>
              <Text type="secondary" style={{ fontSize: "11px" }}>
                Delivery Date:
              </Text>
              <Text style={{ fontSize: "11px", marginLeft: "4px" }}>
                {item.deliveryDate}
              </Text>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
}
