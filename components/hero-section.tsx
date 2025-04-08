
export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* Tagline */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white mr-2"
          >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span className="text-white text-sm">Your Vision, Our Code</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-white mb-6">Saylani Tech Limited</h1>

        {/* Description */}
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
          Transforming businesses with custom software solutions and innovative
          technology expertise.
        </p>
      </div>
    </div>
  );
}
