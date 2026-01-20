/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";

interface CategoryFormModalProps {
  open: boolean;
  initialValues?: any; // If present, mode is "Edit"
  onCancel: () => void;
  onFinish: (values: any) => void;
}

export default function CategoryFormModal({
  open,
  initialValues,
  onCancel,
  onFinish,
}: CategoryFormModalProps) {
  const [form] = Form.useForm();
  const isEdit = !!initialValues;

  // Sync form values when the modal opens or initialValues change
  useEffect(() => {
    if (open) {
      if (initialValues) {
        form.setFieldsValue(initialValues);
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
      width={450}
      closeIcon={<div style={{ fontSize: "18px", fontWeight: "bold" }}>×</div>}
    >
      <div style={{ padding: "10px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "24px",
          }}
        >
          {isEdit ? "Edit Category" : "Add Category"}
        </h2>

        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="categoryName"
            label={<strong>Category Name</strong>}
            rules={[{ required: true, message: "Please enter category name" }]}
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
