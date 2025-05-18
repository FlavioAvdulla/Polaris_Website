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

export function AllCategories() {

  const { t } = useTranslation();

  return (
    <Select>
      <SelectTrigger className="w-[200px] h-[45px] gap-3 border-none
                                rounded-md rounded-bl-none rounded-br-none bg-gray-100 font-camptonBook
                                dark:bg-gray-800 dark:text-white
                                
                                sm:w-[150px]
                                lg:w-[200px]">
        <SelectValue placeholder={t('navbar_03.allCategories')}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel><p className="font-camptonBook text-primary
                                     dark:text-secondary_01">{t('navbar_03.categories')}</p></SelectLabel>
          <SelectItem value="smartphones"><p className="font-camptonBook">{t('navbar_03.smartphones')}</p></SelectItem>
          <SelectItem value="tablets"><p className="font-camptonBook">{t('navbar_03.tablets')}</p></SelectItem>
          <SelectItem value="fitnessTrackers"><p className="font-camptonBook">{t('navbar_03.fitnessTrackers')}</p></SelectItem>
          <SelectItem value="headphones"><p className="font-camptonBook">{t('navbar_03.headphones')}</p></SelectItem>
          <SelectItem value="speakers"><p className="font-camptonBook">{t('navbar_03.speakers')}</p></SelectItem>
          <SelectItem value="gamingConsoles"><p className="font-camptonBook">{t('navbar_03.gamingConsoles')}</p></SelectItem>
          <SelectItem value="portableChargers"><p className="font-camptonBook">{t('navbar_03.portableChargers')}</p></SelectItem>
          <SelectItem value="bluetoothEarphones"><p className="font-camptonBook">{t('navbar_03.bluetoothEarphones')}</p></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
