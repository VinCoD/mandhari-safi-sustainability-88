const blogPosts = [
  {
    title: "The Role of Mangroves in Climate Mitigation",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    excerpt:
      "Discover how mangrove ecosystems play a crucial role in carbon sequestration.",
  },
  {
    title: "Community-Led Conservation: Success Stories",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    excerpt:
      "Learn about successful community initiatives in environmental conservation.",
  },
  {
    title: "Innovations in Renewable Energy",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    excerpt: "Exploring the latest advancements in sustainable energy solutions.",
  },
];

export const Blog = () => {
  return (
    <section className="py-20 bg-white" id="blog">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Latest Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};