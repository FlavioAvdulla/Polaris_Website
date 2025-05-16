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

// Translation
import { useTranslation } from 'react-i18next';

export function SearchBarSelect() {

  const { t } = useTranslation()

  return (
    <Select>
      <SelectTrigger
        className="w-auto h-auto gap-3 outline-none focus:ring-0
                   border-[1px] border-primary border-r-0 rounded-none
                   rounded-tl-md rounded-bl-md bg-white
                   dark:bg-transparent dark:border-gray-600 dark:text-white
                   
                   xs:gap-1">
        <SelectValue placeholder={t('navbar_02.all')} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel><p className="font-camptonBook text-primary">Categories</p></SelectLabel>
          <SelectItem value="fashion"><p className="font-camptonBook">Fashion</p></SelectItem>
          <SelectItem value="accessories"><p className="font-camptonBook">Accessories</p></SelectItem>
          <SelectItem value="electronics"><p className="font-camptonBook">Electronics</p></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
