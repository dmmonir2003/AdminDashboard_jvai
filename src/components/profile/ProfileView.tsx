/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect } from "react";
import {
  Form,
  Input,
  Button,
  // Upload,
  // Avatar,
  Typography,
  Row,
  Col,
  Card,
  message,
} from "antd";
// import { CameraOutlined } from "@ant-design/icons";
import { profileService } from "@/src/services/profileService";
import { authService } from "@/src/services/authService"; // for password change
const { Title, Text } = Typography;

export default function ProfileView() {
  const [profileForm] = Form.useForm();
  const [securityForm] = Form.useForm();

  // Fetch user profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await profileService.getMe();
        profileForm.setFieldsValue({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
        });
      } catch (error) {
        console.error(error);
        message.error("Failed to load profile");
      }
    };
    fetchProfile();
  }, [profileForm]);

  // --- Handle profile update ---
  const handleProfileSave = async (values: any) => {
    try {
      const payload = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
      };

      await profileService.updateProfile(payload);
      message.success("Profile updated successfully ✅");
    } catch (error: any) {
      console.error(error);
      message.error(
        error?.response?.data?.message || "Failed to update profile ❌",
      );
    }
  };

  // --- Handle password change ---
  const handleChangePassword = async (values: any) => {
    try {
      const payload = {
        old_password: values.currentPassword,
        new_password: values.newPassword,
        new_password_confirm: values.retypePassword,
      };

      await authService.changePassword(payload);
      message.success("Password changed successfully ✅");
      securityForm.resetFields();
    } catch (error: any) {
      console.error(error);
      message.error(
        error?.response?.data?.message || "Failed to change password ❌",
      );
    }
  };

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
        {/* <div
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
        </div> */}

        {/* --- Profile First Name / Last Name / Email Section --- */}
        <Form form={profileForm} layout="vertical" onFinish={handleProfileSave}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="first_name"
                label={<strong>First Name</strong>}
                rules={[{ required: true, message: "First name is required" }]}
              >
                <Input style={inputStyle} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="last_name" label={<strong>Last Name</strong>}>
                <Input style={inputStyle} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="email"
                label={<strong>Email</strong>}
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input style={inputStyle} />
              </Form.Item>
            </Col>
          </Row>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="primary" style={saveButtonStyle} htmlType="submit">
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
        <Form
          form={securityForm}
          layout="vertical"
          onFinish={handleChangePassword}
        >
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
                label={<strong>New Password</strong>}
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
                label={<strong>Retype Password</strong>}
                dependencies={["newPassword"]}
                rules={[
                  { required: true, message: "Please confirm password" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Passwords do not match"),
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Retype new password"
                  style={inputStyle}
                />
              </Form.Item>
            </Col>
          </Row>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="primary" style={saveButtonStyle} htmlType="submit">
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

// const cameraIconStyle: React.CSSProperties = {
//   position: "absolute",
//   bottom: 0,
//   right: 5,
//   background: "#fff",
//   borderRadius: "50%",
//   padding: "4px",
//   boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   fontSize: "14px",
// };
