/* eslint-disable @typescript-eslint/no-explicit-any */

//

// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState } from "react";
// import {
//   Table,
//   Button,
//   Switch,
//   Typography,
//   ConfigProvider,
//   Space,
//   message,
//   Grid,
//   Card,
//   Row,
//   Col,
// } from "antd";
// import { PlusOutlined, EditOutlined } from "@ant-design/icons";
// import CoinPricingModal from "@/src/components/coins/CoinPricingModal";

// const { Title, Text } = Typography;
// const { useBreakpoint } = Grid;

// export default function CoinPricingManager() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPackage, setSelectedPackage] = useState<any>(null);

//   const screens = useBreakpoint();
//   const isMobile = !screens.md;

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
//     <div style={{ padding: isMobile ? "0" : "0px" }}>
//       {/* Header Section */}
//       <Row
//         gutter={[16, 16]}
//         justify="space-between"
//         align="bottom"
//         style={{ marginBottom: "20px", marginTop: isMobile ? "16px" : "32px" }}
//       >
//         <Col xs={24} sm={16}>
//           <Title level={isMobile ? 4 : 3} style={{ margin: 0 }}>
//             Wallet & Coins
//           </Title>
//           <Text type="secondary">Manage wallet system and coin pricing</Text>
//         </Col>
//         <Col xs={24} sm={8} style={{ textAlign: isMobile ? "left" : "right" }}>
//           <Button
//             type="primary"
//             icon={<PlusOutlined />}
//             size="large"
//             block={isMobile}
//             onClick={() => {
//               setSelectedPackage(null);
//               setIsModalOpen(true);
//             }}
//             style={{ borderRadius: "8px", height: "45px", fontWeight: "bold" }}
//           >
//             Coin Pricing
//           </Button>
//         </Col>
//       </Row>

//       {!isMobile ? (
//         /* DESKTOP VIEW: TABLE */
//         <ConfigProvider
//           theme={{ components: { Table: { headerBg: "#fafafa" } } }}
//         >
//           <Table
//             columns={columns}
//             dataSource={dataSource}
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
//       ) : (
//         /* MOBILE VIEW: CARDS */
//         <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//           {dataSource.map((item) => (
//             <Card
//               key={item.key}
//               style={{
//                 borderRadius: "12px",
//                 border: "none",
//                 boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
//               }}
//               styles={{ body: { padding: "16px" } }}
//             >
//               <Row
//                 justify="space-between"
//                 align="middle"
//                 style={{ marginBottom: "16px" }}
//               >
//                 <Col>
//                   <Text strong style={{ fontSize: "16px", display: "block" }}>
//                     {item.packageName}
//                   </Text>
//                   <Text
//                     type="secondary"
//                     style={{
//                       fontSize: "14px",
//                       fontWeight: 600,
//                       color: "#2ecc71",
//                     }}
//                   >
//                     {item.price}
//                   </Text>
//                 </Col>
//                 <Col>
//                   <Button
//                     icon={<EditOutlined />}
//                     onClick={() => {
//                       setSelectedPackage(item);
//                       setIsModalOpen(true);
//                     }}
//                     style={{ borderRadius: "8px" }}
//                   />
//                 </Col>
//               </Row>

//               <Row justify="space-between" align="middle">
//                 <Col>
//                   <div
//                     style={{
//                       background: item.status === "Active" ? "#2ecc71" : "#000",
//                       color: "#fff",
//                       borderRadius: "6px",
//                       padding: "4px 12px",
//                       fontWeight: 600,
//                       fontSize: "12px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {item.status}
//                   </div>
//                 </Col>
//                 <Col>
//                   <Space>
//                     <Text type="secondary" style={{ fontSize: "12px" }}>
//                       Status
//                     </Text>
//                     <Switch
//                       size="small"
//                       checked={item.status === "Active"}
//                       onChange={(checked) => handleToggleStatus(checked, item)}
//                       style={{
//                         backgroundColor:
//                           item.status === "Active" ? "#2ecc71" : undefined,
//                       }}
//                     />
//                   </Space>
//                 </Col>
//               </Row>
//             </Card>
//           ))}
//         </div>
//       )}

//       <CoinPricingModal
//         open={isModalOpen}
//         initialValues={selectedPackage}
//         onCancel={() => setIsModalOpen(false)}
//         onFinish={(values: any) => {
//           console.log(values);
//           setIsModalOpen(false);
//         }}
//       />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import {
  Table,
  Button,
  Switch,
  Typography,
  ConfigProvider,
  Space,
  message,
  Grid,
  Card,
  Row,
  Col,
} from "antd";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import CoinPricingModal from "./CoinPricingModal";
import { CoinPackage, coinPackageService } from "@/src/services/coinService";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

interface Props {
  initialData: CoinPackage[];
}

export default function CoinPricingManager({ initialData }: Props) {
  const [packages, setPackages] = useState<CoinPackage[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<CoinPackage | null>(
    null,
  );

  const screens = useBreakpoint();
  const isMobile = !screens.md;

  // ================= LOGIC (UNCHANGED) =================
  const refreshPackages = async () => {
    try {
      const data = await coinPackageService.getAllCoinPackages();
      setPackages(data || []);
    } catch {
      message.error("Failed to refresh coin packages");
    }
  };

  const handleAdd = () => {
    setSelectedPackage(null);
    setIsModalOpen(true);
  };

  const handleEdit = (pkg: CoinPackage) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleToggle = async (pkg: CoinPackage) => {
    try {
      await coinPackageService.toggleCoinPackage({
        package_id: pkg.package_id,
        is_active: !pkg.is_active,
      });
      message.success(
        `Package ${pkg.coins} coins is now ${!pkg.is_active ? "active" : "inactive"}`,
      );
      refreshPackages();
    } catch {
      message.error("Failed to update status");
    }
  };

  const handleFormFinish = async (values: {
    coins: number;
    price_sar: number;
  }) => {
    try {
      if (selectedPackage) {
        await coinPackageService.editCoinPackage({
          package_id: selectedPackage.package_id,
          coins: values.coins,
          price_sar: values.price_sar,
        });
        message.success("Package updated");
      } else {
        await coinPackageService.createCoinPackage(values);
        message.success("Package created");
      }
      setIsModalOpen(false);
      refreshPackages();
    } catch {
      message.error("Operation failed");
    }
  };

  // ================= TABLE DESIGN =================
  const columns = [
    {
      title: "Coin Packages",
      dataIndex: "coins",
      render: (coins: number) => `${coins.toLocaleString()} Coins`,
    },
    {
      title: "Price",
      dataIndex: "price_sar",
      render: (price: string) => `SAR ${price}`,
    },
    {
      title: "Status",
      dataIndex: "is_active",
      render: (active: boolean) => (
        <div
          style={{
            background: active ? "#2ecc71" : "#000",
            color: "#fff",
            borderRadius: "6px",
            padding: "4px 12px",
            fontWeight: 600,
            fontSize: 12,
            display: "inline-block",
            minWidth: 70,
            textAlign: "center",
          }}
        >
          {active ? "Active" : "Paused"}
        </div>
      ),
    },
    {
      title: "Action",
      render: (_: any, record: CoinPackage) => (
        <Space>
          <Switch
            checked={record.is_active}
            onChange={() => handleToggle(record)}
            style={{
              backgroundColor: record.is_active ? "#2ecc71" : undefined,
            }}
          />
          <Button
            icon={<EditOutlined />}
            type="text"
            onClick={() => handleEdit(record)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: isMobile ? "0" : "0px" }}>
      {/* HEADER */}
      <Row
        gutter={[16, 16]}
        justify="space-between"
        align="bottom"
        style={{ marginBottom: 20, marginTop: isMobile ? 16 : 32 }}
      >
        <Col xs={24} sm={16}>
          <Title level={isMobile ? 4 : 3} style={{ margin: 0 }}>
            Wallet & Coins
          </Title>
          <Text type="secondary">Manage wallet system and coin pricing</Text>
        </Col>

        <Col xs={24} sm={8} style={{ textAlign: isMobile ? "left" : "right" }}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            block={isMobile}
            onClick={handleAdd}
            style={{ borderRadius: 8, height: 45, fontWeight: "bold" }}
          >
            Coin Pricing
          </Button>
        </Col>
      </Row>

      {/* DESKTOP TABLE */}
      {!isMobile ? (
        <ConfigProvider
          theme={{ components: { Table: { headerBg: "#fafafa" } } }}
        >
          <Table
            columns={columns}
            dataSource={packages}
            rowKey="package_id"
            pagination={{ pageSize: 10 }}
            style={{
              background: "#fff",
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid #f0f0f0",
            }}
          />
        </ConfigProvider>
      ) : (
        /* MOBILE CARDS */
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {packages.map((pkg) => (
            <Card
              key={pkg.package_id}
              style={{
                borderRadius: 12,
                border: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              }}
              styles={{ body: { padding: 16 } }}
            >
              <Row
                justify="space-between"
                align="middle"
                style={{ marginBottom: 16 }}
              >
                <Col>
                  <Text strong style={{ fontSize: 16, display: "block" }}>
                    {pkg.coins.toLocaleString()} Coins
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#2ecc71",
                    }}
                  >
                    SAR {pkg.price_sar}
                  </Text>
                </Col>
                <Col>
                  <Button
                    icon={<EditOutlined />}
                    onClick={() => handleEdit(pkg)}
                    style={{ borderRadius: 8 }}
                  />
                </Col>
              </Row>

              <Row justify="space-between" align="middle">
                <Col>
                  <div
                    style={{
                      background: pkg.is_active ? "#2ecc71" : "#000",
                      color: "#fff",
                      borderRadius: 6,
                      padding: "4px 12px",
                      fontWeight: 600,
                      fontSize: 12,
                    }}
                  >
                    {pkg.is_active ? "Active" : "Paused"}
                  </div>
                </Col>

                <Col>
                  <Space>
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      Status
                    </Text>
                    <Switch
                      size="small"
                      checked={pkg.is_active}
                      onChange={() => handleToggle(pkg)}
                      style={{
                        backgroundColor: pkg.is_active ? "#2ecc71" : undefined,
                      }}
                    />
                  </Space>
                </Col>
              </Row>
            </Card>
          ))}
        </div>
      )}

      <CoinPricingModal
        open={isModalOpen}
        initialValues={selectedPackage}
        onCancel={() => setIsModalOpen(false)}
        onFinish={handleFormFinish}
      />
    </div>
  );
}
