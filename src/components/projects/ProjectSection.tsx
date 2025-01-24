import React from "react";
import PaddingWrapper from "../layouts/PaddingWrapper";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  return (
    <div className="flex justify-center">
      <PaddingWrapper>
        <div className="lg:flex my-8 items-center gap-10 lg:p-16 lg:max-w-[60rem]">
          <h4 className="cinzel text-3xl lg:text-5xl font-[700]">
            Empowering Change
          </h4>
          <p className="">
            Our projects showcase the breadth and depth of our expertise. We
            have partnered with diverse organizations, from international NGOs
            to government agencies, tackling critical GESI challenges across
            various sectors like health, education, and sustainable economic
            development.
          </p>
        </div>

        <div className=" ">
          {/* <div className="lg:flex  gap-10 pb-10">
            <ProjectCard imgUrl={"/images/project/p1.png"} />
            <ProjectCard imgUrl={"/images/project/p2.png"} />
            <ProjectCard imgUrl={"/images/project/p3.png"} />
          </div> */}
          {/* <div className="lg:flex gap-10"> */}
          <div className="  sm:grid grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard imgUrl={"/images/project/p1.png"} />
            <ProjectCard imgUrl={"/images/project/p2.png"} />
            <ProjectCard imgUrl={"/images/project/p3.png"} />
            <ProjectCard imgUrl={"/images/project/p1.png"} />
            <ProjectCard imgUrl={"/images/project/p2.png"} />
            <ProjectCard imgUrl={"/images/project/p3.png"} />
          </div>
        </div>
      </PaddingWrapper>
    </div>
  );
}

export default ProjectSection;
