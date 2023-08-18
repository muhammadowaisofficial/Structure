import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import React, { FC } from 'react'


const TopBar:FC = () => {
  return (
    <div className="flex items-center justify-between bg-[#f53629] py-[10px] text-white">
      {/* Left Side Social Icons */}
      <div className="social_icons flex items-center">
        <Link href={'#'} className='border-r border-white px-3 hover:text-caribbeangreen' target='_blank'>
        <Facebook  size={18} aria-label='Facebook'/>
        </Link>
        <Link href={'#'} className='border-r border-white px-3 hover:text-caribbeangreen' target='_blank'>
        <Instagram size={18} aria-label='Instagram' />
        </Link>
        <Link href={'#'} className='border-r border-white px-3 hover:text-caribbeangreen' target='_blank'>
        <Linkedin size={18} aria-label='LinkedIn' />
        </Link>
        <Link href={'#'} className='px-3 hover:text-caribbeangreen' target='_blank'>
        <Phone size={18} aria-label='LinkedIn' />
        </Link>
      </div>

      {/* Right Contact Info and Icons */}
      <div className="contact_info flex items-center">
        <Link href={'#'} className='flex items-center px-1 hover:text-caribbeangreen xl:px-3 2xl:px-3 3xl:px-3 4xl:px-3 5xl:px-3 6xl:px-3'>
        <Mail size={18} className="mr-3" aria-label='Email'/>
          <span className="hidden xl:block 2xl:block 3xl:block 4xl:block 5xl:block 6xl:block">info@mohammadowaisofficial.com</span>
        </Link>
        <Link href={'#'} className='flex items-center px-1 hover:text-caribbeangreen xl:px-3 2xl:px-3 3xl:px-3 4xl:px-3 5xl:px-3 6xl:px-3'>
        <Phone size={18} className="mr-3" aria-label='Phone'/>
          <span className="hidden xl:block 2xl:block 3xl:block 4xl:block 5xl:block 6xl:block">+92 332 3745184</span>
        </Link>
      </div>
    </div>
  )
}

export default TopBar