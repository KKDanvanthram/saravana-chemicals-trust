import { Sparkles } from "lucide-react";

export function RebrandBanner() {
  return (
    <section className="bg-gradient-to-r from-primary via-brand-water-dark to-primary border-b border-primary/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <div className="flex items-center gap-2 shrink-0">
            <Sparkles className="h-5 w-5 text-secondary" />
            <span className="text-sm sm:text-base font-semibold text-primary-foreground">
              Sri Saravana Chemicals is now Saravana Sky Chemo Private Limited.
            </span>
          </div>
          <span className="text-xs sm:text-sm text-primary-foreground/80">
            New Name. Same 25+ Years of Chemical Excellence. There is no change in our management, products, or the quality of services you trust.
          </span>
        </div>
      </div>
    </section>
  );
}
