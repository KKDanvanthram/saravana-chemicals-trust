import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Building2
} from "lucide-react";
import heroContactImg from "@/assets/hero-contact.jpg";

const branches = [
  {
    name: "Head Office – Chennai",
    address: "93C/1, SIDCO Industrial Estate, EB Road, North Phase, Ambattur, Chennai – 600098",
    email: "saravanasky@saravanaskychemo.com",
    phones: ["044-26253999", "044-26254999"],
    website: "www.saravanaskychemo.com",
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
];

const businessHours = ["Monday - Saturday", "9:00 AM - 6:00 PM IST"];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0">
          <img src={heroContactImg} alt="Corporate office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
              <Building2 className="h-4 w-4 text-secondary" />
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Ready to discuss your chemical requirements? Our team is here to help 
              with product inquiries, bulk orders, and technical consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Details */}
            <div>
              <SectionHeading
                badge="Reach Out"
                title="Let's Start a Conversation"
                description="Connect with our team for all your chemical needs. We're committed to providing prompt responses and expert assistance."
              />

              {/* Phone & Hours quick row */}
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="p-3 rounded-xl bg-accent w-fit mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Phone Numbers</h3>
                  <div className="space-y-1">
                    <a href="tel:04426253999" className="block text-muted-foreground hover:text-primary transition-colors">044-26253999</a>
                    <a href="tel:04426254999" className="block text-muted-foreground hover:text-primary transition-colors">044-26254999</a>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="p-3 rounded-xl bg-accent w-fit mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Business Hours</h3>
                  <div className="space-y-1">
                    {businessHours.map((d) => (
                      <p key={d} className="text-muted-foreground">{d}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Branch Offices */}
              <div className="mt-10 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Our Offices</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {branches.map((b) => (
                    <div key={b.name} className="p-6 rounded-2xl bg-card border border-border space-y-3">
                      <h4 className="font-semibold text-primary">{b.name}</h4>
                      <p className="text-sm text-muted-foreground flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                        <span>{b.address}</span>
                      </p>
                      <a href={`mailto:${b.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 break-all">
                        <Mail className="h-4 w-4 text-secondary shrink-0" />
                        {b.email}
                      </a>
                      {b.phones && (
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <Phone className="h-4 w-4 text-secondary shrink-0" />
                          <span>{b.phones.join(" / ")}</span>
                        </div>
                      )}
                      {b.website && (
                        <a href={`https://${b.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                          {b.website}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 p-8 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/30">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-[#25D366]">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Prefer WhatsApp?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Get instant responses to your inquiries. Our team is available 
                      on WhatsApp for quick product questions and quote requests.
                    </p>
                    <Button 
                      size="lg"
                      asChild
                      className="bg-[#25D366] hover:bg-[#20BD5C] text-white"
                    >
                      <a 
                        href="https://web.whatsapp.com/send?phone=919444011215&text=Hello, I would like to inquire about your products."
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Find Us</h3>
              <div className="rounded-3xl overflow-hidden border border-border shadow-lg h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8361549447396!2d80.16728347573806!3d13.10580268723071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264d0da1f2c3d%3A0x7e9b1ea3a8c7b8b0!2sSIDCO%20Industrial%20Estate%2C%20Ambattur%2C%20Chennai%2C%20Tamil%20Nadu%20600058!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Saravana Sky Chemo Private Limited Location"
                />
              </div>
              <p className="text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 inline-block mr-1" />
                Coordinates: 13°06'20.9"N 80°10'14.2"E
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quote CTA */}
      <section className="py-16 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Need a Quick Quote?
              </h2>
              <p className="text-primary-foreground/70">
                Send us your requirements via WhatsApp for fast, competitive pricing.
              </p>
            </div>
            <Button 
              size="lg"
              asChild
              className="btn-gradient-primary px-8"
            >
              <a 
                href="https://web.whatsapp.com/send?phone=919444011215&text=Hello, I would like to request a quote for chemicals."
                target="_blank" 
                rel="noopener noreferrer"
              >
                Request a Quote
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;