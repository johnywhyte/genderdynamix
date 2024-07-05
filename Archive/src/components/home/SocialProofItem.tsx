import React from "react";
import Image from "next/image";

function SocialProofItem({ imgUrl, alt }: { imgUrl: string; alt: string }) {
  return (
    <div className="relative h-[6rem] w-[13rem] cursor-pointer">
      <Image
        src={imgUrl}
        alt={alt}
        fill
        className="object-contain"
        priority
        sizes="100vw"
      />
    </div>
  );
}

export default SocialProofItem;
