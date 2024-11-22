import React from "react";
import PaddingWrapper from "../layouts/PaddingWrapper";
import Image from "next/image";

function WhoAreWe() {
  return (
    <div className="my-20">
      <PaddingWrapper>
        <div className=" md:flex gap-10 items-center">
          <div className="relative  w-1/2 h-[21rem]">
            <Image src="/images/Aboutwaw.png" alt="" fill></Image>
          </div>
          <div className="pt-20  w-1/2 pb-20">
            <h2 className="text-6xl font-[700] cinzel">
              WHO <br /> WE ARE
            </h2>
            <p>
            Gender Dynamix Consult Limited is more than just a consulting firm; we are a passionate team of GESI experts driven by the same values of equality and social inclusion that underpin the UNs mission. We have a proven track record of collaborating with international organizations to develop and implement effective GESI strategies tailored to the Nigerian context.
            </p>
          </div>
        </div>
      </PaddingWrapper>
    </div>
  );
}

export default WhoAreWe;
