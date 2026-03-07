/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/orders/[id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Spin, message } from "antd";
import DashboardLayout from "@/src/components/layout/DashboardLayout";
import OrderDetailView from "@/src/components/orders/OrderDetailView";
import { orderService, ShopOrderDetail } from "@/src/services/orderService";

export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<ShopOrderDetail | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchDetail = async () => {
    try {
      const data = await orderService.getShopOrderDetail(params.id as string);
      setOrder(data);
    } catch (error) {
      message.error("Failed to load order details");
      router.push("/orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.id) fetchDetail();
  }, [params.id]);

  return (
    <DashboardLayout>
      {loading ? (
        <div style={{ textAlign: "center", padding: "100px" }}>
          <Spin size="large" />
        </div>
      ) : (
        <OrderDetailView
          order={order}
          onBack={() => router.push("/orders")}
          refreshData={fetchDetail}
        />
      )}
    </DashboardLayout>
  );
}
