import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { CTASection } from "@/components/sections/cta";
import { HowItWorksSection } from "@/components/sections/how-it-works";
// import { CommunitySection } from "@/components/sections/community";
import { OpensourceSection } from "@/components/sections/opensource";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      {/* Community section removed per request */}
      <OpensourceSection />
      <CTASection />
    </div>
  );
}
