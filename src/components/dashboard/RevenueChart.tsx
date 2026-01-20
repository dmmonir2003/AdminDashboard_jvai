/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Card } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const lineChartData = [
  { name: "Jan", revenue: 5000, auctions: 3200 },
  { name: "Feb", revenue: 60000, auctions: 4500 },
  { name: "Mar", revenue: 45000, auctions: 3800 },
  { name: "Apr", revenue: 20000, auctions: 25000 },
  { name: "May", revenue: 62000, auctions: 50000 },
  { name: "Jun", revenue: 58000, auctions: 42000 },
  { name: "Jul", revenue: 55000, auctions: 40000 },
  { name: "Aug", revenue: 98000, auctions: 65000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <Card
        style={{
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          background: "#fff",
        }}
        styles={{ body: { padding: "12px" } }}
      >
        <p
          style={{ fontWeight: "bold", marginBottom: "8px", color: "#434343" }}
        >
          {label}
        </p>
        <p style={{ color: "#1890ff", marginBottom: "4px" }}>
          Revenue ($) : {payload[0]?.value}
        </p>
        <p style={{ color: "#52c41a", marginBottom: "0" }}>
          Auctions : {payload[1]?.value}
        </p>
      </Card>
    );
  }
  return null;
};

export default function RevenueChart() {
  return (
    <Card
      title="Revenue & Auctions"
      style={{
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
      }}
      styles={{
        header: {
          borderBottom: "none",
          padding: "24px 24px 0",
          fontSize: "18px",
          fontWeight: "bold",
        },
        body: { padding: "24px" },
      }}
    >
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={lineChartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e0e0e0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8c8c8c" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8c8c8c" }}
              tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : v)}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#1890ff"
              strokeWidth={2}
              dot={{ r: 4, fill: "#000", strokeWidth: 0 }}
            />
            <Line
              type="monotone"
              dataKey="auctions"
              stroke="#52c41a"
              strokeWidth={2}
              dot={false}
              hide={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
