/* eslint-disable @typescript-eslint/no-explicit-any */

// src/app/orders/[id]/page.tsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { Spin, message } from "antd";
// import DashboardLayout from "@/src/components/layout/DashboardLayout";
// import OrderDetailView from "@/src/components/orders/OrderDetailView";
// import { orderService, ShopOrderDetail } from "@/src/services/orderService";

// export default function OrderDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const [order, setOrder] = useState<ShopOrderDetail | null>(null);
//   const [loading, setLoading] = useState(true);

//   const fetchDetail = async () => {
//     try {
//       const data = await orderService.getShopOrderDetail(params.id as string);
//       setOrder(data);
//     } catch (error) {
//       message.error("Failed to load order details");
//       router.push("/orders");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (params.id) fetchDetail();
//   }, [params.id]);

//   return (
//     <DashboardLayout>
//       {loading ? (
//         <div style={{ textAlign: "center", padding: "100px" }}>
//           <Spin size="large" />
//         </div>
//       ) : (
//         <OrderDetailView
//           order={order}
//           onBack={() => router.push("/orders")}
//           refreshData={fetchDetail}
//         />
//       )}
//     </DashboardLayout>
//   );
// }

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Spin, message } from "antd";
import DashboardLayout from "@/src/components/layout/DashboardLayout";
import OrderDetailView from "@/src/components/orders/OrderDetailView";
import { orderService } from "@/src/services/orderService";
import { auctionOrderService } from "@/src/services/auctionOrderService";

export default function OrderDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Determine if this is an auction or a shop order
  const orderType = searchParams.get("type") || "shop";

  const fetchDetail = async () => {
    setLoading(true);
    try {
      if (orderType === "auction") {
        const data: any = await auctionOrderService.getAuctionOrderDetail(
          params.id as string,
        );

        const normalizedAuction = {
          order_id: data.claim_id,
          status: data.delivery_status,
          total_amount: data.current_price,
          user_information: data.user_information,

          // Correctly map the array from the API response
          // If your API returns 'transaction_history', map it to 'auction_history' for the component
          auction_history:
            data.transaction_history?.map((item: any) => ({
              transaction_number: item.transaction_number,
              amount_sar: item.amount_sar,
              coins_added: item.coins_added,
              date: item.date,
            })) || [],
        };

        setOrder(normalizedAuction);
      } else {
        const data = await orderService.getShopOrderDetail(params.id as string);
        setOrder(data);
      }
    } catch (error) {
      message.error("Failed to load details");
      router.push("/orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.id) fetchDetail();
  }, [params.id, orderType]);

  // Handle "Mark as Delivered" based on type
  const handleMarkDelivered = async () => {
    try {
      if (orderType === "auction") {
        await auctionOrderService.markAuctionAsDelivered(params.id as string);
      } else {
        await orderService.markAsDelivered(params.id as string);
      }
      message.success("Order marked as delivered");
      fetchDetail();
    } catch (error) {
      message.error("Failed to update status");
    }
  };

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
          orderType={orderType}
          // Pass the specific handler to the view
          onMarkDelivered={handleMarkDelivered}
          refreshData={fetchDetail}
        />
      )}
    </DashboardLayout>
  );
}
