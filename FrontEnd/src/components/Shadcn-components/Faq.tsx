import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { IoIosCloseCircle } from "react-icons/io";

// Translation
import { useTranslation } from 'react-i18next';

const Faq = ({ setShowFaq }) => {

  const { t } = useTranslation();

  const handleClose = () => {
    setShowFaq(false);
  };

  return (
    <div className="flex fixed items-center z-20 w-[100%] h-[100%]">
      <Accordion
        type="single"
        collapsible
        className="flex flex-col mx-auto justify-center items-center z-10">
        {/* ============= Question 01 ============= */}
        <AccordionItem
          value="item-1"
          className="flex-col p-5 h-auto rounded-xl rounded-bl-none rounded-br-none bg-white
        
                              xs:w-[95%] md:w-[350px]">
                                
          <div className="flex w-[100%] h-auto items-center justify-between">
            <h1 className="font-camptonBook text-[20px]">{t("faq.faq")}</h1>
            <IoIosCloseCircle
              className="text-primary text-[30px] cursor-pointer duration-300 hover:rotate-[180deg]"
              onClick={handleClose}
            />
          </div>
          <AccordionTrigger className="font-camptonMedium">
          {t("faq.question_01")}
          </AccordionTrigger>
          <AccordionContent className="text-justify">
          {t("faq.answer_01")}
          </AccordionContent>
        </AccordionItem>
        {/* ============= Question 02 ============= */}
        <AccordionItem
          value="item-2"
          className="flex-col p-5 h-auto rounded-none bg-white xs:w-[95%] md:w-[350px]"
        >
          <AccordionTrigger className="font-camptonMedium">
          {t("faq.question_02")}
          </AccordionTrigger>
          <AccordionContent className="text-justify">
          {t("faq.answer_02")}
          </AccordionContent>
        </AccordionItem>
        {/* ============= Question 03 ============= */}
        <AccordionItem
          value="item-3"
          className="flex-col p-5 h-auto rounded-none bg-white xs:w-[95%] md:w-[350px]"
        >
          <AccordionTrigger className="font-camptonMedium">
          {t("faq.question_03")}
          </AccordionTrigger>
          <AccordionContent className="text-justify">
          {t("faq.answer_03")}
          </AccordionContent>
        </AccordionItem>
        {/* ============= Question 04 ============= */}
        <AccordionItem
          value="item-4"
          className="flex-col p-5 h-auto rounded-xl rounded-tl-none rounded-tr-none bg-white xs:w-[95%] md:w-[350px]"
        >
          <AccordionTrigger className="font-camptonMedium">
          {t("faq.question_04")}
          </AccordionTrigger>
          <AccordionContent className="text-justify">
          {t("faq.answer_04")}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex fixed bg-black bg-opacity-60 w-[100%] h-[100%] backdrop-blur-[3px]" />
    </div>
  );
};

export default Faq;
