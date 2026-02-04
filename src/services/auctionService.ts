// import apiClient from "../config/axiosInstance";
// import { API_ENDPOINTS } from "../api/endpoints";

// // Interfaces for Auction Data
// export interface Auction {
//   auction_id: number;
//   product_name: string;
//   category_name: string;
//   product_image_url: string;
//   auction_price: string;
//   market_price: string;
//   status: "ended" | "live" | "upcoming" | string;
//   created_at: string;
//   auction_duration: string;
//   entry_fee_coins: number;
//   participant_count: number;
//   remaining_time: number;
// }

// export const auctionService = {
//   /**
//    * Fetch all auctions with optional filtering
//    * Example: getAuctions("ended") -> /admin/auctions/?filter=ended
//    */
//   getAuctions: async (statusFilter?: string): Promise<Auction[]> => {
//     try {
//       const params = statusFilter ? { filter: statusFilter } : {};
//       return await apiClient.get(API_ENDPOINTS.AUCTIONS, { params });
//     } catch (error) {
//       console.error("[Auction Error] Fetch failed:", error);
//       throw error;
//     }
//   },

//   /**
//    * Fetch specific auction details by ID
//    * URL: /admin/auctions/detail/?auction_id=74
//    */
//   getAuctionDetail: async (auctionId: number): Promise<Auction> => {
//     try {
//       return await apiClient.get(API_ENDPOINTS.AUCTION_DETAIL, {
//         params: { auction_id: auctionId },
//       });
//     } catch (error) {
//       console.error("[Auction Error] Fetch detail failed:", error);
//       throw error;
//     }
//   },

//   /**
//    * Create a new auction
//    * Expects FormData (for image upload support)
//    * Header: Authorization token is handled automatically by axiosInstance
//    */
//   createAuction: async (formData: FormData): Promise<Auction> => {
//     try {
//       return await apiClient.post(API_ENDPOINTS.AUCTIONS, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//     } catch (error) {
//       console.error("[Auction Error] Creation failed:", error);
//       throw error;
//     }
//   },

//   /**
//    * Edit an existing auction
//    * Expects FormData (useful if updating the product image)
//    */
//   editAuction: async (
//     auctionId: number,
//     formData: FormData,
//   ): Promise<Auction> => {
//     try {
//       // Append auction_id to the URL or FormData based on your backend preference
//       // Usually passed as a query param or part of the multipart body
//       return await apiClient.put(API_ENDPOINTS.AUCTIONS, formData, {
//         params: { auction_id: auctionId },
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//     } catch (error) {
//       console.error("[Auction Error] Edit failed:", error);
//       throw error;
//     }
//   },
// };

// import apiClient from "../config/axiosInstance";
// import { API_ENDPOINTS } from "../api/endpoints";

// export const auctionService = {
//   // Fetch logic for Server Components
//   getAllAuctions: async (statusFilter?: string) => {
//     try {
//       const params = statusFilter ? { filter: statusFilter } : {};
//       // Note: In Server Components, ensure the baseURL is fully qualified
//       return await apiClient.get(API_ENDPOINTS.AUCTIONS, { params });
//     } catch (error) {
//       throw error;
//     }
//   },

//   // Mutation logic (Multipart for Image Support)
//   createAuction: async (formData: FormData) => {
//     return await apiClient.post(API_ENDPOINTS.AUCTIONS, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//   },

//   updateAuction: async (id: number, formData: FormData) => {
//     return await apiClient.put(API_ENDPOINTS.AUCTIONS, formData, {
//       params: { auction_id: id },
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//   },
// };

/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "../config/axiosInstance";
import { API_ENDPOINTS } from "../api/endpoints";

export interface Auction {
  auction_id: number;
  product_name: string;
  category_name: string;
  product_image_url: string;
  auction_price: string;
  market_price: string;
  status: string;
  created_at: string;
  auction_duration: string;
  entry_fee_coins: number;
  participant_count: number;
  remaining_time: number;
}

interface AuctionApiResponse {
  results: Auction[];
  count: number;
  filter: string;
}
export const auctionService = {
  /**
   * Fetch all auctions
   */
  getAllAuctions: async (statusFilter?: string): Promise<Auction[]> => {
    try {
      const params = statusFilter ? { filter: statusFilter } : {};

      // 1. Tell TypeScript that the result of this call will be AuctionApiResponse
      // Use 'unknown' as a bridge to force the cast
      const response = (await apiClient.get(API_ENDPOINTS.AUCTIONS, {
        params,
      })) as unknown as AuctionApiResponse;

      // 2. Access .results safely
      // Your JSON shows results is the array we need
      return response?.results || [];
    } catch (error) {
      console.warn("[Auction Service] Request failed, checking session...");
      throw error;
    }
  },

  /**
   * Create Auction (FormData for images)
   */
  createAuction: async (formData: FormData): Promise<Auction> => {
    try {
      return await apiClient.post<any, Auction>(
        API_ENDPOINTS.AUCTIONS,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
    } catch (error) {
      console.error("[Auction Service] Create failed:", error);
      throw error;
    }
  },

  /**
   * Update Auction
   */
  updateAuction: async (id: number, formData: FormData): Promise<Auction> => {
    try {
      return await apiClient.put<any, Auction>(
        API_ENDPOINTS.AUCTIONS,
        formData,
        {
          params: { auction_id: id },
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
    } catch (error) {
      console.error("[Auction Service] Update failed:", error);
      throw error;
    }
  },
};
