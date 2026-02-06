/* eslint-disable @typescript-eslint/no-explicit-any */

// "use client";

// import React, { useEffect } from "react";
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
//   Grid, // 1. Added Grid for breakpoints
// } from "antd";
// import { InboxOutlined, ClockCircleOutlined } from "@ant-design/icons";
// import { categoryService } from "@/src/services/categoryService";

// const { Title, Text } = Typography;
// const { TextArea } = Input;
// const { Dragger } = Upload;
// const { useBreakpoint } = Grid; // 2. Hook to detect screen size

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
//   const screens = useBreakpoint();

//   useEffect(() => {
//     const fetchCategoriesData = async () => {
//       try {
//         const initialCategory = await categoryService.getCategories("auction");
//         console.log(initialCategory.results);
//       } catch (err) {
//         console.error("Failed to load category data on server", err);
//       }
//     };
//     fetchCategoriesData();
//   }, [open]);

//   // Determine if we are on mobile (less than MD breakpoint)
//   const isMobile = !screens.md;

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
//       title={null}
//       onCancel={onCancel}
//       footer={null}
//       width={isMobile ? "95%" : 700} // 3. Responsive width
//       centered
//       bodyStyle={{ padding: "0" }}
//     >
//       <div style={{ padding: isMobile ? "16px" : "24px" }}>
//         <Title
//           level={isMobile ? 4 : 3}
//           style={{ textAlign: "center", marginBottom: "24px" }}
//         >
//           {title}
//         </Title>

//         <Form form={form} layout="vertical" onFinish={onFinish}>
//           {/* Product Info Section */}
//           <Row gutter={16}>
//             <Col xs={24} md={12}>
//               {" "}
//               {/* 4. Stack on mobile (24), side-by-side on desktop (12) */}
//               <Form.Item
//                 label="Product Name"
//                 name="productName"
//                 rules={[{ required: true }]}
//               >
//                 <Input placeholder="Enter product name" />
//               </Form.Item>
//             </Col>
//             <Col xs={24} md={12}>
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
//               {!isMobile && <Text type="secondary">OR</Text>}
//               <br />
//               <Button type="primary" size="small" style={{ marginTop: "8px" }}>
//                 Browse Files
//               </Button>
//             </Dragger>
//           </Form.Item>

//           <Form.Item label="Description" name="description">
//             <TextArea rows={4} placeholder="Enter product description" />
//           </Form.Item>

//           {/* Pricing Section */}
//           <Row gutter={16}>
//             <Col xs={24} md={12}>
//               <Form.Item label="Market Price" name="marketPrice">
//                 <Input prefix="SAR" placeholder="0.00" />
//               </Form.Item>
//             </Col>
//             <Col xs={24} md={12}>
//               <Form.Item label="Auction Price" name="auctionPrice">
//                 <Input prefix="SAR" placeholder="0.00" />
//               </Form.Item>
//             </Col>
//           </Row>

//           {/* Schedule Section */}
//           <Row gutter={16}>
//             <Col xs={24} md={12}>
//               <Form.Item label="Status" name="status">
//                 <Select defaultValue="draft">
//                   <Select.Option value="schedule">Schedule</Select.Option>
//                   <Select.Option value="draft">Draft</Select.Option>
//                   <Select.Option value="publish">Publish</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col xs={24} md={12}>
//               <Form.Item label="Set Schedule Time & Date" name="scheduleDate">
//                 <DatePicker showTime style={{ width: "100%" }} />
//               </Form.Item>
//             </Col>
//           </Row>

//           <Divider>
//             <Title level={isMobile ? 5 : 4}>Auction Rules</Title>
//           </Divider>

//           <Row gutter={16}>
//             {/* <Col xs={24} md={12}>
//               <Form.Item label="Entry-fee (Not refundable)" name="startingPrice">
//                 <Input prefix="SAR" />
//               </Form.Item>
//             </Col> */}
//             <Col xs={24} md={12}>
//               <Form.Item label="Auction Duration" name="duration">
//                 <DatePicker
//                   showTime
//                   style={{ width: "100%" }}
//                   suffixIcon={<ClockCircleOutlined />}
//                 />
//               </Form.Item>
//             </Col>
//             <Col xs={24} md={12}>
//               <Form.Item label="Entry-fee (Not refundable)" name="entryFee">
//                 <Input prefix="SAR" />
//               </Form.Item>
//             </Col>
//           </Row>

//           <Row gutter={16}>
//             <Col xs={24} md={12}>
//               <Form.Item label="Winning Prize Reset time" name="resetTime">
//                 <Input placeholder="e.g. 5m" />
//               </Form.Item>
//             </Col>
//           </Row>

//           <div
//             style={{
//               textAlign: isMobile ? "center" : "right",
//               marginTop: "24px",
//             }}
//           >
//             <Button
//               type="primary"
//               onClick={handleSubmit}
//               block={isMobile} // 5. Full-width button on mobile for better UX
//               style={{ padding: isMobile ? "0" : "0 40px", height: "40px" }}
//             >
//               {initialValues ? "Update Auction" : "Add Auction"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </Modal>
//   );
// };

// "use client";

// import React, { useEffect, useState } from "react";
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
//   Grid,
// } from "antd";
// import { InboxOutlined, ClockCircleOutlined } from "@ant-design/icons";
// import { categoryService, Category } from "@/src/services/categoryService";
// import dayjs from "dayjs";

// const { Title } = Typography;
// const { TextArea } = Input;
// const { Dragger } = Upload;
// const { useBreakpoint } = Grid;

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
//   const screens = useBreakpoint();
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loadingCategories, setLoadingCategories] = useState(false);

//   const statusValue = Form.useWatch("status", form);

//   useEffect(() => {
//     if (open) {
//       const fetchCategoriesData = async () => {
//         setLoadingCategories(true);
//         try {
//           const res = await categoryService.getCategories("auction");
//           setCategories(res.results);
//         } catch (err) {
//           console.error("Failed to load category data", err);
//         } finally {
//           setLoadingCategories(false);
//         }
//       };
//       fetchCategoriesData();

//       if (initialValues) {
//         form.setFieldsValue({
//           ...initialValues,
//           // Initialize date/time fields as dayjs objects
//           scheduled_time: initialValues.scheduled_time
//             ? dayjs(initialValues.scheduled_time)
//             : null,
//           auction_duration: initialValues.auction_duration
//             ? dayjs(initialValues.auction_duration, "HH:mm:ss")
//             : null,
//           winning_claim_window: initialValues.winning_claim_window
//             ? dayjs(initialValues.winning_claim_window, "HH:mm:ss")
//             : null,
//         });
//       } else {
//         form.resetFields();
//       }
//     }
//   }, [open, initialValues, form]);

//   const isMobile = !screens.md;

//   const handleSubmit = () => {
//     form.validateFields().then((values) => {
//       onFinish(values);
//     });
//   };

//   return (
//     <Modal
//       open={open}
//       title={null}
//       onCancel={onCancel}
//       footer={null}
//       width={isMobile ? "95%" : 700}
//       centered
//     >
//       <div style={{ padding: isMobile ? "16px" : "24px" }}>
//         <Title
//           level={isMobile ? 4 : 3}
//           style={{ textAlign: "center", marginBottom: "24px" }}
//         >
//           {title}
//         </Title>

//         <Form form={form} layout="vertical">
//           {/* Product Info */}
//           <Row gutter={16}>
//             <Col xs={24} md={12}>
//               <Form.Item
//                 label="Product Name"
//                 name="product_name"
//                 rules={[{ required: true }]}
//               >
//                 <Input placeholder="Enter product name" />
//               </Form.Item>
//             </Col>
//             <Col xs={24} md={12}>
//               <Form.Item
//                 label="Category"
//                 name="category"
//                 rules={[{ required: true }]}
//               >
//                 <Select
//                   placeholder="Select category"
//                   loading={loadingCategories}
//                 >
//                   {categories.map((cat) => (
//                     <Select.Option
//                       key={cat.category_id}
//                       value={cat.category_id}
//                     >
//                       {cat.name}
//                     </Select.Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//             </Col>
//           </Row>

//           <Form.Item label="Product Image" name="product_image">
//             <Dragger multiple={false} beforeUpload={() => false} maxCount={1}>
//               <p className="ant-upload-drag-icon">
//                 <InboxOutlined />
//               </p>
//               <p className="ant-upload-text">Click or drag image to upload</p>
//             </Dragger>
//           </Form.Item>

//           <Form.Item label="Description" name="description">
//             <TextArea rows={4} placeholder="Enter product description" />
//           </Form.Item>

//           {/* Pricing */}
//           <Row gutter={16}>
//             <Col xs={24} md={12}>
//               <Form.Item label="Market Price" name="market_price">
//                 <Input prefix="SAR" placeholder="0.00" />
//               </Form.Item>
//             </Col>
//             <Col xs={24} md={12}>
//               <Form.Item label="Auction Price" name="auction_price">
//                 <Input prefix="SAR" placeholder="0.00" />
//               </Form.Item>
//             </Col>
//           </Row>

//           {/* Status and Conditional Schedule */}
//           <Row gutter={16}>
//             <Col xs={24} md={statusValue === "schedule" ? 12 : 24}>
//               <Form.Item label="Status" name="status" initialValue="draft">
//                 <Select>
//                   <Select.Option value="schedule">Schedule</Select.Option>
//                   <Select.Option value="draft">Draft</Select.Option>
//                   <Select.Option value="publish">Publish</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>

//             {statusValue === "schedule" && (
//               <Col xs={24} md={12}>
//                 <Form.Item
//                   label="Scheduled Date & Time"
//                   name="scheduled_time"
//                   rules={[{ required: true, message: "Please select a date" }]}
//                 >
//                   <DatePicker
//                     showTime
//                     style={{ width: "100%" }}
//                     format="YYYY-MM-DD HH:mm:ss"
//                   />
//                 </Form.Item>
//               </Col>
//             )}
//           </Row>

//           <Divider>
//             <Title level={5}>Auction Rules</Title>
//           </Divider>

//           {/* Duration and Fee */}
//           {/* <Row gutter={16}>
//             <Col xs={24} md={12}>
//               <Form.Item label="Auction Duration" name="auction_duration">
//                 <DatePicker
//                   picker="time"
//                   style={{ width: "100%" }}
//                   format="HH:mm:ss"
//                   suffixIcon={<ClockCircleOutlined />}
//                 />
//               </Form.Item>
//             </Col>
//             <Col xs={24} md={12}>
//               <Form.Item label="Entry Fee (Coins)" name="entry_fee_coins">
//                 <Input placeholder="e.g. 5" />
//               </Form.Item>
//             </Col>
//           </Row> */}

//           {/* Prize Reset Time (Now a Time Picker) */}
//           {/* <Row gutter={16}>
//             <Col xs={24} md={12}>
//               <Form.Item
//                 label="Winning Prize Reset time"
//                 name="winning_claim_window"
//               >
//                 <DatePicker
//                   picker="time"
//                   style={{ width: "100%" }}
//                   format="HH:mm:ss"
//                   placeholder="Select time window"
//                   suffixIcon={<ClockCircleOutlined />}
//                 />
//               </Form.Item>
//             </Col>
//           </Row> */}

//           <Row gutter={16}>
//             <Col xs={24} md={12}>
//               {/* CHANGED: Removed picker="time", added showTime */}
//               <Form.Item label="Auction Duration" name="auction_duration">
//                 <DatePicker
//                   showTime
//                   style={{ width: "100%" }}
//                   format="YYYY-MM-DD HH:mm:ss"
//                   suffixIcon={<ClockCircleOutlined />}
//                 />
//               </Form.Item>
//             </Col>
//             <Col xs={24} md={12}>
//               <Form.Item label="Entry Fee (Coins)" name="entry_fee_coins">
//                 <Input placeholder="e.g. 5" />
//               </Form.Item>
//             </Col>
//           </Row>

//           <Row gutter={16}>
//             <Col xs={24} md={12}>
//               {/* CHANGED: Removed picker="time", added showTime */}
//               <Form.Item
//                 label="Winning Prize Reset time"
//                 name="winning_claim_window"
//               >
//                 <DatePicker
//                   showTime
//                   style={{ width: "100%" }}
//                   format="YYYY-MM-DD HH:mm:ss"
//                   placeholder="Select Date and Time"
//                   suffixIcon={<ClockCircleOutlined />}
//                 />
//               </Form.Item>
//             </Col>
//           </Row>

//           <Button
//             type="primary"
//             onClick={handleSubmit}
//             block
//             size="large"
//             style={{ marginTop: "12px" }}
//           >
//             {initialValues ? "Update Auction" : "Add Auction"}
//           </Button>
//         </Form>
//       </div>
//     </Modal>
//   );
// };

"use client";

import React, { useEffect, useState } from "react";
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
  Grid,
} from "antd";
import { InboxOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { categoryService, Category } from "@/src/services/categoryService";
import dayjs from "dayjs";

const { Title } = Typography;
const { TextArea } = Input;
const { Dragger } = Upload;
const { useBreakpoint } = Grid;

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
  const screens = useBreakpoint();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);

  const statusValue = Form.useWatch("status", form);

  useEffect(() => {
    if (open) {
      const fetchCategoriesData = async () => {
        setLoadingCategories(true);
        try {
          const res = await categoryService.getCategories("auction");
          setCategories(res.results);
        } catch (err) {
          console.error("Failed to load category data", err);
        } finally {
          setLoadingCategories(false);
        }
      };
      fetchCategoriesData();

      if (initialValues) {
        form.setFieldsValue({
          ...initialValues,
          scheduled_time: initialValues.scheduled_time
            ? dayjs(initialValues.scheduled_time)
            : null,
          auction_duration: initialValues.auction_duration || "00:00:00",
          winning_claim_window:
            initialValues.winning_claim_window || "02:00:00",
        });
      } else {
        form.resetFields();
      }
    }
  }, [open, initialValues, form]);

  const isMobile = !screens.md;

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onFinish(values);
    });
  };

  return (
    <Modal
      open={open}
      title={null}
      onCancel={onCancel}
      footer={null}
      width={isMobile ? "95%" : 700}
      centered
    >
      <div style={{ padding: isMobile ? "16px" : "24px" }}>
        <Title
          level={isMobile ? 4 : 3}
          style={{ textAlign: "center", marginBottom: "24px" }}
        >
          {title}
        </Title>

        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Product Name"
                name="product_name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter product name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select category"
                  loading={loadingCategories}
                >
                  {categories.map((cat) => (
                    <Select.Option
                      key={cat.category_id}
                      value={cat.category_id}
                    >
                      {cat.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          {/* UPDATED: Multiple Image Upload */}
          <Form.Item label="Product Images" name="product_image">
            <Dragger
              multiple={true}
              beforeUpload={() => false}
              listType="picture"
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag multiple images to upload
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item label="Description" name="description">
            <TextArea rows={4} placeholder="Enter product description" />
          </Form.Item>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item label="Market Price" name="market_price">
                <Input prefix="SAR" placeholder="0.00" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Auction Price" name="auction_price">
                <Input prefix="SAR" placeholder="0.00" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={statusValue === "schedule" ? 12 : 24}>
              <Form.Item label="Status" name="status" initialValue="draft">
                <Select>
                  <Select.Option value="schedule">Schedule</Select.Option>
                  <Select.Option value="draft">Draft</Select.Option>
                  <Select.Option value="publish">Publish</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            {statusValue === "schedule" && (
              <Col xs={24} md={12}>
                <Form.Item
                  label="Scheduled Date & Time"
                  name="scheduled_time"
                  rules={[{ required: true, message: "Please select a date" }]}
                >
                  <DatePicker
                    showTime
                    style={{ width: "100%" }}
                    format="YYYY-MM-DD HH:mm:ss"
                  />
                </Form.Item>
              </Col>
            )}
          </Row>

          <Divider>
            <Title level={5}>Auction Rules</Title>
          </Divider>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Auction Duration (HH:mm:ss)"
                name="auction_duration"
                rules={[
                  { required: true },
                  {
                    pattern: /^\d+:[0-5][0-9]:[0-5][0-9]$/,
                    message: "Use format HH:mm:ss",
                  },
                ]}
              >
                <Input
                  placeholder="e.g. 320:05:00"
                  suffix={<ClockCircleOutlined />}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Entry Fee (Coins)" name="entry_fee_coins">
                <Input placeholder="e.g. 5" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Winning Prize Reset time (HH:mm:ss)"
                name="winning_claim_window"
                rules={[
                  { required: true },
                  {
                    pattern: /^\d+:[0-5][0-9]:[0-5][0-9]$/,
                    message: "Use format HH:mm:ss",
                  },
                ]}
              >
                <Input
                  placeholder="e.g. 02:00:00"
                  suffix={<ClockCircleOutlined />}
                />
              </Form.Item>
            </Col>
          </Row>

          <Button
            type="primary"
            onClick={handleSubmit}
            block
            size="large"
            style={{ marginTop: "12px" }}
          >
            {initialValues ? "Update Auction" : "Add Auction"}
          </Button>
        </Form>
      </div>
    </Modal>
  );
};
