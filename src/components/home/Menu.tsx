"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      {/* Hamburger Icon */}
      <div className="pr-2">
        {/* <p className={`${bebasNeue.className} text-white text-2xl`}>VOUCH</p> */}
        <RxHamburgerMenu
          color="#ffffff"
          size={32}
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-xs bg-white p-6 text-black flex flex-col gap-8 text-xl z-10 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="w-full flex justify-between items-center ">
          <span
            className={`${bebasNeue.className} text-black ml-2 p-2 text-4xl`}
          >
            Menu
          </span>
          <RxCross1
            color="#000"
            className="cursor-pointer mr-6"
            size={32}
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-6 px-4">
          <div>
            <Link href="/" onClick={() => setOpen(false)} className="text-sm">
              Home
            </Link>
          </div>
          <div>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              About Us
            </Link>
          </div>
          <div>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              Services
            </Link>
          </div>
          <div>
            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              Projects
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
