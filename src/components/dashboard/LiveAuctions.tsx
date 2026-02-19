/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React from "react";
// import { Card, Badge } from "antd";
// import { ClockCircleOutlined, TeamOutlined } from "@ant-design/icons";

// const liveAuctionsData = [
//   {
//     id: 1,
//     title: "Iphone 14 Pro Max",
//     price: "SAR 890",
//     time: "5 Minutes",
//     participants: 45,
//   },
//   {
//     id: 2,
//     title: "Macbook Pro",
//     price: "SAR 1200",
//     time: "5 Minutes",
//     participants: 45,
//   },
//   {
//     id: 3,
//     title: "Apple Watch Ultra",
//     price: "SAR 18920",
//     time: "5 Minutes",
//     participants: 45,
//   },
//   {
//     id: 4,
//     title: "Sony WH-1000XM5",
//     price: "SAR 500",
//     time: "2 Minutes",
//     participants: 12,
//   },
//   {
//     id: 5,
//     title: "iPad Air",
//     price: "SAR 2100",
//     time: "10 Minutes",
//     participants: 30,
//   },
// ];

// export default function LiveAuctions() {
//   return (
//     <Card
//       title="Live Auctions"
//       style={{
//         borderRadius: "12px",
//         boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
//       }}
//       styles={{
//         header: {
//           borderBottom: "none",
//           padding: "24px 24px 0",
//           fontSize: "20px",
//           fontWeight: "bold",
//         },
//         body: { padding: "0 24px 24px 24px" },
//       }}
//     >
//       <div
//         style={{ maxHeight: "300px", overflowY: "auto", overflowX: "hidden" }}
//       >
//         {liveAuctionsData.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               borderBottom: "1px solid #f0f0f0",
//               padding: "16px 12px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             {/* Left side */}
//             <div>
//               <div
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: "16px",
//                   marginBottom: "4px",
//                 }}
//               >
//                 {item.title}
//               </div>

//               <div style={{ color: "#8c8c8c", fontSize: "14px" }}>
//                 <ClockCircleOutlined style={{ marginRight: "4px" }} />
//                 {item.time}
//                 <TeamOutlined
//                   style={{ marginLeft: "12px", marginRight: "4px" }}
//                 />
//                 {item.participants}
//               </div>
//             </div>

//             {/* Right side */}
//             <div style={{ textAlign: "right" }}>
//               <div
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: "16px",
//                   marginBottom: "8px",
//                 }}
//               >
//                 {item.price}
//               </div>

//               <Badge
//                 count="Live"
//                 style={{
//                   backgroundColor: "#fff",
//                   color: "#000",
//                   border: "1.5px solid #000",
//                   fontWeight: "bold",
//                   padding: "0 10px",
//                 }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </Card>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { Card, Badge, Spin, Empty } from "antd";
import { ClockCircleOutlined, TeamOutlined } from "@ant-design/icons";
import { auctionService } from "@/src/services/auctionService";

export default function LiveAuctions() {
  const [liveAuctions, setLiveAuctions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [countdowns, setCountdowns] = useState<Record<number, string>>({});

  useEffect(() => {
    const fetchLiveAuctions = async () => {
      try {
        const data = await auctionService.getAllAuctions("publish");

        if (Array.isArray(data)) {
          setLiveAuctions(data);

          // Initialize countdown timers
          const initialCountdowns: Record<number, number> = {};

          data.forEach((item: any) => {
            const hMatch = item.remaining_time?.match(/(\d+)h/);
            const mMatch = item.remaining_time?.match(/(\d+)m/);
            const sMatch = item.remaining_time?.match(/(\d+)s/);

            const hours = hMatch ? parseInt(hMatch[1]) : 0;
            const minutes = mMatch ? parseInt(mMatch[1]) : 0;
            const seconds = sMatch ? parseInt(sMatch[1]) : 0;

            initialCountdowns[item.auction_id] =
              hours * 3600 + minutes * 60 + seconds;
          });

          startTimer(initialCountdowns);
        }
      } catch (error) {
        console.error("Failed to fetch live auctions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveAuctions();
  }, []);

  const startTimer = (initialSeconds: Record<number, number>) => {
    const secondsMap = { ...initialSeconds };

    const interval = setInterval(() => {
      const updatedCountdowns: Record<number, string> = {};

      Object.keys(secondsMap).forEach((key) => {
        const id = Number(key);
        let totalSecs = secondsMap[id];

        if (totalSecs <= 0) {
          updatedCountdowns[id] = "00:00:00";
          return;
        }

        totalSecs -= 1;
        secondsMap[id] = totalSecs;

        const d = Math.floor(totalSecs / (3600 * 24));
        const h = Math.floor((totalSecs % (3600 * 24)) / 3600);
        const m = Math.floor((totalSecs % 3600) / 60);
        const s = totalSecs % 60;

        const dayLabel = d > 0 ? `${d}d ` : "";

        updatedCountdowns[id] =
          `${dayLabel}${String(h).padStart(2, "0")}:` +
          `${String(m).padStart(2, "0")}:` +
          `${String(s).padStart(2, "0")}`;
      });

      setCountdowns(updatedCountdowns);
    }, 1000);

    return () => clearInterval(interval);
  };

  return (
    <Card
      title="Live Auctions"
      style={{
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
      }}
      styles={{
        header: {
          borderBottom: "none",
          padding: "24px 24px 0",
          fontSize: "20px",
          fontWeight: "bold",
        },
        body: { padding: "0 24px 24px 24px" },
      }}
    >
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        {loading ? (
          <Spin />
        ) : liveAuctions.length === 0 ? (
          <Empty description="No Live Auctions" />
        ) : (
          liveAuctions.map((item) => (
            <div
              key={item.auction_id}
              style={{
                borderBottom: "1px solid #f0f0f0",
                padding: "16px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Left Side */}
              <div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginBottom: "4px",
                  }}
                >
                  {item.product_name}
                </div>

                <div style={{ color: "#8c8c8c", fontSize: "14px" }}>
                  <ClockCircleOutlined style={{ marginRight: "4px" }} />
                  {countdowns[item.auction_id] || "00:00:00"}

                  <TeamOutlined
                    style={{ marginLeft: "12px", marginRight: "4px" }}
                  />
                  {item.participant_count || 0}
                </div>
              </div>

              {/* Right Side */}
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginBottom: "8px",
                  }}
                >
                  ${item.auction_price}
                </div>

                <Badge
                  count="Live"
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: "1.5px solid #000",
                    fontWeight: "bold",
                    padding: "0 10px",
                  }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}
