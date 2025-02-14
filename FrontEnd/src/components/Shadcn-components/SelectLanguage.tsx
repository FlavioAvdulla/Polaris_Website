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

export function SelectLanguage() {
  return (
    <Select>
      <SelectTrigger className="w-auto gap-2 shadow-none border-[1px] border-gray-300">
        <SelectValue placeholder=""/><p className="font-camptonBook
                                                    xs:text-[12px]
                                                    md:text-[14px]
                                                    ">English</p>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel><p className="font-camptonBook text-primary">Languages</p></SelectLabel>
          <SelectItem value="english"><p>English</p></SelectItem>
          <SelectItem value="hindi"><p>Hindi</p></SelectItem>
          <SelectItem value="french"><p>French</p></SelectItem>
          <SelectItem value="arabic"><p>Arabic</p></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
