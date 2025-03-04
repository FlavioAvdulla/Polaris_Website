import React from "react";
import { useNavigate } from "react-router-dom";
// React Icons
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";

// Data
import { productSection_01 } from "./ProductSection";


const ProductSection_01 = () => {

  const navigate = useNavigate();

  const handleProductClick = (id) => {
    console.log(`Image with id ${id} clicked.`)
    if (id === "1") {
      navigate("/Product_05")
    }
    if (id === "2") {
      navigate("/Product_04")
    }
    if (id === "3") {
      navigate("/Product_03")
    }
  }

  const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-[#fcc419]
                                              
                                              md:text-[15px]
                                              lg:text-[20px]" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-[#fcc419]
                                                      
                                                      md:text-[15px]
                                                      lg:text-[20px]" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300
                                              
                                              md:text-[15px]
                                              lg:text-[20px]" />);
      }
    }
    return stars;
  };

  return (
    <div
      className="w-[85%] h-auto mx-auto gap-5 items-center
                justify-between my-20
                
                md:grid md:grid-cols-3">
      {productSection_01.map((product, index) => (
        // ============= Product 1 =============
        <div
          className=" rounded-lg overflow-hidden h-auto
                      bg-gray-100 border-[1px] border-primary cursor-pointer
                      
                      xs:mb-5
                      md:w-[100%]"
          key={index}
          onClick={() => handleProductClick(product._id)}>
          {/* ============= Image ============= */}
          <div className="flex w-[100%] h-[300px] justify-center items-center bg-white">
            <img
              src={product.image}
              alt={product.title}
              className="w-auto h-full object-cover"
            />
          </div>
          {/* ============= Info ============= */}
          <div className="flex flex-col w-[100%] h-[35%] gap-2 p-4 justify-between">
            {/* ============= Stars ============= */}
            <div className="flex gap-2">
              {getStars(product.rating)}
              <p className="font-camptonBook
                            md:text-[12px]
                            lg:text-[15px]">
                ({product.rating})
              </p>
            </div>
            <h1 className="font-camptonMedium
                              xs:w-[80%]
                              sm:w-[60%]
                              md:text-[13px] md:w-[90%]
                              lg:text-[18px]
                              xl:text-[22px] xl:w-[70%]">{product.title}</h1>
            <div className="flex justify-between items-center">
              <h1 className="font-camptonBold text-primary
              
                              xs:text-[40px]
                              md:text-[30px]
                              lg:text-[36px]
                              xl:text-[40px]
                              ">
                {product.normalPrice}
              </h1>
              <i className="bg-primary border-[1px] border-primary cursor-pointer
                              hover:scale-[105%] hover:bg-transparent hover:border-[1px] group hover:border-primary duration-300
                              
                              xs:rounded-md
                              md:rounded-sm
                              lg:rounded-md">
                <PiShoppingCartLight className="text-white group-hover:text-primary duration-300
                                                
                                                xs:text-[40px] xs:p-1"/>
              </i>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-camptonBook flex
              
                            xs:text-[12px]
                            lg:text-[15px]
                            2xl:text-[20px]">
                Available:
                <span className="font-camptonMedium
                
                                  xs:text-[12px]
                                  lg:text-[15px]
                                  2xl:text-[20px]">
                  &nbsp;&nbsp;{product.available}
                </span>
              </p>
              <p className="text-[15px] font-camptonBook flex
              
                            xs:text-[12px]
                            lg:text-[15px]
                            2xl:text-[20px]">
                Sold:
                <span className="text-red-500 font-camptonMedium">
                  &nbsp;&nbsp;{product.sold}
                </span>
              </p>
            </div>
            <p className="font-camptonBook
            
                          xs:text-[10px]
                          lg:text-[15px]
                          2xl:text-[16px]">
              Time remaining until the end of the offer.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection_01;
