import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "  Projects | Gender Dynamics",
};

const DynamicAboutUs = dynamic(() => import("@/screens/projects"), {
  ssr: false,
});

export default function Projects() {
  return <DynamicAboutUs />;
}
