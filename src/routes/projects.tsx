import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "프로젝트 — 김신라" },
      {
        name: "description",
        content: "역할, 기여, 사용한 도구, 결과를 함께 정리한 주요 프로젝트들. 카드를 누르면 자세한 내용을 볼 수 있습니다.",
      },
      { property: "og:title", content: "프로젝트 — 김신라" },
      { property: "og:description", content: "역할과 결과 중심의 주요 작업." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl animate-fade-up">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">프로젝트</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl text-foreground tracking-tight">
          출시된 작업, 그리고 그 맥락.
        </h1>
        <p className="mt-4 text-[15px] text-muted-foreground">
          각 카드는 제가 맡은 역할, 책임진 기여, 그리고 의미 있었던 결과를 보여줍니다. 카드를 누르면
          전체 이야기를 읽어볼 수 있습니다.
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
              <p className="font-display text-xl text-foreground tracking-tight">{p.name}</p>
              <span className="text-xs text-muted-foreground">{p.year}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>

            <dl className="mt-5 grid grid-cols-2 gap-4 text-xs">
              <div>
                <dt className="text-muted-foreground/70 uppercase tracking-[0.14em] text-[10px]">역할</dt>
                <dd className="mt-1 text-foreground">{p.role}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground/70 uppercase tracking-[0.14em] text-[10px]">결과</dt>
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
          aria-label="닫기"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-xs text-muted-foreground">{project.year}</p>
        <h2 className="mt-1 font-display text-3xl text-foreground tracking-tight">{project.name}</h2>
        <p className="mt-3 text-[15px] text-muted-foreground">{project.summary}</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field label="역할" value={project.role} />
          <Field label="핵심 기여" value={project.contribution} />
          <Field label="사용 도구" value={project.tools.join(" · ")} />
          <Field label="결과" value={project.takeaway} />
        </div>

        <div className="mt-7 border-t border-border pt-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">상세</p>
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
