import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SearchBarSelect() {
  return (
    <Select>
      <SelectTrigger className="w-auto h-auto gap-3 outline-none focus:ring-0
                                border-[1px] border-primary border-r-0 rounded-none
                                rounded-tl-md rounded-bl-md bg-white">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="fashion">Fashion</SelectItem>
          <SelectItem value="accessories">Accessories</SelectItem>
          <SelectItem value="electronics">Electronics</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
