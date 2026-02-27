/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState, useMemo } from "react";
// import {
//   Table,
//   Button,
//   Input,
//   Select,
//   Space,
//   Row,
//   Col,
//   Typography,
//   ConfigProvider,
//   message,
// } from "antd";
// import {
//   SearchOutlined,
//   PlusOutlined,
//   EditOutlined,
//   DeleteOutlined,
// } from "@ant-design/icons";
// import Image from "next/image";
// // Import your modal component here
// import ProductFormModal from "./ProductFormModal";

// const { Text } = Typography;

// interface ProductTableProps {
//   products: any[];
// }

// export default function ProductTable({
//   products: initialProducts,
// }: ProductTableProps) {
//   // --- State Management ---
//   const [products, setProducts] = useState(initialProducts);
//   const [searchText, setSearchText] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("Physical");

//   // Modal states
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

//   // --- Handlers ---
//   const handleOpenAddModal = () => {
//     setSelectedProduct(null); // Ensure form is empty for "Add"
//     setIsModalOpen(true);
//   };

//   const handleOpenEditModal = (record: any) => {
//     setSelectedProduct(record); // Pass existing product data
//     setIsModalOpen(true);
//   };

//   const handleFormFinish = (values: any) => {
//     if (selectedProduct) {
//       // Logic for Edit: Update existing product in the local list
//       setProducts((prev) =>
//         prev.map((p) =>
//           p.key === selectedProduct.key ? { ...p, ...values } : p,
//         ),
//       );
//       message.success("Product updated successfully");
//     } else {
//       // Logic for Add: Create a new product entry
//       const newProduct = {
//         ...values,
//         key: Date.now().toString(), // Generating a temporary unique key
//         image: "https://via.placeholder.com/30", // Placeholder if no image logic is set
//       };
//       setProducts((prev) => [...prev, newProduct]);
//       message.success("Product added successfully");
//     }
//     setIsModalOpen(false);
//   };

//   // --- Filtering Logic ---
//   const filteredData = useMemo(() => {
//     return products.filter((item) => {
//       const matchesSearch = item.name
//         .toLowerCase()
//         .includes(searchText.toLowerCase());
//       const matchesCategory =
//         item.type === categoryFilter || item.productType === categoryFilter;
//       return matchesSearch && matchesCategory;
//     });
//   }, [products, searchText, categoryFilter]);

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       render: (text: string, record: any) => (
//         <Space>
//           <Image src={record.image} width={30} height={30} alt={text} />
//           <Text strong>{text}</Text>
//         </Space>
//       ),
//     },
//     { title: "Category", dataIndex: "category", key: "category" },
//     { title: "Price", dataIndex: "price", key: "price" },
//     {
//       title: "Size/Color",
//       dataIndex: "specification",
//       key: "specification",
//       render: (_: any, record: any) =>
//         record.specification ||
//         `${record.size || "N/A"}, ${record.color || "N/A"}`,
//     },
//     { title: "Discount", dataIndex: "discount", key: "discount" },
//     {
//       title: "Action",
//       key: "action",
//       render: (_: any, record: any) => (
//         <Space size="middle">
//           <Button
//             icon={<EditOutlined />}
//             size="small"
//             style={{ borderRadius: "4px" }}
//             onClick={() => handleOpenEditModal(record)}
//           >
//             Edit
//           </Button>
//           <Button
//             icon={<DeleteOutlined />}
//             danger
//             size="small"
//             style={{ borderRadius: "4px" }}
//           >
//             Delete
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div
//       style={{ background: "#f8f9fa", padding: "20px", borderRadius: "8px" }}
//     >
//       <Row
//         gutter={16}
//         justify="space-between"
//         align="middle"
//         style={{ marginBottom: "24px" }}
//       >
//         <Col span={20}>
//           <Input
//             placeholder="Search Products"
//             prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
//             style={{ borderRadius: "8px", height: "45px" }}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//         </Col>
//         <Col>
//           <Button
//             type="primary"
//             icon={<PlusOutlined />}
//             size="large"
//             style={{ borderRadius: "8px", height: "45px", fontWeight: "bold" }}
//             onClick={handleOpenAddModal}
//           >
//             Add Product
//           </Button>
//         </Col>
//       </Row>

//       <div style={{ marginBottom: "16px" }}>
//         <Select
//           defaultValue="Physical"
//           variant="borderless"
//           style={{ width: 120, fontWeight: "bold", fontSize: "16px" }}
//           onChange={(value) => setCategoryFilter(value)}
//           options={[
//             { value: "Physical", label: "Physical" },
//             { value: "Digital", label: "Digital" },
//           ]}
//         />
//       </div>

//       <ConfigProvider
//         theme={{
//           components: { Table: { headerBg: "#fff", headerColor: "#000" } },
//         }}
//       >
//         <Table
//           columns={columns}
//           dataSource={filteredData}
//           pagination={{
//             pageSize: 5,
//             position: ["bottomRight"],
//             showTotal: (total, range) =>
//               `Showing ${range[0]} to ${range[1]} of ${total} results`,
//           }}
//           style={{
//             background: "#fff",
//             borderRadius: "12px",
//             border: "1px solid #f0f0f0",
//             overflow: "hidden",
//           }}
//         />
//       </ConfigProvider>

//       {/* --- Reusable Modal --- */}
//       <ProductFormModal
//         open={isModalOpen}
//         initialValues={selectedProduct}
//         onCancel={() => setIsModalOpen(false)}
//         onFinish={handleFormFinish}
//       />
//     </div>
//   );
// }

//TODO:
/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState, useMemo } from "react";
// import {
//   Table,
//   Button,
//   Input,
//   Select,
//   Space,
//   Row,
//   Col,
//   Typography,
//   ConfigProvider,
//   Card,
//   Grid,
// } from "antd";
// import {
//   SearchOutlined,
//   PlusOutlined,
//   EditOutlined,
//   DeleteOutlined,
// } from "@ant-design/icons";
// import Image from "next/image";
// import ProductFormModal from "./ProductFormModal";
// import { App } from "antd";

// const { Text } = Typography;
// const { useBreakpoint } = Grid;

// interface ProductTableProps {
//   products: any[];
// }

// export default function ProductTable({
//   products: initialProducts,
// }: ProductTableProps) {
//   const screens = useBreakpoint();
//   const [products, setProducts] = useState(initialProducts);
//   const [searchText, setSearchText] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("Physical");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
//   const { message } = App.useApp();
//   // --- Handlers ---
//   const handleOpenAddModal = () => {
//     setSelectedProduct(null);
//     setIsModalOpen(true);
//   };

//   const handleOpenEditModal = (record: any) => {
//     setSelectedProduct(record);
//     setIsModalOpen(true);
//   };

//   const handleFormFinish = (values: any) => {
//     if (selectedProduct) {
//       setProducts((prev) =>
//         prev.map((p) =>
//           p.key === selectedProduct.key ? { ...p, ...values } : p,
//         ),
//       );
//       message.success("Product updated successfully");
//     } else {
//       const newProduct = {
//         ...values,
//         key: Date.now().toString(),
//         image: "https://via.placeholder.com/30",
//       };
//       setProducts((prev) => [...prev, newProduct]);
//       message.success("Product added successfully");
//     }
//     setIsModalOpen(false);
//   };

//   // --- Filtering Logic ---
//   const filteredData = useMemo(() => {
//     return products.filter((item) => {
//       const matchesSearch = item.name
//         .toLowerCase()
//         .includes(searchText.toLowerCase());
//       const matchesCategory =
//         item.type === categoryFilter || item.productType === categoryFilter;
//       return matchesSearch && matchesCategory;
//     });
//   }, [products, searchText, categoryFilter]);

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       render: (text: string, record: any) => (
//         <Space>
//           <Image src={record.image} width={30} height={30} alt={text} />
//           <Text strong>{text}</Text>
//         </Space>
//       ),
//     },
//     { title: "Category", dataIndex: "category", key: "category" },
//     { title: "Price", dataIndex: "price", key: "price" },
//     {
//       title: "Size/Color",
//       dataIndex: "specification",
//       key: "specification",
//       render: (_: any, record: any) =>
//         record.specification ||
//         `${record.size || "N/A"}, ${record.color || "N/A"}`,
//     },
//     { title: "Discount", dataIndex: "discount", key: "discount" },
//     {
//       title: "Action",
//       key: "action",
//       render: (_: any, record: any) => (
//         <Space size="middle">
//           <Button
//             icon={<EditOutlined />}
//             size="small"
//             onClick={() => handleOpenEditModal(record)}
//           >
//             Edit
//           </Button>
//           <Button icon={<DeleteOutlined />} danger size="small">
//             Delete
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div
//       style={{ background: "#f8f9fa", padding: "20px", borderRadius: "8px" }}
//     >
//       <Row
//         gutter={[16, 16]}
//         justify="space-between"
//         align="middle"
//         style={{ marginBottom: "24px" }}
//       >
//         <Col xs={24} md={18} flex="auto">
//           <Input
//             placeholder="Search Products"
//             prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
//             style={{ borderRadius: "8px", height: "45px" }}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//         </Col>
//         <Col
//           xs={24}
//           md={6}
//           style={{ textAlign: screens.md ? "right" : "left" }}
//         >
//           <Button
//             type="primary"
//             icon={<PlusOutlined />}
//             size="large"
//             block={!screens.md}
//             style={{ borderRadius: "8px", height: "45px" }}
//             onClick={handleOpenAddModal}
//           >
//             Add Product
//           </Button>
//         </Col>
//       </Row>

//       <div style={{ marginBottom: "16px" }}>
//         <Select
//           defaultValue="Physical"
//           variant="borderless"
//           style={{ width: 120, fontWeight: "bold", fontSize: "16px" }}
//           onChange={(value) => setCategoryFilter(value)}
//           options={[
//             { value: "Physical", label: "Physical" },
//             { value: "Digital", label: "Digital" },
//           ]}
//         />
//       </div>

//       {/* DESKTOP TABLE VIEW */}
//       {screens.md ? (
//         <ConfigProvider
//           theme={{
//             components: { Table: { headerBg: "#fff", headerColor: "#000" } },
//           }}
//         >
//           <Table
//             columns={columns}
//             dataSource={filteredData}
//             pagination={{
//               pageSize: 5,
//               placement: ["bottom"] as any,
//               showTotal: (total, range) =>
//                 `Showing ${range[0]} to ${range[1]} of ${total} results`,
//             }}
//             style={{
//               background: "#fff",
//               borderRadius: "12px",
//               border: "1px solid #f0f0f0",
//               overflow: "hidden",
//             }}
//           />
//         </ConfigProvider>
//       ) : (
//         /* MOBILE CARD VIEW */
//         <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
//           {filteredData.map((item) => (
//             <Card
//               key={item.key}
//               style={{ borderRadius: "12px", border: "1px solid #f0f0f0" }}
//               actions={[
//                 <EditOutlined
//                   key="edit"
//                   onClick={() => handleOpenEditModal(item)}
//                 />,
//                 <DeleteOutlined key="delete" style={{ color: "red" }} />,
//               ]}
//             >
//               <Card.Meta
//                 avatar={
//                   <Image
//                     src={item.image}
//                     width={40}
//                     height={40}
//                     alt={item.name}
//                     style={{ borderRadius: "4px" }}
//                   />
//                 }
//                 title={item.name}
//                 description={item.category}
//               />
//               <div style={{ marginTop: "16px" }}>
//                 <p>
//                   <strong>Price:</strong> {item.price}
//                 </p>
//                 <p>
//                   <strong>Spec:</strong>{" "}
//                   {item.specification ||
//                     `${item.size || "N/A"}, ${item.color || "N/A"}`}
//                 </p>
//                 <p>
//                   <strong>Discount:</strong> {item.discount}
//                 </p>
//               </div>
//             </Card>
//           ))}
//           {filteredData.length === 0 && (
//             <Text type="secondary">No products found.</Text>
//           )}
//         </div>
//       )}

//       <ProductFormModal
//         open={isModalOpen}
//         initialValues={selectedProduct}
//         onCancel={() => setIsModalOpen(false)}
//         onFinish={handleFormFinish}
//       />
//     </div>
//   );
// }

//TODO:
"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Input,
  Select,
  Space,
  Row,
  Col,
  Typography,
  ConfigProvider,
  Card,
  Grid,
  App,
  Modal,
  Popconfirm,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import ProductFormModal from "./ProductFormModal";
import { productService } from "@/src/services/productService";

const { Text } = Typography;
const { useBreakpoint } = Grid;

interface ProductTableProps {
  initialProducts?: any[];
}

export default function ProductTable({
  initialProducts = [],
}: ProductTableProps) {
  const screens = useBreakpoint();
  const { message } = App.useApp();

  const [products, setProducts] = useState<any[]>(initialProducts);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [productTypeFilter, setProductTypeFilter] = useState<
    "" | "Physical" | "Digital"
  >("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  // --- Fetch products from server ---
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const apiType =
          productTypeFilter === "Physical"
            ? "physical"
            : productTypeFilter === "Digital"
              ? "digital"
              : "";

        const res = await productService.getProducts(currentPage, apiType);

        const formatted = res.results.map((item: any) => ({
          key: item.product_id.toString(),
          name: item.name,
          category: item.category_name,
          price: `SAR-${item.price}`,
          specification: `${item.size || "N/A"}, ${item.color || "N/A"}`,
          discount: item.discount_percentage
            ? `${item.discount_percentage}%`
            : "0%",
          type: item.product_type === "physical" ? "Physical" : "Digital",
          image:
            item.images?.[0]?.image_url || "https://via.placeholder.com/40",
          size: item.size,
          color: item.color,
        }));

        setProducts(formatted);
        setTotalCount(res.count);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        message.error("Failed to load products. Please try again later.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, productTypeFilter, message]);

  // Extract fetch into reusable function
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const apiType =
        productTypeFilter === "Physical"
          ? "physical"
          : productTypeFilter === "Digital"
            ? "digital"
            : "";
      const res = await productService.getProducts(currentPage, apiType);

      const formatted = res.results.map((item: any) => ({
        key: item.product_id.toString(),
        name: item.name,
        category: item.category_name,
        price: `SAR-${item.price}`, // display only
        rawPrice: item.price, // ← for form
        description: item.description,
        specification: `${item.size || "N/A"}, ${item.color || "N/A"}`,
        discount: item.discount_percentage
          ? `${item.discount_percentage}%`
          : "0%",
        discount_percentage: item.discount_percentage, // ← for form
        type: item.product_type === "physical" ? "Physical" : "Digital",
        image: item.images?.[0]?.image_url || "https://via.placeholder.com/40",
        size: item.size,
        color: item.color,
        // categoryId: item.category,
        categoryId: Number(item.category),
        // ← critical for edit
        region: item.region,
        brand: item.brand,
        card_expiry_date: item.card_expiry_date,
        code_file_url: item.code_file_url,
        images: item.images, // for prefill
      }));

      setProducts(formatted);
      setTotalCount(res.count);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      message.error("Failed to load products");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage, productTypeFilter]);

  // Delete handler
  const handleDelete = async (id: string) => {
    try {
      await productService.deleteProduct(id);
      message.success("Product deleted successfully");
      fetchProducts(); // refresh the list
    } catch (err) {
      message.error("Failed to delete product");
    }
  };

  // Update edit handler (no change needed – now passes full record)
  const handleOpenEditModal = (record: any) => {
    setSelectedProduct(record);
    setIsModalOpen(true);
  };
  // --- Filtering (search by name client-side) ---
  const filteredData = products.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: any) => (
        <Space>
          <Image
            src={record.image || "https://via.placeholder.com/30"}
            width={30}
            height={30}
            alt={"img"}
          />
          <Text strong>{text}</Text>
        </Space>
      ),
    },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Size/Color",
      dataIndex: "specification",
      key: "specification",
      render: (_: any, record: any) =>
        record.specification ||
        `${record.size || "N/A"}, ${record.color || "N/A"}`,
    },
    { title: "Discount", dataIndex: "discount", key: "discount" },
    {
      title: "Action",
      key: "action",
      align: "center" as const, // ← add "as const"
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            size="small"
            onClick={() => handleOpenEditModal(record)}
          >
            Edit
          </Button>

          <Popconfirm
            title="Delete Product"
            description={
              <span>
                Are you sure you want to delete <strong>{record.name}</strong>?
              </span>
            }
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ danger: true }}
          >
            <Button
              danger
              type="primary"
              size="small"
              icon={<DeleteOutlined />}
              style={{
                backgroundColor: "#DC2626",
                border: "none",
              }}
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div
      style={{ background: "#f8f9fa", padding: "20px", borderRadius: "8px" }}
    >
      <Row
        gutter={[16, 16]}
        justify="space-between"
        align="middle"
        style={{ marginBottom: "24px" }}
      >
        <Col xs={24} md={18} flex="auto">
          <Input
            placeholder="Search Products"
            prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
            style={{ borderRadius: "8px", height: "45px" }}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Col>
        <Col
          xs={24}
          md={6}
          style={{ textAlign: screens.md ? "right" : "left" }}
        >
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            block={!screens.md}
            style={{ borderRadius: "8px", height: "45px" }}
            onClick={() => {
              setSelectedProduct(null); // ← important: null = add mode
              setIsModalOpen(true);
            }}
          >
            Add Product
          </Button>
        </Col>
      </Row>

      <div style={{ marginBottom: "16px" }}>
        <Select
          defaultValue=""
          style={{ width: 120, fontWeight: "bold", fontSize: "16px" }}
          onChange={(value) => {
            setProductTypeFilter(value as "" | "Physical" | "Digital");
            setCurrentPage(1);
          }}
          options={[
            { value: "", label: "All" },
            { value: "Physical", label: "Physical" },
            { value: "Digital", label: "Digital" },
          ]}
        />
      </div>

      {/* DESKTOP TABLE VIEW */}
      {screens.md ? (
        <ConfigProvider
          theme={{
            components: { Table: { headerBg: "#fff", headerColor: "#000" } },
          }}
        >
          <Table
            columns={columns}
            dataSource={filteredData}
            loading={loading}
            pagination={{
              current: currentPage,
              pageSize: 6,
              total: totalCount,
              onChange: (page) => setCurrentPage(page),
              showTotal: (total, range) =>
                `Showing ${range[0]} to ${range[1]} of ${total} results`,
            }}
            locale={{ emptyText: "No products found." }}
            style={{
              background: "#fff",
              borderRadius: "12px",
              border: "1px solid #f0f0f0",
              overflow: "hidden",
            }}
          />
        </ConfigProvider>
      ) : (
        /* MOBILE CARD VIEW */
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {filteredData.map((item) => (
            <Card
              key={item.key}
              style={{ borderRadius: "12px", border: "1px solid #f0f0f0" }}
              actions={[
                <EditOutlined
                  key="edit"
                  onClick={() => handleOpenEditModal(item)}
                />,
                <DeleteOutlined key="delete" style={{ color: "red" }} />,
              ]}
            >
              <Card.Meta
                avatar={
                  <Image
                    src={item?.image || "https://via.placeholder.com/40"}
                    width={40}
                    height={40}
                    alt={"Product Image"}
                    style={{ borderRadius: "4px" }}
                  />
                }
                title={item.name}
                description={item.category}
              />
              <div style={{ marginTop: "16px" }}>
                <p>
                  <strong>Price:</strong> {item.price}
                </p>
                <p>
                  <strong>Spec:</strong>{" "}
                  {item.specification ||
                    `${item.size || "N/A"}, ${item.color || "N/A"}`}
                </p>
                <p>
                  <strong>Discount:</strong> {item.discount}
                </p>
              </div>
            </Card>
          ))}
          {filteredData.length === 0 && (
            <Text type="secondary">No products found.</Text>
          )}
        </div>
      )}

      <ProductFormModal
        open={isModalOpen}
        initialValues={selectedProduct}
        onCancel={() => setIsModalOpen(false)}
        onSuccess={fetchProducts} // ← real refetch after create/edit
        messageApi={message}
      />
    </div>
  );
}
