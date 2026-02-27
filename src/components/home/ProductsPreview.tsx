import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Factory, FlaskConical, Beaker, Download, Snowflake } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import waterTreatmentImg from "@/assets/water-treatment.jpg";
import etpImg from "@/assets/etp-plant.jpg";
import labImg from "@/assets/lab-chemicals.jpg";
import solventsImg from "@/assets/industrial-solvents.jpg";

const products = [
  {
    id: "water-treatment",
    title: "Water Treatment Chemicals",
    description: "Boiler, R.O. Plant & Raw Water treatment chemicals including antiscalants, biocides, coagulants, and more.",
    icon: Droplets,
    image: waterTreatmentImg,
    path: "/products/water-treatment",
  },
  {
    id: "etp-chemicals",
    title: "ETP & Waste Water Chemicals",
    description: "Activated Carbon, Ferric Chloride, Poly Aluminium Chloride, Flocculants, and Polyelectrolytes for effluent treatment.",
    icon: Factory,
    image: etpImg,
    path: "/products/etp-chemicals",
  },
  {
    id: "lab-chemicals",
    title: "Commercial & Lab Chemicals",
    description: "High-purity analytical grade reagents, laboratory acids & bases, indicators, and buffer solutions.",
    icon: FlaskConical,
    image: labImg,
    path: "/products/lab-chemicals",
  },
  {
    id: "industrial-solvents",
    title: "Industrial Solvents",
    description: "Acetone, Benzene, Methyl Ethyl Ketone, Methylene Di Chloride, and PEG variants for industrial processes.",
    icon: Beaker,
    image: solventsImg,
    path: "/products/industrial-solvents",
  },
];

export function ProductsPreview() {
  return (
    <section className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Our Products"
          title="Comprehensive Chemical Solutions"
          description="From water treatment to industrial solvents, we deliver quality chemicals that meet the highest standards of performance and safety."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={product.path}
              className="group relative overflow-hidden rounded-2xl bg-card card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex items-center text-primary font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Download Brochure + View All */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="/Sri-Saravana-Chemicals-Brochure.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
          >
            <Download className="h-5 w-5" />
            Download Brochure
          </a>
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-secondary transition-colors"
          >
            View All Products
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
