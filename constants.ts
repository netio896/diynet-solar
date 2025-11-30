// constants.ts

// Brand name used throughout the app
export const BRAND_NAME = "Diynet Solar";

// Navigation items for the navbar
export const NAV_ITEMS = [
  { label: { zh: "首  页", en: "Home" }, href: "#hero" },
  { label: { zh: "服  务", en: "Services" }, href: "#services" },
  { label: { zh: "工  程  案  例", en: "Projects" }, href: "#projects" },
  { label: { zh: "关  于  我  们", en: "About" }, href: "#about" },
  { label: { zh: "联  系  我  们", en: "Contact" }, href: "#contact" },
  { label: { zh: "管  理  员  登  录", en: "Admin" }, href: "#admin" },
];

// Hero section content
export const HERO_CONTENT = {
  title: { zh: "光 伏 系 统", en: "Solar Systems" },
  subtitle: {
    zh: "从家庭到商业，我们只做能长期稳定运行的工程。",
    en: "From homes to small businesses, we focus on systems that run reliably for the long term.",
  },
  ctaPrimary: { zh: "获取工程方案", en: "Get a project plan" },
  ctaSecondary: { zh: "查看施工标准", en: "View installation standards" },
};

// About content
export const ABOUT_CONTENT = {
  intro: {
    zh: "我们是一支扎根曼德勒的工程团队，擅长光伏、储能、弱电与网络集成，所有方案以安全与长期可维护为第一优先。",
    en: "We are an engineering team in Mandalay focused on solar, storage, low-voltage, and network integration, prioritizing safety and long-term maintainability.",
  },
};

// Services offered by the company
export const SERVICES = [
  {
    id: "network",
    title: { zh: "家用 & 商业网络", en: "Home & Business Network Systems" },
    icon: "Network",
    points: [
      { zh: "全屋有线布线", en: "Whole-house wired cabling" },
      { zh: "Wi-Fi优化", en: "Wi-Fi optimization" },
      { zh: "NAS集成", en: "NAS integration" },
    ],
  },
  {
    id: "solar",
    title: { zh: "光伏发电 & 储能", en: "Solar PV & Battery Storage" },
    icon: "Sun",
    points: [
      { zh: "屋顶光伏", en: "Roof-mounted solar" },
      { zh: "电池储能", en: "Battery storage" },
      { zh: "远程监控", en: "Remote monitoring" },
    ],
  },
  // Add other services here...
];

// Workflow steps for the installation process
export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: { zh: "现场勘察", en: "Site Survey" },
    description: { zh: "测量屋顶结构与配电条件，确认安全路径。", en: "Measure roof structure and electrical conditions to confirm safe routing." },
  },
  {
    step: 2,
    title: { zh: "方案设计", en: "System Design" },
    description: { zh: "给出光伏容量、逆变器与电池匹配方案，并出具材料清单。", en: "Propose PV size, inverter and battery pairing, plus a bill of materials." },
  },
  {
    step: 3,
    title: { zh: "安装施工", en: "Installation" },
    description: { zh: "依照工艺标准完成结构、防水、布线与保护措施。", en: "Build per standards: structure, waterproofing, cabling, and protection." },
  },
  {
    step: 4,
    title: { zh: "调试验收", en: "Testing & Handover" },
    description: { zh: "联调逆变器与监控，进行满载与安全测试。", en: "Commission inverter and monitoring, perform load and safety tests." },
  },
  {
    step: 5,
    title: { zh: "售后服务", en: "After-sales Service" },
    description: { zh: "提供巡检、日志检查与远程支持，保持系统长期在线。", en: "Provide inspections, log reviews, and remote support to keep systems online." },
  },
];

// Projects data (example)
export const PROJECTS = [
  {
    id: "deye-70kw",
    title: { zh: "Deye 70 kW 工商业屋顶", en: "Deye 70 kW C&I Rooftop" },
    details: {
      capacity: "70 kW",
      duration: "14 Days",
      purpose: { zh: "工商业备电 + 降本", en: "C&I backup + savings" },
    },
    image: "https://cloud.diynet.club/raw/public/solar/deye%2070kw/1",
    images: [
      "https://cloud.diynet.club/raw/public/solar/deye%2070kw/1",
      "https://cloud.diynet.club/raw/public/solar/deye%2070kw/2",
      "https://cloud.diynet.club/raw/public/solar/deye%2070kw/3",
      "https://cloud.diynet.club/raw/public/solar/deye%2070kw/4",
      "https://cloud.diynet.club/raw/public/solar/deye%2070kw/5",
    ],
    extra: {
      inverter: "Deye 70 kW Hybrid",
      battery: "LFP 80 kWh",
      grid: "Hybrid",
      location: "Mandalay",
      status: "Delivered",
    },
  },
  // Add other projects here...
];

// Why choose us points
export const WHY_US = {
  pros: [
    {
      title: { zh: "结构与安全先行", en: "Structure and safety first" },
      description: { zh: "优先做防水、接地与过流保护，降低全生命周期风险。", en: "Prioritize waterproofing, grounding, and overcurrent protection to cut lifecycle risk." },
    },
    {
      title: { zh: "监控与可观测性", en: "Monitoring and observability" },
      description: { zh: "设备上线即接入远程监控，异常能第一时间发现。", en: "Every device joins remote monitoring on day one to surface anomalies quickly." },
    },
    {
      title: { zh: "本地快速响应", en: "Local rapid response" },
      description: { zh: "曼德勒本地团队，安装、运维与扩容都能快速到场。", en: "Mandalay-based crew for fast installs, maintenance, and expansions." },
    },
  ],
  cons: [
    { zh: "只做符合标准的项目，无法低价抢工。", en: "We only take standard-compliant work; we do not undercut on safety." },
    { zh: "需要现场勘察后给出报价，不提供口头估价。", en: "We provide quotes after a site survey; no verbal estimates." },
    { zh: "施工周期按工艺走，可能不适合极短工期。", en: "Schedules follow process quality and may not fit ultra-short deadlines." },
  ],
};
