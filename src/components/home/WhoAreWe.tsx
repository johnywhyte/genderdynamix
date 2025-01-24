import Image from "next/image";
import React from "react";
import PaddingWrapper from "../layouts/PaddingWrapper";
Image;
function WhoAreWe() {
  return (
    <div className="my-20">
      <PaddingWrapper>
        <div className=" md:flex items-center">
          <div className="md:w-1/3 pt-20 pb-20">
            <h2 className="text-5xl font-[700] cinzel">
              WHO <br /> WE ARE
            </h2>
            <p>
              Nigerias GESI powerhouse. Gender Dynamix. Women. Innovation.
              Equality. We craft solutions across health, education, and
              sustainability for a more equitable tomorrow.
            </p>
          </div>

          <div className="relative md:w-2/3">
            <Image
              src="/images/waw.png"
              alt=""
              width={1000}
              height={1000}
            ></Image>
          </div>
        </div>
      </PaddingWrapper>
    </div>
  );
}

export default WhoAreWe;
