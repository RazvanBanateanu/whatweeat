import React from 'react'
import Image from 'next/image'

interface imageProps{
  image_src: string

}

const FoodImage = ({image_src}: imageProps) => {
  return (
    <div className='px-5 mt-5 '>
        <Image
            src={image_src}
            width={500}
            height={500}
            alt={'Burger image'} 
            className='rounded-3xl shadow-xl'
            priority />
    </div>
  )
}

export default FoodImage