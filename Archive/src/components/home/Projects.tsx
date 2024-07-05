import React from "react";
import PaddingWrapper from "../layouts/PaddingWrapper";
import { Button } from "../ui/button";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div>
    <PaddingWrapper>
      <div className="md:flex  gap-20 lg:px-20 py-14 lg:py-32">
        <h1 className="cinzel text-8xl mb-4 font-[700]">Projects </h1>
        <div>
          <p className="pb-4">
            Gender Dynamix Consult actively tackles gender inequality across
            various sectors. We have deployed our expertise on projects like The
            Gambia Gender in Education Programme and a UN Women project focused
            on access to GBV services. Our team excels in gender analysis,
            capacity building, and policy development, ensuring impactful
            results for our clients.
          </p>
          <Button
            variant="default"
            size="lg"
            className=" rounded-full text-white "
          >
            Learn More
          </Button>
        </div>
      </div>
    </PaddingWrapper>
    <div className="w-[100%]  md:flex">
      <ProjectItem title={"The Gambia on “Identification and formulation of The Gambia Gender in Education Programme” (2023)"} desc={"GENDER DYNAMIX CONSULT, EVENT"} imgUrl={"/images/p1.png"} alt={"project 1"} />
      <ProjectItem title={"The Gambia on “Identification and formulation of The Gambia Gender in Education Programme” (2023)"} desc={"GENDER DYNAMIX CONSULT, EVENT"} imgUrl={"/images/p2.png"} alt={"project 1"} />
      <ProjectItem title={"The Gambia on “Identification and formulation of The Gambia Gender in Education Programme” (2023)"} desc={"GENDER DYNAMIX CONSULT, EVENT"} imgUrl={"/images/p3.png"} alt={"project 1"} />

    </div>
    </div>
  );
}

export default Projects;
