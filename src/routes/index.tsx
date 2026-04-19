import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

/* ─── Shared easing ──────────────────────────────────────── */
const EASE = [0.16, 1, 0.3, 1] as const;

/* ─── Route meta ─────────────────────────────────────────── */
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "김신라 — 프로덕트 엔지니어 포트폴리오" },
      {
        name: "description",
        content:
          "김신라의 개인 포트폴리오. 정리된 사고와 정성스러운 빌드. 프로젝트, 스킬, 연락처를 한 곳에서 확인하세요.",
      },
      { property: "og:title", content: "김신라 — 프로덕트 엔지니어" },
      { property: "og:description", content: "정리된 사고, 정성스러운 빌드." },
    ],
  }),
  component: Index,
});

/* ─── Hero line — clipping reveal animation ─────────────── */
function HeroLine({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, ease: EASE, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─── Scroll-reveal wrapper ──────────────────────────────── */
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.95, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section header row ─────────────────────────────────── */
function SectionMeta({ index, label }: { index: string; label: string }) {
  return (
    <Reveal className="flex items-center gap-5 mb-16 md:mb-20">
      <span className="section-label text-muted-foreground/50 font-mono">{index}</span>
      <div className="flex-1 h-px bg-border/40" />
      <span className="section-label text-muted-foreground/50">{label}</span>
    </Reveal>
  );
}

/* ─── Work section — single project row ─────────────────── */
function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.07}>
      <div className="border-t border-border/40 project-row">
        {/* Row header */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full text-left group py-6 md:py-8"
          aria-expanded={open}
        >
          <div className="grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[3.5rem_1fr_auto] items-baseline gap-4">
            <span className="font-mono text-[11px] text-muted-foreground/50 tracking-[0.1em] pt-1">
              0{index + 1}
            </span>
            <span className="project-row-title text-subheading font-display text-foreground">
              {project.name}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-[12px] text-muted-foreground/60 hidden sm:block">
                {project.year}
              </span>
              <motion.span
                animate={{ rotate: open ? 135 : 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex items-center justify-center text-muted-foreground/50 group-hover:text-foreground transition-colors duration-300"
              >
                <ArrowUpRight size={18} />
              </motion.span>
            </div>
          </div>
        </button>

        {/* Expand panel */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="pb-10 pl-10 md:pl-14 grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Summary */}
                <div>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>
                  <p className="mt-5 text-[13px] text-muted-foreground/70 leading-relaxed">
                    {project.contribution}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-5">
                  <div>
                    <p className="section-label text-muted-foreground/40 mb-2">결과</p>
                    <p className="text-[14px] text-foreground leading-relaxed">
                      {project.takeaway}
                    </p>
                  </div>
                  <div>
                    <p className="section-label text-muted-foreground/40 mb-3">사용 기술</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[11px] border border-border/50 px-2.5 py-1 text-muted-foreground/70 tracking-wide"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

/* ─── Homepage ───────────────────────────────────────────── */
function Index() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — Full viewport, staggered text reveal
      ══════════════════════════════════════════ */}
      <section className="relative flex min-h-[100svh] flex-col">
        <div className="site-container flex flex-1 flex-col justify-between pt-28 pb-12 md:pt-32 md:pb-14">

          {/* Top label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-label text-muted-foreground/50"
          >
            PORTFOLIO — 2025
          </motion.div>

          {/* Main title — line-by-line clipping reveal */}
          <div className="mt-auto mb-auto flex flex-col">
            <HeroLine
              delay={0.35}
              className="text-display font-display text-foreground"
            >
              정리된 사고
            </HeroLine>
            <HeroLine
              delay={0.5}
              className="text-display font-display text-muted-foreground/50"
            >
              정성스러운
            </HeroLine>
            <HeroLine
              delay={0.65}
              className="text-display font-display text-foreground"
            >
              빌드
            </HeroLine>
          </div>

          {/* Bottom row — name + scroll cue */}
          <div className="flex items-end justify-between mt-12 md:mt-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
              className="space-y-1.5"
            >
              <p className="text-[15px] text-foreground font-medium">김신라</p>
              <p className="text-[13px] text-muted-foreground">
                프로덕트 엔지니어 · 디자인 시스템 · 프론트엔드 아키텍처
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col items-center gap-2 text-muted-foreground/50"
            >
              <span className="section-label">SCROLL</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="w-px h-8 bg-current opacity-40"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT — Scroll-reveal editorial layout
      ══════════════════════════════════════════ */}
      <section id="about" className="scroll-mt-20 border-t border-border/40 py-24 md:py-32">
        <div className="site-container">
          <SectionMeta index="01" label="소개" />

          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            {/* Left — sticky label */}
            <div className="md:col-span-4">
              <Reveal>
                <h2 className="text-heading font-display text-foreground leading-none">
                  구조와<br />정성을<br />함께 담아<br />만듭니다.
                </h2>
              </Reveal>
            </div>

            {/* Right — body text, staggered */}
            <div className="md:col-span-7 md:col-start-6 space-y-7">
              {[
                "저는 명료하고, 차분하고, 사려 깊은 인터페이스에 집중하는 프로덕트 엔지니어입니다. 디자인 시스템, 프론트엔드 아키텍처, 그리고 팀이 안정적으로 출시하는 방식에 대한 관심을 바탕으로 일합니다.",
                "저는 복잡한 것을 당연한 것처럼 느껴지게 만드는 일을 좋아합니다. 먼저 모델을 적고, 스케치하고, 작은 단위로 신중하게 출시하면서 팀이 늘 다음 단계를 알 수 있도록 만드는 편을 선호합니다.",
                "조용한 오너십, 단단한 글쓰기, 그리고 '이건 좀 어수선하다'에서 '이건 그냥 잘 된다'로 팀을 이끌어 본 경험을 가져옵니다.",
              ].map((text, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground">{text}</p>
                </Reveal>
              ))}

              <Reveal delay={0.35}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-4 text-[13px] text-foreground hover:text-accent transition-colors duration-300 hover-line"
                >
                  연락하기 <ArrowUpRight size={14} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SELECTED WORK — Numbered editorial list
      ══════════════════════════════════════════ */}
      <section className="border-t border-border/40 py-24 md:py-32">
        <div className="site-container">
          <SectionMeta index="02" label="선택된 작업" />

          <div>
            {projects.map((project, i) => (
              <ProjectRow key={project.slug} project={project} index={i} />
            ))}
            {/* Bottom rule */}
            <div className="border-t border-border/40" />
          </div>

          <Reveal delay={0.15} className="mt-12 flex justify-end">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-300 hover-line"
            >
              모든 프로젝트 <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VISION — Full-width centered quote
      ══════════════════════════════════════════ */}
      <section
        id="vision"
        className="border-t border-border/40 py-32 md:py-44"
      >
        <div className="site-container">
          <SectionMeta index="03" label="방향성" />

          <div className="max-w-5xl">
            <Reveal>
              <blockquote className="text-heading font-display text-foreground leading-[1.05]">
                "소프트웨어는 소음을 줄여야 한다&nbsp;—&nbsp;더하는 게 아니라."
              </blockquote>
            </Reveal>

            <Reveal delay={0.15} className="mt-8 md:mt-10">
              <p className="text-[15px] text-muted-foreground max-w-xl leading-relaxed">
                저는 사용자의 주의를 존중하는 도구를 만드는 팀에 끌립니다. 다음 챕터는 정성,
                퍼포먼스, 명료함이 동등하게 중요한 프로덕트 표면을 이끌어 가는 일이라고
                생각합니다.
              </p>
            </Reveal>

            <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-[13px] font-medium bg-foreground text-background px-6 py-3 hover:bg-accent transition-colors duration-400"
              >
                프로젝트 보기
                <ArrowUpRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[13px] text-foreground border border-border/60 px-6 py-3 hover:bg-secondary transition-colors duration-300"
              >
                연락하기
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
