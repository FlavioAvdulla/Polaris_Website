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
          <SelectLabel><p className="font-camptonBook text-primary">Categories</p></SelectLabel>
          <SelectItem value="smartphones"><p className="font-camptonBook">Smartphones</p></SelectItem>
          <SelectItem value="tablets"><p className="font-camptonBook">Tablets</p></SelectItem>
          <SelectItem value="fitnessTrackers"><p className="font-camptonBook">Fitness Trackers</p></SelectItem>
          <SelectItem value="headphones"><p className="font-camptonBook">Headphones</p></SelectItem>
          <SelectItem value="speakers"><p className="font-camptonBook">Speakers</p></SelectItem>
          <SelectItem value="gamingConsoles"><p className="font-camptonBook">Gaming Consoles</p></SelectItem>
          <SelectItem value="portableChargers"><p className="font-camptonBook">Portable Chargers</p></SelectItem>
          <SelectItem value="bluetoothEarphones"><p className="font-camptonBook">Bluetooth Earphones</p></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
