import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function JoinUs() {
  return (
    <div className="flex  lg:mx-[16rem] relative justify-center max-[700px] lg:my-16">
      <div className=" h-[22rem]">
        <Image src="/images/joinusimg.png" alt="" fill className=" object-cover"></Image>

        <div className=" absolute text-center flex justify-center w-full left-[1rem]  top-[6rem] px-4 ">
          <div>
            <p className=" pb-2 lg:pb-6 text-4xl text-white font-semibold max-w-[30rem]">
              Join us in creating a more equitable future.
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
    </div>
  );
}

export default JoinUs;
