import React from "react";
import PaddingWrapper from "../layouts/PaddingWrapper";
import TeamMemberCard from "./TeamMemberCard";

function OurTeam() {
  return (
    <div className="bg-[#831DEA] my-4 py-8">
      <div className="hidden lg:flex gap-4 items-center">
        <div className="w-2/5 pb-10 md:pl-[10rem] text-white">
          <h1 className="text-6xl pb-6 cinzel">OUR TEAM</h1>
          <p className="font-light">
            We parade a world-class team of professionals with diverse
            expertise, extensive technical skills, and experience across sectors
            to address challenges and create impactful solutions for GESI
            advancement.
          </p>
        </div>
        <div className="bg-white w-3/5 h-[100%] flex pl-4">
          <TeamMemberCard
            imgUrl={"/images/tm1.png"}
            title={"Joyce Ahmadu"}
            desc={"CEO & /Lead GESI Expert"}
          />
          <TeamMemberCard
            imgUrl={"/images/tm2.png"}
            title={"Joyce Ahmadu"}
            desc={"CEO & /Lead GESI Expert"}
          />
          <TeamMemberCard
            imgUrl={"/images/tm3.png"}
            title={"Joyce Ahmadu"}
            desc={"CEO & /Lead GESI Expert"}
          />
        </div>
      </div>

      <div className="lg:hidden  gap-4 items-center">
        <div className=" p-[2rem] text-white">
          <h1 className="text-3xl pb-6 cinzel">OUR TEAM</h1>
          <p className="font-light">
            We parade a world-class team of professionals with diverse
            expertise, extensive technical skills, and experience across sectors
            to address challenges and create impactful solutions for GESI
            advancement.
          </p>
        </div>
        <div className=" w-full sm:flex gap-4 text-white px-[2rem]">
          <TeamMemberCard
            imgUrl={"/images/tm1.png"}
            title={"Joyce Ahmadu"}
            desc={"CEO & /Lead GESI Expert"}
          />
          <TeamMemberCard
            imgUrl={"/images/tm2.png"}
            title={"Joyce Ahmadu"}
            desc={"CEO & /Lead GESI Expert"}
          />
          <TeamMemberCard
            imgUrl={"/images/tm3.png"}
            title={"Joyce Ahmadu"}
            desc={"CEO & /Lead GESI Expert"}
          />
        </div>
      </div>
    </div>
  );
}


export default OurTeam;
