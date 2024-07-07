import React from "react";
import PaddingWrapper from "../layouts/PaddingWrapper";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  return (
    <div className="flex justify-center">
      <PaddingWrapper>
        <div className="flex items-center gap-10 p-16 max-w-[60rem]">
          <h4 className="cinzel  text-6xl font-[700]">Empowering Change</h4>
          <p>
            Our projects showcase the breadth and depth of our expertise. We've
            partnered with diverse organizations, from international NGOs to
            government agencies, tackling critical GESI challenges across
            various sectors like health, education, and sustainable economic
            development.
          </p>
        </div>


        <div className="flex gap-10 pb-10">
            <ProjectCard imgUrl={"/images/project/p1.png"}/>
            <ProjectCard imgUrl={"/images/project/p2.png"}/>
            <ProjectCard imgUrl={"/images/project/p3.png"}/>
        </div>
        <div className="flex gap-10">
            <ProjectCard imgUrl={"/images/project/p1.png"}/>
            <ProjectCard imgUrl={"/images/project/p2.png"}/>
            <ProjectCard imgUrl={"/images/project/p3.png"}/>
        </div>
      </PaddingWrapper>
    </div>
  );
}

export default ProjectSection;
