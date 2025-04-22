import React from "react";

// React Icons
import { MdMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaSquarePinterest,
  FaLinkedin,
  FaLocationDot,
  FaSquarePhone,
} from "react-icons/fa6";

const Contacts = () => {
  return (
    <div className="w-[85%] flex flex-col mx-auto my-20">
      <div className="flex gap-5 mb-20">
        {/* ============= Google Maps ============= */}
        <div className="flex w-[50%]">
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
        {/* ============= Contact Details ============= */}
        <div className="flex flex-col w-[50%] gap-5">
          <div className="flex w-[100%] h-[100%] p-5 gap-4 justify-left items-center bg-gray-100">
            <i>
              <FaLocationDot className="text-primary text-[30px]" />
            </i>
            <div className="flex flex-col">
              <p className="font-camptonMedium text-[22px]">Address</p>
              <p className="font-camptonBook">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
          </div>
          <div className="flex w-[100%] h-[100%] p-5 gap-4 justify-left items-center bg-gray-100">
            <i>
              <FaSquarePhone className="text-primary text-[30px]" />
            </i>
            <div className="flex flex-col">
              <p className="font-camptonMedium text-[22px]">Talk to us</p>
              <p className="font-camptonBook">+355 67 63 11 918</p>
            </div>
          </div>
          <div className="flex w-[100%] h-[100%] p-5 gap-4 justify-left items-center bg-gray-100">
            <i>
              <MdMail className="text-primary text-[30px]" />
            </i>
            <div className="flex flex-col">
              <p className="font-camptonMedium text-[22px]">Send us email</p>
              <p className="font-camptonBook">a.flavio4366@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* ============= Section - 02 ============= */}
      <div className="flex w-[100%] gap-10 h-auto">
        <div className="flex flex-col justify-between my-auto w-[50%] gap-10">
          <h2 className="font-camptonMedium text-primary">Contact Us</h2>
          <h1 className="font-camptonBold text-[45px] leading-tight">
            DO YOU HAVE<br/>ANY QUESTION?
          </h1>
          <p className="font-camptonBook">
            For your car we will do everything advice, repairs and maintenance.
            We are the some preferred choice by many car owners because.
          </p>

          <div>
            <div className="flex gap-4">
              <i>
                <FaFacebookSquare
                  className="text-primary cursor-pointer
                                              hover:scale-110 ease-in-out duration-300
                                              
                                              xs:text-[25px]
                                              md:text-[20px]
                                              lg:text-[35px]"
                />
              </i>
              <i>
                <FaSquareXTwitter
                  className="text-primary cursor-pointer
                                              hover:scale-110 ease-in-out duration-300
                                              
                                              xs:text-[25px]
                                              md:text-[20px]
                                              lg:text-[35px]"
                />
              </i>
              <i>
                <FaLinkedin
                  className="text-primary cursor-pointer
                                              hover:scale-110 ease-in-out duration-300
                                              
                                              xs:text-[25px]
                                              md:text-[20px]
                                              lg:text-[35px]"
                />
              </i>
              <i>
                <FaSquarePinterest
                  className="text-primary cursor-pointer
                                              hover:scale-110 ease-in-out duration-300
                                              
                                              xs:text-[25px]
                                              md:text-[20px]
                                              lg:text-[35px]"
                />
              </i>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[50%] gap-5">
          <div className="grid grid-cols-2 gap-5">
            <input
              className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
              type="email"
              placeholder="Full Name"
              required
            />
            <input
              className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
              type="text"
              placeholder="Email"
              required
            />
            <input
              className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
              type="text"
              placeholder="Phone Number"
              required
            />
            <input
              className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
              type="email"
              placeholder="Subject"
              required
            />
          </div>
          <input
              className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
              type="email"
              placeholder="Service"
              required
            />
            <textarea
            className="w-[100%] min-h-[200px] rounded-[23px] font-camptonLight bg-gray-100 p-5 outline-none border-none"
            type="text"
            placeholder="Your Message"
            required
          />
          <button className="flex w-[100%] h-[45px] rounded-full bg-primary border-[1px] border-primary
                          text-white items-center justify-center font-camptonBook p-5

                          hover:bg-transparent hover:text-primary duration-300 ease-in-out
                          ">SUBMIT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
