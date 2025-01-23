import Image from "next/image";
import React from "react";

function MissionCard({
  imgUrl,
  title,
  desc,
}: {
  imgUrl: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-12 border mb-10 rounded-xl">
      <Image src={imgUrl} alt="" width={100} height={100} className="py-4"></Image>
      <div>
        <h4 className="font-medium text-2xl pb-4 ">{title}</h4>
        <p className="font-light ">{desc}</p>
      </div>
    </div>
  );
}

export default MissionCard;
