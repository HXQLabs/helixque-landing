'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle2, Shield, Zap, Users } from 'lucide-react'

export function HowItWorksSection() {
    const steps = [
        {
            title: 'Set goals and preferences',
            description:
                'Choose your skills, industries, language, and what you want to do: mentor, learn, or collaborate.',
            icon: <Users className="w-4 h-4" />,
        },
        {
            title: 'Get matched in seconds',
            description:
                'Our matching logic pairs you with relevant peers for mock interviews, code reviews, or project chats.',
            icon: <Zap className="w-4 h-4" />,
        },
        {
            title: 'Start the conversation',
            description:
                'Connect via chat or jump on a quick call. Keep it focused—no cold outreach or awkward asks.',
            icon: <CheckCircle2 className="w-4 h-4" />,
        },
        {
            title: 'Stay private, stay safe',
            description:
                'Control what you share. Use professional profiles when you want—your preferences are respected.',
            icon: <Shield className="w-4 h-4" />,
        },
    ]

    return (
        <section className="container mx-auto w-full max-w-5xl px-4 sm:px-6 py-16 md:py-24">
            <div className="text-center">
                <h2 className="leading-tighter font-gilroy mx-auto max-w-2xl bg-gradient-to-b from-gray-900/90 via-gray-800 to-gray-700/80 dark:from-white/80 dark:via-white dark:to-white/60 bg-clip-text text-4xl font-semibold tracking-tight text-transparent lg:text-5xl">
                    How Helixque works
                </h2>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-base">
                    From profile to matched conversations in minutes—no cold DMs required.
                </p>
            </div>

            <ol className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                {steps.map((step, index) => (
                    <li
                        key={index}
                        className="rounded-xl border bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 p-5 sm:p-6"
                        aria-labelledby={`how-step-${index}`}
                    >
                        <div className="flex items-start gap-3">
                            <div className="flex items-center gap-2">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-900 dark:text-white">
                                    {index + 1}
                                </div>
                                <div className="shrink-0 rounded-md bg-neutral-100 dark:bg-neutral-800 p-1.5 text-neutral-900 dark:text-white">
                                    {step.icon}
                                </div>
                            </div>
                            <div>
                                <h3 id={`how-step-${index}`} className="text-base font-semibold text-neutral-900 dark:text-white">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                    href="https://helixque.netlify.app"
                    target="_blank"
                    aria-label="Get started with Helixque"
                    className="from-primary/90 to-primary text-primary-foreground flex h-10 items-center rounded-full bg-linear-to-t px-6 text-sm font-medium shadow-[inset_0_1px_0_0_#FFFFFF20] transition-colors"
                >
                    Get Started
                </Link>
                <Link
                    href="https://github.com/orgs/HXQLabs/repositories"
                    target="_blank"
                    className="text-foreground group flex items-center gap-1 text-sm font-medium"
                    aria-label="View Helixque repositories on GitHub"
                >
                    View on GitHub →
                </Link>
            </div>
        </section>
    )
}


