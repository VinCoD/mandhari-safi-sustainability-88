import { Leaf, Waves, Scale, Users } from "lucide-react";

const workAreas = [
  {
    title: "Climate Change Mitigation",
    description:
      "Developing strategies to reduce greenhouse gas emissions and promote renewable energy adoption.",
    details: [
      "Carbon footprint reduction programs for businesses and communities",
      "Renewable energy transition support and consultation",
      "Reforestation and carbon sequestration initiatives",
      "Green technology adoption advocacy and implementation",
      "Climate resilience planning for vulnerable communities"
    ],
    icon: Leaf,
  },
  {
    title: "Ocean Conservation",
    description:
      "Protecting marine ecosystems through sustainable fishing practices and habitat restoration.",
    details: [
      "Coral reef restoration and protection programs",
      "Sustainable fishing practice education and implementation",
      "Marine debris cleanup initiatives",
      "Marine protected area establishment and management",
      "Ocean acidification monitoring and mitigation"
    ],
    icon: Waves,
  },
  {
    title: "Environmental Justice",
    description:
      "Ensuring all communities have access to clean air, water, and natural resources.",
    details: [
      "Community-based environmental monitoring programs",
      "Legal advocacy for affected communities",
      "Environmental health impact assessments",
      "Equal access to green spaces initiatives",
      "Clean water and air quality improvement projects"
    ],
    icon: Scale,
  },
  {
    title: "Public Engagement",
    description:
      "Empowering individuals and communities through education and collective action.",
    details: [
      "Environmental education programs for schools",
      "Community workshops and training sessions",
      "Citizen science initiatives",
      "Youth leadership development in environmental advocacy",
      "Digital awareness campaigns and social media engagement"
    ],
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
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
          At Mandhari Safi, we focus on four key areas that are crucial for
          environmental conservation and sustainable development. Through these
          initiatives, we work to create lasting positive impact on our planet and
          communities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workAreas.map((area) => (
            <div
              key={area.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <area.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {area.details.map((detail, index) => (
                  <li key={index} className="text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};