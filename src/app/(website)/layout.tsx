import LandingLayout from "@/components/layouts";
import { ReactNode } from "react";


export default function LandingGroupLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <LandingLayout>{children}</LandingLayout>;
}
