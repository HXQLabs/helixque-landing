import HelixQueHeader from './header';
import OriginBannerCustomizable from './origin-banner-customizable';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Sticky Banner */}
      {/* <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600" hideOnScroll={true}>
        <p className="flex flex-wrap gap-1 items-center justify-center px-2 sm:px-4 leading-tight text-center text-white dark:text-gray-100 drop-shadow-md">
          <picture>
            <source
              srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f383/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f383/513.gif"
              alt="🎃"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
              width="32"
              height="32"
            />
          </picture>
          <span className="font-semibold">Helixque</span> is participating in{" "}
          <span className="font-semibold">Hacktoberfest 2025</span>
          <span className="md:inline-block hidden">-{" "}</span>
          <Link href="/announcements" className="md:inline-block hidden group hover:underline underline-offset-4 transition-all duration-200">
             Join us and contribute to open source !
            <ArrowUpRight
              className="size-4 sm:size-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out shrink-0 inline"
              strokeWidth={2}
            />
          </Link>
        </p>
      </StickyBanner> */}
      {/* <OriginBanner /> */}
      <OriginBannerCustomizable className="bg-gradient-to-b from-blue-500 to-blue-600 text-foreground" />
      {/* Fixed Header positioned below the sticky banner */}
      <div className="sticky top-0 z-50">
        <HelixQueHeader />
      </div>

      {/* Main content - no top padding needed as content flows naturally */}
      <main className="relative z-10 flex-1">
        {children}
      </main>
    </div>
  );
}
