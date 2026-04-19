import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "스킬 — 김신라" },
      {
        name: "description",
        content: "엔지니어링 도메인, 도구, 기술 역량, 일하는 방식.",
      },
      { property: "og:title", content: "스킬 — 김신라" },
    ],
  }),
  component: SkillsPage,
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.85, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SkillsPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="site-container">
        {/* Page header */}
        <Reveal>
          <p className="section-label text-muted-foreground/50 mb-6">스킬</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-heading font-display text-foreground max-w-2xl">
            잘하게 된 것들.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-[15px] text-muted-foreground max-w-lg leading-relaxed">
            가장 깊이 있게 일하는 영역, 매일 손에 잡는 도구, 팀과 함께 일할 때의 방식.
          </p>
        </Reveal>

        {/* Skill groups */}
        <div className="mt-20 md:mt-28 space-y-0">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.1}>
              <div className="border-t border-border/40 py-10 md:py-14 grid md:grid-cols-12 gap-8 md:gap-12">
                {/* Label column */}
                <div className="md:col-span-4">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-[11px] text-muted-foreground/40 tracking-[0.1em]">
                      0{gi + 1}
                    </span>
                    <h2 className="text-[15px] font-semibold text-foreground tracking-tight">
                      {group.title}
                    </h2>
                  </div>
                  <p className="text-[13px] text-muted-foreground/70 leading-relaxed pl-8">
                    {group.description}
                  </p>
                </div>

                {/* Skills column */}
                <div className="md:col-span-8">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    variants={{
                      hidden:  {},
                      visible: { transition: { staggerChildren: 0.05 } },
                    }}
                    className="flex flex-wrap gap-0"
                  >
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        variants={{
                          hidden:  { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                        }}
                        className="border-b border-r border-border/30 px-5 py-3 group cursor-default"
                      >
                        <span className="text-[14px] text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border/40" />
        </div>

        {/* Closing note */}
        <Reveal delay={0.2} className="mt-20 md:mt-24 max-w-2xl">
          <p className="text-[15px] text-muted-foreground/60 leading-relaxed italic">
            이 목록은 제가 현재 가장 깊이 일하고 있는 영역의 스냅샷입니다. 좋은 엔지니어는 언제나
            배우는 중이라고 생각합니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
