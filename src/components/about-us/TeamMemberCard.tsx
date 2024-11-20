import Image from "next/image";
import React from "react";

function TeamMemberCard({
    imgUrl,
    title,
    desc,
  }: {
    imgUrl: string;
    title: string;
    desc: string;
  }) {
  return (
    <div className="p-2"> 
      <div className="pb-4"><Image src={imgUrl} alt="" width={240} height={960}></Image></div>
      <div>
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
