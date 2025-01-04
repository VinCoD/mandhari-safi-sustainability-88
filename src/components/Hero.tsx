import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb")',
        }}
      >
        <div className="hero-gradient absolute inset-0" />
      </div>
      <div className="relative h-full flex items-center justify-center text-white container">
        <div className="text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Mandhari Safi</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Preserving and enhancing the natural landscapes and seascapes that
            sustain our planet.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white"
          >
            Join Our Mission
          </Button>
        </div>
      </div>
    </div>
  );
};