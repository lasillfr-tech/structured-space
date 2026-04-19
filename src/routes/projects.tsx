import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Jamie Park" },
      {
        name: "description",
        content:
          "Selected projects with role, contribution, tools, and outcomes. Click any project for the full breakdown.",
      },
      { property: "og:title", content: "Projects — Jamie Park" },
      { property: "og:description", content: "Selected work with role and outcomes." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl animate-fade-up">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Projects</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl text-foreground">
          Work that shipped, with the context.
        </h1>
        <p className="mt-4 text-[15px] text-muted-foreground">
          Each card shows the role I held, the contribution I owned, and the outcome that mattered.
          Click any project to read the full story.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <button
            key={p.slug}
            onClick={() => setActive(p)}
            className="group text-left rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] hover:border-primary/30"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-display text-xl text-foreground">{p.name}</p>
              <span className="text-xs text-muted-foreground">{p.year}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>

            <dl className="mt-5 grid grid-cols-2 gap-4 text-xs">
              <div>
                <dt className="text-muted-foreground/70 uppercase tracking-[0.14em] text-[10px]">Role</dt>
                <dd className="mt-1 text-foreground">{p.role}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground/70 uppercase tracking-[0.14em] text-[10px]">Outcome</dt>
                <dd className="mt-1 text-foreground line-clamp-2">{p.takeaway}</dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/30 px-4 py-6 backdrop-blur-sm md:items-center"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)] animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-xs text-muted-foreground">{project.year}</p>
        <h2 className="mt-1 font-display text-3xl text-foreground">{project.name}</h2>
        <p className="mt-3 text-[15px] text-muted-foreground">{project.summary}</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field label="Role" value={project.role} />
          <Field label="Key contribution" value={project.contribution} />
          <Field label="Tools" value={project.tools.join(" · ")} />
          <Field label="Result" value={project.takeaway} />
        </div>

        <div className="mt-7 border-t border-border pt-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Detail</p>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/90">{project.detail}</p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-1.5 text-sm text-foreground">{value}</p>
    </div>
  );
}
