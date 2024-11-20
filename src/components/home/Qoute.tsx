import Image from "next/image";
import React from "react";
import PaddingWrapper from "../layouts/PaddingWrapper";

function Qoute() {
  return (
    <div className=" w-full">
      <div className="relative h-[480px]">
        <Image
          src="/images/qoute.png"
          alt="genderdynamics Logo"
          fill
          className="object-cover"
          priority
        />

        <PaddingWrapper>
          <div className=" absolute px-4 mt-2  top-[8rem]  max-w-[30rem]">
            <h1 className=" text-white  lg:text-4xl lg:pb-2  text-xl font-light tracking-tight leading-[1.5]">
              The single biggest difference we can make in the developing world
              is to educate and empower women.
            </h1>
            <div>
              <p className="text-primary font-semibold text-4xl">Melinda Gates</p>
              <p className="text-primary">
                (Co-founder, Bill & Melinda Gates Foundation)
              </p>
            </div>
          </div>
        </PaddingWrapper>
      </div>
    </div>
  );
}

export default Qoute;
