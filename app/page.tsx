export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(69,106,213,0.05)_25%,rgba(69,106,213,0.05)_26%,transparent_27%,transparent_74%,rgba(69,106,213,0.05)_75%,rgba(69,106,213,0.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(69,106,213,0.05)_25%,rgba(69,106,213,0.05)_26%,transparent_27%,transparent_74%,rgba(69,106,213,0.05)_75%,rgba(69,106,213,0.05)_76%,transparent_77%,transparent)] bg-[50px_50px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Code-like prefix */}
        <div className="mb-8 font-mono text-sm text-accent">
          <span className="text-muted-foreground">$</span> <span>system.status</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">Under</span>
          <span className="text-primary mx-3">/</span>
          <span className="text-foreground">Maintenance</span>
        </h1>

        {/* Status indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <p className="text-accent font-mono text-sm">System upgrading</p>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-md mx-auto mb-12 leading-relaxed">
          We're optimizing our infrastructure. Neural networks are training. Check back soon.
        </p>

        {/* Terminal-style box */}
        <div className="border border-primary/20 rounded-lg bg-secondary/20 p-6 max-w-md mx-auto font-mono text-sm text-accent">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-primary/50"></div>
            <div className="w-3 h-3 rounded-full bg-primary/50"></div>
            <div className="w-3 h-3 rounded-full bg-primary/50"></div>
          </div>
          <div className="text-left space-y-2 text-xs">
            <div><span className="text-primary">&gt;</span> <span className="text-muted-foreground">Rebuilding systems...</span></div>
            <div><span className="text-primary">&gt;</span> <span className="text-muted-foreground">Running diagnostics...</span></div>
            <div><span className="text-primary">&gt;</span> <span className="text-primary">ETA: Soon™</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
