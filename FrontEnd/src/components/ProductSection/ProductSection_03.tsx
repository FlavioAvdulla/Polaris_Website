import React from 'react'

// React Icons
import { IoIosArrowForward } from "react-icons/io";

const ProductSection_03 = () => {
  return (
    <div className='flex w-[85%] mx-auto bg-slate-200 mb-20 mt-10 gap-5'>
        {/* ============= Product Left ============= */}
      <div className="flex w-[50%] h-[400px] bg-slate-300 rounded-lg ">
        {/* ============= Product 1 Part Left ============= */}
        <div className="w-[55%] h-[100%] bg-slate-200 p-5">
            <p>Weekend Discount</p>
            <h1>Olympus Mark II Mirrorless Camera</h1>
            <p>Mirrorless Camera with 4K Video</p>
            <button>Show Now</button>
        </div>
        {/* ============= Product 1 Part Right ============= */}
        <div className="w-[45%] h-[100%] bg-slate-400 p-5">

        </div>
      </div>
      {/* ============= Product Left ============= */}
      <div className="w-[50%] h-[400px] bg-slate-300 rounded-lg p-5">

      </div>
    </div>
  )
}

export default ProductSection_03
