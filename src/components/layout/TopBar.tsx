import webinfo from '@/content/websiteInfo'
import { Icons } from '@/lib/Icons'
import Link from 'next/link'
import React, { FC } from 'react'


const TopBar:FC = () => {
  return (
    <div className="relative z-10 flex items-center justify-between bg-[#f53629] py-[5px] px-4 text-white">
      {/* Left Side Social Icons */}
      <div className="social_icons flex items-center">
        <Link href={webinfo.FaceBook_Url} className='border-r border-white px-3 hover:text-caribbeangreen' target='_blank'>
        <Icons.facebook  size={18} aria-label='Facebook'/>
        </Link>
        <Link href={webinfo.Instagram_Url} className='border-r border-white px-3 hover:text-caribbeangreen' target='_blank'>
        <Icons.instagram size={18} aria-label='Instagram' />
        </Link>
        <Link href={webinfo.Linkedin_Url} className='border-r border-white px-3 hover:text-caribbeangreen' target='_blank'>
        <Icons.linkedin size={18} aria-label='LinkedIn' />
        </Link>
        <Link href={webinfo.Phone_URL} className='border-r border-white px-3 hover:text-caribbeangreen' target='_blank'>
        <Icons.phone size={18} aria-label='LinkedIn' />
        </Link>
        <Link href={webinfo.GitHub_Url} className='px-3 hover:text-caribbeangreen' target='_blank'>
        <Icons.github size={18} aria-label='GitHub' />
        </Link>
      </div>

      {/* Right Contact Info and Icons */}
      <div className="contact_info flex items-center">
        <Link href={webinfo.Email_Url} className='flex items-center px-1 hover:text-caribbeangreen xl:px-3 2xl:px-3 3xl:px-3 4xl:px-3 5xl:px-3 6xl:px-3'>
        <Icons.mail size={18} className="mr-3" aria-label='Email'/>
          <span className="hidden xl:block 2xl:block 3xl:block 4xl:block 5xl:block 6xl:block">{webinfo.Email}</span>
        </Link>
        <Link href={webinfo.Phone_URL} className='flex items-center px-1 hover:text-caribbeangreen xl:px-3 2xl:px-3 3xl:px-3 4xl:px-3 5xl:px-3 6xl:px-3'>
        <Icons.phone size={18} className="mr-3" aria-label='Phone'/>
          <span className="hidden xl:block 2xl:block 3xl:block 4xl:block 5xl:block 6xl:block">{webinfo.Phone_Number}</span>
        </Link>
      </div>
    </div>
  )
}

export default TopBar