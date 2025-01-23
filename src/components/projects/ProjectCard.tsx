import Image from "next/image";
import React from "react";

function ProjectCard({ imgUrl }: { imgUrl: string }) {
  return (
    <div className="relative w-[20rem] mb-6 h-[30rem]">
      <Image src={imgUrl} alt="" fill ></Image>
    </div>
  );
}

export default ProjectCard;
