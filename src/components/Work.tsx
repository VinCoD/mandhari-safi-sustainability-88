import { Leaf, Waves, Scale, Users } from "lucide-react";

const workAreas = [
  {
    title: "Climate Change Mitigation",
    description:
      "Developing strategies to reduce greenhouse gas emissions and promote renewable energy adoption.",
    icon: Leaf,
  },
  {
    title: "Ocean Conservation",
    description:
      "Protecting marine ecosystems through sustainable fishing practices and habitat restoration.",
    icon: Waves,
  },
  {
    title: "Environmental Justice",
    description:
      "Ensuring all communities have access to clean air, water, and natural resources.",
    icon: Scale,
  },
  {
    title: "Public Engagement",
    description:
      "Empowering individuals and communities through education and collective action.",
    icon: Users,
  },
];

export const Work = () => {
  return (
    <section className="py-20 bg-gray-50" id="work">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workAreas.map((area) => (
            <div
              key={area.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <area.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};