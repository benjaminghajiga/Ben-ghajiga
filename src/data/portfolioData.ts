import {
  ProfileData,
  ProjectItem,
  SkillCategory,
  BlogPost,
  ExperienceItem,
  EducationItem,
  CertificationItem,
} from '../types';

export const INITIAL_PROFILE: ProfileData = {
  name: 'Benjamin Ghajiga',
  roleTitle: 'Senior Full Stack Engineer & Cloud Architect',
  shortBio:
    'Staff-level engineer specializing in building high-throughput distributed systems, modern React architectures, and production AI workflows with extreme attention to performance and craft.',
  fullBioParagraphs: [
    'I am a senior full-stack software engineer and cloud systems architect with over 8 years of experience designing and shipping mission-critical web applications, enterprise cloud platforms, and developer tooling.',
    'My core expertise spans the entire development lifecycle: crafting fluid, accessible user interfaces with React, Next.js, and TypeScript, designing resilient asynchronous microservices in Node.js, Go, and Python, and deploying scalable distributed infrastructure on Google Cloud and AWS.',
    'I am deeply passionate about developer experience, system reliability, zero-latency state synchronization, and practical AI integrations that genuinely accelerate human capability. When not writing code, I write engineering teardowns and contribute to open-source software.',
  ],
  location: 'Nigeria, Abuja / Remote Worldwide',
  email: 'bghajiga@gmail.com',
  availability: {
    status: 'Available',
    message: 'Open for Staff/Lead roles, high-impact consulting, and technical advisory',
    targetRoles: ['Staff Software Engineer', 'Full Stack Tech Lead', 'Cloud Solutions Architect', 'AI Solutions Engineer'],
  },
  socials: {
    github: 'https://github.com/bghajiga',
    linkedin: 'https://linkedin.com/in/bghajiga',
    twitter: 'https://twitter.com/bghajiga',
    email: 'mailto:bghajiga@gmail.com',
    website: 'https://bghajiga.dev',
    devto: 'https://dev.to/bghajiga',
  },
  metrics: [
    { label: 'Years Experience', value: '8+', subtext: 'In Full-Stack & Cloud' },
    { label: 'Production Systems', value: '30+', subtext: 'Shipped to global scale' },
    { label: 'Open Source', value: '1.2k+', subtext: 'GitHub stars earned' },
    { label: 'Service Uptime', value: '99.99%', subtext: 'Across cloud clusters' },
  ],
  terminalCommands: {
    'whoami': 'Benjamin Ghajiga — Senior Full Stack Engineer & Cloud Architect (Abuja, Nigeria / Remote Worldwide)',
    'stack': 'TypeScript, React 19, Next.js, Node.js, Go, Python, GCP, Kubernetes, PostgreSQL, Redis, Gemini AI',
    'contact': 'Email: bghajiga@gmail.com | LinkedIn: /in/bghajiga | GitHub: /bghajiga',
    'status': '🟢 Currently open to select staff opportunities and advisory projects.',
    'help': 'Available commands: whoami, stack, experience, projects, contact, status, clear',
  },
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'hyperscale-edge',
    title: 'HyperScale Edge Mesh',
    subtitle: 'Global real-time data orchestration platform with distributed edge workers',
    summary:
      'A low-latency real-time telemetry and state distribution mesh capable of handling 250,000+ WebSocket events per second with sub-15ms edge routing.',
    fullDescription:
      'HyperScale Edge Mesh is an infrastructure platform designed for ultra-low latency real-time collaborative applications. It combines Cloudflare Workers edge nodes, Rust-powered streaming proxies, and a distributed Redis/CockroachDB persistence layer to synchronize operational state across 18 geographic regions.',
    category: 'Cloud & Systems',
    tags: ['Distributed Systems', 'TypeScript', 'WebSockets', 'Go', 'Redis Cluster', 'Docker'],
    featured: true,
    metrics: '250k req/s • sub-15ms latency',
    githubUrl: 'https://github.com/bghajiga/hyperscale-edge-mesh',
    liveUrl: 'https://hyperscale-mesh-demo.bghajiga.dev',
    demoAvailable: true,
    architectureHighlights: [
      'Multi-region WebSocket pooling with GeoDNS anycast routing',
      'Conflict-free Replicated Data Types (CRDTs) for optimistic edge updates',
      'Zero-downtime rolling cluster deployments using Kubernetes operators',
      'End-to-end telemetry pipeline emitting Prometheus & OpenTelemetry traces',
    ],
    keyFeatures: [
      'Adaptive load shedding under traffic spikes',
      'Real-time metrics dashboard with dynamic node topologies',
      'Configurable encryption at rest and TLS 1.3 in transit',
      'Custom CLI tool for instant canary traffic splitting',
    ],
    techStack: ['TypeScript', 'Go', 'Redis', 'Docker', 'Kubernetes', 'Prometheus', 'WebSockets'],
    iconName: 'Network',
    colorGradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
  },
  {
    id: 'cognitivedoc-ai',
    title: 'CognitiveDoc AI Studio',
    subtitle: 'Multimodal document intelligence & structured knowledge retrieval platform',
    summary:
      'An enterprise AI workspace that ingests complex unstructured PDFs, financial statements, and technical manuals to extract structured graphs with grounding citations.',
    fullDescription:
      'CognitiveDoc leverages Gemini multimodal processing and hybrid vector search (Dense embeddings + BM25 sparse index) to deliver grounded question-answering with exact paragraph-level source citations. Features live streaming reasoning trees and instant spreadsheet schema export.',
    category: 'AI & ML',
    tags: ['Gemini 2.5', 'Python', 'FastAPI', 'React 19', 'Vector DB', 'TypeScript'],
    featured: true,
    metrics: '99.2% extraction accuracy • 40+ languages',
    githubUrl: 'https://github.com/bghajiga/cognitivedoc-ai',
    liveUrl: 'https://cognitivedoc.bghajiga.dev',
    demoAvailable: true,
    architectureHighlights: [
      'Chunking pipeline with layout-aware structural parsing',
      'Hybrid reciprocal rank fusion combining vector & keyword indexes',
      'Server-Sent Events (SSE) streaming token output with live citation badges',
      'Granular role-based access control and air-gapped tenant segregation',
    ],
    keyFeatures: [
      'Visual interactive bounding box highlights on source documents',
      'One-click export to CSV, JSON Schema, and PostgreSQL tables',
      'Multi-document synthesis and contrastive diff reports',
      'Custom prompt governance and hallucination verification guardrails',
    ],
    techStack: ['React 19', 'TypeScript', 'Gemini API', 'Python', 'FastAPI', 'Qdrant', 'Tailwind CSS'],
    iconName: 'Sparkles',
    colorGradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
  {
    id: 'pulseops-telemetry',
    title: 'PulseOps Observability',
    subtitle: 'Full-stack application performance monitoring & distributed trace visualizer',
    summary:
      'High-cardinality log aggregation and APM dashboard with automated anomaly detection, flame graphs, and automated incident runbooks.',
    fullDescription:
      'PulseOps simplifies cloud infrastructure debugging by unifying logs, metrics, and traces into a single glass pane. Engineered with a custom virtualized rendering engine that smoothly handles 500,000 log events in the browser without UI frame drops.',
    category: 'Full-Stack',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'ClickHouse', 'Tailwind CSS'],
    featured: true,
    metrics: '500k events/viewport • 60 FPS charts',
    githubUrl: 'https://github.com/bghajiga/pulseops-observability',
    liveUrl: 'https://pulseops.bghajiga.dev',
    demoAvailable: true,
    architectureHighlights: [
      'WebGL and Canvas-accelerated flamegraph visualizations',
      'Time-series downsampling algorithm for high-resolution zooming',
      'Streaming gRPC ingestion gateway backed by ClickHouse columnar store',
      'Automated Slack & PagerDuty webhook dispatch engine',
    ],
    keyFeatures: [
      'Interactive distributed trace timeline with span waterfall view',
      'Natural-language log query translator',
      'Custom metric alerts with dynamic standard-deviation thresholds',
      'Exportable post-mortem PDF incident summaries',
    ],
    techStack: ['React', 'TypeScript', 'D3.js', 'Node.js', 'ClickHouse', 'Express', 'Tailwind CSS'],
    iconName: 'Activity',
    colorGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: 'omniflow-canvas',
    title: 'OmniFlow Workflow Engine',
    subtitle: 'Visual node-based microservice orchestrator and event-driven automation engine',
    summary:
      'A visual canvas for designing asynchronous workflows, webhook transformations, and cloud function orchestration with real-time test execution.',
    fullDescription:
      'OmniFlow provides engineering teams with an intuitive drag-and-drop builder to compose complex distributed workflows. Features deterministic replay, step-by-step time-travel debugging, and automatic retry policies with exponential backoff.',
    category: 'Developer Tools',
    tags: ['React Flow', 'TypeScript', 'Node.js', 'Redis BullMQ', 'PostgreSQL'],
    featured: false,
    metrics: '10M+ daily workflow tasks executed',
    githubUrl: 'https://github.com/bghajiga/omniflow-canvas',
    liveUrl: 'https://omniflow.bghajiga.dev',
    demoAvailable: true,
    architectureHighlights: [
      'Directed Acyclic Graph (DAG) cycle detection and topological sorting',
      'Sandboxed JavaScript execution runtime for custom transform nodes',
      'Distributed worker pool with Redis BullMQ and priority queues',
      'Persistent audit trail tracking every variable payload transition',
    ],
    keyFeatures: [
      'Live execution step visualizer with real-time glowing node pulses',
      'Versioned workflow branching with instant rollback',
      'Pre-built integrations for Stripe, GitHub, SendGrid, and AWS SQS',
      'JSON Schema validation at each node boundary',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    iconName: 'Cpu',
    colorGradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    id: 'zenith-design-system',
    title: 'Zenith UI Component Architecture',
    subtitle: 'High-performance, accessible headless React component library and token compiler',
    summary:
      'An enterprise design system focused on zero-runtime CSS, WAI-ARIA compliance, strict TypeScript typings, and themeable token distribution.',
    fullDescription:
      'Built for enterprise scale across multiple front-end micro-apps, Zenith provides over 45 primitives with full keyboard navigation, screen-reader testing, and zero style collision across micro-frontends.',
    category: 'Frontend',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Accessibility'],
    featured: false,
    metrics: '45+ primitives • 100% WCAG AAA pass rate',
    githubUrl: 'https://github.com/bghajiga/zenith-ui',
    liveUrl: 'https://zenith-ui.bghajiga.dev',
    demoAvailable: true,
    architectureHighlights: [
      'Compound component pattern with decoupled state hooks',
      'Automated visual regression testing via Playwright in CI/CD',
      'Design token pipeline syncing Figma tokens to Tailwind and CSS variables',
      'Sub-2kb tree-shakable bundle footprints per component',
    ],
    keyFeatures: [
      'Built-in support for fluid typography and contrast-safe dark modes',
      'Comprehensive keyboard shortcut management system',
      'Live interactive component playground with copyable JSX',
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Radix Primitives', 'Vite'],
    iconName: 'Layers',
    colorGradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
  },
  {
    id: 'cloudcraft-cli',
    title: 'CloudCraft Infra CLI',
    subtitle: 'Declarative multi-cloud provisioning and developer environment setup utility',
    summary:
      'A cross-platform terminal utility written in Go to bootstrap zero-trust microservice environments in seconds across GCP and AWS.',
    fullDescription:
      'CloudCraft eliminates boilerplate when spinning up containerized environments, provisioning PostgreSQL databases, configuring SSL certs, and setting up CI/CD GitHub Actions workflows with sane security defaults.',
    category: 'Developer Tools',
    tags: ['Go', 'CLI', 'Terraform', 'GCP', 'AWS', 'Docker'],
    featured: false,
    metrics: '15,000+ CLI installs • 4.9/5 rating',
    githubUrl: 'https://github.com/bghajiga/cloudcraft-cli',
    liveUrl: 'https://cloudcraft.bghajiga.dev',
    demoAvailable: false,
    architectureHighlights: [
      'Concurrent provisioning engine with automatic rollback on failure',
      'Self-updating binary distribution via GoReleaser and Homebrew',
      'Encrypted secret vault integration with SOPS and GCP Secret Manager',
    ],
    keyFeatures: [
      'Interactive TUI (Terminal UI) wizard with fuzzy searching',
      'Instant local dev container spinup with hot reload',
      'Pre-commit hooks and static analysis integration',
    ],
    techStack: ['Go', 'Cobra CLI', 'Bubbletea TUI', 'Terraform', 'Docker'],
    iconName: 'Terminal',
    colorGradient: 'from-slate-500/20 via-cyan-500/10 to-transparent',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    description: 'Building fluid, responsive, accessible, and reactive client experiences.',
    iconName: 'Layout',
    skills: [
      { name: 'TypeScript', level: 96, experienceYears: '7 yrs', highlight: true, keywords: ['Generics', 'Utility Types', 'AST', 'Strict Mode'] },
      { name: 'React 19 & Next.js', level: 95, experienceYears: '7 yrs', highlight: true, keywords: ['Server Components', 'Hooks', 'Concurrent Mode', 'State Management'] },
      { name: 'Tailwind CSS', level: 94, experienceYears: '5 yrs', highlight: true, keywords: ['Design Systems', 'Vite Plugin', 'Responsive Layouts'] },
      { name: 'Performance & Web Vitals', level: 90, experienceYears: '6 yrs', keywords: ['Lighthouse 100', 'Bundle Optimization', 'Core Web Vitals'] },
      { name: 'State Management', level: 92, experienceYears: '6 yrs', keywords: ['Zustand', 'TanStack Query', 'Context API', 'Redux Toolkit'] },
      { name: 'Motion & Animations', level: 88, experienceYears: '4 yrs', keywords: ['Framer Motion', 'Spring Physics', 'CSS Hardware Acceleration'] },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Distributed Systems',
    description: 'Designing resilient microservices, high-throughput APIs, and data layers.',
    iconName: 'Server',
    skills: [
      { name: 'Node.js & Express / Fastify', level: 94, experienceYears: '8 yrs', highlight: true, keywords: ['Async I/O', 'Event Loops', 'RESTful APIs', 'Stream Pipelines'] },
      { name: 'Go (Golang)', level: 85, experienceYears: '4 yrs', highlight: true, keywords: ['Goroutines', 'Channels', 'High-Concurrency', 'gRPC'] },
      { name: 'Python', level: 88, experienceYears: '5 yrs', keywords: ['FastAPI', 'Data Pipelines', 'PyTorch', 'AsyncIO'] },
      { name: 'PostgreSQL & SQL', level: 92, experienceYears: '7 yrs', highlight: true, keywords: ['Indexing', 'Query Optimization', 'JSONB', 'Drizzle ORM', 'Prisma'] },
      { name: 'Redis & Caching', level: 90, experienceYears: '6 yrs', keywords: ['Pub/Sub', 'Redis Streams', 'Rate Limiting', 'Cluster Caching'] },
      { name: 'WebSockets & gRPC', level: 89, experienceYears: '5 yrs', keywords: ['Bidirectional Streams', 'Protobuf', 'Socket.io', 'Raw WS'] },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & Infrastructure',
    description: 'Architecting scalable cloud deployments, automation, and observability.',
    iconName: 'Cloud',
    skills: [
      { name: 'Google Cloud Platform (GCP)', level: 92, experienceYears: '6 yrs', highlight: true, keywords: ['Cloud Run', 'GKE', 'Cloud Spanner', 'Pub/Sub', 'Cloud SQL'] },
      { name: 'Docker & Containers', level: 94, experienceYears: '7 yrs', highlight: true, keywords: ['Multi-Stage Builds', 'Compose', 'Distroless Images', 'Security'] },
      { name: 'Kubernetes (K8s)', level: 84, experienceYears: '4 yrs', keywords: ['Deployments', 'Ingress Routing', 'Helm Charts', 'HPA Autoscaling'] },
      { name: 'CI/CD & DevOps', level: 90, experienceYears: '6 yrs', keywords: ['GitHub Actions', 'ArgoCD', 'Canary Releases', 'Automated Testing'] },
      { name: 'Terraform & IaC', level: 82, experienceYears: '3 yrs', keywords: ['HCL Modules', 'State Management', 'Cloud Provisioning'] },
      { name: 'Observability & Monitoring', level: 88, experienceYears: '5 yrs', keywords: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Structured Logging'] },
    ],
  },
  {
    id: 'ai-data',
    title: 'AI, LLMs & Modern Tooling',
    description: 'Integrating multimodal language models, vector indexes, and intelligent agents.',
    iconName: 'Sparkles',
    skills: [
      { name: 'Gemini API & LLM Workflows', level: 92, experienceYears: '3 yrs', highlight: true, keywords: ['Multimodal', 'Structured Output', 'Function Calling', 'Streaming'] },
      { name: 'RAG & Vector Databases', level: 88, experienceYears: '3 yrs', keywords: ['Embeddings', 'Qdrant', 'ChromaDB', 'Chunking Strategies'] },
      { name: 'Prompt Engineering & Evaluation', level: 90, experienceYears: '3 yrs', keywords: ['Few-Shot', 'Guardrails', 'Eval Benchmarks', 'JSON Mode'] },
      { name: 'Git & Developer Tooling', level: 96, experienceYears: '8 yrs', keywords: ['Interactive Rebase', 'Vite', 'Turborepo', 'ESBuild'] },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Lead Full Stack Software Engineer',
    company: 'Vanguard Cloud Systems',
    location: 'London / Hybrid',
    period: '2022 — Present',
    current: true,
    description:
      'Spearheading technical architecture and leading a team of 9 senior engineers building high-scale real-time telemetry and automation platforms.',
    achievements: [
      'Architected and delivered the next-generation real-time analytics engine, scaling throughput to 500k events/sec while reducing cloud compute costs by 38%.',
      'Transitioned the core legacy monolithic web app into a modern React 19 micro-frontend structure with unified design tokens and 99.8% test coverage.',
      'Designed zero-downtime database migration pipelines for over 4TB of mission-critical user data.',
      'Mentored 6 engineers through promotions to Senior and Staff levels.',
    ],
    techStack: ['React 19', 'TypeScript', 'Node.js', 'Go', 'GCP Cloud Run', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
  },
  {
    id: 'exp-2',
    role: 'Senior Full Stack Developer',
    company: 'Nexus Digital Labs',
    location: 'Remote',
    period: '2019 — 2022',
    description:
      'Engineered enterprise SaaS platforms, real-time collaboration engines, and customer-facing web applications serving over 1.5 million active users.',
    achievements: [
      'Built a collaborative visual canvas tool from scratch with optimistic offline updates and conflict-resolution algorithms.',
      'Optimized initial page load performance from 4.2s to 0.8s (Lighthouse 99 across all performance indicators).',
      'Implemented robust OAuth2 and SAML Single Sign-On (SSO) integrations for Fortune 500 enterprise customers.',
      'Automated end-to-end testing with Playwright and Cypress, cutting regression cycle time from 3 days to 25 minutes.',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Python FastAPI', 'Docker', 'Kubernetes', 'AWS', 'GraphQL'],
  },
  {
    id: 'exp-3',
    role: 'Full Stack Software Engineer',
    company: 'Apex Software Solutions',
    location: 'London, UK',
    period: '2017 — 2019',
    description:
      'Developed responsive single-page web applications, RESTful microservices, and database schemas for fintech and e-commerce clients.',
    achievements: [
      'Built financial transaction reconciliation dashboard handling over £20M in daily volume.',
      'Created custom reusable UI component library adopted across 5 customer portals.',
      'Integrated Stripe and PayPal checkout flows with fraud detection triggers and webhook retry queues.',
    ],
    techStack: ['JavaScript / TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'B.Sc. in Computer Science (First Class Honours)',
    institution: 'University College London (UCL)',
    location: 'London, United Kingdom',
    period: '2013 — 2017',
    grade: 'First Class Honours (1st)',
    details: [
      'Focus on Distributed Systems, Algorithms & Data Structures, and Software Engineering Principles.',
      'Final Year Capstone: Real-time distributed consensus visualization and benchmarking engine.',
      'President of the Open Source Developer Society.',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-1',
    name: 'Google Cloud Certified Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: 'Issued 2023',
    credentialId: 'GCP-PCA-984210',
  },
  {
    id: 'cert-2',
    name: 'AWS Certified Solutions Architect – Professional',
    issuer: 'Amazon Web Services',
    date: 'Issued 2022',
    credentialId: 'AWS-SAP-741952',
  },
  {
    id: 'cert-3',
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    date: 'Issued 2022',
    credentialId: 'CKA-294018',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'react-19-streaming-state',
    slug: 'react-19-streaming-state-synchronization',
    title: 'Architecting Zero-Latency Streaming UI with React 19 & WebSockets',
    summary:
      'A deep dive into combining React 19 useTransition, optimistic updates, and multiplexed WebSocket channels for responsive multi-user collaboration.',
    category: 'Architecture',
    publishDate: 'Aug 14, 2026',
    readTime: '6 min read',
    tags: ['React 19', 'WebSockets', 'Performance', 'TypeScript'],
    likes: 142,
    featured: true,
    content: `
### The Challenge of Real-Time Modern Interfaces

When building collaborative canvases, telemetry dashboards, or live messaging feeds, the standard request-response paradigm breaks down. Users expect changes to reflect instantaneously with zero jank, even under spotty network conditions.

In this article, we examine how we engineered a zero-latency streaming architecture by combining **React 19 Actions**, **optimistic state rollbacks**, and **multiplexed WebSocket channels**.

\`\`\`typescript
// Optimistic state dispatching pattern with React 19
const [state, setState] = useState<SessionState>(initialData);
const [isPending, startTransition] = useTransition();

const handleAction = (payload: ActionEvent) => {
  // 1. Optimistically mutate local state immediately
  const rollbackSnapshot = state;
  setState(prev => applyOptimisticDelta(prev, payload));

  // 2. Stream update over persistent WebSocket socket
  socket.emit('event:dispatch', payload, (ack: ServerAck) => {
    if (!ack.success) {
      // Revert if server rejects
      startTransition(() => {
        setState(rollbackSnapshot);
        toast.error('Sync failed, rolling back.');
      });
    }
  });
};
\`\`\`

### Multiplexing Channels Over a Single TCP Socket

Rather than opening distinct socket connections for chat, notifications, and document syncing, multiplexing logical streams through one connection yields dramatic socket overhead reduction:

1. **Header Compression**: Eliminate repeated handshake metadata.
2. **Backpressure Flow Control**: Pause high-volume telemetry streams when user interacts with critical inputs.
3. **Heartbeat & Resumption**: Resume from cursor sequence numbers during brief disconnections.

### Benchmarks & Real-World Results

By adopting this structure, our team reduced the perceived interaction latency from **180ms down to less than 8ms**, while cutting server connection overhead by **64%**.
    `,
  },
  {
    id: 'gemini-ai-grounded-workflows',
    slug: 'gemini-ai-grounded-workflows-in-production',
    title: 'Building Resilient AI Workflows with Structured Outputs & Grounding',
    summary:
      'How to implement production-ready LLM pipelines using the Gemini TypeScript SDK, strict JSON schema validation, and real-time citation verification.',
    category: 'AI & Machine Learning',
    publishDate: 'Jul 28, 2026',
    readTime: '8 min read',
    tags: ['Gemini API', 'TypeScript', 'AI Engineering', 'Prompting'],
    likes: 218,
    featured: true,
    content: `
### Why Hallucinations Break Production Systems

Natural language outputs from large language models are inherently nondeterministic. In enterprise applications, returning freeform text when a schema is expected is a guaranteed recipe for runtime exceptions.

With the latest **Gemini SDK**, we can enforce strict JSON schema contracts directly at the model generation layer.

\`\`\`typescript
import { GoogleGenAI, Type, Schema } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const AnalysisSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    severity: { type: Type.STRING, enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'] },
    rootCause: { type: Type.STRING },
    mitigationSteps: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    confidenceScore: { type: Type.NUMBER },
  },
  required: ['severity', 'rootCause', 'mitigationSteps', 'confidenceScore'],
};

const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash',
  contents: promptPayload,
  config: {
    responseMimeType: 'application/json',
    responseSchema: AnalysisSchema,
    temperature: 0.1,
  },
});
\`\`\`

### Grounding and Verifiable Citations

To ensure trustworthiness, every analytical extraction should link back to source spans:
- Chunk documents into semantically coherent paragraphs.
- Inject paragraph identifiers into the prompt context.
- Validate that extracted data references valid bounding IDs before presenting to the user.
    `,
  },
  {
    id: 'high-throughput-distributed-systems',
    slug: 'scaling-event-streams-with-node-and-redis-streams',
    title: 'Scaling Event Streams with Node.js and Redis Streams in Production',
    summary:
      'Lessons learned processing millions of daily financial events without data loss using consumer groups and dead letter queues.',
    category: 'Cloud & Systems',
    publishDate: 'Jun 19, 2026',
    readTime: '7 min read',
    tags: ['Distributed Systems', 'Redis', 'Node.js', 'Microservices'],
    likes: 184,
    featured: false,
    content: `
### Moving Beyond Basic Pub/Sub

Standard Redis Pub/Sub is "fire and forget". If a subscriber is down during message publication, that data is lost forever. For audit logs, telemetry, and payment pipelines, this is unacceptable.

**Redis Streams** provide an immutable, append-only log with persistent consumer groups, acknowledgment semantics, and pending entry tracking.

\`\`\`typescript
// Consumer group processing loop with auto-claim of stuck entries
async function processStreamEvents(redisClient: Redis) {
  while (true) {
    const results = await redisClient.xreadgroup(
      'GROUP', 'analytics-workers', 'worker-node-1',
      'BLOCK', 2000,
      'COUNT', 50,
      'STREAMS', 'events:telemetry', '>'
    );

    if (results) {
      for (const [stream, messages] of results) {
        for (const [id, fields] of messages) {
          try {
            await executeTask(fields);
            await redisClient.xack('events:telemetry', 'analytics-workers', id);
          } catch (err) {
            logError(id, err);
            // Will remain in Pending Entries List (PEL) for auto-retry
          }
        }
      }
    }
  }
}
\`\`\`

### Handling Poison Pill Messages with Dead Letter Queues (DLQ)

If a malformed payload causes a worker to crash repeatedly, it must be diverted to a Dead Letter Queue after 5 failed delivery attempts to prevent pipeline starvation.
    `,
  },
  {
    id: 'modern-css-tokens-design-systems',
    slug: 'modern-css-design-tokens-zero-runtime',
    title: 'Building Zero-Runtime Design Token Architectures with Tailwind CSS',
    summary:
      'How to structure design tokens across large multi-package repositories while maintaining strict WCAG AA contrast compliance and dark mode harmony.',
    category: 'Frontend',
    publishDate: 'May 02, 2026',
    readTime: '5 min read',
    tags: ['Tailwind CSS', 'Design Systems', 'CSS', 'Accessibility'],
    likes: 96,
    featured: false,
    content: `
### Mathematical Harmony in UI Tokens

Great interfaces are not designed by picking random hex codes or arbitrary padding values. They rely on strict mathematical scales:
- **Major Second (1.125)** for compact dashboards.
- **Perfect Fourth (1.333)** for expressive display typography.
- **Nested Border Radius Formula**: \`Inner Radius = Outer Radius - Distance Between\`.

By formalizing these rules into shared CSS variables, we eliminate visual friction and speed up developer onboarding across micro-frontends.
    `,
  },
];

export const INITIAL_MESSAGES: any[] = [
  {
    id: 'msg-sample-1',
    name: 'Sarah Jenkins',
    email: 's.jenkins@techcorp-ventures.com',
    subject: 'Staff Software Engineer Opportunity',
    projectType: 'Full-time Hire',
    budget: '$180k - $220k',
    message:
      'Hi Benjamin, I came across your work on HyperScale Edge Mesh and distributed telemetry systems. We are building a next-gen cloud observability tool and would love to chat about a Staff Engineer role on our core team.',
    createdAt: '2026-08-25T14:30:00Z',
    read: true,
  },
];
