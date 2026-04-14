import * as React from "react"
import { useCurrency } from "../context/CurrencyContext"
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
  const { currency, setCurrency } = useCurrency();

  const currencyLabels: { [key: string]: string } = {
    eur: "EUR",
    usd: "USD",
    inr: "INR",
    myr: "MYR",
  };

  return (
    <Select value={currency} onValueChange={setCurrency}>
      <SelectTrigger className="w-auto gap-2 shadow-none border-[1px] border-gray-300
                                dark:border-gray-600">
        <SelectValue>{currencyLabels[currency]}</SelectValue>
        <p className="font-camptonBook
        
                      xs:text-[12px]
                      md:text-[14px]"></p>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel><p className="font-camptonBook text-primary
                                     dark:text-secondary_01">Currency</p></SelectLabel>
          <SelectItem value="eur"><p>EUR - Euro</p></SelectItem>
          <SelectItem value="usd"><p>USD - US Dollar</p></SelectItem>
          <SelectItem value="inr"><p>INR - Indian Rupee</p></SelectItem>
          <SelectItem value="myr"><p>MYR - Malaysian Ringgit</p></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}