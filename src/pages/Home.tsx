import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CTASection } from "@/components/home/CTASection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductsPreview />
      <WhyChooseUs />
      <IndustriesSection />
      <CTASection />
    </Layout>
  );
};

export default Home;