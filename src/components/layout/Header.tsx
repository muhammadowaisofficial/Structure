'use client';
import React from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/ui/navigation-menu";

import { ThemeToggle } from "@/components/layout/theme-toggle";

import NextImage from "../NextImage";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
    <TopBar />
    <header className="sticky top-0 z-10 w-full border-b bg-[#000] px-4 py-4left-0">
    <Navbar />
    </header>
    </>
  );
};

export default Header;
