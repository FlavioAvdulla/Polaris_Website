import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from 'react-i18next';

export function AllCategories({ onCategorySelect }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = React.useState("");

  // Reset selection when on homepage
  React.useEffect(() => {
    if (location.pathname === "/") {
      setSelectedValue("");
    }
  }, [location.pathname]);

  // Define all categories with their paths
  const categories = [
    { value: "smartphones", label: t('navbar_03.smartphones'), path: "/SmartPhones" },
    { value: "tablets", label: t('navbar_03.tablets'), path: "/Tablets" },
    { value: "fitnessTrackers", label: t('navbar_03.fitnessTrackers'), path: "/FitnessTrackers" },
    { value: "headphones", label: t('navbar_03.headphones'), path: "/Headphones" },
    { value: "speakers", label: t('navbar_03.speakers'), path: "/Speakers" },
    { value: "gamingConsoles", label: t('navbar_03.gamingConsoles'), path: "/GamingConsoles" },
    { value: "portableChargers", label: t('navbar_03.portableChargers'), path: "/PortableChargers" },
    { value: "bluetoothEarphones", label: t('navbar_03.bluetoothEarphones'), path: "/BluetoothEarphones" },
  ];

  // Handle category selection
  const handleCategoryChange = (value) => {
    setSelectedValue(value);
    const selectedCategory = categories.find(cat => cat.value === value);
    if (selectedCategory) {
      if (onCategorySelect) {
        // Use the callback if provided (for the integrated component)
        onCategorySelect(selectedCategory.path);
      } else {
        // Direct navigation (for standalone use)
        navigate(selectedCategory.path);
      }
    }
  };

  return (
    <Select value={selectedValue} onValueChange={handleCategoryChange}>
      <SelectTrigger className="w-[200px] h-[45px] gap-3 border-none
                                rounded-md rounded-bl-none rounded-br-none bg-gray-100 font-camptonBook
                                dark:bg-gray-800 dark:text-white
                                
                                sm:w-[150px]
                                lg:w-[200px]">
        <SelectValue placeholder={t('navbar_03.allCategories')} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>
            <p className="font-camptonBook text-primary dark:text-secondary_01">
              {t('navbar_03.categories')}
            </p>
          </SelectLabel>
          {categories.map((category) => (
            <SelectItem className="cursor-pointer" key={category.value} value={category.value}>
              <p className="font-camptonBook">{category.label}</p>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}