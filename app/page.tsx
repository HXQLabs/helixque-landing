// app/page.tsx (or wherever your default Home component is located)

// 🚨 FIX: Change HeroSection import to the exported name HeroSectionIndex
import { HeroSectionIndex } from "@/components/sections/hero"; 
import { FeaturesSection } from "@/components/sections/features";
import { CTASection } from "@/components/sections/cta";
import { OpensourceSection } from "@/components/sections/opensource";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 🚨 FIX: Use the correct component name */}
      <HeroSectionIndex /> 
      <FeaturesSection />
      <OpensourceSection/>
      <CTASection />
    </div>
  );
}