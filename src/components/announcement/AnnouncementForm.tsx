/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useEffect } from "react";
// import { Modal, Form, Input, Select, Row, Col, Upload, Button } from "antd";

// const { TextArea } = Input;
// const { Dragger } = Upload;

// interface Props {
//   open: boolean;
//   initialValues?: any;
//   onCancel: () => void;
//   onFinish: (values: any) => void;
// }

// export default function AnnouncementFormModal({
//   open,
//   initialValues,
//   onCancel,
//   onFinish,
// }: Props) {
//   const [form] = Form.useForm();
//   const isEdit = !!initialValues;

//   useEffect(() => {
//     if (open) {
//       if (initialValues) {
//         form.setFieldsValue(initialValues);
//       } else {
//         form.resetFields();
//         form.setFieldsValue({ audience: "All users" }); // Default value
//       }
//     }
//   }, [open, initialValues, form]);

//   return (
//     <Modal
//       open={open}
//       onCancel={onCancel}
//       footer={null}
//       width={800}
//       centered
//       title={
//         <div
//           style={{
//             fontSize: "20px",
//             fontWeight: "bold",
//             borderBottom: "2px solid #1677ff",
//             display: "inline-block",
//             paddingBottom: "4px",
//           }}
//         >
//           {isEdit ? "Edit Announcement" : "Add Announcement"}
//         </div>
//       }
//     >
//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={onFinish}
//         requiredMark={false}
//         style={{ marginTop: "24px" }}
//       >
//         <Row gutter={24}>
//           <Col span={12}>
//             <Form.Item name="audience" label={<strong>Send to</strong>}>
//               <Select style={inputStyle}>
//                 <Select.Option value="All users">All users</Select.Option>
//                 <Select.Option value="Premium Users">
//                   Premium Users
//                 </Select.Option>
//                 <Select.Option value="Zebu Uddin">Zebu Uddin</Select.Option>
//                 <Select.Option value="Rahim Ullha">Rahim Ullha</Select.Option>
//               </Select>
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="title"
//               label={<strong>Title</strong>}
//               rules={[{ required: true }]}
//             >
//               <Input placeholder="Write here" style={inputStyle} />
//             </Form.Item>
//           </Col>
//         </Row>

//         <Form.Item name="description" label={<strong>Description</strong>}>
//           <TextArea
//             rows={6}
//             placeholder="Write here"
//             style={{ ...inputStyle, height: "auto" }}
//           />
//         </Form.Item>

//         <Form.Item>
//           <Dragger
//             style={{
//               background: "#f9fafb",
//               borderRadius: "12px",
//               border: "2px dashed #e5e7eb",
//             }}
//           >
//             <p className="ant-upload-text" style={{ color: "#4b5563" }}>
//               Drag your file(s) to start uploading
//             </p>
//             <div
//               style={{
//                 margin: "8px 0",
//                 color: "#9ca3af",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "8px",
//               }}
//             >
//               <div
//                 style={{ height: "1px", width: "40px", background: "#d1d5db" }}
//               />
//               OR
//               <div
//                 style={{ height: "1px", width: "40px", background: "#d1d5db" }}
//               />
//             </div>
//             <Button type="primary" style={{ borderRadius: "6px" }}>
//               Browse files
//             </Button>
//           </Dragger>
//         </Form.Item>

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "flex-end",
//             marginTop: "32px",
//           }}
//         >
//           <Button
//             type="primary"
//             htmlType="submit"
//             size="large"
//             style={{
//               padding: "0 60px",
//               height: "50px",
//               borderRadius: "8px",
//               fontWeight: "bold",
//               fontSize: "16px",
//             }}
//           >
//             {isEdit ? "Update" : "Send"}
//           </Button>
//         </div>
//       </Form>
//     </Modal>
//   );
// }

// const inputStyle = {
//   background: "#f3f4f6",
//   border: "none",
//   borderRadius: "8px",
//   height: "45px",
// };

// /* eslint-disable @typescript-eslint/no-explicit-any */
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
//   Button,
//   Avatar,
//   Spin,
// } from "antd";

// const { TextArea } = Input;
// const { Dragger } = Upload;

// interface Props {
//   open: boolean;
//   initialValues?: any;
//   onCancel: () => void;
//   onFinish: (values: any) => void;
// }

// // Larger Dummy Data Set for testing
// const DUMMY_USERS = [
//   { email: "mdmonir@example.com", name: "Md Monir" },
//   { email: "mdzuzu@example.com", name: "Md Zuzu" },
//   { email: "mdrofiq@example.com", name: "Md Rofiq" },
//   { email: "mdshahin@example.com", name: "Md Shahin" },
//   { email: "mdkarim@example.com", name: "Md Karim" },
//   { email: "admin@bitopia.com", name: "Admin User" },
//   { email: "john.doe@test.com", name: "John Doe" },
//   { email: "sarah.smith@web.com", name: "Sarah Smith" },
//   { email: "developer@tech.com", name: "Dev Team" },
//   { email: "support@sodayon.com", name: "Support Sodayon" },
//   { email: "hello@creativepencil.com", name: "Creative Pencil" },
// ];

// export default function AnnouncementFormModal({
//   open,
//   initialValues,
//   onCancel,
//   onFinish,
// }: Props) {
//   const [form] = Form.useForm();
//   const [fetching, setFetching] = useState(false);
//   const [userOptions, setUserOptions] = useState<
//     { label: React.ReactNode; value: string }[]
//   >([]);

//   const audience = Form.useWatch("audience", form);
//   const isEdit = !!initialValues;

//   useEffect(() => {
//     if (open) {
//       if (initialValues) {
//         form.setFieldsValue(initialValues);
//         // Pre-populate options if editing existing users
//         if (initialValues.selected_emails) {
//           const initialOptions = initialValues.selected_emails.map(
//             (email: string) => ({
//               label: email,
//               value: email,
//             }),
//           );
//           setUserOptions(initialOptions);
//         }
//       } else {
//         form.resetFields();
//         form.setFieldsValue({ audience: "All users" });
//       }
//     }
//   }, [open, initialValues, form]);

//   const handleSearch = async (value: string) => {
//     if (!value) {
//       setUserOptions([]);
//       return;
//     }

//     setFetching(true);

//     // Simulate API delay
//     setTimeout(() => {
//       const filtered = DUMMY_USERS.filter(
//         (user) =>
//           user.email.toLowerCase().includes(value.toLowerCase()) ||
//           user.name.toLowerCase().includes(value.toLowerCase()),
//       );

//       const options = filtered.map((user) => ({
//         label: (
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               padding: "4px 0",
//             }}
//           >
//             <Avatar
//               size="small"
//               style={{ backgroundColor: "#1677ff", fontSize: "12px" }}
//             >
//               {user.name[0].toUpperCase()}
//             </Avatar>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 lineHeight: "1.2",
//               }}
//             >
//               <span style={{ fontWeight: 500, fontSize: "14px" }}>
//                 {user.name}
//               </span>
//               <span style={{ fontSize: "12px", color: "#8c8c8c" }}>
//                 {user.email}
//               </span>
//             </div>
//           </div>
//         ),
//         value: user.email,
//       }));

//       setUserOptions(options);
//       setFetching(false);
//     }, 300);
//   };

//   return (
//     <Modal
//       open={open}
//       onCancel={onCancel}
//       footer={null}
//       width={800}
//       centered
//       title={
//         <div
//           style={{
//             fontSize: "20px",
//             fontWeight: "bold",
//             borderBottom: "2px solid #1677ff",
//             display: "inline-block",
//             paddingBottom: "4px",
//           }}
//         >
//           {isEdit ? "Edit Announcement" : "Add Announcement"}
//         </div>
//       }
//     >
//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={onFinish}
//         requiredMark={false}
//         style={{ marginTop: "24px" }}
//       >
//         <Row gutter={24}>
//           <Col span={12}>
//             <Form.Item name="audience" label={<strong>Send to</strong>}>
//               <Select style={inputStyle}>
//                 <Select.Option value="All users">All users</Select.Option>
//                 <Select.Option value="Premium Users">
//                   Premium Users
//                 </Select.Option>
//                 <Select.Option value="Specific Users">
//                   Specific Users
//                 </Select.Option>
//               </Select>
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="title"
//               label={<strong>Title</strong>}
//               rules={[{ required: true, message: "Please enter a title" }]}
//             >
//               <Input placeholder="Write here" style={inputStyle} />
//             </Form.Item>
//           </Col>
//         </Row>

//         {audience === "Specific Users" && (
//           <Form.Item
//             name="selected_emails"
//             label={<strong>Search Users by Name or Email</strong>}
//             rules={[
//               { required: true, message: "Please select at least one user" },
//             ]}
//           >
//             <Select
//               mode="multiple"
//               showSearch
//               placeholder="Type 'md' or 'admin' to test..."
//               filterOption={false}
//               onSearch={handleSearch}
//               notFoundContent={
//                 fetching ? <Spin size="small" /> : "No users found"
//               }
//               options={userOptions}
//               style={{ ...inputStyle, height: "auto", minHeight: "45px" }}
//             />
//           </Form.Item>
//         )}

//         <Form.Item name="description" label={<strong>Description</strong>}>
//           <TextArea
//             rows={6}
//             placeholder="Write here"
//             style={{ ...inputStyle, height: "auto" }}
//           />
//         </Form.Item>

//         <Form.Item>
//           <Dragger
//             style={{
//               background: "#f9fafb",
//               borderRadius: "12px",
//               border: "2px dashed #e5e7eb",
//             }}
//           >
//             <p className="ant-upload-text" style={{ color: "#4b5563" }}>
//               Drag your file(s) to start uploading
//             </p>
//             <div
//               style={{
//                 margin: "8px 0",
//                 color: "#9ca3af",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "8px",
//               }}
//             >
//               <div
//                 style={{ height: "1px", width: "40px", background: "#d1d5db" }}
//               />
//               OR
//               <div
//                 style={{ height: "1px", width: "40px", background: "#d1d5db" }}
//               />
//             </div>
//             <Button type="primary" style={{ borderRadius: "6px" }}>
//               Browse files
//             </Button>
//           </Dragger>
//         </Form.Item>

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "flex-end",
//             marginTop: "32px",
//           }}
//         >
//           <Button
//             type="primary"
//             htmlType="submit"
//             size="large"
//             style={{
//               padding: "0 60px",
//               height: "50px",
//               borderRadius: "8px",
//               fontWeight: "bold",
//               fontSize: "16px",
//             }}
//           >
//             {isEdit ? "Update" : "Send"}
//           </Button>
//         </div>
//       </Form>
//     </Modal>
//   );
// }

// const inputStyle = {
//   background: "#f3f4f6",
//   border: "none",
//   borderRadius: "8px",
//   height: "45px",
// };

// TODO: review

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Row,
  Col,
  Upload,
  Button,
  Avatar,
  Spin,
  App,
  Typography,
} from "antd";
import { announcementService } from "@/src/services/announcementService";

const { TextArea } = Input;
const { Dragger } = Upload;

export default function AnnouncementFormModal({
  open,
  onCancel,
  onSuccess,
}: {
  open: boolean;
  onCancel: () => void;
  onSuccess: () => void;
}) {
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userOptions, setUserOptions] = useState<any[]>([]);
  const [fileList, setFileList] = useState<any[]>([]);

  const sendToValue = Form.useWatch("send_to", form);

  const handleSearch = async (value: string) => {
    if (value.length < 2) return;
    setFetching(true);
    try {
      const users = await announcementService.searchUsers(value);
      setUserOptions(
        users.map((u: any) => ({
          label: (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Avatar size="small" style={{ backgroundColor: "#1677ff" }}>
                {u.name[0]}
              </Avatar>
              <div>
                <div style={{ fontWeight: 500, fontSize: "14px" }}>
                  {u.name}
                </div>
                <div style={{ fontSize: "12px", color: "#8c8c8c" }}>
                  {u.email}
                </div>
              </div>
            </div>
          ),
          value: u.email, // Using email as the value to match user_emails payload
        })),
      );
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setFetching(false);
    }
  };

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description || "");
      formData.append("send_to", values.send_to);

      if (values.send_to === "specific" && values.user_emails) {
        // Appending emails as a comma-separated string for the 'user_emails' key
        formData.append("user_emails", values.user_emails.join(","));
      }

      if (fileList.length > 0) {
        formData.append("image", fileList[0].originFileObj);
      }

      await announcementService.createAnnouncement(formData);
      message.success("Announcement sent successfully!");
      form.resetFields();
      setFileList([]);
      onSuccess();
    } catch (err) {
      message.error(
        "Failed to create announcement. Check if all fields are correct.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      width={700}
      title={<Title level={4}>Create New Announcement</Title>}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ send_to: "all" }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="send_to" label="Send To">
              <Select>
                <Select.Option value="all">All Users</Select.Option>
                <Select.Option value="specific">Specific Users</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="title"
              label="Announcement Title"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter title" />
            </Form.Item>
          </Col>
        </Row>

        {sendToValue === "specific" && (
          <Form.Item
            name="user_emails"
            label="Search and Select Users"
            rules={[{ required: true }]}
          >
            <Select
              mode="multiple"
              showSearch
              filterOption={false}
              onSearch={handleSearch}
              placeholder="Search by name or email"
              notFoundContent={
                fetching ? <Spin size="small" /> : "No users found"
              }
              options={userOptions}
            />
          </Form.Item>
        )}

        <Form.Item name="description" label="Message Details">
          <TextArea rows={4} placeholder="What is this announcement about?" />
        </Form.Item>

        <Form.Item label="Banner Image (Optional)">
          <Dragger
            fileList={fileList}
            beforeUpload={() => false} // Prevent auto-upload
            onChange={({ fileList }) => setFileList(fileList.slice(-1))} // Only keep the latest file
          >
            <p className="ant-upload-text">
              Drag image here or click to browse
            </p>
          </Dragger>
        </Form.Item>

        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <Button onClick={onCancel} style={{ marginRight: "10px" }}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            Send Announcement
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

const { Title } = Typography; // Add this line
