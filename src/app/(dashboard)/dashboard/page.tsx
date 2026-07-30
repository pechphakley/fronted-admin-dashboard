import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <main className="px-4 py-8 sm:px-8">
      <h1 className="text-3xl font-semibold text-[#191c1e]">Dashboard</h1>
      <p className="mt-2 text-[#434655]">
        InterviewAI administration overview.
      </p>
    </main>
  );
}
