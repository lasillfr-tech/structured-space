import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Github, BookOpen, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "연락처 — 김신라" },
      {
        name: "description",
        content: "이메일, 링크드인, 깃허브, 블로그를 통해 편하게 연락 주세요.",
      },
      { property: "og:title", content: "연락처 — 김신라" },
      { property: "og:description", content: "이메일, 링크드인, 깃허브, 블로그." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    label: "이메일",
    value: "lasillfr@gmail.com",
    href: "mailto:lasillfr@gmail.com",
    icon: Mail,
    description: "프로젝트 문의나 협업 제안에 가장 좋습니다.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/김신라",
    href: "https://linkedin.com/in/김신라",
    icon: Linkedin,
    description: "이력과 추천사를 확인할 수 있습니다.",
  },
  {
    label: "GitHub",
    value: "github.com/lasillfr-tech",
    href: "https://github.com/lasillfr-tech",
    icon: Github,
    description: "오픈소스 실험과 사이드 프로젝트.",
  },
  {
    label: "블로그",
    value: "블로그 준비 중",
    href: "#",
    icon: BookOpen,
    description: "지식 관리와 AI에 대한 글.",
  },
];

function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="max-w-2xl animate-fade-up">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">연락처</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl text-foreground tracking-tight">
          편하게 대화 나눠요.
        </h1>
        <p className="mt-4 text-[15px] text-muted-foreground">
          프로덕트 엔지니어링 역할, 협업 제안, 그리고 차분하고 유용한 소프트웨어를 만드는 방식에
          대한 대화는 언제든 환영합니다.
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
        <p className="font-display text-2xl text-foreground tracking-tight">이메일이 더 편하신가요?</p>
        <p className="mt-2 text-sm text-muted-foreground">
          가장 빠른 방법은 작업 중인 내용에 대한 짧은 메모를 보내주시는 것입니다.
        </p>
        <a
          href="mailto:lasillfr@gmail.com"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-foreground/90"
        >
          lasillfr@gmail.com
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
