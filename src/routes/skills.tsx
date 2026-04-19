import { createFileRoute } from "@tanstack/react-router";
import { skillGroups } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Jamie Park" },
      {
        name: "description",
        content:
          "Skills grouped by engineering domain, tools, technical capability, and work style.",
      },
      { property: "og:title", content: "Skills — Jamie Park" },
      { property: "og:description", content: "Engineering, tools, capabilities, and work style." },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl animate-fade-up">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Skills</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl text-foreground">
          What I've grown good at.
        </h1>
        <p className="mt-4 text-[15px] text-muted-foreground">
          A grouped view of where I do my deepest work, the tools I reach for daily, and the way I
          like to collaborate with a team.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, idx) => (
          <div
            key={group.title}
            className="rounded-xl border border-border bg-card p-7 animate-fade-up"
            style={{ animationDelay: `${0.05 + idx * 0.06}s` }}
          >
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-xl text-foreground">{group.title}</h2>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                0{idx + 1}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{group.description}</p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
