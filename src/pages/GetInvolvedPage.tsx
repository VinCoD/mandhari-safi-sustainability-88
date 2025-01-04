import React from "react";
import Navbar from "@/components/Navbar";
import { GetInvolved } from "@/components/GetInvolved";

const GetInvolvedPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <GetInvolved />
      </div>
    </div>
  );
};

export default GetInvolvedPage;