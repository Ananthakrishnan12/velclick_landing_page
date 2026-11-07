export const portfolioCategories = [
  "All Projects",
  "AI Video Advertisements",
  "Meta Ads Creatives",
  "Portfolio Websites",
  "Promotional Designs",
];

/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * TO ADD YOUR CLIENT VIDEOS:
 * 1. Place your video file inside `public/videos/` (e.g., `public/videos/my-client-video.mp4`).
 * 2. Set `videoUrl: "/videos/my-client-video.mp4"` (or use a direct MP4 link / YouTube / Vimeo link).
 * 3. Set `clientName: "Your Client Name"`.
 * 4. Set `aspectRatio: "16:9"` for landscape or `"9:16"` for vertical mobile reels/shorts.
 */
export const portfolioProjects = [
  {
    id: 1,
    title: "Diwali Festive Commercial Video",
    clientName: "VelClick Client Partner",
    category: "AI Video Advertisements",
    isVideo: true,
    videoUrl: "/videos/diwali.mp4",
    duration: "0:30",
    aspectRatio: "16:9",
    thumbnail: "/images/hero-visual-3d.png",
    tag: "Client Delivered",
    description: "High-impact festive promotional video crafted with vibrant visuals, celebrations, and conversion-focused branding for seasonal campaign engagement.",
    deliverables: ["4K Video Production", "Festive Sound Design & Audio", "Reels & Feed Formats", "Campaign Hook & CTAs"],
    tech: ["AI Video Diffusion", "Motion Design", "Commercial Editing"],
  },
  {
    id: 2,
    title: "Dynamic Brand Story Reel",
    clientName: "Aura Luxury Wellness",
    category: "AI Video Advertisements",
    isVideo: true,
    // Working demo MP4 video - replace with your local file: "/videos/aura-reel.mp4"
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    duration: "0:15",
    aspectRatio: "16:9",
    thumbnail: "/images/velclick-cover.jpg",
    tag: "Client Delivered",
    description: "Captivating promotional video designed for Instagram Reels & Facebook Ads with thumb-stopping opening hook and call to action.",
    deliverables: ["High-Retention Story Arc", "Sound Effects & Audio Mastering", "Color Grading & Typography", "Instagram Ad Format"],
    tech: ["AI Storytelling", "Reels Optimization", "Motion Typography"],
  },
  {
    id: 3,
    title: "B2B Lead Generation Ad Suite",
    clientName: "Nova Logistics Global",
    category: "Meta Ads Creatives",
    isVideo: false,
    tag: "Client Delivered",
    description: "Multi-variant creative framework designed for Facebook and Instagram feeds with compelling hooks, clear value props, and conversion-focused CTAs.",
    deliverables: ["Carousel Format (1080x1080)", "Story/Reel Format (1080x1920)", "A/B Hook Variations", "Ad Copy Guidelines"],
    tech: ["Meta Ads Suite", "Conversion Copywriting", "Visual Typography"],
  },
  {
    id: 4,
    title: "Modern Architecture Firm Portfolio",
    clientName: "Studio Vistara Architects",
    category: "Portfolio Websites",
    isVideo: false,
    tag: "Client Delivered",
    description: "Ultra-clean, responsive single-page portfolio website tailored for design consultants, featuring smooth scroll interactions and enquiry capture.",
    deliverables: ["Responsive UI/UX Design", "Interactive Project Showcase", "Fast Load Speed (<1s)", "Direct WhatsApp Contact"],
    tech: ["React", "Tailwind CSS", "Motion Animations"],
  },
  {
    id: 5,
    title: "AI Business Explainer Video",
    clientName: "Apex Dental & Healthcare",
    category: "AI Video Advertisements",
    isVideo: true,
    // Working demo MP4 video - replace with your local file: "/videos/apex-explainer.mp4"
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    duration: "0:15",
    aspectRatio: "16:9",
    thumbnail: "/images/hero-visual-3d.png",
    tag: "Client Delivered",
    description: "Snappy commercial explainer video articulating modern patient care, facility highlights, and easy online appointment booking.",
    deliverables: ["Script & Storyboarding", "AI Video Generation", "Subtitles & Captions", "Local Meta Ad Setup"],
    tech: ["AI Synthesis", "Kinetic Typography", "Commercial Audio"],
  },
  {
    id: 6,
    title: "Executive Personal Portfolio",
    clientName: "Dr. K. Ramanathan, Consultant",
    category: "Portfolio Websites",
    isVideo: false,
    tag: "Client Delivered",
    description: "Sleek personal branding website designed for entrepreneurs, speakers, and consultants to highlight speaking engagements, press, and advisory roles.",
    deliverables: ["Clean Editorial Layout", "Media & Press Kit Section", "One-click Booking Link", "SEO-optimized markup"],
    tech: ["Web Architecture", "Mobile-First UX", "Semantic HTML"],
  },
  {
    id: 7,
    title: "Seasonal Festival Promo Ad Set",
    clientName: "Kalyan Jewellers Partner Campaign",
    category: "Promotional Designs",
    isVideo: false,
    tag: "Client Delivered",
    description: "Set of high-contrast celebratory promotional banners designed with festive motifs, luxury gold accents, and urgency-driven badges.",
    deliverables: ["Multi-size Digital Banners", "Story Templates", "Offer Stickers", "Brand Consistency Guide"],
    tech: ["Commercial Design", "Visual Hierarchy", "Digital Creatives"],
  },
  {
    id: 8,
    title: "Local Clinic Google Profile & Ad Package",
    clientName: "CarePlus Diagnostic Centre",
    category: "Meta Ads Creatives",
    isVideo: false,
    tag: "Client Delivered",
    description: "Comprehensive local discovery campaign pairing hyper-targeted Meta reach ads with optimized Google Business Profile assets.",
    deliverables: ["Local Radius Ads", "Offer Creatives", "Verified Profile Assets", "Review Acquisition Guidance"],
    tech: ["Geo-Targeting", "Meta Business", "Local Discovery"],
  },
];
