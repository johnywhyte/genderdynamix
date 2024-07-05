import Image from "next/image";
import React from "react";
import PaddingWrapper from "@/components/layouts/PaddingWrapper";
import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <div className=" ">
      <div className=" h-[92vh]">
        <header className="z-10 top-0 left-0 right-0 absolute py-4   w-full ">
          <PaddingWrapper>
            <div className="flex w-full items-center justify-between">
              <div className="relative h-[6rem] w-[15rem] cursor-pointer">
                <Image
                  src="/images/logo.png"
                  alt="genderdynamics Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden lg:flex">
                <nav className="flex space-x-4">
                  <Button variant="link" className=" text-white  ">
                    Home
                  </Button>
                  <Button variant="link" className=" text-white ">
                    About
                  </Button>
                  <Button variant="link" className=" text-white ">
                    Services
                  </Button>
                  <Button variant="link" className=" text-white ">
                    Project
                  </Button>
                  <Button variant="link" className=" text-white ">
                    Contact
                  </Button>
                </nav>
              </div>
            </div>
          </PaddingWrapper>
        </header>
        <Image
          src={"/images/heroimg.png"}
          alt={""}
          fill
          className="object-cover"
        ></Image>
        <PaddingWrapper>
          <div className=" absolute  lg:top-[14rem]  justify-center ">
            <div className=" px-4 mt-2 lg:mt-[4rem] max-w-[55rem]">
              <h1 className=" text-white uppercase lg:text-7xl lg:pb-2 cinzel  text-4xl font-[700] tracking-tight leading-[1.5]">
                Transforming Communities, Empowering Lives.
              </h1>
              <Button
                variant="default"
                size="lg"
                className=" rounded-full text-white "
              >
                Learn More
              </Button>
            </div>
          </div>
        </PaddingWrapper>
      </div>
    </div>
  );
}

export default HeroSection;