// NO "use client" - async server component
import { EnhancedAnnouncement } from "./EnhancedAnnouncement";

interface AnnouncementData {
  title: string;
  date: string;
  priority?: "high" | "medium" | "low";
}

interface AnnouncementDocument {
    data: AnnouncementData;
    [key: string]: any; 
}

async function getLatestAnnouncement(): Promise<AnnouncementData | null> {
  try {
    const sourceModule: { announcementDocs: AnnouncementDocument[] | undefined } = await import("@/.source/index");
    const docs = sourceModule.announcementDocs;
    
    if (!docs || !Array.isArray(docs) || docs.length === 0) {
      return null;
    }

    const sorted = [...docs].sort((a, b) => {
      const dateA = new Date((a.data?.date as string) || 0).getTime();
      const dateB = new Date((b.data?.date as string) || 0).getTime();
      return dateB - dateA;
    });

    const latest = sorted[0];

    if (!latest?.data || !latest.data.title || !latest.data.date) {
        return null; 
    }

    return {
      title: latest.data.title,
      date: latest.data.date,
      priority: latest.data.priority,
    };
  } catch (error) {
    console.error("Error loading latest announcement:", error);
    return null;
  }
}

export async function AnnouncementWrapper() {
  const latestAnnouncement = await getLatestAnnouncement();
  
  return <EnhancedAnnouncement latestAnnouncement={latestAnnouncement} />;
}