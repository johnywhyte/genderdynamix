import Image from "next/image";
import React from "react";
import PaddingWrapper from "./PaddingWrapper";

function Header({
  imgUrl,
  title,
  desc,
}: {
  imgUrl: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="w-full relative h-[30rem]">
      <Image src={imgUrl} alt="" fill></Image>

      <PaddingWrapper>
        <div className=" absolute  lg:top-[6rem] ">
          <div className=" px-4 mt-2 lg:mt-[4rem] max-w-[45rem]">
            <p className="text-primary uppercase">{title}</p>
            <h1 className=" text-white uppercase lg:text-5xl lg:pb-2 cinzel  text-4xl font-[700] tracking-tight leading-[1.5]">
            {desc}
            </h1>
          </div>
        </div>
      </PaddingWrapper>
    </div>
  );
}

export default Header;
