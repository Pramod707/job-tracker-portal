import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row gap-[1rem]'>
      <p className='text-[#3F5D5A]'>© 2024 Taskhub</p>
      <a href="##" className='text-black font-semibold'>Terms of Service</a>
      <a href="##" className='text-black font-semibold'>Privacy Policy</a>
      <a href="##" className='text-black font-semibold'>Support</a>
      <a href="##" className='text-black font-semibold flex flex-row justify-center items-center'><img src="/mini_icons/globe.svg" alt="globe" />English</a>
    </div>
  )
}

export default Footer