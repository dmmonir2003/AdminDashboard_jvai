import DashboardLayout from "@/src/components/layout/DashboardLayout";
import ReviewsTable from "@/src/components/review/ReviewsTable";

export default function ReviewsPage() {
  return (
    <>
      <DashboardLayout>
        <ReviewsTable />
      </DashboardLayout>
    </>
  );
}
