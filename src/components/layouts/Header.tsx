"use client";
import PaddingWrapper from "@/components/layouts/PaddingWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="z-10 top-0 left-0 right-0  bg-white h-[100px] w-full ">
      <PaddingWrapper>
        <div className="flex w-full items-center justify-between">
          <div className="relative h-[60px] w-[160px] cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="genderdynamics Logo"
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>

          <div className="hidden text-white space-x-10 lg:flex">
            <nav className="flex space-x-10">
              <Button variant="link" className="space-x-2  ">
                English
              </Button>
            </nav>
            <Button  variant="link"  className="space-x-2 rounded-lg">Join Our Waitlist</Button>
          </div>
        </div>
      </PaddingWrapper>
    </header>
  );
};

export default Header;
