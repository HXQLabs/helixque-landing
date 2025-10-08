import { Icons } from "../utils/icons";
import { ArrowUpRight } from "lucide-react";
import { Pill, PillIndicator } from "../ui/kibo-ui/pill";
import { Badge } from "../ui/badge";
import Link from "next/link";
import BuyMeCoffee from "../utils/buy-me-coffee-btn";

const BadtzLogo = () => (
  <div className="text-foreground flex items-end gap-2.5">
    <img src="/logo.svg" alt="HelixQue Logo" className="h-6 w-auto" />
    <div className="relative">
      <span className="font-heading text-lg font-semibold leading-none">
        HelixQue
      </span>
      <Badge
        variant="secondary"
        className="absolute -top-1 -right-1 translate-x-full text-[8px] px-1 py-0 h-auto"
      >
        Beta
      </Badge>
    </div>
  </div>
);

const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/HXQLabs/",
    icon: <Icons.github className="h-4 w-4" />,
    hover: "hover:text-foreground",
  },
  {
    label: "Discord",
    href: "https://discord.com/invite/XC4YsUBg2",
    icon: <Icons.discord className="h-4 w-4" />,
    hover: "hover:text-[#5865F2]",
  },
  {
    label: "Hacktoberfest",
    href: "https://hacktoberfest.com",
    icon: <Icons.hacktoberfest className="h-4 w-4" />,
    hover: "hover:text-[#5A5AB5]",
  },
];

const StickyFooter = () => {
  return (
    <footer className="bg-background border-t border-border/40 text-foreground">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 items-start">
          {/* Brand Section */}
          <div className="flex flex-col gap-6 ml-30">
            <Link
              href="#hero"
              className="flex items-center gap-2 group"
              aria-label="Navigate to homepage"
            >
              <BadtzLogo />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Match instantly by skills, industry and language. Learn, mentor,
              and collaborate through text or video on our professional
              networking platform.
            </p>
            <Pill>
              <PillIndicator pulse variant="success" />
              <span className="ml-2">All Systems Operational</span>
            </Pill>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col gap-5 sm:col-span-1 lg:col-span-1 ml-29">
            <h3 className="text-lg font-semibold mb-1">Useful Links</h3>
            <ul className="space-y- text-sm text-muted-foreground">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 transition-colors group ${link.hover} duration-150`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="flex flex-col gap-3 md:-ml-3">
            <h3 className="text-lg font-semibold mb-1">Support</h3>
            <div className="flex flex-col items-center md:-ml-73 sm:items-start">
              <BuyMeCoffee />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} HelixQue. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-6">
            <Link
              href="/legal/privacy-policy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms-condition"
              className="hover:text-foreground transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default StickyFooter;
