import React from "react";
import { SelectLanguage } from "../Shadcn-components/SelectLanguage";
import { SelectCurrency } from "../Shadcn-components/SelectCurrency";
import { BsBrightnessHigh, BsPhone, BsMoon } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

interface Navbar01Props {
  setShowFaq: (show: boolean) => void;
}

// Type for your translation keys
// type NavbarTranslations = {
//   trackOrder: string;
//   aboutUs: string;
//   contact: string;
//   faq: string;
//   contactUs: string;
//   darkTheme: string;
//   lightTheme: string;
// };

const Navbar_01: React.FC<Navbar01Props> = ({ setShowFaq }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleFaqOpen = () => {
    setShowFaq(true);
  };

  const handleContactsOpen = () => {
    navigate("/Contacts");
  };

  return (
    <div className="flex h-auto py-5 mx-auto justify-between xs:flex-col xs:items-center xs:gap-3 xs:w-[100%] lg:flex-row lg:w-[85%] xl:flex-row bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <div className="flex gap-7 w-fit">
        <button 
          type="button" 
          className="font-camptonBook"
          aria-label={t('navbar_01.trackOrder')}
        >
          <p className="hover:text-primary ease-in-out duration-300 xs:text-[12px] md:text-[14px] dark:hover:text-secondary_02">
            {t('navbar_01.trackOrder')}
          </p>
        </button>
        <button 
          type="button" 
          className="font-camptonBook"
          aria-label={t('navbar_01.aboutUs')}
        >
          <p className="hover:text-primary ease-in-out duration-300 xs:text-[12px] md:text-[14px] dark:hover:text-secondary_02">
            {t('navbar_01.aboutUs')}
          </p>
        </button>
        <button 
          type="button" 
          className="font-camptonBook"
          onClick={handleContactsOpen}
          aria-label={t('navbar_01.contact')}
        >
          <p className="hover:text-primary ease-in-out duration-300 xs:text-[12px] md:text-[14px] dark:hover:text-secondary_02">
            {t('navbar_01.contact')}
          </p>
        </button>
        <button 
          type="button" 
          className="font-camptonBook"
          onClick={handleFaqOpen}
          aria-label={t('navbar_01.faq')}
        >
          <p className="hover:text-primary ease-in-out duration-300 xs:text-[12px] md:text-[14px] dark:hover:text-secondary_02">
            {t('navbar_01.faq')}
          </p>
        </button>
      </div>
      <div className="flex items-center justify-between xs:gap-0 xs:w-[85%] sm:w-[85%] md:w-[60%] lg:w-[60%] 2xl:w-[50%]">
        <div className="flex justify-between w-[100%]">
          <button 
            type="button"
            className="font-camptonBook flex items-center md:gap-2"
            aria-label={t('navbar_01.contactUs')}
          >
            <i className="xs:bg-primary xs:p-2 xs:text-white xs:rounded-full sm:hidden dark:bg-gray-700">
              <BsPhone className="text-[15px]" />
            </i>
            <div className="flex items-center lg:flex-col lg:gap-2 xl:flex-row">
              <p className="text-[14px] xs:hidden xl:flex">{t('navbar_01.contactUs')}</p>
              <p className="font-camptonMedium bg-gray-100 rounded-md text-primary px-2 py-1 xs:hidden
                            dark:bg-gray-700 dark:text-white
                            
                            sm:flex sm:text-[10px] md:text-[14px]">
                +355 (0) 67 63 11 918
              </p>
            </div>
          </button>
          <SelectLanguage />
          <div className="h-auto w-[1px] bg-gray-300 dark:bg-gray-700" />
          <SelectCurrency />
          <button 
            type="button"
            className="font-camptonBook group flex items-center gap-2"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? t('navbar_01.darkTheme') : t('navbar_01.lightTheme')}
          >
            <i>
              {theme === 'light' ? (
                <BsMoon className="bg-gray-100 w-auto h-auto p-1 rounded-md text-[15px] ease-in-out duration-300" />
              ) : (
                <BsBrightnessHigh className="dark:bg-gray-700 w-auto h-auto p-1 rounded-md text-[15px] ease-in-out duration-300" />
              )}
            </i>
            <p className="text-[14px] ease-in-out duration-300 xs:hidden lg:flex">
              {theme === 'light' ? t('navbar_01.darkTheme') : t('navbar_01.lightTheme')}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar_01;