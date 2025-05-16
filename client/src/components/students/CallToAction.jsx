import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl'> Learn anything , anytime , anywhere </h1>
      <p className ='text-gray-500 sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error enim asperiores laudantium illum consectetur eligendi, pariatur hic quasi omnis voluptates provident explicabo. Cupiditate tempore quis labore adipisci quidem explicabo aliquid odio excepturi quibusdam dicta hic eius quia, minima fugit laudantium rerum illum soluta accusamus harum doloremque corporis autem cumque?</p>
      <div className='flex items-center font-medium gap-6 mt-4 '>
        <button className='px-10 py-3 rounded-md text-white bg-blue-600'>Get started</button>
        <button className=''>Learn more <img src={assets.arrow_icon} alt="arrow_icon" /></button>
      </div>
    </div>
  )
}

export default CallToAction
