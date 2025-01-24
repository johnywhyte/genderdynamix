import Image from "next/image";
import React from "react";
import PaddingWrapper from "@/components/layouts/PaddingWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Menu from "./Menu";

function HeroSection() {
  return (
    <div className=" ">
      <div className=" h-[100vh]">
        <header className="z-10 top-0 left-0 right-0 absolute py-2   w-full ">
          <PaddingWrapper>
            <div className="flex w-full items-center justify-between">
              <div className="relative h-[6rem] w-[10rem] lg:w-[15rem] cursor-pointer">
                <Link href="/" className="text-sm">
                  <Image
                    src="/images/logo.png"
                    alt="genderdynamics Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </Link>
              </div>
              <div className="lg:hidden ">
                <Menu />
              </div>
              <div className="hidden lg:flex">
                <nav className="flex space-x-4">
                  <Link href="/">
                    <Button variant="link" className=" text-white ">
                      Home
                    </Button>
                  </Link>

                  <Link href="/about">
                    <Button variant="link" className="text-white ">
                      About
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="link" className="text-white ">
                      Services
                    </Button>
                  </Link>

                  <Link href="/projects">
                    <Button variant="link" className=" text-white  ">
                      Project
                    </Button>
                  </Link>

                  <Link href="/contact">
                    <Button variant="link" className="text-white  ">
                      Contact
                    </Button>
                  </Link>
                </nav>
              </div>
            </div>
          </PaddingWrapper>
        </header>

        <Image
          src={"/images/heroimg.png"}
          alt={""}
          fill
          className="object-cover "
        ></Image>
        <PaddingWrapper>
          <div className=" absolute  top-[10rem]  justify-center ">
            <div className=" px-4 mt-2 lg:mt-[4rem] max-w-[55rem]">
              <h1 className=" text-white uppercase lg:text-7xl lg:pb-2 cinzel  text-4xl font-[700] tracking-tight leading-[1.5]">
                Transforming Communities, Empowering Lives.
              </h1>
              <Link href="/about" className="text-sm">
              <Button
                variant="default"
                size="lg"
                className=" rounded-full text-white "

              >
                Learn More
              </Button>
              </Link>
            </div>
          </div>
        </PaddingWrapper>
      </div>
    </div>
  );
}

export default HeroSection;
