'use client';
import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
    <TopBar />
    <header className="sticky top-0 z-20 w-full px-4 py-2 left-0">
    <Navbar />
    </header>
    </>
  );
};

export default Header;
