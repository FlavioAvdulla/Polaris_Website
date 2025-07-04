import { useTranslation } from 'react-i18next';
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

export function SelectLanguage() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  // Function to handle language change
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  // Map language codes to display names
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    // { code: 'fr', name: 'French' },
    // { code: 'ar', name: 'Arabic' }
  ];

  return (
    <Select 
      defaultValue={i18n.language} 
      onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-auto gap-2 shadow-none border-[1px] border-gray-300
                                dark:border-gray-600">
        <SelectValue placeholder="">
          <p className="font-camptonBook xs:text-[12px] md:text-[14px]">
            {languages.find(lang => lang.code === i18n.language)?.name || 'English'}
          </p>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>
            <p className="font-camptonBook text-primary
                          dark:text-secondary_01">{t('navbar_02.languages')}</p>
          </SelectLabel>
          {languages.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              <p>{language.name}</p>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}