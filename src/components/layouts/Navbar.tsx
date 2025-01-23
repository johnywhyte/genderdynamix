"use client";
import PaddingWrapper from "@/components/layouts/PaddingWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <header className=" bg-white  w-full h-[3.75rem]">
      <PaddingWrapper>
        <div className="flex w-full items-center justify-between">
          <div className="relative h-[60px] w-[160px] cursor-pointer">
            <Link href="/" className="text-sm">
              <Image
                src="/images/darklogo.png"
                alt="genderdynamics Logo"
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </Link>
          </div>
          <div className="lg:hidden ">
            <Menu />
          </div>
          <div className="hidden lg:flex">
            <nav className="flex  space-x-4">
              <Link href="/">
                <Button variant="link" className=" text-foreground ">
                  Home
                </Button>
              </Link>

              <Link href="/about">
                <Button variant="link" className="text-foreground ">
                  About
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="link" className="text-foreground ">
                  Services
                </Button>
              </Link>

              <Link href="/projects">
                <Button variant="link" className=" text-foreground  ">
                  Project
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="link" className="text-foreground  ">
                  Contact
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </PaddingWrapper>
    </header>
  );
};

export default Navbar;
