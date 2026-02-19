// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React from "react";
// import {
//   Button,
//   Card,
//   Row,
//   Col,
//   Typography,
//   Tag,
//   Tabs,
//   List,
//   Space,
// } from "antd";
// import { ArrowLeftOutlined } from "@ant-design/icons";

// const { Title, Text } = Typography;

// //Mock Data for the Activities tabs
// const auctionHistoryData = [
//   { id: 1, title: "Participated in auction #100", date: "2 days ago", bids: 3 },
//   { id: 2, title: "Participated in auction #200", date: "4 days ago", bids: 3 },
//   { id: 3, title: "Participated in auction #300", date: "4 days ago", bids: 3 },
// ];

// const walletTransactionData = [
//   {
//     id: 1,
//     title: "Added funds to wallet",
//     date: "1 week ago",
//     amount: "+ SAR 500.00",
//   },
//   { id: 2, title: "Withdrawal", date: "2 weeks ago", amount: "- SAR 100.00" },
// ];

// interface UserViewProps {
//   user: any;
//   onBack: () => void;
// }

// export default function UserView({ user, onBack }: UserViewProps) {
//   // Custom rendering for Auction History List
//   const renderAuctionItem = (item: any) => (
//     <List.Item style={{ padding: "16px 0", borderBottom: "1px solid #f0f0f0" }}>
//       <Row justify="space-between" align="middle" style={{ width: "100%" }}>
//         <Col>
//           <Text strong style={{ fontSize: "16px", display: "block" }}>
//             {item.title}
//           </Text>
//           <Text type="secondary" style={{ fontSize: "14px" }}>
//             {item.date}
//           </Text>
//         </Col>
//         <Col>
//           <Tag
//             color="black"
//             style={{
//               backgroundColor: "#000000",
//               color: "#ffffff",
//               borderRadius: "6px",
//               padding: "4px 16px",
//               fontSize: "14px",
//               fontWeight: 500,
//             }}
//           >
//             {item.bids} Bids
//           </Tag>
//         </Col>
//       </Row>
//     </List.Item>
//   );

//   // Custom rendering for Wallet Transaction List
//   const renderWalletItem = (item: any) => (
//     <List.Item style={{ padding: "16px 0", borderBottom: "1px solid #f0f0f0" }}>
//       <Row justify="space-between" align="middle" style={{ width: "100%" }}>
//         <Col>
//           <Text strong style={{ fontSize: "16px", display: "block" }}>
//             {item.title}
//           </Text>
//           <Text type="secondary" style={{ fontSize: "14px" }}>
//             {item.date}
//           </Text>
//         </Col>
//         <Col>
//           <Text
//             strong
//             style={{
//               fontSize: "16px",
//               color: item.amount.startsWith("+") ? "#2ecc71" : "#e74c3c",
//             }}
//           >
//             {item.amount}
//           </Text>
//         </Col>
//       </Row>
//     </List.Item>
//   );

//   const tabItems = [
//     {
//       key: "1",
//       label: "Auction History",
//       children: (
//         <List
//           dataSource={auctionHistoryData}
//           renderItem={renderAuctionItem}
//           split={false}
//         />
//       ),
//     },
//     {
//       key: "2",
//       label: "Wallet Transactions",
//       children: (
//         <List
//           dataSource={walletTransactionData}
//           renderItem={renderWalletItem}
//           split={false}
//         />
//       ),
//     },
//   ];

//   return (
//     <div style={{ padding: "24px" }}>
//       {/* Header with Back Button */}
//       <Button
//         icon={<ArrowLeftOutlined />}
//         onClick={onBack}
//         style={{
//           marginBottom: "20px",
//           border: "none",
//           background: "transparent",
//           paddingLeft: 0,
//           fontSize: "16px",
//           fontWeight: 500,
//         }}
//       >
//         Back
//       </Button>

//       <Row gutter={24}>
//         {/* --- Left Column: User Information Card --- */}
//         <Col xs={24} md={8}>
//           <Card
//             bordered={false}
//             style={{
//               borderRadius: "12px",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//             }}
//             styles={{ body: { padding: "24px" } }}
//           >
//             <Title level={4} style={{ marginTop: 0, marginBottom: "24px" }}>
//               User Information
//             </Title>

//             <Space direction="vertical" size="large" style={{ width: "100%" }}>
//               <div>
//                 <Text type="secondary" style={labelStyle}>
//                   Name
//                 </Text>
//                 <div style={valueStyle}>{user.name}</div>
//               </div>
//               <div>
//                 <Text type="secondary" style={labelStyle}>
//                   Email
//                 </Text>
//                 <div style={valueStyle}>{user.email}</div>
//               </div>
//               <div>
//                 <Text type="secondary" style={labelStyle}>
//                   Status
//                 </Text>
//                 <div>
//                   <Tag
//                     // color={user.status === "Active" ? "#2ecc71" : "#000"}
//                     style={{
//                       backgroundColor:
//                         user.status === "Active" ? "#2ecc71" : "#000000",
//                       borderRadius: "6px",
//                       color: "#ffffff",
//                       padding: "4px 16px",
//                       fontWeight: 600,
//                       border: "none",
//                       fontSize: "14px",
//                     }}
//                   >
//                     {user.status}
//                   </Tag>
//                 </div>
//               </div>
//               <div>
//                 <Text type="secondary" style={labelStyle}>
//                   Wallet Coins
//                 </Text>
//                 <div style={valueStyle}>{user.walletCoins}</div>
//               </div>
//               <div>
//                 <Text type="secondary" style={labelStyle}>
//                   Refundable Coins
//                 </Text>
//                 <div style={valueStyle}>{user.refundableCoins}</div>
//               </div>
//             </Space>
//           </Card>
//         </Col>

//         {/* --- Right Column: Activity Tabs Card --- */}
//         <Col xs={24} md={16}>
//           <Card
//             bordered={false}
//             style={{
//               borderRadius: "12px",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//               height: "100%",
//             }}
//             styles={{ body: { padding: "24px" } }}
//           >
//             <Title level={4} style={{ marginTop: 0, marginBottom: "20px" }}>
//               Activity
//             </Title>

//             {/* Custom styled Tabs to match the pill-box design */}
//             <Tabs
//               defaultActiveKey="1"
//               items={tabItems}
//               className="user-activity-tabs"
//             />
//           </Card>
//         </Col>
//       </Row>

//       {/* Global styles specifically for the tab appearance in the image */}
//       <style jsx global>{`
//         .user-activity-tabs .ant-tabs-nav {
//           margin-bottom: 24px !important;
//         }
//         .user-activity-tabs .ant-tabs-nav-list {
//           background-color: #f0f2f5;
//           border-radius: 25px;
//           padding: 4px;
//         }
//         .user-activity-tabs .ant-tabs-tab {
//           border-radius: 20px !important;
//           padding: 8px 24px !important;
//           margin: 0 !important;
//           border: none !important;
//           background: transparent;
//           transition: all 0.3s ease;
//         }
//         .user-activity-tabs .ant-tabs-tab-active {
//           background: #fff !important;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//         }
//         .user-activity-tabs .ant-tabs-tab-btn {
//           color: #666 !important;
//           font-weight: 500;
//         }
//         .user-activity-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
//           color: #000 !important;
//           font-weight: 600;
//         }
//         .user-activity-tabs .ant-tabs-ink-bar {
//           display: none !important;
//         }
//       `}</style>
//     </div>
//   );
// }

// // Styles for labels and values in the left card
// const labelStyle = { fontSize: "14px", marginBottom: "4px", display: "block" };
// const valueStyle = { fontSize: "16px", fontWeight: 600, color: "#000" };

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  Button,
  Card,
  Row,
  Col,
  Typography,
  Tag,
  Tabs,
  List,
  Space,
  Grid,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

interface UserViewProps {
  user: any;
  historyData?: any[]; // ← make optional
  transactionsData?: any[];
  onBack: () => void;
}

export default function UserView({
  user,
  historyData = [], // ← default to empty array
  transactionsData = [],
  onBack,
}: UserViewProps) {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  // --- Fixed Style Declarations ---
  const labelStyle: React.CSSProperties = {
    fontSize: "12px",
    marginBottom: "2px",
    display: "block",
  };

  const valueStyle: React.CSSProperties = {
    fontSize: "15px",
    fontWeight: 600,
    color: "#000",
    wordBreak: "break-all",
  };

  const renderAuctionItem = (item: any) => (
    <List.Item style={{ padding: "16px 0", borderBottom: "1px solid #f0f0f0" }}>
      <Row
        justify="space-between"
        align="middle"
        style={{ width: "100%" }}
        gutter={[8, 8]}
      >
        <Col xs={16} sm={18}>
          <Text
            strong
            style={{ fontSize: isMobile ? "14px" : "16px", display: "block" }}
          >
            {item.title}
          </Text>
          <Text type="secondary" style={{ fontSize: "12px" }}>
            {item.date}
          </Text>
        </Col>
        <Col xs={8} sm={6} style={{ textAlign: "right" }}>
          <Tag
            color="black"
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              borderRadius: "6px",
              padding: isMobile ? "2px 8px" : "4px 16px",
              fontSize: isMobile ? "12px" : "14px",
              fontWeight: 500,
              margin: 0,
            }}
          >
            {item.bids} Bids
          </Tag>
        </Col>
      </Row>
    </List.Item>
  );

  const renderWalletItem = (item: any) => (
    <List.Item style={{ padding: "16px 0", borderBottom: "1px solid #f0f0f0" }}>
      <Row
        justify="space-between"
        align="middle"
        style={{ width: "100%" }}
        gutter={[8, 8]}
      >
        <Col xs={14} sm={16}>
          <Text
            strong
            style={{ fontSize: isMobile ? "14px" : "16px", display: "block" }}
          >
            {item.title}
          </Text>
          <Text type="secondary" style={{ fontSize: "12px" }}>
            {item.date}
          </Text>
        </Col>
        <Col xs={10} sm={8} style={{ textAlign: "right" }}>
          <Text
            strong
            style={{
              fontSize: isMobile ? "14px" : "16px",
              color: item.amount.startsWith("+") ? "#2ecc71" : "#e74c3c",
            }}
          >
            {item.amount}
          </Text>
        </Col>
      </Row>
    </List.Item>
  );

  const tabItems = [
    {
      key: "1",
      label: "Auction History",
      children: (
        <div>
          {historyData.length > 0 ? (
            historyData.map((item, idx) => (
              <React.Fragment key={idx}>
                {renderAuctionItem({
                  title: item.auction_title,
                  date: `${item.days_ago} day${item.days_ago !== 1 ? "s" : ""} ago`,
                  bids: item.total_bids,
                })}
              </React.Fragment>
            ))
          ) : (
            <div
              style={{ textAlign: "center", padding: "40px", color: "#999" }}
            >
              No auction history found
            </div>
          )}
        </div>
      ),
    },
    {
      key: "2",
      label: "Wallet Transactions",
      children: (
        <div>
          {transactionsData.length > 0 ? (
            transactionsData.map((item) => (
              <React.Fragment key={item.id}>
                {renderWalletItem({
                  title: item.description,
                  date: new Date(item.created_at).toLocaleDateString(),
                  amount: `${item.transaction_type === "bid" || item.transaction_type === "entry_fee" ? "-" : "+"} ${item.amount} Coins`,
                })}
              </React.Fragment>
            ))
          ) : (
            <div
              style={{ textAlign: "center", padding: "40px", color: "#999" }}
            >
              No transactions found
            </div>
          )}
        </div>
      ),
    },
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
          paddingLeft: 0,
          fontSize: "16px",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
        }}
      >
        Back
      </Button>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={8}>
          <Card
            variant="borderless"
            style={{
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
            styles={{ body: { padding: isMobile ? "20px" : "24px" } }}
          >
            <Title level={4} style={{ marginTop: 0, marginBottom: "24px" }}>
              User Information
            </Title>

            <Space
              orientation="vertical"
              size="large"
              style={{ width: "100%" }}
            >
              <div>
                <Text type="secondary" style={labelStyle}>
                  Name
                </Text>
                <div style={valueStyle}>{user.name}</div>
              </div>
              <div>
                <Text type="secondary" style={labelStyle}>
                  Email
                </Text>
                <div style={valueStyle}>{user.email}</div>
              </div>
              <div>
                <Text type="secondary" style={labelStyle}>
                  Phone
                </Text>
                <div style={valueStyle}>{user.phone}</div>
              </div>
              <div>
                <Text type="secondary" style={labelStyle}>
                  Status
                </Text>
                <div style={{ marginTop: "4px" }}>
                  <Tag
                    style={{
                      backgroundColor:
                        user.status === "Active" ? "#2ecc71" : "#000000",
                      borderRadius: "6px",
                      color: "#ffffff",
                      padding: "4px 16px",
                      fontWeight: 600,
                      border: "none",
                      fontSize: "14px",
                    }}
                  >
                    {user.status}
                  </Tag>
                </div>
              </div>
              <Row gutter={16}>
                <Col span={12}>
                  <Text type="secondary" style={labelStyle}>
                    Wallet
                  </Text>
                  <div style={valueStyle}>{user.walletCoins || 0}</div>
                </Col>
                <Col span={12}>
                  <Text type="secondary" style={labelStyle}>
                    Refundable
                  </Text>
                  <div style={valueStyle}>{user.refundableCoins || 0}</div>
                </Col>
              </Row>
            </Space>
          </Card>
        </Col>

        <Col xs={24} lg={16}>
          <Card
            variant="borderless"
            style={{
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              height: "100%",
            }}
            styles={{ body: { padding: isMobile ? "16px" : "24px" } }}
          >
            <Title level={4} style={{ marginTop: 0, marginBottom: "20px" }}>
              Activity
            </Title>
            <Tabs
              defaultActiveKey="1"
              items={tabItems}
              className="user-activity-tabs"
            />
          </Card>
        </Col>
      </Row>

      <style jsx global>{`
        .user-activity-tabs .ant-tabs-nav {
          margin-bottom: 24px !important;
        }
        .user-activity-tabs .ant-tabs-nav-list {
          background-color: #f0f2f5;
          border-radius: 25px;
          padding: 4px;
          display: flex;
          width: ${isMobile ? "max-content" : "auto"};
        }
        .user-activity-tabs .ant-tabs-nav-wrap {
          overflow-x: auto !important;
        }
        .user-activity-tabs .ant-tabs-nav-wrap::-webkit-scrollbar {
          display: none;
        }
        .user-activity-tabs .ant-tabs-tab {
          border-radius: 20px !important;
          padding: 8px 20px !important;
          margin: 0 !important;
          border: none !important;
          background: transparent;
        }
        .user-activity-tabs .ant-tabs-tab-active {
          background: #fff !important;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .user-activity-tabs .ant-tabs-tab-btn {
          color: #666 !important;
          font-size: ${isMobile ? "13px" : "14px"};
        }
        .user-activity-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #000 !important;
          font-weight: 600;
        }
        .user-activity-tabs .ant-tabs-ink-bar {
          display: none !important;
        }
        .user-activity-tabs .ant-tabs-nav-operations {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
