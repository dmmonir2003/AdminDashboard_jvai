/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState, useMemo } from "react";
// import {
//   Table,
//   Button,
//   Typography,
//   Space,
//   Popconfirm,
//   Card,
//   Input,
//   Select,
//   Rate,
// } from "antd";
// import { EyeOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";
// import ReviewDetailsModal from "./ReviewDetailsModal";
// import "./ReviewsTable.css";
// import { App } from "antd";

// const { Title } = Typography;

// export default function ReviewsTable() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedReview, setSelectedReview] = useState<any>(null);
//   const [searchText, setSearchText] = useState("");
//   const [productFilter, setProductFilter] = useState("All Products");
//   const [ratingFilter, setRatingFilter] = useState("All Ratings");
//   const { message } = App.useApp();
//   const [dataSource] = useState([
//     {
//       key: "1",
//       userName: "Jhon Smith",
//       product: "Gigabyte Motherboard",
//       rating: 3,
//       review: "Lorem Ipsum is simply dummy...",
//       date: "Jan 24, 2026",
//       fullReview:
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//     },
//     {
//       key: "2",
//       userName: "Sarah Johnson",
//       product: "Havit Mouse",
//       rating: 3,
//       review: "Lorem Ipsum is simply dummy...",
//       date: "Jan 24, 2026",
//       fullReview:
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//     },
//     {
//       key: "3",
//       userName: "Mike Wilson",
//       product: "Iphone 17 Pro Max",
//       rating: 3,
//       review: "Lorem Ipsum is simply dummy...",
//       date: "Jan 24, 2026",
//       fullReview:
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//     },
//     {
//       key: "4",
//       userName: "Champ Ullah",
//       product: "EJ fabric cap xl",
//       rating: 3,
//       review: "Lorem Ipsum is simply dummy...",
//       date: "Jan 24, 2026",
//       fullReview:
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//     },
//     {
//       key: "5",
//       userName: "Alex Brown",
//       product: "Gigabyte Motherboard",
//       rating: 5,
//       review: "Excellent product! Highly recommend...",
//       date: "Jan 23, 2026",
//       fullReview:
//         "Excellent product! The quality is outstanding and exceeded my expectations.",
//     },
//     {
//       key: "6",
//       userName: "Emma Davis",
//       product: "Havit Mouse",
//       rating: 4,
//       review: "Good mouse for the price...",
//       date: "Jan 22, 2026",
//       fullReview:
//         "Good mouse for the price. Works well and comfortable to use.",
//     },
//     {
//       key: "7",
//       userName: "John Doe",
//       product: "Iphone 17 Pro Max",
//       rating: 5,
//       review: "Best phone ever!...",
//       date: "Jan 21, 2026",
//       fullReview:
//         "Best phone ever! The camera quality is amazing and battery life is great.",
//     },
//     {
//       key: "8",
//       userName: "Jane Smith",
//       product: "EJ fabric cap xl",
//       rating: 2,
//       review: "Not as expected...",
//       date: "Jan 20, 2026",
//       fullReview: "Not as expected. The fabric quality could be better.",
//     },
//   ]);

//   // Filter data based on search and filters
//   const filteredData = useMemo(() => {
//     return dataSource.filter((item) => {
//       // Search filter
//       const matchesSearch = item.userName
//         .toLowerCase()
//         .includes(searchText.toLowerCase());

//       // Product filter
//       const matchesProduct =
//         productFilter === "All Products" || item.product === productFilter;

//       // Rating filter
//       const matchesRating =
//         ratingFilter === "All Ratings" ||
//         item.rating === parseInt(ratingFilter);

//       return matchesSearch && matchesProduct && matchesRating;
//     });
//   }, [dataSource, searchText, productFilter, ratingFilter]);

//   const handleDelete = (key: string) => {
//     message.success("Review deleted successfully");
//   };

//   const handleView = (record: any) => {
//     setSelectedReview(record);
//     setIsModalOpen(true);
//   };

//   const columns = [
//     {
//       title: "User Name",
//       dataIndex: "userName",
//       key: "userName",
//       render: (text: string) => <span style={{ fontWeight: 500 }}>{text}</span>,
//     },
//     {
//       title: "Product",
//       dataIndex: "product",
//       key: "product",
//     },
//     {
//       title: "Rating",
//       dataIndex: "rating",
//       key: "rating",
//       render: (rating: number) => (
//         <Rate disabled defaultValue={rating} style={{ fontSize: "16px" }} />
//       ),
//     },
//     {
//       title: "Review",
//       dataIndex: "review",
//       key: "review",
//     },
//     {
//       title: "Action",
//       key: "action",
//       align: "right" as const,
//       render: (_: any, record: any) => (
//         <Space size="small">
//           <Button
//             icon={<EyeOutlined />}
//             onClick={() => handleView(record)}
//             style={{
//               borderRadius: "6px",
//               borderColor: "#d9d9d9",
//             }}
//           >
//             View
//           </Button>
//           <Popconfirm
//             title="Delete review?"
//             onConfirm={() => handleDelete(record.key)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button
//               danger
//               icon={<DeleteOutlined />}
//               style={{
//                 borderRadius: "6px",
//                 borderColor: "#ffccc7",
//                 color: "#ff4d4f",
//               }}
//             >
//               Delete
//             </Button>
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ];

//   // Mobile Card View
//   const renderMobileCards = () => (
//     <div className="mobile-card-view">
//       {filteredData.map((record) => (
//         <Card
//           key={record.key}
//           style={{
//             marginBottom: "16px",
//             borderRadius: "8px",
//             border: "1px solid #f0f0f0",
//           }}
//         >
//           <div style={{ marginBottom: "12px" }}>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "flex-start",
//                 marginBottom: "8px",
//               }}
//             >
//               <div style={{ flex: 1 }}>
//                 <div
//                   style={{
//                     fontWeight: 600,
//                     fontSize: "15px",
//                     marginBottom: "4px",
//                   }}
//                 >
//                   {record.userName}
//                 </div>
//                 <div
//                   style={{
//                     fontSize: "13px",
//                     color: "#666",
//                     marginBottom: "6px",
//                   }}
//                 >
//                   {record.product}
//                 </div>
//                 <Rate
//                   disabled
//                   defaultValue={record.rating}
//                   style={{ fontSize: "14px" }}
//                 />
//               </div>
//             </div>
//             <div style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>
//               {record.review}
//             </div>
//           </div>
//           <Space
//             size="small"
//             style={{ width: "100%", justifyContent: "flex-end" }}
//           >
//             <Button
//               icon={<EyeOutlined />}
//               onClick={() => handleView(record)}
//               style={{ borderRadius: "6px", fontSize: "13px" }}
//             >
//               View
//             </Button>
//             <Popconfirm
//               title="Delete review?"
//               onConfirm={() => handleDelete(record.key)}
//               okText="Yes"
//               cancelText="No"
//             >
//               <Button
//                 danger
//                 icon={<DeleteOutlined />}
//                 style={{
//                   borderRadius: "6px",
//                   borderColor: "#ffccc7",
//                   color: "#ff4d4f",
//                   fontSize: "13px",
//                 }}
//               >
//                 Delete
//               </Button>
//             </Popconfirm>
//           </Space>
//         </Card>
//       ))}
//       {filteredData.length === 0 && (
//         <div style={{ textAlign: "center", padding: "40px", color: "#8c8c8c" }}>
//           No reviews found
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="reviews-container">
//       <div className="reviews-header">
//         <div>
//           <Title level={2} style={{ margin: 0, marginBottom: "8px" }}>
//             Reviews
//           </Title>
//           <div style={{ color: "#8c8c8c", fontSize: "14px" }}>
//             Manage platform all reviews
//           </div>
//         </div>
//       </div>

//       <div className="reviews-filters">
//         <Input
//           placeholder="Search users"
//           prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           style={{
//             width: "250px",
//             borderRadius: "6px",
//           }}
//           className="search-input"
//         />
//         <Select
//           value={productFilter}
//           onChange={setProductFilter}
//           style={{ width: "200px", borderRadius: "6px" }}
//           className="filter-select"
//         >
//           <Select.Option value="All Products">All Products</Select.Option>
//           <Select.Option value="Gigabyte Motherboard">
//             Gigabyte Motherboard
//           </Select.Option>
//           <Select.Option value="Havit Mouse">Havit Mouse</Select.Option>
//           <Select.Option value="Iphone 17 Pro Max">
//             Iphone 17 Pro Max
//           </Select.Option>
//           <Select.Option value="EJ fabric cap xl">
//             EJ fabric cap xl
//           </Select.Option>
//         </Select>
//         <Select
//           value={ratingFilter}
//           onChange={setRatingFilter}
//           style={{ width: "200px", borderRadius: "6px" }}
//           className="filter-select"
//         >
//           <Select.Option value="All Ratings">All Ratings</Select.Option>
//           <Select.Option value="5">5 Stars</Select.Option>
//           <Select.Option value="4">4 Stars</Select.Option>
//           <Select.Option value="3">3 Stars</Select.Option>
//           <Select.Option value="2">2 Stars</Select.Option>
//           <Select.Option value="1">1 Star</Select.Option>
//         </Select>
//       </div>

//       {/* Desktop Table View */}
//       <div className="desktop-table-view">
//         <Table
//           columns={columns}
//           dataSource={filteredData}
//           pagination={{
//             total: filteredData.length,
//             showSizeChanger: false,
//             pageSize: 4,
//             itemRender: (page, type, originalElement) => {
//               if (type === "prev") return <a>Previous</a>;
//               if (type === "next") return <a>Next</a>;
//               return originalElement;
//             },
//           }}
//           style={{
//             background: "#fff",
//             borderRadius: "8px",
//             border: "1px solid #f0f0f0",
//             overflow: "hidden",
//           }}
//           locale={{
//             emptyText: "No reviews found",
//           }}
//         />
//       </div>

//       {/* Mobile Card View */}
//       {renderMobileCards()}

//       <div className="results-info">
//         Showing {filteredData.length > 0 ? "1" : "0"} to{" "}
//         {Math.min(4, filteredData.length)} of {filteredData.length} results
//       </div>

//       <ReviewDetailsModal
//         open={isModalOpen}
//         review={selectedReview}
//         onClose={() => setIsModalOpen(false)}
//         onDelete={(key) => {
//           handleDelete(key);
//           setIsModalOpen(false);
//         }}
//       />
//     </div>
//   );
// }

// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import {
//   Table,
//   Button,
//   Typography,
//   Space,
//   Popconfirm,
//   Card,
//   Input,
//   Select,
//   Rate,
//   Empty,
//   Pagination,
//   Grid,
//   App,
// } from "antd";
// import { EyeOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";
// import ReviewDetailsModal from "./ReviewDetailsModal";
// import { reviewService } from "@/src/services/reviewService";
// import { productService } from "@/src/services/productService";
// import "./ReviewsTable.css";

// const { Title, Text } = Typography;
// const { useBreakpoint } = Grid;

// export default function ReviewsTable() {
//   const { message } = App.useApp();
//   const screens = useBreakpoint();
//   const isMobile = !screens.md;

//   // Data State
//   const [loading, setLoading] = useState(false);
//   const [reviews, setReviews] = useState<any[]>([]);
//   const [products, setProducts] = useState<any[]>([]);

//   // Modal State
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);

//   // Filter & Pagination State
//   const [total, setTotal] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchText, setSearchText] = useState("");
//   const [productFilter, setProductFilter] = useState<number | undefined>(
//     undefined,
//   );
//   const [ratingFilter, setRatingFilter] = useState<number | undefined>(
//     undefined,
//   );

//   // Fetch Products for dropdown
//   const fetchFilterProducts = async () => {
//     try {
//       const res = await productService.getProducts(1);
//       setProducts(res.results || []);
//     } catch (err) {
//       console.error("Filter products load failed");
//     }
//   };

//   const fetchReviews = useCallback(async () => {
//     setLoading(true);
//     try {
//       const res: any = await reviewService.getReviews({
//         page: currentPage,
//         search: searchText || undefined,
//         product_id: productFilter,
//         rating: ratingFilter,
//       });
//       setReviews(res.results || []);
//       setTotal(res.count || 0);
//     } catch (err) {
//       message.error("Failed to load reviews");
//     } finally {
//       setLoading(false);
//     }
//   }, [currentPage, searchText, productFilter, ratingFilter, message]);

//   useEffect(() => {
//     fetchFilterProducts();
//   }, []);
//   useEffect(() => {
//     fetchReviews();
//   }, [fetchReviews]);

//   const handleDelete = async (id: number) => {
//     try {
//       await reviewService.deleteReview(id);
//       message.success("Review deleted successfully");
//       if (reviews.length === 1 && currentPage > 1) {
//         setCurrentPage(currentPage - 1);
//       } else {
//         fetchReviews();
//       }
//     } catch (err) {
//       message.error("Delete failed");
//     }
//   };

//   const handleView = (id: number) => {
//     setSelectedReviewId(id);
//     setIsModalOpen(true);
//   };

//   const columns = [
//     {
//       title: "User Name",
//       dataIndex: "user_name",
//       key: "user_name",
//       render: (text: string) => <span style={{ fontWeight: 500 }}>{text}</span>,
//     },
//     { title: "Product", dataIndex: "product_name", key: "product_name" },
//     {
//       title: "Rating",
//       dataIndex: "rating",
//       key: "rating",
//       render: (rating: number) => (
//         <Rate disabled defaultValue={rating} style={{ fontSize: "14px" }} />
//       ),
//     },
//     { title: "Review", dataIndex: "comment_preview", key: "comment_preview" },
//     {
//       title: "Action",
//       key: "action",
//       align: "right" as const,
//       render: (_: any, record: any) => (
//         <Space size="small">
//           <Button
//             icon={<EyeOutlined />}
//             onClick={() => handleView(record.review_id)}
//           >
//             View
//           </Button>
//           <Popconfirm
//             title="Delete review?"
//             onConfirm={() => handleDelete(record.review_id)}
//           >
//             <Button danger icon={<DeleteOutlined />}>
//               Delete
//             </Button>
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ];

//   const paginationConfig = {
//     current: currentPage,
//     total: total,
//     pageSize: 10,
//     onChange: (page: number) => setCurrentPage(page),
//     showSizeChanger: false,
//     position: ["bottomRight"] as any,
//   };

//   return (
//     <div className="reviews-container">
//       <div className="reviews-header" style={{ marginBottom: "24px" }}>
//         <Title level={2} style={{ margin: 0 }}>
//           Reviews
//         </Title>
//         <Text type="secondary">Manage platform all reviews</Text>
//       </div>

//       <div
//         className="reviews-filters"
//         style={{
//           display: "flex",
//           gap: "12px",
//           marginBottom: "24px",
//           flexWrap: "wrap",
//         }}
//       >
//         <Input
//           placeholder="Search users"
//           prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//             setCurrentPage(1);
//           }}
//           style={{ width: isMobile ? "100%" : "250px" }}
//         />
//         <Select
//           placeholder="All Products"
//           allowClear
//           onChange={(val) => {
//             setProductFilter(val);
//             setCurrentPage(1);
//           }}
//           style={{ width: isMobile ? "100%" : "200px" }}
//         >
//           {products.map((p) => (
//             <Select.Option key={p.product_id} value={p.product_id}>
//               {p.name}
//             </Select.Option>
//           ))}
//         </Select>
//         <Select
//           placeholder="All Ratings"
//           allowClear
//           onChange={(val) => {
//             setRatingFilter(val);
//             setCurrentPage(1);
//           }}
//           style={{ width: isMobile ? "100%" : "150px" }}
//         >
//           {[5, 4, 3, 2, 1].map((num) => (
//             <Select.Option key={num} value={num}>
//               {num} Stars
//             </Select.Option>
//           ))}
//         </Select>
//       </div>

//       {!isMobile ? (
//         <Table
//           columns={columns}
//           dataSource={reviews}
//           rowKey="review_id"
//           loading={loading}
//           pagination={paginationConfig}
//           style={{
//             background: "#fff",
//             borderRadius: "8px",
//             border: "1px solid #f0f0f0",
//           }}
//         />
//       ) : (
//         <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//           {reviews.length > 0 ? (
//             reviews.map((item) => (
//               <Card
//                 key={item.review_id}
//                 style={{ borderRadius: "12px", border: "1px solid #f0f0f0" }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     marginBottom: "8px",
//                   }}
//                 >
//                   <Text strong>{item.user_name}</Text>
//                   <Rate
//                     disabled
//                     defaultValue={item.rating}
//                     style={{ fontSize: "12px" }}
//                   />
//                 </div>
//                 <div style={{ marginBottom: "4px" }}>
//                   <Text type="secondary" style={{ fontSize: "12px" }}>
//                     {item.product_name}
//                   </Text>
//                 </div>
//                 <div
//                   style={{
//                     marginBottom: "16px",
//                     fontSize: "13px",
//                     color: "#666",
//                   }}
//                 >
//                   {item.comment_preview}
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "flex-end",
//                     gap: "8px",
//                   }}
//                 >
//                   <Button
//                     size="small"
//                     icon={<EyeOutlined />}
//                     onClick={() => handleView(item.review_id)}
//                   >
//                     View
//                   </Button>
//                   <Popconfirm
//                     title="Delete?"
//                     onConfirm={() => handleDelete(item.review_id)}
//                   >
//                     <Button size="small" danger icon={<DeleteOutlined />}>
//                       Delete
//                     </Button>
//                   </Popconfirm>
//                 </div>
//               </Card>
//             ))
//           ) : (
//             <Empty />
//           )}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               marginTop: "24px",
//             }}
//           >
//             <Pagination {...paginationConfig} simple size="small" />
//           </div>
//         </div>
//       )}

//       <ReviewDetailsModal
//         open={isModalOpen}
//         reviewId={selectedReviewId}
//         onClose={() => {
//           setIsModalOpen(false);
//           setSelectedReviewId(null);
//         }}
//         onDeleteSuccess={() => {
//           fetchReviews();
//           setIsModalOpen(false);
//         }}
//       />
//     </div>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Table,
  Button,
  Typography,
  Space,
  Popconfirm,
  Card,
  Input,
  Select,
  Rate,
  Empty,
  Pagination,
  Grid,
  App,
} from "antd";
import { EyeOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import ReviewDetailsModal from "./ReviewDetailsModal";
import { reviewService } from "@/src/services/reviewService";
import { productService } from "@/src/services/productService";
import "./ReviewsTable.css";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

export default function ReviewsTable() {
  const { message } = App.useApp();
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  // Data State
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);

  // Filter & Pagination State
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [productFilter, setProductFilter] = useState<number | undefined>(
    undefined,
  );
  const [ratingFilter, setRatingFilter] = useState<number | undefined>(
    undefined,
  );

  // Fetch Products for dropdown
  const fetchFilterProducts = async () => {
    try {
      const res = await productService.getProducts(1);
      setProducts(res.results || []);
    } catch (err) {
      console.error("Filter products load failed");
    }
  };

  const fetchReviews = useCallback(async () => {
    setLoading(true);
    try {
      const res: any = await reviewService.getReviews({
        page: currentPage,
        search: searchText || undefined,
        product_id: productFilter,
        rating: ratingFilter,
      });
      // Correctly mapping the API response fields
      setReviews(res.results || []);
      setTotal(res.count || 0);
    } catch (err) {
      message.error("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  }, [currentPage, searchText, productFilter, ratingFilter, message]);

  useEffect(() => {
    fetchFilterProducts();
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const handleDelete = async (id: number) => {
    try {
      await reviewService.deleteReview(id);
      message.success("Review deleted successfully");
      // If we delete the last item on a page, move back one page
      if (reviews.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      } else {
        fetchReviews();
      }
    } catch (err) {
      message.error("Delete failed");
    }
  };

  const handleView = (id: number) => {
    setSelectedReviewId(id);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "User Name",
      dataIndex: "user_name",
      key: "user_name",
      render: (text: string) => <span style={{ fontWeight: 500 }}>{text}</span>,
    },
    { title: "Product", dataIndex: "product_name", key: "product_name" },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating: number) => (
        <Rate disabled defaultValue={rating} style={{ fontSize: "14px" }} />
      ),
    },
    { title: "Review", dataIndex: "comment_preview", key: "comment_preview" },
    {
      title: "Action",
      key: "action",
      align: "right" as const,
      render: (_: any, record: any) => (
        <Space size="small">
          <Button
            icon={<EyeOutlined />}
            onClick={() => handleView(record.review_id)}
          >
            View
          </Button>
          <Popconfirm
            title="Delete review?"
            onConfirm={() => handleDelete(record.review_id)}
          >
            <Button danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // Pagination configuration - Updated pageSize to 5 to match your API
  const paginationConfig = {
    current: currentPage,
    total: total,
    pageSize: 5,
    onChange: (page: number) => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    showSizeChanger: false,
    position: ["bottomRight"] as any,
  };

  return (
    <div className="reviews-container">
      <div className="reviews-header" style={{ marginBottom: "24px" }}>
        <Title level={2} style={{ margin: 0 }}>
          Reviews
        </Title>
        <Text type="secondary">Manage platform all reviews</Text>
      </div>

      <div
        className="reviews-filters"
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <Input
          placeholder="Search users"
          prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setCurrentPage(1); // Always reset to page 1 on filter change
          }}
          style={{ width: isMobile ? "100%" : "250px" }}
        />
        <Select
          placeholder="All Products"
          allowClear
          onChange={(val) => {
            setProductFilter(val);
            setCurrentPage(1);
          }}
          style={{ width: isMobile ? "100%" : "200px" }}
        >
          {products.map((p) => (
            <Select.Option key={p.product_id} value={p.product_id}>
              {p.name}
            </Select.Option>
          ))}
        </Select>
        <Select
          placeholder="All Ratings"
          allowClear
          onChange={(val) => {
            setRatingFilter(val);
            setCurrentPage(1);
          }}
          style={{ width: isMobile ? "100%" : "150px" }}
        >
          {[5, 4, 3, 2, 1].map((num) => (
            <Select.Option key={num} value={num}>
              {num} Stars
            </Select.Option>
          ))}
        </Select>
      </div>

      {!isMobile ? (
        <Table
          columns={columns}
          dataSource={reviews}
          rowKey="review_id"
          loading={loading}
          pagination={paginationConfig}
          style={{
            background: "#fff",
            borderRadius: "8px",
            border: "1px solid #f0f0f0",
          }}
        />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {reviews.length > 0 ? (
            reviews.map((item) => (
              <Card
                key={item.review_id}
                style={{ borderRadius: "12px", border: "1px solid #f0f0f0" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <Text strong>{item.user_name}</Text>
                  <Rate
                    disabled
                    defaultValue={item.rating}
                    style={{ fontSize: "12px" }}
                  />
                </div>
                <div style={{ marginBottom: "4px" }}>
                  <Text type="secondary" style={{ fontSize: "12px" }}>
                    {item.product_name}
                  </Text>
                </div>
                <div
                  style={{
                    marginBottom: "16px",
                    fontSize: "13px",
                    color: "#666",
                  }}
                >
                  {item.comment_preview}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "8px",
                  }}
                >
                  <Button
                    size="small"
                    icon={<EyeOutlined />}
                    onClick={() => handleView(item.review_id)}
                  >
                    View
                  </Button>
                  <Popconfirm
                    title="Delete?"
                    onConfirm={() => handleDelete(item.review_id)}
                  >
                    <Button size="small" danger icon={<DeleteOutlined />}>
                      Delete
                    </Button>
                  </Popconfirm>
                </div>
              </Card>
            ))
          ) : (
            <Empty />
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "24px",
              paddingBottom: "24px",
            }}
          >
            <Pagination {...paginationConfig} simple size="small" />
          </div>
        </div>
      )}

      <ReviewDetailsModal
        open={isModalOpen}
        reviewId={selectedReviewId}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedReviewId(null);
        }}
        onDeleteSuccess={() => {
          fetchReviews();
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}
