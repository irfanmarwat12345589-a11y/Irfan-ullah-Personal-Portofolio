import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ur';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    portfolio: string;
    services: string;
    contact: string;
    signin: string;
    signup: string;
    signout: string;
    subtitle: string;
    signedInAs: string;
  };
  home: {
    greeting: string;
    name: string;
    role: string;
    rolesList: string[];
    intro: string;
    viewPortfolio: string;
    contactMe: string;
    technicalSkills: string;
    statResponsive: string;
    statResponsiveDesc: string;
    statProjects: string;
    statProjectsDesc: string;
    statSkills: string;
    statSkillsDesc: string;
    whyWorkTitle: string;
    whyWorkSubtitle: string;
    whyWorkDesc: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    featuredTitle: string;
    featuredSubtitle: string;
    exploreAllProjects: string;
    projectDetails: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaTalk: string;
    ctaLearnMore: string;
    ctaExploreServices: string;
  };
  about: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    cardRole: string;
    currentFocus: string;
    currentFocusValue: string;
    experience: string;
    availability: string;
    availabilityValue: string;
    email: string;
    heading: string;
    bioParagraph: string;
    contactBtn: string;
    skillsBtn: string;
    portfolioBtn: string;
    coreValuesBadge: string;
    coreValuesTitle: string;
    coreValuesDesc: string;
    toolingBadge: string;
    toolingTitle: string;
    statsBadge: string;
    statsTitle: string;
    journeyBadge: string;
    journeyTitle: string;
  };
  skills: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    searchPlaceholder: string;
    tabAll: string;
    tabWeb: string;
    tabComputer: string;
    webTitle: string;
    webSubtitle: string;
    compTitle: string;
    compSubtitle: string;
    proficiency: string;
    checklistBadge: string;
    checklistTitle: string;
    checklistDesc: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaExplore: string;
    ctaDiscuss: string;
  };
  portfolio: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    searchPlaceholder: string;
    catAll: string;
    catWeb: string;
    catDesign: string;
    catComputer: string;
    catPractice: string;
    techFilter: string;
    resetTag: string;
    viewCaseStudy: string;
    highlights: string;
    projectBreakdown: string;
    noProjectsFound: string;
    noProjectsDesc: string;
    resetFilters: string;
    ctaBadge: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaStart: string;
    ctaExplore: string;
    statTotal: string;
    statResponsive: string;
    statCode: string;
    statOffice: string;
  };
  services: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    popularBadge: string;
    whatsIncluded: string;
    deliverables: string;
    requestBtn: string;
    workflowBadge: string;
    workflowTitle: string;
    testimonialsBadge: string;
    testimonialsTitle: string;
    faqBadge: string;
    faqTitle: string;
  };
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    selectServiceOption: string;
    budgetLabel: string;
    budgetPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sending: string;
    sendMessage: string;
    quickDetails: string;
    whatsappDirect: string;
    chatNow: string;
    emailDirect: string;
    location: string;
    pakistan: string;
    workingHours: string;
    monSat: string;
    successMessage: string;
    successDesc: string;
    sendAnother: string;
  };
  resources: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    groundingActive: string;
    groundingDesc: string;
    searchPlaceholder: string;
    searchBtn: string;
    refreshBtn: string;
    tabAll: string;
    tabWebDev: string;
    tabAi: string;
    tabTypescript: string;
    tabUiUx: string;
    tabDevOps: string;
    aiSynthesisTitle: string;
    groundedSources: string;
    keyTakeaways: string;
    readArticle: string;
    readTime: string;
    loadingTitle: string;
    loadingDesc: string;
    noArticlesFound: string;
    noArticlesDesc: string;
    verifiedByGoogle: string;
    liveSearchCitations: string;
    customQueryTag: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    servicesTitle: string;
    connectTitle: string;
    allRightsReserved: string;
    craftedWith: string;
  };
}

export const translationsData: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      portfolio: 'Portfolio',
      services: 'Services',
      contact: 'Contact',
      signin: 'Sign In',
      signup: 'Sign Up',
      signout: 'Sign Out',
      subtitle: 'Web Dev & Skills',
      signedInAs: 'Signed in as',
    },
    home: {
      greeting: 'Hello, I am',
      name: 'Irfan Ullah',
      role: 'Web Developer',
      rolesList: ['Web Developer', 'Computer Skills Professional', 'Creative Learner'],
      intro: 'Passionate Web Developer with strong foundation in HTML, CSS, JavaScript, and Microsoft Office tools. Dedicated to building responsive, visually engaging, and high-performance digital experiences.',
      viewPortfolio: 'View My Portfolio',
      contactMe: 'Contact Me',
      technicalSkills: 'Technical Skills →',
      statResponsive: '100%',
      statResponsiveDesc: 'Responsive UI Design',
      statProjects: '25+',
      statProjectsDesc: 'Completed Projects',
      statSkills: '18+',
      statSkillsDesc: 'Mastered Core Skills',
      whyWorkTitle: 'Why Work With Me',
      whyWorkSubtitle: 'Specialized in Modern Web & Office Technology',
      whyWorkDesc: 'Combining structured computational skills with clean design sensibilities to produce impactful digital work.',
      card1Title: 'Modern Web Development',
      card1Desc: 'Building dynamic, accessible front-ends using semantic HTML5, CSS3 Grid/Flexbox, JavaScript, and responsive UI methodologies.',
      card2Title: 'Computer & Office Mastery',
      card2Desc: 'Expertise in Microsoft Word documentation, complex PowerPoint slide animations, Excel formulas and data tables, and digital productivity workflows.',
      card3Title: 'Futuristic UI & Speed',
      card3Desc: 'Designing sleek glassmorphism cards, glowing borders, dark/light themes, and smooth micro-interactions that captivate visitors.',
      featuredTitle: 'Featured Showcase',
      featuredSubtitle: 'Recent Selected Work',
      exploreAllProjects: 'Explore All Projects',
      projectDetails: 'Details',
      ctaTitle: 'Ready to create something modern & impactful?',
      ctaDesc: 'Whether you need a custom website, front-end development, or computer software assistance, I am ready to collaborate.',
      ctaTalk: "Let's Talk Today",
      ctaLearnMore: 'Learn More About Me',
      ctaExploreServices: 'Explore Services',
    },
    about: {
      badge: 'Biography & Profile',
      title: 'About',
      titleHighlight: 'Me',
      subtitle: 'I am Irfan Ullah, an enthusiastic web developer with a strong passion for front-end design, interactive user interfaces, and computer software proficiency.',
      cardRole: 'Web Developer & Tech Enthusiast',
      currentFocus: 'Current Focus:',
      currentFocusValue: 'Front-End & UI Engineering',
      experience: 'Experience:',
      availability: 'Availability:',
      availabilityValue: 'Open for Projects & Freelance',
      email: 'Email:',
      heading: 'Dedicated to Crafting Useful Digital Solutions',
      bioParagraph: 'With an eager mindset and strong foundation in web technologies and computer applications, I build intuitive web interfaces and organize data with high accuracy. I believe in writing readable code, designing clean visual systems, and continually broadening my technical skill set.',
      contactBtn: 'Contact Irfan',
      skillsBtn: 'Explore Technical Skills',
      portfolioBtn: 'View Portfolio Projects',
      coreValuesBadge: 'Guiding Principles',
      coreValuesTitle: 'Core Values & Approach',
      coreValuesDesc: 'The fundamental standards that govern every line of code, design mock-up, and client communication.',
      toolingBadge: 'Workflow & Setup',
      toolingTitle: 'Development Environment & Tooling',
      statsBadge: 'Proven Track Record',
      statsTitle: 'Key Milestones & Dedicated Hours',
      journeyBadge: 'Continuous Growth',
      journeyTitle: 'My Learning Journey & Milestones',
    },
    skills: {
      badge: 'Technical Capabilities & Proficiency',
      title: 'Skills &',
      titleHighlight: 'Expertise',
      subtitle: 'A comprehensive overview of my web development competencies, modern front-end stacks, and computer productivity tools.',
      searchPlaceholder: 'Search skill (e.g. JavaScript, Excel, HTML, UI, Word)...',
      tabAll: 'All',
      tabWeb: 'Web Dev',
      tabComputer: 'Computer',
      webTitle: 'Web Development',
      webSubtitle: 'Front-end technologies, modern markup, responsive layout frameworks & UI styling.',
      compTitle: 'Computer Skills',
      compSubtitle: 'Microsoft Office suite mastery, digital productivity, operating systems, and file management.',
      proficiency: 'Proficiency',
      checklistBadge: 'Standard Checklist',
      checklistTitle: 'Core Development & Software Standards',
      checklistDesc: 'Every project is constructed strictly adhering to modern industry best practices:',
      ctaTitle: 'Want to see these skills implemented in real projects?',
      ctaDesc: 'Check out my portfolio projects where these web development tools, frameworks, and computer techniques were implemented.',
      ctaExplore: 'Explore Projects Gallery',
      ctaDiscuss: 'Discuss a Requirement',
    },
    portfolio: {
      badge: 'Showcase & Works',
      title: 'My',
      titleHighlight: 'Portfolio',
      subtitle: '"Here are some of the projects and skills that represent my journey in technology, web development, and digital office automation."',
      searchPlaceholder: 'Search projects (e.g. ShopHub, React, Bootstrap, Excel, UI)...',
      catAll: 'All Projects',
      catWeb: 'Web Development',
      catDesign: 'Website Design',
      catComputer: 'Computer Projects',
      catPractice: 'Practice Projects',
      techFilter: 'Tech:',
      resetTag: 'Reset Tag',
      viewCaseStudy: 'View Full Case Study',
      highlights: 'Highlights:',
      projectBreakdown: 'Project Breakdown',
      noProjectsFound: 'No matching projects found',
      noProjectsDesc: 'Try clearing your search query or choosing another category filter.',
      resetFilters: 'Reset All Filters',
      ctaBadge: 'Ready to Build?',
      ctaTitle: 'Have a custom project requirement?',
      ctaDesc: "Let's discuss how we can build your next high-converting website, customize user interfaces, or automate your office data reporting workflows.",
      ctaStart: 'Start a Collaboration',
      ctaExplore: 'Explore Services & Pricing',
      statTotal: 'Total Projects',
      statResponsive: 'Responsive Rating',
      statCode: 'Clean Code Standard',
      statOffice: 'Office Automation',
    },
    services: {
      badge: 'Professional Digital Solutions',
      title: 'Services &',
      titleHighlight: 'Offerings',
      subtitle: 'Tailored digital expertise to build fast, attractive web platforms and enhance your computer and office productivity workflows.',
      popularBadge: 'Most Popular',
      whatsIncluded: "What's Included:",
      deliverables: 'Deliverables:',
      requestBtn: 'Request Service',
      workflowBadge: 'Workflow Excellence',
      workflowTitle: 'Structured & Transparent Process',
      testimonialsBadge: 'Feedback',
      testimonialsTitle: 'What Collaborators Say',
      faqBadge: 'Got Questions?',
      faqTitle: 'Frequently Asked Questions',
    },
    contact: {
      badge: 'Get In Touch',
      title: 'Contact',
      titleHighlight: 'Me',
      subtitle: 'Have a project in mind, need website development, or want to discuss computer automation? Send a message and I will reply promptly.',
      formTitle: 'Send a Direct Message',
      formSubtitle: 'Fill out the form below for inquiries, quotes, or collaborations.',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'e.g. John Doe / Muhammad Ali',
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@example.com',
      phoneLabel: 'Phone / WhatsApp (Optional)',
      phonePlaceholder: '+92 300 1234567',
      serviceLabel: 'Service Needed',
      selectServiceOption: 'Select a Service Category',
      budgetLabel: 'Estimated Budget / Timeline',
      budgetPlaceholder: 'e.g. $100 - $300 / 1-2 Weeks',
      messageLabel: 'Project Details / Message',
      messagePlaceholder: 'Please describe your project, website goals, required features, or office automation needs...',
      sending: 'Sending Message...',
      sendMessage: 'Send Inquiry Message',
      quickDetails: 'Quick Contact Information',
      whatsappDirect: 'WhatsApp Direct Chat',
      chatNow: 'Chat on WhatsApp',
      emailDirect: 'Direct Email',
      location: 'Location',
      pakistan: 'Khyber Pakhtunkhwa, Pakistan',
      workingHours: 'Working Hours',
      monSat: 'Mon - Sat: 9:00 AM - 10:00 PM (PKT)',
      successMessage: 'Message Sent Successfully!',
      successDesc: "Thank you for reaching out! I have received your message and will get back to you within 24 hours.",
      sendAnother: 'Send Another Message',
    },
    footer: {
      desc: 'Dedicated web developer and computer applications professional specializing in responsive web design, interactive front-ends, and office automation.',
      quickLinks: 'Navigation',
      servicesTitle: 'Specializations',
      connectTitle: 'Connect & Inquiries',
      allRightsReserved: 'All rights reserved.',
      craftedWith: 'Designed & Engineered with Passion by Irfan Ullah',
    },
    resources: {
      badge: 'Live Grounded Intelligence',
      title: 'Latest Tech Insights &',
      titleHighlight: 'Developer Resources',
      subtitle: 'Real-time verified developer articles, framework updates, and architectural guides powered by Gemini 3.7 & Google Search Grounding.',
      groundingActive: 'Google Search Grounding Active',
      groundingDesc: 'Articles and blog posts fetched and verified directly from current web search results.',
      searchPlaceholder: 'Search any tech topic (e.g., Next.js 15, AI Agents, Tailwind v4)...',
      searchBtn: 'Search Web',
      refreshBtn: 'Refresh Feed',
      tabAll: 'All Trending',
      tabWebDev: 'Web Dev & React',
      tabAi: 'AI & Gemini',
      tabTypescript: 'TypeScript',
      tabUiUx: 'UI/UX & CSS',
      tabDevOps: 'Cloud & Tooling',
      aiSynthesisTitle: 'Search Grounding Synthesis',
      groundedSources: 'Grounded Web Sources',
      keyTakeaways: 'Key Highlights',
      readArticle: 'Read Full Article',
      readTime: 'Read',
      loadingTitle: 'Querying Google Search & Gemini 3.7...',
      loadingDesc: 'Retrieving live web sources, parsing citations, and synthesizing technical insights.',
      noArticlesFound: 'No articles found',
      noArticlesDesc: 'Try entering a different keyword or selecting a trending category.',
      verifiedByGoogle: 'Verified Web Source',
      liveSearchCitations: 'Live Search Citations',
      customQueryTag: 'Custom Query',
    }
  },
  ur: {
    nav: {
      home: 'صفحۂ اول',
      about: 'تعارف',
      skills: 'مہارتیں',
      portfolio: 'پورٹ فولیو',
      services: 'خدمات',
      contact: 'رابطہ',
      signin: 'لاگ اِن',
      signup: 'سائن اَپ',
      signout: 'لاگ آؤٹ',
      subtitle: 'ویب ڈویلپر اور آئی ٹی مہارتیں',
      signedInAs: 'لاگ ان ہیں بطور',
    },
    home: {
      greeting: 'السلام علیکم، میں ہوں',
      name: 'عرفان اللہ',
      role: 'ویب ڈویلپر',
      rolesList: ['ویب ڈویلپر', 'کمپیوٹر مہارتوں کے ماہر', 'تخلیقی محقق'],
      intro: 'میں ایک پرجوش ویب ڈویلپر ہوں جس کو ایچ ٹی ایم ایل، سی ایس ایس، جاوا اسکرپٹ اور مائیکروسافٹ آفس ٹولز پر مکمل عبور حاصل ہے۔ جدید، تیز رفتار اور پرکشش ڈیجیٹل حل تیار کرنا میرا مشن ہے۔',
      viewPortfolio: 'میرا پورٹ فولیو دیکھیں',
      contactMe: 'مجھ سے رابطہ کریں',
      technicalSkills: 'تکنیکی مہارتیں ←',
      statResponsive: '۱۰۰٪',
      statResponsiveDesc: 'ریسپانسیو یو آئی ڈیزائن',
      statProjects: '۲۵+',
      statProjectsDesc: 'مکمل شدہ پروجیکٹس',
      statSkills: '۱۸+',
      statSkillsDesc: 'بنیادی تکنیکی مہارتیں',
      whyWorkTitle: 'میرے ساتھ کام کیوں کریں؟',
      whyWorkSubtitle: 'جدید ویب اور دفتری ٹیکنالوجی میں تخصص',
      whyWorkDesc: 'منظم کمپیوٹر مہارتوں اور جدید ڈیزائن کے امتزاج سے معیاری اور بااثر ڈیجیٹل مصنوعات کی تیاری۔',
      card1Title: 'جدید ویب ڈویلپمنٹ',
      card1Desc: 'ایچ ٹی ایم ایل 5، سی ایس ایس 3 فلیکس باکس/گرڈ، جاوا اسکرپٹ اور ریسپانسیو ڈیزائن کے ذریعے پرکشش ویب سائٹس کی تیاری۔',
      card2Title: 'کمپیوٹر اور آفس میں مہارت',
      card2Desc: 'مائیکروسافٹ ورڈ ڈاکومینٹیشن، پاورپوائنٹ اینیمیشنز، ایکسل فارمولاز اور ڈیٹا ٹیبلز پر مکمل گرفت۔',
      card3Title: 'مستقبل کی یو آئی اور رفتار',
      card3Desc: 'گلاس مورفزم کارڈز، چمکدار بارڈرز، ڈارک/لائٹ موڈ اور ہموار اینیمیشنز کے ساتھ دلکش یوزر انٹرفیس۔',
      featuredTitle: 'منتخب کام',
      featuredSubtitle: 'حالیہ پروجیکٹس کی جھلک',
      exploreAllProjects: 'تمام پروجیکٹس دیکھیں',
      projectDetails: 'تفصیلات',
      ctaTitle: 'کیا آپ ایک جدید اور شاندار ویب سائٹ بنوانا چاہتے ہیں؟',
      ctaDesc: 'چاہے آپ کو کسٹم ویب سائٹ چاہیے، فرنٹ اینڈ ڈویلپمنٹ یا کمپیوٹر ڈیٹا آٹومیشن — میں آپ کے ساتھ کام کرنے کے لیے تیار ہوں۔',
      ctaTalk: 'آج ہی رابطہ کریں',
      ctaLearnMore: 'مزید جانیے',
      ctaExploreServices: 'خدمات کا جائزہ لیں',
    },
    about: {
      badge: 'سوانح حیات اور پروفائل',
      title: 'میرے',
      titleHighlight: 'بارے میں',
      subtitle: 'میرا نام عرفان اللہ ہے، میں ایک پرجوش ویب ڈویلپر ہوں جسے فرنٹ اینڈ ڈیزائن، انٹرایکٹو ویب سائٹس اور کمپیوٹر سوفٹ ویئر میں گہری دلچسپی ہے۔',
      cardRole: 'ویب ڈویلپر اور ٹیک پروفیشنل',
      currentFocus: 'موجودہ توجہ:',
      currentFocusValue: 'فرنٹ اینڈ اور یو آئی انجینئرنگ',
      experience: 'تجربہ:',
      availability: 'دستیابی:',
      availabilityValue: 'پروجیکٹس اور فری لانسنگ کے لیے دستیاب',
      email: 'ای میل:',
      heading: 'معیاری اور مفید ڈیجیٹل حل کی تخلیق',
      bioParagraph: 'ویب ٹیکنالوجیز اور کمپیوٹر ایپلی کیشنز کی ٹھوس بنیاد کے ساتھ، میں آسان اور خوبصورت ویب انٹرفیس بناتا ہوں اور ڈیٹا کو درستگی کے ساتھ منظم کرتا ہوں۔ میں صاف ستھرا کوڈ لکھنے اور مسلسل نئی چیزیں سیکھنے پر یقین رکھتا ہوں۔',
      contactBtn: 'عرفان سے رابطہ کریں',
      skillsBtn: 'تکنیکی مہارتیں دیکھیں',
      portfolioBtn: 'پورٹ فولیو پروجیکٹس',
      coreValuesBadge: 'رہنما اصول',
      coreValuesTitle: 'بنیادی اقدار اور طریقہ کار',
      coreValuesDesc: 'وہ بنیادی معیارات جو ہر کوڈ کی لائن، ڈیزائن اور کلائنٹ گفتگو میں لاگو ہوتے ہیں۔',
      toolingBadge: 'ورک فلو اور ٹولز',
      toolingTitle: 'ڈیولپمنٹ ماحول اور ٹولز',
      statsBadge: 'کامیابیوں کا ریکارڈ',
      statsTitle: 'اہم سنگ میل اور محنت کے گھنٹے',
      journeyBadge: 'مسلسل ترقی',
      journeyTitle: 'میرا تعلیمی اور پیشہ ورانہ سفر',
    },
    skills: {
      badge: 'تکنیکی صلاحیتیں اور مہارت',
      title: 'مہارتیں اور',
      titleHighlight: 'تخصص',
      subtitle: 'میری ویب ڈویلپمنٹ، جدید فرنٹ اینڈ فریم ورکس اور کمپیوٹر پراڈکٹیویٹی ٹولز کا جامع جائزہ۔',
      searchPlaceholder: 'مہارت تلاش کریں (مثلاً JavaScript, Excel, HTML, UI, Word)...',
      tabAll: 'تمام',
      tabWeb: 'ویب ڈویلپمنٹ',
      tabComputer: 'کمپیوٹر',
      webTitle: 'ویب ڈویلپمنٹ مہارتیں',
      webSubtitle: 'فرنٹ اینڈ ٹیکنالوجیز، جدید مارک اپ، ریسپانسیو فریم ورکس اور یو آئی اسٹائلنگ۔',
      compTitle: 'کمپیوٹر اور آفس مہارتیں',
      compSubtitle: 'مائیکروسافٹ آفس سوٹ، ڈیجیٹل پیداوری، آپریٹنگ سسٹمز اور فائل مینجمنٹ۔',
      proficiency: 'مہارت کی شرح',
      checklistBadge: 'معیاری چیک لسٹ',
      checklistTitle: 'بنیادی ڈیولپمنٹ اور سافٹ ویئر معیارات',
      checklistDesc: 'ہر پروجیکٹ جدید انڈسٹری معیارات کے عین مطابق بنایا جاتا ہے:',
      ctaTitle: 'کیا آپ ان مہارتوں کو عملی پروجیکٹس میں دیکھنا چاہتے ہیں؟',
      ctaDesc: 'میرے پورٹ فولیو پروجیکٹس دیکھیں جہاں یہ تمام ویب ٹیکنالوجیز اور کمپیوٹر اسکلز استعمال کی گئی ہیں۔',
      ctaExplore: 'پروجیکٹس گیلری دیکھیں',
      ctaDiscuss: 'پروجیکٹ پر بات کریں',
    },
    portfolio: {
      badge: 'نمائش اور شاہکار',
      title: 'میرا',
      titleHighlight: 'پورٹ فولیو',
      subtitle: '"یہ وہ پروجیکٹس اور مہارتیں ہیں جو ٹیکنالوجی، ویب ڈویلپمنٹ اور دفتری آٹومیشن میں میرے سفر کی عکاسی کرتی ہیں۔"',
      searchPlaceholder: 'پروجیکٹ تلاش کریں (مثلاً ShopHub, React, Bootstrap, Excel, UI)...',
      catAll: 'تمام پروجیکٹس',
      catWeb: 'ویب ڈویلپمنٹ',
      catDesign: 'ویب سائٹ ڈیزائن',
      catComputer: 'کمپیوٹر پروجیکٹس',
      catPractice: 'پریکٹس پروجیکٹس',
      techFilter: 'ٹیکنالوجی:',
      resetTag: 'ٹیگ ہٹائیں',
      viewCaseStudy: 'مکمل کیس اسٹڈی دیکھیں',
      highlights: 'اہم خصوصیات:',
      projectBreakdown: 'پروجیکٹ کی تفصیل',
      noProjectsFound: 'کوئی پروجیکٹ نہیں ملا',
      noProjectsDesc: 'براہ کرم تلاش کا لفظ تبدیل کریں یا کسی دوسری کیٹیگری کا انتخاب کریں۔',
      resetFilters: 'تمام فلٹرز ری سیٹ کریں',
      ctaBadge: 'پروجیکٹ شروع کریں',
      ctaTitle: 'کیا آپ کی کوئی خاص ضرورت ہے؟',
      ctaDesc: 'آئیے بات کرتے ہیں کہ ہم آپ کی اگلی شاندار ویب سائٹ کیسے تیار کر سکتے ہیں یا دفتری ڈیٹا ورک فلو کو کیسے آسان بنا سکتے ہیں۔',
      ctaStart: 'تعاون شروع کریں',
      ctaExplore: 'خدمات اور قیمتیں',
      statTotal: 'کل پروجیکٹس',
      statResponsive: 'ریسپانسیو ریٹنگ',
      statCode: 'معیاری کوڈ',
      statOffice: 'آفس آٹومیشن',
    },
    services: {
      badge: 'پیشہ ورانہ ڈیجیٹل حل',
      title: 'خدمات اور',
      titleHighlight: 'پیشکشیں',
      subtitle: 'تیز رفتار اور پرکشش ویب سائٹس کی تعمیر اور کمپیوٹر اور دفتری ڈیٹا کے جدید ترین حل۔',
      popularBadge: 'سب سے مقبول',
      whatsIncluded: 'سروس میں شامل ہے:',
      deliverables: 'ڈیلیوری ایبلز:',
      requestBtn: 'سروس بک کریں',
      workflowBadge: 'بہترین ورک فلو',
      workflowTitle: 'منظم اور شفاف طریقہ کار',
      testimonialsBadge: 'صارفین کی رائے',
      testimonialsTitle: 'کلائنٹس کیا کہتے ہیں',
      faqBadge: 'عام سوالات',
      faqTitle: 'اکثر پوچھے جانے والے سوالات',
    },
    contact: {
      badge: 'رابطہ کیجیے',
      title: 'مجھ سے',
      titleHighlight: 'رابطہ کریں',
      subtitle: 'کیا آپ کے پاس کوئی پروجیکٹ ہے، ویب سائٹ بنوانی ہے، یا کمپیوٹر آٹومیشن پر بات کرنی ہے؟ پیغام بھیجیں، میں جلد جواب دوں گا۔',
      formTitle: 'براہ راست پیغام بھیجیں',
      formSubtitle: 'معلومات، کوٹیشن یا پروجیکٹ کی تفصیلات کے لیے نیچے دیا گیا فارم پُر کریں۔',
      nameLabel: 'آپ کا مکمل نام',
      namePlaceholder: 'مثلاً محمد علی / احمد خان',
      emailLabel: 'ای میل پتہ',
      emailPlaceholder: 'you@example.com',
      phoneLabel: 'فون / واٹس ایپ (اختیاری)',
      phonePlaceholder: '+92 300 1234567',
      serviceLabel: 'مطلوبہ سروس',
      selectServiceOption: 'سروس کی کیٹیگری منتخب کریں',
      budgetLabel: 'تخمینی بجٹ / مدت',
      budgetPlaceholder: 'مثلاً $100 - $300 / 1-2 ہفتے',
      messageLabel: 'پروجیکٹ کی تفصیل / پیغام',
      messagePlaceholder: 'اپنے پروجیکٹ، ویب سائٹ کے مقاصد، مطلوبہ فیچرز یا آفس آٹومیشن کی ضروریات تفصیل سے لکھیں...',
      sending: 'پیغام بھیجا جا رہا ہے...',
      sendMessage: 'پیغام روانہ کریں',
      quickDetails: 'براہ راست رابطے کی معلومات',
      whatsappDirect: 'واٹس ایپ پر چیٹ کریں',
      chatNow: 'ابھی چیٹ کریں',
      emailDirect: 'براہ راست ای میل',
      location: 'مقام',
      pakistan: 'خیبر پختونخوا، پاکستان',
      workingHours: 'اوقات کار',
      monSat: 'پیر تا ہفتہ: صبح 9 تا رات 10 بجے',
      successMessage: 'پیغام کامیابی سے موصول ہو گیا!',
      successDesc: 'رابطہ کرنے کا شکریہ! آپ کا پیغام موصول ہو چکا ہے اور میں 24 گھنٹوں کے اندر جواب دوں گا۔',
      sendAnother: 'ایک اور پیغام بھیجیں',
    },
    footer: {
      desc: 'پرجوش ویب ڈویلپر اور کمپیوٹر پروفیشنل جو جدید ریسپانسیو ڈیزائنز، فرنٹ اینڈ ویب سائٹس اور آفس آٹومیشن میں مہارت رکھتے ہیں۔',
      quickLinks: 'فوری لنکس',
      servicesTitle: 'تخصصات',
      connectTitle: 'رابطہ اور نیٹ ورک',
      allRightsReserved: 'تمام جملہ حقوق محفوظ ہیں۔',
      craftedWith: 'عرفان اللہ کی جانب سے خلوص اور محنت سے تیار کردہ',
    },
    resources: {
      badge: 'لائیو سرچ اور اے آئی تجزیات',
      title: 'تازہ ترین ٹیکنالوجی مضامین و',
      titleHighlight: 'ڈویلپر وسائل',
      subtitle: 'گوگل سرچ گراؤنڈنگ اور جیمینائی کے ذریعے تصدیق شدہ جدید ٹیکنالوجی آرٹیکلز، بلاگز اور اپ ڈیٹس۔',
      groundingActive: 'گوگل سرچ گراؤنڈنگ فعال ہے',
      groundingDesc: 'تازہ ترین ویب ڈیٹا سے مستند اور براہ راست تکنیکی معلومات حاصل کی جا رہی ہیں۔',
      searchPlaceholder: 'کوئی بھی تکنیکی عنوان تلاش کریں (مثلاً React 19، AI ماڈلز، Tailwind)...',
      searchBtn: 'ویب تلاش',
      refreshBtn: 'تازہ کریں',
      tabAll: 'تمام مقبول',
      tabWebDev: 'ویب ڈویلپمنٹ',
      tabAi: 'اے آئی و ٹولز',
      tabTypescript: 'ٹائپ اسکرپٹ',
      tabUiUx: 'یو آئی / یو ایکس',
      tabDevOps: 'کلاؤڈ و ٹولز',
      aiSynthesisTitle: 'سرچ گراؤنڈنگ خلاصہ',
      groundedSources: 'مستند ویب ذرائع',
      keyTakeaways: 'اہم نکات',
      readArticle: 'مکمل مضمون پڑھیں',
      readTime: 'مطالعہ کا وقت',
      loadingTitle: 'گوگل سرچ اور جیمینائی سے رابطہ جاری...',
      loadingDesc: 'تازہ ترین ویب نتائج تلاش کر کے اہم ترین معلومات تیار کی جا رہی ہیں۔',
      noArticlesFound: 'کوئی مضمون نہیں ملا',
      noArticlesDesc: 'برائے مہربانی کوئی دوسرا عنوان درج کریں یا کسی دوسری کیٹیگری کا انتخاب کریں۔',
      verifiedByGoogle: 'تصدیق شدہ ویب ذریعہ',
      liveSearchCitations: 'براہ راست ویب حوالہ جات',
      customQueryTag: 'کسٹم تلاش',
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  isUrdu: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_language');
    return (saved === 'ur' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_language', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  useEffect(() => {
    const html = document.documentElement;
    if (language === 'ur') {
      html.setAttribute('lang', 'ur');
      html.setAttribute('dir', 'rtl');
      document.body.classList.add('font-urdu');
    } else {
      html.setAttribute('lang', 'en');
      html.setAttribute('dir', 'ltr');
      document.body.classList.remove('font-urdu');
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translationsData[language],
    isUrdu: language === 'ur'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
