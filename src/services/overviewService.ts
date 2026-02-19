import apiClient from "../config/axiosInstance";
import { API_ENDPOINTS } from "../api/endpoints";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface OverviewStats {
  total_revenue: number;
  revenue_from_auctions: number;
  revenue_from_store: number;
  total_users: number;
}

export interface ParticipationMonth {
  month: string;
  participation: number;
}

export interface ParticipationYearlyResponse {
  year: number;
  data: ParticipationMonth[];
}

export interface RevenueAuctionMonth {
  month: string;
  revenue: number;
  auctions: number;
}

export interface RevenueAuctionsYearlyResponse {
  year: number;
  data: RevenueAuctionMonth[];
}

export interface TopAuction {
  product_name: string;
  final_price_sar: number;
  participant_count: number;
}

export interface TopAuctionsResponse {
  top_auctions: TopAuction[];
}

// ─── Fallbacks ───────────────────────────────────────────────────────────────

const FALLBACK_STATS: OverviewStats = {
  total_revenue: 0,
  revenue_from_auctions: 0,
  revenue_from_store: 0,
  total_users: 0,
};

const FALLBACK_REVENUE_AUCTIONS: RevenueAuctionsYearlyResponse = {
  year: new Date().getFullYear(),
  data: [],
};

// ─── Service ─────────────────────────────────────────────────────────────────

export const overviewService = {
  /**
   * GET /api/admin/overview/
   * Returns total revenue, revenue from auctions, revenue from store, total users
   */
  getStats: async (): Promise<OverviewStats> => {
    try {
      // Interceptor already unwraps response.data, so cast directly
      const data = (await apiClient.get(
        API_ENDPOINTS.STATS_OVERVIEW,
      )) as unknown as OverviewStats;

      // Validate shape before returning
      if (
        data &&
        typeof data.total_revenue === "number" &&
        typeof data.total_users === "number"
      ) {
        return data;
      }

      console.warn(
        "[Overview Service] getStats: unexpected response shape",
        data,
      );
      return FALLBACK_STATS;
    } catch (error) {
      // Interceptor already formats the error message as a string
      console.error("[Overview Service] getStats failed:", error);
      return FALLBACK_STATS; // Return fallback so UI doesn't crash
    }
  },

  /**
   * GET /api/admin/chart/revenue-auctions-yearly/
   * Returns monthly revenue & auction count data for the current year
   */
  getRevenueAuctionsYearly:
    async (): Promise<RevenueAuctionsYearlyResponse> => {
      try {
        const data = (await apiClient.get(
          API_ENDPOINTS.CHART_REVENUE_AUCTIONS_YEARLY,
        )) as unknown as RevenueAuctionsYearlyResponse;

        if (data && Array.isArray(data.data)) {
          return data;
        }

        console.warn(
          "[Overview Service] getRevenueAuctionsYearly: unexpected shape",
          data,
        );
        return FALLBACK_REVENUE_AUCTIONS;
      } catch (error) {
        console.error(
          "[Overview Service] getRevenueAuctionsYearly failed:",
          error,
        );
        return FALLBACK_REVENUE_AUCTIONS;
      }
    },

  /**
   * GET /api/admin/top-auctions/
   * Returns top performing auctions sorted by participant count
   */
  getTopAuctions: async (): Promise<TopAuction[]> => {
    try {
      const data = (await apiClient.get(
        API_ENDPOINTS.TOP_AUCTIONS,
      )) as unknown as TopAuctionsResponse;

      if (data && Array.isArray(data.top_auctions)) {
        return data.top_auctions;
      }

      console.warn(
        "[Overview Service] getTopAuctions: unexpected response shape",
        data,
      );
      return [];
    } catch (error) {
      console.error("[Overview Service] getTopAuctions failed:", error);
      return []; // Return empty array so UI renders empty state instead of crashing
    }
  },

  /**
   * GET /api/admin/chart/user-participation-yearly/
   * Returns monthly user participation data for the current year
   */
  getUserParticipationYearly:
    async (): Promise<ParticipationYearlyResponse> => {
      try {
        const data = (await apiClient.get(
          API_ENDPOINTS.CHART_USER_PARTICIPATION_YEARLY,
        )) as unknown as ParticipationYearlyResponse;

        if (data && Array.isArray(data.data)) {
          return data;
        }

        console.warn(
          "[Overview Service] getUserParticipationYearly: unexpected shape",
          data,
        );
        return { year: new Date().getFullYear(), data: [] };
      } catch (error) {
        console.error(
          "[Overview Service] getUserParticipationYearly failed:",
          error,
        );
        return { year: new Date().getFullYear(), data: [] };
      }
    },
};
