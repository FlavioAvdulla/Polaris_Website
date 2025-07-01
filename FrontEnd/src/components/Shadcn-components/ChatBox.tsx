import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdSend } from "react-icons/md";
import Polaris_Logo_White_Icon from "../../assets/images/Polaris_Logo_White_Icon.svg";
// import Polaris_Logo_Icon_Secondary_01 from "../../assets/images/Polaris_Logo_Icon_Secondary_01.svg";
import { useTheme } from "../../components/context/ThemeContext";

const ChatBox = () => {

  const { theme } = useTheme();

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <Popover>
        <PopoverTrigger className="flex items-center justify-center w-auto aspect-1 bg-primary rounded-full">
          <i>
            <IoChatbubblesOutline className="flex p-4 text-[55px] text-white" />
          </i>
        </PopoverTrigger>
        <PopoverContent className="mr-10 mb-3">
          <div className="flex w-[100%] h-auto p-4 rounded-lg rounded-bl-none rounded-br-none bg-primary">
            <div className="flex items-center justify-center p-1 bg-white w-[50px] aspect-1 rounded-full">
              <img
                className="cursor-pointer w-[20px]"
                src={Polaris_Logo_White_Icon}
                alt="Polaris Logo"
                loading="lazy"
              />
            </div>
          </div>
          {/* ============= Chat Head ============= */}
          <div className="flex w-[100%] h-[300px] p-4 rounded-lg rounded-tl-none rounded-tr-none">
            <p className="text-white">ehhfoaewrhfew</p>
          </div>
          {/* ============= Line ============= */}
          <div className="h-[1px] w-[100%] bg-gray-300 dark:bg-gray-600" />

          {/* ============= Text Input ============= */}
          <div className="flex items-center w-[100%] justify-between gap-3">
            <textarea
              className="flex w-[100%] h-[45px] font-camptonLight rounded-lg
                         rounded-tl-none rounded-tr-none p-3 pr-0 outline-none border-none min-h-[50px]
                         dark:bg-gray-800 dark:text-white resize-none text-[15px]

                         [&::-webkit-resizer]:hidden
                         [&::-webkit-scrollbar]:hidden
                         [&::-webkit-inner-spin-button]:hidden
                         [&::-webkit-outer-spin-button]:hidden
                         [&::-webkit-search-cancel-button]:hidden
                         [&::-webkit-clear-button]:hidden"
              placeholder="Enter your message..."
              required
            />
            {/* ============= Line ============= */}
            <div className="h-[30px] w-[1px] bg-gray-300 dark:bg-gray-600" />

            {/* ============= Send Message button ============= */}
            <i className="pr-5">
              <MdSend className="text-primary text-[18px] cursor-pointer" />
            </i>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ChatBox;
