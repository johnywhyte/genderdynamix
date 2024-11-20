import Image from "next/image";
import React from "react";
import PaddingWrapper from "../layouts/PaddingWrapper";

function Desc() {
  return (
    <PaddingWrapper>
      <div className="relative h-[20rem] my-8 ">
        <Image
          src="/images/servicedescimg.png"
          alt=""
          fill
          className="rounded-2xl "
        ></Image>
        <div className="absolute text-white flex p-20 w-full gap-20 items-center ">
          <div className=" flex max-w-[50rem] gap-10 items-center">
            <h4 className="cinzel font-bold text-4xl">Services</h4>
            <p>
              At Gender Dynamix Consult, we offer a comprehensive suite of
              services designed to promote Gender Equality and Social Inclusion
              (GESI). Our expertise spans various sectors including health,
              education, and sustainable economic growth. Explore our services
              to see how we can support your organization in creating impactful,
              gender-responsive initiatives.
            </p>
          </div>
        </div>
      </div>
    </PaddingWrapper>
  );
}

export default Desc;
