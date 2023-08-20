import NextImage from '@/components/NextImage'
import webinfo from '@/content/websiteInfo'
import Link from 'next/link'
import React from 'react'

function Banner_inner() {
  return (
    <div className="div_container justify-between items-center flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row  gap-5 p-[80px] relative z-10">
        <div className="w-2/4">
          <span className="absolute top-[-2.5rem] z-[-1] h-[6.25rem] w-[6.25rem] rounded-full bg-[#f6371c] opacity-[.07] md:top-[-5rem] md:h-[12.5rem] md:w-[12.5rem]"></span>
          <h4 className="heading_h4 text-white">Hello, I Am</h4>
          <h1 className="heading_h1 text-white font-bold py-4">
            Muhammad{" "}
            <span className="heading_h1 text-[#f6371c]">
              Owais
            </span>
          </h1>
          <h5 className="flex items-center justify-start gap-2.5 text-[1rem] font-bold uppercase tracking-[1px] text-white sm:text-[1.125rem] md:justify-start md:text-[1.25rem]">
            <span className="h-[1px] w-[2.5rem] bg-[#f6371c] sm:w-[3rem] md:w-[4.375rem]"></span>
            Full Stack Developer
          </h5>
          <p className="text-white text-[14px] w-[80%]">
            Hi, I am a full-stack developer 🧑‍💻 with solid experience in creating
            user-friendly, upstanding, secure, and fast websites for businesses
            around the world. Whether you need a full-fledged application with
            all the custom features or a simple website to showcase your
            products and services, I am here to help.
          </p>
          <div className="mt-[1.875rem] flex items-center gap-8">
            <Link
              className="flex items-center gap-5 text-[1rem] uppercase text-[#f6371c] hover:text-white md:text-[1.125rem]"
              title="Hire Me"
              target="_blank"
              href={webinfo.Linkedin_Url}
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-[3.5rem] w-9 rounded-[5px] bg-[#f6371c] p-2 text-white md:h-[4.375rem] md:w-11 md:rounded-[10px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              <span className="font-Poppins font-bold underline underline-offset-8">
                Hire Me
              </span>
            </Link>
            <Link
              className="font-Poppins inline-block rounded-[5px] bg-white px-7 py-[14px] text-center text-[1rem] font-bold uppercase text-[#f6371c] hover:bg-[#f6371c] hover:text-white md:rounded-[10px] md:px-6 md:py-[1.125rem] lg:px-10 xl:px-11"
              title="Download CV"
              target="_blank"
              href={webinfo.Cv_Url}
            >
              Download CV
            </Link>
          </div>
        </div>
        <div className="w-2/4">
            <NextImage src="/images/Profile.webp" alt="Profile Image" width={1200} height={1200} />
        </div>
      </div>
  )
}

export default Banner_inner