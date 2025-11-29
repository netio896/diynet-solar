import { NavItem, ServiceItem, ProjectItem, WorkflowStep, WhyUsPoint, BilingualText } from './types';

export const BRAND_NAME = "Diynet Solar";

export const NAV_ITEMS: NavItem[] = [
  { label: { zh: "首 页 ", en: "Home" }, href: "#hero" },
  { label: { zh: "服 务 项 目 ", en: "Services" }, href: "#services" },
  { label: { zh: "工 程 案 例 ", en: "Projects" }, href: "#projects" },
  { label: { zh: "关 于 我 们 ", en: "About" }, href: "#about" },
  { label: { zh: "联 系 我 们 ", en: "Contact" }, href: "#contact" },
];

export const HERO_CONTENT = {
  title: {
    zh: "光 伏 系 统  · 网 络 工 程  · 弱 电 安 装 ， 一 站 式 上 门 交 付 ",
    en: "Solar systems · Network engineering · Low-voltage installations, delivered end-to-end on-site."
  },
  subtitle: {
    zh: "从 家 庭 到 小 型 工 商 业 ， 我 们 只 做 能 长 期 稳 定 运 行 的 工 程 。 ",
    en: "From homes to small businesses, we focus on systems that run reliably for the long term."
  },
  ctaPrimary: { zh: "立 即 预 约 上 门 ", en: "Book On-site Visit" },
  ctaSecondary: { zh: "免 费 现 场 评 估 ", en: "Free Site Assessment" }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "network",
    title: { zh: "家 庭  & 商 业 网 络 系 统 ", en: "Home & Small Business Network Systems" },
    icon: "Network",
    points: [
      { zh: "全 屋 有 线 布 线 与 弱 电 整 改 ", en: "Whole-house wired cabling & rectification" },
      { zh: "Wi-Fi 覆 盖 优 化 与  AP 部 署 ", en: "Wi-Fi optimization & AP deployment" },
      { zh: "机 柜 、 NAS 与 监 控 网 络 规 划 ", en: "Rack, NAS & surveillance network planning" }
    ]
  },
  {
    id: "solar",
    title: { zh: "光 伏 发 电  & 储 能 系 统 ", en: "Solar PV & Battery Storage" },
    icon: "Sun",
    points: [
      { zh: "家 用  6–150 kW 屋 顶 光 伏 系 统 ", en: "6–150 kW residential rooftop solar systems" },
      { zh: "电 池 储 能 与 不 停 电 备 电 方 案 ", en: "Battery storage & UPS backup solutions" },
      { zh: "远 程 监 控 与 本 地 服 务 器 接 入 ", en: "Remote monitoring & local server integration" }
    ]
  },
  {
    id: "cctv",
    title: { zh: "弱 电  & 安 防 监 控 工 程 ", en: "Low-Voltage & CCTV Installations" },
    icon: "Shield",
    points: [
      { zh: "室 内 外  IP 摄 像 头 安 装 与 调 试 ", en: "Indoor/Outdoor IP camera installation" },
      { zh: "门 禁 、 对 讲 与 周 界 安 防 系 统 ", en: "Access control, intercom & perimeter security" },
      { zh: "一 体 化 综 合 布 线 ", en: "Integrated structured cabling" }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: { zh: "家 用 屋 顶 光 伏 阵 列  (Mandalay)", en: "Residential Rooftop Solar Array (Mandalay)" },
    details: {
      capacity: "12 kW",
      duration: "3 Days",
      purpose: { zh: "自 用  + 备 电 ", en: "Self-use + Backup" }
    },
    image: "https://picsum.photos/600/400?random=1"
  },

  {
    id: "p2",
    title: {
      zh: "60kW 别  墅  光  伏   + 储  能  系  统",
      en: "60kW Villa Solar + Storage System"
    },
    details: {
      capacity: "60kW",
      duration: "14 Days",
      purpose: { zh: "全  屋  备  电", en: "Whole-house Backup" }
    },
    images: [
      "https://cloud.diynet.club/raw/public/solar/deye%2070kw/1",
      "https://cloud.diynet.club/raw/public/solar/deye%2070kw/2",
      "https://cloud.diynet.club/raw/public/solar/deye%2070kw/3",
      "https://cloud.diynet.club/raw/public/solar/deye%2070kw/4",
      "https://cloud.diynet.club/raw/public/solar/deye%2070kw/5"
    ]
  },

  {
    id: "p3",
    title: { zh: "农 庄  30kW 光 伏  + 网 络 覆 盖 ", en: "Farm 30kW Solar + Network Coverage" },
    details: {
      capacity: "30 kW",
      duration: "7 Days",
      purpose: { zh: "降 本 增 效 ", en: "Cost Reduction" }
    },
    image: "https://picsum.photos/600/400?random=3"
  },

  {
    id: "p4",
    title: { zh: "小 型 工 厂 监 控  + 光 伏 改 造 ", en: "Small Factory CCTV + Solar Retrofit" },
    details: {
      capacity: "50 kW",
      duration: "10 Days",
      purpose: { zh: "安 防  + 节 能 ", en: "Security + Saving" }
    },
    image: "https://picsum.photos/600/400?random=4"
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { step: 1, title: { zh: "现 场 勘 测 ", en: "Site Survey" }, description: { zh: "实地 勘 察 屋 顶 结 构 与 配 电 条 件 ", en: "On-site inspection of roof & electrical" } },
  { step: 2, title: { zh: "方 案 设 计 ", en: "System Design" }, description: { zh: "定 制 化 工 程 图 纸 与 配 置 单 ", en: "Customized engineering drawings & BOM" } },
  { step: 3, title: { zh: "安 装 施 工 ", en: "Installation" }, description: { zh: "专 业 团 队 标 准 化 作 业 ", en: "Standardized installation by pros" } },
  { step: 4, title: { zh: "调 试 验 收 ", en: "Testing & Handover" }, description: { zh: "系 统 联 调 与 压 力 测 试 ", en: "System commissioning & stress testing" } },
  { step: 5, title: { zh: "售 后 维 护 ", en: "After-sales Support" }, description: { zh: "定 期 巡 检 与 远 程 运 维 ", en: "Regular inspection & remote O&M" } },
];

export const WHY_US = {
  pros: [
    { title: { zh: "不 外 包 ， 自 有 技 术 人 员 施 工 ", en: "Not outsourced – in-house technicians only." }, description: { zh: "拒 绝 临 时 工 ， 确 保 工 艺 统 一 。 ", en: "No temporary workers, ensuring consistent quality." } },
    { title: { zh: "有 仓 库 ， 常 用 设 备 现 货 ", en: "Local stock for key equipment." }, description: { zh: "备 件 充 足 ， 响 应 速 度 快 。 ", en: "Sufficient spare parts, fast response." } },
    { title: { zh: "懂 系 统 ， 网 络 +光 伏 +弱 电 一 体 ", en: "Integrated planning: solar, network, & low-voltage." }, description: { zh: "避 免 各 系 统 冲 突 ， 统 一 布 线 。 ", en: "Avoid conflicts, unified cabling." } },
    { title: { zh: "做 交 付 ， 完 整 测 试 与 用 户 培 训 ", en: "Full handover with testing and user training." }, description: { zh: "教 会 您 使 用 ， 而 不 只 是 安 装 。 ", en: "We teach you how to use it." } },
  ] as WhyUsPoint[],
  cons: [
    { zh: "临 时 团 队 、 游 击 队 ", en: "Temporary teams, no accountability" },
    { zh: "现 买 现 装 ， 售 后 慢 ", en: "Buy-then-install, slow after-sales" },
    { zh: "只 卖 设 备 ， 不 管 系 统 ", en: "Hardware only, no system design" },
    { zh: "装 完 就 走 ， 无 培 训 ", en: "Leave after install, no training" }
  ] as BilingualText[]
};

export const ABOUT_CONTENT = {
  intro: {
    zh: "Diynet Solar 是 一 家 专 注 于 分 布 式 光 伏 与 家 庭 弱 电 系 统 的 工 程 服 务 商 。 立 足 Mandalay 及 周 边 地 区 ， 为 家 庭 、 别 墅 与 小 型 工 商 业 提 供 稳 定 可 靠 的 电 力 与 网 络 基 础 设 施 ， 坚 持 长 期 稳 定 交 付 理 念 。",
    en: "Diynet Solar is an engineering service provider specializing in distributed solar PV and home low-voltage systems. Based in Mandalay and surrounding areas, we provide stable and reliable power and network infrastructure for homes, villas, and small businesses with a focus on long-term delivery."
  }
};

/* ==== Auto-Appended: Network Project (MDY) ==== */
export const PROJECT_NETWORK_MDY = {
  id: "network-mdY",
  title: {
    zh: "企业级全场域网络升级工程",
    my: "ကုမ္ပဏီအဆင့် Network မြှင့်တင်ခြင်းလုပ်ငန်း"
  },
  description: {
    zh: "本项目提供整栋建筑的企业级网络升级：光纤主干、室外级六类A布线、PoE供电层、弱电桥架、网络机柜与 UPS 稳定供电，强化缅甸金属屋顶与不稳定电力环境下的网络可靠性。",
    my: "ဒီ Project မှာ တစ်လုံးလုံးအဆောင်အတွက် Fiber backbone၊ Outdoor CAT6A ကြိုးခင်း၊ PoE switch layer၊ Weak-current bridge၊ Rack + UPS တပ်ဆင်ခြင်းတို့ကို လုံးဝလုံခြုံတိကျစွာ ဆောင်ရွက်ထားပါတယ်။ မြန်မာနိုင်ငံရဲ့ မီးပြတ်များခြင်းနှင့် သံမိုးကြောင့် RF ချို့ယွင်းမှုများကိုပါ ဆောင်ရွက်အားကောင်းစွာ ဖြေရှင်းထားပါတယ်။"
  },
  category: "network",
  features: [
    { zh: "室外级 CAT6A 全路由布线", my: "Outdoor-grade CAT6A ကြိုးတော်လုံးခင်း" },
    { zh: "PoE 交换机部署与全楼层供电", my: "PoE switch တပ်ဆင်ခြင်း + အထပ်တိုင်းကို power ပေးခြင်း" },
    { zh: "金属屋顶干扰优化与稳定方案", my: "သံမိုးခေါင်မိုး RF ပြဿနာ ကာကွယ်ရေး" },
    { zh: "标准机柜 + UPS 稳定供电体系", my: "Rack system + UPS တပ်ဆင်ပြီး ထိရောက်တဲ့ မီးအားထောက်ပံ့မှု" }
  ],
  images: [
    "https://cloud.diynet.club/raw/public/network/MDY/1",
    "https://cloud.diynet.club/raw/public/network/MDY/2",
    "https://cloud.diynet.club/raw/public/network/MDY/3"
  ]
};

/* Auto-inject into PROJECTS if it exists */
if (typeof PROJECTS !== "undefined" && Array.isArray(PROJECTS)) {
  PROJECTS.push(PROJECT_NETWORK_MDY);
}

