import React, { useState, useRef, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdSend } from "react-icons/md";
import Chat_Girl from "../../assets/images/Chat_Girl.jpg";
import { useTheme } from "../../components/context/ThemeContext";

interface Message {
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

const ChatBox = () => {
  const { theme } = useTheme();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with a welcome message
  useEffect(() => {
    setMessages([{
      text: "Hello! How can we help you today?",
      sender: 'support',
      timestamp: new Date()
    }]);
  }, []);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    try {
      setIsLoading(true);
      setMessages(prev => [...prev, userMessage]);
      setMessage("");

      // In a real implementation, you would send this to your backend
      // which would then forward it to WhatsApp via the API
      // This is just a simulation
      setTimeout(() => {
        const reply: Message = {
          text: "Thanks for your message! Our team will respond shortly via WhatsApp.",
          sender: 'support',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, reply]);
        setIsLoading(false);

        // Open WhatsApp with a pre-filled message
        const whatsappUrl = `https://wa.me/355676311918?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
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
        <PopoverContent className="mr-10 mb-3 w-[350px]">
          {/* Header */}
          <div className="flex w-full h-[80px] p-4 rounded-t-lg bg-primary dark:bg-secondary_01">
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
                  <div className="text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3">
            <div className="flex items-center gap-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex w-[100%] h-[45px] font-camptonLight rounded-lg
                         rounded-tl-none rounded-tr-none p-3 pr-0 outline-none border-none min-h-[50px]
                         dark:bg-transparent dark:text-white resize-none text-[15px]"
                placeholder="Type your message..."
                rows={1}
                disabled={isLoading}
              />
              <button 
                onClick={handleSendMessage}
                disabled={!message.trim() || isLoading}
                className="p-2 text-primary dark:text-secondary_01 disabled:opacity-50"
              >
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