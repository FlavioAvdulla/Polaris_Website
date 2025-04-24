import React from "react";

// Import Data
import { benefits } from "../ProductSection/ProductSection";

// Translation
import { useTranslation } from 'react-i18next';

const BenefitsPackage = () => {

  const { t } = useTranslation();

  return (
    <div className="w-[85%] h-auto mx-auto items-center justify-between my-20
    
                    xs:grid xs:grid-cols-2
                    md:grid-cols-4">
      {/* ============= Benefit 1 ============= */}
      {benefits.map((product, index) => (

      
      <div className="flex flex-col items-center text-center
      
                      xs:mb-5
                      md:mb-0" key={index}>
        <div className="flex items-center justify-center border-[1px] border-primary
                         
                        
                        xs:w-[80px] xs:h-[80px] xs:rounded-[8px] xs:mb-3
                        md:w-[120px] md:h-[120px] md:rounded-[15px] md:mb-6
                        lg:w-[150px] lg:h-[150px]">
          <i><product.image className="text-primary
          
                                    xs:text-[40px]
                                    md:text-[55px]
                                    lg:text-[65px]"/></i>
        </div>
        <h1 className="font-camptonMedium
                      
                      xs:text-[11px]
                      md:text-[14px] 
                      lg:text-[17px]
                       ">{product.title}</h1>
        <p className="text-gray-500 font-camptonBook w-[80%]
                        
                        xs:text-[10px]
                        md:text-[12px]
                        lg:text-[14px]
                        ">{product.description}</p>
      </div>
     ))}
    </div>
  );
};

export default BenefitsPackage;
