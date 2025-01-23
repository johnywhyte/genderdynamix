import React from "react";
import PaddingWrapper from "../layouts/PaddingWrapper";
import ServiceCard from "./ServiceCard";

function ServiceSection() {
  return (
    <div>
      <PaddingWrapper>
        <div className="lg:grid grid-cols-3 gap-4">
          <ServiceCard
            imgUrl={"/images/serviceicon.svg"}
            title={
              " Project design, implementation and management for GESI results"
            }
            desc={
              " We provide strategic guidance on developing and implementing gender responsive policies, programs, and initiatives."
            }
          />

          <ServiceCard
            imgUrl={"/images/serviceicon.svg"}
            title={
              "Gender analytics for gender insights"
            }
            desc={
              " We equip organizations with the knowledge and skills necessary to integrate GESI principles into their operations."
            }
          />

          <ServiceCard
            imgUrl={"/images/serviceicon.svg"}
            title={
              " Capacity Building"
            }
            desc={
              " We ensure effective project management and implementation of GESI strategies."
            }
          />

          <ServiceCard
            imgUrl={"/images/serviceicon.svg"}
            title={
              " Gender Policy/Strategic Plan Development"
            }
            desc={
              " We provide strategic guidance on developing and implementing gender responsive policies, programs, and initiatives."
            }
          />

          <ServiceCard
            imgUrl={"/images/serviceicon.svg"}
            title={
              " GESI Community Engagements"
            }
            desc={
              " We provide strategic guidance on developing and implementing gender responsive policies, programs, and initiatives."
            }
          />

          <ServiceCard
            imgUrl={"/images/serviceicon.svg"}
            title={
              " Project design, implementation and management for GESI results"
            }
            desc={
              " We provide strategic guidance on developing and implementing gender responsive policies, programs, and initiatives."
            }
          />

          <ServiceCard
            imgUrl={"/images/serviceicon.svg"}
            title={
              " Project design, implementation and management for GESI results"
            }
            desc={
              " We provide strategic guidance on developing and implementing gender responsive policies, programs, and initiatives."
            }
          />

          <ServiceCard
            imgUrl={"/images/serviceicon.svg"}
            title={
              " Project design, implementation and management for GESI results"
            }
            desc={
              " We provide strategic guidance on developing and implementing gender responsive policies, programs, and initiatives."
            }
          />
        </div>
      </PaddingWrapper>
    </div>
  );
}

export default ServiceSection;
