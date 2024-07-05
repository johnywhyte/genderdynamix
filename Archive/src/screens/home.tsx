import React from "react";
import HeroSection from "@/components/home/HeroSection";
import SocialProof from "@/components/home/SocialProof";
import WhoAreWe from "@/components/home/WhoAreWe";
import OurServices from "@/components/home/OurServices";
import Qoute from "@/components/home/Qoute";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import ContactUs from "@/components/home/ContactUs";

function home() {
  return (
    <div>
      <HeroSection />
      <SocialProof />
      <WhoAreWe />
      <OurServices />
      <Qoute />
      <Projects />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default home;
