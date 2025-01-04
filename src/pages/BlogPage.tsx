import React from "react";
import Navbar from "@/components/Navbar";
import { Blog } from "@/components/Blog";

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Blog />
      </div>
    </div>
  );
};

export default BlogPage;