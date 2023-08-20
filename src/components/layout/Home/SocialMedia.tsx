'use client'

import React from 'react'
import Link from 'next/link'
import { Icons } from '@/lib/Icons'
import webinfo from '@/content/websiteInfo'

function SocialMedia() {
  return (
    <div className='menuWrap flex flex-col items-center justify-between border-2 border-solid border-[#f6371c] rounded-full z-[999] w-[6.25rem] px-3 py-[50px] h-[75vh] relative left-[50px]'>
        <div className='socialMedia flex flex-col items-center justify-center'>
          <div className="socials text-white flex flex-col gap-2">
            <Link
              href={webinfo.FaceBook_Url}
              className="hover:text-[#f6371c]"
              target="_blank"
            >
              <Icons.facebook size={18} aria-label="Facebook" />
            </Link>
            <Link
              href={webinfo.Instagram_Url}
              className="hover:text-[#f6371c]"
              target="_blank"
            >
              <Icons.instagram size={18} aria-label="Instagram" />
            </Link>
            <Link
              href={webinfo.Linkedin_Url}
              className="hover:text-[#f6371c] "
              target="_blank"
            >
              <Icons.linkedin size={18} aria-label="LinkedIn" />
            </Link>
            <Link
              href={webinfo.Phone_URL}
              className="hover:text-caribbeangree"
              target="_blank"
            >
              <Icons.phone size={18} aria-label="LinkedIn" />
            </Link>
            <Link
              href={webinfo.GitHub_Url}
              className="hover:text-[#f6371c]"
              target="_blank"
            >
              <Icons.github size={18} aria-label="GitHub" />
            </Link>
          </div>
        </div>
        <span className='bg-[#f6371c] w-[2px] h-16'></span>
        <div className='Text font-semibold text-lg text-white text-center rotate-90'>
            <h6>Follow&ensp;Me</h6>
        </div>
    </div>
  )
}

export default SocialMedia