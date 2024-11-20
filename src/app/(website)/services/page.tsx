import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Services | Gender Dynamics",
};

const DynamicAboutUs = dynamic(() => import("@/screens/services"), {
  ssr: false,
});

export default function Services() {
  return <DynamicAboutUs />;
}
