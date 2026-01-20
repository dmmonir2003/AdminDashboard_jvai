// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React from "react";
// import {
//   Modal,
//   Form,
//   Input,
//   Select,
//   Row,
//   Col,
//   Upload,
//   DatePicker,
//   Button,
//   Typography,
//   Divider,
// } from "antd";
// import { InboxOutlined } from "@ant-design/icons";

// const { Title, Text } = Typography;
// const { TextArea } = Input;
// const { Dragger } = Upload;

// interface AuctionFormProps {
//   open: boolean;
//   onCancel: () => void;
//   onFinish: (values: any) => void;
//   initialValues?: any;
//   title?: string;
// }

// export const AuctionFormModal: React.FC<AuctionFormProps> = ({
//   open,
//   onCancel,
//   onFinish,
//   initialValues,
//   title = "Add Auction",
// }) => {
//   const [form] = Form.useForm();

//   // Reset form when initialValues change or modal opens
//   React.useEffect(() => {
//     if (open) {
//       form.setFieldsValue(initialValues || {});
//     }
//   }, [open, initialValues, form]);

//   const handleSubmit = () => {
//     form
//       .validateFields()
//       .then((values) => {
//         onFinish(values);
//         form.resetFields();
//       })
//       .catch((info) => {
//         console.log("Validate Failed:", info);
//       });
//   };

//   return (
//     <Modal
//       open={open}
//       title={null} // Custom title inside
//       onCancel={onCancel}
//       footer={null}
//       width={700}
//       centered
//       bodyStyle={{ padding: "0" }}
//     >
//       <div style={{ padding: "24px" }}>
//         <Title level={3} style={{ textAlign: "center", marginBottom: "24px" }}>
//           {title}
//         </Title>

//         <Form form={form} layout="vertical" onFinish={onFinish}>
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item
//                 label="Product Name"
//                 name="productName"
//                 rules={[{ required: true }]}
//               >
//                 <Input placeholder="Enter product name" />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item
//                 label="Category"
//                 name="category"
//                 rules={[{ required: true }]}
//               >
//                 <Select placeholder="Select category">
//                   <Select.Option value="phone">Phone</Select.Option>
//                   <Select.Option value="laptop">Laptop</Select.Option>
//                   <Select.Option value="car">Car</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//           </Row>

//           <Form.Item label="Product Image" name="image">
//             <Dragger multiple={false} beforeUpload={() => false}>
//               <p className="ant-upload-drag-icon">
//                 <InboxOutlined />
//               </p>
//               <p className="ant-upload-text">
//                 Drag your file(s) to start uploading
//               </p>
//               <Text type="secondary">OR</Text>
//               <br />
//               <Button type="primary" size="small" style={{ marginTop: "8px" }}>
//                 Browse Files
//               </Button>
//             </Dragger>
//           </Form.Item>

//           <Form.Item label="Description" name="description">
//             <TextArea rows={4} placeholder="Enter product description" />
//           </Form.Item>

//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item label="Market Price" name="marketPrice">
//                 <Input prefix="SAR" placeholder="0.00" />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Auction Price" name="auctionPrice">
//                 <Input prefix="SAR" placeholder="0.00" />
//               </Form.Item>
//             </Col>
//           </Row>

//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item label="Status" name="status">
//                 <Select defaultValue="draft">
//                   <Select.Option value="schedule">Schedule</Select.Option>
//                   <Select.Option value="draft">Draft</Select.Option>
//                   <Select.Option value="publish">Publish</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Set Schedule Time & Date" name="scheduleDate">
//                 <DatePicker showTime style={{ width: "100%" }} />
//               </Form.Item>
//             </Col>
//           </Row>

//           <Divider>
//             <Title level={4}>Auction Rules</Title>
//           </Divider>

//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item label="Starting Price" name="startingPrice">
//                 <Input prefix="SAR" />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Entry-fee (Not refundable)" name="entryFee">
//                 <Input prefix="SAR" />
//               </Form.Item>
//             </Col>
//           </Row>

//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item label="Auction Duration" name="duration">
//                 <Input placeholder="e.g. 2h 30m" />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Winning Prize Reset time" name="resetTime">
//                 <Input placeholder="e.g. 5m" />
//               </Form.Item>
//             </Col>
//           </Row>

//           <div style={{ textAlign: "right", marginTop: "24px" }}>
//             <Button
//               type="primary"
//               onClick={handleSubmit}
//               style={{ padding: "0 40px", height: "40px" }}
//             >
//               {initialValues ? "Update Auction" : "Add Auction"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </Modal>
//   );
// };

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Row,
  Col,
  Upload,
  DatePicker,
  Button,
  Typography,
  Divider,
} from "antd";
import { InboxOutlined, ClockCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Dragger } = Upload;

interface AuctionFormProps {
  open: boolean;
  onCancel: () => void;
  onFinish: (values: any) => void;
  initialValues?: any;
  title?: string;
}

export const AuctionFormModal: React.FC<AuctionFormProps> = ({
  open,
  onCancel,
  onFinish,
  initialValues,
  title = "Add Auction",
}) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (open) {
      form.setFieldsValue(initialValues || {});
    }
  }, [open, initialValues, form]);

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        onFinish(values);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      open={open}
      title={null}
      onCancel={onCancel}
      footer={null}
      width={700}
      centered
      bodyStyle={{ padding: "0" }}
    >
      <div style={{ padding: "24px" }}>
        <Title level={3} style={{ textAlign: "center", marginBottom: "24px" }}>
          {title}
        </Title>

        <Form form={form} layout="vertical" onFinish={onFinish}>
          {/* Product Info Section */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Product Name"
                name="productName"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter product name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true }]}
              >
                <Select placeholder="Select category">
                  <Select.Option value="phone">Phone</Select.Option>
                  <Select.Option value="laptop">Laptop</Select.Option>
                  <Select.Option value="car">Car</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Product Image" name="image">
            <Dragger multiple={false} beforeUpload={() => false}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Drag your file(s) to start uploading
              </p>
              <Text type="secondary">OR</Text>
              <br />
              <Button type="primary" size="small" style={{ marginTop: "8px" }}>
                Browse Files
              </Button>
            </Dragger>
          </Form.Item>

          <Form.Item label="Description" name="description">
            <TextArea rows={4} placeholder="Enter product description" />
          </Form.Item>

          {/* Pricing Section */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Market Price" name="marketPrice">
                <Input prefix="SAR" placeholder="0.00" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Auction Price" name="auctionPrice">
                <Input prefix="SAR" placeholder="0.00" />
              </Form.Item>
            </Col>
          </Row>

          {/* Schedule Section - Date kept here */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Status" name="status">
                <Select defaultValue="draft">
                  <Select.Option value="schedule">Schedule</Select.Option>
                  <Select.Option value="draft">Draft</Select.Option>
                  <Select.Option value="publish">Publish</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Set Schedule Time & Date" name="scheduleDate">
                <DatePicker showTime style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>

          <Divider>
            <Title level={4}>Auction Rules</Title>
          </Divider>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Starting Price" name="startingPrice">
                <Input prefix="SAR" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Entry-fee (Not refundable)" name="entryFee">
                <Input prefix="SAR" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              {/* Duration Field: Time-only UI with clock icon */}
              <Form.Item label="Auction Duration" name="duration">
                {/* <TimePicker
                  format="HH:mm:ss"
                  showNow={false}
                  style={{ width: "100%" }}
                  suffixIcon={<ClockCircleOutlined />}
                  placeholder="Select duration"
                /> */}

                <DatePicker
                  showTime
                  style={{ width: "100%" }}
                  suffixIcon={<ClockCircleOutlined />}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Winning Prize Reset time" name="resetTime">
                <Input placeholder="e.g. 5m" />
              </Form.Item>
            </Col>
          </Row>

          <div style={{ textAlign: "right", marginTop: "24px" }}>
            <Button
              type="primary"
              onClick={handleSubmit}
              style={{ padding: "0 40px", height: "40px" }}
            >
              {initialValues ? "Update Auction" : "Add Auction"}
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};
