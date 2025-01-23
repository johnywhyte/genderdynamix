import React from "react";
import PaddingWrapper from "../layouts/PaddingWrapper";
import { Button } from "../ui/button";

function ContactForm() {
  return (
    <div className="my-20">
      <PaddingWrapper>
        <div className=" lg:flex gap-20">
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="uppercase">
              <p className="text-secondary my-4 bg-secondary-foreground w-[15rem] text-center flex justify-center p-2  rounded-full">Connect with us</p>
              <h4 className="text-4xl font-[700] cinzel">Get In Touch</h4>
            </div>

            <div className="flex gap-10 justify-between ">
              <div className="w-full">
                <label className="text-sm  pb-2">First Name</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="First Name"
                  className="w-full p-4 rounded-md text-black font-light  bg-[#F9F3FE]"
                />
              </div>

              <div className="w-full">
                <label className="text-sm pb-2">Last Name</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Last Name"
                  className="w-full p-4 rounded-md text-black font-light  bg-[#F9F3FE]"
                />
              </div>
            </div>

            <div>
              <label className="text-sm pb-2">Email Address</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter email address"
                className="w-full p-4 rounded-md text-black font-light  bg-[#F9F3FE]"
              />
            </div>

            <div className="">
              <label className="block text-sm pb-2">Message</label>
              <textarea
                id="feedback"
                name="feedback"
                placeholder="Write a Message"
                required
                className="w-full p-4 rounded-xl font-light  bg-[#F9F3FE]"
              ></textarea>
            </div>
            <Button
              variant="default"
              size="lg"
              className=" w-[10rem] bg-secondary text-white "
            >
              SUBMIT
            </Button>
          </div>

          <div className="p-4 mt-20 lg:mt-0 lg:p-20 border rounded-2xl lg:w-1/2">
            <p className="text-md pb-10">
              Gender Dynamix Consult Limited is a Nigerian women-led consultancy
              firm using GESI expertise to empower organizations and build a
              more equitable Nigeria.
            </p>
            <p className="font-medium pb-2 text-md lg:text-xl">No 72, Birnin Kebbi Crescent, Garki, Abuja</p>
            <p className="font-medium pb-2 text-md lg:text-xl">+2348067750659</p>
            <p className="font-medium text-md lg:text-xl">info@genderdynamixconsult.com</p>
          </div>
        </div>
      </PaddingWrapper>
    </div>
  );
}

export default ContactForm;
