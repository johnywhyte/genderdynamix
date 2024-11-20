import JoinUs from "@/components/about-us/JoinUs";
import MissionSection from "@/components/about-us/MissionSection";
import OurCulture from "@/components/about-us/OurCulture";
import OurImpact from "@/components/about-us/OurImpact";
import OurTeam from "@/components/about-us/OurTeam";
import WhoAreWe from "@/components/about-us/WhoAreWe";
import Header from "@/components/layouts/Header";
import React from "react";

function AboutUs() {
  return (
    <div>
      <Header imgUrl={"/images/header/h1.png"} title={"About Us"} desc={"Advancing Gender Equality & SOCIAL INCLUSION In Nigeria"}></Header>
      <WhoAreWe></WhoAreWe>
      <MissionSection></MissionSection>
      <OurTeam></OurTeam>
      <OurCulture></OurCulture>
      <OurImpact></OurImpact>
      <JoinUs></JoinUs>
    </div>
  );
}

export default AboutUs;
