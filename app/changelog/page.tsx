import { docs } from "@/.source"
import { formatDate } from "@/lib/utils"

interface ChangelogDoc {
    data: {
        title: string
        date: string
        version?: string
        tags?: string[]
        body: React.ComponentType
    }
    info: {
        path: string
    }
}

export default function ChangelogPage() {
    // Cast docs to proper type
    const changelogDocs = docs as unknown as ChangelogDoc[]

    const sortedChangelogs = changelogDocs
        .filter((doc) => doc?.data?.date)
        .sort((a, b) => {
            const dateA = new Date(a.data.date).getTime()
            const dateB = new Date(b.data.date).getTime()
            return dateB - dateA
        })

    return (
        <div className="min-h-screen bg-background relative">
            {/* Page Title Section */}
            <div className="pt-8 pb-16">
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
            <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-16">
                <div className="relative">
                    {sortedChangelogs.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No changelog entries yet.</p>
                        </div>
                    ) : (
                        sortedChangelogs.map((changelog) => {
                            const MDX = changelog.data.body
                            const date = new Date(changelog.data.date)
                            const formattedDate = formatDate(date)

                            return (
                                <div key={changelog.info.path} className="relative">
                                    <div className="flex flex-col md:flex-row gap-y-6">
                                        <div className="md:w-48 flex-shrink-0">
                                            <div className="md:sticky md:top-24 pb-10">
                                                <time className="text-sm font-medium text-muted-foreground block mb-3">
                                                    {formattedDate}
                                                </time>

                                                {changelog.data.version && (
                                                    <div className="inline-flex relative z-10 items-center justify-center w-10 h-10 text-foreground border border-border rounded-lg text-sm font-bold">
                                                        {changelog.data.version}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex-1 md:pl-8 relative pb-10">
                                            <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-border">
                                                <div className="hidden md:block absolute -translate-x-1/2 size-3 bg-primary rounded-full z-10" />
                                            </div>

                                            <div className="space-y-6">
                                                <div className="relative z-10 flex flex-col gap-2">
                                                    <h2 className="text-2xl font-semibold tracking-tight text-balance">
                                                        {changelog.data.title}
                                                    </h2>

                                                    {changelog.data.tags &&
                                                        changelog.data.tags.length > 0 && (
                                                            <div className="flex flex-wrap gap-2">
                                                                {changelog.data.tags.map((tag: string) => (
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
                                                <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance">
                                                    <MDX />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}