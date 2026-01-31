import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/home/CTASection";
import { ArrowRight, Droplets, Factory, FlaskConical, Beaker, CheckCircle2 } from "lucide-react";
import waterTreatmentImg from "@/assets/water-treatment.jpg";
import etpImg from "@/assets/etp-plant.jpg";
import labImg from "@/assets/lab-chemicals.jpg";
import solventsImg from "@/assets/industrial-solvents.jpg";

const products = [
  {
    id: "water-treatment",
    title: "Water Treatment Chemicals",
    description: "Comprehensive solutions for water purification, softening, conditioning, and treatment across industrial, municipal, and commercial applications.",
    icon: Droplets,
    image: waterTreatmentImg,
    path: "/products/water-treatment",
    features: [
      "Coagulants & Flocculants",
      "pH Adjusters & Buffers",
      "Scale & Corrosion Inhibitors",
      "Biocides & Algaecides",
      "Membrane Chemicals",
    ],
  },
  {
    id: "etp-chemicals",
    title: "ETP Chemicals",
    description: "Specialized chemical solutions for effluent treatment plants, wastewater management, and environmental compliance in industrial settings.",
    icon: Factory,
    image: etpImg,
    path: "/products/etp-chemicals",
    features: [
      "Defoamers & Antifoams",
      "Heavy Metal Precipitants",
      "Sludge Conditioners",
      "Odor Control Chemicals",
      "COD/BOD Reducers",
    ],
  },
  {
    id: "lab-chemicals",
    title: "Commercial & Lab Chemicals",
    description: "High-purity chemicals for analytical laboratories, research institutions, educational facilities, and commercial applications.",
    icon: FlaskConical,
    image: labImg,
    path: "/products/lab-chemicals",
    features: [
      "Analytical Grade Reagents",
      "Laboratory Acids & Bases",
      "Organic Solvents",
      "Indicators & Standards",
      "Buffer Solutions",
    ],
  },
  {
    id: "industrial-solvents",
    title: "Industrial Solvents",
    description: "Premium quality solvents for manufacturing, cleaning, degreasing, and various industrial processing applications.",
    icon: Beaker,
    image: solventsImg,
    path: "/products/industrial-solvents",
    features: [
      "Cleaning Solvents",
      "Degreasing Agents",
      "Process Solvents",
      "Specialty Solvents",
      "Recycled Solvents",
    ],
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-brand-water-dark to-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
              <FlaskConical className="h-4 w-4 text-secondary" />
              Product Catalog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Products
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Explore our comprehensive range of high-quality chemicals designed 
              for industrial, commercial, and laboratory applications.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Product Categories"
            title="Chemical Solutions for Every Need"
            description="From water treatment to industrial solvents, we deliver quality chemicals that meet the highest standards."
            centered
          />

          <div className="space-y-16 mt-16">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-3xl ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary-foreground/20 backdrop-blur-sm">
                      <product.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={product.path}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Products;