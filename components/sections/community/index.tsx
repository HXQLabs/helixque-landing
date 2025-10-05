'use client'

import Link from 'next/link'
import { Icons } from '@/components/utils/icons'

export function CommunitySection() {
    return (
        <section className="px-4 py-16 md:py-24">
            <div className="relative mx-auto max-w-6xl rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 md:p-10">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    <div className="text-center lg:text-left flex flex-col justify-center">
                        <h2 className="leading-tighter font-gilroy max-w-2xl bg-gradient-to-b from-neutral-900/90 via-neutral-900 to-neutral-900/60 dark:from-white/80 dark:via-white dark:to-white/60 bg-clip-text text-3xl md:text-4xl font-semibold tracking-tight text-transparent">
                            Build with the community
                        </h2>
                        <p className="text-muted-foreground mt-4 md:text-base">
                            Helixque is open and community-driven. Star the repositories, open issues, and help shape the roadmap.
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <Link
                                href="https://github.com/orgs/HXQLabs/repositories"
                                target="_blank"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-neutral-200 dark:bg-neutral-700 px-6 h-10 text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
                            >
                                <Icons.github className="w-4 h-4" /> Browse Repos
                            </Link>
                            <Link
                                href="https://discord.gg/5j7kqg9Z9k"
                                target="_blank"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#5865f2] px-6 h-10 text-sm font-medium text-white hover:bg-[#4752c4] transition-colors"
                            >
                                <Icons.discord className="w-4 h-4" /> Join Discord
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200 dark:border-neutral-700">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="rounded-xl border border-neutral-200 dark:border-neutral-700 p-4">
                                <div className="text-neutral-500">Contributors</div>
                                <div className="text-2xl font-semibold">Open to all</div>
                            </div>
                            <div className="rounded-xl border border-neutral-200 dark:border-neutral-700 p-4">
                                <div className="text-neutral-500">Issues</div>
                                <div className="text-2xl font-semibold">Good first issues</div>
                            </div>
                            <div className="rounded-xl border border-neutral-200 dark:border-neutral-700 p-4">
                                <div className="text-neutral-500">License</div>
                                <div className="text-2xl font-semibold">MIT</div>
                            </div>
                            <div className="rounded-xl border border-neutral-200 dark:border-neutral-700 p-4">
                                <div className="text-neutral-500">Support</div>
                                <div className="text-2xl font-semibold">Discord + GitHub</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


