import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/projects", label: "프로젝트" },
  { to: "/skills",   label: "스킬"     },
  { to: "/contact",  label: "연락처"   },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border/40 bg-background/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="site-container flex h-16 items-center justify-between">
          {/* Monogram logo */}
          <Link to="/" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="flex h-7 w-7 items-center justify-center bg-foreground text-background text-[11px] font-bold tracking-tight transition-colors duration-300 group-hover:bg-accent">
              신
            </span>
            <span className="text-[13px] font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              김신라
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 text-[12px] font-medium text-foreground border border-border/60 px-5 py-2 hover:bg-foreground hover:text-background transition-all duration-400 tracking-wide"
          >
            연락하기
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="block h-px w-full bg-foreground origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.25 }}
              className="block h-px w-full bg-foreground origin-center"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="block h-px w-full bg-foreground origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-background md:hidden flex flex-col"
          >
            <nav className="flex flex-col justify-center flex-1 site-container gap-2">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="font-display text-[clamp(2.5rem,8vw,4rem)] text-muted-foreground/40 hover:text-foreground transition-colors duration-300 py-3 border-b border-border/30"
              >
                홈
              </Link>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-[clamp(2.5rem,8vw,4rem)] text-foreground hover:text-muted-foreground transition-colors duration-300 py-3 border-b border-border/30 block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="site-container pb-10">
              <p className="section-label text-muted-foreground/40">PORTFOLIO — 2025</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
