import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
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

interface AllCategoriesProps {
  onCategorySelect?: (path: string) => void;
}

// Storage key for persisting the selection
const STORAGE_KEY = "searchbar_category_selection";

export function SearchBarSelect({ onCategorySelect }: AllCategoriesProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = React.useState("");
  const [isInitialized, setIsInitialized] = React.useState(false);

  // Define all categories with their paths
  const categories = [
    { value: "smartphones", label: t("navbar_03.smartphones"), path: "/SmartPhones"},
    { value: "computers", label: t("navbar_03.computers"), path: "/Computers" },
    { value: "speakers", label: t("navbar_03.speakers"), path: "/Speakers" },
  ];

  // Initialize selected value on component mount
  React.useEffect(() => {
    // Clear storage and state if on homepage
    if (location.pathname === "/") {
      setSelectedValue("");
      localStorage.removeItem(STORAGE_KEY);
      setIsInitialized(true);
      return;
    }

    // Try to get stored value
    const storedValue = localStorage.getItem(STORAGE_KEY);

    // Find category that matches current path
    const currentCategory = categories.find(
      (cat) => cat.path === location.pathname
    );

    // Priority: Current path > Stored value > Empty string
    if (currentCategory) {
      setSelectedValue(currentCategory.value);
    } else if (storedValue && categories.some(cat => cat.value === storedValue)) {
      // Only use stored value if it's valid
      setSelectedValue(storedValue);
    } else {
      setSelectedValue("");
    }
    
    setIsInitialized(true);
  }, [location.pathname]); // Add dependency array

  // Save to localStorage whenever selection changes (only after initialization)
  React.useEffect(() => {
    if (!isInitialized) return;
    
    if (selectedValue) {
      localStorage.setItem(STORAGE_KEY, selectedValue);
    } else if (location.pathname === "/") {
      // Clear storage on homepage
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [selectedValue, isInitialized, location.pathname]);

  // Handle category selection
  const handleCategoryChange = (value: React.SetStateAction<string>) => {
    setSelectedValue(value);
    const selectedCategory = categories.find((cat) => cat.value === value);
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
      <SelectTrigger
        className="w-auto h-auto gap-3 outline-none focus:ring-0
                   border-[1px] border-primary border-r-0 rounded-none
                   rounded-tl-md rounded-bl-md bg-white
                   dark:bg-transparent dark:border-gray-600 dark:text-white
                   xs:gap-1">
        <SelectValue placeholder={t("navbar_02.all")} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>
            <p className="font-camptonBook text-primary
                          dark:text-secondary_01">
              Categories
            </p>
          </SelectLabel>
          {categories.map((category) => (
            <SelectItem
              className="cursor-pointer"
              key={category.value}
              value={category.value}>
              <p className="font-camptonBook">{category.label}</p>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}