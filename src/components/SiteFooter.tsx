import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-0">
      <div className="site-container py-14 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
        >
          {/* Left — identity */}
          <div>
            <p className="font-display text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-none tracking-tight mb-4">
              김신라
            </p>
            <p className="text-sm text-muted-foreground">
              정리된 사고, 정성스러운 빌드.
            </p>
          </div>

          {/* Right — links */}
          <nav className="flex flex-col md:items-end gap-2 text-[13px] text-muted-foreground">
            {[
              { to: "/projects", label: "프로젝트" },
              { to: "/skills",   label: "스킬"     },
              { to: "/contact",  label: "연락처"   },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="hover:text-foreground transition-colors duration-200 hover-line w-fit"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>

        {/* Bottom row */}
        <div className="mt-14 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="section-label text-muted-foreground/40">
            © {new Date().getFullYear()} 김신라. All rights reserved.
          </p>
          <p className="section-label text-muted-foreground/30">
            PORTFOLIO — 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
