import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-screen">
      <Header />
      <main className=" ">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
