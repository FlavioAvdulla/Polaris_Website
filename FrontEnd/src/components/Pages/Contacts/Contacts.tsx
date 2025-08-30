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

// Translation
import { useTranslation } from 'react-i18next';

const Contacts = () => {

  const [result, setResult] = React.useState("")

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...")
    const formData = new FormData(event.target)

    formData.append("access_key", "6051b6b5-751e-4800-8de9-89c9c0bb27e9")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully!")
      event.target.reset();
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  const { t } = useTranslation();

  return (
    <div className="w-[85%] flex flex-col mx-auto my-20">
      <div className="flex gap-5 mb-20
      
                      xs:flex-col
                      lg:flex-row">
        {/* ============= Google Maps ============= */}
        <div className="flex
        
                        xs:w-[100%]
                        lg:w-[50%]">
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
        <div className="flex flex-col gap-5
        
                        xs:w-[100%]
                        lg:w-[50%]">
          <div className="flex w-[100%] h-[100%] p-5 gap-4 justify-left items-center bg-gray-100
                          dark:bg-gray-800">
            <i>
              <FaLocationDot className="text-primary text-[30px]
                                        dark:text-secondary_01"/>
            </i>
            <div className="flex flex-col">
              <p className="font-camptonMedium
                            dark:text-white">{t("contacts.address")}</p>
              <p className="font-camptonBook
                            dark:text-white">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
          </div>
          <div className="flex w-[100%] h-[100%] p-5 gap-4 justify-left items-center bg-gray-100
                          dark:bg-gray-800">
            <i>
              <FaSquarePhone className="text-primary text-[30px]
                                        dark:text-secondary_01"/>
            </i>
            <div className="flex flex-col">
              <p className="font-camptonMedium text-[22px]
                            dark:text-white">{t("contacts.talkToUs")}</p>
              <p className="font-camptonBook
                            dark:text-white">+355 67 63 11 918</p>
            </div>
          </div>
          <div className="flex w-[100%] h-[100%] p-5 gap-4 justify-left items-center bg-gray-100
                          dark:bg-gray-800">
            <i>
              <MdMail className="text-primary text-[30px]
                                 dark:text-secondary_01"/>
            </i>
            <div className="flex flex-col">
              <p className="font-camptonMedium
                            dark:text-white">{t("contacts.sendUsEmail")}</p>
              <p className="font-camptonBook
                            dark:text-white">a.flavio4366@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* ============= Section - 02 ============= */}
      <form className="flex w-[100%] gap-10 h-auto
      
                      xs:flex-col
                      lg:flex-row"
            onSubmit={onSubmit}>
        <div className="flex flex-col justify-between my-auto gap-10
        
                        xs:w-[100%] xs:text-center
                        lg:w-[50%] lg:text-start">
          <h2 className="font-camptonMedium text-primary

                         xs:text-[15px]
                         md:text-[20px]
                         dark:text-white">{t("contacts.contactUs")}</h2>
          <h1 className="font-camptonBold leading-tight

                         xs:text-[30px]
                         md:text-[45px]
                         dark:text-secondary_01">
          {t("contacts.title")}
          </h1>
          <p className="font-camptonBook

                        xs:text-[15px]
                        md:text-[20px]
                        dark:text-white">
          {t("contacts.description")}
          </p>

            <div className="flex gap-4
            
                            xs:justify-center
                            lg:justify-start">
              <i><FaFacebookSquare
                    className="text-primary cursor-pointer
                               hover:scale-110 ease-in-out duration-300
                               dark:text-secondary_01
                                
                               xs:text-[25px]
                               md:text-[20px]
                               lg:text-[35px]"/></i>
              <i><FaSquareXTwitter
                    className="text-primary cursor-pointer
                               hover:scale-110 ease-in-out duration-300
                               dark:text-secondary_01
                                
                               xs:text-[25px]
                               md:text-[20px]
                               lg:text-[35px]"/></i>
              <i><FaLinkedin
                    className="text-primary cursor-pointer
                               hover:scale-110 ease-in-out duration-300
                               dark:text-secondary_01
                                
                               xs:text-[25px]
                               md:text-[20px]
                               lg:text-[35px]"/></i>
              <i><FaSquarePinterest
                    className="text-primary cursor-pointer
                               hover:scale-110 ease-in-out duration-300
                               dark:text-secondary_01
                                
                               xs:text-[25px]
                               md:text-[20px]
                               lg:text-[35px]"/></i>
            </div>
        </div>

        <div className="flex flex-col gap-5
        
                        xs:w-[100%]
                        lg:w-[50%]">
          <div className="grid gap-5
          
                          xs:flex-col
                          md:grid-cols-2">
            <input className="w-[100%] h-[45px] rounded-full font-camptonLight
                        bg-gray-100 p-5 outline-none border-none
                        dark:bg-gray-800 dark:text-white"
                   type="text"
                   name="fullname"
                   placeholder={t("contacts.fullName")}
                   required/>
            <input className="w-[100%] h-[45px] rounded-full font-camptonLight
                        bg-gray-100 p-5 outline-none border-none
                        dark:bg-gray-800 dark:text-white"
                   type="email"
                   name="email"
                   placeholder={t("contacts.email")}
                   required/>
            <input className="w-[100%] h-[45px] rounded-full font-camptonLight
                              bg-gray-100 p-5 outline-none border-none
                              dark:bg-gray-800 dark:text-white"
                   type="text"
                   placeholder={t("contacts.phoneNumber")}
                   required/>
            <input className="w-[100%] h-[45px] rounded-full font-camptonLight
                            bg-gray-100 p-5 outline-none border-none
                            dark:bg-gray-800 dark:text-white"
                   type="text"
                   name="subject"
                   placeholder={t("contacts.subject")}
                   required/>
          </div>
          <input className="w-[100%] h-[45px] rounded-full font-camptonLight
                            bg-gray-100 p-5 outline-none border-none
                            dark:bg-gray-800 dark:text-white"
                 type="text"
                 name="services"
                 placeholder={t("contacts.service")}
                 required/>
            <textarea className="w-[100%] min-h-[200px] rounded-[23px] font-camptonLight
                                 bg-gray-100 p-5 outline-none border-none
                                 dark:bg-gray-800 dark:text-white"
                      // type="text"
                      name="message"
                      placeholder={t("contacts.yourMessage")}
                      required/>
          <button className="flex w-[100%] h-[45px] rounded-full bg-primary border-[1px] border-primary
                             text-white items-center justify-center font-camptonBook p-5
                             dark:bg-secondary_01 dark:border-secondary_01 dark:hover:bg-transparent dark:hover:text-secondary_01

                             hover:bg-transparent hover:text-primary duration-300 ease-in-out"
                  type="submit">
                             {t("contacts.submit")}</button>
            <span className="text-primary font-camptonBook
                             dark:text-white">{result}</span>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
