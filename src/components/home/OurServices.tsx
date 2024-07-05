import React from "react";
import Image from "next/image";
import PaddingWrapper from "../layouts/PaddingWrapper";
import ServicesItem from "./ServicesItem";

function OurServices() {
  return (
    <div className="mt-8 bg-[#831DEA] py-28">
      <PaddingWrapper>
        <div className="md:flex gap-16 items-center ">
          <div className="relative md:w-1/2 ">
            <Image
              src="/images/servicesface.png"
              alt=""
              width={1000}
              height={1000}
              className=" rounded-full border-[20px] border-white"
            ></Image>
          </div>
          <div className="md:w-1/2 text-white pt-20">
            <div>
              <h2 className="text-6xl font-[700] cinzel">
                WHO <br /> WE ARE
              </h2>
              <p>
                Nigerias GESI powerhouse. Gender Dynamix. Women. Innovation.
                Equality. We craft solutions across health, education, and
                sustainability for a more equitable tomorrow.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-20">
              <ServicesItem
                title={"Advisory Services"}
                desc={
                  "We provide strategic guidance on developing and implementing gender-responsive policies, programs, and initiatives."
                }
              />
              <ServicesItem
                title={"Capacity Building"}
                desc={
                  "We equip organizations with the knowledge and skills necessary to integrate GESI principles into their operations."
                }
              />
              <ServicesItem
                title={"Management Services"}
                desc={
                  "We ensure effective project management and implementation of GESI strategies."
                }
              />
              <ServicesItem
                title={"Advisory Services"}
                desc={
                  "Our team offers specialized technical support on GESI mainstreaming across various sectors."
                }
              />
            </div>
          </div>
        </div>
      </PaddingWrapper>
    </div>
  );
}

export default OurServices;
