/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import DashboardLayout from "@/src/components/layout/DashboardLayout";
import { Typography } from "antd";
import UserTable from "@/src/components/users/UserTable";
import UserView from "@/src/components/users/UserView";

const { Title, Text } = Typography;

// Mock Data generated to match image and provide enough for pagination
const usersData = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  name:
    i === 0
      ? "Jhon Smith"
      : i === 1
        ? "Sarah Johnson"
        : i === 3
          ? "Champ Ullah"
          : `User Name ${i + 1}`,
  email:
    i === 0
      ? "johnsm@example.com"
      : i === 3
        ? "champull@example.com"
        : `user${i + 1}@example.com`,
  phone: "+88568-856231",
  status: i === 3 ? "Blocked" : "Active",
  // Additional details for the View component
  walletCoins: "SAR 125.50",
  refundableCoins: "SAR 12.50",
}));

export default function UsersPage() {
  // State to control which view is shown
  const [selectedUser, setSelectedUser] = useState<any>(null);

  return (
    <DashboardLayout>
      {/* Conditional Rendering: If a user is selected, show UserView, otherwise show UserTable */}
      {selectedUser ? (
        <UserView user={selectedUser} onBack={() => setSelectedUser(null)} />
      ) : (
        <div>
          <div style={{ marginBottom: "24px" }}>
            <Title level={2} style={{ margin: 0, fontWeight: "bold" }}>
              Users
            </Title>
            <Text type="secondary">Manage platform users</Text>
          </div>

          <UserTable
            users={usersData}
            onView={(user) => setSelectedUser(user)}
          />
        </div>
      )}
    </DashboardLayout>
  );
}
