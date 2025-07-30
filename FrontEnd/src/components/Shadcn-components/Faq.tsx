import { IoIosCloseCircle } from "react-icons/io";
import React, { useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = ({ setShowFaq }) => {

  const { t } = useTranslation();
  const faqRef = useRef(null)

  const handleClose = () => {
    setShowFaq(false);
  };

  {/* ============= Close when clicking outside ============= */}
  const handleCloseOutside = (event) => {
    if (faqRef.current && !faqRef.current.contains(event.target)) {
      handleClose();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseOutside)
    return () => {
      document.removeEventListener("mousedown", handleCloseOutside)
    }
  }, [])

  return (
    <div className="flex fixed items-center z-30 w-[100%] h-[100%]"
         ref={faqRef}
         onClick={(e) => e.stopPropagation()}>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col mx-auto justify-center items-center z-10">
        {/* ============= Question 01 ============= */}
        <AccordionItem
          value="item-1"
          className="flex-col p-5 h-auto rounded-xl rounded-bl-none rounded-br-none
                     dark:bg-darkColor

                     xs:w-[95%]
                     md:w-[350px]">
                                
          <div className="flex w-[100%] h-auto items-center justify-between">
            <h1 className="font-camptonBook text-[20px]
                           dark:text-white">{t("faq.faq")}</h1>
            <IoIosCloseCircle
              className="text-primary text-[30px] cursor-pointer duration-300
                         dark:text-secondary_01
                         hover:rotate-[180deg]"
              onClick={handleClose}
            />
          </div>
          <AccordionTrigger className="font-camptonMedium
                                       dark:text-white">
          {t("faq.question_01")}
          </AccordionTrigger>
          <AccordionContent className="text-justify
                                       dark:text-white">
          {t("faq.answer_01")}
          </AccordionContent>
        </AccordionItem>
        {/* ============= Question 02 ============= */}
        <AccordionItem
          value="item-2"
          className="flex-col p-5 h-auto rounded-none xs:w-[95%] md:w-[350px]
                     dark:bg-darkColor">
          <AccordionTrigger className="font-camptonMedium
                                       dark:text-white">
          {t("faq.question_02")}
          </AccordionTrigger>
          <AccordionContent className="text-justify
                                       dark:text-white">
          {t("faq.answer_02")}
          </AccordionContent>
        </AccordionItem>
        {/* ============= Question 03 ============= */}
        <AccordionItem
          value="item-3"
          className="flex-col p-5 h-auto rounded-none
                     dark:bg-darkColor
                     
                     xs:w-[95%]
                     md:w-[350px]">
          <AccordionTrigger className="font-camptonMedium
                                       dark:text-white">{t("faq.question_03")}
          </AccordionTrigger>
          <AccordionContent className="text-justify
                                       dark:text-white">{t("faq.answer_03")}
          </AccordionContent>
        </AccordionItem>
        {/* ============= Question 04 ============= */}
        <AccordionItem
          value="item-4"
          className="flex-col p-5 h-auto rounded-xl rounded-tl-none rounded-tr-none
                     dark:bg-darkColor 
          
                     xs:w-[95%]
                     md:w-[350px]">
          <AccordionTrigger className="font-camptonMedium
                                       dark:text-white">{t("faq.question_04")}
          </AccordionTrigger>
          <AccordionContent className="text-justify
                                       dark:text-white">{t("faq.answer_04")}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex fixed bg-black bg-opacity-60 w-[100%] h-[100%] backdrop-blur-[3px]" onClick={handleClose}/>
    </div>
  );
};

export default Faq;
