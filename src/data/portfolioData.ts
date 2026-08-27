import {
  ProfileData,
  ProjectItem,
  SkillCategory,
  BlogPost,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  LeadershipItem,
  AchievementItem,
} from '../types';

export const INITIAL_PROFILE: ProfileData = {
  name: 'Benjamin Ghajiga',
  roleTitle: 'Full-Stack Developer | Web3 Developer | Technical Community Builder',
  phone: '(+234) 7035319985',
  shortBio:
    'Versatile Full-Stack Developer, Web3 Developer, and Technical Community Builder with 4+ years of experience building digital products, blockchain-powered applications, and media content. Hackathon winner delivering solutions for startups, NGOs, and Web3 projects.',
  fullBioParagraphs: [
    'I am a versatile Full-Stack Developer, Web3 Developer, and Technical Community Builder with over 4 years of experience building digital products, blockchain-powered applications, and engaging multimedia content.',
    'My core technical expertise covers full-stack web and dApp development, smart contract integration (Algorand, Cardano, Solidity basics), technical event organizing, and end-to-end product delivery—from UI/UX design in Figma/Framer to scalable backend REST APIs, PostgreSQL/MongoDB databases, and professional video production.',
    'As the founder and community lead of Origin and organizer of the FOCSA Tech Expo, I am deeply committed to fostering student-focused technology communities, hackathons, open-source collaboration, and practical software engineering.',
  ],
  location: 'Abuja, Nigeria • Remote Worldwide',
  email: 'bghajiga@gmail.com',
  website: 'https://www.ben-ghajiga.ai.studio',
  availability: {
    status: 'Available',
    message: 'Open for Full-Stack, Web3, dApp Development, and Community Leadership Roles',
    targetRoles: [
      'Full-Stack Developer',
      'Web3 Developer',
      'Frontend Engineer',
      'Technical Community Builder',
      'Technical Product Lead',
    ],
  },
  socials: {
    github: 'https://github.com/Benjaminghajiga',
    linkedin: 'https://linkedin.com/in/Benjaminghajiga',
    twitter: 'https://twitter.com/Benjaminghajiga',
    email: 'mailto:bghajiga@gmail.com',
    website: 'https://www.ben-ghajiga.ai.studio',
    phone: 'tel:+2347035319985',
  },
  metrics: [
    { label: 'Years Experience', value: '4+', subtext: 'In Full-Stack & Web3' },
    { label: 'Hackathon Award', value: '1st Place', subtext: '2025 Model and I Winner' },
    { label: 'Community Lead', value: 'Origin', subtext: 'Founder & Tech Organizer' },
    { label: 'End-to-End Craft', value: '100%', subtext: 'From Design to Web3 Launch' },
  ],
  terminalCommands: {
    'whoami': 'Benjamin Ghajiga — Full-Stack Developer | Web3 Developer | Technical Community Builder (Abuja, Nigeria • (+234) 7035319985)',
    'stack': 'TypeScript, React, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, Prisma, Rust, Web3 (Algorand, Cardano, Solidity), Docker, AWS, Framer, Premiere Pro',
    'contact': 'Email: bghajiga@gmail.com | Phone: (+234) 7035319985 | Location: Abuja, Nigeria | Web: www.ben-ghajiga.ai.studio',
    'status': '🟢 Available for Full-Stack development, Web3 dApps, freelance builds, and technical community initiatives.',
    'projects': 'FILLO (AgroConnect), Model and I Hackathon Winner, Amcihi Initiative Platform, Origin Community Hub, FOCSA Tech Expo',
    'education': 'BSc, Software Engineering — Federal University Wukari (May 2025 – Present)',
    'awards': '🏆 1st Place Winner — 2025 Model and I Hackathon (Full Product Delivery: Web3 + Frontend + Video Content)',
    'help': 'Available commands: whoami, stack, projects, experience, education, awards, contact, status, clear',
  },
};

export const LEADERSHIP_DATA: LeadershipItem[] = [
  {
    id: 'lead-1',
    role: 'Founder / Community Lead',
    organization: 'Origin',
    description:
      'Building a student-focused technology community centered on practical learning, collaboration, and software development.',
    highlights: [
      'Organizing technical events, workshops, and hackathon activities for student developers.',
      'Developing partnerships with technology communities, mentors, and industry professionals.',
      'Fostering peer-to-peer code reviews, project showcases, and hands-on skill building.',
    ],
  },
  {
    id: 'lead-2',
    role: 'Technical Event Organizer / Host',
    organization: 'FOCSA Tech Expo',
    description:
      'Organized and hosted a faculty-wide technology event featuring sessions on career paths in tech, open source, closed source, Web3, and cybersecurity.',
    highlights: [
      'Coordinated keynote speakers, industry partnerships, and multi-track event programming.',
      'Created promotional video materials, visual identity assets, and student engagement campaigns.',
      'Moderated panel discussions on emerging Web3 developments, cybersecurity, and open-source contributions.',
    ],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Model and I Hackathon — Winner',
    event: 'Model and I Hackathon 2025',
    year: '2025',
    description:
      'Won the 2025 Model and I Hackathon contributing as core developer and creative lead. Built and delivered the full product including frontend development, Web3 integration, and promotional video content for the winning submission.',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'fillo-agroconnect',
    title: 'FILLO (AgroConnect)',
    subtitle: 'Blockchain-Powered Agricultural Platform connecting farmers directly with corporate buyers',
    summary:
      'A digital platform designed to connect farmers directly with companies, cooperatives, and logistics providers to eliminate exploitative intermediaries.',
    fullDescription:
      'FILLO (AgroConnect) transforms agricultural commerce by connecting smallholder farmers and agricultural cooperatives directly with corporate buyers. Featuring blockchain-based transaction workflows, smart escrow mechanisms, transparent supply chain tracking, and secure digital payments.',
    category: 'Web3 & Blockchain',
    tags: ['Web3', 'Blockchain', 'Smart Contracts', 'React', 'Node.js', 'PostgreSQL', 'Escrow'],
    featured: true,
    metrics: 'Direct Farmer-to-Buyer • Escrow Protected',
    githubUrl: 'https://github.com/Benjaminghajiga/fillo-agroconnect',
    liveUrl: 'https://fillo-agroconnect.ben-ghajiga.ai.studio',
    demoAvailable: true,
    architectureHighlights: [
      'Blockchain-based smart contract escrow for automated payment settlements upon verified delivery',
      'Supply chain provenance tracking ensuring transparency from harvest to buyer receipt',
      'Role-based interface tailored for farmers, corporate buyers, agricultural cooperatives, and logistics providers',
      'Lightweight, responsive mobile-first interface optimized for varying network conditions',
    ],
    keyFeatures: [
      'Direct peer-to-peer agricultural marketplace',
      'Cryptographic transaction verification and invoice generation',
      'Logistics status monitoring and milestone-triggered payouts',
      'Cooperative batch sales management and price discovery',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Smart Contracts', 'Tailwind CSS'],
    iconName: 'Cpu',
    colorGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: 'model-and-i-winner',
    title: 'Model and I Hackathon Winner',
    subtitle: '1st Place Winning Decentralized Product & Multimedia Showcase',
    summary:
      'Delivered full end-to-end product implementation comprising responsive frontend UI, Web3 smart contract integration, and high-impact promotional video content.',
    fullDescription:
      'Built as the core developer and creative lead for the 2025 Model and I Hackathon. Achieved 1st Place by architecting a full-stack Web3 application with seamless wallet onboarding, automated on-chain interactions, and professional promotional video production.',
    category: 'Web3 & Blockchain',
    tags: ['Hackathon Winner', 'Web3', 'dApp', 'React', 'Smart Contracts', 'Video Production'],
    featured: true,
    metrics: '🏆 1st Place Winner • 2025 Hackathon',
    githubUrl: 'https://github.com/Benjaminghajiga/model-and-i-winner',
    liveUrl: 'https://model-and-i.ben-ghajiga.ai.studio',
    demoAvailable: true,
    architectureHighlights: [
      'Seamless multi-wallet Web3 connection and transaction signing',
      'Smart contract integration with instant feedback and event listening',
      'Polished component architecture crafted with React and Tailwind CSS',
      'Complete video marketing package produced in Premiere Pro and After Effects',
    ],
    keyFeatures: [
      'Interactive decentralized user interface with real-time state sync',
      'Automated transaction validation and cryptographic receipt display',
      'High-converting explainer video and product launch trailer',
      'Full cross-browser and mobile responsive compatibility',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Web3', 'Solidity', 'Adobe Premiere Pro', 'Tailwind CSS'],
    iconName: 'Sparkles',
    colorGradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    id: 'amcihi-initiative-platform',
    title: 'Amcihi Initiative NGO Portal',
    subtitle: 'Full-Stack Web App, Dashboards & Community Outreach Platform',
    summary:
      'Designed and developed full-stack websites, web apps, and management dashboards for the Amcihi Initiative to streamline operations and community outreach.',
    fullDescription:
      'A comprehensive web platform engineered for Amcihi Initiative. Includes public-facing program portals, interactive community engagement modules, donor outreach channels, and an intuitive administrative dashboard for operational tracking.',
    category: 'Full-Stack',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Framer', 'REST APIs'],
    featured: true,
    metrics: '5,000+ Community Reach • High Uptime',
    githubUrl: 'https://github.com/Benjaminghajiga/amcihi-initiative',
    liveUrl: 'https://amcihi-initiative.ben-ghajiga.ai.studio',
    demoAvailable: true,
    architectureHighlights: [
      'Responsive full-stack architecture combining Next.js frontend with secure Node.js REST APIs',
      'Custom administrative dashboard for content publishing and donor relationship tracking',
      'Integrated SEO optimization resulting in elevated organic visibility',
      'Structured PostgreSQL database schemas managed with Prisma ORM',
    ],
    keyFeatures: [
      'Real-time program progress visualizer and impact counters',
      'Interactive volunteer and partner onboarding forms',
      'Secure donation inquiry flows and automated email receipts',
      'Dynamic content management system for field updates and press releases',
    ],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Framer', 'Tailwind CSS'],
    iconName: 'Network',
    colorGradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
  },
  {
    id: 'origin-tech-community-hub',
    title: 'Origin Tech Community Platform',
    subtitle: 'Student Developer Hub, Hackathon Registry & Collaborative Learning Space',
    summary:
      'The centralized digital hub for Origin, connecting student developers for collaborative software engineering, workshops, and hackathon preparation.',
    fullDescription:
      'As Founder and Community Lead of Origin, Benjamin designed and built this collaborative platform to organize technical workshops, track project repositories, manage hackathon teams, and facilitate mentorship between students and tech professionals.',
    category: 'Developer Tools',
    tags: ['React', 'TypeScript', 'Node.js', 'Community', 'Hackathons', 'MongoDB', 'Express'],
    featured: false,
    metrics: 'Growing Student Developer Network',
    githubUrl: 'https://github.com/Benjaminghajiga/origin-tech-hub',
    liveUrl: 'https://origin-tech.ben-ghajiga.ai.studio',
    demoAvailable: true,
    architectureHighlights: [
      'Event RSVP and calendar integration for workshops and tech talks',
      'Student project directory with peer feedback and showcase badges',
      'Role-based access control for community leads, mentors, and members',
      'Modular RESTful backend deployed on cloud container infrastructure',
    ],
    keyFeatures: [
      'Interactive hackathon teammate matching board',
      'Curated technical roadmap for Web3, Full-Stack, and Open Source',
      'Live notifications for upcoming meetups and coding sessions',
      'Resource repository with code snippets and presentation decks',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    iconName: 'Layers',
    colorGradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
  },
  {
    id: 'focsa-tech-expo-digital',
    title: 'FOCSA Tech Expo Digital Guide',
    subtitle: 'Faculty-Wide Technology Event Companion & Agenda Application',
    summary:
      'Organized, hosted, and built the digital hub for the faculty-wide FOCSA Tech Expo covering Web3, Cybersecurity, Open Source, and Career Paths.',
    fullDescription:
      'An interactive event portal engineered to guide attendees through multi-track sessions, speaker profiles, partner sponsor booths, and live hackathon challenges during the faculty-wide FOCSA Tech Expo.',
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'UI/UX', 'Figma', 'Event Tech', 'Video Production'],
    featured: false,
    metrics: 'Faculty-Wide Engagement • 5 Session Tracks',
    githubUrl: 'https://github.com/Benjaminghajiga/focsa-tech-expo',
    liveUrl: 'https://focsa-expo.ben-ghajiga.ai.studio',
    demoAvailable: true,
    architectureHighlights: [
      'Fast-loading progressive single-page application with offline agenda caching',
      'Interactive speaker Q&A submission and upvoting module',
      'Custom visual branding and motion graphics designed for on-stage displays',
    ],
    keyFeatures: [
      'Multi-track schedule filtering by Web3, Open Source, and Cybersecurity',
      'Speaker biographies, slides, and session resource downloads',
      'Live attendee polls and interactive feedback forms',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Adobe After Effects'],
    iconName: 'Terminal',
    colorGradient: 'from-slate-500/20 via-cyan-500/10 to-transparent',
  },
  {
    id: 'sandlip-oasis-media-hub',
    title: 'Sandlip Oasis Media & Branding Hub',
    subtitle: 'High-Impact Video Production, Color Grading & Visual Branding Platform',
    summary:
      'Showcasing high-quality video content, motion graphics, and branding assets produced for community-driven projects and digital campaigns.',
    fullDescription:
      'A video and visual design portfolio spotlighting professional video editing in Premiere Pro and DaVinci Resolve, dynamic motion graphics in After Effects, and coherent digital branding systems for community initiatives.',
    category: 'Media & Design',
    tags: ['Video Editing', 'Motion Graphics', 'Premiere Pro', 'DaVinci Resolve', 'Figma', 'Branding'],
    featured: false,
    metrics: 'High-Fidelity 4K Content & Motion Design',
    githubUrl: 'https://github.com/Benjaminghajiga/sandlip-oasis-media',
    liveUrl: 'https://sandlip-media.ben-ghajiga.ai.studio',
    demoAvailable: true,
    architectureHighlights: [
      'Optimized video player showcase with adaptive streaming formats',
      'Brand style guide viewer with downloadable design assets and color swatches',
      'Custom interactive transitions built with Framer Motion',
    ],
    keyFeatures: [
      'Color-graded cinematic reel previews and explainer video cuts',
      'Vector branding assets crafted in Adobe Illustrator and Figma',
      'Social media promotional kits and animated lower-thirds',
    ],
    techStack: ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Figma', 'Illustrator', 'React'],
    iconName: 'Activity',
    colorGradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Development',
    description: 'Building modern, performant web applications, responsive UIs, and robust server APIs.',
    iconName: 'Layout',
    skills: [
      { name: 'React & Next.js', level: 95, experienceYears: '4 yrs', highlight: true, keywords: ['Hooks', 'Server Components', 'State Management', 'SSR/SSG'] },
      { name: 'TypeScript & JavaScript', level: 94, experienceYears: '4 yrs', highlight: true, keywords: ['Type Safety', 'ESNext', 'Generics', 'Async/Await'] },
      { name: 'Node.js & Express.js', level: 92, experienceYears: '3+ yrs', highlight: true, keywords: ['REST APIs', 'Middleware', 'Authentication', 'CRUD'] },
      { name: 'PostgreSQL & MongoDB', level: 88, experienceYears: '3 yrs', highlight: true, keywords: ['Prisma ORM', 'Mongoose', 'Schema Design', 'Indexing'] },
      { name: 'HTML5 & CSS3', level: 96, experienceYears: '4+ yrs', keywords: ['Semantic HTML', 'Flexbox/Grid', 'Responsive Layouts', 'Accessibility'] },
      { name: 'Rust', level: 75, experienceYears: '1+ yr', keywords: ['Memory Safety', 'Systems Programming', 'WebAssembly basics'] },
    ],
  },
  {
    id: 'web3-blockchain',
    title: 'Web3 & Blockchain',
    description: 'Developing decentralized applications, smart contract integrations, and on-chain workflows.',
    iconName: 'Cpu',
    skills: [
      { name: 'dApp Development', level: 90, experienceYears: '2+ yrs', highlight: true, keywords: ['Wallet Connect', 'Ethers.js/Web3.js', 'Transaction Signing', 'On-Chain Events'] },
      { name: 'Smart Contract Integration', level: 88, experienceYears: '2 yrs', highlight: true, keywords: ['Escrow Logic', 'Token Standards', 'Smart Contract Calls', 'ABI'] },
      { name: 'Algorand', level: 85, experienceYears: '2 yrs', highlight: true, keywords: ['PyTeal', 'AlgoSDK', 'Algorand Standard Assets (ASA)', 'State Proofs'] },
      { name: 'Cardano', level: 82, experienceYears: '1.5 yrs', keywords: ['Plutus basics', 'Lucid/MeshJS', 'UTxO Model', 'Cardano Serialization'] },
      { name: 'Solidity Basics', level: 80, experienceYears: '1.5 yrs', keywords: ['ERC-20', 'ERC-721', 'Remix IDE', 'Hardhat basics'] },
    ],
  },
  {
    id: 'developer-tools',
    title: 'Developer Tools & Cloud',
    description: 'Version control, containerization, automated CI/CD pipelines, and cloud hosting.',
    iconName: 'Server',
    skills: [
      { name: 'Git & GitHub', level: 95, experienceYears: '4 yrs', highlight: true, keywords: ['Branching', 'Pull Requests', 'Rebase', 'Code Collaboration'] },
      { name: 'Docker & Containers', level: 85, experienceYears: '2 yrs', highlight: true, keywords: ['Dockerfile', 'Docker Compose', 'Containerized Dev', 'Multi-stage Builds'] },
      { name: 'GitHub Actions & CI/CD', level: 84, experienceYears: '2 yrs', keywords: ['Automated Builds', 'Testing Pipelines', 'Workflow Automations'] },
      { name: 'Vercel & Cloud Deployment', level: 92, experienceYears: '3 yrs', keywords: ['Serverless Functions', 'Edge Deployments', 'Custom Domains', 'Preview Branches'] },
      { name: 'Amazon Web Services (AWS)', level: 80, experienceYears: '2 yrs', keywords: ['EC2', 'S3', 'IAM', 'CloudFront', 'Lambda'] },
      { name: 'VS Code & Postman', level: 96, experienceYears: '4 yrs', keywords: ['API Testing', 'Debugging', 'Extensions', 'Environment Variables'] },
    ],
  },
  {
    id: 'video-design',
    title: 'Video Production & Design Tools',
    description: 'Professional video editing, motion graphics, UI/UX design, and digital branding.',
    iconName: 'Sparkles',
    skills: [
      { name: 'Adobe Premiere Pro', level: 94, experienceYears: '3+ yrs', highlight: true, keywords: ['Video Editing', 'Color Grading', 'Sound Design', 'Storytelling'] },
      { name: 'DaVinci Resolve', level: 90, experienceYears: '2+ yrs', highlight: true, keywords: ['Color Correction', 'Fairlight Audio', 'Fusion Effects'] },
      { name: 'Adobe After Effects', level: 86, experienceYears: '2 yrs', keywords: ['Motion Graphics', 'Keyframing', 'Visual Effects', 'Transitions'] },
      { name: 'Figma & Framer', level: 92, experienceYears: '3 yrs', highlight: true, keywords: ['UI/UX Design', 'Wireframing', 'Design Systems', 'Interactive Prototypes'] },
      { name: 'Adobe Illustrator & Photoshop', level: 88, experienceYears: '3 yrs', keywords: ['Vector Art', 'Visual Branding', 'Asset Creation', 'Canva'] },
      { name: 'SEO & Content Marketing', level: 85, experienceYears: '3 yrs', keywords: ['On-Page SEO', 'Metadata', 'Keyword Strategy', 'Content Creation'] },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'ICT Intern',
    company: 'ICT Directorate, University of Ilorin',
    location: 'Ilorin, Kwara State, Nigeria',
    period: '2026',
    current: true,
    description:
      'Supporting day-to-day ICT operations and gaining practical experience working within a large university technology infrastructure.',
    achievements: [
      'Supported day-to-day ICT operations and troubleshooting across institutional computing infrastructure and network systems.',
      'Assisted with technical support, system diagnostics, and software troubleshooting for campus users, staff, and faculty.',
      'Participated in hardware maintenance, network configuration, and enterprise IT security protocol adherence.',
    ],
    techStack: ['ICT Infrastructure', 'System Diagnostics', 'Networking', 'Technical Support', 'IT Operations'],
  },
  {
    id: 'exp-2',
    role: 'Freelance Full-Stack Developer & Web3 Developer',
    company: 'Freelance & Startup Client Projects (including Amcihi Initiative)',
    location: 'Remote / Worldwide',
    period: '2023 — Present',
    current: true,
    description:
      'Designing and developing full-stack websites, web applications, Web3 dApp interfaces, and dashboards for businesses, startups, and NGOs.',
    achievements: [
      'Designed and developed full-stack websites, web apps, and data dashboards for startups and non-profit organizations including Amcihi Initiative.',
      'Built and deployed high-performance no-code and code-based web platforms using Framer, Next.js, React, and modern TypeScript workflows.',
      'Developed Web3 dApp interfaces and integrated blockchain smart contracts for hackathon competitions and client decentralized projects.',
      'Delivered end-to-end product development from initial concept planning through development, promotional video content production, and launch.',
      'Produced and edited engaging promotional and explainer videos for clients, enhancing their digital presence, user engagement, and content marketing.',
    ],
    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Web3',
      'Smart Contracts',
      'Framer',
      'Adobe Premiere Pro',
    ],
  },
  {
    id: 'exp-3',
    role: 'Video Editor (Volunteer)',
    company: 'Sandlip Oasis',
    location: 'Remote',
    period: '2025 — Present',
    current: true,
    description:
      'Producing, editing, and delivering high-quality video content, branding visuals, and motion graphics for community-driven projects and events.',
    achievements: [
      'Produced, edited, and delivered high-quality video content for community-driven projects, online campaigns, and live events.',
      'Led design and branding efforts, producing visuals and video layouts that significantly improved community awareness and audience engagement.',
      'Collaborated closely with a cross-functional team to maintain consistent brand, aesthetic, and content standards across all media channels.',
    ],
    techStack: [
      'Adobe Premiere Pro',
      'DaVinci Resolve',
      'Adobe After Effects',
      'Color Grading',
      'Sound Design',
      'Figma',
      'Visual Branding',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'BSc in Software Engineering',
    institution: 'Federal University Wukari',
    location: 'Wukari, Taraba State, Nigeria',
    period: 'May 2025 — Present',
    grade: 'Undergraduate Program (In Progress)',
    details: [
      'Rigorous curriculum spanning Software Engineering Principles, Data Structures & Algorithms, Systems Architecture, and Database Systems.',
      'Active leadership in student technology initiatives, community workshops, and hackathon teams.',
      'Founder and Community Lead of Origin technology community on campus.',
      'Organizer and Host of the faculty-wide FOCSA Tech Expo.',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-1',
    name: 'Google UX Design Certificate',
    issuer: 'Google',
    date: 'Certified',
    credentialId: 'Google UX Professional',
  },
  {
    id: 'cert-2',
    name: 'Brand Design Course',
    issuer: 'Davio White',
    date: 'Completed',
    credentialId: 'Brand Identity Design',
  },
  {
    id: 'cert-3',
    name: 'Video Editing & Post-Production',
    issuer: 'Self-directed / Online Mastery',
    date: 'Completed',
    credentialId: 'Premiere Pro & DaVinci Resolve',
  },
  {
    id: 'cert-4',
    name: 'UNICEF Entrepreneurship Certificate',
    issuer: 'UNICEF',
    date: 'Certified',
    credentialId: 'UNICEF-ENT-2024',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'web3-smart-contracts-in-agriculture',
    slug: 'web3-smart-contracts-in-agriculture-fillo',
    title: 'Transforming Agricultural Commerce with Web3 Smart Contract Escrow: Lessons from FILLO',
    summary:
      'How decentralized escrow mechanics, smart contracts, and transparent ledger tracking connect smallholder farmers directly to buyers while removing exploitative middlemen.',
    category: 'Web3 & Blockchain',
    publishDate: 'Aug 20, 2026',
    readTime: '6 min read',
    tags: ['Web3', 'Blockchain', 'Smart Contracts', 'AgroConnect', 'Escrow'],
    likes: 184,
    featured: true,
    content: `
### The Core Problem in Agricultural Supply Chains

In traditional agriculture, smallholder farmers often receive a fraction of their produce's true market value due to complex chains of intermediaries and lack of price discovery. Furthermore, delayed settlements and payment defaults create persistent financial instability.

In building **FILLO (AgroConnect)**, we set out to solve this using transparent blockchain workflows and trustless escrow contracts.

\`\`\`typescript
// Conceptual escrow settlement workflow on Web3 dApp
interface AgriculturalTrade {
  orderId: string;
  farmerAddress: string;
  buyerAddress: string;
  depositAmount: bigint;
  deliveryConfirmed: boolean;
}

const releaseEscrowPayment = async (orderId: string, proofOfDelivery: string) => {
  // 1. Verify on-chain logistics receipt
  const isVerified = await verifyLogisticsSignature(orderId, proofOfDelivery);
  if (!isVerified) throw new Error("Invalid delivery confirmation");

  // 2. Trigger smart contract payout directly to the farmer's wallet
  const tx = await agroEscrowContract.releaseFunds(orderId);
  await tx.wait();
  console.log("Payment settled directly to farmer without intermediary deduction.");
};
\`\`\`

### Benefits of Trustless Escrow for Farmers

1. **Guaranteed Funds in Lockup**: Buyers deposit total trade value into smart escrow before harvest dispatch.
2. **Instant Settlement Upon Delivery**: Logistics verification immediately releases funds directly to the farmer.
3. **Transparent Provenance**: Immutable transaction history establishes creditworthiness for farming cooperatives.

By combining accessible React web interfaces with blockchain mechanics, we can build tools that truly empower rural producers.
    `,
  },
  {
    id: 'hackathon-product-delivery-guide',
    slug: 'winning-hackathons-full-product-delivery',
    title: 'From Concept to 1st Place: Engineering Winning Products in Web3 Hackathons',
    summary:
      'Key strategies for delivering complete, end-to-end hackathon submissions: balancing functional smart contracts, intuitive UI design, and compelling video storytelling.',
    category: 'Full-Stack & Web3',
    publishDate: 'Jul 15, 2026',
    readTime: '5 min read',
    tags: ['Hackathons', 'Model and I Winner', 'Web3', 'UI/UX', 'Video Production'],
    likes: 245,
    featured: true,
    content: `
### Why Most Hackathon Projects Fall Short

Many great technical projects fail to place in hackathons not because the code is flawed, but because the end-to-end delivery is incomplete. Judges often evaluate a combination of **technical execution**, **user experience**, and **clear presentation**.

When our team won the **2025 Model and I Hackathon**, our approach was built on 3 foundational pillars:

### 1. Build the Complete Loop
Never submit half-working mockups. Focus on a tight, airtight core feature flow:
- Connect wallet with clear error feedback.
- Perform the primary on-chain transaction with live confirmation badges.
- Deliver immediate visible value in the UI.

### 2. Craft Matters: Typography and Motion
First impressions take seconds. Using Figma to establish clean spacing, pairing modern typography, and implementing smooth state transitions with Tailwind CSS and React immediately distinguishes your project from generic boilerplate templates.

### 3. The Power of Video Storytelling
A 2-minute, professionally color-graded and well-paced product demonstration video (edited in Premiere Pro with clear voiceover and motion callouts) communicates your solution far more effectively than a long written README.
    `,
  },
  {
    id: 'building-origin-tech-community',
    slug: 'building-student-tech-communities-origin',
    title: 'Empowering Student Developers: The Journey of Founding Origin & Hosting FOCSA Tech Expo',
    summary:
      'How creating peer-to-peer technical workshops, hackathon clubs, and community expos accelerates student learning and bridges the gap to industry readiness.',
    category: 'Leadership & Community',
    publishDate: 'Jun 10, 2026',
    readTime: '7 min read',
    tags: ['Origin', 'FOCSA Expo', 'Community', 'Open Source', 'Mentorship'],
    likes: 198,
    featured: false,
    content: `
### Moving Beyond Classroom Theory

Software engineering education thrives when students transition from textbook theory to real, collaborative software creation. That vision is what drove me to establish **Origin**—a student-focused technology community centered on practical coding, open-source contribution, and hackathons.

### Organizing the Faculty-Wide FOCSA Tech Expo

When organizing the **FOCSA Tech Expo**, our goal was to demystify modern technology domains for hundreds of faculty students. We curated comprehensive tracks in:
- **Web3 & Decentralized Technologies**
- **Full-Stack Software Engineering & Open Source**
- **Cybersecurity Fundamentals & Threat Modeling**
- **Career Pathways & Technical Portfolio Development**

Connecting students with real mentors and active developers creates an environment where everyone elevates their skills together.
    `,
  },
  {
    id: 'modern-frontend-craft-nextjs-framer',
    slug: 'modern-frontend-craft-nextjs-and-framer',
    title: 'Bridging Design & Code: High-Performance Web Apps with Next.js, TypeScript & Framer',
    summary:
      'Best practices for translating Figma and Framer designs into production-ready Next.js applications with seamless responsiveness and zero visual defects.',
    category: 'Frontend & Design',
    publishDate: 'May 04, 2026',
    readTime: '5 min read',
    tags: ['Next.js', 'Framer', 'TypeScript', 'Figma', 'UI/UX'],
    likes: 120,
    featured: false,
    content: `
### The Intersection of Designer and Developer

As a developer with deep experience in both Google UX Design principles and full-stack software architecture, I believe the gap between design and engineering is where true product quality is born.

### Key Rules for Pixel-Perfect Execution

1. **Design Tokens First**: Always define typography scales, colors, and container margins as variables before writing component markup.
2. **Zero Layout Shift**: Reserve image and video aspect ratio boxes to ensure fluid page loads without jarring reflows.
3. **Mobile-First Ergonomics**: Design touch targets of at least 44px for thumb comfort on mobile devices.
4. **Accessible Contrast**: Strictly verify that text passes WCAG AA contrast standards (at least 4.5:1 for body copy).
    `,
  },
];

export const INITIAL_MESSAGES: any[] = [
  {
    id: 'msg-sample-1',
    name: 'Tech Recruiter / Project Lead',
    email: 'contact@partner-ecosystem.io',
    subject: 'Full-Stack / Web3 Collaboration Inquiry',
    projectType: 'Client Project / Full-Time',
    budget: '$10k - $25k',
    message:
      'Hi Benjamin, I was very impressed by your work on FILLO (AgroConnect) and your 1st place hackathon win. We are looking for a versatile Full-Stack & Web3 developer who can deliver both polished frontend dApps and video assets. Would love to connect!',
    createdAt: '2026-08-25T14:30:00Z',
    read: true,
  },
];
