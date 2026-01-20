"use client";
import { Row, Col, Card, Statistic } from "antd";
import { BarChartOutlined, UsergroupAddOutlined } from "@ant-design/icons";

const stats = [
  {
    title: "Total Revenue",
    value: 1200,
    prefix: "SAR ",
    icon: <BarChartOutlined />,
    color: "#f5222d",
  },

  {
    title: "Revenue From Auctions",
    value: 22025,
    prefix: "SAR ",
    icon: <BarChartOutlined />,
    color: "#52c41a",
  },
  {
    title: "Revenue From Store",
    value: 31236,
    prefix: "SAR ",
    icon: <BarChartOutlined />,
    color: "#faad14",
  },
  {
    title: "Total Users",
    value: 710,
    icon: <UsergroupAddOutlined />,
    color: "#1890ff",
  },
];

export default function StatsGrid() {
  return (
    <Row gutter={[24, 24]} style={{ marginBottom: "32px" }}>
      {stats.map((stat, index) => (
        <Col xs={24} sm={12} lg={6} key={index}>
          <Card
            style={{
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
              height: "100%",
            }}
            styles={{
              body: {
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <Statistic
              title={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                    color: "#434343",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      marginRight: "10px",
                      color: "#000",
                    }}
                  >
                    {stat.icon}
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: 500 }}>
                    {stat.title}
                  </span>
                </div>
              }
              value={stat.value}
              prefix={stat.prefix}
              valueStyle={{
                color: "#000",
                fontWeight: "800",
                fontSize: "24px",
              }}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
}
