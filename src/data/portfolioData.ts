import { Project, SkillItem, ServiceItem, StatItem } from '../types';
import shophubWorkspaceImg from '../assets/images/regenerated_image_1788268789322.png';
import webcraftAgencyImg from '../assets/images/regenerated_image_1788268794993.png';
import bizproSolutionsImg from '../assets/images/regenerated_image_1788268799795.png';
import executiveConsultantImg from '../assets/images/regenerated_image_1788268805174.png';

export const PERSONAL_INFO = {
  name: "Irfan Ullah",
  tagline: "Web Developer | Computer Skills Professional | Creative Learner",
  shortIntro: "I am passionate about technology, web development, and continuously learning new computer skills. I enjoy creating modern, responsive, and user-friendly digital experiences.",
  aboutText: "My name is Irfan Ullah, and I am passionate about technology and web development. I enjoy learning new computer skills and improving my knowledge every day. My goal is to develop modern and useful digital experiences and continue growing as a professional in the technology field.",
  email: "irfanmarwat12345589@gmail.com",
  location: "Pakistan",
  availability: "Available for Freelance & Full-time Roles",
  experienceYears: "2+ Years",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  }
};

export const ABOUT_INFO_CARDS = [
  { label: "Full Name", value: "Irfan Ullah", icon: "User", color: "from-blue-500 to-cyan-400" },
  { label: "Profession", value: "Web Developer", icon: "Code2", color: "from-indigo-500 to-purple-500" },
  { label: "Field", value: "Computer and Technology", icon: "Cpu", color: "from-purple-500 to-pink-500" },
  { label: "Interests", value: "Web Development & Computer Skills", icon: "Sparkles", color: "from-cyan-500 to-blue-600" },
  { label: "Career Goal", value: "Becoming a Professional Developer", icon: "Target", color: "from-emerald-500 to-teal-400" },
  { label: "Status", value: "Open for Opportunities", icon: "CheckCircle", color: "from-violet-500 to-indigo-600" }
];

export const STATS_DATA: StatItem[] = [
  {
    id: "projects",
    label: "Projects Completed",
    value: 25,
    suffix: "+",
    description: "Web apps, landing pages & utility tools",
    iconName: "FolderCheck"
  },
  {
    id: "skills",
    label: "Skills Learned",
    value: 18,
    suffix: "+",
    description: "Core web & computer productivity tools",
    iconName: "Award"
  },
  {
    id: "technologies",
    label: "Technologies Explored",
    value: 15,
    suffix: "+",
    description: "Modern frameworks, CSS engines & software",
    iconName: "Layers"
  },
  {
    id: "hours",
    label: "Hours of Learning",
    value: 1200,
    suffix: "+",
    description: "Dedicated coding and digital practice",
    iconName: "Clock"
  }
];

export const WEB_DEV_SKILLS: SkillItem[] = [
  {
    id: "html",
    name: "HTML5",
    category: "Web Development",
    level: 95,
    iconName: "FileCode",
    description: "Semantic markup, modern web accessibility (a11y), SEO-friendly structure, and clean DOM trees.",
    tags: ["Semantic Elements", "Forms & Validation", "Audio/Video APIs", "SEO & Meta"],
    highlight: "Solid semantic foundation"
  },
  {
    id: "css",
    name: "CSS3",
    category: "Web Development",
    level: 92,
    iconName: "Palette",
    description: "Modern styling, Flexbox, CSS Grid layouts, custom animations, media queries, and responsive design.",
    tags: ["Flexbox", "CSS Grid", "Animations & Keyframes", "Custom Properties"],
    highlight: "Pixel-perfect visual styling"
  },
  {
    id: "js",
    name: "JavaScript",
    category: "Web Development",
    level: 88,
    iconName: "Zap",
    description: "ES6+ syntax, asynchronous programming (Async/Await, Promises), DOM manipulation, and dynamic interactions.",
    tags: ["ES6+", "DOM APIs", "Fetch / AJAX", "Event Driven"],
    highlight: "Dynamic, interactive logic"
  },
  {
    id: "responsive",
    name: "Responsive Web Design",
    category: "Web Development",
    level: 94,
    iconName: "Smartphone",
    description: "Mobile-first development ensuring flawless viewing experiences across phones, tablets, laptops, and ultra-wide screens.",
    tags: ["Mobile First", "Fluid Typography", "Breakpoints", "Cross-Browser"],
    highlight: "Adaptive on all screens"
  },
  {
    id: "frontend",
    name: "Front-End Development",
    category: "Web Development",
    level: 90,
    iconName: "Layout",
    description: "Building responsive, modern, interactive web applications with clean component architecture and reusable code.",
    tags: ["Modular Architecture", "State Management", "SPA Development", "Performance"],
    highlight: "Modern client-side engineering"
  },
  {
    id: "webdesign",
    name: "Website Design",
    category: "Web Development",
    level: 89,
    iconName: "Globe",
    description: "Creating visually attractive layouts, color harmonies, typography pairings, and intuitive user experiences.",
    tags: ["Layout Planning", "Color Theory", "Visual Hierarchy", "UX Flow"],
    highlight: "Clean and attractive aesthetics"
  },
  {
    id: "uidesign",
    name: "UI Design",
    category: "Web Development",
    level: 87,
    iconName: "Monitor",
    description: "Designing sleek glassmorphism cards, interactive micro-animations, accessible buttons, and modern dark-mode themes.",
    tags: ["Glassmorphism", "Micro-interactions", "Design Systems", "Figma Basics"],
    highlight: "Futuristic and intuitive UI"
  },
  {
    id: "react",
    name: "React.js & Tailwind CSS",
    category: "Web Development",
    level: 86,
    iconName: "Atom",
    description: "Component-driven development, custom React hooks, Tailwind utility-first styling, and high-speed compilation.",
    tags: ["Hooks", "Tailwind v4", "Component Reuse", "Vite"],
    highlight: "Rapid and maintainable frontend"
  }
];

export const COMPUTER_SKILLS: SkillItem[] = [
  {
    id: "word",
    name: "Microsoft Word",
    category: "Computer Skills",
    level: 95,
    iconName: "FileText",
    description: "Professional document creation, formatting, official reports, resumes, tables, headers, and mail merge.",
    tags: ["Document Formatting", "Template Creation", "Table Design", "Official Reports"],
    highlight: "Mastery in document design"
  },
  {
    id: "powerpoint",
    name: "Microsoft PowerPoint",
    category: "Computer Skills",
    level: 92,
    iconName: "Presentation",
    description: "Dynamic presentations, custom slide transitions, infographic animations, professional pitch decks, and visual graphics.",
    tags: ["Slide Transitions", "Infographics", "Pitch Decks", "Master Slides"],
    highlight: "Engaging visual presentations"
  },
  {
    id: "excel",
    name: "Microsoft Excel",
    category: "Computer Skills",
    level: 88,
    iconName: "Table",
    description: "Spreadsheets, mathematical and statistical formulas (VLOOKUP, SUMIFS, IF), Pivot Tables, and visual chart dashboards.",
    tags: ["Formulas & Functions", "Pivot Tables", "Data Visualization", "Budget Tracking"],
    highlight: "Data organization & analysis"
  },
  {
    id: "internet-email",
    name: "Internet and Email",
    category: "Computer Skills",
    level: 96,
    iconName: "Mail",
    description: "Professional email communication, advanced web research, cloud storage synchronization, and online collaboration tools.",
    tags: ["Email Etiquette", "Cloud Drives", "Boolean Search", "Online Collaboration"],
    highlight: "Fast communication & research"
  },
  {
    id: "fundamentals",
    name: "Computer Fundamentals",
    category: "Computer Skills",
    level: 94,
    iconName: "HardDrive",
    description: "Operating systems (Windows, Linux basics), PC hardware architecture, system optimization, and security practices.",
    tags: ["OS Navigation", "Hardware Basics", "System Optimization", "Troubleshooting"],
    highlight: "Deep understanding of tech"
  },
  {
    id: "file-management",
    name: "File Management",
    category: "Computer Skills",
    level: 95,
    iconName: "FolderTree",
    description: "Systematic directory structures, archiving, backup strategies, file format conversions, and secure data handling.",
    tags: ["Structured Archiving", "File Formats", "Backup Automation", "Data Privacy"],
    highlight: "Organized digital workflow"
  },
  {
    id: "software-knowledge",
    name: "Basic Software Knowledge",
    category: "Computer Skills",
    level: 90,
    iconName: "Sliders",
    description: "Software installation, configuration, driver updates, productivity utilities, and safe digital tools management.",
    tags: ["Software Deployment", "Utility Tools", "System Maintenance", "Antivirus & Safety"],
    highlight: "Smooth software setup"
  },
  {
    id: "digital-skills",
    name: "Technology and Digital Skills",
    category: "Computer Skills",
    level: 92,
    iconName: "ShieldCheck",
    description: "Digital literacy, cyber hygiene, online privacy, digital collaboration tools, and continuous self-learning methods.",
    tags: ["Cyber Hygiene", "Cloud Productivity", "Digital Literacy", "Fast Adaptability"],
    highlight: "Comprehensive digital fluency"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "shophub-ecommerce-platform",
    title: "E-Commerce Website (ShopHub)",
    category: "Web Development",
    shortDesc: "A modern and responsive e-commerce website built with HTML, CSS, JavaScript and Bootstrap.",
    fullDesc: "A modern, highly responsive e-commerce storefront showcasing premium products with flash sales ('Big Sale Up To 50% Off'), category showcases (Wireless Headphones, Smart Watches, Backpacks, Sneakers), secure payment integration, 24/7 support badges, and seamless cross-device compatibility.",
    image: shophubWorkspaceImg,
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    features: [
      "Modern e-commerce hero banner with promotional callouts and special discounts",
      "Curated product grid featuring headphones, smart watches, backpacks, and sneakers",
      "Built with clean HTML5, CSS3, modular JavaScript, and Bootstrap framework",
      "Full responsive layout optimized for mobile, tablet, and ultra-wide screens"
    ],
    impact: "Created an engaging, accessible e-commerce shopping experience with high conversion aesthetics.",
    date: "2025"
  },
  {
    id: "webcraft-digital-solutions",
    title: "WebCraft - Agency & Business Suite",
    category: "Web Development",
    shortDesc: "Digital Solutions platform featuring 6 integrated client sub-portals including BizPro, NextGen, ShopCart, Creative, Travello, and FitLife.",
    fullDesc: "An all-in-one digital agency platform built for modern enterprises. Features multiple live sub-projects including BizPro (Corporate), NextGen (Product Innovation), ShopCart (Online Retail), Creative (Design Agency), Travello (Travel & Tourism), and FitLife (Health & Fitness). Engineered with responsive layouts, fast asset delivery, and high visual appeal.",
    image: webcraftAgencyImg,
    tags: ["Web Design", "UI/UX", "JavaScript", "E-Commerce", "SEO Optimization"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    features: [
      "Integrated multi-project gallery (BizPro, NextGen, ShopCart, Creative, Travello, FitLife)",
      "High-conversion hero callouts and responsive services architecture",
      "Dark mode first design with custom neon typography and subtle gradients",
      "Comprehensive digital marketing and agency showcase features"
    ],
    impact: "Built a versatile multi-brand portal representing over 30+ completed project concepts.",
    date: "2025"
  },
  {
    id: "bizpro-enterprise-solutions",
    title: "BizPro - Digital Solutions for Business",
    category: "Website Design",
    shortDesc: "Corporate business website featuring Strategy, UI/UX Design, and Full-Stack Development modules with architectural glass visuals.",
    fullDesc: "Engineered a high-impact corporate website for BizPro that helps businesses grow their digital presence. Features streamlined Strategy, Design, and Development pillars with custom architectural imagery, dynamic call-to-action sections, and interactive contact touchpoints.",
    image: bizproSolutionsImg,
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Corporate UI"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    features: [
      "Corporate presentation layout with modern architectural glass hero visuals",
      "Three-pillar services layout: Digital Strategy, Modern UI/UX Design, and Custom Development",
      "Full responsive navigation with quick-action contact shortcuts",
      "Engineered for maximum loading speed and SEO ranking performance"
    ],
    impact: "Helps modern corporate businesses scale their online credibility and customer conversion.",
    date: "2025"
  },
  {
    id: "executive-web-consulting",
    title: "Executive IT & Web Consulting",
    category: "Computer Projects",
    shortDesc: "High-level technical advisory, enterprise web development architecture, and executive computer solutions.",
    fullDesc: "Professional technical consultancy and IT advisory services for corporate clients and digital businesses. Covers systems architecture, digital office automation, responsive web implementation, and high-standard software project delivery.",
    image: executiveConsultantImg,
    tags: ["IT Consulting", "Web Architecture", "Digital Office", "Enterprise Solutions"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    features: [
      "Strategic IT consultation and custom web development planning",
      "Advanced office productivity and digital workflow automation",
      "Enterprise security practices, cyber hygiene, and data management",
      "Executive presentations and client project delivery standards"
    ],
    impact: "Delivered strategic digital infrastructure consulting with high client satisfaction.",
    date: "2025"
  },
  {
    id: "modern-developer-portfolio",
    title: "Futuristic Developer Portfolio",
    category: "Website Design",
    shortDesc: "A high-performance personal portfolio with glassmorphism, animated backgrounds, and 3D interactions.",
    fullDesc: "An advanced, interactive portfolio built with modern web technologies showcasing web development expertise, computer skills, and digital services. Includes dark/light mode, particle canvas, smooth page transitions, and responsive mobile architecture.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript", "Responsive"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    features: [
      "Custom particle and technology canvas background",
      "Interactive 3D profile tilt and floating badges",
      "Dynamic dark/light mode toggle with theme persistence",
      "Fluid responsive layout for desktop, tablet, and mobile"
    ],
    impact: "Provides an unforgettable first impression and showcases mastery of modern frontend frameworks.",
    date: "2025"
  },
  {
    id: "modern-tech-storefront",
    title: "Modern Tech Storefront UI",
    category: "Website Design",
    shortDesc: "A sleek e-commerce interface with dynamic cart management, smooth product filtering, and glowing dark theme.",
    fullDesc: "Designed and built an immersive online shopping interface for modern gadgets and software. Features intuitive category sorting, real-time cart calculation, interactive modal previews, and a cyber-inspired aesthetic.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["JavaScript", "HTML5", "CSS3", "UI/UX", "Grid & Flexbox"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    features: [
      "Real-time item search and instant category filter",
      "Cart drawer with live subtotal and tax calculation",
      "Glowing product cards with image zoom on hover",
      "Optimized for high touch-responsiveness on mobile"
    ],
    impact: "Enhanced user engagement with sub-second page rendering and smooth micro-interactions.",
    date: "2025"
  },
  {
    id: "office-productivity-suite",
    title: "Office Productivity & Report Hub",
    category: "Computer Projects",
    shortDesc: "Comprehensive suite of automated Excel templates, Word report styles, and presentation slide systems.",
    fullDesc: "Created a structured digital workstation template suite that automates monthly financial tracking, inventory logs, and professional proposal documentation using advanced Microsoft Office features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Microsoft Excel", "Microsoft Word", "Data Analysis", "Templates", "PowerPoint"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    features: [
      "Dynamic Excel dashboard with automated chart updates",
      "Custom Word master templates with auto-numbered headings",
      "Executive PowerPoint deck with cohesive brand themes",
      "File management backup guidelines for team collaboration"
    ],
    impact: "Cut weekly reporting preparation time by 60% with reusable formulas and layouts.",
    date: "2024"
  },
  {
    id: "interactive-quiz-engine",
    title: "Computer Skills Assessment Engine",
    category: "Practice Projects",
    shortDesc: "An interactive web app for testing computer fundamentals, shortcuts, and web development fundamentals.",
    fullDesc: "A responsive quiz and knowledge evaluation application featuring timed questions, animated score calculation, category selection, and instant feedback with detailed explanations.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    tags: ["JavaScript", "HTML5", "CSS Grid", "LocalStorage", "Animations"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    features: [
      "Multiple skill modules: Web Dev, Office Suite, OS Basics",
      "Live timer and animated progress bar per question",
      "Comprehensive performance breakdown with score badges",
      "Persistent high-score history stored locally"
    ],
    impact: "Helped students and self-learners practice essential computer and coding concepts.",
    date: "2024"
  },
  {
    id: "creative-agency-landing",
    title: "NextGen Digital Agency Website",
    category: "Website Design",
    shortDesc: "Futuristic corporate website featuring gradient typography, interactive service grids, and fluid scroll animations.",
    fullDesc: "A showcase website for a digital design agency emphasizing visual hierarchy, modern UI aesthetics, client testimonial sliders, and clear call-to-action pathways.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "UI Design", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    features: [
      "Custom gradient text headers and soft glow backdrops",
      "Interactive testimonials carousel with touch swipe",
      "Contact form with instant client-side validation",
      "100% Lighthouse mobile performance score"
    ],
    impact: "Demonstrated creative front-end execution and responsive brand storytelling.",
    date: "2024"
  },
  {
    id: "task-file-manager",
    title: "CloudFlow Task & Note Organizer",
    category: "Web Development",
    shortDesc: "A clean web-based task organizer with priority tagging, drag-and-drop state, and search indexing.",
    fullDesc: "An intuitive web application for managing daily development tasks, project notes, and computer workflow checkpoints. Includes dark mode support and persistent browser storage.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    tags: ["JavaScript", "DOM Manipulation", "CSS3", "LocalStorage", "Productivity"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    features: [
      "Instant task creation with priority labels and categories",
      "Filter by status: Completed, Pending, High Priority",
      "Search bar with live keyword highlighting",
      "Export tasks and summaries to JSON/Text"
    ],
    impact: "Streamlines daily task management with zero friction and instant load speed.",
    date: "2024"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-development",
    title: "Web Development",
    shortDesc: "Creating modern, responsive, and high-performance websites tailored to your needs.",
    fullDesc: "End-to-end website building using clean code standards. From interactive web pages to multi-view web applications, every solution is fast, cross-browser compatible, and accessible.",
    iconName: "Code2",
    gradient: "from-blue-600 to-cyan-500",
    popular: true,
    features: [
      "Clean, maintainable HTML5, CSS3 & JavaScript code",
      "Full cross-browser and cross-device testing",
      "Fast page load optimization and lightweight assets",
      "Modern integration with APIs and interactive modules",
      "Search engine friendly structure (SEO best practices)"
    ],
    deliverables: ["Complete Source Code", "Deployment Assistance", "Responsive Layout Guarantee", "30 Days Support"]
  },
  {
    id: "website-design",
    title: "Website Design",
    shortDesc: "Designing beautiful, visually stunning, and user-friendly website interfaces.",
    fullDesc: "Crafting captivating visual identities for websites. We combine futuristic dark themes, subtle glowing aesthetics, harmonious typography, and intuitive user journey mapping.",
    iconName: "Palette",
    gradient: "from-indigo-600 to-purple-600",
    features: [
      "Modern UI layouts with glassmorphism and soft glow effects",
      "Carefully chosen color palettes and typography pairings",
      "User-centric navigation and intuitive interaction flow",
      "Custom hero banners, icons, and visual components",
      "Interactive prototypes and design mockups"
    ],
    deliverables: ["Visual UI Design", "Component Style Guide", "Design Assets & Icons", "Interactive Previews"]
  },
  {
    id: "frontend-development",
    title: "Front-End Development",
    shortDesc: "Building interactive, dynamic, and responsive website experiences.",
    fullDesc: "Transforming design ideas into functional, pixel-perfect frontend experiences. Leveraging modern component patterns, smooth animations, and state management.",
    iconName: "Layout",
    gradient: "from-purple-600 to-pink-500",
    features: [
      "Dynamic interactive user interfaces with React / JavaScript",
      "Smooth Framer Motion transitions and micro-interactions",
      "Mobile-first responsive grids and Flexbox layouts",
      "Component modularity for effortless future scaling",
      "Form validation and dynamic client-side state handling"
    ],
    deliverables: ["Modular Component Architecture", "Fluid Animations", "Optimized Assets", "Documentation"]
  },
  {
    id: "computer-assistance",
    title: "Computer Assistance & Digital Skills",
    shortDesc: "Helping with general computer-related tasks, productivity software, and digital skills.",
    fullDesc: "Providing professional support in Microsoft Office (Word, PowerPoint, Excel), computer setup, system optimization, file management, and digital workflow enhancement.",
    iconName: "Laptop",
    gradient: "from-emerald-600 to-teal-500",
    features: [
      "Professional document preparation in Microsoft Word",
      "Custom slide design and pitch decks in PowerPoint",
      "Spreadsheet formulation, charts, and data tracking in Excel",
      "Computer setup, file organization, and backup systems",
      "Guidance on digital tools, internet research, and online safety"
    ],
    deliverables: ["Custom Office Templates", "Formatted Reports / Slides", "Workflow Consulting", "Step-by-Step Guidance"]
  }
];

export const JOURNEY_MILESTONES = [
  {
    year: "Present",
    title: "Professional Web Developer & Tech Specialist",
    description: "Building modern responsive web applications with React, Tailwind CSS, JavaScript, and crafting elegant digital solutions.",
    icon: "Rocket"
  },
  {
    year: "Continuous",
    title: "Advanced Computer Skills & Software Mastery",
    description: "Comprehensive mastery of Microsoft Office suite, structured data analysis, digital productivity, and system fundamentals.",
    icon: "BookOpen"
  },
  {
    year: "Foundation",
    title: "Web Technologies & Core Fundamentals",
    description: "Mastered semantic HTML5, modern CSS3 animations, JavaScript algorithms, and responsive design principles.",
    icon: "Terminal"
  }
];

export const CORE_VALUES = [
  {
    title: "Pixel-Perfect Precision",
    description: "Every margin, typography scale, and responsive breakpoint is crafted with mathematical rigor and optical balance.",
    icon: "CheckCircle"
  },
  {
    title: "Performance First",
    description: "Lightning-fast page speeds, optimized assets, clean DOM hierarchies, and minimal runtime bundle overhead.",
    icon: "Zap"
  },
  {
    title: "Clean & Maintainable Code",
    description: "Writing self-documenting, modular, and standards-compliant code that is effortless to scale and maintain.",
    icon: "Code2"
  },
  {
    title: "Continuous Evolution",
    description: "Constantly mastering emerging web standards, modern tooling, UI design trends, and computational methods.",
    icon: "Rocket"
  }
];

export const DEV_TOOLING = [
  { name: "VS Code", category: "IDE & Editor", level: "Expert", desc: "Equipped with custom linters, Emmet, and debugging shortcuts" },
  { name: "Git & GitHub", category: "Version Control", level: "Advanced", desc: "Branching strategies, atomic commits, pull requests & repositories" },
  { name: "Chrome DevTools", category: "Debugging & Audit", level: "Expert", desc: "Network performance, DOM inspection, memory profiling & lighthouse" },
  { name: "Tailwind CSS & Vite", category: "Build & Style", level: "Expert", desc: "Instant HMR builds, utility-first systems & responsive styling" },
  { name: "Figma & UI Prototyping", category: "Design Tools", level: "Proficient", desc: "Wireframing, component tokens, color theory & design systems" },
  { name: "Microsoft Office 365", category: "Office Automation", level: "Master", desc: "Formulas, VBA/Macro basics, master slides & executive document design" }
];

export const FAQ_ITEMS = [
  {
    question: "What types of websites and web projects do you develop?",
    answer: "I build responsive commercial storefronts, portfolio websites, modern business landing pages, interactive web applications, and digital productivity dashboards using HTML5, CSS3, JavaScript, React, and Tailwind CSS."
  },
  {
    question: "How do you ensure websites work properly on mobile and tablets?",
    answer: "I adopt a strict mobile-first architecture. Every page is thoroughly tested against multiple screen viewports from small smartphones (360px) up to ultra-wide desktop monitors (2560px), with fluid responsive scaling."
  },
  {
    question: "Can you help with Microsoft Word, Excel, and PowerPoint automation?",
    answer: "Yes! I provide expert computer services including automated Excel spreadsheet formulas & pivot dashboards, executive PowerPoint pitch decks with custom animations, and professionally formatted Word documents and reports."
  },
  {
    question: "What is the typical turnaround time for a project?",
    answer: "Simple landing pages and document setups take 2 to 5 business days, while full multi-page web applications or extensive office productivity suites typically take 1 to 3 weeks, delivered with full source code and support."
  },
  {
    question: "Do you offer post-launch support and revisions?",
    answer: "Absolutely. Every web project and consulting engagement includes 30 days of complimentary support, bug fixes, and deployment guidance to guarantee complete satisfaction."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Irfan transformed our digital storefront with incredible attention to detail and responsive styling. The loading speed and futuristic UI look outstanding!",
    author: "Hamza Tariq",
    role: "E-Commerce Founder",
    project: "ShopHub E-Commerce Store"
  },
  {
    quote: "The automated Excel dashboards and formatted reports saved our operations team over 15 hours every single week. Highly professional computer proficiency.",
    author: "Zubair Khan",
    role: "Operations Manager",
    project: "Office Productivity Suite"
  },
  {
    quote: "Working with Irfan was seamless. He communicated clearly, delivered clean modular code, and made sure our website looked perfect across all mobile devices.",
    author: "Bilal Ahmed",
    role: "Creative Director",
    project: "WebCraft Agency Portal"
  }
];
