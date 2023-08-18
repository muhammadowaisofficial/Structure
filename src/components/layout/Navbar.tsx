"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";
import navlinks from "@/content/navLinks";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// import useRQGlobalState from "@/utils/useRQGlobalState";


function Navbar() {

  return (
    <>
      <NavigationMenu.Root className="navbar flex items-center justify-between px-3 text-white h-20 border-b" >

        {/* Nav Bar Logo */}
        <div className="logo h-full flex items-center">
          <Link href={'/'} className="">
            <Image loading="lazy" alt="Ecommerce Inside" src={'/images/logo.png'} width={300} height={70}  style={{ imageRendering: "pixelated" }} />
          </Link>
        </div>

        {/* Nav Bar Right Side */}
        <div className="navbar flex items-center gap-8 sm:gap-2 md:gap-2">
          <NavigationMenu.List className="hidden md:hidden lg:hidden  xl:hidden 2xl:hidden  3xl:flex  4xl:flex  5xl:flex  6xl:flex  flex-row gap-5 list-none h-[80px] items-center ">
            {
              navlinks?.map((navlink, index) => (
                // <div key={index}>
                <>
                  {
                    navlink.sublinks ? (
                      <NavigationMenu.Item className="h-full flex items-center hover:text-caribbeangreen"  key={navlink.id}>
                        <NavigationMenu.Trigger className="h-full select-none leading-none outline-none group flex items-center gap-2">
                          <Link href={navlink.link}>
                            {navlink.name}
                          </Link>
                          <ChevronDown
                            className=" relative transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                            aria-hidden
                          />
                        </NavigationMenu.Trigger>

                        {/* Nav Bar Drop Down */}
                        <NavigationMenu.Content className="absolute top-20 bg-white min-w-[350px] animate-fade-in-down">
                          <ul className="m-0 list-none flex flex-col">
                            {navlink.sublinks?.map((subnavlink) => (
                              <li className="text-darkblue hover:text-white hover:bg-darkblue p-2 border-b border-black h-full w-full" key={subnavlink.id} >
                                <Link href={subnavlink.link} className="h-full w-full text-sm">
                                  {subnavlink.name}
                                </Link>
                              </li>

                            ))}
                          </ul>
                        </NavigationMenu.Content>

                      </NavigationMenu.Item>
                    ) : (
                      <NavigationMenu.Item className="hover:text-caribbeangreen" key={navlink.id}>
                        <Link href={navlink.link} >
                          {navlink.name}
                        </Link>
                      </NavigationMenu.Item>
                    )
                  }
                  </>
                // </div>
              ))
            }
          </NavigationMenu.List>

          <Button className="sm:px-3">Download CV</Button>
        </div>


      </NavigationMenu.Root>
    </>
  )
};

export default Navbar;
