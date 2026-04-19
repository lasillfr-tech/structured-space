import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, BookOpen, ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "연락처 — 김신라" },
      {
        name: "description",
        content: "이메일, 링크드인, 깃허브, 블로그를 통해 편하게 연락 주세요.",
      },
      { property: "og:title", content: "연락처 — 김신라" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    label: "이메일",
    value: "lasillfr@gmail.com",
    href: "mailto:lasillfr@gmail.com",
    Icon: Mail,
    description: "프로젝트 문의나 협업 제안에 가장 빠릅니다.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/김신라",
    href: "https://linkedin.com/in/김신라",
    Icon: Linkedin,
    description: "이력과 추천사를 확인할 수 있습니다.",
  },
  {
    label: "GitHub",
    value: "github.com/lasillfr-tech",
    href: "https://github.com/lasillfr-tech",
    Icon: Github,
    description: "오픈소스 실험과 사이드 프로젝트.",
  },
  {
    label: "블로그",
    value: "준비 중",
    href: "#",
    Icon: BookOpen,
    description: "지식 관리와 AI에 대한 글.",
  },
] as const;

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

function ContactPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="site-container">
        {/* Page header */}
        <Reveal>
          <p className="section-label text-muted-foreground/50 mb-6">연락처</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-heading font-display text-foreground max-w-3xl">
            편하게 대화 나눠요.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-[15px] text-muted-foreground max-w-lg leading-relaxed">
            프로덕트 엔지니어링 역할, 협업 제안, 그리고 차분하고 유용한 소프트웨어를 만드는
            방식에 대한 대화는 언제든 환영합니다.
          </p>
        </Reveal>

        {/* Primary CTA — email */}
        <Reveal delay={0.25} className="mt-14 md:mt-16">
          <a
            href="mailto:lasillfr@gmail.com"
            className="group inline-flex items-center gap-3 border-b border-border/60 pb-4 hover:border-foreground transition-colors duration-400"
          >
            <span className="text-[clamp(1.2rem,3vw,2rem)] font-display text-foreground group-hover:text-accent transition-colors duration-300">
              lasillfr@gmail.com
            </span>
            <ArrowUpRight
              size={20}
              className="text-muted-foreground/50 group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
            />
          </a>
        </Reveal>

        {/* Channel list */}
        <div className="mt-20 md:mt-24">
          {channels.map((ch, i) => (
            <Reveal key={ch.label} delay={i * 0.07}>
              <div className="border-t border-border/40">
                <a
                  href={ch.href}
                  target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between py-6 md:py-7"
                >
                  <div className="flex items-center gap-5 md:gap-8">
                    {/* Icon */}
                    <span className="flex h-9 w-9 items-center justify-center border border-border/50 text-muted-foreground/60 group-hover:border-foreground/40 group-hover:text-foreground transition-all duration-300">
                      <ch.Icon size={15} />
                    </span>

                    {/* Label + description */}
                    <div>
                      <p className="text-[15px] font-medium text-foreground mb-0.5">
                        {ch.label}
                      </p>
                      <p className="text-[13px] text-muted-foreground/60">
                        {ch.description}
                      </p>
                    </div>
                  </div>

                  {/* Value + arrow */}
                  <div className="hidden sm:flex items-center gap-4">
                    <span className="text-[13px] text-muted-foreground/50 group-hover:text-muted-foreground transition-colors duration-300">
                      {ch.value}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-muted-foreground/30 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                    />
                  </div>
                </a>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border/40" />
        </div>

        {/* Closing note */}
        <Reveal delay={0.15} className="mt-16 md:mt-20">
          <p className="text-[13px] text-muted-foreground/50 max-w-md leading-relaxed">
            가장 빠른 방법은 작업 중인 내용에 대한 짧은 메모를 이메일로 보내주시는 것입니다.
            보통 24시간 내에 답변드립니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
