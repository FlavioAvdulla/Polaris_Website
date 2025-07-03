import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdSend } from "react-icons/md";
// import Polaris_Logo_White_Icon from "../../assets/images/Polaris_Logo_White_Icon.svg";
import Chat_Girl from "../../assets/images/Chat_Girl.jpg";
// import Polaris_Logo_Icon_Secondary_01 from "../../assets/images/Polaris_Logo_Icon_Secondary_01.svg";
import { useTheme } from "../../components/context/ThemeContext";
import { SlEmotsmile } from "react-icons/sl";
import { IoIosAttach } from "react-icons/io";

const ChatBox = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <Popover>
        <PopoverTrigger className="flex items-center justify-center w-auto aspect-1 bg-primary rounded-full
                                   dark:bg-secondary_01">
          <i>
            <IoChatbubblesOutline className="flex p-4 text-[55px] text-white" />
          </i>
        </PopoverTrigger>
        <PopoverContent className="mr-10 mb-3">
          <div className="flex w-[100%] h-[80px] p-4 rounded-lg rounded-bl-none rounded-br-none bg-primary
                          dark:bg-secondary_01">
            <div className="flex w-[100%] items-center justify-start aspect-1 rounded-full gap-4">
              <img
                className="cursor-pointer w-[40px] rounded-full"
                src={Chat_Girl}
                alt="Polaris Logo"
                loading="lazy"
              />
              <div className="flex flex-col">
                <h1 className="text-white font-camptonBook text-[12px]">
                  Chat With
                </h1>
                <h1 className="text-white font-camptonBold text-[15px]">
                  Support Team
                </h1>
              </div>
            </div>
          </div>
          {/* ============= Chat Head ============= */}
          <div className="flex w-[100%] h-[250px] text-[15px] font-camptonBook rounded-lg rounded-tl-none rounded-tr-none p-4">
            <p className="dark:text-white">Hello!</p>
          </div>
          {/* ============= Line ============= */}
          <div className="h-[1px] w-[100%] bg-gray-300 dark:bg-gray-600" />

          {/* ============= Text Input ============= */}
          <div className="flex items-center w-[100%] justify-between gap-3">
            <textarea
              className="flex w-[100%] h-[45px] font-camptonLight rounded-lg
                         rounded-tl-none rounded-tr-none p-3 pr-0 outline-none border-none min-h-[50px]
                         dark:bg-transparent dark:text-white resize-none text-[15px]

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
            <i className="pr-3">
              <MdSend className="text-primary text-[18px] cursor-pointer
                                 dark:text-secondary_01" />
            </i>
          </div>
          {/* ============= Emoji & Attach Icons ============= */}
          <div className="flex pl-3 gap-3">
            <i>
              <SlEmotsmile className="flex my-4 text-[20px] text-primary
                                      dark:text-secondary_01"/>
            </i>
            <i>
              <IoIosAttach className="flex my-4 text-[20px] text-primary
                                      dark:text-secondary_01"/>
            </i>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ChatBox;
