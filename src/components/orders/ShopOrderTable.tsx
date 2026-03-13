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

// export default function ShopOrderTable({ data, onView }: any) {
//   const screens = useBreakpoint();
//   const isMobile = !screens.md;

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
//     // Changed "Winner" to "Customer" for Shop Orders
//     {
//       title: "Customer",
//       dataIndex: "winner", // Keep dataIndex if your mock uses 'winner', otherwise use 'customer'
//       key: "winner",
//       render: (text: string) => <span>{text ? `@${text}` : "N/A"}</span>,
//     },
//     // Changed "Current Price" to "Price"
//     {
//       title: "Price",
//       dataIndex: "price",
//       key: "price",
//       render: (text: string) => <span style={{ fontWeight: 600 }}>{text}</span>,
//     },
//     // Changed "Claiming Time" to "Delivery Date"
//     {
//       title: "Delivery Date",
//       dataIndex: "deliveryDate", // Matches your shopOrders mock data key
//       key: "deliveryDate",
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

//             {/* Added Delivery Date to Mobile Card */}
//             <Col span={24}>
//               <Text type="secondary" style={{ fontSize: "11px" }}>
//                 Delivery Date:
//               </Text>
//               <Text style={{ fontSize: "11px", marginLeft: "4px" }}>
//                 {item.deliveryDate}
//               </Text>
//             </Col>
//           </Row>
//         </Card>
//       ))}
//     </div>
//   );
// }

//TODO:review test
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
  Empty,
} from "antd";
import { EyeOutlined } from "@ant-design/icons";
import Image from "next/image";

const { useBreakpoint } = Grid;
const { Text } = Typography;

export default function ShopOrderTable({
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
            src={record.product?.thumbnail || "/placeholder.png"}
            alt={record.product?.product_name || "Product"}
            width={80}
            height={50}
            style={{ borderRadius: "4px", objectFit: "cover" }}
          />
          <div>
            <div style={{ fontWeight: 600 }}>
              {record.product?.product_name}
            </div>
            <div style={{ fontSize: "12px", color: "#8c8c8c" }}>
              {record.tracking_id}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: "Customer",
      key: "customer",
      render: (_: any, record: any) => (
        <span>{record.user?.name ? `@${record.user.name}` : "N/A"}</span>
      ),
    },
    {
      title: "Price",
      key: "price",
      render: (_: any, record: any) => (
        <span style={{ fontWeight: 600 }}>SAR {record.item_total}</span>
      ),
    },
    {
      title: "Color",
      key: "color",
      render: (_: any, record: any) => <span>{record.product.color}</span>,
    },
    {
      title: "Size",
      key: "size",
      render: (_: any, record: any) => <span>{record.product.size}</span>,
    },
    // {
    //   title: "Created At",
    //   key: "created_at",
    //   render: (_: any, record: any) => (
    //     <span>{new Date(record.created_at).toLocaleDateString()}</span>
    //   ),
    // },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag
          color={status === "delivered" ? "green" : "black"}
          style={{ borderRadius: "4px", textTransform: "capitalize" }}
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
        rowKey="order_item_id"
        pagination={{
          ...pagination,
          position: ["bottomRight"], // ✅ Only change
        }}
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
      {data && data.length > 0 ? (
        data.map((item: any) => (
          <Card
            key={item.order_item_id}
            style={{ borderRadius: "12px", border: "none" }}
            styles={{ body: { padding: "16px" } }}
          >
            <Row gutter={[12, 12]} align="middle">
              <Col span={6}>
                <Image
                  src={item.product?.thumbnail || "/placeholder.png"}
                  alt={item.product?.product_name || "Product"}
                  width={60}
                  height={60}
                  style={{ borderRadius: "8px", objectFit: "cover" }}
                />
              </Col>
              <Col span={12}>
                <Text strong style={{ display: "block" }}>
                  {item.product?.product_name}
                </Text>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  ID: {item.tracking_id}
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
                <Text strong>SAR {item.item_total}</Text>
              </Col>

              <Col span={12} style={{ textAlign: "right" }}>
                <Tag
                  color={item.status === "delivered" ? "green" : "black"}
                  style={{ margin: 0, textTransform: "capitalize" }}
                >
                  {item.status}
                </Tag>
              </Col>

              <Col span={24}>
                <Text type="secondary" style={{ fontSize: "11px" }}>
                  Order Date:
                </Text>
                <Text style={{ fontSize: "11px", marginLeft: "4px" }}>
                  {new Date(item.created_at).toLocaleDateString()}
                </Text>
              </Col>
            </Row>
          </Card>
        ))
      ) : (
        <Empty />
      )}

      {/* Mobile Pagination Centered */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "24px",
          marginBottom: "16px",
        }}
      >
        <Pagination {...pagination} simple size="small" />
      </div>
    </div>
  );
}
