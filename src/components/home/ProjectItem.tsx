import Image from "next/image";
import React from "react";

function ProjectItem({
  title,
  desc,
  imgUrl,
  alt,
}: {
  title: string;
  desc: string;
  imgUrl: string;
  alt: string;
}) {
  return (
    <div className=" relative w-[100%] h-[23rem]">
      {/* <Image src="/images/p1.png" alt="" fill></Image> */}
      <Image src={imgUrl} alt={alt} fill className="object-cover"></Image>

      <div className=" absolute px-4 mt-2 bottom-[2rem]  max-w-[30rem]">
        <p className="text-white text-sm">
        {title}
        </p>
        <p className="text-xs text-primary">{desc}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
