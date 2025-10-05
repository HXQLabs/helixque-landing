import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <div className="border-b border-border/50">
        <div className="max-w-5xl mx-auto relative">
          <div className="p-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Home
              </Link>
              <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="space-y-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">
              Our blog is currently under construction. Check back soon for updates and insights!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}