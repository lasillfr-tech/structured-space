import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <div>
          <p className="font-display text-xl text-foreground">Jamie Park</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Structured thinker. Thoughtful builder.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <Link to="/projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link to="/skills" className="hover:text-foreground transition-colors">
            Skills
          </Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          <span className="text-muted-foreground/70">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
