import { Download, ListFilter, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  roleOptions,
  statusOptions,
} from "@/features/users/constants/user-options";

export function UsersFilters({
  query,
  role,
  status,
  onQueryChange,
  onRoleChange,
  onStatusChange,
}: {
  query: string;
  role: string;
  status: string;
  onQueryChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-[#c3c6d7] bg-white p-4 xl:flex-row">
      <label className="relative min-w-0 flex-1">
        <Search className="absolute top-1/2 left-3 size-5 -translate-y-1/2 text-[#737686]" />
        <Input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search by name, email or ID..."
          className="h-11 rounded-[4px] border-[#c3c6d7] pl-10"
        />
      </label>
      <Select value={role} onValueChange={(value) => onRoleChange(value ?? "all")}>
        <SelectTrigger className="h-11 w-full rounded-[4px] border-[#c3c6d7] px-3 xl:w-36">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {roleOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={status}
        onValueChange={(value) => onStatusChange(value ?? "all")}
      >
        <SelectTrigger className="h-11 w-full rounded-[4px] border-[#c3c6d7] px-3 xl:w-40">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {statusOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        type="button"
        variant="outline"
        className="h-11 rounded-[4px] border-[#c3c6d7] px-4"
      >
        <Download className="size-4" />
        Export
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="More filters"
        className="h-11 w-11 rounded-[4px] border-[#c3c6d7]"
      >
        <ListFilter className="size-5" />
      </Button>
    </div>
  );
}
