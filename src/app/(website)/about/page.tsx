import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "About Us | Gender Dynamics",
};

const DynamicAboutUs = dynamic(() => import("@/screens/about-us"), {
  ssr: false,
});

export default function AboutUs() {
  return <DynamicAboutUs />;
}
