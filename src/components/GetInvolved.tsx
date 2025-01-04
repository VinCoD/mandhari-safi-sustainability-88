import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, MessageCircle, Mail } from "lucide-react";

const actions = [
  {
    title: "Volunteer",
    description: "Join our community projects and make a direct impact on conservation efforts.",
    icon: Users,
    color: "text-primary",
  },
  {
    title: "Donate",
    description: "Support our initiatives through financial contributions to help protect our environment.",
    icon: Heart,
    color: "text-accent",
  },
  {
    title: "Advocate",
    description: "Raise awareness and speak up for environmental causes in your community.",
    icon: MessageCircle,
    color: "text-secondary",
  },
  {
    title: "Stay Informed",
    description: "Subscribe to our newsletter for updates on our projects and environmental news.",
    icon: Mail,
    color: "text-primary",
  },
];

export const GetInvolved = () => {
  return (
    <section className="py-20 bg-gray-50" id="get-involved">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Get Involved</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in our mission to protect and preserve our environment. Every action counts, and together we can make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {actions.map((action) => (
            <div
              key={action.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <action.icon className={`w-12 h-12 ${action.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-3">{action.title}</h3>
              <p className="text-gray-600 mb-4">{action.description}</p>
              <Button
                variant="ghost"
                className="group text-primary hover:text-primary/90"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};