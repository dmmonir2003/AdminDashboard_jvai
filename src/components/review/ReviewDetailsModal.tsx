/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Modal, Button, Rate, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface ReviewDetailsModalProps {
  open: boolean;
  review: any;
  onClose: () => void;
  onDelete: (key: string) => void;
}

export default function ReviewDetailsModal({
  open,
  review,
  onClose,
  onDelete,
}: ReviewDetailsModalProps) {
  if (!review) return null;

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={400}
      closeIcon={<CloseOutlined />}
      centered
      styles={{
        body: { padding: "32px 24px" },
      }}
    >
      <div>
        <div
          style={{
            fontSize: "20px",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          Review Details
        </div>

        <div style={{ marginBottom: "24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <div style={{ flex: 1 }}>
              <Text
                type="secondary"
                style={{
                  fontSize: "13px",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                User
              </Text>
              <Text strong style={{ fontSize: "14px" }}>
                {review.userName}
              </Text>
            </div>
            <div style={{ flex: 1 }}>
              <Text
                type="secondary"
                style={{
                  fontSize: "13px",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Date
              </Text>
              <Text style={{ fontSize: "14px" }}>{review.date}</Text>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <div style={{ flex: 1 }}>
              <Text
                type="secondary"
                style={{
                  fontSize: "13px",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Product
              </Text>
              <Text strong style={{ fontSize: "14px" }}>
                {review.product}
              </Text>
            </div>
            <div style={{ flex: 1 }}>
              <Text
                type="secondary"
                style={{
                  fontSize: "13px",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Rating
              </Text>
              <Rate
                disabled
                defaultValue={review.rating}
                style={{ fontSize: "16px" }}
              />
            </div>
          </div>

          <div>
            <Text
              type="secondary"
              style={{
                fontSize: "13px",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Review
            </Text>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#fafafa",
                borderRadius: "6px",
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#595959",
              }}
            >
              {review.fullReview}
            </div>
          </div>
        </div>

        <Button
          danger
          block
          size="large"
          onClick={() => onDelete(review.key)}
          style={{
            height: "45px",
            borderRadius: "6px",
            fontWeight: 500,
            fontSize: "15px",
          }}
        >
          Delete Review
        </Button>
      </div>
    </Modal>
  );
}
