import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Droplets, Factory, FlaskConical, Beaker, Snowflake, Download } from "lucide-react";
import waterTreatmentImg from "@/assets/water-treatment.jpg";
import etpImg from "@/assets/etp-plant.jpg";
import labImg from "@/assets/lab-chemicals.jpg";
import solventsImg from "@/assets/industrial-solvents.jpg";

const productData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  icon: typeof Droplets;
  image: string;
  subcategories: { name: string; items: string[] }[];
  applications: string[];
  benefits: string[];
}> = {
  "water-treatment": {
    title: "Water Treatment Chemicals",
    description: "Comprehensive solutions for water purification across industrial and municipal applications.",
    longDescription: "Our water treatment chemicals are formulated to meet the demanding requirements of industrial, commercial, and municipal water treatment facilities. We provide complete solutions for boiler treatment, R.O. plants, and raw water applications.",
    icon: Droplets,
    image: waterTreatmentImg,
    subcategories: [
      {
        name: "Boiler Application",
        items: ["Cyclohexylamine", "Hydrazine Hydrate 80%", "Morpholine", "Sodium Hexa Meta Phosphate", "Sodium Sulphate", "Sulfamic Acid (Liquid/Powder)", "TriSodium Phosphate", "Antiscalant Inhibitor", "Condensate Conditioners", "Descaling Compound", "Dispersant", "Oxygen Scavengers", "pH Boosters"],
      },
      {
        name: "R.O. Plant Application",
        items: ["Anti Foulants", "Antiscalant", "Biocides", "Chlorine Remover", "Membrane Cleaner (High/Low pH)", "pH Boosters", "Polyelectrolyte", "Citric Acid", "Sodium Hypochlorite", "Sodium Meta Bisulphite", "Sulphuric Acid"],
      },
      {
        name: "Raw Water Application",
        items: ["Activated Carbon", "Aluminium Sulphate (Ferric/Non Ferric Alum)", "Ferric Chloride (Liquid/Lamp/Powder)", "Hydrochloric Acid", "Lime/Calcium Hydroxide", "Polyelectrolyte", "Sodium Aluminate", "Sodium Hydroxide/Caustic Soda"],
      },
    ],
    applications: [
      "Municipal water treatment plants",
      "Industrial process water",
      "Cooling tower water treatment",
      "Boiler water treatment",
      "R.O. plant maintenance",
      "Drinking water purification",
    ],
    benefits: [
      "Improved water quality and clarity",
      "Extended equipment lifespan",
      "Regulatory compliance",
      "Cost-effective treatment solutions",
      "Technical support and guidance",
    ],
  },
  "etp-chemicals": {
    title: "ETP & Waste Water Treatment Chemicals",
    description: "Specialized solutions for effluent treatment and environmental compliance.",
    longDescription: "Our ETP chemicals are designed to help industries meet environmental regulations while efficiently treating wastewater. We provide solutions for coagulation, flocculation, colour removal, and sludge management.",
    icon: Factory,
    image: etpImg,
    subcategories: [
      {
        name: "Waste Water Treatment",
        items: ["Activated Carbon", "Aluminium Sulphate (Ferric/Non Ferric)", "Colour Coagulant", "Ferric Chloride (Liquid)", "Ferrous Sulphate", "Flocculants", "Lime/Calcium Hydroxide", "Poly Aluminium Chloride", "Polyelectrolyte (Cationic/Anionic)"],
      },
    ],
    applications: [
      "Textile industry effluent treatment",
      "Pharmaceutical wastewater",
      "Food processing effluents",
      "Chemical manufacturing waste",
      "Paper and pulp industry",
      "Metal finishing operations",
    ],
    benefits: [
      "Environmental compliance assured",
      "Reduced discharge penalties",
      "Lower sludge disposal costs",
      "Improved treatment efficiency",
      "Expert technical guidance",
    ],
  },
  "dg-hvac": {
    title: "D.G. Sets & H.V.A.C Chemicals",
    description: "Specialized chemicals for diesel generator and HVAC systems.",
    longDescription: "We provide high-performance chemicals for diesel generator cooling systems and HVAC applications, including antiscalants, corrosion inhibitors, coolants, and specialty glycols for optimal system performance.",
    icon: Snowflake,
    image: waterTreatmentImg,
    subcategories: [
      {
        name: "D.G. Sets Application",
        items: ["Antiscalant", "Cleaners", "Corrosion Inhibitors", "High Performance Cooling Media/Coolants", "Cartridge Filters"],
      },
      {
        name: "H.V.A.C Application",
        items: ["Antiscalant", "Biocides", "Corrosion Inhibitors", "Calcium Chloride", "Lithium Bromide", "Monoethylene Glycol", "Propylene Glycol"],
      },
    ],
    applications: [
      "Diesel generator cooling systems",
      "Central air conditioning plants",
      "Chiller systems",
      "Industrial HVAC installations",
      "Commercial building systems",
    ],
    benefits: [
      "Extended equipment life",
      "Optimal cooling efficiency",
      "Prevents scale and corrosion",
      "Reduces maintenance costs",
      "Expert system analysis",
    ],
  },
  "lab-chemicals": {
    title: "Commercial & Lab Chemicals",
    description: "High-purity reagents for laboratories and research applications.",
    longDescription: "We supply analytical grade and laboratory chemicals to educational institutions, research facilities, quality control laboratories, and commercial establishments. Our products meet stringent purity standards required for accurate analysis and research.",
    icon: FlaskConical,
    image: labImg,
    subcategories: [
      {
        name: "Lab Grade Chemicals",
        items: ["Analytical Grade Reagents", "Laboratory Acids & Bases", "Organic Solvents", "Indicators & Standards", "Buffer Solutions", "Hydrochloric Acid (AR/LR)", "Sulphuric Acid (AR/LR)", "Nitric Acid (AR/LR)", "Sodium Hydroxide", "Ethanol (Absolute)", "Methanol (AR Grade)", "pH Indicators & Standards"],
      },
    ],
    applications: [
      "Educational institutions",
      "Research laboratories",
      "Quality control labs",
      "Pharmaceutical analysis",
      "Environmental testing",
      "Food testing laboratories",
    ],
    benefits: [
      "Certified purity levels",
      "Consistent batch quality",
      "Proper documentation",
      "Competitive pricing",
      "Reliable supply chain",
    ],
  },
  "industrial-solvents": {
    title: "Industrial Solvents",
    description: "Premium quality solvents for manufacturing and industrial processes.",
    longDescription: "Our industrial solvents serve diverse manufacturing sectors including paints, coatings, pharmaceuticals, and general cleaning applications. We provide both virgin and recycled solvents to meet different quality requirements.",
    icon: Beaker,
    image: solventsImg,
    subcategories: [
      {
        name: "Solvents",
        items: ["Acetone", "Benzene", "Methyl Ethyl Ketone (MEK)", "Methylene Di Chloride", "PEG 200/400/600/6000"],
      },
    ],
    applications: [
      "Paint and coating manufacturing",
      "Pharmaceutical production",
      "Printing industry",
      "Electronics cleaning",
      "Adhesive formulation",
      "General industrial cleaning",
    ],
    benefits: [
      "High purity grades available",
      "Bulk supply capability",
      "Competitive industrial pricing",
      "Consistent quality",
      "Timely delivery",
    ],
  },
};

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  const product = category ? productData[category] : null;

  if (!product) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = product.icon;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0">
          <img 
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <Icon className="h-8 w-8 text-secondary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                {product.title}
              </h1>
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
              {product.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                asChild
                className="btn-gradient-primary"
              >
                <a 
                  href={`https://web.whatsapp.com/send?phone=919444011215&text=Hello, I would like to request a quote for ${product.title}.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Request a Quote
                </a>
              </Button>
              <a
                href="/Sri-Saravana-Chemicals-Brochure.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/20 transition-colors"
              >
                <Download className="h-5 w-5" />
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Available Products
          </h2>
          
          {product.subcategories.map((sub) => (
            <div key={sub.name} className="mb-10">
              <h3 className="text-xl font-semibold text-primary mb-4">{sub.name}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sub.items.map((item) => (
                  <div 
                    key={item}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary transition-all"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Applications & Benefits */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Applications</h2>
              <div className="space-y-4">
                {product.applications.map((app) => (
                  <div key={app} className="flex items-center gap-3 p-4 rounded-xl bg-card">
                    <div className="p-2 rounded-lg bg-accent">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{app}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Us</h2>
              <div className="space-y-4">
                {product.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 p-4 rounded-xl bg-card">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ProductCategory;
