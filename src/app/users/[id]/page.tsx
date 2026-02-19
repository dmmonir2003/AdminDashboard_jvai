/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { message, Spin } from "antd";
import DashboardLayout from "@/src/components/layout/DashboardLayout";
import { userService } from "@/src/services/userService";
import UserView from "@/src/components/users/UserView";

export default function UserDetailPage() {
  const params = useParams();
  const router = useRouter();
  const userId = params.id as string;

  const [userData, setUserData] = useState<any>(null);
  const [historyData, setHistoryData] = useState<any[]>([]);
  const [transactionsData, setTransactionsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    if (!userId) return;
    try {
      setLoading(true);
      // Fetch all 3 in parallel
      const [details, history, transactions] = await Promise.all([
        userService.getUserById(userId),
        userService.getUserHistory(userId),
        userService.getUserTransactions(userId),
      ]);
      setUserData(details);
      setHistoryData(history?.results || []);
      setTransactionsData(transactions?.results || []);
    } catch (err: any) {
      message.error("Failed to load user details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  if (loading)
    return (
      <DashboardLayout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "100px",
          }}
        >
          <Spin size="large" />
        </div>
      </DashboardLayout>
    );

  if (!userData)
    return (
      <DashboardLayout>
        <div style={{ textAlign: "center", paddingTop: "100px" }}>
          User not found
        </div>
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <UserView
        user={{
          ...userData,
          // Normalize fields to match UserView's expected props
          name: userData.username,
          phone: userData.phone_number || "N/A",
          status: userData.status ? "Active" : "Blocked",
          walletCoins: userData.wallet_coins,
          refundableCoins: userData.refundable_coins,
        }}
        historyData={historyData}
        transactionsData={transactionsData}
        onBack={() => router.push("/users")}
      />
    </DashboardLayout>
  );
}
