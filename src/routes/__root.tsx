import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LenisProvider } from "@/components/LenisProvider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md">
        <p className="section-label text-muted-foreground mb-4">404</p>
        <h1 className="text-heading font-display text-foreground">페이지를 찾을 수 없습니다</h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          찾으시는 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-foreground border border-border px-5 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300"
          >
            홈으로 가기
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "김신라 — 프로덕트 엔지니어 포트폴리오" },
      {
        name: "description",
        content: "정리된 사고, 정성스러운 빌드. 김신라의 포트폴리오.",
      },
      { name: "author", content: "김신라" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "김신라 — 프로덕트 엔지니어" },
      { property: "og:description", content: "정리된 사고, 정성스러운 빌드." },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LenisProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </LenisProvider>
  );
}
