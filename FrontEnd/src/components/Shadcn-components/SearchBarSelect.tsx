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
      <SelectTrigger
        className="w-auto h-auto gap-3 outline-none focus:ring-0
                    border-[1px] border-primary border-r-0 rounded-none
                    rounded-tl-md rounded-bl-md bg-white"
      >
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel><p className="font-camptonBook">Categories</p></SelectLabel>
          <SelectItem value="fashion"><p className="font-camptonBook">Fashion</p></SelectItem>
          <SelectItem value="accessories"><p className="font-camptonBook">Accessories</p></SelectItem>
          <SelectItem value="electronics"><p className="font-camptonBook">Electronics</p></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
