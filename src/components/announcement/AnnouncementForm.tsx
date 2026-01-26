/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect } from "react";
import { Modal, Form, Input, Select, Row, Col, Upload, Button } from "antd";

const { TextArea } = Input;
const { Dragger } = Upload;

interface Props {
  open: boolean;
  initialValues?: any;
  onCancel: () => void;
  onFinish: (values: any) => void;
}

export default function AnnouncementFormModal({
  open,
  initialValues,
  onCancel,
  onFinish,
}: Props) {
  const [form] = Form.useForm();
  const isEdit = !!initialValues;

  useEffect(() => {
    if (open) {
      if (initialValues) {
        form.setFieldsValue(initialValues);
      } else {
        form.resetFields();
        form.setFieldsValue({ audience: "All users" }); // Default value
      }
    }
  }, [open, initialValues, form]);

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      width={800}
      centered
      title={
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            borderBottom: "2px solid #1677ff",
            display: "inline-block",
            paddingBottom: "4px",
          }}
        >
          {isEdit ? "Edit Announcement" : "Add Announcement"}
        </div>
      }
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
        style={{ marginTop: "24px" }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="audience" label={<strong>Send to</strong>}>
              <Select style={inputStyle}>
                <Select.Option value="All users">All users</Select.Option>
                <Select.Option value="Premium Users">
                  Premium Users
                </Select.Option>
                <Select.Option value="Zebu Uddin">Zebu Uddin</Select.Option>
                <Select.Option value="Rahim Ullha">Rahim Ullha</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="title"
              label={<strong>Title</strong>}
              rules={[{ required: true }]}
            >
              <Input placeholder="Write here" style={inputStyle} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="description" label={<strong>Description</strong>}>
          <TextArea
            rows={6}
            placeholder="Write here"
            style={{ ...inputStyle, height: "auto" }}
          />
        </Form.Item>

        <Form.Item>
          <Dragger
            style={{
              background: "#f9fafb",
              borderRadius: "12px",
              border: "2px dashed #e5e7eb",
            }}
          >
            <p className="ant-upload-text" style={{ color: "#4b5563" }}>
              Drag your file(s) to start uploading
            </p>
            <div
              style={{
                margin: "8px 0",
                color: "#9ca3af",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <div
                style={{ height: "1px", width: "40px", background: "#d1d5db" }}
              />
              OR
              <div
                style={{ height: "1px", width: "40px", background: "#d1d5db" }}
              />
            </div>
            <Button type="primary" style={{ borderRadius: "6px" }}>
              Browse files
            </Button>
          </Dragger>
        </Form.Item>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "32px",
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{
              padding: "0 60px",
              height: "50px",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            {isEdit ? "Update" : "Send"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

const inputStyle = {
  background: "#f3f4f6",
  border: "none",
  borderRadius: "8px",
  height: "45px",
};
