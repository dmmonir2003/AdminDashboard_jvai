/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "../config/axiosInstance";
import { API_ENDPOINTS } from "../api/endpoints";

export interface Product {
  product_id: number;
  name: string;
  product_type: "physical" | "digital";
  category: number;
  category_name: string;
  description: string;
  price: string; // "45000.00"
  discount_percentage: number;
  sizes?: Array<{ id: number; name: string }>; // ← New: Array of sizes
  colors?: Array<{ id: number; name: string }>; // ← New: Array of colors
  region?: string;
  brand?: string;
  code_file_url?: string | null;
  card_expiry_date?: string | null; // "2026-12-31"
  images: Array<{ image_url: string }>;
  created_at: string;
  updated_at: string;
}

interface PaginatedProducts {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
}
async function extractData<T>(request: Promise<any>): Promise<T> {
  const res = await request;
  return res; // interceptor already returns data
}
export const productService = {
  // List products with optional filter by type + pagination

  getProducts: async (
    page: number = 1,
    product_type?: "physical" | "digital" | "",
  ): Promise<PaginatedProducts> => {
    const params: any = { page };
    if (product_type) params.product_type = product_type;

    const data = await extractData<PaginatedProducts>(
      apiClient.get(API_ENDPOINTS.PRODUCTS_LIST, { params }),
    );
    return data;
  },
  // Create product (multipart/form-data)
  createProduct: async (formData: FormData): Promise<Product> => {
    try {
      const res = await apiClient.post(API_ENDPOINTS.PRODUCT_CREATE, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res as any;
    } catch (err) {
      console.error("[Product Service] Create failed:", err);
      throw err;
    }
  },

  // Get single product (for edit / view)
  getProductById: async (id: number | string): Promise<Product> => {
    try {
      const res = await apiClient.get(API_ENDPOINTS.PRODUCT_DETAIL(id));
      return res as any;
    } catch (err) {
      console.error(`[Product Service] Failed to get product ${id}:`, err);
      throw err;
    }
  },

  // Update product (PATCH + multipart/form-data support)
  updateProduct: async (
    id: number | string,
    formData: FormData,
  ): Promise<Product> => {
    try {
      const res = await apiClient.patch(
        API_ENDPOINTS.PRODUCT_UPDATE(id),
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      return res as any;
    } catch (err) {
      console.error(`[Product Service] Update failed for product ${id}:`, err);
      throw err;
    }
  },

  // Delete product
  deleteProduct: async (id: number | string): Promise<void> => {
    try {
      await apiClient.delete(API_ENDPOINTS.PRODUCT_DELETE(id));
    } catch (err) {
      console.error(`[Product Service] Delete failed for product ${id}:`, err);
      throw err;
    }
  },
};
