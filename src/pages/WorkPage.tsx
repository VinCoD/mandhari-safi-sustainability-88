import React from "react";
import Navbar from "@/components/Navbar";
import { Work } from "@/components/Work";

const WorkPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Work />
      </div>
    </div>
  );
};

export default WorkPage;