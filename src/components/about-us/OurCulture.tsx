import React from "react";
import PaddingWrapper from "../layouts/PaddingWrapper";
import Image from "next/image";

function OurCulture() {
  return (
    <div className="">
      <PaddingWrapper>
        <div className=" md:flex gap-10 items-center">
          <div className="pt-20  lg:w-1/2 pb-20">
            <h2 className="text-5xl font-[700] uppercase cinzel pb-4">
              Our <br />
              Culture
            </h2>
            <p className="font-medium pb-2">Inclusivity and Empowerment.</p>
            <p className="font-light">
              Our commitment to inclusivity knows no bounds; we empower every
              individual to thrive. It is in our DNA to ensure everyone feels
              valued and respected, and only through collective strength do we
              achieve the best outcomes at Gender Dynamix Consult.
            </p>
          </div>
          <div className="relative  lg:w-1/2 h-[21rem]">
            <Image src="/images/ourculture.png" alt="" fill></Image>
          </div>
        </div>
      </PaddingWrapper>
    </div>
  );
}

export default OurCulture;
