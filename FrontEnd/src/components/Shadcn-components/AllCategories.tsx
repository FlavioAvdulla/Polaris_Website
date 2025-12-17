import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
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

export function AllCategories({ onCategorySelect }: AllCategoriesProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = React.useState("");
  const [isInitialized, setIsInitialized] = React.useState(false);

  // Reset selection when on homepage
  React.useEffect(() => {
    if (location.pathname === "/") {
      setSelectedValue("");
    }
  }, [location.pathname]);

  // Define all categories with their paths
  const categories = [
    { value: "smartphones", label: t('navbar_03.smartphones'), path: "/SmartPhones" },
    { value: "computers", label: t('navbar_03.computers'), path: "/Computers" },
    { value: "speakers", label: t('navbar_03.speakers'), path: "/Speakers" },
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