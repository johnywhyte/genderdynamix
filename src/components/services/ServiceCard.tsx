import Image from "next/image";
import React from "react";

function ServiceCard({
  imgUrl,
  title,
  desc,
}: {
  imgUrl: string;
  title: string;
  desc: string;
}) {
  return (
    <div className=" p-10 border rounded-xl">
      <Image src={imgUrl} alt="" width={60} height={60} className="pb-4"></Image>
      <div>
        <h4 className="text-2xl font-semibold pb-4">{title}</h4>
        <p className="font-light">{desc}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
