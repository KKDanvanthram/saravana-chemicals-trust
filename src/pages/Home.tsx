import { Layout } from "@/components/layout/Layout";
import { RebrandBanner } from "@/components/home/RebrandBanner";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CTASection } from "@/components/home/CTASection";

const Home = () => {
  return (
    <Layout>
      <RebrandBanner />
      <HeroSection />
      <ProductsPreview />
      <WhyChooseUs />
      <IndustriesSection />
      <CTASection />
    </Layout>
  );
};

export default Home;