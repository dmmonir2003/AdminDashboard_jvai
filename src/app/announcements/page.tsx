import AnnouncementsTable from "@/src/components/announcement/AnnouncementsTable";
import DashboardLayout from "@/src/components/layout/DashboardLayout";
import React from "react";

export default function AnnouncementsPage() {
  return (
    <>
      <DashboardLayout>
        <AnnouncementsTable />
      </DashboardLayout>
    </>
  );
}
