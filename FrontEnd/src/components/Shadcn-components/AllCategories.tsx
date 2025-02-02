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

export function AllCategories() {
  return (
    <Select>
      <SelectTrigger className="w-[200px] h-[45px] gap-3 border-none
                                rounded-md rounded-bl-none rounded-br-none bg-gray-100 font-camptonBook ">
        <SelectValue placeholder="All Categories"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="smartphones">Smartphones</SelectItem>
          <SelectItem value="tablets">Tablets</SelectItem>
          <SelectItem value="fitnessTrackers">Fitness Trackers</SelectItem>
          <SelectItem value="headphones">Headphones</SelectItem>
          <SelectItem value="speakers">Speakers</SelectItem>
          <SelectItem value="gamingConsoles">Gaming Consoles</SelectItem>
          <SelectItem value="portableChargers">Portable Chargers</SelectItem>
          <SelectItem value="bluetoothEarphones">Bluetooth Earphones</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
