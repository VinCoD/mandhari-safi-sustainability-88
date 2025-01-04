import React from "react";
import Navbar from "@/components/Navbar";
import { About } from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <About />
      </div>
    </div>
  );
};

export default AboutPage;