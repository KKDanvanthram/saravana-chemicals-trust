import { Link } from "react-router-dom";
import { 
  Building2, 
  Droplets, 
  Factory, 
  Pill, 
  UtensilsCrossed, 
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";

const industries = [
  { icon: Factory, name: "Textiles", description: "Dyeing, finishing, and processing" },
  { icon: Building2, name: "Institutions", description: "Educational & healthcare facilities" },
  { icon: UtensilsCrossed, name: "Food & Beverages", description: "Processing & packaging" },
  { icon: Pill, name: "Pharmaceuticals", description: "Manufacturing & research" },
  { icon: Droplets, name: "Refineries", description: "Oil & gas processing" },
  { icon: GraduationCap, name: "Municipal Corps", description: "Water & waste management" },
];

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <SectionHeading
              badge="Industries We Serve"
              title="Powering Industries Across South India"
              description="From municipal water treatment to pharmaceutical manufacturing, our chemicals serve diverse sectors with consistent quality and reliability."
            />
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {industries.map((industry) => (
                <div 
                  key={industry.name}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted hover:bg-accent transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <industry.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {industry.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="mt-8">
              <Link to="/industries">
                Explore Industries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl bg-gradient-to-br from-primary to-brand-water-dark flex items-center justify-center p-6">
                  <div className="text-center text-primary-foreground">
                    <span className="text-4xl font-bold block">500+</span>
                    <span className="text-sm opacity-80">Industrial Clients</span>
                  </div>
                </div>
                <div className="h-32 rounded-2xl bg-gradient-to-br from-secondary to-brand-flame-light flex items-center justify-center p-6">
                  <div className="text-center text-secondary-foreground">
                    <span className="text-3xl font-bold block">5</span>
                    <span className="text-sm opacity-80">States Served</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-32 rounded-2xl bg-accent flex items-center justify-center p-6">
                  <div className="text-center text-accent-foreground">
                    <span className="text-3xl font-bold block">100%</span>
                    <span className="text-sm opacity-80">Quality Tested</span>
                  </div>
                </div>
                <div className="h-48 rounded-2xl bg-gradient-to-br from-foreground to-primary flex items-center justify-center p-6">
                  <div className="text-center text-primary-foreground">
                    <span className="text-4xl font-bold block">25+</span>
                    <span className="text-sm opacity-80">Years Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}