import { ArrowRight, Award, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-water-treatment.jpg";

const stats = [
  { icon: Award, value: "25+", label: "Years of Excellence" },
  { icon: Shield, value: "500+", label: "Industrial Clients" },
  { icon: Leaf, value: "100%", label: "Quality Assured" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Water treatment facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up">
            <Award className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground">
              Established in 1997 • Chennai, South India
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            25+ Years of Chemical Excellence for{" "}
            <span className="text-secondary">Industry & Environment</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Trusted manufacturer and supplier of high-quality chemical solutions 
            across South India, delivering performance, safety, and sustainability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg"
              asChild
              className="btn-gradient-primary text-lg px-8 py-6"
            >
              <a 
                href="https://web.whatsapp.com/send?phone=919444411215&text=Hello, I would like to request a quote." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-6"
            >
              <Link to="/products">
                Browse Products
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <stat.icon className="h-5 w-5 text-secondary" />
                  <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
                    {stat.value}
                  </span>
                </div>
                <span className="text-sm text-primary-foreground/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}