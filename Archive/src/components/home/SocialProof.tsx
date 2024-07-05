import React from "react";
import SocialProofItem from "./SocialProofItem";

function SocialProof() {
  return (
    <div className="flex w-full justify-center">

      <div className="md:flex items-center">
        <SocialProofItem imgUrl={"/images/1.png"} alt={""} />
        <SocialProofItem imgUrl={"/images/2.png"} alt={""} />
        <SocialProofItem imgUrl={"/images/3.png"} alt={""} />
        <SocialProofItem imgUrl={"/images/4.png"} alt={""} />
        <SocialProofItem imgUrl={"/images/5.png"} alt={""} />
      </div>
    </div>
  );
}

export default SocialProof;
