import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

const editorialPhotos = [
  {
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80",
    alt: "Concrete facade with geometric windows",
    caption: "Editorial frame 01",
    speed: 80,
    className: "aspect-[4/5] md:aspect-[5/6]",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
    alt: "Warm interior with curated furniture and texture",
    caption: "Editorial frame 02",
    speed: 110,
    className: "aspect-[16/10]",
  },
  {
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
    alt: "Architectural stairway with natural light",
    caption: "Editorial frame 03",
    speed: 95,
    className: "aspect-[3/4] md:aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    alt: "Soft-lit design workspace with books and chair",
    caption: "Editorial frame 04",
    speed: 130,
    className: "aspect-[16/11]",
  },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "김시라 포트폴리오" },
      {
        name: "description",
        content: "정리된 구조와 단단한 디테일로 제품 경험을 설계하는 프론트엔드 포트폴리오.",
      },
      { property: "og:title", content: "김시라 포트폴리오" },
      {
        property: "og:description",
        content: "텍스트와 이미지, 모션이 함께 흐르는 편집형 프론트엔드 포트폴리오.",
      },
    ],
  }),
  component: Index,
});

function HeroLine({
  children,
  delay,
  className = "",
}: {
  children: ReactNode;
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

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
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

function SectionMeta({ index, label }: { index: string; label: string }) {
  return (
    <Reveal className="mb-16 flex items-center gap-5 md:mb-20">
      <span className="section-label font-mono text-muted-foreground/50">{index}</span>
      <div className="h-px flex-1 bg-border/40" />
      <span className="section-label text-muted-foreground/50">{label}</span>
    </Reveal>
  );
}

function ParallaxPhoto({
  src,
  alt,
  caption,
  speed,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  speed: number;
  className?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -0.45, speed]);

  return (
    <div ref={ref} className={`group ${className}`}>
      <div className="relative overflow-hidden border border-border/40 bg-card">
        <motion.div style={{ y }} className="will-change-transform">
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            className="h-[115%] w-full scale-[1.04] object-cover saturate-[0.9] transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,8,7,0.12),rgba(9,8,7,0.45))]" />
      </div>
      <div className="mt-3 flex items-center justify-between gap-4">
        <span className="section-label text-muted-foreground/40">{caption}</span>
        <span className="section-label text-muted-foreground/25">Parallax</span>
      </div>
    </div>
  );
}

function EditorialPhotoBand() {
  return (
    <section className="border-t border-border/40 py-12 md:py-16">
      <div className="site-container">
        <Reveal className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          <ParallaxPhoto
            src={editorialPhotos[1].src}
            alt={editorialPhotos[1].alt}
            caption={editorialPhotos[1].caption}
            speed={editorialPhotos[1].speed}
            className={editorialPhotos[1].className}
            priority
          />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1">
            <ParallaxPhoto
              src={editorialPhotos[0].src}
              alt={editorialPhotos[0].alt}
              caption={editorialPhotos[0].caption}
              speed={editorialPhotos[0].speed}
              className={editorialPhotos[0].className}
            />
            <Reveal delay={0.12} className="flex items-end border border-border/40 p-6 md:p-8">
              <div>
                <p className="section-label text-muted-foreground/40">Visual rhythm</p>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                  텍스트만 이어지지 않도록 큰 사진 블록이 흐름을 끊고, 스크롤에서는 이미지가 한 박자
                  늦게 따라오며 편집적인 리듬을 만듭니다.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ImmersivePhotoSection() {
  return (
    <section className="border-t border-border/40 py-24 md:py-32">
      <div className="site-container grid items-start gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-4">
          <SectionMeta index="02" label="Image Direction" />
          <Reveal>
            <h2 className="text-heading font-display text-foreground leading-none">
              사진도
              <br />
              레이아웃의
              <br />
              일부처럼
              <br />
              움직입니다.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-8 max-w-sm">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Rezo Zero처럼 텍스트 섹션 사이에 대형 이미지를 편집적으로 배치하고, 이미지마다 다른
              이동값을 줘서 스크롤 깊이에 따라 감도가 달라지게 구성했습니다.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:col-span-8 md:grid-cols-[0.62fr_0.38fr]">
          <ParallaxPhoto
            src={editorialPhotos[3].src}
            alt={editorialPhotos[3].alt}
            caption={editorialPhotos[3].caption}
            speed={editorialPhotos[3].speed}
            className={editorialPhotos[3].className}
          />
          <div className="grid gap-6">
            <ParallaxPhoto
              src={editorialPhotos[2].src}
              alt={editorialPhotos[2].alt}
              caption={editorialPhotos[2].caption}
              speed={editorialPhotos[2].speed}
              className={editorialPhotos[2].className}
            />
            <Reveal delay={0.1} className="border border-border/40 p-6 md:p-7">
              <p className="section-label text-muted-foreground/40">Motion note</p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                이미지가 뷰포트 안에 들어오면 위에서 아래로 천천히 이동하고, hover에서는 확대를 아주
                약하게만 주어 무게감은 유지하면서 정적인 답답함만 덜어냈습니다.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.07}>
      <div className="project-row border-t border-border/40">
        <button
          onClick={() => setOpen((value) => !value)}
          className="group w-full py-6 text-left md:py-8"
          aria-expanded={open}
        >
          <div className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 md:grid-cols-[3.5rem_1fr_auto]">
            <span className="pt-1 font-mono text-[11px] tracking-[0.1em] text-muted-foreground/50">
              0{index + 1}
            </span>
            <span className="project-row-title text-subheading font-display text-foreground">
              {project.name}
            </span>
            <div className="flex items-center gap-4">
              <span className="hidden text-[12px] text-muted-foreground/60 sm:block">{project.year}</span>
              <motion.span
                animate={{ rotate: open ? 135 : 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex items-center justify-center text-muted-foreground/50 transition-colors duration-300 group-hover:text-foreground"
              >
                <ArrowUpRight size={18} />
              </motion.span>
            </div>
          </div>
        </button>

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
              <div className="grid gap-8 pb-10 pl-10 md:grid-cols-2 md:gap-12 md:pl-14">
                <div>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{project.summary}</p>
                  <p className="mt-5 text-[13px] leading-relaxed text-muted-foreground/70">
                    {project.contribution}
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="mb-2 section-label text-muted-foreground/40">Outcome</p>
                    <p className="text-[14px] leading-relaxed text-foreground">{project.takeaway}</p>
                  </div>
                  <div>
                    <p className="mb-3 section-label text-muted-foreground/40">Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="border border-border/50 px-2.5 py-1 text-[11px] tracking-wide text-muted-foreground/70"
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

function Index() {
  return (
    <>
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
        <div className="absolute inset-x-0 top-24 -z-10 mx-auto h-[44rem] w-[min(92vw,74rem)] rounded-full bg-[radial-gradient(circle_at_center,rgba(188,153,112,0.18),rgba(16,15,13,0))] blur-3xl" />

        <div className="site-container flex flex-1 flex-col justify-between pt-28 pb-12 md:pt-32 md:pb-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-label text-muted-foreground/50"
          >
            PORTFOLIO / 2026
          </motion.div>

          <div className="my-auto grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="flex flex-col">
              <HeroLine delay={0.35} className="text-display font-display text-foreground">
                Structure,
              </HeroLine>
              <HeroLine delay={0.5} className="text-display font-display text-muted-foreground/50">
                image,
              </HeroLine>
              <HeroLine delay={0.65} className="text-display font-display text-foreground">
                motion.
              </HeroLine>
            </div>

            <Reveal delay={0.8} className="hidden lg:block">
              <ParallaxPhoto
                src={editorialPhotos[0].src}
                alt={editorialPhotos[0].alt}
                caption="Hero still"
                speed={70}
                className="aspect-[4/5]"
                priority
              />
            </Reveal>
          </div>

          <div className="mt-12 flex items-end justify-between md:mt-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
              className="max-w-md space-y-2"
            >
              <p className="text-[15px] font-medium text-foreground">김시라</p>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                프론트엔드와 사용자 경험 설계를 중심으로, 구조와 감도를 함께 다루는 인터페이스를
                만듭니다.
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
                className="h-8 w-px bg-current opacity-40"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <EditorialPhotoBand />

      <section id="about" className="scroll-mt-20 border-t border-border/40 py-24 md:py-32">
        <div className="site-container">
          <SectionMeta index="01" label="About" />

          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <Reveal>
                <h2 className="text-heading font-display leading-none text-foreground">
                  구조를 먼저
                  <br />
                  세우고,
                  <br />
                  감각은 그 위에
                  <br />
                  쌓습니다.
                </h2>
              </Reveal>
            </div>

            <div className="space-y-7 md:col-span-7 md:col-start-6">
              {[
                "복잡한 요구를 한 번에 크게 풀기보다, 핵심 구조를 먼저 정리하고 작은 단위로 선명하게 출시하는 방식을 선호합니다.",
                "프로젝트에서는 사용자 흐름, 인터랙션 리듬, 컴포넌트 일관성, 유지보수성을 함께 보며 화면이 오래 버티는 형태를 만듭니다.",
                "조용한 화면이어도 밀도가 느껴지도록 타이포그래피와 여백, 그리고 이미지가 등장하는 타이밍까지 세심하게 다룹니다.",
              ].map((text, index) => (
                <Reveal key={text} delay={index * 0.1}>
                  <p className="text-[15px] leading-[1.8] text-muted-foreground">{text}</p>
                </Reveal>
              ))}

              <Reveal delay={0.35}>
                <Link
                  to="/contact"
                  className="hover-line mt-4 inline-flex items-center gap-2 text-[13px] text-foreground transition-colors duration-300 hover:text-accent"
                >
                  연락하기 <ArrowUpRight size={14} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ImmersivePhotoSection />

      <section className="border-t border-border/40 py-24 md:py-32">
        <div className="site-container">
          <SectionMeta index="03" label="Selected Work" />

          <div>
            {projects.map((project, index) => (
              <ProjectRow key={project.slug} project={project} index={index} />
            ))}
            <div className="border-t border-border/40" />
          </div>

          <Reveal delay={0.15} className="mt-12 flex justify-end">
            <Link
              to="/projects"
              className="hover-line inline-flex items-center gap-2 text-[13px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              모든 프로젝트 <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="vision" className="border-t border-border/40 py-32 md:py-44">
        <div className="site-container">
          <SectionMeta index="04" label="Vision" />

          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_22rem] md:items-end">
            <div className="max-w-4xl">
              <Reveal>
                <blockquote className="text-heading font-display leading-[1.05] text-foreground">
                  "좋은 인터페이스는 시선을 빼앗기보다,
                  <br />
                  자연스럽게 다음 행동으로 밀어줍니다."
                </blockquote>
              </Reveal>

              <Reveal delay={0.15} className="mt-8 max-w-xl md:mt-10">
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  화면의 미감은 중요하지만, 결국 사용자의 집중을 지켜주는 구조가 먼저라고 생각합니다.
                  그래서 저는 보기 좋은 화면보다 머무르기 편한 화면을 만드는 데 더 큰 관심이 있습니다.
                </p>
              </Reveal>

              <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors duration-400 hover:bg-accent"
                >
                  프로젝트 보기
                  <ArrowUpRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-border/60 px-6 py-3 text-[13px] text-foreground transition-colors duration-300 hover:bg-secondary"
                >
                  연락하기
                </Link>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <ParallaxPhoto
                src={editorialPhotos[1].src}
                alt={editorialPhotos[1].alt}
                caption="Closing frame"
                speed={85}
                className="aspect-[4/5]"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
