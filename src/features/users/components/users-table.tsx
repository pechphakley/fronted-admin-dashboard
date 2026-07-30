import Image from "next/image";
import { MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  RoleBadge,
  UserStatusBadge,
  VerificationBadge,
} from "@/components/shared/status-badge";
import type { DirectoryUser } from "@/features/users/types/user";

export function UsersTable({ users }: { users: DirectoryUser[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#c3c6d7] bg-white">
      <Table>
        <TableHeader className="bg-[#f2f4f6]">
          <TableRow className="border-[#c3c6d7] hover:bg-transparent">
            {["Profile", "Email", "Role", "Status", "Verification", "Joined Date", "Actions"].map(
              (heading) => (
                <TableHead
                  key={heading}
                  className="h-14 px-5 text-[11px] font-semibold uppercase tracking-wide text-[#737686]"
                >
                  {heading}
                </TableHead>
              ),
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="h-[112px] border-[#c3c6d7]/30">
              <TableCell className="px-5">
                <div className="flex items-center gap-3">
                  <Image
                    src={user.avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 rounded-xl border-2 border-white object-cover shadow-sm"
                  />
                  <div>
                    <p className="font-medium text-[#191c1e]">{user.name}</p>
                    <p className="mt-0.5 text-xs text-[#737686]">ID: {user.id}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="px-5 text-[#191c1e]">{user.email}</TableCell>
              <TableCell className="px-5"><RoleBadge role={user.role} /></TableCell>
              <TableCell className="px-5"><UserStatusBadge status={user.status} /></TableCell>
              <TableCell className="px-5">
                <VerificationBadge status={user.verification} />
              </TableCell>
              <TableCell className="px-5 text-[#737686]">
                <span className="block max-w-20 whitespace-normal">
                  {user.joinedAt}
                </span>
              </TableCell>
              <TableCell className="px-5 text-right">
                <Button type="button" variant="ghost" size="icon" aria-label={`Actions for ${user.name}`}>
                  <MoreVertical className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-col gap-3 border-t border-[#c3c6d7] bg-[#f2f4f6] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-semibold text-[#737686]">
          Showing <strong className="text-[#191c1e]">1-10</strong> of{" "}
          <strong className="text-[#191c1e]">24,512</strong> users
        </p>
        <div className="flex items-center gap-2">
          <Button type="button" variant="ghost" size="icon-sm" disabled aria-label="Previous page">
            ‹
          </Button>
          {[1, 2, 3].map((page) => (
            <Button
              key={page}
              type="button"
              variant={page === 1 ? "default" : "ghost"}
              size="icon"
              className={page === 1 ? "size-8 rounded-[4px] bg-[#1fa628] hover:bg-[#188d21]" : "size-8 rounded-[4px]"}
            >
              {page}
            </Button>
          ))}
          <span className="px-1 text-[#737686]">…</span>
          <Button type="button" variant="ghost" size="icon" className="size-8 rounded-[4px] text-xs">
            2452
          </Button>
          <Button type="button" variant="ghost" size="icon-sm" aria-label="Next page">
            ›
          </Button>
        </div>
      </div>
    </div>
  );
}
