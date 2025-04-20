import React from "react";

// React Icons
import { FaLocationDot, FaSquarePhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Contacts = () => {
  return (
    <div className="w-[85%] gap-5 flex mx-auto my-20 bg-slate-300">
      <div className="flex w-[50%] bg-slate-400">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44438.917600537636!2d19.776623558418!3d41.33317735423538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0x40092af10653720!2sTiran%C3%AB%2C%20Albania!5e1!3m2!1sen!2s!4v1745183291788!5m2!1sen!2s"
          // width="400"
          // height="400"
          // style="border:0;"
          // allowfullscreen=""
          loading="lazy"
          className="flex w-[100%] h-[350px]"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col w-[50%] gap-5 bg-slate-400">
        <div className="flex w-[100%] h-[100%] p-5 justify-left items-center bg-slate-100">
          <i>
            <FaLocationDot className="text-primary text-[30px]" />
          </i>
        </div>
        <div className="flex w-[100%] h-[100%] p-5 justify-left items-center bg-slate-100">
          <i>
            <FaSquarePhone className="text-primary text-[30px]" />
          </i>
        </div>
        <div className="flex w-[100%] h-[100%] p-5 justify-left items-center bg-slate-100">
          <i>
            <MdMail className="text-primary text-[30px]" />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
