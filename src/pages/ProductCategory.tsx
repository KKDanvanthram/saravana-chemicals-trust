import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Droplets, Factory, FlaskConical, Beaker } from "lucide-react";
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
  products: { name: string; description: string }[];
  applications: string[];
  benefits: string[];
}> = {
  "water-treatment": {
    title: "Water Treatment Chemicals",
    description: "Comprehensive solutions for water purification across industrial and municipal applications.",
    longDescription: "Our water treatment chemicals are formulated to meet the demanding requirements of industrial, commercial, and municipal water treatment facilities. From coagulants and flocculants to specialized membrane chemicals, we provide complete solutions for clean water management.",
    icon: Droplets,
    image: waterTreatmentImg,
    products: [
      { name: "Polyaluminium Chloride (PAC)", description: "Primary coagulant for water clarification" },
      { name: "Ferric Chloride", description: "Coagulant for water and wastewater treatment" },
      { name: "Alum (Aluminium Sulphate)", description: "Traditional water treatment coagulant" },
      { name: "Poly Electrolytes", description: "Flocculants for sedimentation enhancement" },
      { name: "Sodium Hypochlorite", description: "Disinfection and oxidation agent" },
      { name: "Calcium Hypochlorite", description: "Solid form chlorine for water disinfection" },
      { name: "Scale Inhibitors", description: "Prevents mineral scale buildup" },
      { name: "Corrosion Inhibitors", description: "Protects piping and equipment" },
    ],
    applications: [
      "Municipal water treatment plants",
      "Industrial process water",
      "Cooling tower water treatment",
      "Boiler water treatment",
      "Swimming pool water treatment",
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
    title: "ETP Chemicals",
    description: "Specialized solutions for effluent treatment and environmental compliance.",
    longDescription: "Our ETP (Effluent Treatment Plant) chemicals are designed to help industries meet environmental regulations while efficiently treating wastewater. We provide solutions for COD/BOD reduction, heavy metal precipitation, sludge management, and odor control.",
    icon: Factory,
    image: etpImg,
    products: [
      { name: "Defoamers", description: "Controls foam in treatment processes" },
      { name: "Heavy Metal Precipitants", description: "Removes toxic heavy metals" },
      { name: "Sludge Dewatering Polymers", description: "Improves sludge handling" },
      { name: "COD Reducers", description: "Reduces chemical oxygen demand" },
      { name: "Bio-Augmentation Products", description: "Enhances biological treatment" },
      { name: "Odor Control Chemicals", description: "Neutralizes unpleasant odors" },
      { name: "pH Adjustment Chemicals", description: "Maintains optimal pH levels" },
      { name: "Color Removal Agents", description: "Removes dyes and colorants" },
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
  "lab-chemicals": {
    title: "Commercial & Lab Chemicals",
    description: "High-purity reagents for laboratories and research applications.",
    longDescription: "We supply analytical grade and laboratory chemicals to educational institutions, research facilities, quality control laboratories, and commercial establishments. Our products meet stringent purity standards required for accurate analysis and research.",
    icon: FlaskConical,
    image: labImg,
    products: [
      { name: "Hydrochloric Acid (AR/LR Grade)", description: "For analytical and lab applications" },
      { name: "Sulphuric Acid (AR/LR Grade)", description: "Multi-purpose laboratory acid" },
      { name: "Nitric Acid (AR/LR Grade)", description: "For digestion and analysis" },
      { name: "Sodium Hydroxide", description: "Laboratory alkali" },
      { name: "Ethanol (Absolute)", description: "High purity alcohol" },
      { name: "Methanol (AR Grade)", description: "HPLC and general use" },
      { name: "Acetone (AR Grade)", description: "Laboratory solvent" },
      { name: "pH Indicators & Standards", description: "For accurate pH measurement" },
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
    longDescription: "Our industrial solvents serve diverse manufacturing sectors including paints, coatings, pharmaceuticals, and general cleaning applications. We provide both virgin and recycled solvents to meet different quality requirements and budget considerations.",
    icon: Beaker,
    image: solventsImg,
    products: [
      { name: "Toluene", description: "Aromatic solvent for paints and coatings" },
      { name: "Xylene", description: "Industrial solvent for various applications" },
      { name: "Methyl Ethyl Ketone (MEK)", description: "Fast-evaporating solvent" },
      { name: "Isopropyl Alcohol (IPA)", description: "Cleaning and degreasing solvent" },
      { name: "Acetone (Industrial)", description: "General purpose solvent" },
      { name: "Thinner", description: "Paint thinning applications" },
      { name: "White Spirit", description: "Paint and cleaning solvent" },
      { name: "Ethyl Acetate", description: "Low-toxicity solvent" },
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
              <Button 
                size="lg"
                variant="outline"
                asChild
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <a 
                  href="https://web.whatsapp.com/send?phone=919444011215&text=Hello, I need technical assistance."
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.products.map((item) => (
              <div 
                key={item.name}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all card-hover"
              >
                <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications & Benefits */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Applications */}
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

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Us</h2>
              <div className="space-y-4">
                {product.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 p-4 rounded-xl bg-card">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
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