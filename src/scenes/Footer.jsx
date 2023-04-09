import React from 'react'
import SocialMediaIcons from "../components/SocialMediaIcons"

const Footer = () => {
  return (
    <footer className='h-60 bg-red pt-10 mt-5'>
      <div className='w-5/6 mx-auto'>
        <SocialMediaIcons />
        <div className='md:flex justify-center md:justify-between text-center'>
            <p className='font-playfair font-semibold text-2xl text-blue'>Pruthviraj Chudasama</p>
            <p className='font-playfair text-md '>©2023 Raa. All Rights Reserved.</p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
