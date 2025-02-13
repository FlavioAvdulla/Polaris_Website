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
        <SelectValue placeholder="" /><p className="
                                                    xs:text-[12px]
                                                    md:text-[14px]
                                                    ">USD</p>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel><p className="font-camptonBook text-primary">Currency</p></SelectLabel>
          <SelectItem className="hover:bg-primary" value="usd"><p>USD</p></SelectItem>
          <SelectItem className="hover:bg-primary" value="inr"><p>INR</p></SelectItem>
          <SelectItem className="hover:bg-primary" value="eur"><p>EUR</p></SelectItem>
          <SelectItem className="hover:bg-primary" value="myr"><p>MYR</p></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
