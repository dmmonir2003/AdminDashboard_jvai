/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import DashboardLayout from "@/src/components/layout/DashboardLayout";
import CategoryTable from "@/src/components/categories/CategoryTable";
import CategoryFormModal from "@/src/components/categories/CategoryFormModal";

// Mock Data
const categoriesData = [
  { key: "1", categoryName: "Electronics", productCount: 100, status: true },
  { key: "2", categoryName: "Computer", productCount: 50, status: true },
  { key: "3", categoryName: "Gaming", productCount: 500, status: true },
  {
    key: "4",
    categoryName: "Home Appliance",
    productCount: 400,
    status: false,
  },
];

export default function CategoriesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const handleAdd = () => {
    setSelectedCategory(null);
    setIsModalOpen(true);
  };

  const handleEdit = (record: any) => {
    setSelectedCategory(record);
    setIsModalOpen(true);
  };

  const handleFinish = (values: any) => {
    console.log("Submitted Values:", values);
    // Here you would typically call your API to save/update
    setIsModalOpen(false);
  };

  return (
    <DashboardLayout>
      <div>
        {/* Child Table Component */}
        <CategoryTable
          categories={categoriesData}
          onAdd={handleAdd}
          onEdit={handleEdit}
        />

        {/* Child Modal Component */}
        <CategoryFormModal
          open={isModalOpen}
          initialValues={selectedCategory}
          onCancel={() => setIsModalOpen(false)}
          onFinish={handleFinish}
        />
      </div>
    </DashboardLayout>
  );
}
