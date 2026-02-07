// /* eslint-disable @typescript-eslint/no-explicit-any */
// import apiClient from "../config/axiosInstance";
// import { API_ENDPOINTS } from "../api/endpoints";

// // Interfaces for Type Safety
// export interface Category {
//   id: number;
//   name: string;
//   [key: string]: any;
// }

// export interface CreateCategoryRequest {
//   name: string;
// }

// export interface EditCategoryRequest {
//   category_id: number;
//   name: string;
// }

// export interface DeleteCategoryRequest {
//   category_id: number;
// }

// export const categoryService = {
//   /**
//    * Fetch all categories
//    */
//   getCategories: async (): Promise<Category[]> => {
//     try {
//       // Returns the array of categories directly due to your axios interceptor
//       return await apiClient.get(API_ENDPOINTS.GET_CATEGORIES);
//     } catch (error) {
//       console.error("[Category Error] Fetch failed:", error);
//       throw error;
//     }
//   },

//   /**
//    * Create a new category
//    * Expects: { "name": "Car" }
//    */
//   createCategory: async (data: CreateCategoryRequest): Promise<Category> => {
//     try {
//       return await apiClient.post(API_ENDPOINTS.CREATE_CATEGORY, data);
//     } catch (error) {
//       console.error("[Category Error] Creation failed:", error);
//       throw error;
//     }
//   },

//   /**
//    * Edit an existing category
//    * Expects: { "category_id": 1, "name": "Luxury Vehicles" }
//    */
//   editCategory: async (data: EditCategoryRequest): Promise<Category> => {
//     try {
//       return await apiClient.put(API_ENDPOINTS.EDIT_CATEGORY, data);
//     } catch (error) {
//       console.error("[Category Error] Edit failed:", error);
//       throw error;
//     }
//   },

//   /**
//    * Delete a category
//    * Expects: { "category_id": 3 } in the body
//    */
//   deleteCategory: async (categoryId: number): Promise<any> => {
//     try {
//       // Note: Some backends require data in 'data' property for DELETE requests
//       return await apiClient.delete(API_ENDPOINTS.DELETE_CATEGORY, {
//         data: { category_id: categoryId },
//       });
//     } catch (error) {
//       console.error("[Category Error] Deletion failed:", error);
//       throw error;
//     }
//   },
// };

/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "../config/axiosInstance";
import { API_ENDPOINTS } from "../api/endpoints";

// --- Interfaces for Type Safety ---

export type CategoryType = "digital" | "physical" | "auction";

export interface Category {
  category_id: number;
  name: string;
  category_for: CategoryType;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Matches the { count, next, previous, results } structure from your JSON
export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface CreateCategoryRequest {
  name: string;
  category_for: CategoryType;
}

export interface EditCategoryRequest {
  category_id: number;
  name: string;
  category_for?: CategoryType;
  is_active?: boolean;
}
export interface ToggleCategoryRequest {
  category_id: number;

  is_active?: boolean;
}

// --- Service Logic ---

export const categoryService = {
  /**
   * Fetch all categories with optional filtering
   * URL: /admin/categories/?category_for=auction
   */
  getCategories: async (
    categoryFor?: CategoryType,
  ): Promise<PaginatedResponse<Category>> => {
    try {
      // We cast the return to 'any' then to our interface because the
      // interceptor in axiosInstance.ts already stripped the .data wrapper
      const response = await apiClient.get(API_ENDPOINTS.GET_CATEGORIES, {
        params: {
          category_for: categoryFor,
        },
      });
      return response as any as PaginatedResponse<Category>;
    } catch (error) {
      console.error("[Category Error] Fetch failed:", error);
      throw error;
    }
  },

  /**
   * Create a new category
   */
  createCategory: async (data: CreateCategoryRequest): Promise<Category> => {
    try {
      const response = await apiClient.post(
        API_ENDPOINTS.CREATE_CATEGORY,
        data,
      );
      return response as any as Category;
    } catch (error) {
      console.error("[Category Error] Creation failed:", error);
      throw error;
    }
  },

  /**
   * Edit an existing category
   */
  editCategory: async (data: EditCategoryRequest): Promise<Category> => {
    try {
      const response = await apiClient.patch(API_ENDPOINTS.EDIT_CATEGORY, data);
      return response as any as Category;
    } catch (error) {
      console.error("[Category Error] Edit failed:", error);
      throw error;
    }
  },
  toggleCategory: async (data: ToggleCategoryRequest): Promise<Category> => {
    try {
      const response = await apiClient.post(
        API_ENDPOINTS.TOGGLE_CATEGORY,
        data,
      );
      return response as any as Category;
    } catch (error) {
      console.error("[Category Error] Edit failed:", error);
      throw error;
    }
  },

  /**
   * Delete a category
   */
  deleteCategory: async (categoryId: number): Promise<any> => {
    try {
      return await apiClient.delete(API_ENDPOINTS.DELETE_CATEGORY, {
        data: { category_id: categoryId },
      });
    } catch (error) {
      console.error("[Category Error] Deletion failed:", error);
      throw error;
    }
  },
};
