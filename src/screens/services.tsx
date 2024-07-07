import Header from "@/components/layouts/Header";
import Desc from "@/components/services/Desc";
import ServiceSection from "@/components/services/ServiceSection";
import React from "react";

function Services() {
  return (
    <div>
      <Header
        imgUrl={"/images/header/h4.png"}
        title={"Services"}
        desc={"Transformative Services for a Gender-Equal Future"}
      ></Header>
      <Desc></Desc>
    <ServiceSection />
    </div>
  );
}

export default Services;
