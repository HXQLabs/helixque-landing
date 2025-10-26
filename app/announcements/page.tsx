import { announcementDocs } from "@/.source"
import { formatDate } from "@/lib/utils"

interface AnnouncementDoc {
    data: {
        title: string
        date: string
        priority?: "high" | "medium" | "low"
        tags?: string[]
        body: React.ComponentType
    }
    info: {
        path: string
    }
}

const getPriorityColor = (priority?: string) => {
    switch (priority) {
        case "high":
            return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
        case "medium":
            return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
        case "low":
            return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
        default:
            return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
    }
}

export default function AnnouncementsPage() {
    // Cast announcementDocs to proper type
    const announcementDocsTyped = announcementDocs as unknown as AnnouncementDoc[]

    const sortedAnnouncements = announcementDocsTyped
        .filter((doc) => doc?.data?.date)
        .sort((a, b) => {
            const dateA = new Date(a.data.date).getTime()
            const dateB = new Date(b.data.date).getTime()
            return dateB - dateA
        })

    return (
        <div className="min-h-screen bg-background relative pb-20">
            {/* Page Title Section */}
            <div className="pt-8 pb-16">
                <div className="max-w-5xl mx-auto px-6 lg:px-10">
                    <div className="text-center">
                        <h1 className="text-foreground mt-8 text-4xl text-[clamp(40px,10vw,44px)] leading-[1.2] font-bold tracking-tighter text-balance sm:text-5xl">
                            Announcements
                        </h1>
                        <p className="text-muted-foreground text-base tracking-tight mt-6 max-w-2xl mx-auto sm:text-lg">
                            Stay informed with the latest updates, important notices, and announcements from HelixQue.
                        </p>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="max-w-5xl mx-auto px-6 lg:px-10 pb-20">
                <div className="relative">
                    {sortedAnnouncements.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No announcements yet.</p>
                        </div>
                    ) : (
                        sortedAnnouncements.map((announcement) => {
                            const MDX = announcement.data.body
                            const date = new Date(announcement.data.date)
                            const formattedDate = formatDate(date)

                            return (
                                <div key={announcement.info.path} className="relative mb-16 last:mb-0">
                                    <div className="flex flex-col md:flex-row gap-y-6">
                                        {/* Left side - Date and Priority */}
                                        <div className="md:w-48 flex-shrink-0">
                                            <div className="md:sticky md:top-24">
                                                <time className="text-sm font-medium text-muted-foreground block mb-3">
                                                    {formattedDate}
                                                </time>

                                                {announcement.data.priority && (
                                                    <div className={`inline-flex relative z-10 items-center justify-center px-3 py-1 text-xs font-medium rounded-full ${getPriorityColor(announcement.data.priority)}`}>
                                                        {announcement.data.priority.toUpperCase()}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Right side - Content */}
                                        <div className="flex-1 md:pl-8 relative">
                                            {/* Vertical timeline line */}
                                            <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-border">
                                                {/* Timeline dot */}
                                                <div className="hidden md:block absolute -translate-x-1/2 size-3 bg-primary rounded-full z-10" />
                                            </div>

                                            <div className="space-y-8 md:space-y-10">
                                                <div className="relative z-10 flex flex-col gap-2">
                                                    <h2 className="text-2xl font-semibold tracking-tight text-balance">
                                                        {announcement.data.title}
                                                    </h2>

                                                    {/* Tags */}
                                                    {announcement.data.tags &&
                                                        announcement.data.tags.length > 0 && (
                                                            <div className="flex flex-wrap gap-2">
                                                                {announcement.data.tags.map((tag: string) => (
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

                                                <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-p:tracking-tight">
                                                    <MDX/>
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