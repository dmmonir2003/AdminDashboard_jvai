/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import DashboardLayout from "@/src/components/layout/DashboardLayout";
import { Typography, Spin, message } from "antd";
import UserTable from "@/src/components/users/UserTable";
import { useRouter } from "next/navigation";
import { userService } from "@/src/services/userService";

const { Title, Text } = Typography;

export default function UsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await userService.getAllUsers();
      const normalized = (response?.results || []).map((user: any) => ({
        id: user.id,
        name: user.username,
        email: user.email,
        phone: user.phone_number || "N/A",
        status: user.status ? "Active" : "Blocked",
      }));
      setUsers(normalized);
    } catch (err: any) {
      message.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <DashboardLayout>
      <div>
        <div style={{ marginBottom: "24px" }}>
          <Title level={2} style={{ margin: 0, fontWeight: "bold" }}>
            Users
          </Title>
          <Text type="secondary">Manage platform users</Text>
        </div>

        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "100px",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <UserTable
            users={users}
            onView={(user) => router.push(`/users/${user.id}`)}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
