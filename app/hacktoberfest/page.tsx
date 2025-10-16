import HacktoberfestClientContent from "@/components/hacktoberfest-client-content";

export default function HacktoberfestPage() {
  const eventYear = 2025;
  const start = new Date(`${eventYear}-10-01T00:00:00`);
  const end = new Date(`${eventYear}-10-31T23:59:59`);
  const active = true;
  const hacktoberfestEnd = end;

  return (
    <div className="relative overflow-x-hidden min-h-screen">
      {/* Dedicated div for background color */}
      <div className="absolute inset-0 -z-50 bg-background" />

      {/* Static radial gradients */}
      <div className="pointer-events-none absolute inset-0 -z-30">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 h-56 w-56 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="absolute right-10 top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute left-10 bottom-10 h-44 w-44 rounded-full bg-amber-300/10 blur-3xl" />
      </div>

      {/* Client content with animations */}
      <HacktoberfestClientContent
        active={active}
        eventYear={eventYear}
        hacktoberfestEnd={hacktoberfestEnd}
      />
    </div>
  );
}