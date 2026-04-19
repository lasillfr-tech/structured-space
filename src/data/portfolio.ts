export type Project = {
  slug: string;
  name: string;
  summary: string;
  role: string;
  contribution: string;
  tools: string[];
  takeaway: string;
  year: string;
  detail: string;
};

export const projects: Project[] = [
  {
    slug: "atlas-design-system",
    name: "Atlas Design System",
    summary:
      "Cross-product design system unifying 12 internal tools into one consistent experience.",
    role: "Lead Frontend Engineer",
    contribution:
      "Architected token pipeline, built 60+ accessible React components, and led adoption across 5 teams.",
    tools: ["React", "TypeScript", "Tailwind", "Storybook", "Figma"],
    takeaway: "Reduced UI build time by 38% and design QA tickets by half.",
    year: "2024",
    detail:
      "Atlas began as a fragmented set of UI patterns across product teams. I led the consolidation into a single system: defined the design token architecture (color, type, spacing, motion), built the headless component primitives, and ran weekly office hours to support adoption. The rollout shipped across five teams over six months and now powers 12 products.",
  },
  {
    slug: "north-analytics",
    name: "North Analytics",
    summary:
      "Realtime analytics dashboard for operations teams managing distributed logistics fleets.",
    role: "Product Engineer",
    contribution:
      "Designed the data model, built streaming UI, and shipped customizable dashboards from zero to GA.",
    tools: ["React", "TanStack Query", "Postgres", "WebSockets"],
    takeaway: "Cut average issue-detection time from 14 minutes to under 90 seconds.",
    year: "2023",
    detail:
      "North replaced a patchwork of spreadsheets and notification scripts with a single live operations view. I built the dashboard composer, real-time event pipeline integration, and the alerting rules engine. Used daily by 200+ operators across three regions.",
  },
  {
    slug: "fieldnote",
    name: "Fieldnote",
    summary:
      "Lightweight research note tool that turns raw interview transcripts into structured insights.",
    role: "Founding Engineer",
    contribution:
      "Built the entire web app: editor, AI-assisted tagging, and shareable insight boards.",
    tools: ["React", "TypeScript", "Edge Functions", "OpenAI"],
    takeaway: "Onboarded 1,200 researchers in the first quarter post-launch.",
    year: "2024",
    detail:
      "Fieldnote helps qualitative researchers move from transcript to insight without losing nuance. I designed the block-based editor, integrated streaming AI for tag suggestions, and built collaborative insight boards. Shipped from prototype to public launch in ten weeks.",
  },
  {
    slug: "harbor-payments",
    name: "Harbor Payments",
    summary: "Embedded payment flows for marketplaces handling cross-border settlements.",
    role: "Senior Engineer",
    contribution:
      "Owned the checkout SDK, refactored the state machine, and improved conversion across 4 currencies.",
    tools: ["TypeScript", "Stripe", "XState", "Vite"],
    takeaway: "Lifted checkout completion by 11% and reduced support tickets by 27%.",
    year: "2022",
    detail:
      "Harbor's checkout had grown organically and was hard to extend. I rebuilt the state machine, isolated the SDK from product UI, and added progressive disclosure for payment methods. The new flow shipped to all marketplaces over two months with no regressions.",
  },
];

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Engineering & Domain",
    description: "Core areas where I do my deepest work.",
    skills: [
      "Frontend Architecture",
      "Design Systems",
      "Product Engineering",
      "Realtime UI",
      "Performance",
      "Accessibility",
    ],
  },
  {
    title: "Software & Tools",
    description: "Tools I reach for daily.",
    skills: [
      "React",
      "TypeScript",
      "TanStack Router",
      "Tailwind CSS",
      "Node.js",
      "Postgres",
      "Figma",
      "Vite",
    ],
  },
  {
    title: "Technical Capabilities",
    description: "Cross-cutting strengths I bring to a team.",
    skills: [
      "System Design",
      "API Design",
      "Testing Strategy",
      "Observability",
      "DX Tooling",
      "Technical Writing",
    ],
  },
  {
    title: "Communication & Work Style",
    description: "How I collaborate.",
    skills: [
      "Structured Thinking",
      "Cross-functional Partnership",
      "Mentorship",
      "Async-first",
      "Calm under pressure",
      "Bias for clarity",
    ],
  },
];
