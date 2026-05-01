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
            <div className="inline-block bg-white rounded-lg px-4 py-3 w-fit">
              <img 
                src={logo} 
                alt="Saravana Sky Chemo Private Limited" 
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">
              Established in 1997, Saravana Sky Chemo Private Limited (formerly Sri Saravana Chemicals) is a trusted manufacturer 
              and supplier of high-quality chemical solutions across South India.
            </p>
            <p className="text-xs text-secondary font-medium mb-4">
              Branches: Chennai (HO) • Madurai • Coimbatore • Vijayawada
            </p>
            <a
              href="tel:04426253999"
              className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              <Phone className="h-5 w-5 text-secondary shrink-0" />
              044-26253999 / 044-26254999
            </a>
            <a
              href="mailto:saravanasky@saravanaskychemo.com"
              className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              <Mail className="h-5 w-5 text-secondary shrink-0" />
              saravanasky@saravanaskychemo.com
            </a>
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

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Business Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-secondary" />
                <span className="text-sm text-primary-foreground/80">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
              <li>
                <a href="https://www.saravanaskychemo.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  www.saravanaskychemo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Branch Offices */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <h4 className="text-lg font-semibold mb-6">Our Offices</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Head Office – Chennai",
                address: "93C/1, SIDCO Industrial Estate, EB Road, North Phase, Ambattur, Chennai – 600098",
                email: "saravanasky@saravanaskychemo.com",
              },
              {
                name: "Madurai Branch",
                address: "A 151/9 Siva Complex, 7&8 Aruppukottai Main Road, Avaniapuram, Madurai 625012",
                email: "madurai@saravanaskychemo.com",
              },
              {
                name: "Coimbatore Branch",
                address: "Door No.386/A3 Room No.7, 1st Floor J.K.Complex, Kamarajar Road, Peelamedu, Coimbatore 641015",
                email: "cbe@saravanaskychemo.com",
              },
              {
                name: "Vijayawada Branch",
                address: "No 40-1-93 Kanna Nagar, Near Modern Super Market, Benz Circle, Vijayawada 520010",
                email: "vijayawada@saravanaskychemo.com",
              },
            ].map((office) => (
              <div key={office.name} className="space-y-2">
                <h5 className="text-sm font-semibold text-secondary">{office.name}</h5>
                <p className="text-xs text-primary-foreground/70 leading-relaxed flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </p>
                <a href={`mailto:${office.email}`} className="text-xs text-primary-foreground/80 hover:text-secondary transition-colors flex items-center gap-2 break-all">
                  <Mail className="h-4 w-4 text-secondary shrink-0" />
                  {office.email}
                </a>
              </div>
            ))}
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
              © 2026 Saravana Sky Chemo Private Limited. All Rights Reserved.
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