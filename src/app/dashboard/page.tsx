// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React from "react";
// import { Row, Col, Card, Statistic, List, Badge } from "antd";
// import {
//   ClockCircleOutlined,
//   TeamOutlined,
//   BarChartOutlined,
//   UsergroupAddOutlined,
// } from "@ant-design/icons";
// import DashboardLayout from "@/src/components/layout/DashboardLayout";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
// } from "recharts";

// // --- Types ---

// interface ChartData {
//   name: string;
//   revenue: number;
//   auctions: number;
// }

// interface BarData {
//   name: string;
//   users: number;
// }

// // --- Mock Data ---

// const liveAuctionsData = [
//   {
//     id: 1,
//     title: "Iphone 14 Pro Max",
//     price: "SAR 890",
//     time: "5 Minutes",
//     participants: 45,
//   },
//   {
//     id: 2,
//     title: "Macbook Pro",
//     price: "SAR 1200",
//     time: "5 Minutes",
//     participants: 45,
//   },
//   {
//     id: 3,
//     title: "Apple Watch Ultra",
//     price: "SAR 18920",
//     time: "5 Minutes",
//     participants: 45,
//   },
//   {
//     id: 4,
//     title: "Sony WH-1000XM5",
//     price: "SAR 500",
//     time: "2 Minutes",
//     participants: 12,
//   },
//   {
//     id: 5,
//     title: "iPad Air",
//     price: "SAR 2100",
//     time: "10 Minutes",
//     participants: 30,
//   },
// ];

// const topPerformanceData = [
//   {
//     id: 1,
//     title: "Iphone 14 Pro Max",
//     price: "SAR 890",
//     participants: "67 Participants",
//   },
//   {
//     id: 2,
//     title: "Macbook Pro",
//     price: "SAR 890",
//     participants: "54 Participants",
//   },
//   {
//     id: 3,
//     title: "Ipad Pro",
//     price: "SAR 890",
//     participants: "37 Participants",
//   },
//   {
//     id: 4,
//     title: "AirPods Max",
//     price: "SAR 890",
//     participants: "22 Participants",
//   },
// ];

// const lineChartData: ChartData[] = [
//   { name: "Jan", revenue: 5000, auctions: 3200 },
//   { name: "Feb", revenue: 60000, auctions: 4500 },
//   { name: "Mar", revenue: 45000, auctions: 3800 },
//   { name: "Apr", revenue: 20000, auctions: 25000 },
//   { name: "May", revenue: 62000, auctions: 50000 },
//   { name: "Jun", revenue: 58000, auctions: 42000 },
//   { name: "Jul", revenue: 55000, auctions: 40000 },
//   { name: "Aug", revenue: 98000, auctions: 65000 },
// ];

// const barChartData: BarData[] = [
//   { name: "Jan", users: 1400 },
//   { name: "Feb", users: 800 },
//   { name: "Mar", users: 900 },
//   { name: "Apr", users: 250 },
//   { name: "May", users: 1900 },
// ];

// const stats = [
//   {
//     title: "Total Revenue",
//     value: 1200,
//     prefix: "SAR ",
//     icon: <BarChartOutlined />,
//     color: "#f5222d",
//   },

//   {
//     title: "Revenue From Auctions",
//     value: 22025,
//     prefix: "SAR ",
//     icon: <BarChartOutlined />,
//     color: "#52c41a",
//   },
//   {
//     title: "Revenue From Store",
//     value: 31236,
//     prefix: "SAR ",
//     icon: <BarChartOutlined />,
//     color: "#faad14",
//   },
//   {
//     title: "Total Users",
//     value: 710,
//     icon: <UsergroupAddOutlined />,
//     color: "#1890ff",
//   },
// ];

// const CustomTooltip = ({ active, payload, label }: any) => {
//   if (active && payload && payload.length) {
//     return (
//       <Card
//         style={{
//           boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//           borderRadius: "8px",
//           background: "#fff",
//         }}
//         styles={{ body: { padding: "12px" } }}
//       >
//         <p
//           style={{ fontWeight: "bold", marginBottom: "8px", color: "#434343" }}
//         >
//           {label}
//         </p>
//         <p style={{ color: "#1890ff", marginBottom: "4px" }}>
//           Revenue ($) : {payload[0]?.value}
//         </p>
//         <p style={{ color: "#52c41a", marginBottom: "0" }}>
//           Auctions : {payload[1]?.value}
//         </p>
//       </Card>
//     );
//   }
//   return null;
// };

// export default function DashboardPage() {
//   return (
//     <DashboardLayout>
//       <div style={{ padding: "24px" }}>
//         {/* Stats Row */}
//         <Row gutter={[24, 24]} style={{ marginBottom: "32px" }}>
//           {stats.map((stat, index) => (
//             <Col xs={24} sm={12} lg={6} key={index}>
//               <Card
//                 style={{
//                   borderRadius: "12px",
//                   boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
//                   height: "100%",
//                 }}
//                 styles={{
//                   body: {
//                     padding: "24px",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   },
//                 }}
//               >
//                 <div style={{ textAlign: "center", width: "100%" }}>
//                   <Statistic
//                     title={
//                       <div
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           marginBottom: "12px",
//                           color: "#434343",
//                         }}
//                       >
//                         <span
//                           style={{
//                             fontSize: "20px",
//                             marginRight: "10px",
//                             color: "#000",
//                           }}
//                         >
//                           {stat.icon}
//                         </span>
//                         <span style={{ fontSize: "16px", fontWeight: 500 }}>
//                           {stat.title}
//                         </span>
//                       </div>
//                     }
//                     value={stat.value}
//                     prefix={stat.prefix}
//                     valueStyle={{
//                       color: "#000",
//                       fontWeight: "800",
//                       fontSize: "24px",
//                     }}
//                   />
//                 </div>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* Charts Row */}
//         <Row gutter={[24, 24]} style={{ marginBottom: "32px" }}>
//           <Col xs={24} lg={12}>
//             <Card
//               title="Revenue & Auctions"
//               style={{
//                 borderRadius: "12px",
//                 boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
//               }}
//               styles={{
//                 header: {
//                   borderBottom: "none",
//                   padding: "24px 24px 0",
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                 },
//                 body: { padding: "24px" },
//               }}
//             >
//               <div style={{ height: "300px" }}>
//                 {/* <ResponsiveContainer width="100%" height="100%">
//                   <LineChart
//                     data={lineChartData}
//                     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                   >
//                     <CartesianGrid
//                       strokeDasharray="3 3"
//                       vertical={false}
//                       stroke="#e0e0e0"
//                     />
//                     <XAxis
//                       dataKey="name"
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "#8c8c8c" }}
//                       dy={10}
//                     />
//                     <YAxis
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "#8c8c8c" }}
//                       tickFormatter={(value) =>
//                         value >= 1000 ? `${value / 1000}k` : value.toString()
//                       }
//                     />
//                     <Tooltip content={<CustomTooltip />} />
//                     <Line
//                       type="monotone"
//                       dataKey="revenue"
//                       stroke="#1890ff"
//                       strokeWidth={2}
//                       dot={{ r: 4, fill: "#000", strokeWidth: 0 }}
//                       activeDot={{ r: 6 }}
//                     />
//                     <Line
//                       type="monotone"
//                       dataKey="auctions"
//                       stroke="#52c41a"
//                       strokeWidth={2}
//                       dot={false}
//                       hide={true}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer> */}

//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart
//                     data={lineChartData}
//                     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                   >
//                     <CartesianGrid
//                       strokeDasharray="3 3"
//                       vertical={false}
//                       stroke="#e0e0e0"
//                     />
//                     <XAxis
//                       dataKey="name"
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "#8c8c8c" }}
//                       dy={10}
//                     />
//                     <YAxis
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "#8c8c8c" }}
//                       tickFormatter={(value) =>
//                         value >= 1000 ? `${value / 1000}k` : value.toString()
//                       }
//                     />
//                     <Tooltip content={<CustomTooltip />} />

//                     {/* Revenue Line (Blue with Dots) */}
//                     <Line
//                       type="monotone"
//                       dataKey="revenue"
//                       stroke="#1890ff"
//                       strokeWidth={2}
//                       dot={{ r: 4, fill: "#000", strokeWidth: 0 }}
//                       activeDot={{ r: 6 }}
//                     />

//                     {/* Auctions Line (Green - Now Visible) */}
//                     <Line
//                       type="monotone"
//                       dataKey="auctions"
//                       stroke="#52c41a"
//                       strokeWidth={2}
//                       dot={false}
//                       hide={false} // Changed from true to false to show the line
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </Card>
//           </Col>

//           <Col xs={24} lg={12}>
//             <Card
//               title="User Participation"
//               style={{
//                 borderRadius: "12px",
//                 boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
//               }}
//               styles={{
//                 header: {
//                   borderBottom: "none",
//                   padding: "24px 24px 0",
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                 },
//                 body: { padding: "24px" },
//               }}
//             >
//               <div style={{ height: "300px" }}>
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart
//                     data={barChartData}
//                     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                   >
//                     <CartesianGrid
//                       strokeDasharray="3 3"
//                       vertical={false}
//                       stroke="#e0e0e0"
//                     />
//                     <XAxis
//                       dataKey="name"
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "#8c8c8c" }}
//                       dy={10}
//                     />
//                     <YAxis
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "#8c8c8c" }}
//                       tickFormatter={(value) =>
//                         value >= 1000 ? `${value / 1000}k` : value.toString()
//                       }
//                     />
//                     <Tooltip cursor={{ fill: "transparent" }} />
//                     <Bar
//                       dataKey="users"
//                       fill="#00a2ff"
//                       radius={[4, 4, 0, 0]}
//                       barSize={30}
//                     />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </Card>
//           </Col>
//         </Row>

//         {/* Auctions Data Row */}
//         <Row gutter={[24, 24]}>
//           <Col xs={24} lg={12}>
//             <Card
//               title="Live Auctions"
//               style={{
//                 borderRadius: "12px",

//                 boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
//               }}
//               styles={{
//                 header: {
//                   borderBottom: "none",
//                   padding: "24px 24px 0",
//                   fontSize: "20px",
//                   fontWeight: "bold",
//                 },
//                 body: { padding: "0 24px 24px 24px" },
//               }}
//             >
//               <div
//                 style={{
//                   maxHeight: "300px",
//                   overflowY: "auto",
//                   overflowX: "hidden",
//                 }}
//               >
//                 <List
//                   dataSource={liveAuctionsData}
//                   renderItem={(item) => (
//                     <List.Item
//                       style={{
//                         borderBottom: "1px solid #f0f0f0",
//                         padding: "16px 12px",
//                       }}
//                     >
//                       <div
//                         style={{
//                           width: "100%",
//                           display: "flex",
//                           justifyContent: "space-between",
//                           alignItems: "center",
//                         }}
//                       >
//                         <div>
//                           <div
//                             style={{
//                               fontWeight: "bold",
//                               fontSize: "16px",
//                               marginBottom: "4px",
//                             }}
//                           >
//                             {item.title}
//                           </div>
//                           <div style={{ color: "#8c8c8c", fontSize: "14px" }}>
//                             <ClockCircleOutlined
//                               style={{ marginRight: "4px" }}
//                             />{" "}
//                             {item.time}
//                             <TeamOutlined
//                               style={{ marginLeft: "12px", marginRight: "4px" }}
//                             />{" "}
//                             {item.participants}
//                           </div>
//                         </div>
//                         <div style={{ textAlign: "right" }}>
//                           <div
//                             style={{
//                               fontWeight: "bold",
//                               fontSize: "16px",
//                               marginBottom: "8px",
//                             }}
//                           >
//                             {item.price}
//                           </div>
//                           <Badge
//                             count="Live"
//                             style={{
//                               backgroundColor: "#fff",
//                               color: "#000",
//                               border: "1.5px solid #000",
//                               fontWeight: "bold",
//                               padding: "0 10px",
//                             }}
//                           />
//                         </div>
//                       </div>
//                     </List.Item>
//                   )}
//                 />
//               </div>
//             </Card>
//           </Col>

//           <Col xs={24} lg={12}>
//             <Card
//               title="Top Performance Auctions"
//               style={{
//                 borderRadius: "12px",
//                 boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
//               }}
//               styles={{
//                 header: {
//                   borderBottom: "none",
//                   padding: "24px 24px 0",
//                   fontSize: "20px",
//                   fontWeight: "bold",
//                 },
//                 body: { padding: "0 24px 24px 24px" },
//               }}
//             >
//               <div
//                 style={{
//                   maxHeight: "300px",
//                   overflowY: "auto",
//                   overflowX: "hidden",
//                 }}
//               >
//                 <List
//                   dataSource={topPerformanceData}
//                   renderItem={(item) => (
//                     <List.Item
//                       style={{
//                         borderBottom: "1px solid #f0f0f0",
//                         padding: "16px 12px",
//                       }}
//                     >
//                       <div
//                         style={{
//                           width: "100%",
//                           display: "flex",
//                           justifyContent: "space-between",
//                           alignItems: "center",
//                         }}
//                       >
//                         <div>
//                           <div
//                             style={{
//                               fontWeight: "bold",
//                               fontSize: "16px",
//                               marginBottom: "4px",
//                             }}
//                           >
//                             {item.title}
//                           </div>
//                           <div style={{ color: "#8c8c8c", fontSize: "14px" }}>
//                             {item.participants}
//                           </div>
//                         </div>
//                         <div style={{ fontWeight: "bold", fontSize: "16px" }}>
//                           {item.price}
//                         </div>
//                       </div>
//                     </List.Item>
//                   )}
//                 />
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </DashboardLayout>
//   );
// }

// import { Row, Col } from "antd";
// import DashboardLayout from "@/src/components/layout/DashboardLayout";
// import StatsGrid from "@/src/components/dashboard/StatsGrid";
// import RevenueChart from "@/src/components/dashboard/RevenueChart";
// import ParticipationChart from "@/src/components/dashboard/ParticipationChart";
// import LiveAuctions from "@/src/components/dashboard/LiveAuctions";
// import TopPerformance from "@/src/components/dashboard/TopPerformance";

// export default function DashboardPage() {
//   return (
//     <DashboardLayout>
//       <div style={{ padding: "24px" }}>
//         {/* Stats Row */}
//         <StatsGrid />

//         {/* Charts Row */}
//         <Row gutter={[24, 24]} style={{ marginBottom: "32px" }}>
//           <Col xs={24} lg={12}>
//             <RevenueChart />
//           </Col>
//           <Col xs={24} lg={12}>
//             <ParticipationChart />
//           </Col>
//         </Row>

//         {/* Auctions Data Row */}
//         <Row gutter={[24, 24]}>
//           <Col xs={24} lg={12}>
//             <LiveAuctions />
//           </Col>
//           <Col xs={24} lg={12}>
//             <TopPerformance />
//           </Col>
//         </Row>
//       </div>
//     </DashboardLayout>
//   );
// }

import { Row, Col } from "antd";
import DashboardLayout from "@/src/components/layout/DashboardLayout";
import StatsGrid from "@/src/components/dashboard/StatsGrid";
import RevenueChart from "@/src/components/dashboard/RevenueChart";
import ParticipationChart from "@/src/components/dashboard/ParticipationChart";
import LiveAuctions from "@/src/components/dashboard/LiveAuctions";
import TopPerformance from "@/src/components/dashboard/TopPerformance";
import { overviewService } from "@/src/services/overviewService";

export default async function DashboardPage() {
  const [stats, participationData, revenueData, topAuctions] =
    await Promise.all([
      // overviewService.getStats(),
      // overviewService.getUserParticipationYearly(),
      // overviewService.getRevenueAuctionsYearly(),
      // overviewService.getTopAuctions(),
    ]);

  if (!stats || !participationData || !revenueData || !topAuctions) {
    return <div>Failed to load dashboard data</div>;
  }

  return (
    <DashboardLayout>
      <div style={{ padding: "24px" }}>
        {/* Stats Row */}
        <StatsGrid stats={stats} />

        {/* Charts Row */}
        <Row gutter={[24, 24]} style={{ marginBottom: "32px" }}>
          <Col xs={24} lg={12}>
            <RevenueChart data={revenueData.data} />
          </Col>
          <Col xs={24} lg={12}>
            <ParticipationChart data={participationData.data} />
          </Col>
        </Row>

        {/* Auctions Data Row */}
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <LiveAuctions />
          </Col>
          <Col xs={24} lg={12}>
            <TopPerformance topAuctions={topAuctions} />
          </Col>
        </Row>
      </div>
    </DashboardLayout>
  );
}
