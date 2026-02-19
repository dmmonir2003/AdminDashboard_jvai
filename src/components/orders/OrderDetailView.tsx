/* eslint-disable @typescript-eslint/ban-ts-comment */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React from "react";
// import {
//   Button,
//   Card,
//   Row,
//   Col,
//   Typography,
//   Space,
//   Select,
//   DatePicker,
//   List,
//   Divider,
// } from "antd";
// import { ArrowLeftOutlined, CalendarOutlined } from "@ant-design/icons";

// const { Title, Text } = Typography;

// interface OrderDetailViewProps {
//   order: any;
//   onBack: () => void;
// }

// export default function OrderDetailView({
//   order,
//   onBack,
// }: OrderDetailViewProps) {
//   // Mock transactions - only show for Auctions
//   const auctionTransactions = [
//     { id: "#1000", date: "2 days ago", amount: "+SAR 125" },
//     { id: "#2000", date: "4 days ago", amount: "+SAR 300" },
//     { id: "#3000", date: "4 days ago", amount: "+SAR 450" },
//   ];

//   // Determine if this is a shop order or auction order
//   // Assuming 'order.winner' exists only for auctions, or you pass a 'type' property
//   const isAuction = !!order?.winner;

//   return (
//     <div style={{ padding: "24px" }}>
//       <Button
//         icon={<ArrowLeftOutlined />}
//         onClick={onBack}
//         style={{
//           marginBottom: "20px",
//           border: "none",
//           background: "transparent",
//           fontWeight: 600,
//         }}
//       >
//         Back
//       </Button>

//       <Row gutter={24}>
//         {/* Left Column: User Information */}
//         <Col xs={24} md={8}>
//           <Card
//             bordered={false}
//             style={{
//               borderRadius: "12px",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//             }}
//           >
//             <Title level={4}>User Information</Title>
//             <Space
//               direction="vertical"
//               size="middle"
//               style={{ width: "100%", marginTop: "16px" }}
//             >
//               <InfoItem label="Name" value="John Smith" />
//               <InfoItem label="Email" value="john@example.com" />
//               <InfoItem label="Street Address" value="Mohakhali" />
//               <InfoItem label="Apartment" value="3rd Floor" />
//               <InfoItem label="City" value="Dhaka" />
//               <InfoItem label="Zip Code" value="4440" />
//             </Space>
//           </Card>
//         </Col>

//         {/* Right Column: Activity and Status Update */}
//         <Col xs={24} md={16}>
//           <Card
//             bordered={false}
//             style={{
//               borderRadius: "12px",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//             }}
//           >
//             <Title level={4}>Activity</Title>

//             {/* CONDITIONAL RENDERING: Hide for Shop Orders */}
//             {isAuction && (
//               <>
//                 <Text strong style={{ display: "block", marginTop: "16px" }}>
//                   Auction History
//                 </Text>
//                 <List
//                   dataSource={auctionTransactions}
//                   renderItem={(item) => (
//                     <List.Item style={{ padding: "12px 0" }}>
//                       <div
//                         style={{
//                           width: "100%",
//                           display: "flex",
//                           justifyContent: "space-between",
//                         }}
//                       >
//                         <div>
//                           <Text strong>Transaction {item.id}</Text>
//                           <br />
//                           <Text type="secondary" style={{ fontSize: "12px" }}>
//                             {item.date}
//                           </Text>
//                         </div>
//                         <Text strong>{item.amount}</Text>
//                       </div>
//                     </List.Item>
//                   )}
//                 />
//                 <Divider />
//               </>
//             )}

//             <div style={{ marginTop: isAuction ? "0px" : "16px" }}>
//               <Text
//                 strong
//                 style={{
//                   display: "block",
//                   marginBottom: "12px",
//                   fontSize: "16px",
//                 }}
//               >
//                 {isAuction ? "Auction Delivery" : "Order Status Update"}
//               </Text>

//               <Row gutter={16} align="bottom">
//                 <Col span={12}>
//                   <Text
//                     type="secondary"
//                     style={{ display: "block", marginBottom: "8px" }}
//                   >
//                     Status
//                   </Text>
//                   <Select
//                     defaultValue={order?.status || "In Progress"}
//                     style={{ width: "100%", height: "45px" }}
//                     options={[
//                       { value: "In Progress", label: "In Progress" },
//                       { value: "Delivered", label: "Delivered" },
//                       { value: "Cancelled", label: "Cancelled" },
//                     ]}
//                   />
//                 </Col>
//                 <Col span={12}>
//                   <Text
//                     type="secondary"
//                     style={{ display: "block", marginBottom: "8px" }}
//                   >
//                     Estimated Date
//                   </Text>
//                   <DatePicker
//                     placeholder="Select Date"
//                     suffixIcon={<CalendarOutlined />}
//                     style={{ width: "100%", height: "45px" }}
//                   />
//                 </Col>
//               </Row>

//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "flex-end",
//                   marginTop: "32px",
//                 }}
//               >
//                 <Button
//                   type="primary"
//                   size="large"
//                   style={{
//                     borderRadius: "8px",
//                     padding: "0 60px",
//                     fontWeight: 600,
//                     height: "48px",
//                   }}
//                 >
//                   Save Changes
//                 </Button>
//               </div>
//             </div>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// // Small helper component for Info display
// const InfoItem = ({ label, value }: { label: string; value: string }) => (
//   <div>
//     <Text type="secondary" style={{ fontSize: "12px" }}>
//       {label}
//     </Text>
//     <div style={{ fontWeight: 600, fontSize: "15px" }}>{value}</div>
//   </div>
// );

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  Button,
  Card,
  Row,
  Col,
  Typography,
  Space,
  Select,
  DatePicker,
  Divider,
  Grid,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

export default function OrderDetailView({ order, onBack }: any) {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const isAuction = !!order?.winner;

  const auctionTransactions = [
    { id: "#1000", date: "2 days ago", amount: "+SAR 125" },
    { id: "#2000", date: "4 days ago", amount: "+SAR 300" },
    { id: "#3000", date: "4 days ago", amount: "+SAR 450" },
  ];

  return (
    <div
      style={{
        padding: isMobile ? "16px" : "24px",
        background: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={onBack}
        style={{
          marginBottom: "20px",
          border: "none",
          background: "transparent",
          fontWeight: 600,
          paddingLeft: 0,
        }}
      >
        Back
      </Button>

      <Row gutter={[24, 24]}>
        {/* Left Column: User Information */}
        <Col xs={24} lg={8}>
          <Card
            variant="borderless"
            style={{
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <Title level={4}>User Information</Title>
            <Space
              orientation="vertical"
              size="middle"
              style={{ width: "100%", marginTop: "16px" }}
            >
              <InfoItem label="Name" value="John Smith" />
              <InfoItem label="Email" value="john@example.com" />
              {/* --- New Phone Number Field --- */}
              <InfoItem
                label="Phone Number"
                value={order?.phone || "+966 50 123 4567"}
              />

              <InfoItem label="Street Address" value="Mohakhali" />
              <InfoItem label="Apartment" value="3rd Floor" />
              <Row gutter={16}>
                <Col span={12}>
                  <InfoItem label="City" value="Dhaka" />
                </Col>
                <Col span={12}>
                  <InfoItem label="Zip" value="4440" />
                </Col>
              </Row>
            </Space>
          </Card>
        </Col>

        {/* Right Column: Activity & Status Update */}
        <Col xs={24} lg={16}>
          <Card
            variant="borderless"
            style={{
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <Title level={4}>Activity</Title>

            {isAuction && (
              <>
                <Text strong style={{ display: "block", marginTop: "16px" }}>
                  Auction History
                </Text>
                {/* <List
                  dataSource={auctionTransactions}
                  renderItem={(item) => (
                    <List.Item style={{ padding: "12px 0" }}>
                      <Row justify="space-between" style={{ width: "100%" }}>
                        <Col>
                          <Text strong>Transaction {item.id}</Text>
                          <br />
                          <Text type="secondary" style={{ fontSize: "12px" }}>
                            {item.date}
                          </Text>
                        </Col>
                        <Col>
                          <Text strong style={{ color: "#2ecc71" }}>
                            {item.amount}
                          </Text>
                        </Col>
                      </Row>
                    </List.Item>
                  )}
                /> */}
                {/* @ts-ignore */}
                {/* <List
                  dataSource={auctionTransactions}
                  renderItem={(item) => (
                    <List.Item style={{ padding: "12px 0" }}>
                      <Row justify="space-between" style={{ width: "100%" }}>
                        <Col>
                          <Text strong>Transaction {item.id}</Text>
                          <br />
                          <Text type="secondary" style={{ fontSize: "12px" }}>
                            {item.date}
                          </Text>
                        </Col>
                        <Col>
                          <Text strong style={{ color: "#2ecc71" }}>
                            {item.amount}
                          </Text>
                        </Col>
                      </Row>
                    </List.Item>
                  )}
                /> */}

                <div>
                  {auctionTransactions.map((item) => (
                    <div key={item.id} style={{ padding: "12px 0" }}>
                      <Row justify="space-between" style={{ width: "100%" }}>
                        <Col>
                          <Text strong>Transaction {item.id}</Text>
                          <br />
                          <Text type="secondary" style={{ fontSize: "12px" }}>
                            {item.date}
                          </Text>
                        </Col>
                        <Col>
                          <Text strong style={{ color: "#2ecc71" }}>
                            {item.amount}
                          </Text>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </div>

                <Divider />
              </>
            )}

            <div style={{ marginTop: "16px" }}>
              <Text
                strong
                style={{
                  display: "block",
                  marginBottom: "12px",
                  fontSize: "16px",
                }}
              >
                {isAuction ? "Auction Delivery" : "Order Status Update"}
              </Text>

              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12}>
                  <Text
                    type="secondary"
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    Status
                  </Text>
                  <Select
                    defaultValue={order?.status || "In Progress"}
                    style={{ width: "100%", height: "45px" }}
                    options={[
                      { value: "In Progress", label: "In Progress" },
                      { value: "Delivered", label: "Delivered" },
                      { value: "Cancelled", label: "Cancelled" },
                    ]}
                  />
                </Col>
                <Col xs={24} sm={12}>
                  <Text
                    type="secondary"
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    Estimated Date
                  </Text>
                  <DatePicker style={{ width: "100%", height: "45px" }} />
                </Col>
              </Row>

              <div
                style={{
                  marginTop: "32px",
                  textAlign: isMobile ? "center" : "right",
                }}
              >
                <Button
                  type="primary"
                  size="large"
                  block={isMobile}
                  style={{
                    borderRadius: "8px",
                    fontWeight: 600,
                    height: "48px",
                    padding: isMobile ? "0" : "0 60px",
                  }}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

// Helper component with React.CSSProperties to avoid TS errors
const InfoItem = ({ label, value }: { label: string; value: string }) => {
  const valueStyle: React.CSSProperties = {
    fontWeight: 600,
    fontSize: "15px",
    wordBreak: "break-all",
  };

  return (
    <div style={{ marginBottom: "12px" }}>
      <Text type="secondary" style={{ fontSize: "12px" }}>
        {label}
      </Text>
      <div style={valueStyle}>{value}</div>
    </div>
  );
};
