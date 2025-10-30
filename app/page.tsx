import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { CTASection } from "@/components/sections/cta";
import { OpensourceSection } from "@/components/sections/opensource";

export default function Home() {
  return (
    <div className="flex flex-col space-y-12 md:space-y-16 lg:space-y-24 2xl:space-y-32">
      <HeroSection />
      <FeaturesSection />
      <OpensourceSection/>
      <CTASection />
    </div>
  );
}
