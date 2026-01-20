/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Row,
  Col,
  Checkbox,
  Upload,
  Button,
  DatePicker,
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

interface ProductFormModalProps {
  open: boolean;
  initialValues?: any; // If provided, the form acts in "Edit" mode
  onCancel: () => void;
  onFinish: (values: any) => void;
}

export default function ProductFormModal({
  open,
  initialValues,
  onCancel,
  onFinish,
}: ProductFormModalProps) {
  const [form] = Form.useForm();

  // Watch the product type to switch layouts dynamically
  const productType = Form.useWatch("productType", form);

  // Update form when initialValues change (for Edit mode)
  useEffect(() => {
    if (open) {
      if (initialValues) {
        form.setFieldsValue(initialValues);
      } else {
        form.resetFields();
        form.setFieldsValue({ productType: "Physical" }); // Default
      }
    }
  }, [open, initialValues, form]);

  const isEdit = !!initialValues;

  return (
    <Modal
      open={open}
      title={null} // We render a custom title inside to match the image
      onCancel={onCancel}
      footer={null}
      width={700}
      centered
      closeIcon={<div style={{ fontSize: "20px", fontWeight: "bold" }}>×</div>}
    >
      <div style={{ padding: "10px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "28px",
          }}
        >
          {isEdit ? "Edit Product" : "Add Product"}
        </h2>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          <Row gutter={24}>
            {/* Common Field: Product Name */}
            <Col span={14}>
              <Form.Item
                name="name"
                label={<strong>Product Name</strong>}
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter product name" style={inputStyle} />
              </Form.Item>
            </Col>

            {/* Common Field: Product Type */}
            <Col span={10}>
              <Form.Item
                name="productType"
                label={<strong>Product Type</strong>}
                rules={[{ required: true }]}
              >
                <Select style={inputStyle}>
                  <Select.Option value="Physical">Physical</Select.Option>
                  <Select.Option value="Digital">Digital</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            {/* --- PHYSICAL PRODUCT FIELDS --- */}
            {productType === "Physical" && (
              <>
                <Col span={24}>
                  <Form.Item
                    name="description"
                    label={<strong>Description</strong>}
                  >
                    <TextArea rows={4} style={inputStyle} />
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item name="category" label={<strong>Category</strong>}>
                    <Select placeholder="Select category" style={inputStyle}>
                      <Select.Option value="Phone">Phone</Select.Option>
                      <Select.Option value="Accessories">
                        Accessories
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item
                    name="price"
                    label={<strong>Product Price</strong>}
                  >
                    <Input placeholder="Price" style={inputStyle} />
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <Checkbox /> <strong>Size :</strong>
                  </div>
                  <Form.Item name="size">
                    <Input style={inputStyle} />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label={<strong>Product Image</strong>}>
                    <Upload listType="picture-card" maxCount={3}>
                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Add</div>
                      </div>
                    </Upload>
                  </Form.Item>
                </Col>

                <Col span={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <Checkbox /> <strong>Color :</strong>
                  </div>
                  <Form.Item name="color">
                    <Input style={inputStyle} />
                  </Form.Item>
                </Col>

                <Col span={6}>
                  <Form.Item name="discount" label={<strong>Discount</strong>}>
                    <Input style={inputStyle} />
                  </Form.Item>
                </Col>
              </>
            )}

            {/* --- DIGITAL PRODUCT FIELDS --- */}
            {productType === "Digital" && (
              <>
                <Col span={12}>
                  <Form.Item name="category" label={<strong>Category</strong>}>
                    <Select style={inputStyle}>
                      <Select.Option value="Gift card">Gift card</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="region" label={<strong>Region</strong>}>
                    <Select placeholder="Select Region" style={inputStyle}>
                      <Select.Option value="Global">Global</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="brand"
                    label={<strong>Gift Card Brand</strong>}
                  >
                    <Input
                      placeholder="e.g., Amazon, Netflix"
                      style={inputStyle}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="price" label={<strong>Price</strong>}>
                    <Input placeholder="50" style={inputStyle} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label={<strong>Upload Code</strong>}>
                    <Upload.Dragger
                      style={{ background: "#f9f9f9", borderRadius: "8px" }}
                    >
                      <p className="ant-upload-drag-icon">
                        <UploadOutlined />
                      </p>
                      <p>Click to upload CSV or TXT file</p>
                    </Upload.Dragger>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="expiry"
                    label={<strong>Card Expiry Date</strong>}
                  >
                    <DatePicker
                      style={{ ...inputStyle, width: "100%" }}
                      format="MM/DD/YY"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label={<strong>Product Image</strong>}>
                    <Upload listType="picture-card" maxCount={3}>
                      <div>
                        <PlusOutlined />
                      </div>
                    </Upload>
                  </Form.Item>
                </Col>
              </>
            )}
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
              size="large"
              style={{
                padding: "0 40px",
                borderRadius: "8px",
                fontWeight: "bold",
                height: "45px",
              }}
            >
              {isEdit ? "Update Product" : "Save Product"}
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}

const inputStyle = {
  background: "#eeeeee",
  border: "none",
  borderRadius: "8px",
  height: "40px",
};
