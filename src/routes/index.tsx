import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass } from "lucide-react";
import { MindMap } from "@/components/MindMap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jamie Park — Product Engineer Portfolio" },
      {
        name: "description",
        content:
          "Personal portfolio of Jamie Park: structured thinking, thoughtful building. Explore projects, skills, and ways to get in touch.",
      },
      { property: "og:title", content: "Jamie Park — Product Engineer Portfolio" },
      {
        property: "og:description",
        content: "Structured thinking, thoughtful building.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO — Mind Map */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-6 md:pt-16">
          <div className="flex flex-col items-center text-center animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <Compass className="h-3 w-3" />
              Portfolio · 2025
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl text-foreground leading-[1.05] max-w-3xl">
              A clearer way to see how I think, build, and ship.
            </h1>
            <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground">
              Hover any node to preview a section, or click to dive in.
            </p>
          </div>

          <div className="mt-8 md:mt-10">
            <MindMap />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              01 · About
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">
              Building with structure and care.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              I'm a product engineer focused on interfaces that feel clear, calm, and considered.
              My background blends design systems, frontend architecture, and a deep interest in
              how teams ship reliably together.
            </p>
            <p>
              I work best when the goal is to take something complex and make it feel obvious. I
              like writing things down, sketching the model first, and shipping in small, deliberate
              steps so the team always knows what's next.
            </p>
            <p>
              I bring quiet ownership, strong written communication, and a track record of helping
              teams move from "this is messy" to "this just works."
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK PREVIEW */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                02 · Selected Work
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">
                A few things I've shipped.
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors"
            >
              All projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              { name: "Atlas Design System", year: "2024", desc: "Unified design system across 12 products." },
              { name: "North Analytics", year: "2023", desc: "Realtime ops dashboard for distributed fleets." },
              { name: "Fieldnote", year: "2024", desc: "Research notes → structured insights." },
              { name: "Harbor Payments", year: "2022", desc: "Embedded checkout for cross-border marketplaces." },
            ].map((p) => (
              <Link
                key={p.name}
                to="/projects"
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] hover:border-primary/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">{p.year}</p>
                    <p className="mt-1 font-display text-xl text-foreground">{p.name}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="scroll-mt-24 border-t border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            03 · Vision
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-foreground leading-tight">
            "Software should reduce noise — not add to it."
          </h2>
          <p className="mt-6 text-sm md:text-base text-muted-foreground">
            I'm drawn to teams building tools that respect the user's attention. The next chapter
            for me is leading product surfaces where craft, performance, and clarity matter equally.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-foreground/90"
            >
              See projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
