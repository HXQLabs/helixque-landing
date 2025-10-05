"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
ChevronDown,
ChevronUp,
Circle,
AlertTriangle,
CheckCircle,
} from "lucide-react";

const SERVICES = [
{
  name: "API",
  status: "operational",
  lastIncident: { date: "2024-05-01", desc: "Minor outage resolved." },
},
{
  name: "Database",
  status: "degraded",
  lastIncident: { date: "2024-04-28", desc: "Performance issues resolved." },
},
{ name: "Auth", status: "operational", lastIncident: null },
{
  name: "Email",
  status: "down",
  lastIncident: { date: "2024-05-02", desc: "Email delivery outage." },
},
];

const INCIDENTS = [
{
  service: "Email",
  date: "2024-05-02",
  desc: "Email delivery outage. Resolved in 2h.",
},
{
  service: "Database",
  date: "2024-04-28",
  desc: "Performance issues. Resolved in 1h.",
},
{
  service: "API",
  date: "2024-05-01",
  desc: "Minor outage. Resolved in 30m.",
},
];

// Mock uptime history: 1 = up (green), 0 = incident (red)
const UPTIME_HISTORY: Record<string, number[]> = {
API: [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 1, 1,
],
Database: [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
  1, 1, 1, 1, 1,
],
Auth: [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1,
],
Email: [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
  1, 1, 1, 1, 1,
],
};

function UptimeBar({ history }: { history: number[] }) {
return (
  <div className="flex gap-0.5 mt-1">
    {history.map((v, i) => (
      <div
        key={i}
        className={`h-6 w-1 rounded-sm ${v ? "bg-green-400" : "bg-red-400"}`}
        title={v ? "Up" : "Incident"}
      />
    ))}
  </div>
);
}

function getStatusIcon(status: string) {
if (status === "operational")
  return <CheckCircle className="text-green-500 w-4 h-4" />;
if (status === "degraded")
  return <AlertTriangle className="text-yellow-500 w-4 h-4" />;
if (status === "down") return <Circle className="text-red-500 w-4 h-4" />;
return <Circle className="text-muted-foreground w-4 h-4" />;
}

const SystemStatusBlock = () => {
const [showIncidents, setShowIncidents] = useState(false);
return (
  <Card className="w-full max-w-xl mx-auto p-2 md:p-4">
    <CardContent className="p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <span className="font-semibold text-lg">System Status</span>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setShowIncidents((v) => !v)}
            aria-label={
              showIncidents
                ? "Hide incident history"
                : "Show incident history"
            }
          >
            {showIncidents ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
            <span className="text-xs">
              {showIncidents ? "Hide" : "Incident History"}
            </span>
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          {SERVICES.map((svc) => (
            <div key={svc.name} className="flex flex-col gap-1">
              <div className="flex items-center gap-4 flex-wrap">
                {getStatusIcon(svc.status)}
                <span className="font-medium">{svc.name}</span>
                <span className="text-xs text-muted-foreground">
                  {svc.status.charAt(0).toUpperCase() + svc.status.slice(1)}
                </span>
                {svc.lastIncident && (
                  <span className="text-xs text-muted-foreground ml-auto">
                    Last: {svc.lastIncident.date}
                  </span>
                )}
              </div>
              <UptimeBar history={UPTIME_HISTORY[svc.name] || []} />
            </div>
          ))}
        </div>
      </div>
      {showIncidents && (
        <div className="flex flex-col gap-2 bg-accent rounded-lg p-4 mt-2">
          <span className="font-semibold text-sm mb-2">Incident History</span>
          {INCIDENTS.map((inc, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 border-b last:border-b-0 border-muted-foreground/10 pb-2 last:pb-0"
            >
              <span className="text-xs font-medium">
                {inc.service} - {inc.date}
              </span>
              <span className="text-xs text-muted-foreground">
                {inc.desc}
              </span>
            </div>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
);
}

export default SystemStatusBlock;
