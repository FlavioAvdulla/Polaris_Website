import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectCurrency() {
  return (
    <Select>
      <SelectTrigger className="w-auto gap-2 shadow-none border-[1px] border-gray-300">
        <SelectValue placeholder="" /><p className="text-[14px]">USD</p>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Currency</SelectLabel>
          <SelectItem value="usd">USD</SelectItem>
          <SelectItem value="inr">INR</SelectItem>
          <SelectItem value="eur">EUR</SelectItem>
          <SelectItem value="myr">MYR</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
