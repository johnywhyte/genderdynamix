import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Contact Us | Gender Dynamics",
};

const DynamicAboutUs = dynamic(() => import("@/screens/contact"), {
  ssr: false,
});

export default function Contact() {
  return <DynamicAboutUs />;
}
