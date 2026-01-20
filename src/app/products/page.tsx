"use client";

import React from "react";
import DashboardLayout from "@/src/components/layout/DashboardLayout";
import ProductTable from "@/src/components/products/ProductTable";

// Mock Data representing the products in your image
const productsData = [
  {
    key: "1",
    name: "Sunglass",
    category: "Glass",
    price: "SAR-25,410",
    specification: "Black, White",
    discount: "40%",
    type: "Physical",
    image: "https://cdn-icons-png.flaticon.com/512/655/655781.png",
  },
  {
    key: "2",
    name: "4k Camera",
    category: "Accessories",
    price: "SAR-15,482",
    specification: "N/A",
    discount: "SAR 150",
    type: "Physical",
    image: "https://cdn-icons-png.flaticon.com/512/685/685655.png",
  },
  {
    key: "3",
    name: "Casio Male Watch",
    category: "Watch",
    price: "SAR-12,6301",
    specification: "Black, Blue",
    discount: "25%",
    type: "Physical",
    image: "https://cdn-icons-png.flaticon.com/512/2951/2951125.png",
  },
  {
    key: "4",
    name: "Software License",
    category: "Software",
    price: "SAR-500",
    specification: "Digital Key",
    discount: "10%",
    type: "Digital",
    image: "https://cdn-icons-png.flaticon.com/512/4144/4144633.png",
  },
  {
    key: "5",
    name: "Sunglass",
    category: "Glass",
    price: "SAR-25,410",
    specification: "Black, White",
    discount: "40%",
    type: "Physical",
    image: "https://cdn-icons-png.flaticon.com/512/655/655781.png",
  },
  {
    key: "6",
    name: "4k Camera",
    category: "Accessories",
    price: "SAR-15,482",
    specification: "N/A",
    discount: "SAR 150",
    type: "Physical",
    image: "https://cdn-icons-png.flaticon.com/512/685/685655.png",
  },
  {
    key: "7",
    name: "Casio Male Watch",
    category: "Watch",
    price: "SAR-12,6301",
    specification: "Black, Blue",
    discount: "25%",
    type: "Physical",
    image: "https://cdn-icons-png.flaticon.com/512/2951/2951125.png",
  },
  {
    key: "8",
    name: "Software License",
    category: "Software",
    price: "SAR-500",
    specification: "Digital Key",
    discount: "10%",
    type: "Digital",
    image: "https://cdn-icons-png.flaticon.com/512/4144/4144633.png",
  },
];

export default function ProductsPage() {
  return (
    <DashboardLayout>
      <ProductTable products={productsData} />
    </DashboardLayout>
  );
}
