import React from "react";
import Link from "next/link";
import NextImage from "../NextImage";
import { Icons } from "@/lib/Icons";
import webinfo from "@/content/websiteInfo";

const Footer = () => {
  return (
    <footer className="Footer overflow-hidden">
      {/* Main Footer */}
      <div className="footer_top border-t px-4 py-5 bg-black dark:bg-background xl:py-[60px] 2xl:py-[60px]">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
          {/* Footer Info */}
          <div className="info_footer">
            <Link aria-label="logo" href={webinfo.Website_Url} className="w-fit">
              <NextImage
                src={"/images/logo.webp"}
                alt="Footer Logo"
                height={80}
                width={250}
              />
            </Link>
            <p className="web_desc my-5 text-[14px] text-white dark:text-white">
            Hi, I am a full-stack developer 🧑‍💻 with solid experience in creating user-friendly, upstanding, secure, and fast websites for businesses around the world. Whether you need a full-fledged application with all the custom features or a simple website to showcase your products and services, I am here to help.
            </p>
          </div>
          {/* Quick Links */}
          <div className="quick_links">
            <h2 className="mb-6 text-[20px] text-white dark:text-white">
              Quick Links
            </h2>
            <Link
              aria-label="Home"
              href={"/"}
              className="tex-[14px] hover:text-blue mb-2 flex items-center justify-start gap-1 text-white dark:text-white"
            >
              <Icons.play className="h-[14px] w-[14px]" />
              Home
            </Link>
            <Link
              aria-label="About Us"
              href={"/"}
              className="tex-[14px] hover:text-blue mb-2 flex items-center justify-start gap-1 text-white dark:text-white"
            >
              <Icons.play className="h-[14px] w-[14px]" />
              About Us
            </Link>
            <Link
              aria-label="Packages"
              href={"/"}
              className="tex-[14px] hover:text-blue mb-2 flex items-center justify-start gap-1 text-white dark:text-white"
            >
              <Icons.play className="h-[14px] w-[14px]" />
              Packages
            </Link>
            <Link
              aria-label="Portfolio"
              href={"/"}
              className="tex-[14px] hover:text-blue mb-2 flex items-center justify-start gap-1 text-white dark:text-white"
            >
              <Icons.play className="h-[14px] w-[14px]" />
              Portfolio
            </Link>
            <Link
              aria-label="Reviews"
              href={"/"}
              className="tex-[14px] hover:text-blue mb-2 flex items-center justify-start gap-1 text-white dark:text-white"
            >
              <Icons.play className="h-[14px] w-[14px]" />
              Reviews
            </Link>
          </div>
          {/* Services */}
          <div className="services">
            <h2 className="mb-6 text-[20px] text-white dark:text-white">
              Services
            </h2>
            <Link
              aria-label="Website Development"
              href={"/"}
              className="tex-[14px] hover:text-blue mb-2 flex items-center justify-start gap-1 text-white dark:text-white"
            >
              <Icons.play className="h-[14px] w-[14px]" />
              Website Development
            </Link>
            <Link
              aria-label="Logo Design"
              href={"/"}
              className="tex-[14px] hover:text-blue mb-2 flex items-center justify-start gap-1 text-white dark:text-white"
            >
              <Icons.play className="h-[14px] w-[14px]" />
              Logo Design
            </Link>
            <Link
              aria-label="Ecommerce Solutions"
              href={"/"}
              className="tex-[14px] hover:text-blue mb-2 flex items-center justify-start gap-1 text-white dark:text-white"
            >
              <Icons.play className="h-[14px] w-[14px]" />
              Ecommerce Solutions
            </Link>
            <Link
              aria-label="Animation"
              href={"/"}
              className="tex-[14px] hover:text-blue mb-2 flex items-center justify-start gap-1 text-white dark:text-white"
            >
              <Icons.play className="h-[14px] w-[14px]" />
              Animation
            </Link>
          </div>
          {/* Contact */}
          <div className="Contact_info">
            <h2 className="mb-6 text-[20px] text-white dark:text-white">
              Get in Touch Now!
            </h2>
            <Link
              aria-label="Number"
              href={webinfo.Phone_URL}
              className="tex-[14px] hover:text-blue mb-2 flex items-center justify-start gap-3 text-white dark:text-white"
            >
              <Icons.phone className="h-[18px] w-[18px]" />
              {webinfo.Phone_Number}
            </Link>
            <Link
              aria-label="Email"
              href={webinfo.Email_Url}
              className="tex-[14px] hover:text-blue mb-2 flex items-center justify-start gap-3 text-white dark:text-white"
            >
              <Icons.mail className="h-[18px] w-[18px]" />
              {webinfo.Email}
            </Link>
            <Link
              aria-label="Address"
              href={"#"}
              className="tex-[14px] hover:text-blue relative mb-2 flex items-center justify-start gap-3 text-white dark:text-white"
            >
              <Icons.location className="h-[18px] w-[18px]" />
              {webinfo.Location}
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="footer_bottom border-y bg-[#f53629] px-4 py-3 dark:bg-background">
        <div className=" flex flex-col items-center justify-center gap-3 lg:flex-row lg:justify-between xl:flex-row xl:justify-between 2xl:flex-row 2xl:justify-between">
          <p className="text-[14px] text-white dark:text-white">
            Copyright © {new Date().getFullYear()} Mohammad Owais | All Rights Reserved.
          </p>
          <div className="social_icons flex items-center text-white">
            <Link
              href={webinfo.FaceBook_Url}
              className="hover:text-caribbeangreen border-r border-white px-3"
              target="_blank"
            >
              <Icons.facebook size={18} aria-label="Facebook" />
            </Link>
            <Link
              href={webinfo.Instagram_Url}
              className="hover:text-caribbeangreen border-r border-white px-3"
              target="_blank"
            >
              <Icons.instagram size={18} aria-label="Instagram" />
            </Link>
            <Link
              href={webinfo.Linkedin_Url}
              className="hover:text-caribbeangreen border-r border-white px-3"
              target="_blank"
            >
              <Icons.linkedin size={18} aria-label="LinkedIn" />
            </Link>
            <Link
              href={webinfo.Phone_URL}
              className="hover:text-caribbeangreen border-r border-white px-3"
              target="_blank"
            >
              <Icons.phone size={18} aria-label="LinkedIn" />
            </Link>
            <Link
              href={webinfo.GitHub_Url}
              className="hover:text-caribbeangreen px-3"
              target="_blank"
            >
              <Icons.github size={18} aria-label="GitHub" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
