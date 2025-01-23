import React from "react";
import MissionCard from "./MissionCard";
import PaddingWrapper from "../layouts/PaddingWrapper";

function MissionSection() {
  return (
    <PaddingWrapper>
      <div className="md:flex gap-10">
        <MissionCard
          imgUrl={"/images/mission.svg"}
          title={"Our Mission"}
          desc={
            "We are dedicated to empowering organizations with the knowledge, tools, and strategies necessary to mainstream GESI principles into their core operations. We believe in creating a more equitable future where both women and men have the opportunity to thrive."
          }
        ></MissionCard>
        <MissionCard
          imgUrl={"/images/approach.svg"}
          title={"Our Approach"}
          desc={
            "We take a collaborative and client-centered approach, working closely with our partners to understand their unique needs and challenges. We offer a comprehensive range of services, from capacity building and advisory services to technical support and project management."
          }
        ></MissionCard>
      </div>
    </PaddingWrapper>
  );
}

export default MissionSection;
