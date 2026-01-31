import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/home/CTASection";
import { 
  Award, 
  MapPin, 
  Users, 
  Target, 
  Eye, 
  Shield, 
  Leaf, 
  FlaskConical,
  CheckCircle2
} from "lucide-react";

const milestones = [
  { year: "1997", title: "Company Established", description: "Founded in Chennai with a vision to deliver quality chemicals" },
  { year: "2005", title: "Expansion to South India", description: "Extended operations to cover Tamil Nadu, AP, Karnataka" },
  { year: "2015", title: "R&D Excellence", description: "Established dedicated research and development facility" },
  { year: "2022", title: "Sustainability Focus", description: "Launched eco-friendly chemical solutions line" },
];

const values = [
  { icon: Shield, title: "Quality First", description: "Uncompromising quality standards at every stage of production and delivery." },
  { icon: Leaf, title: "Environmental Care", description: "Committed to sustainable practices and eco-friendly solutions." },
  { icon: Users, title: "Customer Focus", description: "Building lasting partnerships through exceptional service and support." },
  { icon: FlaskConical, title: "Innovation", description: "Continuous improvement through research and technological advancement." },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "Environmental Compliance Standards",
  "Industrial Safety Protocols",
  "Regulatory Approvals for Chemical Manufacturing",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-brand-water-dark to-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
              <Award className="h-4 w-4 text-secondary" />
              Established 1997
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              About Sri Saravana Chemicals
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              For over 25 years, we've been South India's trusted partner in chemical 
              manufacturing and supply, serving industries with quality, reliability, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                badge="Our Story"
                title="A Legacy of Chemical Excellence"
                description="Headquartered in Chennai, Sri Saravana Chemicals has grown from a local supplier to a regional leader in chemical solutions."
              />
              <div className="space-y-4 mt-8 text-muted-foreground">
                <p>
                  Established in 1997, Sri Saravana Chemicals began with a simple mission: 
                  to provide high-quality chemicals that industries can rely on. Over the 
                  decades, we've expanded our capabilities while staying true to our core values.
                </p>
                <p>
                  Today, we serve clients across Tamil Nadu, Andhra Pradesh, Karnataka, 
                  Kerala, and Puducherry. Our product portfolio includes water treatment 
                  chemicals, ETP solutions, lab chemicals, and industrial solvents.
                </p>
                <p>
                  With dedicated R&D, stringent quality control, and a customer-first 
                  approach, we continue to be the preferred chemical partner for industries, 
                  municipalities, and institutions across South India.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-accent text-center">
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <span className="text-4xl font-bold text-foreground block">25+</span>
                <span className="text-muted-foreground">Years Experience</span>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-brand-water-dark text-center">
                <Users className="h-10 w-10 text-primary-foreground mx-auto mb-3" />
                <span className="text-4xl font-bold text-primary-foreground block">500+</span>
                <span className="text-primary-foreground/80">Happy Clients</span>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary to-brand-flame-light text-center">
                <MapPin className="h-10 w-10 text-secondary-foreground mx-auto mb-3" />
                <span className="text-4xl font-bold text-secondary-foreground block">5</span>
                <span className="text-secondary-foreground/80">States Served</span>
              </div>
              <div className="p-6 rounded-2xl bg-muted text-center">
                <FlaskConical className="h-10 w-10 text-primary mx-auto mb-3" />
                <span className="text-4xl font-bold text-foreground block">100+</span>
                <span className="text-muted-foreground">Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 lg:p-12 rounded-3xl bg-card card-hover">
              <div className="p-4 rounded-xl bg-accent w-fit mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver high-performance chemical solutions that meet the diverse needs 
                of industries while maintaining the highest standards of quality, safety, 
                and environmental responsibility. We strive to be the most trusted chemical 
                partner in South India.
              </p>
            </div>
            <div className="p-8 lg:p-12 rounded-3xl bg-card card-hover">
              <div className="p-4 rounded-xl bg-secondary/20 w-fit mb-6">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be South India's leading chemical manufacturer, recognized for innovation, 
                sustainability, and unwavering commitment to customer success. We envision 
                a future where our solutions power industrial growth while protecting 
                the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            description="The principles that guide our operations and relationships."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value) => (
              <div 
                key={value.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary transition-colors"
              >
                <div className="p-3 rounded-xl bg-accent w-fit mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28 bg-foreground">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Trust & Compliance"
            title="Certified Quality, Assured Results"
            description="Our operations meet stringent industry standards and regulatory requirements."
            centered
            light
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <div 
                key={cert}
                className="flex items-center gap-4 p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
              >
                <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                <span className="text-primary-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;