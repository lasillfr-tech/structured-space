import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "프로젝트 — 김신라" },
      {
        name: "description",
        content: "역할, 기여, 사용한 도구, 결과를 함께 정리한 주요 프로젝트들.",
      },
      { property: "og:title", content: "프로젝트 — 김신라" },
    ],
  }),
  component: ProjectsPage,
});

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProjectsPage() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="site-container">
          {/* Page header */}
          <Reveal>
            <p className="section-label text-muted-foreground/50 mb-6">프로젝트</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-heading font-display text-foreground max-w-3xl">
              출시된 작업, 그리고 그 맥락.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-[15px] text-muted-foreground max-w-lg leading-relaxed">
              각 항목은 제가 맡은 역할, 책임진 기여, 그리고 의미 있었던 결과를 보여줍니다.
            </p>
          </Reveal>

          {/* Project list */}
          <div className="mt-20 md:mt-24">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <div className="border-t border-border/40 project-row">
                  <button
                    onClick={() => setActive(project)}
                    className="w-full text-left group py-7 md:py-9"
                  >
                    <div className="grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[3.5rem_1fr_auto] items-start gap-4">
                      {/* Number */}
                      <span className="font-mono text-[11px] text-muted-foreground/50 tracking-[0.1em] pt-1.5">
                        0{i + 1}
                      </span>

                      {/* Title + summary */}
                      <div>
                        <p className="project-row-title text-subheading font-display text-foreground group-hover:text-muted-foreground transition-colors duration-400">
                          {project.name}
                        </p>
                        <p className="mt-3 text-[13px] text-muted-foreground/70 max-w-xl leading-relaxed">
                          {project.summary}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-[11px] border border-border/40 px-2.5 py-0.5 text-muted-foreground/50"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Year + arrow */}
                      <div className="flex flex-col items-end gap-3 pt-1">
                        <span className="text-[12px] text-muted-foreground/50">
                          {project.year}
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="text-muted-foreground/40 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </button>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-border/40" />
          </div>
        </div>
      </section>

      {/* Detail modal */}
      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-end justify-center md:items-center bg-background/80 backdrop-blur-md px-4 py-6"
    >
      <motion.div
        key="panel"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-card border border-border/60 p-8 md:p-10"
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <p className="section-label text-muted-foreground/50 mb-3">{project.year}</p>
        <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] text-foreground tracking-tight leading-tight">
          {project.name}
        </h2>
        <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed">
          {project.summary}
        </p>

        {/* Fields */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 border-t border-border/40 pt-8">
          {[
            { label: "역할",       value: project.role         },
            { label: "핵심 기여",  value: project.contribution },
            { label: "사용 도구",  value: project.tools.join(" · ") },
            { label: "결과",       value: project.takeaway     },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="section-label text-muted-foreground/40 mb-2">{label}</p>
              <p className="text-[14px] text-foreground leading-relaxed">{value}</p>
            </div>
          ))}
        </div>

        {/* Detail */}
        <div className="mt-8 border-t border-border/40 pt-8">
          <p className="section-label text-muted-foreground/40 mb-4">상세</p>
          <p className="text-[15px] leading-[1.75] text-foreground/80">
            {project.detail}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
