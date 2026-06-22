import { AdminGuard } from "@/components/AdminGuard";
import { AdminDashboard } from "./AdminDashboard";


export default function AdminPage() {
  return (
    <AdminGuard>
      <AdminDashboard />
    </AdminGuard>
  );
}