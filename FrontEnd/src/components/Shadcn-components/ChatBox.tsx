import React, { useState, useRef, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { IoIosCloseCircle } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdSend } from "react-icons/md";
import { SlEmotsmile } from "react-icons/sl";
import Chat_Girl from "../../assets/images/Chat_Girl.jpg";
import { useTheme } from "../../components/context/ThemeContext";
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { FiFile, FiImage, FiDownload } from "react-icons/fi";

interface Message {
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
  attachment?: {
    name: string;
    type: string;
    url: string;
  };
}

const ChatBox = () => {
  const { theme } = useTheme();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMessages([{
      text: "Hello! How can we help you today? You can send us files or images.",
      sender: 'support',
      timestamp: new Date()
    }]);
  }, []);

  const handleSendMessage = async () => {
    if (!message.trim() && !fileInputRef.current?.files?.length) return;

    const userMessage: Message = {
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const mockFileUrl = URL.createObjectURL(file);
      
      userMessage.attachment = {
        name: file.name,
        type: file.type,
        url: mockFileUrl
      };
    }

    try {
      setIsLoading(true);
      setMessages(prev => [...prev, userMessage]);
      setMessage("");
      setShowEmojiPicker(false);
      
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setTimeout(() => {
        const reply: Message = {
          text: "Thank you! We've received your message" + 
                (file ? ` and attachment (${file.name})` : "") + 
                ". We'll respond shortly via WhatsApp.",
          sender: 'support',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, reply]);
        setIsLoading(false);

        if (message.trim()) {
          const whatsappUrl = `https://wa.me/355676311918?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
        }
      }, 1000);
      
    } catch (err) {
      console.error("Failed to send message", err);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessage(prev => prev + emojiData.emoji);
  };

  const renderAttachment = (attachment: Message['attachment']) => {
    if (!attachment) return null;
    
    const isImage = attachment.type.startsWith('image/');
    
    return (
      <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="flex items-center gap-2">
          {isImage ? (
            <FiImage className="text-lg" />
          ) : (
            <FiFile className="text-lg" />
          )}
          <span className="text-sm truncate">{attachment.name}</span>
          <a 
            href={attachment.url} 
            download={attachment.name}
            className="ml-auto text-primary dark:text-secondary_01"
            title="Download">
            <FiDownload className="text-lg" />
          </a>
        </div>
        {isImage && (
          <div className="mt-2">
            <img 
              src={attachment.url} 
              alt={attachment.name}
              className="max-w-full h-auto max-h-40 rounded"/>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <Popover>
        <PopoverTrigger className="flex items-center justify-center w-auto aspect-1 bg-primary rounded-full
                                   dark:bg-secondary_01 hover:opacity-90 transition-opacity">
          <IoChatbubblesOutline className="flex p-4 text-[55px] text-white" />
        </PopoverTrigger>
        <PopoverContent className="mr-10 mb-3 w-[350px] p-0">

          {/* Header with close button */}
          <div className="flex w-full h-[80px] p-4 rounded-t-lg bg-primary relative items-center justify-between
                          dark:bg-secondary_01">
            <div className="flex items-center gap-4">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={Chat_Girl}
                alt="Support Agent"
                loading="lazy"
              />
              <div className="flex flex-col">
                <h1 className="text-white font-camptonBook text-xs">
                  WhatsApp Support
                </h1>
                <h1 className="text-white font-camptonBold text-sm">
                  Customer Care
                </h1>
              </div>
            </div>
            <PopoverClose>
              <i><IoIosCloseCircle className="text-[23px] text-white duration-300 hover:rotate-[180deg]"/></i>
            </PopoverClose>
          </div>

          {/* Messages Container */}
          <div className="h-[250px] p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div 
                  className={`inline-block px-4 py-2 rounded-lg max-w-[80%] text-[15px] ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-white dark:bg-secondary_01' 
                      : 'bg-gray-100 dark:bg-gray-700 dark:text-white'
                  }`}>
                  {msg.text}
                  {msg.attachment && renderAttachment(msg.attachment)}
                  <div className="text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Emoji Picker */}
          {showEmojiPicker && (
            <div className="absolute bottom-20 right-4 z-10">
              <EmojiPicker 
                onEmojiClick={handleEmojiClick}
                width={300}
                height={350}
                theme={theme === 'dark' ? 'dark' : 'light'}/>
            </div>
          )}

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={() => {}}
            className="hidden"
            accept="image/*, .pdf, .doc, .docx, .txt"/>

          {/* Divider */}
          <div className="h-px w-full bg-gray-300 dark:bg-gray-600" />

          {/* Input Area */}
          <div className="p-3">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="text-primary dark:text-secondary_01"
              >
                <SlEmotsmile className="text-xl" />
              </button>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex w-[100%] h-[45px] font-camptonLight rounded-lg
                           rounded-tl-none rounded-tr-none p-3 pr-0 outline-none border-none min-h-[50px]
                           dark:bg-transparent dark:text-white resize-none text-[15px]
                           [&::-webkit-resizer]:hidden
                           [&::-webkit-scrollbar]:hidden
                           [&::-webkit-inner-spin-button]:hidden
                           [&::-webkit-outer-spin-button]:hidden
                           [&::-webkit-search-cancel-button]:hidden
                           [&::-webkit-clear-button]:hidden"
                placeholder="Type your message..."
                rows={1}
                disabled={isLoading}/>
              <div className="h-[30px] w-[1px] bg-gray-300 dark:bg-gray-600" />
              <button 
                onClick={handleSendMessage}
                disabled={(!message.trim() && !fileInputRef.current?.files?.length) || isLoading}
                className="p-2 text-primary dark:text-secondary_01 disabled:opacity-50">
                <MdSend className="text-xl" />
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ChatBox;