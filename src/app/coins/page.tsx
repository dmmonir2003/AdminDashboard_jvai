// "use client";

// import React, { useState } from "react";
// import DashboardLayout from "@/src/components/layout/DashboardLayout";
// import {
//   Table,
//   Button,
//   Switch,
//   Typography,
//   ConfigProvider,
//   Space,
//   message,
// } from "antd";
// import { PlusOutlined, EditOutlined } from "@ant-design/icons";
// import WalletStats from "@/src/components/coins/WalletStats";
// import CoinPricingModal from "@/src/components/coins/CoinPricingModal";

// const { Title, Text } = Typography;

// export default function CoinsPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPackage, setSelectedPackage] = useState<any>(null);

//   // 1. Initialize data in state to allow dynamic updates
//   const [dataSource, setDataSource] = useState([
//     { key: "1", packageName: "100 Coin", price: "SAR 100", status: "Active" },
//     { key: "2", packageName: "200 Coin", price: "SAR 200", status: "Active" },
//     { key: "3", packageName: "300 Coin", price: "SAR 300", status: "Active" },
//     { key: "4", packageName: "500 Coin", price: "SAR 500", status: "Paused" },
//     { key: "5", packageName: "1000 Coin", price: "SAR 1000", status: "Active" },
//     { key: "6", packageName: "2000 Coin", price: "SAR 2000", status: "Paused" },
//     { key: "7", packageName: "5000 Coin", price: "SAR 5000", status: "Active" },
//     {
//       key: "8",
//       packageName: "10,000 Coin",
//       price: "SAR 10,000",
//       status: "Paused",
//     },
//   ]);

//   // 2. Handler to toggle status between Active and Paused
//   const handleToggleStatus = (checked: boolean, record: any) => {
//     const newStatus = checked ? "Active" : "Paused";

//     const updatedData = dataSource.map((item) =>
//       item.key === record.key ? { ...item, status: newStatus } : item,
//     );

//     setDataSource(updatedData);
//     message.success(`${record.packageName} is now ${newStatus}`);
//   };

//   const columns = [
//     { title: "Coin Packages", dataIndex: "packageName", key: "packageName" },
//     { title: "Price", dataIndex: "price", key: "price" },
//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (status: string) => (
//         <div
//           style={{
//             background: status === "Active" ? "#2ecc71" : "#000",
//             color: "#fff",
//             borderRadius: "6px",
//             padding: "4px 12px",
//             display: "inline-block",
//             fontWeight: 600,
//             fontSize: "12px",
//             width: "70px",
//             textAlign: "center",
//           }}
//         >
//           {status}
//         </div>
//       ),
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (_: any, record: any) => (
//         <Space size="middle">
//           <Switch
//             checked={record.status === "Active"}
//             onChange={(checked) => handleToggleStatus(checked, record)}
//             style={{
//               backgroundColor:
//                 record.status === "Active" ? "#2ecc71" : undefined,
//             }}
//           />
//           <Button
//             icon={<EditOutlined />}
//             type="text"
//             onClick={() => {
//               setSelectedPackage(record);
//               setIsModalOpen(true);
//             }}
//           />
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <DashboardLayout>
//       <div>
//         <WalletStats />

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-end",
//             marginBottom: "20px",
//           }}
//         >
//           <div>
//             <Title level={3} style={{ margin: 0 }}>
//               Wallet & Coins
//             </Title>
//             <Text type="secondary">Manage wallet system and coin pricing</Text>
//           </div>
//           <Button
//             type="primary"
//             icon={<PlusOutlined />}
//             size="large"
//             onClick={() => {
//               setSelectedPackage(null);
//               setIsModalOpen(true);
//             }}
//             style={{ borderRadius: "8px", height: "45px", fontWeight: "bold" }}
//           >
//             Coin Pricing
//           </Button>
//         </div>

//         <ConfigProvider
//           theme={{ components: { Table: { headerBg: "#fafafa" } } }}
//         >
//           <Table
//             columns={columns}
//             dataSource={dataSource} // Use state here
//             pagination={false}
//             scroll={{ y: 400 }}
//             style={{
//               background: "#fff",
//               borderRadius: "12px",
//               overflow: "hidden",
//               border: "1px solid #f0f0f0",
//             }}
//           />
//         </ConfigProvider>

//         <CoinPricingModal
//           open={isModalOpen}
//           initialValues={selectedPackage}
//           onCancel={() => setIsModalOpen(false)}
//           onFinish={(values: any) => {
//             console.log(values);
//             setIsModalOpen(false);
//           }}
//         />
//       </div>
//     </DashboardLayout>
//   );
// }

// import React from "react";
// import DashboardLayout from "@/src/components/layout/DashboardLayout";
// import WalletStats from "@/src/components/coins/WalletStats";
// import CoinPricingManager from "@/src/components/coins/CoinPricingManager";

// export default function CoinsPage() {
//   return (
//     <DashboardLayout>
//       {/* WalletStats can remain a client or server component depending on its own code */}
//       <WalletStats />

//       {/* The interactive management logic */}
//       <CoinPricingManager />
//     </DashboardLayout>
//   );
// }

import DashboardLayout from "@/src/components/layout/DashboardLayout";
import CoinPricingManager from "@/src/components/coins/CoinPricingManager";
import { CoinPackage, coinPackageService } from "@/src/services/coinService";
import WalletStats from "@/src/components/coins/WalletStats";
import { Suspense } from "react";

export default async function CoinsPage() {
  let initialData: CoinPackage[] = [];
  let stats = null;

  try {
    initialData = await coinPackageService.getAllCoinPackages();
    stats = await coinPackageService.getCoinStats();
    // ✅ new
  } catch (error) {
    console.error("Failed to load data", error);
  }

  return (
    <DashboardLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <WalletStats stats={stats} /> {/* ✅ pass */}
        <CoinPricingManager initialData={initialData} />
      </Suspense>
    </DashboardLayout>
  );
}
