"use client";

import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import DashboardLayout from "@/src/components/layout/DashboardLayout";

const stats = [
  {
    title: "Total Users",
    value: 1234,
    icon: <UserOutlined />,
    color: "#1890ff",
  },
  {
    title: "Total Orders",
    value: 567,
    icon: <ShoppingCartOutlined />,
    color: "#52c41a",
  },
  {
    title: "Revenue",
    value: 89120,
    prefix: "$",
    icon: <DollarOutlined />,
    color: "#faad14",
  },
  {
    title: "Growth Rate",
    value: 25,
    suffix: "%",
    icon: <LineChartOutlined />,
    color: "#f5222d",
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <h1 style={{ marginBottom: "24px" }}>Dashboard</h1>

        <Row gutter={[16, 16]} style={{ marginBottom: "32px" }}>
          {stats.map((stat, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card
                style={{
                  borderLeft: `4px solid ${stat.color}`,
                }}
              >
                <Row justify="space-between" align="middle">
                  <Col>
                    <Statistic
                      title={stat.title}
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </Col>
                  <Col style={{ fontSize: "32px", color: stat.color }}>
                    {stat.icon}
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <Card title="Recent Activity">
              <p>Activity chart will go here</p>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card title="Top Performers">
              <p>Top performers list will go here</p>
            </Card>
          </Col>
        </Row>
      </div>
    </DashboardLayout>
  );
}
