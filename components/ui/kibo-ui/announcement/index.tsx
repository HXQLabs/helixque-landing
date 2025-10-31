import type { ComponentProps, HTMLAttributes } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type AnnouncementProps = ComponentProps<typeof Badge> & {
  themed?: boolean;
};

export const Announcement = ({
  variant = "outline",
  themed = false,
  className,
  ...props
}: AnnouncementProps) => (
  <Badge
    className={cn(
      "group relative max-w-full gap-2 rounded-full px-3 py-0.5 font-medium transition-all duration-300",
      "shadow-sm hover:shadow-md hover:scale-[1.015]",
      "bg-gradient-to-r from-background via-background/90 to-background",
      themed &&
        "announcement-themed border-foreground/10 bg-gradient-to-r from-primary/10 via-background to-secondary/10",
      "backdrop-blur-sm border border-foreground/10",
      className
    )}
    variant={variant}
    {...props}
  />
);

export type AnnouncementTagProps = HTMLAttributes<HTMLDivElement>;

export const AnnouncementTag = ({
  className,
  ...props
}: AnnouncementTagProps) => (
  <div
    className={cn(
      "-ml-2.5 shrink-0 truncate rounded-full bg-foreground/10 px-2.5 py-1 text-xs font-medium transition-colors duration-200",
      "text-foreground/80 group-hover:text-foreground",
      "group-[.announcement-themed]:bg-background/60 group-[.announcement-themed]:text-primary/80",
      className
    )}
    {...props}
  />
);

export type AnnouncementTitleProps = HTMLAttributes<HTMLDivElement>;

export const AnnouncementTitle = ({
  className,
  ...props
}: AnnouncementTitleProps) => (
  <div
    className={cn(
      "flex items-center gap-1 truncate py-1 text-sm font-medium transition-colors duration-200",
      "group-hover:text-primary",
      className
    )}
    {...props}
  />
);
