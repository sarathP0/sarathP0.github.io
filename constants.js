/**
 * PORTFOLIO & APP DATA CONSTANTS
 * 
 * You can easily update your profile information, project details, and icon paths here.
 * To change any app icon:
 *   1. Place your icon file (png, jpg, webp, svg) into the "assets/icons/" folder.
 *   2. Update the corresponding "icon" path below.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Sarath P",
    role: "Senior Software Engineer",
    experienceYears: "5+",
    primaryFocus: "Angular, Frontend Architecture & Mobile App Development",
    email: "sarathptnr@gmail.com",
    phone: "+91 9633360014",
    location: "Tanur, Malappuram, Kerala, India",
    linkedin: "https://www.linkedin.com/in/sarathp0",
    github: "https://github.com/sarathP0",
    bio: "Senior Angular Developer & Mobile App Engineer with 5+ years of experience engineering high-performance web applications and cross-platform mobile apps with clean, scalable architecture. Proven track record in enterprise SaaS products across travel accounting and audit & risk management."
  },

  // Published Mobile Apps (Google Play Store & Mobile)
  apps: [
    {
      id: "water-sort",
      title: "Water Sort: Color Flow",
      category: "Casual Puzzle Game",
      platform: "Google Play Store",
      badge: "Featured Mobile Game",
      
      /* ICON PATH: You can manually replace this file in assets/icons/ */
      icon: "assets/icons/water_sort.jpg",
      
      shortDescription: "A relaxing and addictive color-sorting liquid puzzle game designed with fluid physics, thousands of levels, and intuitive one-touch mechanics.",
      highlights: [
        "Dynamic liquid pouring simulation & color blending logic",
        "Thousands of handcrafted puzzle levels from easy to challenging",
        "Undo moves and tube booster helpers for seamless gameplay",
        "Polished sound effects, animations, and fluid particle effects"
      ],
      techStack: ["Mobile Game Engine", "Fluid Physics", "Logic Algorithms", "Android"],
      storeUrl: "https://play.google.com/store/apps/details?id=com.RedAbrus.WaterSortColorFlow",
      privacyPolicyUrl: "#privacy-modal"
    },
    {
      id: "lucid-dreams",
      title: "Lucid Dreams - A dream journal",
      category: "Productivity & Lifestyle",
      platform: "Google Play Store",
      badge: "Dream Journal App",
      
      /* ICON PATH: You can manually replace this file in assets/icons/ */
      icon: "assets/icons/lucid_dreams.jpg",
      
      shortDescription: "Interactive dream journaling and reality check application helping users record dreams, identify recurring dream signs, and achieve lucid dreaming.",
      highlights: [
        "Rich offline dream recording with lucidity rating & tags",
        "Customizable reality-check reminders and audio cues",
        "Pattern analysis for recurrent dream themes and sleep metrics",
        "Clean dark-mode first interface for night-time journal writing"
      ],
      techStack: ["Ionic Framework", "Cordova", "Angular", "Local Storage"],
      storeUrl: "https://play.google.com/store/apps/details?id=com.RedAbrus.LucidDreams&hl=en",
      privacyPolicyUrl: null
    },
    {
      id: "muscateer",
      title: "Muscateer",
      category: "Travel & Local Directory",
      platform: "Google Play Store",
      badge: "City Discovery App",
      
      /* ICON PATH: You can manually replace this file in assets/icons/ */
      icon: "assets/icons/muscateer.jpg",
      
      shortDescription: "All-in-one city guide for residents and expats living in Muscat, Oman, featuring verified local businesses, dining, jobs, events, and tourist spots.",
      highlights: [
        "Curated restaurant guides, trending menus, and verified reviews",
        "Expat job board, community announcements, and breaking local news",
        "Interactive tourist destination maps with geolocation routing",
        "Fast responsive cross-platform UI built with Ionic & Cordova"
      ],
      techStack: ["Ionic Framework", "Cordova", "Angular", "Geolocation API"],
      storeUrl: "https://play.google.com/store/apps/details?id=com.muscateers&hl=en",
      privacyPolicyUrl: null
    }
  ],

  // Enterprise Web Applications & SaaS
  webProjects: [
    {
      id: "nutraacs",
      title: "nuTRAACS",
      role: "Specialist Developer (Angular)",
      category: "Enterprise Travel Accounting & ERP",
      company: "Nucore Software Solutions (P) Ltd.",
      
      /* ICON / LOGO PATH: You can manually replace this file in assets/icons/ */
      icon: "assets/icons/nutraacs.svg",
      
      shortDescription: "Comprehensive enterprise billing, BSP reconciliation, and financial accounting SaaS platform for global travel agencies, TMCs, and OTAs.",
      highlights: [
        "Engineered scalable enterprise frontend modules handling millions in multi-currency transactions",
        "Real-time BSP billing reconciliation, IATA travel agency audit workflows",
        "Complex data visualization dashboards using reactive Angular state & RxJS pipelines",
        "Seamless REST API integration with high reliability and zero-downtime accounting operations"
      ],
      techStack: ["Angular", "RxJS", "TypeScript", "Node.js", "PostgreSQL", "SCSS"],
      liveUrl: "https://nutraacs.com/login"
    }
  ],

  // Work History Timeline
  experience: [
    {
      period: "18/Nov/2024 - Present",
      role: "Senior Software Engineer (Angular)",
      company: "Beinex Consulting",
      location: "Kochi, Kerala, India",
      summary: "Leading frontend architecture and development of enterprise SaaS solutions focusing on audit, compliance, and risk management systems. Crafting high-performance, modular Angular components with clean design standards."
    },
    {
      period: "16/Aug/2021 - 14/Nov/2024",
      role: "Specialist Developer (Angular)",
      company: "Nucore Software Solutions (P) Ltd.",
      location: "Calicut, Kerala, India",
      summary: "Key developer for nuTRAACS, the flagship travel accounting SaaS platform. Led UI architecture, implemented complex accounting reconciliation interfaces, optimized bundle size, and improved app load speeds by 40%."
    },
    {
      period: "02/May/2018 - 15/Jun/2019",
      role: "Senior App Developer (Ionic)",
      company: "Bravocode Solutions",
      location: "Calicut, Kerala, India",
      summary: "Developed cross-platform hybrid mobile applications using Ionic Framework and Cordova. Successfully shipped Muscateer to the Google Play Store with dynamic geolocation services and offline caching."
    },
    {
      period: "01/Mar/2017 - 12/Mar/2018",
      role: "Software Developer Trainee (Android)",
      company: "Noctech Solution Pvt. Ltd",
      location: "Kochi, Kerala, India",
      summary: "Completed comprehensive industrial training in native Android development, Java programming, Android SDK lifecycles, and SQLite database management."
    }
  ],

  // Skills
  skills: {
    frontend: [
      { name: "Angular", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "RxJS", level: "Advanced" },
      { name: "HTML5 & Semantic Web", level: "Expert" },
      { name: "CSS3 & SCSS", level: "Expert" },
      { name: "Responsive UI/UX", level: "Expert" }
    ],
    mobile: [
      { name: "Ionic Framework", level: "Advanced" },
      { name: "Cordova / Capacitor", level: "Advanced" },
      { name: "Android App Development", level: "Proficient" },
      { name: "Google Play Console", level: "Proficient" }
    ],
    toolsAndBackend: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Node.js (Familiar)", level: "Intermediate" },
      { name: "PostgreSQL (Familiar)", level: "Intermediate" },
      { name: "REST APIs & JSON", level: "Expert" },
      { name: "Webpack / Angular CLI", level: "Advanced" }
    ]
  },

  // Academic Background
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "APJ Abdul Kalam Technological University",
      period: "2019 - 2021"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "University of Calicut",
      period: "2014 - 2017"
    }
  ],

  // Certifications
  certifications: [
    {
      title: "Certificate of Industrial Training in Android App Development",
      organization: "Noctech Solution Pvt. Ltd, Kochi",
      period: "2017 - 2018"
    }
  ]
};

// Export for module systems or attach to window for static browser usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
} else {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
