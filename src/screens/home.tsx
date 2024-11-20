import React from "react";
import HeroSection from "@/components/home/HeroSection";
import SocialProof from "@/components/home/SocialProof";
import WhoAreWe from "@/components/home/WhoAreWe";
import OurServices from "@/components/home/OurServices";
import Qoute from "@/components/home/Qoute";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import ContactUs from "@/components/home/ContactUs";
import Footer from "@/components/layouts/Footer";

function Home() {
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
      <Footer />
    </div>
  );
}

export default Home;
