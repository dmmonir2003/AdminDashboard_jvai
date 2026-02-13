/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useEffect } from "react";
// import { Modal, Form, Input, Button, Row, Col } from "antd";
// import { PlusCircleOutlined } from "@ant-design/icons";

// interface CoinPricingModalProps {
//   open: boolean;
//   initialValues?: any;
//   onCancel: () => void;
//   onFinish: (values: any) => void;
// }

// export default function CoinPricingModal({
//   open,
//   initialValues,
//   onCancel,
//   onFinish,
// }: CoinPricingModalProps) {
//   const [form] = Form.useForm();

//   useEffect(() => {
//     if (open) {
//     }
//   }, [open, initialValues, form]);

//   return (
//     <Modal
//       open={open}
//       title={null}
//       onCancel={onCancel}
//       footer={null}
//       centered
//       width={600}
//       closeIcon={<div style={{ fontSize: "20px", fontWeight: "bold" }}>×</div>}
//     >
//       <div style={{ padding: "10px" }}>
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "40px",
//             fontSize: "32px",
//             fontWeight: 600,
//           }}
//         >
//           Coin Pricing
//         </h2>

//         <Form form={form} layout="vertical" onFinish={onFinish}>
//           <Row gutter={24}>
//             <Col span={12}>
//               <Form.Item
//                 name="packageName"
//                 label={<strong>Coin Packages</strong>}
//               >
//                 <Input placeholder="e.g. 100 Coin" style={inputStyle} />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item name="price" label={<strong>Price</strong>}>
//                 <Input placeholder="e.g. 100" style={inputStyle} />
//               </Form.Item>
//             </Col>
//           </Row>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               marginTop: "30px",
//             }}
//           >
//             <Button
//               type="primary"
//               htmlType="submit"
//               icon={<PlusCircleOutlined />}
//               style={{
//                 borderRadius: "8px",
//                 height: "45px",
//                 padding: "0 30px",
//                 fontWeight: "bold",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               Save Pricing
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </Modal>
//   );
// }

// const inputStyle = {
//   background: "#f0f0f0",
//   border: "none",
//   borderRadius: "8px",
//   height: "45px",
// };

"use client";

import React, { useEffect } from "react";
import { Modal, Form, Input, Button, Row, Col } from "antd";

interface Props {
  open: boolean;
  initialValues?: any;
  onCancel: () => void;
  onFinish: (values: { coins: number; price_sar: number }) => void;
}

export default function CoinPricingModal({
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
        form.setFieldsValue({
          coins: initialValues.coins,
          price_sar: Number(initialValues.price_sar), // convert string → number
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
      footer={null}
      onCancel={onCancel}
      centered
      width={520}
      closeIcon={<div style={{ fontSize: 24 }}>×</div>}
    >
      <div style={{ padding: "20px 10px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "32px", fontSize: 28 }}>
          {isEdit ? "Edit Coin Package" : "Add New Coin Package"}
        </h2>

        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="coins"
                label={<strong>Number of Coins</strong>}
                rules={[
                  { required: true, message: "Please enter coin amount" },
                ]}
              >
                <Input
                  placeholder="e.g. 500"
                  type="number"
                  style={{
                    height: 45,
                    borderRadius: 8,
                    background: "#f5f5f5",
                    border: "none",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="price_sar"
                label={<strong>Price (SAR)</strong>}
                rules={[{ required: true, message: "Please enter price" }]}
              >
                <Input
                  placeholder="e.g. 49.99"
                  type="number"
                  step="0.01"
                  style={{
                    height: 45,
                    borderRadius: 8,
                    background: "#f5f5f5",
                    border: "none",
                  }}
                />
              </Form.Item>
            </Col>
          </Row>

          <div style={{ textAlign: "right", marginTop: 32 }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{ height: 45, borderRadius: 8, padding: "0 40px" }}
            >
              {isEdit ? "Update Package" : "Create Package"}
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
