/* eslint-disable react-hooks/exhaustive-deps */
// "use client";

// import React, { useEffect } from "react";
// import {
//   Modal,
//   Form,
//   Input,
//   Select,
//   Row,
//   Col,
//   Checkbox,
//   Upload,
//   Button,
//   DatePicker,
// } from "antd";
// import { PlusOutlined, UploadOutlined } from "@ant-design/icons";

// const { TextArea } = Input;

// interface ProductFormModalProps {
//   open: boolean;
//   initialValues?: any; // If provided, the form acts in "Edit" mode
//   onCancel: () => void;
//   onFinish: (values: any) => void;
// }

// export default function ProductFormModal({
//   open,
//   initialValues,
//   onCancel,
//   onFinish,
// }: ProductFormModalProps) {
//   const [form] = Form.useForm();

//   // Watch the product type to switch layouts dynamically
//   const productType = Form.useWatch("productType", form);

//   // Update form when initialValues change (for Edit mode)
//   useEffect(() => {
//     if (open) {
//       if (initialValues) {
//         form.setFieldsValue(initialValues);
//       } else {
//         form.resetFields();
//         form.setFieldsValue({ productType: "Physical" }); // Default
//       }
//     }
//   }, [open, initialValues, form]);

//   const isEdit = !!initialValues;

//   return (
//     <Modal
//       open={open}
//       title={null} // We render a custom title inside to match the image
//       onCancel={onCancel}
//       footer={null}
//       width={700}
//       centered
//       closeIcon={<div style={{ fontSize: "20px", fontWeight: "bold" }}>×</div>}
//     >
//       <div style={{ padding: "10px" }}>
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "30px",
//             fontSize: "28px",
//           }}
//         >
//           {isEdit ? "Edit Product" : "Add Product"}
//         </h2>

//         <Form
//           form={form}
//           layout="vertical"
//           onFinish={onFinish}
//           requiredMark={false}
//         >
//           <Row gutter={24}>
//             {/* Common Field: Product Name */}
//             <Col span={14}>
//               <Form.Item
//                 name="name"
//                 label={<strong>Product Name</strong>}
//                 rules={[{ required: true }]}
//               >
//                 <Input placeholder="Enter product name" style={inputStyle} />
//               </Form.Item>
//             </Col>

//             {/* Common Field: Product Type */}
//             <Col span={10}>
//               <Form.Item
//                 name="productType"
//                 label={<strong>Product Type</strong>}
//                 rules={[{ required: true }]}
//               >
//                 <Select style={inputStyle}>
//                   <Select.Option value="Physical">Physical</Select.Option>
//                   <Select.Option value="Digital">Digital</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>

//             {/* --- PHYSICAL PRODUCT FIELDS --- */}
//             {productType === "Physical" && (
//               <>
//                 <Col span={24}>
//                   <Form.Item
//                     name="description"
//                     label={<strong>Description</strong>}
//                   >
//                     <TextArea rows={4} style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={8}>
//                   <Form.Item name="category" label={<strong>Category</strong>}>
//                     <Select placeholder="Select category" style={inputStyle}>
//                       <Select.Option value="Phone">Phone</Select.Option>
//                       <Select.Option value="Accessories">
//                         Accessories
//                       </Select.Option>
//                     </Select>
//                   </Form.Item>
//                 </Col>

//                 <Col span={8}>
//                   <Form.Item
//                     name="price"
//                     label={<strong>Product Price</strong>}
//                   >
//                     <Input placeholder="Price" style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={8}>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     <Checkbox /> <strong>Size :</strong>
//                   </div>
//                   <Form.Item name="size">
//                     <Input style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item label={<strong>Product Image</strong>}>
//                     <Upload listType="picture-card" maxCount={3}>
//                       <div>
//                         <PlusOutlined />
//                         <div style={{ marginTop: 8 }}>Add</div>
//                       </div>
//                     </Upload>
//                   </Form.Item>
//                 </Col>

//                 <Col span={6}>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     <Checkbox /> <strong>Color :</strong>
//                   </div>
//                   <Form.Item name="color">
//                     <Input style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={6}>
//                   <Form.Item name="discount" label={<strong>Discount</strong>}>
//                     <Input style={inputStyle} />
//                   </Form.Item>
//                 </Col>
//               </>
//             )}

//             {/* --- DIGITAL PRODUCT FIELDS --- */}
//             {productType === "Digital" && (
//               <>
//                 <Col span={12}>
//                   <Form.Item name="category" label={<strong>Category</strong>}>
//                     <Select style={inputStyle}>
//                       <Select.Option value="Gift card">Gift card</Select.Option>
//                     </Select>
//                   </Form.Item>
//                 </Col>
//                 <Col span={12}>
//                   <Form.Item name="region" label={<strong>Region</strong>}>
//                     <Select placeholder="Select Region" style={inputStyle}>
//                       <Select.Option value="Global">Global</Select.Option>
//                     </Select>
//                   </Form.Item>
//                 </Col>
//                 <Col span={12}>
//                   <Form.Item
//                     name="brand"
//                     label={<strong>Gift Card Brand</strong>}
//                   >
//                     <Input
//                       placeholder="e.g., Amazon, Netflix"
//                       style={inputStyle}
//                     />
//                   </Form.Item>
//                 </Col>
//                 <Col span={12}>
//                   <Form.Item name="price" label={<strong>Price</strong>}>
//                     <Input placeholder="50" style={inputStyle} />
//                   </Form.Item>
//                 </Col>
//                 <Col span={24}>
//                   <Form.Item label={<strong>Upload Code</strong>}>
//                     <Upload.Dragger
//                       style={{ background: "#f9f9f9", borderRadius: "8px" }}
//                     >
//                       <p className="ant-upload-drag-icon">
//                         <UploadOutlined />
//                       </p>
//                       <p>Click to upload CSV or TXT file</p>
//                     </Upload.Dragger>
//                   </Form.Item>
//                 </Col>
//                 <Col span={12}>
//                   <Form.Item
//                     name="expiry"
//                     label={<strong>Card Expiry Date</strong>}
//                   >
//                     <DatePicker
//                       style={{ ...inputStyle, width: "100%" }}
//                       format="MM/DD/YY"
//                     />
//                   </Form.Item>
//                 </Col>
//                 <Col span={12}>
//                   <Form.Item label={<strong>Product Image</strong>}>
//                     <Upload listType="picture-card" maxCount={3}>
//                       <div>
//                         <PlusOutlined />
//                       </div>
//                     </Upload>
//                   </Form.Item>
//                 </Col>
//               </>
//             )}
//           </Row>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               marginTop: "20px",
//             }}
//           >
//             <Button
//               type="primary"
//               htmlType="submit"
//               size="large"
//               style={{
//                 padding: "0 40px",
//                 borderRadius: "8px",
//                 fontWeight: "bold",
//                 height: "45px",
//               }}
//             >
//               {isEdit ? "Update Product" : "Save Product"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </Modal>
//   );
// }

// const inputStyle = {
//   background: "#eeeeee",
//   border: "none",
//   borderRadius: "8px",
//   height: "40px",
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
//   Checkbox,
//   Upload,
//   Button,
//   DatePicker,
//   App,
// } from "antd";
// import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
// import dayjs from "dayjs";
// import { productService } from "@/src/services/productService";
// import { categoryService } from "@/src/services/categoryService";

// const { TextArea } = Input;

// interface ProductFormModalProps {
//   open: boolean;
//   initialValues?: any;
//   onCancel: () => void;
//   onSuccess: () => void;
//   messageApi?: any;
// }

// export default function ProductFormModal({
//   open,
//   initialValues,
//   onCancel,
//   onSuccess,
//   messageApi,
// }: ProductFormModalProps) {
//   const [form] = Form.useForm();
//   const { message: localMessage } = App.useApp();
//   const msg = messageApi || localMessage;

//   const productType = Form.useWatch("productType", form);

//   const [categories, setCategories] = useState<any[]>([]);
//   const [loadingCategories, setLoadingCategories] = useState(false);

//   const [imageFileList, setImageFileList] = useState<any[]>([]);
//   const [codeFileList, setCodeFileList] = useState<any[]>([]);

//   // Fetch categories when product type changes
//   useEffect(() => {
//     if (!productType) return;

//     const fetchCategoriesData = async () => {
//       setLoadingCategories(true);
//       try {
//         const res = await categoryService.getCategories(
//           productType.toLowerCase(),
//         );
//         setCategories(res.results || []);
//       } catch (err) {
//         console.error("Failed to load categories", err);
//         msg.error("Failed to load categories");
//       } finally {
//         setLoadingCategories(false);
//       }
//     };

//     fetchCategoriesData();
//   }, [productType, msg]);

//   // Reset category when type changes
//   useEffect(() => {
//     form.setFieldsValue({ category: undefined });
//   }, [productType, form]);

//   // Prefill form – store category ID, but we'll find name for display
//   useEffect(() => {
//     if (!open) return;

//     if (initialValues) {
//       // Edit mode
//       const formValues = {
//         name: initialValues.name,
//         productType: initialValues.type,
//         category: Number(initialValues.categoryId), // keep ID
//         description: initialValues.description || "",
//         price: initialValues.rawPrice || "",
//         discount: initialValues.discount_percentage?.toString() || "",
//         size: initialValues.size || "",
//         color: initialValues.color || "",
//         region: initialValues.region || "",
//         brand: initialValues.brand || "",
//         expiry: initialValues.card_expiry_date
//           ? dayjs(initialValues.card_expiry_date)
//           : null,
//       };
//       form.setFieldsValue(formValues);

//       // Images preview
//       if (initialValues.images?.length) {
//         setImageFileList(
//           initialValues.images.map((img: any, idx: number) => ({
//             uid: `old-${idx}`,
//             name: `image-${idx}.jpg`,
//             status: "done" as const,
//             url: img.image_url,
//           })),
//         );
//       } else {
//         setImageFileList([]);
//       }

//       // Code file preview
//       if (initialValues.code_file_url) {
//         setCodeFileList([
//           {
//             uid: "old-code",
//             name: "code_file",
//             status: "done" as const,
//             url: initialValues.code_file_url,
//           },
//         ]);
//       } else {
//         setCodeFileList([]);
//       }
//     } else {
//       // Add mode → clean start
//       form.resetFields();
//       form.setFieldsValue({ productType: "Physical" });
//       setImageFileList([]);
//       setCodeFileList([]);
//     }
//   }, [open, initialValues, form]);

//   const isEdit = !!initialValues;

//   const handleSubmit = async () => {
//     try {
//       // Debug logs – you can remove later
//       console.log("Form values before submit:", form.getFieldsValue());
//       console.log("Category value:", form.getFieldValue("category"));

//       const values = await form.validateFields();

//       const formData = new FormData();

//       formData.append("name", (values.name || "").trim());
//       formData.append("product_type", values.productType.toLowerCase());

//       // Category – must be valid number
//       const categoryId = Number(values.category);
//       if (isNaN(categoryId) || categoryId <= 0) {
//         form.setFields([
//           {
//             name: "category",
//             errors: ["Please select a category"],
//           },
//         ]);
//         msg.error("Please select a category");
//         return;
//       }
//       formData.append("category", categoryId.toString());

//       formData.append("description", (values.description || "").trim());
//       formData.append("price", values.price || "");
//       formData.append("discount_percentage", values.discount || "0");

//       if (values.productType === "Physical") {
//         if (values.size) formData.append("size", values.size.trim());
//         if (values.color) formData.append("color", values.color.trim());
//       }

//       if (values.region) formData.append("region", values.region.trim());
//       if (values.brand) formData.append("brand", values.brand.trim());

//       if (values.productType === "Digital" && values.expiry) {
//         formData.append("card_expiry_date", values.expiry.format("YYYY-MM-DD"));
//       }

//       // Only new images
//       const newImages = imageFileList.filter((f) => f.originFileObj);
//       newImages.forEach((file) =>
//         formData.append("images", file.originFileObj),
//       );

//       // Only new code file
//       const newCode = codeFileList.find((f) => f.originFileObj);
//       if (newCode) formData.append("code_file", newCode.originFileObj);

//       if (isEdit) {
//         await productService.updateProduct(initialValues.key, formData);
//         msg.success("Product updated successfully");
//       } else {
//         await productService.createProduct(formData);
//         msg.success("Product created successfully");
//       }

//       onSuccess();
//       onCancel();
//     } catch (err: any) {
//       console.error("Submit failed:", err);
//       if (err.errorFields) {
//         const errMsg =
//           err.errorFields[0]?.errors?.[0] || "Please fill required fields";
//         msg.error(errMsg);
//         form.scrollToField(err.errorFields[0].name);
//       } else {
//         msg.error(err.response?.data?.message || "Failed to save product");
//       }
//     }
//   };

//   return (
//     <Modal
//       open={open}
//       title={null}
//       onCancel={onCancel}
//       footer={null}
//       width={700}
//       centered
//       closeIcon={<div style={{ fontSize: "20px", fontWeight: "bold" }}>×</div>}
//     >
//       <div style={{ padding: "10px" }}>
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "30px",
//             fontSize: "28px",
//           }}
//         >
//           {isEdit ? "Edit Product" : "Add Product"}
//         </h2>

//         <Form form={form} layout="vertical" requiredMark={false}>
//           <Row gutter={24}>
//             <Col span={14}>
//               <Form.Item
//                 name="name"
//                 label={<strong>Product Name</strong>}
//                 rules={[{ required: true }]}
//               >
//                 <Input placeholder="Enter product name" style={inputStyle} />
//               </Form.Item>
//             </Col>

//             <Col span={10}>
//               <Form.Item
//                 name="productType"
//                 label={<strong>Product Type</strong>}
//                 rules={[{ required: true }]}
//               >
//                 <Select style={inputStyle}>
//                   <Select.Option value="Physical">Physical</Select.Option>
//                   <Select.Option value="Digital">Digital</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>

//             <Col span={24}>
//               <Form.Item
//                 name="description"
//                 label={<strong>Description</strong>}
//               >
//                 <TextArea rows={4} style={inputStyle} />
//               </Form.Item>
//             </Col>

//             {productType && (
//               <Col span={productType === "Physical" ? 8 : 12}>
//                 <Form.Item
//                   name="category"
//                   label={<strong>Category</strong>}
//                   rules={[{ required: true, message: "Category is required" }]}
//                 >
//                   <Select
//                     placeholder="Select category"
//                     style={inputStyle}
//                     loading={loadingCategories}
//                     disabled={loadingCategories}
//                     onChange={(val) => {
//                       console.log(
//                         "Category selected → ID:",
//                         val,
//                         "type:",
//                         typeof val,
//                       );
//                       form.setFieldsValue({ category: val });
//                     }}
//                   >
//                     {categories.map((cat) => (
//                       <Select.Option
//                         key={cat.category_id}
//                         value={cat.category_id}
//                       >
//                         {cat.name}
//                       </Select.Option>
//                     ))}
//                     {/* {categories.map((cat: any) => (
//                       <Select.Option key={cat.id} value={Number(cat.id)}>
//                         {cat.name}
//                       </Select.Option>
//                     ))} */}
//                   </Select>
//                 </Form.Item>
//               </Col>
//             )}

//             <Col span={productType === "Physical" ? 8 : 12}>
//               <Form.Item
//                 name="price"
//                 label={<strong>Product Price</strong>}
//                 rules={[{ required: true }]}
//               >
//                 <Input placeholder="Price" style={inputStyle} />
//               </Form.Item>
//             </Col>

//             <Col span={productType === "Physical" ? 8 : 12}>
//               <Form.Item name="discount" label={<strong>Discount (%)</strong>}>
//                 <Input placeholder="0" style={inputStyle} />
//               </Form.Item>
//             </Col>

//             {productType === "Physical" && (
//               <>
//                 <Col span={8}>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     <Checkbox defaultChecked /> <strong>Size :</strong>
//                   </div>
//                   <Form.Item name="size">
//                     <Input style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={8}>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     <Checkbox defaultChecked /> <strong>Color :</strong>
//                   </div>
//                   <Form.Item name="color">
//                     <Input style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item name="brand" label={<strong>Brand</strong>}>
//                     <Input placeholder="e.g. Honda" style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item name="region" label={<strong>Region</strong>}>
//                     <Input placeholder="e.g. KSA" style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={24}>
//                   <Form.Item label={<strong>Product Images (max 3)</strong>}>
//                     <Upload
//                       listType="picture-card"
//                       fileList={imageFileList}
//                       onChange={({ fileList }) => setImageFileList(fileList)}
//                       beforeUpload={() => false}
//                       maxCount={3}
//                     >
//                       <div>
//                         <PlusOutlined />
//                         <div style={{ marginTop: 8 }}>Upload</div>
//                       </div>
//                     </Upload>
//                   </Form.Item>
//                 </Col>
//               </>
//             )}

//             {productType === "Digital" && (
//               <>
//                 <Col span={12}>
//                   <Form.Item name="region" label={<strong>Region</strong>}>
//                     <Select style={inputStyle}>
//                       <Select.Option value="Global">Global</Select.Option>
//                     </Select>
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item
//                     name="brand"
//                     label={<strong>Gift Card Brand</strong>}
//                   >
//                     <Input placeholder="e.g. Netflix" style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={24}>
//                   <Form.Item label={<strong>Upload Code (CSV/TXT)</strong>}>
//                     <Upload.Dragger
//                       fileList={codeFileList}
//                       onChange={({ fileList }) => setCodeFileList(fileList)}
//                       beforeUpload={() => false}
//                       maxCount={1}
//                     >
//                       <p className="ant-upload-drag-icon">
//                         <UploadOutlined />
//                       </p>
//                       <p>Click or drag file</p>
//                     </Upload.Dragger>
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item
//                     name="expiry"
//                     label={<strong>Card Expiry Date</strong>}
//                   >
//                     <DatePicker
//                       style={{ ...inputStyle, width: "100%" }}
//                       format="YYYY-MM-DD"
//                     />
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item label={<strong>Product Image</strong>}>
//                     <Upload
//                       listType="picture-card"
//                       fileList={imageFileList}
//                       onChange={({ fileList }) => setImageFileList(fileList)}
//                       beforeUpload={() => false}
//                       maxCount={3}
//                     >
//                       <div>
//                         <PlusOutlined />
//                         <div style={{ marginTop: 8 }}>Upload</div>
//                       </div>
//                     </Upload>
//                   </Form.Item>
//                 </Col>
//               </>
//             )}
//           </Row>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               marginTop: "20px",
//             }}
//           >
//             <Button
//               type="primary"
//               size="large"
//               style={{
//                 padding: "0 40px",
//                 borderRadius: "8px",
//                 fontWeight: "bold",
//                 height: "45px",
//               }}
//               onClick={handleSubmit}
//             >
//               {isEdit ? "Update Product" : "Save Product"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </Modal>
//   );
// }

// const inputStyle = {
//   background: "#eeeeee",
//   border: "none",
//   borderRadius: "8px",
//   height: "40px",
// };

/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   Modal,
//   Form,
//   Input,
//   Select,
//   Row,
//   Col,
//   Checkbox,
//   Upload,
//   Button,
//   DatePicker,
//   App,
// } from "antd";
// import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
// import dayjs from "dayjs";
// import { productService } from "@/src/services/productService";
// import { categoryService } from "@/src/services/categoryService";

// const { TextArea } = Input;

// interface ProductFormModalProps {
//   open: boolean;
//   initialValues?: any;
//   onCancel: () => void;
//   onSuccess: () => void;
//   messageApi?: any;
// }

// export default function ProductFormModal({
//   open,
//   initialValues,
//   onCancel,
//   onSuccess,
//   messageApi,
// }: ProductFormModalProps) {
//   const [form] = Form.useForm();
//   const { message: localMessage } = App.useApp();
//   const msg = messageApi || localMessage;

//   const productType = Form.useWatch("productType", form);

//   const [categories, setCategories] = useState<any[]>([]);
//   const [loadingCategories, setLoadingCategories] = useState(false);

//   const [imageFileList, setImageFileList] = useState<any[]>([]);
//   const [codeFileList, setCodeFileList] = useState<any[]>([]);

//   // Fetch categories when product type changes
//   useEffect(() => {
//     if (!productType) return;

//     const fetchCategoriesData = async () => {
//       setLoadingCategories(true);
//       try {
//         const res = await categoryService.getCategories(
//           productType.toLowerCase(),
//         );
//         setCategories(res.results || []);
//       } catch (err) {
//         console.error("Failed to load categories", err);
//         msg.error("Failed to load categories");
//       } finally {
//         setLoadingCategories(false);
//       }
//     };

//     fetchCategoriesData();
//   }, [productType, msg]);

//   // Reset category when type changes
//   useEffect(() => {
//     form.setFieldsValue({ category: undefined });
//   }, [productType, form]);

//   // Prefill form – store category ID, but we'll find name for display
//   useEffect(() => {
//     if (!open) return;

//     if (initialValues) {
//       // Edit mode
//       const formValues = {
//         name: initialValues.name,
//         productType: initialValues.type,
//         category: Number(initialValues.categoryId), // keep ID
//         description: initialValues.description || "",
//         price: initialValues.rawPrice || "",
//         discount: initialValues.discount_percentage?.toString() || "",
//         size: initialValues.size || "",
//         color: initialValues.color || "",
//         region: initialValues.region || "",
//         brand: initialValues.brand || "",
//         expiry: initialValues.card_expiry_date
//           ? dayjs(initialValues.card_expiry_date)
//           : null,
//       };
//       form.setFieldsValue(formValues);

//       // Images preview
//       if (initialValues.images?.length) {
//         setImageFileList(
//           initialValues.images.map((img: any, idx: number) => ({
//             uid: `old-${idx}`,
//             name: `image-${idx}.jpg`,
//             status: "done" as const,
//             url: img.image_url,
//           })),
//         );
//       } else {
//         setImageFileList([]);
//       }

//       // Code file preview
//       if (initialValues.code_file_url) {
//         setCodeFileList([
//           {
//             uid: "old-code",
//             name: "code_file",
//             status: "done" as const,
//             url: initialValues.code_file_url,
//           },
//         ]);
//       } else {
//         setCodeFileList([]);
//       }
//     } else {
//       // Add mode → clean start
//       form.resetFields();
//       form.setFieldsValue({ productType: "Physical" });
//       setImageFileList([]);
//       setCodeFileList([]);
//     }
//   }, [open, initialValues, form]);

//   const isEdit = !!initialValues;

//   const handleSubmit = async () => {
//     try {
//       // Debug logs – you can remove later
//       console.log("Form values before submit:", form.getFieldsValue());
//       console.log("Category value:", form.getFieldValue("category"));

//       const values = await form.validateFields();

//       const formData = new FormData();

//       formData.append("name", (values.name || "").trim());
//       formData.append("product_type", values.productType.toLowerCase());

//       // Category – must be valid number
//       const categoryId = Number(values.category);
//       if (isNaN(categoryId) || categoryId <= 0) {
//         form.setFields([
//           {
//             name: "category",
//             errors: ["Please select a category"],
//           },
//         ]);
//         msg.error("Please select a category");
//         return;
//       }
//       formData.append("category", categoryId.toString());

//       formData.append("description", (values.description || "").trim());
//       formData.append("price", values.price || "");
//       formData.append("discount_percentage", values.discount || "0");

//       if (values.productType === "Physical") {
//         if (values.size) formData.append("size", values.size.trim());
//         if (values.color) formData.append("color", values.color.trim());
//       }

//       if (values.region) formData.append("region", values.region.trim());
//       if (values.brand) formData.append("brand", values.brand.trim());

//       if (values.productType === "Digital" && values.expiry) {
//         formData.append("card_expiry_date", values.expiry.format("YYYY-MM-DD"));
//       }

//       // ===== FIX: Handle images for edit and create =====
//       // if (isEdit) {
//       //   // For edit: check if user selected new images
//       //   const newImages = imageFileList.filter((f) => f.originFileObj);
//       //   if (newImages.length > 0) {
//       //     // User added new images - replace them
//       //     newImages.forEach((file) =>
//       //       formData.append("images", file.originFileObj),
//       //     );
//       //   }
//       // } else {
//       //   // For create: send all selected images
//       //   imageFileList.forEach((file) => {
//       //     if (file.originFileObj) {
//       //       formData.append("images", file.originFileObj);
//       //     }
//       //   });
//       // }

//       // ✅ FIXED IMAGE UPLOAD (IMPORTANT)
//       imageFileList.forEach((file) => {
//         if (file.originFileObj) {
//           formData.append("images", file.originFileObj);
//           // যদি backend images[] চায় → এটা ব্যবহার করো:
//           // formData.append("images[]", file.originFileObj);
//         }
//       });

//       // ===== FIX: Handle code file for edit and create =====
//       const newCode = codeFileList.find((f) => f.originFileObj);
//       if (newCode) {
//         formData.append("code_file", newCode.originFileObj);
//       }

//       if (isEdit) {
//         await productService.updateProduct(initialValues.key, formData);
//         msg.success("Product updated successfully");
//       } else {
//         await productService.createProduct(formData);
//         msg.success("Product created successfully");
//       }

//       onSuccess();
//       onCancel();
//     } catch (err: any) {
//       console.error("Submit failed:", err);
//       if (err.errorFields) {
//         const errMsg =
//           err.errorFields[0]?.errors?.[0] || "Please fill required fields";
//         msg.error(errMsg);
//         form.scrollToField(err.errorFields[0].name);
//       } else {
//         msg.error(err.response?.data?.message || "Failed to save product");
//       }
//     }
//   };

//   return (
//     <Modal
//       open={open}
//       title={null}
//       onCancel={onCancel}
//       footer={null}
//       width={700}
//       centered
//       closeIcon={<div style={{ fontSize: "20px", fontWeight: "bold" }}>×</div>}
//     >
//       <div style={{ padding: "10px" }}>
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "30px",
//             fontSize: "28px",
//           }}
//         >
//           {isEdit ? "Edit Product" : "Add Product"}
//         </h2>

//         <Form form={form} layout="vertical" requiredMark={false}>
//           <Row gutter={24}>
//             <Col span={14}>
//               <Form.Item
//                 name="name"
//                 label={<strong>Product Name</strong>}
//                 rules={[{ required: true }]}
//               >
//                 <Input placeholder="Enter product name" style={inputStyle} />
//               </Form.Item>
//             </Col>

//             <Col span={10}>
//               <Form.Item
//                 name="productType"
//                 label={<strong>Product Type</strong>}
//                 rules={[{ required: true }]}
//               >
//                 <Select style={inputStyle}>
//                   <Select.Option value="Physical">Physical</Select.Option>
//                   <Select.Option value="Digital">Digital</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>

//             <Col span={24}>
//               <Form.Item
//                 name="description"
//                 label={<strong>Description</strong>}
//               >
//                 <TextArea rows={4} style={inputStyle} />
//               </Form.Item>
//             </Col>

//             {productType && (
//               <Col span={productType === "Physical" ? 8 : 12}>
//                 <Form.Item
//                   name="category"
//                   label={<strong>Category</strong>}
//                   rules={[{ required: true, message: "Category is required" }]}
//                 >
//                   <Select
//                     placeholder="Select category"
//                     style={inputStyle}
//                     loading={loadingCategories}
//                     disabled={loadingCategories}
//                     onChange={(val) => {
//                       console.log(
//                         "Category selected → ID:",
//                         val,
//                         "type:",
//                         typeof val,
//                       );
//                       form.setFieldsValue({ category: val });
//                     }}
//                   >
//                     {categories.map((cat) => (
//                       <Select.Option
//                         key={cat.category_id}
//                         value={cat.category_id}
//                       >
//                         {cat.name}
//                       </Select.Option>
//                     ))}
//                   </Select>
//                 </Form.Item>
//               </Col>
//             )}

//             <Col span={productType === "Physical" ? 8 : 12}>
//               <Form.Item
//                 name="price"
//                 label={<strong>Product Price</strong>}
//                 rules={[{ required: true }]}
//               >
//                 <Input placeholder="Price" style={inputStyle} />
//               </Form.Item>
//             </Col>

//             <Col span={productType === "Physical" ? 8 : 12}>
//               <Form.Item name="discount" label={<strong>Discount (%)</strong>}>
//                 <Input placeholder="0" style={inputStyle} />
//               </Form.Item>
//             </Col>

//             {productType === "Physical" && (
//               <>
//                 <Col span={8}>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     <Checkbox defaultChecked /> <strong>Size :</strong>
//                   </div>
//                   <Form.Item name="size">
//                     <Input style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={8}>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     <Checkbox defaultChecked /> <strong>Color :</strong>
//                   </div>
//                   <Form.Item name="color">
//                     <Input style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item name="brand" label={<strong>Brand</strong>}>
//                     <Input placeholder="e.g. Honda" style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item name="region" label={<strong>Region</strong>}>
//                     <Input placeholder="e.g. KSA" style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={24}>
//                   <Form.Item label={<strong>Product Images (max 3)</strong>}>
//                     <Upload
//                       listType="picture-card"
//                       fileList={imageFileList}
//                       onChange={({ fileList }) => setImageFileList(fileList)}
//                       beforeUpload={() => false}
//                       maxCount={3}
//                     >
//                       <div>
//                         <PlusOutlined />
//                         <div style={{ marginTop: 8 }}>Upload</div>
//                       </div>
//                     </Upload>
//                   </Form.Item>
//                 </Col>
//               </>
//             )}

//             {productType === "Digital" && (
//               <>
//                 <Col span={12}>
//                   <Form.Item name="region" label={<strong>Region</strong>}>
//                     <Select style={inputStyle}>
//                       <Select.Option value="Global">Global</Select.Option>
//                     </Select>
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item
//                     name="brand"
//                     label={<strong>Gift Card Brand</strong>}
//                   >
//                     <Input placeholder="e.g. Netflix" style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={24}>
//                   <Form.Item label={<strong>Upload Code (CSV/TXT)</strong>}>
//                     <Upload.Dragger
//                       fileList={codeFileList}
//                       onChange={({ fileList }) => setCodeFileList(fileList)}
//                       beforeUpload={() => false}
//                       maxCount={1}
//                     >
//                       <p className="ant-upload-drag-icon">
//                         <UploadOutlined />
//                       </p>
//                       <p>Click or drag file</p>
//                     </Upload.Dragger>
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item
//                     name="expiry"
//                     label={<strong>Card Expiry Date</strong>}
//                   >
//                     <DatePicker
//                       style={{ ...inputStyle, width: "100%" }}
//                       format="YYYY-MM-DD"
//                     />
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item label={<strong>Product Image</strong>}>
//                     <Upload
//                       listType="picture-card"
//                       fileList={imageFileList}
//                       onChange={({ fileList }) => setImageFileList(fileList)}
//                       beforeUpload={() => false}
//                       maxCount={3}
//                     >
//                       <div>
//                         <PlusOutlined />
//                         <div style={{ marginTop: 8 }}>Upload</div>
//                       </div>
//                     </Upload>
//                   </Form.Item>
//                 </Col>
//               </>
//             )}
//           </Row>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               marginTop: "20px",
//             }}
//           >
//             <Button
//               type="primary"
//               size="large"
//               style={{
//                 padding: "0 40px",
//                 borderRadius: "8px",
//                 fontWeight: "bold",
//                 height: "45px",
//               }}
//               onClick={handleSubmit}
//             >
//               {isEdit ? "Update Product" : "Save Product"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </Modal>
//   );
// }

// const inputStyle = {
//   background: "#eeeeee",
//   border: "none",
//   borderRadius: "8px",
//   height: "40px",
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
//   Checkbox,
//   Upload,
//   Button,
//   DatePicker,
//   App,
// } from "antd";
// import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
// import dayjs from "dayjs";
// import { productService } from "@/src/services/productService";
// import { categoryService } from "@/src/services/categoryService";

// const { TextArea } = Input;

// interface ProductFormModalProps {
//   open: boolean;
//   initialValues?: any;
//   onCancel: () => void;
//   onSuccess: () => void;
//   messageApi?: any;
// }

// export default function ProductFormModal({
//   open,
//   initialValues,
//   onCancel,
//   onSuccess,
//   messageApi,
// }: ProductFormModalProps) {
//   const [form] = Form.useForm();
//   const { message: localMessage } = App.useApp();
//   const msg = messageApi || localMessage;

//   const productType = Form.useWatch("productType", form);

//   const [categories, setCategories] = useState<any[]>([]);
//   const [loadingCategories, setLoadingCategories] = useState(false);

//   const [imageFileList, setImageFileList] = useState<any[]>([]);
//   const [codeFileList, setCodeFileList] = useState<any[]>([]);

//   // Track if files were modified by user
//   const [imagesModified, setImagesModified] = useState(false);
//   const [codeModified, setCodeModified] = useState(false);

//   // Track original image IDs for deletion detection
//   const [originalImageIds, setOriginalImageIds] = useState<number[]>([]);

//   // Fetch categories when product type changes
//   useEffect(() => {
//     if (!productType) return;

//     const fetchCategoriesData = async () => {
//       setLoadingCategories(true);
//       try {
//         const res = await categoryService.getCategories(
//           productType.toLowerCase(),
//         );
//         setCategories(res.results || []);
//       } catch (err) {
//         console.error("Failed to load categories", err);
//         msg.error("Failed to load categories");
//       } finally {
//         setLoadingCategories(false);
//       }
//     };

//     fetchCategoriesData();
//   }, [productType, msg]);

//   // Reset category when type changes
//   useEffect(() => {
//     form.setFieldsValue({ category: undefined });
//   }, [productType, form]);

//   // Prefill form – store category ID, but we'll find name for display
//   useEffect(() => {
//     if (!open) return;

//     if (initialValues) {
//       // Edit mode
//       const formValues = {
//         name: initialValues.name,
//         productType: initialValues.type,
//         category: Number(initialValues.categoryId),
//         description: initialValues.description || "",
//         price: initialValues.rawPrice || "",
//         discount: initialValues.discount_percentage?.toString() || "",
//         size: initialValues.size || "",
//         color: initialValues.color || "",
//         region: initialValues.region || "",
//         brand: initialValues.brand || "",
//         expiry: initialValues.card_expiry_date
//           ? dayjs(initialValues.card_expiry_date)
//           : null,
//       };
//       form.setFieldsValue(formValues);

//       // Images preview - store original IDs
//       if (initialValues.images?.length) {
//         const originalIds = initialValues.images
//           .map((img: any) => img.id)
//           .filter((id: any) => id != null);
//         setOriginalImageIds(originalIds);

//         setImageFileList(
//           initialValues.images.map((img: any, idx: number) => ({
//             uid: `old-${img.id}`, // Use image ID as uid for tracking
//             name: `image-${idx}.jpg`,
//             status: "done" as const,
//             url: img.image_url,
//             imageId: img.id, // Store the actual image ID
//           })),
//         );
//       } else {
//         setImageFileList([]);
//         setOriginalImageIds([]);
//       }

//       // Code file preview
//       if (initialValues.code_file_url) {
//         setCodeFileList([
//           {
//             uid: "old-code",
//             name: "code_file",
//             status: "done" as const,
//             url: initialValues.code_file_url,
//           },
//         ]);
//       } else {
//         setCodeFileList([]);
//       }

//       // Reset modification flags
//       setImagesModified(false);
//       setCodeModified(false);
//     } else {
//       // Add mode → clean start
//       form.resetFields();
//       form.setFieldsValue({ productType: "Physical" });
//       setImageFileList([]);
//       setCodeFileList([]);
//       setOriginalImageIds([]);
//       setImagesModified(false);
//       setCodeModified(false);
//     }
//   }, [open, initialValues, form]);

//   const isEdit = !!initialValues;

//   // Handle image changes and track modifications
//   const handleImageChange = ({ fileList }: { fileList: any[] }) => {
//     setImageFileList(fileList);
//     setImagesModified(true);
//   };

//   // Handle code changes and track modifications
//   const handleCodeChange = ({ fileList }: { fileList: any[] }) => {
//     setCodeFileList(fileList);
//     setCodeModified(true);
//   };

//   // Helper function to convert URL to File/Blob
//   const urlToFile = async (
//     url: string,
//     fileName: string,
//   ): Promise<File | null> => {
//     try {
//       const response = await fetch(url);
//       const blob = await response.blob();
//       return new File([blob], fileName, { type: blob.type });
//     } catch (error) {
//       console.error(`Failed to fetch image from ${url}:`, error);
//       return null;
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       console.log("Form values before submit:", form.getFieldsValue());
//       console.log("Image file list:", imageFileList);
//       console.log("Code file list:", codeFileList);
//       console.log("Images modified:", imagesModified);
//       console.log("Code modified:", codeModified);
//       console.log("Original image IDs:", originalImageIds);

//       const values = await form.validateFields();

//       const formData = new FormData();

//       formData.append("name", (values.name || "").trim());
//       formData.append("product_type", values.productType.toLowerCase());

//       // Category – must be valid number
//       const categoryId = Number(values.category);
//       if (isNaN(categoryId) || categoryId <= 0) {
//         form.setFields([
//           {
//             name: "category",
//             errors: ["Please select a category"],
//           },
//         ]);
//         msg.error("Please select a category");
//         return;
//       }
//       formData.append("category", categoryId.toString());

//       formData.append("description", (values.description || "").trim());
//       formData.append("price", values.price || "");
//       formData.append("discount_percentage", values.discount || "0");

//       if (values.productType === "Physical") {
//         if (values.size) formData.append("size", values.size.trim());
//         if (values.color) formData.append("color", values.color.trim());
//       }

//       if (values.region) formData.append("region", values.region.trim());
//       if (values.brand) formData.append("brand", values.brand.trim());

//       if (values.productType === "Digital" && values.expiry) {
//         formData.append("card_expiry_date", values.expiry.format("YYYY-MM-DD"));
//       }

//       // ✅ IMAGES LOGIC (UPDATED):
//       // For EDIT mode: Handle image deletions using remove_image_ids
//       if (isEdit && imagesModified) {
//         // Detect which images were deleted
//         const currentImageIds = imageFileList
//           .filter((f) => !f.originFileObj) // Only existing images (have imageId)
//           .map((f) => f.imageId)
//           .filter((id): id is number => id != null);

//         console.log("Current image IDs:", currentImageIds);

//         // Images that were deleted = original IDs - current IDs
//         const removedImageIds = originalImageIds.filter(
//           (id) => !currentImageIds.includes(id),
//         );

//         console.log("Removed image IDs:", removedImageIds);

//         // Send remove_image_ids to backend
//         if (removedImageIds.length > 0) {
//           removedImageIds.forEach((id) => {
//             formData.append("remove_image_ids", id.toString());
//           });
//           console.log(`Marked ${removedImageIds.length} image(s) for deletion`);
//         }

//         // Send new images
//         if (imageFileList.length > 0) {
//           console.log(`Handling ${imageFileList.length} image(s)`);

//           for (let index = 0; index < imageFileList.length; index++) {
//             const file = imageFileList[index];

//             if (file.originFileObj) {
//               // NEW image - send directly
//               console.log(`Image ${index}: NEW file`);
//               formData.append("images", file.originFileObj);
//             }
//             // Existing images are already in backend, no need to send them
//           }
//         }
//       } else if (!isEdit) {
//         // CREATE mode: Send all new images
//         if (imageFileList.length > 0) {
//           console.log(
//             `Handling ${imageFileList.length} new image(s) for creation`,
//           );

//           imageFileList.forEach((file, index) => {
//             if (file.originFileObj) {
//               console.log(`Image ${index}: NEW file`);
//               formData.append("images", file.originFileObj);
//             }
//           });
//         }
//       } else {
//         // Edit mode but images NOT modified - don't send anything
//         console.log("Images not modified - not sending images field");
//       }

//       // ✅ CODE FILE LOGIC:
//       // For CREATE: Send code file if provided
//       // For EDIT with modifications: Send new code file (or nothing if removed)
//       // For EDIT without modifications: Don't send code_file field (backend keeps existing)
//       if (!isEdit || codeModified) {
//         // Either creating or user modified code
//         const codeFile = codeFileList.find((f) => f.originFileObj);
//         if (codeFile) {
//           console.log("Uploading new code file");
//           formData.append("code_file", codeFile.originFileObj);
//         } else if (isEdit && codeModified && codeFileList.length === 0) {
//           // User removed the code file in edit mode
//           console.log("Code file removed");
//           // Backend may need special handling for file removal
//         }
//       } else {
//         // Edit mode, code NOT modified - don't send code_file field
//         console.log("Code not modified - not sending code_file field");
//       }

//       if (isEdit) {
//         await productService.updateProduct(initialValues.key, formData);
//         msg.success("Product updated successfully");
//       } else {
//         await productService.createProduct(formData);
//         msg.success("Product created successfully");
//       }

//       onSuccess();
//       onCancel();
//     } catch (err: any) {
//       console.error("Submit failed:", err);
//       if (err.errorFields) {
//         const errMsg =
//           err.errorFields[0]?.errors?.[0] || "Please fill required fields";
//         msg.error(errMsg);
//         form.scrollToField(err.errorFields[0].name);
//       } else {
//         msg.error(err.response?.data?.message || "Failed to save product");
//       }
//     }
//   };

//   return (
//     <Modal
//       open={open}
//       title={null}
//       onCancel={onCancel}
//       footer={null}
//       width={700}
//       centered
//       closeIcon={<div style={{ fontSize: "20px", fontWeight: "bold" }}>×</div>}
//     >
//       <div style={{ padding: "10px" }}>
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "30px",
//             fontSize: "28px",
//           }}
//         >
//           {isEdit ? "Edit Product" : "Add Product"}
//         </h2>

//         <Form form={form} layout="vertical" requiredMark={false}>
//           <Row gutter={24}>
//             <Col span={14}>
//               <Form.Item
//                 name="name"
//                 label={<strong>Product Name</strong>}
//                 rules={[{ required: true }]}
//               >
//                 <Input placeholder="Enter product name" style={inputStyle} />
//               </Form.Item>
//             </Col>

//             <Col span={10}>
//               <Form.Item
//                 name="productType"
//                 label={<strong>Product Type</strong>}
//                 rules={[{ required: true }]}
//               >
//                 <Select style={inputStyle}>
//                   <Select.Option value="Physical">Physical</Select.Option>
//                   <Select.Option value="Digital">Digital</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>

//             <Col span={24}>
//               <Form.Item
//                 name="description"
//                 label={<strong>Description</strong>}
//               >
//                 <TextArea rows={4} style={inputStyle} />
//               </Form.Item>
//             </Col>

//             {productType && (
//               <Col span={productType === "Physical" ? 8 : 12}>
//                 <Form.Item
//                   name="category"
//                   label={<strong>Category</strong>}
//                   rules={[{ required: true, message: "Category is required" }]}
//                 >
//                   <Select
//                     placeholder="Select category"
//                     style={inputStyle}
//                     loading={loadingCategories}
//                     disabled={loadingCategories}
//                     onChange={(val) => {
//                       console.log(
//                         "Category selected → ID:",
//                         val,
//                         "type:",
//                         typeof val,
//                       );
//                       form.setFieldsValue({ category: val });
//                     }}
//                   >
//                     {categories.map((cat) => (
//                       <Select.Option
//                         key={cat.category_id}
//                         value={cat.category_id}
//                       >
//                         {cat.name}
//                       </Select.Option>
//                     ))}
//                   </Select>
//                 </Form.Item>
//               </Col>
//             )}

//             <Col span={productType === "Physical" ? 8 : 12}>
//               <Form.Item
//                 name="price"
//                 label={<strong>Product Price</strong>}
//                 rules={[{ required: true }]}
//               >
//                 <Input placeholder="Price" style={inputStyle} />
//               </Form.Item>
//             </Col>

//             <Col span={productType === "Physical" ? 8 : 12}>
//               <Form.Item name="discount" label={<strong>Discount (%)</strong>}>
//                 <Input placeholder="0" style={inputStyle} />
//               </Form.Item>
//             </Col>

//             {productType === "Physical" && (
//               <>
//                 <Col span={8}>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     <Checkbox defaultChecked /> <strong>Size :</strong>
//                   </div>
//                   <Form.Item name="size">
//                     <Input style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={8}>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     <Checkbox defaultChecked /> <strong>Color :</strong>
//                   </div>
//                   <Form.Item name="color">
//                     <Input style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item name="brand" label={<strong>Brand</strong>}>
//                     <Input placeholder="e.g. Honda" style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item name="region" label={<strong>Region</strong>}>
//                     <Input placeholder="e.g. KSA" style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={24}>
//                   <Form.Item label={<strong>Product Images (max 3)</strong>}>
//                     <Upload
//                       listType="picture-card"
//                       fileList={imageFileList}
//                       onChange={handleImageChange}
//                       beforeUpload={() => false}
//                       maxCount={3}
//                     >
//                       <div>
//                         <PlusOutlined />
//                         <div style={{ marginTop: 8 }}>Upload</div>
//                       </div>
//                     </Upload>
//                   </Form.Item>
//                 </Col>
//               </>
//             )}

//             {productType === "Digital" && (
//               <>
//                 <Col span={12}>
//                   <Form.Item name="region" label={<strong>Region</strong>}>
//                     <Select style={inputStyle}>
//                       <Select.Option value="Global">Global</Select.Option>
//                     </Select>
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item
//                     name="brand"
//                     label={<strong>Gift Card Brand</strong>}
//                   >
//                     <Input placeholder="e.g. Netflix" style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={24}>
//                   <Form.Item label={<strong>Upload Code (CSV/TXT)</strong>}>
//                     <Upload.Dragger
//                       fileList={codeFileList}
//                       onChange={handleCodeChange}
//                       beforeUpload={() => false}
//                       maxCount={1}
//                     >
//                       <p className="ant-upload-drag-icon">
//                         <UploadOutlined />
//                       </p>
//                       <p>Click or drag file</p>
//                     </Upload.Dragger>
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item
//                     name="expiry"
//                     label={<strong>Card Expiry Date</strong>}
//                   >
//                     <DatePicker
//                       style={{ ...inputStyle, width: "100%" }}
//                       format="YYYY-MM-DD"
//                     />
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item label={<strong>Product Image</strong>}>
//                     <Upload
//                       listType="picture-card"
//                       fileList={imageFileList}
//                       onChange={handleImageChange}
//                       beforeUpload={() => false}
//                       maxCount={3}
//                     >
//                       <div>
//                         <PlusOutlined />
//                         <div style={{ marginTop: 8 }}>Upload</div>
//                       </div>
//                     </Upload>
//                   </Form.Item>
//                 </Col>
//               </>
//             )}
//           </Row>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               marginTop: "20px",
//             }}
//           >
//             <Button
//               type="primary"
//               size="large"
//               style={{
//                 padding: "0 40px",
//                 borderRadius: "8px",
//                 fontWeight: "bold",
//                 height: "45px",
//               }}
//               onClick={handleSubmit}
//             >
//               {isEdit ? "Update Product" : "Save Product"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </Modal>
//   );
// }

// const inputStyle = {
//   background: "#eeeeee",
//   border: "none",
//   borderRadius: "8px",
//   height: "40px",
// };

//TODO:review

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
//   Checkbox,
//   Upload,
//   Button,
//   DatePicker,
//   App,
// } from "antd";
// import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
// import dayjs from "dayjs";
// import { productService } from "@/src/services/productService";
// import { categoryService } from "@/src/services/categoryService";
// import { RegionDropdown } from "react-country-region-selector";
// const { TextArea } = Input;

// interface ProductFormModalProps {
//   open: boolean;
//   initialValues?: any;
//   onCancel: () => void;
//   onSuccess: () => void;
//   messageApi?: any;
// }

// export default function ProductFormModal({
//   open,
//   initialValues,
//   onCancel,
//   onSuccess,
//   messageApi,
// }: ProductFormModalProps) {
//   const [form] = Form.useForm();
//   const { message: localMessage } = App.useApp();
//   const msg = messageApi || localMessage;

//   const productType = Form.useWatch("productType", form);

//   const [categories, setCategories] = useState<any[]>([]);
//   const [loadingCategories, setLoadingCategories] = useState(false);

//   const [imageFileList, setImageFileList] = useState<any[]>([]);
//   const [codeFileList, setCodeFileList] = useState<any[]>([]);

//   // Track if files were modified by user
//   const [imagesModified, setImagesModified] = useState(false);
//   const [codeModified, setCodeModified] = useState(false);

//   // Track original image IDs for deletion detection
//   const [originalImageIds, setOriginalImageIds] = useState<number[]>([]);
//   const [regionState, setRegionState] = useState("");

//   // Fetch categories when product type changes
//   useEffect(() => {
//     if (!productType) return;

//     const fetchCategoriesData = async () => {
//       setLoadingCategories(true);
//       try {
//         const res = await categoryService.getCategories({
//           category_for: productType.toLowerCase(),
//         });
//         setCategories(res.results || []);
//       } catch (err) {
//         console.error("Failed to load categories", err);
//         msg.error("Failed to load categories");
//       } finally {
//         setLoadingCategories(false);
//       }
//     };

//     fetchCategoriesData();
//   }, [productType, msg]);

//   // Reset category when type changes
//   useEffect(() => {
//     form.setFieldsValue({ category: undefined });
//   }, [productType, form]);

//   // Prefill form – store category ID, but we'll find name for display
//   useEffect(() => {
//     if (!open) return;

//     if (initialValues) {
//       // Edit mode
//       // For sizes and colors: extract names from array and join with comma
//       const sizeText = initialValues.sizes?.length
//         ? initialValues.sizes.map((s: any) => s.name).join(", ")
//         : "";
//       const colorText = initialValues.colors?.length
//         ? initialValues.colors.map((c: any) => c.name).join(", ")
//         : "";

//       const formValues = {
//         name: initialValues.name,
//         productType: initialValues.type,
//         category: Number(initialValues.categoryId),
//         description: initialValues.description || "",
//         price: initialValues.rawPrice || "",
//         discount: initialValues.discount_percentage?.toString() || "",
//         size: sizeText, // ← Show sizes as comma-separated text
//         color: colorText, // ← Show colors as comma-separated text
//         region: initialValues.region || "",
//         brand: initialValues.brand || "",
//         expiry: initialValues.card_expiry_date
//           ? dayjs(initialValues.card_expiry_date)
//           : null,
//       };
//       form.setFieldsValue(formValues);
//       setRegionState(initialValues.region || "");
//       // Images preview - store original IDs
//       if (initialValues.images?.length) {
//         const originalIds = initialValues.images
//           .map((img: any) => img.id)
//           .filter((id: any) => id != null);
//         setOriginalImageIds(originalIds);

//         setImageFileList(
//           initialValues.images.map((img: any, idx: number) => ({
//             uid: `old-${img.id}`, // Use image ID as uid for tracking
//             name: `image-${idx}.jpg`,
//             status: "done" as const,
//             url: img.image_url,
//             imageId: img.id, // Store the actual image ID
//           })),
//         );
//       } else {
//         setImageFileList([]);
//         setOriginalImageIds([]);
//       }

//       // Code file preview
//       if (initialValues.code_file_url) {
//         setCodeFileList([
//           {
//             uid: "old-code",
//             name: "code_file",
//             status: "done" as const,
//             url: initialValues.code_file_url,
//           },
//         ]);
//       } else {
//         setCodeFileList([]);
//       }

//       // Reset modification flags
//       setImagesModified(false);
//       setCodeModified(false);
//     } else {
//       // Add mode → clean start
//       form.resetFields();
//       form.setFieldsValue({ productType: "Physical" });
//       setImageFileList([]);
//       setCodeFileList([]);
//       setOriginalImageIds([]);
//       setImagesModified(false);
//       setCodeModified(false);
//     }
//   }, [open, initialValues, form]);

//   const isEdit = !!initialValues;

//   // Handle image changes and track modifications
//   const handleImageChange = ({ fileList }: { fileList: any[] }) => {
//     setImageFileList(fileList);
//     setImagesModified(true);
//   };

//   // Handle code changes and track modifications
//   const handleCodeChange = ({ fileList }: { fileList: any[] }) => {
//     setCodeFileList(fileList);
//     setCodeModified(true);
//   };

//   // Helper function to convert URL to File/Blob
//   const urlToFile = async (
//     url: string,
//     fileName: string,
//   ): Promise<File | null> => {
//     try {
//       const response = await fetch(url);
//       const blob = await response.blob();
//       return new File([blob], fileName, { type: blob.type });
//     } catch (error) {
//       console.error(`Failed to fetch image from ${url}:`, error);
//       return null;
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       console.log("Form values before submit:", form.getFieldsValue());
//       console.log("Image file list:", imageFileList);
//       console.log("Code file list:", codeFileList);
//       console.log("Images modified:", imagesModified);
//       console.log("Code modified:", codeModified);
//       console.log("Original image IDs:", originalImageIds);
//       console.log("region:", regionState);

//       const values = await form.validateFields();

//       const formData = new FormData();

//       formData.append("name", (values.name || "").trim());
//       formData.append("product_type", values.productType.toLowerCase());

//       // Category – must be valid number
//       const categoryId = Number(values.category);
//       if (isNaN(categoryId) || categoryId <= 0) {
//         form.setFields([
//           {
//             name: "category",
//             errors: ["Please select a category"],
//           },
//         ]);
//         msg.error("Please select a category");
//         return;
//       }
//       formData.append("category", categoryId.toString());

//       formData.append("description", (values.description || "").trim());
//       formData.append("price", values.price || "");
//       formData.append("discount_percentage", values.discount || "0");

//       if (values.productType === "Physical") {
//         if (values.size) formData.append("sizes", values.size.trim());
//         if (values.color) formData.append("colors", values.color.trim());
//       }

//       if (values.region) formData.append("region", values.region.trim());
//       if (values.brand) formData.append("brand", values.brand.trim());

//       if (values.productType === "Digital" && values.expiry) {
//         formData.append("card_expiry_date", values.expiry.format("YYYY-MM-DD"));
//       }

//       // ✅ IMAGES LOGIC (UPDATED):
//       // For EDIT mode: Handle image deletions using remove_image_ids
//       if (isEdit && imagesModified) {
//         // Detect which images were deleted
//         const currentImageIds = imageFileList
//           .filter((f) => !f.originFileObj) // Only existing images (have imageId)
//           .map((f) => f.imageId)
//           .filter((id): id is number => id != null);

//         console.log("Current image IDs:", currentImageIds);

//         // Images that were deleted = original IDs - current IDs
//         const removedImageIds = originalImageIds.filter(
//           (id) => !currentImageIds.includes(id),
//         );

//         console.log("Removed image IDs:", removedImageIds);

//         // Send remove_image_ids to backend
//         if (removedImageIds.length > 0) {
//           removedImageIds.forEach((id) => {
//             formData.append("remove_image_ids", id.toString());
//           });
//           console.log(`Marked ${removedImageIds.length} image(s) for deletion`);
//         }

//         // Send new images
//         if (imageFileList.length > 0) {
//           console.log(`Handling ${imageFileList.length} image(s)`);

//           for (let index = 0; index < imageFileList.length; index++) {
//             const file = imageFileList[index];

//             if (file.originFileObj) {
//               // NEW image - send directly
//               console.log(`Image ${index}: NEW file`);
//               formData.append("images", file.originFileObj);
//             }
//             // Existing images are already in backend, no need to send them
//           }
//         }
//       } else if (!isEdit) {
//         // CREATE mode: Send all new images
//         if (imageFileList.length > 0) {
//           console.log(
//             `Handling ${imageFileList.length} new image(s) for creation`,
//           );

//           imageFileList.forEach((file, index) => {
//             if (file.originFileObj) {
//               console.log(`Image ${index}: NEW file`);
//               formData.append("images", file.originFileObj);
//             }
//           });
//         }
//       } else {
//         // Edit mode but images NOT modified - don't send anything
//         console.log("Images not modified - not sending images field");
//       }

//       // ✅ CODE FILE LOGIC:
//       // For CREATE: Send code file if provided
//       // For EDIT with modifications: Send new code file (or nothing if removed)
//       // For EDIT without modifications: Don't send code_file field (backend keeps existing)
//       if (!isEdit || codeModified) {
//         // Either creating or user modified code
//         const codeFile = codeFileList.find((f) => f.originFileObj);
//         if (codeFile) {
//           console.log("Uploading new code file");
//           formData.append("code_file", codeFile.originFileObj);
//         } else if (isEdit && codeModified && codeFileList.length === 0) {
//           // User removed the code file in edit mode
//           console.log("Code file removed");
//           // Backend may need special handling for file removal
//         }
//       } else {
//         // Edit mode, code NOT modified - don't send code_file field
//         console.log("Code not modified - not sending code_file field");
//       }

//       if (isEdit) {
//         await productService.updateProduct(initialValues.key, formData);
//         msg.success("Product updated successfully");
//       } else {
//         await productService.createProduct(formData);
//         msg.success("Product created successfully");
//       }

//       onSuccess();
//       onCancel();
//     } catch (err: any) {
//       console.error("Submit failed:", err);
//       if (err.errorFields) {
//         const errMsg =
//           err.errorFields[0]?.errors?.[0] || "Please fill required fields";
//         msg.error(errMsg);
//         form.scrollToField(err.errorFields[0].name);
//       } else {
//         msg.error(err.response?.data?.message || "Failed to save product");
//       }
//     }
//   };

//   return (
//     <Modal
//       open={open}
//       title={null}
//       onCancel={onCancel}
//       footer={null}
//       width={700}
//       centered
//       closeIcon={<div style={{ fontSize: "20px", fontWeight: "bold" }}>×</div>}
//     >
//       <div style={{ padding: "10px" }}>
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "30px",
//             fontSize: "28px",
//           }}
//         >
//           {isEdit ? "Edit Product" : "Add Product"}
//         </h2>

//         <Form form={form} layout="vertical" requiredMark={false}>
//           <Row gutter={24}>
//             <Col span={14}>
//               <Form.Item
//                 name="name"
//                 label={<strong>Product Name</strong>}
//                 rules={[{ required: true }]}
//               >
//                 <Input placeholder="Enter product name" style={inputStyle} />
//               </Form.Item>
//             </Col>

//             <Col span={10}>
//               <Form.Item
//                 name="productType"
//                 label={<strong>Product Type</strong>}
//                 rules={[{ required: true }]}
//               >
//                 <Select style={inputStyle}>
//                   <Select.Option value="Physical">Physical</Select.Option>
//                   <Select.Option value="Digital">Digital</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>

//             <Col span={24}>
//               <Form.Item
//                 name="description"
//                 label={<strong>Description</strong>}
//               >
//                 <TextArea rows={4} style={inputStyle} />
//               </Form.Item>
//             </Col>

//             {productType && (
//               <Col span={productType === "Physical" ? 8 : 12}>
//                 <Form.Item
//                   name="category"
//                   label={<strong>Category</strong>}
//                   rules={[{ required: true, message: "Category is required" }]}
//                 >
//                   <Select
//                     placeholder="Select category"
//                     style={inputStyle}
//                     loading={loadingCategories}
//                     disabled={loadingCategories}
//                     onChange={(val) => {
//                       console.log(
//                         "Category selected → ID:",
//                         val,
//                         "type:",
//                         typeof val,
//                       );
//                       form.setFieldsValue({ category: val });
//                     }}
//                   >
//                     {categories.map((cat) => (
//                       <Select.Option
//                         key={cat.category_id}
//                         value={cat.category_id}
//                       >
//                         {cat.name}
//                       </Select.Option>
//                     ))}
//                   </Select>
//                 </Form.Item>
//               </Col>
//             )}

//             <Col span={productType === "Physical" ? 8 : 12}>
//               <Form.Item
//                 name="price"
//                 label={<strong>Product Price</strong>}
//                 rules={[{ required: true }]}
//               >
//                 <Input placeholder="Price" style={inputStyle} />
//               </Form.Item>
//             </Col>

//             <Col span={productType === "Physical" ? 8 : 12}>
//               <Form.Item name="discount" label={<strong>Discount (%)</strong>}>
//                 <Input placeholder="0" style={inputStyle} />
//               </Form.Item>
//             </Col>

//             {productType === "Physical" && (
//               <>
//                 <Col span={8}>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     <Checkbox defaultChecked /> <strong>Size :</strong>
//                   </div>
//                   <Form.Item name="size">
//                     <Input style={inputStyle} placeholder="e.g. asd, qasda" />
//                   </Form.Item>
//                 </Col>

//                 <Col span={8}>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     <Checkbox defaultChecked /> <strong>Color :</strong>
//                   </div>
//                   <Form.Item name="color">
//                     <Input
//                       style={inputStyle}
//                       placeholder="e.g. Black, White, Blue"
//                     />
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item name="brand" label={<strong>Brand</strong>}>
//                     <Input placeholder="e.g. Honda" style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 {/* <Col span={12}>

//                   <Form.Item name="region" label={<strong>Region</strong>}>
//                     <RegionDropdown
//                       country="Saudi Arabia"
//                       value={regionState}
//                       onChange={(val) => {
//                         setRegionState(val);
//                         form.setFieldsValue({ region: val });
//                       }}
//                       style={{ ...inputStyle, width: "100%" }}
//                     />
//                   </Form.Item>
//                 </Col> */}

//                 <Col span={24}>
//                   <Form.Item label={<strong>Product Images (max 3)</strong>}>
//                     <Upload
//                       listType="picture-card"
//                       fileList={imageFileList}
//                       onChange={handleImageChange}
//                       beforeUpload={() => false}
//                       maxCount={3}
//                     >
//                       <div>
//                         <PlusOutlined />
//                         <div style={{ marginTop: 8 }}>Upload</div>
//                       </div>
//                     </Upload>
//                   </Form.Item>
//                 </Col>
//               </>
//             )}

//             {productType === "Digital" && (
//               <>
//                 <Col span={12}>
//                   {/* <Form.Item name="region" label={<strong>Region</strong>}>
//                     <Select style={inputStyle}>
//                       <Select.Option value="Global">Global</Select.Option>
//                     </Select>
//                   </Form.Item> */}

//                   <Form.Item name="region" label={<strong>Region</strong>}>
//                     <RegionDropdown
//                       country="Saudi Arabia"
//                       value={regionState}
//                       onChange={(val) => {
//                         setRegionState(val);
//                         form.setFieldsValue({ region: val });
//                       }}
//                       style={{ ...inputStyle, width: "100%" }}
//                     />
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item
//                     name="brand"
//                     label={<strong>Gift Card Brand</strong>}
//                   >
//                     <Input placeholder="e.g. Netflix" style={inputStyle} />
//                   </Form.Item>
//                 </Col>

//                 <Col span={24}>
//                   <Form.Item label={<strong>Upload Code (CSV/TXT)</strong>}>
//                     <Upload.Dragger
//                       fileList={codeFileList}
//                       onChange={handleCodeChange}
//                       beforeUpload={() => false}
//                       maxCount={1}
//                     >
//                       <p className="ant-upload-drag-icon">
//                         <UploadOutlined />
//                       </p>
//                       <p>Click or drag file</p>
//                     </Upload.Dragger>
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item
//                     name="expiry"
//                     label={<strong>Card Expiry Date</strong>}
//                   >
//                     <DatePicker
//                       style={{ ...inputStyle, width: "100%" }}
//                       format="YYYY-MM-DD"
//                     />
//                   </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                   <Form.Item label={<strong>Product Image</strong>}>
//                     <Upload
//                       listType="picture-card"
//                       fileList={imageFileList}
//                       onChange={handleImageChange}
//                       beforeUpload={() => false}
//                       maxCount={3}
//                     >
//                       <div>
//                         <PlusOutlined />
//                         <div style={{ marginTop: 8 }}>Upload</div>
//                       </div>
//                     </Upload>
//                   </Form.Item>
//                 </Col>
//               </>
//             )}
//           </Row>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               marginTop: "20px",
//             }}
//           >
//             <Button
//               type="primary"
//               size="large"
//               style={{
//                 padding: "0 40px",
//                 borderRadius: "8px",
//                 fontWeight: "bold",
//                 height: "45px",
//               }}
//               onClick={handleSubmit}
//             >
//               {isEdit ? "Update Product" : "Save Product"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </Modal>
//   );
// }

// const inputStyle = {
//   background: "#eeeeee",
//   border: "none",
//   borderRadius: "8px",
//   height: "40px",
// };

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
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
  App,
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { productService } from "@/src/services/productService";
import { categoryService } from "@/src/services/categoryService";
import { RegionDropdown } from "react-country-region-selector";

const { TextArea } = Input;

interface ProductFormModalProps {
  open: boolean;
  initialValues?: any;
  onCancel: () => void;
  onSuccess: () => void;
  messageApi?: any;
}

const inputStyle = {
  background: "#eeeeee",
  border: "none",
  borderRadius: "8px",
  height: "40px",
};

export default function ProductFormModal({
  open,
  initialValues,
  onCancel,
  onSuccess,
  messageApi,
}: ProductFormModalProps) {
  const [form] = Form.useForm();
  const { message: localMessage } = App.useApp();
  const msg = messageApi || localMessage;

  const productType = Form.useWatch("productType", form);

  // --- Category Search State ---
  const [categories, setCategories] = useState<any[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);

  // --- Original File/State Tracking (Restored) ---
  const [imageFileList, setImageFileList] = useState<any[]>([]);
  const [codeFileList, setCodeFileList] = useState<any[]>([]);
  const [imagesModified, setImagesModified] = useState(false);
  const [codeModified, setCodeModified] = useState(false);
  const [originalImageIds, setOriginalImageIds] = useState<number[]>([]);
  const [regionState, setRegionState] = useState("");

  const isEdit = !!initialValues;

  // --- 1. Category Fetching Logic (Server-side Search) ---
  const fetchCategoriesData = async (keyword?: string) => {
    if (!productType) return;
    setLoadingCategories(true);
    try {
      const res = await categoryService.getCategories({
        category_for: productType.toLowerCase(),
        search: keyword, // Passing the search keyword to API
      });
      setCategories(res.results || []);
    } catch (err) {
      console.error("Failed to load categories", err);
    } finally {
      setLoadingCategories(false);
    }
  };

  // Initial fetch when type changes
  useEffect(() => {
    if (open && productType) {
      fetchCategoriesData();
    }
  }, [productType, open]);

  // Debounce helper for searching
  const handleCategorySearch = (value: string) => {
    const timer = setTimeout(() => fetchCategoriesData(value), 500);
    return () => clearTimeout(timer);
  };

  // --- 2. Form Prefill & Reset (Restored) ---
  useEffect(() => {
    if (!open) return;

    if (initialValues) {
      const sizeText =
        initialValues.sizes?.map((s: any) => s.name).join(", ") || "";
      const colorText =
        initialValues.colors?.map((c: any) => c.name).join(", ") || "";

      form.setFieldsValue({
        name: initialValues.name,
        productType: initialValues.type,
        category: Number(initialValues.categoryId),
        description: initialValues.description || "",
        price: initialValues.rawPrice || "",
        discount: initialValues.discount_percentage?.toString() || "",
        size: sizeText,
        color: colorText,
        region: initialValues.region || "",
        brand: initialValues.brand || "",
        expiry: initialValues.card_expiry_date
          ? dayjs(initialValues.card_expiry_date)
          : null,
      });

      setRegionState(initialValues.region || "");

      if (initialValues.images?.length) {
        const ids = initialValues.images
          .map((img: any) => img.id)
          .filter(Boolean);
        setOriginalImageIds(ids);
        setImageFileList(
          initialValues.images.map((img: any, idx: number) => ({
            uid: `old-${img.id}`,
            name: `image-${idx}.jpg`,
            status: "done",
            url: img.image_url,
            imageId: img.id,
          })),
        );
      } else {
        setImageFileList([]);
        setOriginalImageIds([]);
      }

      if (initialValues.code_file_url) {
        setCodeFileList([
          {
            uid: "old-code",
            name: "code_file",
            status: "done",
            url: initialValues.code_file_url,
          },
        ]);
      } else {
        setCodeFileList([]);
      }

      setImagesModified(false);
      setCodeModified(false);
    } else {
      form.resetFields();
      form.setFieldsValue({ productType: "Physical", category: undefined });
      setImageFileList([]);
      setCodeFileList([]);
      setOriginalImageIds([]);
      setImagesModified(false);
      setCodeModified(false);
    }
  }, [open, initialValues, form]);

  // --- 3. Change Handlers (Restored) ---
  const handleImageChange = ({ fileList }: { fileList: any[] }) => {
    setImageFileList(fileList);
    setImagesModified(true);
  };

  const handleCodeChange = ({ fileList }: { fileList: any[] }) => {
    setCodeFileList(fileList);
    setCodeModified(true);
  };

  // --- 4. Submit Logic (Fully Restored + Search ID Fix) ---
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const formData = new FormData();

      formData.append("name", (values.name || "").trim());
      formData.append("product_type", values.productType.toLowerCase());
      formData.append("category", values.category.toString()); // Selected ID
      formData.append("description", (values.description || "").trim());
      formData.append("price", values.price || "");
      formData.append("discount_percentage", values.discount || "0");

      if (values.productType === "Physical") {
        if (values.size) formData.append("sizes", values.size.trim());
        if (values.color) formData.append("colors", values.color.trim());
      }

      if (values.region) formData.append("region", values.region.trim());
      if (values.brand) formData.append("brand", values.brand.trim());

      if (values.productType === "Digital" && values.expiry) {
        formData.append("card_expiry_date", values.expiry.format("YYYY-MM-DD"));
      }

      // Restore: Image Deletion Detection Logic
      if (isEdit && imagesModified) {
        const currentImageIds = imageFileList
          .filter((f) => !f.originFileObj)
          .map((f) => f.imageId)
          .filter((id) => id != null);

        const removedImageIds = originalImageIds.filter(
          (id) => !currentImageIds.includes(id),
        );
        removedImageIds.forEach((id) =>
          formData.append("remove_image_ids", id.toString()),
        );

        imageFileList.forEach((file) => {
          if (file.originFileObj) formData.append("images", file.originFileObj);
        });
      } else if (!isEdit) {
        imageFileList.forEach((file) => {
          if (file.originFileObj) formData.append("images", file.originFileObj);
        });
      }

      // Restore: Code File Logic
      if (!isEdit || codeModified) {
        const codeFile = codeFileList.find((f) => f.originFileObj);
        if (codeFile) formData.append("code_file", codeFile.originFileObj);
      }

      if (isEdit) {
        await productService.updateProduct(initialValues.key, formData);
        msg.success("Product updated successfully");
      } else {
        await productService.createProduct(formData);
        msg.success("Product created successfully");
      }

      onSuccess();
      onCancel();
    } catch (err: any) {
      console.error("Submit failed:", err);
      msg.error("Failed to save product");
    }
  };

  return (
    <Modal
      open={open}
      title={null}
      onCancel={onCancel}
      footer={null}
      width={700}
      centered
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

        <Form form={form} layout="vertical" requiredMark={false}>
          <Row gutter={24}>
            <Col span={14}>
              <Form.Item
                name="name"
                label={<strong>Product Name</strong>}
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter product name" style={inputStyle} />
              </Form.Item>
            </Col>

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

            <Col span={24}>
              <Form.Item
                name="description"
                label={<strong>Description</strong>}
              >
                <TextArea rows={4} style={inputStyle} />
              </Form.Item>
            </Col>

            {/* Category Field with Search Logic */}
            <Col span={productType === "Physical" ? 8 : 12}>
              <Form.Item
                name="category"
                label={<strong>Category</strong>}
                rules={[{ required: true, message: "Category is required" }]}
              >
                <Select
                  showSearch
                  placeholder="Search or select category"
                  style={inputStyle}
                  loading={loadingCategories}
                  onSearch={handleCategorySearch}
                  filterOption={false}
                  allowClear
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

            <Col span={productType === "Physical" ? 8 : 12}>
              <Form.Item
                name="price"
                label={<strong>Product Price</strong>}
                rules={[{ required: true }]}
              >
                <Input placeholder="Price" style={inputStyle} />
              </Form.Item>
            </Col>

            {productType === "Physical" && (
              <Col span={productType === "Physical" ? 8 : 12}>
                <Form.Item
                  name="discount"
                  label={<strong>Discount (%)</strong>}
                >
                  <Input placeholder="0" style={inputStyle} />
                </Form.Item>
              </Col>
            )}
            {/* <Col span={productType === "Physical" ? 8 : 12}>

              <Form.Item name="discount" label={<strong>Discount (%)</strong>}>
                <Input placeholder="0" style={inputStyle} />
              </Form.Item>
            </Col> */}

            {productType === "Physical" && (
              <>
                <Col span={8}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <Checkbox defaultChecked /> <strong>Size :</strong>
                  </div>
                  <Form.Item name="size">
                    <Input style={inputStyle} placeholder="L, XL, XXL" />
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
                    <Checkbox defaultChecked /> <strong>Color :</strong>
                  </div>
                  <Form.Item name="color">
                    <Input style={inputStyle} placeholder="Black, Red" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="brand" label={<strong>Brand</strong>}>
                    <Input placeholder="e.g. Honda" style={inputStyle} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label={<strong>Product Images </strong>}>
                    <Upload
                      listType="picture-card"
                      fileList={imageFileList}
                      onChange={handleImageChange}
                      beforeUpload={() => false}
                      multiple
                      // maxCount={3}
                    >
                      {/* {imageFileList.length >= 3 ? null : (
                        <div>
                          <PlusOutlined />
                          <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                      )} */}

                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                      </div>
                    </Upload>
                  </Form.Item>
                </Col>
              </>
            )}

            {productType === "Digital" && (
              <>
                <Col span={12}>
                  <Form.Item name="region" label={<strong>Region</strong>}>
                    <RegionDropdown
                      country="Saudi Arabia"
                      value={regionState}
                      onChange={(val) => {
                        setRegionState(val);
                        form.setFieldsValue({ region: val });
                      }}
                      style={{ ...inputStyle, width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="brand"
                    label={<strong>Gift Card Brand</strong>}
                  >
                    <Input placeholder="e.g. Netflix" style={inputStyle} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label={<strong>Upload Code (CSV/TXT)</strong>}>
                    <Upload.Dragger
                      fileList={codeFileList}
                      onChange={handleCodeChange}
                      beforeUpload={() => false}
                      maxCount={1}
                    >
                      <p className="ant-upload-drag-icon">
                        <UploadOutlined />
                      </p>
                      <p>Click or drag file</p>
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
                      format="YYYY-MM-DD"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label={<strong>Product Image</strong>}>
                    <Upload
                      listType="picture-card"
                      fileList={imageFileList}
                      onChange={handleImageChange}
                      beforeUpload={() => false}
                      multiple
                      // maxCount={3}
                    >
                      {/* {imageFileList.length >= 3 ? null : (
                        <div>
                          <PlusOutlined />
                          <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                      )} */}

                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
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
              size="large"
              onClick={handleSubmit}
              style={{ height: "45px", fontWeight: "bold" }}
            >
              {isEdit ? "Update Product" : "Save Product"}
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
