import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type NodeKey = "about" | "projects" | "skills" | "contact" | "vision";

type NodeDef = {
  key: NodeKey;
  label: string;
  preview: string;
  to: "/" | "/projects" | "/skills" | "/contact";
  hash?: string;
  x: number;
  y: number;
};

const CENTER = { x: 500, y: 310 };

const nodes: NodeDef[] = [
  { key: "about", label: "소개", preview: "배경과 관심사, 일하는 방식.", to: "/", hash: "about", x: 170, y: 150 },
  { key: "projects", label: "프로젝트", preview: "역할과 성과 중심의 주요 작업.", to: "/projects", x: 830, y: 150 },
  { key: "skills", label: "스킬", preview: "엔지니어링, 도구, 그리고 일하는 방식.", to: "/skills", x: 170, y: 470 },
  { key: "contact", label: "연락처", preview: "이메일, 링크드인, 깃허브.", to: "/contact", x: 830, y: 470 },
  { key: "vision", label: "방향성", preview: "앞으로 나아가고자 하는 방향.", to: "/", hash: "vision", x: 500, y: 80 },
];

export function MindMap() {
  const [active, setActive] = useState<NodeKey | null>(null);

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 1000 620"
        className="block w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {nodes.map((n) => {
          const midX = (CENTER.x + n.x) / 2;
          const midY = (CENTER.y + n.y) / 2 - 30;
          const d = `M ${CENTER.x} ${CENTER.y} Q ${midX} ${midY} ${n.x} ${n.y}`;
          return (
            <path
              key={n.key}
              d={d}
              className={cn("mindmap-line animate-draw", active === n.key && "active")}
              style={{ animationDelay: `${0.2 + nodes.indexOf(n) * 0.12}s` }}
            />
          );
        })}

        <circle cx={CENTER.x} cy={CENTER.y} r="78" fill="none" stroke="var(--line)" strokeDasharray="2 4" opacity="0.5" />
        <circle cx={CENTER.x} cy={CENTER.y} r="120" fill="none" stroke="var(--line)" strokeDasharray="2 6" opacity="0.25" />

        {nodes.map((n) => (
          <g key={`dot-${n.key}`}>
            <circle
              cx={n.x}
              cy={n.y}
              r={active === n.key ? 5 : 3}
              fill={active === n.key ? "var(--node-hover)" : "var(--foreground)"}
              className="node-dot"
            />
          </g>
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto flex flex-col items-center text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="rounded-full bg-card px-6 py-5 shadow-[var(--shadow-elevated)] border border-border">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">PORTFOLIO</p>
            <p className="font-display text-3xl md:text-4xl text-foreground mt-1">김신라</p>
            <p className="text-xs text-muted-foreground mt-1">프로덕트 엔지니어 · 시스템 사고</p>
          </div>
        </div>
      </div>

      {nodes.map((n, i) => (
        <NodeCard
          key={n.key}
          node={n}
          isActive={active === n.key}
          onEnter={() => setActive(n.key)}
          onLeave={() => setActive((cur) => (cur === n.key ? null : cur))}
          delay={0.4 + i * 0.1}
        />
      ))}
    </div>
  );
}

function NodeCard({
  node,
  isActive,
  onEnter,
  onLeave,
  delay,
}: {
  node: NodeDef;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  delay: number;
}) {
  const left = (node.x / 1000) * 100;
  const top = (node.y / 620) * 100;

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 animate-fade-up"
      style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${delay}s` }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <Link
        to={node.to}
        hash={node.hash}
        className={cn(
          "group relative block rounded-xl border bg-card px-4 py-2.5 text-center shadow-[var(--shadow-soft)] transition-all duration-500",
          "hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] hover:border-primary/40",
          isActive ? "border-primary/40" : "border-border",
        )}
      >
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {node.key === "vision" ? "방향" : "섹션"}
        </p>
        <p className="text-sm font-medium text-foreground mt-0.5 whitespace-nowrap">
          {node.label}
        </p>

        <div
          className={cn(
            "pointer-events-none absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-lg border border-border bg-popover px-3 py-2 text-left text-xs text-muted-foreground shadow-[var(--shadow-elevated)] transition-all duration-300",
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
          )}
        >
          {node.preview}
        </div>
      </Link>
    </div>
  );
}
