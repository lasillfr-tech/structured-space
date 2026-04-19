import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass } from "lucide-react";
import { MindMap } from "@/components/MindMap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "박지민 — 프로덕트 엔지니어 포트폴리오" },
      {
        name: "description",
        content:
          "박지민의 개인 포트폴리오. 정리된 사고와 정성스러운 빌드. 프로젝트, 스킬, 연락처를 한 곳에서 확인하세요.",
      },
      { property: "og:title", content: "박지민 — 프로덕트 엔지니어 포트폴리오" },
      { property: "og:description", content: "정리된 사고, 정성스러운 빌드." },
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
            <h1 className="mt-5 font-display text-4xl md:text-6xl text-foreground leading-[1.15] max-w-3xl tracking-tight">
              제가 어떻게 생각하고, 만들고, 출시하는지
              <br className="hidden md:block" /> 한눈에 보여드릴게요.
            </h1>
            <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground">
              노드 위에 마우스를 올려 미리 보거나, 클릭해서 해당 섹션으로 이동해 보세요.
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
              01 · 소개
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground tracking-tight">
              구조와 정성을 함께 담아 만듭니다.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              저는 명료하고, 차분하고, 사려 깊은 인터페이스에 집중하는 프로덕트 엔지니어입니다.
              디자인 시스템, 프론트엔드 아키텍처, 그리고 팀이 안정적으로 출시하는 방식에 대한
              관심을 바탕으로 일합니다.
            </p>
            <p>
              저는 복잡한 것을 당연한 것처럼 느껴지게 만드는 일을 좋아합니다. 먼저 모델을 적고,
              스케치하고, 작은 단위로 신중하게 출시하면서 팀이 늘 다음 단계를 알 수 있도록
              만드는 편을 선호합니다.
            </p>
            <p>
              조용한 오너십, 단단한 글쓰기, 그리고 "이건 좀 어수선하다"에서 "이건 그냥 잘 된다"로
              팀을 이끌어 본 경험을 가져옵니다.
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
                02 · 주요 작업
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground tracking-tight">
                지금까지 출시한 몇 가지.
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors"
            >
              모든 프로젝트 <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              { name: "Atlas 디자인 시스템", year: "2024", desc: "12개 프로덕트를 통합한 디자인 시스템." },
              { name: "North Analytics", year: "2023", desc: "분산된 차량을 위한 실시간 운영 대시보드." },
              { name: "Fieldnote", year: "2024", desc: "리서치 노트를 구조화된 인사이트로." },
              { name: "Harbor Payments", year: "2022", desc: "국가 간 마켓플레이스를 위한 임베디드 결제." },
            ].map((p) => (
              <Link
                key={p.name}
                to="/projects"
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] hover:border-primary/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">{p.year}</p>
                    <p className="mt-1 font-display text-xl text-foreground tracking-tight">{p.name}</p>
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
            03 · 방향성
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-foreground leading-tight tracking-tight">
            "소프트웨어는 소음을 줄여야 한다 — 더하는 게 아니라."
          </h2>
          <p className="mt-6 text-sm md:text-base text-muted-foreground">
            저는 사용자의 주의를 존중하는 도구를 만드는 팀에 끌립니다. 다음 챕터는 정성, 퍼포먼스,
            명료함이 동등하게 중요한 프로덕트 표면을 이끌어 가는 일이라고 생각합니다.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-foreground/90"
            >
              프로젝트 보기
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              연락하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
