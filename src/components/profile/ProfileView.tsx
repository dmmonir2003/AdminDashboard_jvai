"use client";

import React from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  Avatar,
  Typography,
  Row,
  Col,
  Card,
} from "antd";
import { CameraOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function ProfileView() {
  const [profileForm] = Form.useForm();
  const [securityForm] = Form.useForm();

  return (
    <div>
      <Card
        bordered={false}
        style={{
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        {/* --- Profile Photo Section --- */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <Upload showUploadList={false} listType="picture-circle">
            <div style={{ position: "relative" }}>
              <Avatar
                size={100}
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              />
              <div style={cameraIconStyle}>
                <CameraOutlined />
              </div>
            </div>
          </Upload>
          <div>
            <Title level={4} style={{ margin: 0 }}>
              Profile Photo
            </Title>
            <Text type="secondary">
              Upload a new photo or change your existing one
            </Text>
          </div>
        </div>

        {/* --- Profile Name & Email Section --- */}
        <Form
          form={profileForm}
          layout="vertical"
          initialValues={{ name: "Chefven", email: "chefven@example.com" }}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item name="name" label={<strong>Profile name</strong>}>
                <Input style={inputStyle} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="email" label={<strong>Email</strong>}>
                <Input style={inputStyle} />
              </Form.Item>
            </Col>
          </Row>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="primary" style={saveButtonStyle}>
              Save
            </Button>
          </div>
        </Form>

        <div style={{ margin: "40px 0" }}>
          <Title level={4} style={{ margin: 0 }}>
            Security
          </Title>
          <Text type="secondary">
            Keep your account secure by updating your password & enabling extra
            security.
          </Text>
        </div>

        {/* --- Security Section --- */}
        <Form form={securityForm} layout="vertical">
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="currentPassword"
                label={<strong>Current Password</strong>}
              >
                <Input.Password
                  placeholder="Enter current password"
                  style={inputStyle}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="newPassword"
                label={<strong>New password</strong>}
              >
                <Input.Password
                  placeholder="Enter new password"
                  style={inputStyle}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="retypePassword"
                label={<strong>Current Password</strong>}
              >
                <Input.Password
                  placeholder="Retype new password"
                  style={inputStyle}
                />
              </Form.Item>
            </Col>
          </Row>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="primary" style={saveButtonStyle}>
              Save
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}

// --- Styles ---
const inputStyle = {
  height: "45px",
  borderRadius: "8px",
  background: "#fcfcfc",
};

const saveButtonStyle = {
  background: "#00aeef",
  border: "none",
  height: "45px",
  padding: "0 40px",
  borderRadius: "8px",
  fontWeight: 600,
};

const cameraIconStyle: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  right: 5,
  background: "#fff",
  borderRadius: "50%",
  padding: "4px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
};
