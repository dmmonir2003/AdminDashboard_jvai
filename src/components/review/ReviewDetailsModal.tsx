/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import { Modal, Button, Rate, Typography } from "antd";
// import { CloseOutlined } from "@ant-design/icons";

// const { Text } = Typography;

// interface ReviewDetailsModalProps {
//   open: boolean;
//   review: any;
//   onClose: () => void;
//   onDelete: (key: string) => void;
// }

// export default function ReviewDetailsModal({
//   open,
//   review,
//   onClose,
//   onDelete,
// }: ReviewDetailsModalProps) {
//   if (!review) return null;

//   return (
//     <Modal
//       open={open}
//       onCancel={onClose}
//       footer={null}
//       width={400}
//       closeIcon={<CloseOutlined />}
//       centered
//       styles={{
//         body: { padding: "32px 24px" },
//       }}
//     >
//       <div>
//         <div
//           style={{
//             fontSize: "20px",
//             fontWeight: 600,
//             marginBottom: "24px",
//           }}
//         >
//           Review Details
//         </div>

//         <div style={{ marginBottom: "24px" }}>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginBottom: "16px",
//             }}
//           >
//             <div style={{ flex: 1 }}>
//               <Text
//                 type="secondary"
//                 style={{
//                   fontSize: "13px",
//                   display: "block",
//                   marginBottom: "4px",
//                 }}
//               >
//                 User
//               </Text>
//               <Text strong style={{ fontSize: "14px" }}>
//                 {review.userName}
//               </Text>
//             </div>
//             <div style={{ flex: 1 }}>
//               <Text
//                 type="secondary"
//                 style={{
//                   fontSize: "13px",
//                   display: "block",
//                   marginBottom: "4px",
//                 }}
//               >
//                 Date
//               </Text>
//               <Text style={{ fontSize: "14px" }}>{review.date}</Text>
//             </div>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginBottom: "16px",
//             }}
//           >
//             <div style={{ flex: 1 }}>
//               <Text
//                 type="secondary"
//                 style={{
//                   fontSize: "13px",
//                   display: "block",
//                   marginBottom: "4px",
//                 }}
//               >
//                 Product
//               </Text>
//               <Text strong style={{ fontSize: "14px" }}>
//                 {review.product}
//               </Text>
//             </div>
//             <div style={{ flex: 1 }}>
//               <Text
//                 type="secondary"
//                 style={{
//                   fontSize: "13px",
//                   display: "block",
//                   marginBottom: "4px",
//                 }}
//               >
//                 Rating
//               </Text>
//               <Rate
//                 disabled
//                 defaultValue={review.rating}
//                 style={{ fontSize: "16px" }}
//               />
//             </div>
//           </div>

//           <div>
//             <Text
//               type="secondary"
//               style={{
//                 fontSize: "13px",
//                 display: "block",
//                 marginBottom: "8px",
//               }}
//             >
//               Review
//             </Text>
//             <div
//               style={{
//                 padding: "12px",
//                 backgroundColor: "#fafafa",
//                 borderRadius: "6px",
//                 fontSize: "14px",
//                 lineHeight: "1.6",
//                 color: "#595959",
//               }}
//             >
//               {review.fullReview}
//             </div>
//           </div>
//         </div>

//         <Button
//           danger
//           block
//           size="large"
//           onClick={() => onDelete(review.key)}
//           style={{
//             height: "45px",
//             borderRadius: "6px",
//             fontWeight: 500,
//             fontSize: "15px",
//           }}
//         >
//           Delete Review
//         </Button>
//       </div>
//     </Modal>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Rate,
  Typography,
  Spin,
  App,
  Space,
  Row,
  Col,
  Empty,
} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { reviewService } from "@/src/services/reviewService";

const { Text, Title } = Typography;

interface ReviewDetailsModalProps {
  open: boolean;
  reviewId: number | null;
  onClose: () => void;
  onDeleteSuccess: () => void;
}

export default function ReviewDetailsModal({
  open,
  reviewId,
  onClose,
  onDeleteSuccess,
}: ReviewDetailsModalProps) {
  const { message } = App.useApp();
  const [detail, setDetail] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (open && reviewId) {
      setLoading(true);
      reviewService
        .getReviewById(reviewId)
        .then((res) => setDetail(res))
        .catch(() => message.error("Failed to load details"))
        .finally(() => setLoading(false));
    } else {
      setDetail(null);
    }
  }, [open, reviewId, message]);

  const handleDelete = async () => {
    if (!reviewId) return;
    setDeleting(true);
    try {
      await reviewService.deleteReview(reviewId);
      message.success("Review deleted successfully");
      onDeleteSuccess();
    } catch (err) {
      message.error("Failed to delete review");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={450}
      closeIcon={<CloseOutlined />}
      centered
      styles={{ body: { padding: "24px" } }}
    >
      {loading ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <Spin />
        </div>
      ) : detail ? (
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Title level={4} style={{ margin: 0 }}>
            Review Details
          </Title>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                User
              </Text>
              <div style={{ fontWeight: 600 }}>{detail.user?.user_name}</div>
              <div style={{ fontSize: "12px", color: "#8c8c8c" }}>
                {detail.user?.user_email}
              </div>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                Date
              </Text>
              <div>{new Date(detail.created_at).toLocaleDateString()}</div>
            </Col>
            <Col span={24}>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                Product
              </Text>
              <div style={{ fontWeight: 600 }}>
                {detail.product?.product_name}
              </div>
            </Col>
            <Col span={24}>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                Rating
              </Text>
              <div>
                <Rate disabled defaultValue={detail.rating} />
              </div>
            </Col>
            <Col span={24}>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                Comment
              </Text>
              <div
                style={{
                  padding: "12px",
                  background: "#f5f5f5",
                  borderRadius: "8px",
                  marginTop: "4px",
                  fontSize: "14px",
                }}
              >
                {detail.comment}
              </div>
            </Col>
          </Row>

          <Button
            danger
            block
            size="large"
            loading={deleting}
            onClick={handleDelete}
            style={{ height: "48px", borderRadius: "8px", marginTop: "8px" }}
          >
            Delete Review
          </Button>
        </Space>
      ) : (
        <Empty />
      )}
    </Modal>
  );
}
