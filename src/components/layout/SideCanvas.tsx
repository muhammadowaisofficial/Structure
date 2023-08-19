import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import webinfo from "@/content/websiteInfo";
import { Icons } from "@/lib/Icons";
import Image from "next/image";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import navlinks from "@/content/navLinks";
import { ChevronDown } from "lucide-react";

export function SideCanvas() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Icons.menu></Icons.menu>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <div className="logo mt-10 flex h-full w-[100%] flex-1 items-center justify-center">
            <Link href={webinfo.Website_Url}>
              <Image
                loading="lazy"
                alt="Logo"
                src={webinfo.Website_Logo}
                width={350}
                height={70}
                style={{ imageRendering: "pixelated" }}
              />
            </Link>
          </div>
        </SheetHeader>
        <NavigationMenu.List className="items-center">
          {navlinks?.map((navlink, index) => (
            // <div key={index}>
            <>
              {navlink.sublinks ? (
                <NavigationMenu.Item
                  className="flex h-full flex-col border-b border-black p-5 text-[22px] font-semibold text-black hover:bg-[#f43532] hover:text-white"
                  key={navlink.id}
                >
                  <NavigationMenu.Trigger className="group flex h-full w-full select-none items-center justify-between gap-2 leading-none outline-none">
                    <Link href={navlink.link}>{navlink.name}</Link>
                    <ChevronDown
                      className=" duration-[250] relative transition-transform ease-in group-data-[state=open]:-rotate-180"
                      aria-hidden
                    />
                  </NavigationMenu.Trigger>

                  {/* Nav Bar Drop Down */}
                  <NavigationMenu.Content className="animate-fade-in-down w-full">
                    <ul className="m-0 list-none">
                      {navlink.sublinks?.map((subnavlink) => (
                        <li
                          className="h-full w-full border-t border-black px-4 py-2 text-white hover:bg-white hover:text-black"
                          key={subnavlink.id}
                        >
                          <Link
                            href={subnavlink.link}
                            className="h-full w-full text-sm"
                          >
                            {subnavlink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              ) : (
                <NavigationMenu.Item
                  className="hover:text-caribbeangreen border-b border-black p-5 text-[22px] font-semibold text-black hover:bg-[#f43532] hover:text-white"
                  key={navlink.id}
                >
                  <Link href={navlink.link}>{navlink.name}</Link>
                </NavigationMenu.Item>
              )}
            </>
            // </div>
          ))}
        </NavigationMenu.List>
        <SheetFooter>
            <div className="flex flex-col justify-center items-center w-full gap-4">
            <Link
              className="hidden xl:block 2xl:block w-full"
              href={webinfo.Cv_Url}
              target="_blank"
              aria-label="Cv"
            >
              <Button variant={"destructive"} className="w-full sm:px-3">
                Download CV
              </Button>
            </Link>
            <div className="social_icons flex items-center">
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
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
