import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports",
};

export default function ReportsPage() {
  return (
    <main className="px-4 py-8 sm:px-8">
      <h1 className="text-3xl font-semibold text-[#191c1e]">Reports</h1>
      <p className="mt-2 text-[#434655]">
        Reporting data will be available when the API is connected.
      </p>
    </main>
  );
}
