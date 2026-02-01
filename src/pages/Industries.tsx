import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Droplets, 
  Factory, 
  Pill, 
  UtensilsCrossed, 
  GraduationCap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Textiles",
    description: "Comprehensive chemical solutions for textile dyeing, finishing, and wastewater treatment processes.",
    applications: ["Dye fixing agents", "Softeners", "ETP chemicals", "Water treatment", "Bleaching agents"],
    link: "/products/water-treatment",
  },
  {
    icon: Building2,
    name: "Institutions",
    description: "Laboratory and cleaning chemicals for educational institutions, hospitals, and research facilities.",
    applications: ["Lab reagents", "Cleaning chemicals", "Disinfectants", "Water purification", "Safety chemicals"],
    link: "/products/lab-chemicals",
  },
  {
    icon: UtensilsCrossed,
    name: "Food & Beverages",
    description: "Food-grade chemicals for processing, cleaning, and water treatment in food manufacturing.",
    applications: ["Water treatment", "CIP chemicals", "Sanitizers", "Boiler chemicals", "Refrigeration chemicals"],
    link: "/products/water-treatment",
  },
  {
    icon: Pill,
    name: "Pharmaceuticals",
    description: "High-purity solvents and chemicals for pharmaceutical manufacturing and quality control.",
    applications: ["Process solvents", "Cleaning agents", "Lab chemicals", "Water purification", "QC reagents"],
    link: "/products/industrial-solvents",
  },
  {
    icon: Droplets,
    name: "Refineries",
    description: "Specialized chemicals for oil and gas processing, cooling systems, and effluent treatment.",
    applications: ["Corrosion inhibitors", "Scale inhibitors", "Cooling water chemicals", "ETP chemicals", "Degreasers"],
    link: "/products/etp-chemicals",
  },
  {
    icon: GraduationCap,
    name: "Municipal Corporations",
    description: "Large-scale water and wastewater treatment chemicals for municipal utilities and public works.",
    applications: ["Coagulants", "Flocculants", "Disinfectants", "pH adjusters", "Sludge treatment"],
    link: "/products/water-treatment",
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-brand-water-dark to-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
              <Factory className="h-4 w-4 text-secondary" />
              Industry Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Industries We Serve
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              From textiles to municipal corporations, we provide tailored chemical 
              solutions for diverse industrial applications across South India.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Expertise"
            title="Sector-Specific Solutions"
            description="We understand the unique challenges of each industry and provide customized chemical solutions to meet specific requirements."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {industries.map((industry) => (
              <div 
                key={industry.name}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary transition-all card-hover"
              >
                <div className="p-4 rounded-xl bg-accent w-fit mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <industry.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {industry.description}
                </p>
                <div className="space-y-2 mb-6">
                  {industry.applications.slice(0, 4).map((app) => (
                    <div key={app} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{app}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to={industry.link}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors"
                >
                  View Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Partnership Benefits"
                title="Why Industries Trust Us"
                description="Over 25 years of serving South India's industrial sector with quality chemicals and exceptional service."
              />
              <div className="space-y-6 mt-8">
                {[
                  { title: "Technical Expertise", desc: "Our team provides expert guidance on chemical selection and application." },
                  { title: "Reliable Supply", desc: "Consistent availability and timely delivery across South India." },
                  { title: "Quality Assurance", desc: "Every batch tested to meet stringent quality standards." },
                  { title: "Competitive Pricing", desc: "Best value for industrial-grade chemicals." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary to-brand-water-dark text-center">
                <span className="text-5xl font-bold text-primary-foreground block mb-2">1000+</span>
                <span className="text-primary-foreground/80">Industrial Clients</span>
              </div>
              <div className="p-8 rounded-2xl bg-card text-center border border-border">
                <span className="text-5xl font-bold text-foreground block mb-2">25+</span>
                <span className="text-muted-foreground">Years of Service</span>
              </div>
              <div className="p-8 rounded-2xl bg-card text-center border border-border">
                <span className="text-5xl font-bold text-foreground block mb-2">6</span>
                <span className="text-muted-foreground">Industries Served</span>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary to-brand-flame-light text-center">
                <span className="text-5xl font-bold text-secondary-foreground block mb-2">100%</span>
                <span className="text-secondary-foreground/80">Quality Tested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Industries;