// NO "use client" - this is a Server Component
import { HeroSection } from "./HeroSection";
import { AnnouncementWrapper } from "./AnnouncementWrapper";

/**
 * Server Component boundary for the Hero section.
 * It renders the AnnouncementWrapper (which fetches data) and passes 
 * it as a prop to the HeroSection Client Component.
 */
export const HeroSectionIndex = () => {
  return (
    <HeroSection 
      // The AnnouncementWrapper is rendered entirely on the server
      // and passed as an opaque React Node to the client component.
      announcementComponent={<AnnouncementWrapper />} 
    />
  );
};