import Image from "next/image";
import React from "react";
import PaddingWrapper from "../layouts/PaddingWrapper";

function OurImpact() {
  return (
    <PaddingWrapper>
      <div className="flex mt-10 flex-col gap-10 justify-center">
        <div className="flex justify-center">
          <div className="max-w-[40rem]">
            <div className="flex  justify-center ">
              <h1 className="text-4xl text-center md:text-end lg:text-5xl font-semibold cinzel">
                Our Impact
              </h1>
            </div>
            <p className="text-center flex font-light">
              We are committed to delivering measurable results and creating
              lasting impact. We have a proven track record of success in
              supporting organizations to develop and implement effective GESI
              strategies in various sectors, including health, education, and
              sustainable economic development.
            </p>
          </div>
        </div>

        <div className="relative w-full h-[30rem] mb-10 rounded-2xl">
          <Image
            src={"/images/ourimpact.png"}
            alt=""
            fill
            className="object-cover rounded-2xl"
          ></Image>
        </div>
      </div>
    </PaddingWrapper>
  );
}

export default OurImpact;
