import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Github, BookOpen, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jamie Park" },
      {
        name: "description",
        content: "Get in touch via email, LinkedIn, GitHub, or the blog.",
      },
      { property: "og:title", content: "Contact — Jamie Park" },
      { property: "og:description", content: "Email, LinkedIn, GitHub, blog." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    label: "Email",
    value: "hello@jamiepark.dev",
    href: "mailto:hello@jamiepark.dev",
    icon: Mail,
    description: "Best for project inquiries and collaborations.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jamiepark",
    href: "https://linkedin.com/in/jamiepark",
    icon: Linkedin,
    description: "Professional background and recommendations.",
  },
  {
    label: "GitHub",
    value: "github.com/jamiepark",
    href: "https://github.com/jamiepark",
    icon: Github,
    description: "Open-source experiments and side projects.",
  },
  {
    label: "Blog",
    value: "jamiepark.dev/notes",
    href: "https://jamiepark.dev/notes",
    icon: BookOpen,
    description: "Notes on product engineering and design systems.",
  },
];

function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="max-w-2xl animate-fade-up">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl text-foreground">
          Let's start a conversation.
        </h1>
        <p className="mt-4 text-[15px] text-muted-foreground">
          I'm open to product engineering roles, collaborations, and thoughtful conversations about
          how teams build calm, useful software.
        </p>
      </div>

      <div className="mt-12 grid gap-3 sm:grid-cols-2">
        {channels.map((c, i) => {
          const Icon = c.icon;
          return (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] hover:border-primary/30 animate-fade-up"
              style={{ animationDelay: `${0.05 + i * 0.05}s` }}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-foreground">{c.label}</p>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground truncate">{c.value}</p>
                <p className="mt-2 text-xs text-muted-foreground">{c.description}</p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-14 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
        <p className="font-display text-2xl text-foreground">Prefer email?</p>
        <p className="mt-2 text-sm text-muted-foreground">
          The fastest way to reach me is a short note with what you're working on.
        </p>
        <a
          href="mailto:hello@jamiepark.dev"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-foreground/90"
        >
          hello@jamiepark.dev
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
