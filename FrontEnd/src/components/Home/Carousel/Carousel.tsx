import React from 'react'
import { Carousel_01 } from '../../Shadcn-components/Carousel_01'
import { Carousel_02 } from '../../Shadcn-components/Carousel_02'

const Carousel = () => {
  return (
    <div className='flex w-[85%] h-auto mx-auto gap-5 items-center justify-between
    
                    xs:flex-col
                    xl:flex-row'>
      <Carousel_01 />
      <Carousel_02 />
    </div>
  )
}

export default Carousel
