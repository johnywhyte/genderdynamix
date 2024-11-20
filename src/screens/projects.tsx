import Header from "@/components/layouts/Header";
import ProjectSection from "@/components/projects/ProjectSection";
import React from "react";

function Projects() {
  return (
    <div>
      <Header
        imgUrl={"/images/header/h2.png"}
        title={"Projects & Program"}
        desc={"Explore Our Projects"}
      />
      <ProjectSection></ProjectSection>
    </div>
  );
}

export default Projects;
