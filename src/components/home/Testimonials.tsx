import React from "react";
import TestimonialCard from "./TestimonialCard";
import PaddingWrapper from "../layouts/PaddingWrapper";

function Testimonials() {
  return (
    <div>
      <div className="flex justify-center pt-20">
        <div className="flex flex-col ">
          <div>
            <h6 className="text-center	"> What they say about us</h6>
            <h1 className="font-[700] text-5xl text-center	cinzel">
              Testimonials
            </h1>
          </div>

          <PaddingWrapper>
            <TestimonialCard />
          </PaddingWrapper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
