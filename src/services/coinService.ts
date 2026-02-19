import apiClient from "../config/axiosInstance";
import { API_ENDPOINTS } from "../api/endpoints";

// ── Interfaces for Type Safety ──
export interface CoinPackage {
  package_id: number;
  coins: number;
  price_sar: string; // e.g. "150.00" — comes as string from Django DecimalField
  is_active: boolean;
  // Add created_at / updated_at if your backend returns them
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Request payloads
export interface CreateCoinPackageRequest {
  coins: number;
  price_sar: number;
}

export interface EditCoinPackageRequest {
  package_id: number;
  coins?: number;
  price_sar?: number;
  // is_active usually not here — use toggle endpoint instead
}

export interface ToggleCoinPackageRequest {
  package_id: number;
  is_active: boolean;
}

export interface CoinStats {
  solds_coins: number;
  unused_coins: number;
  refundable_coins: number;
  non_refundable_coins: number;

  saudi_rial_sold_coins: string;
  saudi_rial_unused_coins: string;
  saudi_rial_refundable_coins: string;
  saudi_rial_non_refundable_coins: string;
}
// ── Service ──
export const coinPackageService = {
  // getAllCoinPackages: async (): Promise<PaginatedResponse<CoinPackage>> => {
  //   try {
  //     console.log("API Base URL:", SECURITY_CONFIG.api.baseURL);
  //     console.log("Full endpoint:", API_ENDPOINTS.ADMIN_COIN_PACKAGES_LIST);
  //     const response = await apiClient.get<PaginatedResponse<CoinPackage>>(
  //       API_ENDPOINTS.ADMIN_COIN_PACKAGES_LIST,
  //     );
  //     return response.data;
  //   } catch (error: any) {
  //     console.error("[CoinPackage] Fetch failed:", error.message || error);
  //     throw error;
  //   }
  // },

  getAllCoinPackages: async (): Promise<CoinPackage[]> => {
    try {
      const response = await apiClient.get(
        API_ENDPOINTS.ADMIN_COIN_PACKAGES_LIST,
      );

      console.log("Coins API:", response);

      return Array.isArray(response) ? response : [];
    } catch (error) {
      console.error("[CoinPackage] Fetch failed:", error);
      return [];
    }
  },

  getCoinStats: async (): Promise<CoinStats | null> => {
    try {
      const res = (await apiClient.get(
        API_ENDPOINTS.ADMIN_COIN_STATS,
      )) as CoinStats;

      return res; // ✅ now correct
    } catch (error) {
      console.error("[CoinStats] Fetch failed:", error);
      return null;
    }
  },
  // same pattern for other methods:
  createCoinPackage: async (
    data: CreateCoinPackageRequest,
  ): Promise<CoinPackage> => {
    const res = await apiClient.post<CoinPackage>(
      API_ENDPOINTS.ADMIN_COIN_PACKAGES_CREATE,
      data,
    );
    return res.data;
  },

  editCoinPackage: async (
    data: EditCoinPackageRequest,
  ): Promise<CoinPackage> => {
    const res = await apiClient.patch<CoinPackage>(
      API_ENDPOINTS.ADMIN_COIN_PACKAGES_EDIT,
      data,
    );
    return res.data;
  },

  toggleCoinPackage: async (
    data: ToggleCoinPackageRequest,
  ): Promise<CoinPackage> => {
    const res = await apiClient.patch<CoinPackage>(
      API_ENDPOINTS.ADMIN_COIN_PACKAGES_TOGGLE,
      data,
    );
    return res.data;
  },
};
