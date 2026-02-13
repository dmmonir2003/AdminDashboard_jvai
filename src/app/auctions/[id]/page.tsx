/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { message, Spin } from "antd";
import DashboardLayout from "@/src/components/layout/DashboardLayout";

import { auctionService } from "@/src/services/auctionService";
import AuctionDetailView from "@/src/components/auctions/AuctionView";

export default function AuctionDetailPage() {
  const params = useParams();
  const router = useRouter();
  const auctionId = params.id as string;

  const [auction, setAuction] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ============================================
  // FETCH AUCTION DETAILS USING getAuctionById
  // ============================================
  useEffect(() => {
    const fetchAuctionDetails = async () => {
      if (!auctionId) {
        setError("No auction ID provided");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // Call getAuctionById with the auction ID from URL
        const response = (await auctionService.getAuctionById(
          auctionId,
        )) as any;

        // Extract the auction object from the response
        // The API returns { auction: {...}, bid_leader: null, winner_info: null, participants: {...} }
        const auctionData = response.auction || response;
        setAuction(auctionData);
        setError(null);
      } catch (err: any) {
        console.error("Failed to load auction details:", err);

        // Handle different error types
        const errorMsg =
          err.response?.data?.error ||
          err.response?.data?.message ||
          err.message ||
          "Failed to load auction details";

        setError(errorMsg);
        message.error(errorMsg);
      } finally {
        setLoading(false);
      }
    };

    fetchAuctionDetails();
  }, [auctionId]);

  // Handle back navigation
  const handleBack = () => {
    router.push("/auctions");
  };

  // Handle refresh - re-fetch auction data
  const handleRefresh = async () => {
    try {
      setLoading(true);
      const response = (await auctionService.getAuctionById(auctionId)) as any;
      const auctionData = response.auction || response;
      setAuction(auctionData);
      message.success("Data refreshed");
    } catch (err: any) {
      const errorMsg =
        err.response?.data?.error ||
        err.message ||
        "Failed to refresh auction details";
      message.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <DashboardLayout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
          }}
        >
          <Spin size="large" tip="Loading auction details..." />
        </div>
      </DashboardLayout>
    );
  }

  // Error state
  if (error || !auction) {
    return (
      <DashboardLayout>
        <div
          style={{
            padding: "24px",
            textAlign: "center",
            color: "#dc2626",
            fontSize: "16px",
          }}
        >
          <p>{error || "Auction not found"}</p>
          <button
            onClick={handleBack}
            style={{
              marginTop: "16px",
              padding: "8px 16px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Go Back to Auctions
          </button>
        </div>
      </DashboardLayout>
    );
  }

  // Success state - render detail view
  return (
    <DashboardLayout>
      <AuctionDetailView
        auction={auction}
        onBack={handleBack}
        onActionSuccess={handleRefresh}
      />
    </DashboardLayout>
  );
}
