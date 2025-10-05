import SystemStatusBlock from "@/components/ui/system-status-block";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Status",
  description: "Check the current status of all our services and view incident history.",
};

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            System Status
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor the real-time status of our services and infrastructure.
            Check service uptime, view incident history, and stay informed about any ongoing issues.
          </p>
        </div>
        
        <div className="flex justify-center">
          <SystemStatusBlock />
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Last updated: {new Date().toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
