import Image from "next/image";
import React from "react";
import PaddingWrapper from "../layouts/PaddingWrapper";
import { Button } from "../ui/button";

function ContactUs() {
  return (
    <div className="flex  lg:mx-[16rem] relative justify-center max-[700px] lg:my-16">
      <div className=" h-[22rem]">
        <Image
          src="/images/cu2.png"
          alt=""
          fill
          className="hidden lg:block"
        ></Image>
        <Image
          src="/images/ctabg.png"
          alt=""
          fill
          className="lg:hidden rounded-3xl"
        ></Image>
        <div className=" absolute left-[1rem] lg:left-[5rem] top-[4rem] px-4 ">
          <p className=" pb-2 lg:pb-6 text-4xl text-white font-semibold max-w-[30rem]">
            Lets work together to create a more equitable and inclusive future!
          </p>
          <Button
            variant="default"
            size="lg"
            className=" rounded-full text-white "
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
