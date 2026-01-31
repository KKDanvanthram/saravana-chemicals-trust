import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Factory, FlaskConical, Beaker } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import waterTreatmentImg from "@/assets/water-treatment.jpg";
import etpImg from "@/assets/etp-plant.jpg";
import labImg from "@/assets/lab-chemicals.jpg";
import solventsImg from "@/assets/industrial-solvents.jpg";

const products = [
  {
    id: "water-treatment",
    title: "Water Treatment Chemicals",
    description: "Comprehensive range of chemicals for water purification, softening, and conditioning across industrial and municipal applications.",
    icon: Droplets,
    image: waterTreatmentImg,
    path: "/products/water-treatment",
  },
  {
    id: "etp-chemicals",
    title: "ETP Chemicals",
    description: "Specialized solutions for effluent treatment plants, wastewater management, and environmental compliance.",
    icon: Factory,
    image: etpImg,
    path: "/products/etp-chemicals",
  },
  {
    id: "lab-chemicals",
    title: "Commercial & Lab Chemicals",
    description: "High-purity chemicals for laboratories, research institutions, and commercial applications.",
    icon: FlaskConical,
    image: labImg,
    path: "/products/lab-chemicals",
  },
  {
    id: "industrial-solvents",
    title: "Industrial Solvents",
    description: "Premium quality solvents for manufacturing, cleaning, and various industrial processes.",
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

        <div className="text-center mt-12">
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