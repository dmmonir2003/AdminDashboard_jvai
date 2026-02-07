/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState } from "react";
// import CategoryTable from "./CategoryTable";
// import CategoryFormModal from "./CategoryFormModal";
// import { categoryService, Category } from "@/src/services/categoryService";
// import { message } from "antd";

// export default function CategoryTableContainer({
//   initialData,
// }: {
//   initialData: any;
// }) {
//   const [categories, setCategories] = useState<Category[]>(
//     initialData.results || [],
//   );
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<Category | null>(
//     null,
//   );
//   const [loading, setLoading] = useState(false);

//   const refreshData = async () => {
//     try {
//       const data = await categoryService.getCategories();
//       setCategories(data.results);
//     } catch (err) {
//       message.error("Failed to refresh data");
//     }
//   };

//   const handleAdd = () => {
//     setSelectedCategory(null);
//     setIsModalOpen(true);
//   };

//   const handleEdit = (record: Category) => {
//     setSelectedCategory(record);
//     setIsModalOpen(true);
//   };

//   const handleToggleStatus = async (record: Category) => {
//     try {
//       await categoryService.toggleCategory({
//         category_id: record.category_id,
//         is_active: !record.is_active,
//       });
//       message.success("Status updated");
//       refreshData();
//     } catch (err) {
//       message.error("Failed to update status");
//     }
//   };

//   const handleDelete = async (id: number) => {
//     try {
//       await categoryService.deleteCategory(id);
//       message.success("Category deleted");
//       refreshData();
//     } catch (err) {
//       message.error("Failed to delete category");
//     }
//   };

//   const handleFinish = async (values: any) => {
//     setLoading(true);
//     try {
//       if (selectedCategory) {
//         await categoryService.editCategory({
//           category_id: selectedCategory.category_id,
//           name: values.name,
//           category_for: values.category_for,
//           is_active: selectedCategory.is_active,
//         });
//         message.success("Category updated successfully");
//       } else {
//         await categoryService.createCategory({
//           name: values.name,
//           category_for: values.category_for,
//         });
//         message.success("Category created successfully");
//       }
//       setIsModalOpen(false);
//       refreshData();
//     } catch (err) {
//       message.error("Operation failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <CategoryTable
//         categories={categories}
//         onAdd={handleAdd}
//         onEdit={handleEdit}
//         onToggle={handleToggleStatus}
//         onDelete={handleDelete}
//       />
//       <CategoryFormModal
//         open={isModalOpen}
//         initialValues={selectedCategory}
//         onCancel={() => setIsModalOpen(false)}
//         onFinish={handleFinish}
//         loading={loading}
//       />
//     </>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import CategoryTable from "./CategoryTable";
import CategoryFormModal from "./CategoryFormModal";
import { categoryService, Category } from "@/src/services/categoryService";
import { message } from "antd";

export default function CategoryTableContainer({
  initialData,
}: {
  initialData: any;
}) {
  // Initialize with results from the server response
  const [categories, setCategories] = useState<Category[]>(
    initialData?.results || [],
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [loading, setLoading] = useState(false);

  const refreshData = async () => {
    try {
      const data = await categoryService.getCategories();
      // Service returns PaginatedResponse { count, results, ... }
      setCategories(data.results || []);
    } catch (err) {
      message.error("Failed to refresh data");
    }
  };

  const handleAdd = () => {
    setSelectedCategory(null);
    setIsModalOpen(true);
  };

  const handleEdit = (record: Category) => {
    setSelectedCategory(record);
    setIsModalOpen(true);
  };

  /**
   * UPDATED: Uses toggleCategory service for the switch logic
   */
  const handleToggleStatus = async (record: Category) => {
    try {
      // Backend expects { category_id, is_active } for toggle
      await categoryService.toggleCategory({
        category_id: record.category_id,
        is_active: !record.is_active,
      });
      message.success("Category status updated successfully");
      refreshData();
    } catch (err) {
      console.error("[Toggle Error]:", err);
      message.error("Failed to update status");
    }
  };

  const handleFinish = async (values: any) => {
    setLoading(true);
    try {
      if (selectedCategory) {
        // Edit category payload
        await categoryService.editCategory({
          category_id: selectedCategory.category_id,
          name: values.name,
          category_for: values.category_for,
          is_active: selectedCategory.is_active,
        });
        message.success("Category updated successfully");
      } else {
        // Create category payload
        await categoryService.createCategory({
          name: values.name,
          category_for: values.category_for,
        });
        message.success("Category created successfully");
      }
      setIsModalOpen(false);
      refreshData();
    } catch (err) {
      message.error("Operation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CategoryTable
        categories={categories}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onToggle={handleToggleStatus} // Pass the toggle handler
        onDelete={async (id: number) => {
          try {
            await categoryService.deleteCategory(id); // Delete payload uses category_id
            message.success("Category deleted");
            refreshData();
          } catch (err) {
            message.error("Failed to delete category");
          }
        }}
      />
      <CategoryFormModal
        open={isModalOpen}
        initialValues={selectedCategory}
        onCancel={() => setIsModalOpen(false)}
        onFinish={handleFinish}
        loading={loading}
      />
    </>
  );
}
