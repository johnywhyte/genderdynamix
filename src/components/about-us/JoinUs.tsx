import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function JoinUs() {
  return (
    <div className="flex  lg:mx-[16rem] relative justify-center  lg:my-16">
      <div className=" w-full h-[22rem]">
        <Image src="/images/joinusimg.png" alt="" fill className="rounded-2xl object-cover"></Image>

        <div className=" absolute text-center flex justify-center w-full  top-[6rem]  ">
          <div>
            <p className=" pb-2 lg:pb-6 text-2xl text-white font-semibold ">
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
