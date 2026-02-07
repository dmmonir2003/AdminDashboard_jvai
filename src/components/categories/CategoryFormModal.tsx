/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect } from "react";
import { Modal, Form, Input, Button, Select, Row, Col } from "antd";

export default function CategoryFormModal({
  open,
  initialValues,
  onCancel,
  onFinish,
  loading,
}: any) {
  const [form] = Form.useForm();
  const isEdit = !!initialValues;

  useEffect(() => {
    if (open) {
      if (initialValues) {
        form.setFieldsValue({
          name: initialValues.name,
          category_for: initialValues.category_for,
        });
      } else {
        form.resetFields();
      }
    }
  }, [open, initialValues, form]);

  return (
    <Modal
      open={open}
      title={null}
      onCancel={onCancel}
      footer={null}
      centered
      width={500}
      closeIcon={<div>×</div>}
    >
      <div style={{ padding: "10px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          {isEdit ? "Edit Category" : "Add Category"}
        </h2>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label={<strong>Category Name</strong>}
                rules={[{ required: true }]}
              >
                <Input
                  placeholder="e.g. Electronics"
                  style={{
                    background: "#eeeeee",
                    border: "none",
                    borderRadius: "8px",
                    height: "45px",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="category_for"
                label={<strong>Category for</strong>}
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select category type"
                  style={{ height: "45px" }}
                >
                  <Select.Option value="physical">Physical</Select.Option>
                  <Select.Option value="digital">Digital</Select.Option>
                  <Select.Option value="auction">Auction</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{
                padding: "0 30px",
                borderRadius: "8px",
                height: "40px",
                fontWeight: "bold",
              }}
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
