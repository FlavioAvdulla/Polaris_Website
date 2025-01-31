import React from 'react'
import { SelectComp } from '../Shadcn-components/Select'


const Navbar_01 = () => {
  return (
    <div className='flex w-full h-auto bg-slate-200 p-5'>
        <div className="flex gap-7 bg-slate-300 w-fit mx-auto justify-between">
            <button className='font-camptonLight'>Track Order</button>
            <button className='font-camptonLight'>About Us</button>
            <button className='font-camptonLight'>Contact</button>
            <button className='font-camptonLight'>FAQ</button>
        </div>
        <div className="flex gap-7 bg-slate-300 w-fit mx-auto justify-between">
            <button className='font-camptonLight'>Track Order</button>
            <button className='font-camptonLight'>About Us</button>
            <button className='font-camptonLight'>Contact</button>
            <button className='font-camptonLight'>FAQ</button>
        </div>
        <SelectComp/>
    </div>
  )
}

export default Navbar_01
