export const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">About Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            We are dedicated to developing and implementing innovative,
            science-based solutions to address pressing environmental challenges,
            ensuring a healthy and sustainable future for all.
          </p>
          <div
            className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1433086966358-54859d0ed716")',
            }}
          />
        </div>
      </div>
    </section>
  );
};