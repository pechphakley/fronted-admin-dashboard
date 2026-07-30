import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Management",
};

export default function AdminsPage() {
  return (
    <main className="px-4 py-8 sm:px-8">
      <h1 className="text-3xl font-semibold text-[#191c1e]">Admin Management</h1>
      <p className="mt-2 text-[#434655]">
        Administrator management will be available when the API is connected.
      </p>
    </main>
  );
}
