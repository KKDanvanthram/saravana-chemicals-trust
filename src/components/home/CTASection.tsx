import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-brand-water-dark to-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-water/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Partner with Industry Leaders?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Get in touch with our team for product inquiries, bulk orders, 
            or technical consultation. We're here to support your business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              asChild
              className="btn-gradient-primary text-lg px-8 py-6"
            >
              <a 
                href="https://wa.me/919444411215?text=Hello, I would like to request a quote for chemicals." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
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
              <a href="tel:+919444411215">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/60">
            Available Monday - Saturday, 9:00 AM - 6:00 PM IST
          </p>
        </div>
      </div>
    </section>
  );
}