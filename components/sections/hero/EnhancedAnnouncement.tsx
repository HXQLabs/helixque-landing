"use client";
import React, { useState, useEffect, useRef } from "react";
import {
	Announcement,
	AnnouncementTag,
	AnnouncementTitle,
} from "@/components/ui/kibo-ui/announcement";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link"; // 🚨 ADDED: Import Link for direct navigation

interface AnnouncementData {
	title: string;
	date: string;
	priority?: "high" | "medium" | "low";
}

interface EnhancedAnnouncementProps {
	latestAnnouncement: AnnouncementData | null;
}

export const EnhancedAnnouncement = ({ latestAnnouncement }: EnhancedAnnouncementProps) => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	const handleViewAllAnnouncements = () => {
		setIsOpen(false);
		router.push('/announcements');
	};

	const handleViewChangelog = () => {
		setIsOpen(false);
		router.push('/changelog');
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	};

	return (
		<div className="relative" ref={dropdownRef}>
			{/* 🚨 REFACTORED: Announcement now contains a Link and a dedicated button for the dropdown */}
			<Announcement className="flex items-center gap-2">
				<AnnouncementTag>Now Live</AnnouncementTag>

				{/* The primary text acts as a direct link to the Announcements page */}
				<Link 
                    href="/announcements"
                    className="flex-1 flex items-center gap-1 cursor-pointer hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-md px-1"
                    aria-label="Check out our latest updates on the Announcements page"
                >
                    <AnnouncementTitle>
                        <p className="group-hover:underline underline-offset-4 flex flex-wrap gap-1 items-center">
                            Check out our latest updates
                        </p>
                    </AnnouncementTitle>
				</Link>

				{/* Dedicated Button for the Dropdown Chevron */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="shrink-0 flex items-center p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
					aria-expanded={isOpen}
					aria-haspopup="true"
					aria-label="Toggle announcements menu"
				>
					<ChevronDown
						className={`shrink-0 text-muted-foreground transition-transform duration-200 ${
							isOpen ? "rotate-180" : ""
						}`}
						size={16}
					/>
				</button>
			</Announcement>

			{/* Dropdown Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -10, scale: 0.95 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-md bg-white dark:bg-neutral-900 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden z-50"
						role="menu"
					>
						{/* Latest Announcement Preview */}
						{latestAnnouncement && (
							<div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
								<div className="flex items-start gap-3">
									<div className="flex-shrink-0 mt-1">
										<div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
									</div>
									<div className="flex-1 min-w-0">
										<p className="text-xs text-muted-foreground mb-1">
											{formatDate(latestAnnouncement.date)}
										</p>
										<h3 className="text-sm font-semibold text-foreground mb-1 line-clamp-2">
											{latestAnnouncement.title}
										</h3>
										{latestAnnouncement.priority && (
											<span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
												{latestAnnouncement.priority.toUpperCase()}
											</span>
										)}
									</div>
								</div>
							</div>
						)}

						{/* Menu Options */}
						<div className="py-2">
							{/* View All Announcements */}
							<button
								onClick={handleViewAllAnnouncements}
								className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
								role="menuitem"
							>
								<div className="flex items-center gap-3">
									<svg
										className="w-4 h-4 text-primary"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
										/>
									</svg>
									<span className="text-sm font-medium text-foreground">
										View All Announcements
									</span>
								</div>
								<svg
									className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</button>

							{/* View Changelog */}
							<button
								onClick={handleViewChangelog}
								className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
								role="menuitem"
							>
								<div className="flex items-center gap-3">
									<svg
										className="w-4 h-4 text-primary"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
									<span className="text-sm font-medium text-foreground">
										View Changelog
									</span>
								</div>
								<svg
									className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
