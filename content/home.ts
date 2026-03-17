// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// (other type definitions unchanged...)

export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "New",
    badgeOuter: "Meet CoreSphere CRM",
    titleBefore: "Transform your",
    titleHighlight: "workflow",
    titleAfter: "with a smarter internal CRM",
    subtitle:
      "CoreSphere allows you and your team to organize contacts, track activity, and accelerate your growth—all in one modern dashboard.",
    primaryCta: { label: "Request a Demo", href: "#contact" },
    secondaryCta: { label: "See Features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "CoreSphere dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why CoreSphere",
    heading: "A streamlined CRM for focused teams",
    description:
      "Perfect for fast-moving companies who need operational control, not spreadsheet chaos.",
    items: [
      {
        icon: "Blocks",
        title: "Unified Client Tracking",
        description: "Organize every conversation and project in one reliable CRM workspace.",
      },
      {
        icon: "LineChart",
        title: "Real-Time Dashboards",
        description: "Monitor deals, activities, and tasks at a glance to keep teams aligned.",
      },
      {
        icon: "Wallet",
        title: "Zero Setup Overhead",
        description: "Skip lengthy implementations—get started on CoreSphere in minutes.",
      },
      {
        icon: "Sparkle",
        title: "Customizable Workflows",
        description: "Drag-and-drop fields and sections adapt to your company’s needs.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Product Features",
    heading: "What makes CoreSphere different?",
    subtitle:
      "We blend enterprise-grade reliability with startup agility, offering robust CRM capabilities with modern simplicity.",
    items: [
      { icon: "TabletSmartphone", title: "Responsive Design", description: "Use anywhere: desktop, tablet, or mobile." },
      { icon: "BadgeCheck", title: "Role-Based Permissions", description: "Granular access controls for admins, managers, and agents." },
      { icon: "Goal", title: "Pipeline Management", description: "Visualize deals by stage, assign owners, and automate flows." },
      { icon: "PictureInPicture", title: "Rich Activity Timeline", description: "All emails, calls, and notes in one timeline." },
      { icon: "MousePointerClick", title: "One-Click Imports", description: "Easy onboarding with spreadsheet and CSV import." },
      { icon: "Newspaper", title: "Audit Logging", description: "Track changes and user actions for accountability." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Core Capabilities",
    subtitle:
      "A pragmatic CRM baseline for high-output teams with secure, extensible infrastructure.",
    items: [
      { title: "Advanced Authentication", description: "Secure email/password system — privacy-first by design.", pro: false },
      { title: "Team Permissions", description: "Invite colleagues and set owner/admin/member roles per workspace.", pro: false },
      { title: "Custom Fields", description: "Personalize your CRM with drag-and-drop fields.", pro: false },
      { title: "Analytics & Insights", description: "Built-in dashboard for actionable metrics.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Stories",
    heading: "Fueling real customer growth",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Founder, FinchFlow", comment: "CoreSphere let us ditch spreadsheets and focus on revenue. The setup is fast and the UX is clean—our sales team loves it.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "COO, OrbitDesk", comment: "Finally: a CRM that balances power and ease of use for our distributed team.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Nikhil Rao", role: "CTO, TeamForge", comment: "We customized workflow stages to fit our process instead of fighting the UI. Highly recommend.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Emma Brooks", role: "Head of Growth, Nimbus", comment: "Our onboarding flow and client touchpoints are now crystal clear with CoreSphere.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Daniel Kim", role: "Engineering Manager, PulseOps", comment: "Easy integration and onboarding for our dev team. Nice to work with, reliable support.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Sofia Green", role: "Founder, LaunchPad AI", comment: "CoreSphere’s dashboards keep our leadership updated every morning—without extra effort.", rating: 4.9 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the CoreSphere team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder & Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Leo",
        lastName: "Miranda",
        positions: ["Lead Engineer", "Architecture"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "CRM for every stage",
    subtitle: "Simple pricing that grows with your business—no hidden fees.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Perfect for freelancers and small teams starting out.",
        buttonText: "Start for free",
        benefits: ["Up to 3 users", "Email/password login", "Team workspace", "Contact management", "Core dashboard"],
      },
      {
        title: "Growth",
        popular: true,
        price: 49,
        description: "For scaling teams who want automation and deeper insight.",
        buttonText: "Start trial",
        benefits: ["Unlimited users", "Custom fields", "Pipeline automation", "Analytics dashboard", "Priority support"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "Custom-built for large organizations needing audit & compliance.",
        buttonText: "Contact sales",
        benefits: ["Enterprise SSO", "Full audit log", "Dedicated onboarding", "API access", "Custom support SLAs"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Let’s talk",
    description:
      "Looking for a demo, need help, or want to discuss customization? Contact us directly—we’ll respond promptly.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Location", value: "Remote • India & San Francisco, CA" },
      phone: { label: "Phone", value: "+91 987-654-3210" },
      email: { label: "Email", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 7PM IST"] },
    },
    formSubjects: ["CRM Demo", "Custom Integration", "Sales Inquiry", "Product Feedback", "Careers"],
    formSubmitLabel: "Contact CoreSphere",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "CoreSphere questions",
    items: [
      { question: "Who is CoreSphere for?", answer: "Growing businesses, agencies & internal teams seeking a flexible CRM that adapts to their work." },
      { question: "Can I migrate data from another CRM or Excel?", answer: "Yes! CoreSphere supports quick data import via CSV or spreadsheet upload." },
      { question: "Is my data secure?", answer: "Absolutely. We prioritize privacy; all data is encrypted in transit and stored securely." },
      { question: "Does CoreSphere support mobile devices?", answer: "Yes, our interface is fully responsive and works on any screen size." },
      { question: "How is CoreSphere different?", answer: "We balance enterprise capabilities with the simplicity and speed growing teams need—no more bulky CRMs." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "CoreSphere",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "Github", href: "https://github.com/chiragdodiya" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
        ],
      },
    ],
    copyright: "\u00a9 2026 CoreSphere CRM.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "CoreSphere",
    routes: [
      { href: "/#testimonials", label: "Stories" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "CoreSphere preview" },
    features: [
      { title: "Role-based CRM", description: "Powerful yet friendly system for managing contacts and deals." },
      { title: "Modern stack", description: "Built on Next.js, TypeScript, and production best practices." },
      { title: "Deploy instantly", description: "No-fuss, fast onboarding for your team." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "View on GitHub" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}