import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-screen">
      <Navbar />
      <main className=" ">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
