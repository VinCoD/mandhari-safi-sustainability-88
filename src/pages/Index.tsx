import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Blog } from "@/components/Blog";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Work />
      <Blog />
    </div>
  );
};

export default Index;