import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Blog } from "@/components/Blog";
import { GetInvolved } from "@/components/GetInvolved";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Blog />
      <GetInvolved />
    </div>
  );
};

export default Index;