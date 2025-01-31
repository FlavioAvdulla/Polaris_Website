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
      <SelectTrigger className="w-auto gap-5">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="hindi">Hindi</SelectItem>
          <SelectItem value="french">French</SelectItem>
          <SelectItem value="arabic">Arabic</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
