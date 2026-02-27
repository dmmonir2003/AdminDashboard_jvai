/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import DashboardLayout from "@/src/components/layout/DashboardLayout";
// import ProductTable from "@/src/components/products/ProductTable";

import DashboardLayout from "@/src/components/layout/DashboardLayout";
import ProductTable from "@/src/components/products/ProductTable";
import { productService } from "@/src/services/productService";

export default async function ProductsPage() {
  let products: any[] = [];

  try {
    const res = await productService.getProducts(1); // fetch first page initially

    products = res.results.map((item: any) => ({
      key: item.product_id.toString(),
      name: item.name,
      category: item.category_name,
      price: `SAR-${item.price}`,
      description: item.description,
      specification: `${item.size || "N/A"}, ${item.color || "N/A"}`,
      discount: item.discount_percentage
        ? `${item.discount_percentage}%`
        : "0%",
      type: item.product_type === "physical" ? "Physical" : "Digital",
      image: item.images?.[0]?.image_url || "",
      size: item.size,
      color: item.color,
    }));
  } catch (error) {
    console.error("Server fetch error:", error);
    products = [];
  }

  return (
    <DashboardLayout>
      <ProductTable initialProducts={products} />
    </DashboardLayout>
  );
}
