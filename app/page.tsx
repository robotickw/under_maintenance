export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-md">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-primary">
          Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-muted-foreground mb-8">
          We're upgrading our systems. We'll be back soon.
        </p>

        {/* Contact section */}
        <div className="bg-secondary/30 border border-primary/20 rounded-lg p-6">
          <p className="text-muted-foreground mb-6">Need something? Contact us on WhatsApp</p>
          <a
            href="https://wa.me/+96555501387"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              alt="WhatsApp Icon" 
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-lg" 
              src="/whatsapp.webp"
            />
            <div className="flex flex-col gap-1">
              <span className="block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium text-sm">
                WhatsApp
              </span>
              <span className="text-muted-foreground text-xs sm:text-sm">+965 55 501 387</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
