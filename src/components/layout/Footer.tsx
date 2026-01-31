import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Industries We Serve", path: "/industries" },
  { name: "Contact Us", path: "/contact" },
];

const productLinks = [
  { name: "Water Treatment Chemicals", path: "/products/water-treatment" },
  { name: "ETP Chemicals", path: "/products/etp-chemicals" },
  { name: "Commercial & Lab Chemicals", path: "/products/lab-chemicals" },
  { name: "Industrial Solvents", path: "/products/industrial-solvents" },
];

const industries = [
  "Textiles",
  "Food & Beverages",
  "Pharmaceuticals",
  "Refineries",
  "Municipal Corporations",
  "Institutions",
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src={logo} 
              alt="Sri Saravana Chemicals" 
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Established in 1997, Sri Saravana Chemicals is a trusted manufacturer 
              and supplier of high-quality chemical solutions across South India.
            </p>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-primary-foreground/80">
                93C/1 SIDCO Industrial Estate EB Road North Phase, 
                Ambattur, Chennai, Tamil Nadu 600058
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <div className="text-sm">
                  <a href="tel:+919444411215" className="text-primary-foreground/80 hover:text-secondary transition-colors block">
                    +91 9444411215
                  </a>
                  <a href="tel:+919444011215" className="text-primary-foreground/80 hover:text-secondary transition-colors block">
                    +91 9444011215
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:info@saravanachemicals.com" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  info@saravanachemicals.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-secondary" />
                <span className="text-sm text-primary-foreground/80">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Industries Served */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <h4 className="text-lg font-semibold mb-4">Industries We Serve</h4>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span 
                key={industry}
                className="px-4 py-2 bg-primary-foreground/5 rounded-full text-sm text-primary-foreground/70"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2026 Sri Saravana Chemicals. All Rights Reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              25+ Years of Chemical Excellence for Industry & Environment
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}