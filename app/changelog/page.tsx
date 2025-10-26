import { docs } from "@/.source/index"
import { formatDate } from "@/lib/utils"

interface ChangelogDoc {
  title: string
  date: string
  version?: string
  tags?: string[]
  body: React.ComponentType
  info: {
    path: string
    fullPath: string
  }
}

// Safe local-date parsing for YYYY-MM-DD strings
const parseLocalDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, (month || 1) - 1, day || 1);
};

export default function ChangelogPage() {
  // Cast to the correct type and sort
  const changelogDocs = (docs as unknown as ChangelogDoc[]) || []
  
  const sortedChangelogs = [...changelogDocs].sort((a, b) => {
    const dateA = parseLocalDate(a.date).getTime()
    const dateB = parseLocalDate(b.date).getTime()
    return dateB - dateA
  })

  return (
    <div className="min-h-screen bg-background relative">
      {/* Page Title Section */}
      <div className="pt-8 pb-16 border-b border-border/80">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center">
            <h1 className="text-foreground mt-8 text-4xl text-[clamp(40px,10vw,44px)] leading-[1.2] font-bold tracking-tighter text-balance sm:text-5xl">
              Changelog
            </h1>
            <p className="text-muted-foreground text-base tracking-tight mt-6 max-w-2xl mx-auto sm:text-lg">
              Stay up to date with all the latest features, improvements, and bug fixes in HelixQue.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        {sortedChangelogs.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-semibold mb-2">No Changelog Entries Yet</h2>
            <p className="text-muted-foreground">
              Check back soon for updates!
            </p>
          </div>
        ) : (
          <div className="relative">
            {sortedChangelogs.map((changelog, index) => {
              const MDX = changelog.body
              const date = parseLocalDate(changelog.date)
              const formattedDate = formatDate(date)

              return (
                <div
                  key={changelog.info.path}
                  className={`relative ${
                    index < sortedChangelogs.length - 1 ? "mb-12 md:mb-16" : ""
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-y-6">
                    {/* Left side - Date and Version */}
                    <div className="md:w-48 flex-shrink-0">
                      <div className="md:sticky md:top-24 pb-10">
                        <time 
                        dateTime={changelog.date}
                        className="text-sm font-medium text-muted-foreground block mb-3">
                          {formattedDate}
                        </time>

                        {changelog.version && (
                          <div
                            className="inline-flex relative z-10 items-center justify-center w-auto h-8 px-3 text-foreground border border-primary/20 bg-primary/10 text-primary rounded-lg text-sm font-semibold shadow-md"
                            title={`Version ${changelog.version}`}
                          >
                            v{changelog.version}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-1 md:pl-8 relative">
                      {/* Vertical timeline line */}
                      <div className="hidden md:block absolute top-0 left-0 w-px h-full bg-border">
                        {/* Timeline dot */}
                        <div className="hidden md:block absolute -translate-x-1/2 top-4 size-3 bg-primary ring-4 ring-background rounded-full z-10" />
                      </div>

                      <div className="space-y-6 p-4 rounded-xl border border-border/80 bg-card transition-all hover:border-primary/50 shadow-lg md:ml-0 -ml-4">
                        <div className="relative z-10 flex flex-col gap-2">
                          <h2 className="text-2xl font-semibold tracking-tight text-balance">
                            {changelog.title}
                          </h2>

                          {/* Tags */}
                          {changelog.tags && changelog.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                              {changelog.tags.map((tag: string) => (
                                <span
                                  key={tag}
                                  className="h-6 w-fit px-2 text-xs font-medium bg-muted text-muted-foreground rounded-full border flex items-center justify-center"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance pt-2">
                          <MDX />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}