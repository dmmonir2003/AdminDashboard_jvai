/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect } from "react";
import { Modal, Form, Input, Button, Row, Col } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

interface CoinPricingModalProps {
  open: boolean;
  initialValues?: any;
  onCancel: () => void;
  onFinish: (values: any) => void;
}

export default function CoinPricingModal({
  open,
  initialValues,
  onCancel,
  onFinish,
}: CoinPricingModalProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (open) {
    }
  }, [open, initialValues, form]);

  return (
    <Modal
      open={open}
      title={null}
      onCancel={onCancel}
      footer={null}
      centered
      width={600}
      closeIcon={<div style={{ fontSize: "20px", fontWeight: "bold" }}>×</div>}
    >
      <div style={{ padding: "10px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
            fontWeight: 600,
          }}
        >
          Coin Pricing
        </h2>

        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="packageName"
                label={<strong>Coin Packages</strong>}
              >
                <Input placeholder="e.g. 100 Coin" style={inputStyle} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="price" label={<strong>Price</strong>}>
                <Input placeholder="e.g. 100" style={inputStyle} />
              </Form.Item>
            </Col>
          </Row>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "30px",
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              icon={<PlusCircleOutlined />}
              style={{
                borderRadius: "8px",
                height: "45px",
                padding: "0 30px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              Save Pricing
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}

const inputStyle = {
  background: "#f0f0f0",
  border: "none",
  borderRadius: "8px",
  height: "45px",
};
