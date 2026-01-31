import { Shield, Award, Truck, HeadphonesIcon, Leaf, FlaskConical } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Award,
    title: "25+ Years Experience",
    description: "Established in 1997, we bring decades of expertise in chemical manufacturing and supply.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control at every stage ensures products meet the highest industry standards.",
  },
  {
    icon: FlaskConical,
    title: "R&D Excellence",
    description: "Continuous innovation through dedicated research and development capabilities.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description: "Committed to environmental responsibility with sustainable chemical solutions.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    description: "Efficient distribution network ensuring timely delivery across South India.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Technical assistance and consultation from our team of experienced professionals.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-foreground molecular-pattern">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Why Choose Us"
          title="Trusted by Industries Across South India"
          description="We combine decades of expertise with cutting-edge solutions to deliver chemicals that perform."
          centered
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 rounded-xl bg-secondary/20 w-fit mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}