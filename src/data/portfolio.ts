export type Project = {
  slug: string;
  name: string;
  summary: string;
  role: string;
  contribution: string;
  tools: string[];
  takeaway: string;
  year: string;
  detail: string;
};

export const projects: Project[] = [
  {
    slug: "atlas-design-system",
    name: "Atlas 디자인 시스템",
    summary: "12개 사내 도구의 UI를 하나의 일관된 경험으로 통합한 크로스 프로덕트 디자인 시스템.",
    role: "리드 프론트엔드 엔지니어",
    contribution:
      "토큰 파이프라인 설계, 60개 이상의 접근성 React 컴포넌트 구축, 5개 팀의 도입을 주도.",
    tools: ["React", "TypeScript", "Tailwind", "Storybook", "Figma"],
    takeaway: "UI 구축 시간 38% 단축, 디자인 QA 티켓 절반 감소.",
    year: "2024",
    detail:
      "Atlas는 팀별로 흩어져 있던 UI 패턴을 하나로 모으는 작업에서 시작되었습니다. 토큰 아키텍처(컬러, 타이포, 스페이싱, 모션)를 정의하고, 헤드리스 컴포넌트 프리미티브를 구축했으며, 매주 오피스 아워를 운영해 도입을 도왔습니다. 6개월에 걸쳐 5개 팀에 롤아웃되었고, 현재 12개 프로덕트에서 사용 중입니다.",
  },
  {
    slug: "north-analytics",
    name: "North Analytics",
    summary: "분산된 물류 차량을 운영하는 팀을 위한 실시간 분석 대시보드.",
    role: "프로덕트 엔지니어",
    contribution: "데이터 모델 설계, 스트리밍 UI 구축, 커스터마이저블 대시보드를 0에서 GA까지 출시.",
    tools: ["React", "TanStack Query", "Postgres", "WebSockets"],
    takeaway: "이슈 감지 평균 시간을 14분에서 90초 미만으로 단축.",
    year: "2023",
    detail:
      "스프레드시트와 알림 스크립트로 흩어져 있던 운영 환경을 하나의 라이브 뷰로 대체했습니다. 대시보드 컴포저, 실시간 이벤트 파이프라인, 알림 룰 엔진을 구축했으며, 현재 3개 지역에서 200명 이상의 운영자가 매일 사용하고 있습니다.",
  },
  {
    slug: "fieldnote",
    name: "Fieldnote",
    summary: "인터뷰 원문을 구조화된 인사이트로 바꿔주는 가벼운 리서치 노트 도구.",
    role: "창업 엔지니어",
    contribution: "에디터, AI 보조 태깅, 공유 가능한 인사이트 보드까지 웹 앱 전체를 개발.",
    tools: ["React", "TypeScript", "Edge Functions", "OpenAI"],
    takeaway: "런칭 후 첫 분기에 1,200명의 리서처가 온보딩.",
    year: "2024",
    detail:
      "Fieldnote는 정성 리서처가 인터뷰 원문에서 인사이트로 넘어갈 때 뉘앙스를 잃지 않도록 돕습니다. 블록 기반 에디터를 설계하고, 스트리밍 AI 태그 추천을 통합했으며, 협업 인사이트 보드를 구축했습니다. 프로토타입에서 퍼블릭 런칭까지 10주가 걸렸습니다.",
  },
  {
    slug: "harbor-payments",
    name: "Harbor Payments",
    summary: "국가 간 정산을 처리하는 마켓플레이스를 위한 임베디드 결제 플로우.",
    role: "시니어 엔지니어",
    contribution: "체크아웃 SDK 오너십, 상태 머신 리팩토링, 4개 통화에서 전환율 개선.",
    tools: ["TypeScript", "Stripe", "XState", "Vite"],
    takeaway: "체크아웃 완료율 11% 상승, 지원 티켓 27% 감소.",
    year: "2022",
    detail:
      "Harbor의 체크아웃은 유기적으로 자라났고 확장하기 어려운 상태였습니다. 상태 머신을 다시 작성하고, SDK를 프로덕트 UI에서 분리했으며, 결제 수단을 점진적으로 노출하도록 개선했습니다. 새 플로우는 두 달에 걸쳐 모든 마켓플레이스에 무회귀로 출시되었습니다.",
  },
];

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "엔지니어링 & 도메인",
    description: "가장 깊이 있게 일하는 핵심 영역.",
    skills: [
      "프론트엔드 아키텍처",
      "디자인 시스템",
      "프로덕트 엔지니어링",
      "실시간 UI",
      "퍼포먼스",
      "접근성",
    ],
  },
  {
    title: "소프트웨어 & 도구",
    description: "매일 손에 잡는 도구들.",
    skills: [
      "React",
      "TypeScript",
      "TanStack Router",
      "Tailwind CSS",
      "Node.js",
      "Postgres",
      "Figma",
      "Vite",
    ],
  },
  {
    title: "기술 역량",
    description: "팀에 가져오는 횡단적 강점.",
    skills: [
      "시스템 설계",
      "API 설계",
      "테스트 전략",
      "옵저버빌리티",
      "DX 툴링",
      "기술 문서화",
    ],
  },
  {
    title: "커뮤니케이션 & 일하는 방식",
    description: "어떻게 협업하는가.",
    skills: [
      "구조적 사고",
      "크로스펑셔널 협업",
      "멘토링",
      "비동기 우선",
      "안정감 있는 태도",
      "명확함을 향한 편향",
    ],
  },
];
