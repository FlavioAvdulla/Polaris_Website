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
    <Select defaultValue="eur">
      <SelectTrigger className="w-auto gap-2 shadow-none border-[1px] border-gray-300
                                dark:border-gray-600">
        <SelectValue placeholder="" /><p className="font-camptonBook
                                                    xs:text-[12px]
                                                    md:text-[14px]
                                                    "></p>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel><p className="font-camptonBook text-primary
                                     dark:text-secondary_01">Currency</p></SelectLabel>
          <SelectItem value="usd"><p>USD</p></SelectItem>
          <SelectItem value="inr"><p>INR</p></SelectItem>
          <SelectItem value="eur"><p>EUR</p></SelectItem>
          <SelectItem value="myr"><p>MYR</p></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
