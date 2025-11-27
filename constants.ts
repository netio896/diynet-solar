import { NavItem, ServiceItem, ProjectItem, WorkflowStep, WhyUsPoint, BilingualText } from './types';

export const BRAND_NAME = "Diynet Solar";

export const NAV_ITEMS: NavItem[] = [
  { label: { zh: "首页", en: "Home" }, href: "#hero" },
  { label: { zh: "服务项目", en: "Services" }, href: "#services" },
  { label: { zh: "工程案例", en: "Projects" }, href: "#projects" },
  { label: { zh: "关于我们", en: "About" }, href: "#about" },
  { label: { zh: "联系我们", en: "Contact" }, href: "#contact" },
];

export const HERO_CONTENT = {
  title: {
    zh: "光伏系统 · 网络工程 · 弱电安装，一站式上门交付",
    en: "Solar systems · Network engineering · Low-voltage installations, delivered end-to-end on-site."
  },
  subtitle: {
    zh: "从家庭到小型工商业，我们只做能长期稳定运行的工程。",
    en: "From homes to small businesses, we focus on systems that run reliably for the long term."
  },
  ctaPrimary: { zh: "立即预约上门", en: "Book On-site Visit" },
  ctaSecondary: { zh: "免费现场评估", en: "Free Site Assessment" }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "network",
    title: { zh: "家庭 & 商业网络系统", en: "Home & Small Business Network Systems" },
    icon: "Network",
    points: [
      { zh: "全屋有线布线与弱电整改", en: "Whole-house wired cabling & rectification" },
      { zh: "Wi-Fi 覆盖优化与 AP 部署", en: "Wi-Fi optimization & AP deployment" },
      { zh: "机柜、NAS 与监控网络规划", en: "Rack, NAS & surveillance network planning" }
    ]
  },
  {
    id: "solar",
    title: { zh: "光伏发电 & 储能系统", en: "Solar PV & Battery Storage" },
    icon: "Sun",
    points: [
      { zh: "家用 6–150 kW 屋顶光伏系统", en: "6–150 kW residential rooftop solar systems" },
      { zh: "电池储能与不停电备电方案", en: "Battery storage & UPS backup solutions" },
      { zh: "远程监控与本地服务器接入", en: "Remote monitoring & local server integration" }
    ]
  },
  {
    id: "cctv",
    title: { zh: "弱电 & 安防监控工程", en: "Low-Voltage & CCTV Installations" },
    icon: "Shield",
    points: [
      { zh: "室内外 IP 摄像头安装与调试", en: "Indoor/Outdoor IP camera installation" },
      { zh: "门禁、对讲与周界安防系统", en: "Access control, intercom & perimeter security" },
      { zh: "一体化综合布线", en: "Integrated structured cabling" }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: { zh: "家用屋顶光伏阵列 (Mandalay)", en: "Residential Rooftop Solar Array (Mandalay)" },
    details: {
      capacity: "12 kW",
      duration: "3 Days",
      purpose: { zh: "自用 + 备电", en: "Self-use + Backup" }
    },
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: "p2",
    title: { zh: "120kW 别墅光伏 + 储能系统", en: "120kW Villa Solar + Storage System" },
    details: {
      capacity: "120 kW",
      duration: "14 Days",
      purpose: { zh: "全屋备电", en: "Whole-house Backup" }
    },
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: "p3",
    title: { zh: "农庄 30kW 光伏 + 网络覆盖", en: "Farm 30kW Solar + Network Coverage" },
    details: {
      capacity: "30 kW",
      duration: "7 Days",
      purpose: { zh: "降本增效", en: "Cost Reduction" }
    },
    image: "https://picsum.photos/600/400?random=3"
  },
  {
    id: "p4",
    title: { zh: "小型工厂监控 + 光伏改造", en: "Small Factory CCTV + Solar Retrofit" },
    details: {
      capacity: "50 kW",
      duration: "10 Days",
      purpose: { zh: "安防 + 节能", en: "Security + Saving" }
    },
    image: "https://picsum.photos/600/400?random=4"
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { step: 1, title: { zh: "现场勘测", en: "Site Survey" }, description: { zh: "实地勘察屋顶结构与配电条件", en: "On-site inspection of roof & electrical" } },
  { step: 2, title: { zh: "方案设计", en: "System Design" }, description: { zh: "定制化工程图纸与配置单", en: "Customized engineering drawings & BOM" } },
  { step: 3, title: { zh: "安装施工", en: "Installation" }, description: { zh: "专业团队标准化作业", en: "Standardized installation by pros" } },
  { step: 4, title: { zh: "调试验收", en: "Testing & Handover" }, description: { zh: "系统联调与压力测试", en: "System commissioning & stress testing" } },
  { step: 5, title: { zh: "售后维护", en: "After-sales Support" }, description: { zh: "定期巡检与远程运维", en: "Regular inspection & remote O&M" } },
];

export const WHY_US = {
  pros: [
    { title: { zh: "不外包，自有技术人员施工", en: "Not outsourced – in-house technicians only." }, description: { zh: "拒绝临时工，确保工艺统一。", en: "No temporary workers, ensuring consistent quality." } },
    { title: { zh: "有仓库，常用设备现货", en: "Local stock for key equipment." }, description: { zh: "备件充足，响应速度快。", en: "Sufficient spare parts, fast response." } },
    { title: { zh: "懂系统，网络+光伏+弱电一体", en: "Integrated planning: solar, network, & low-voltage." }, description: { zh: "避免各系统冲突，统一布线。", en: "Avoid conflicts, unified cabling." } },
    { title: { zh: "做交付，完整测试与用户培训", en: "Full handover with testing and user training." }, description: { zh: "教会您使用，而不只是安装。", en: "We teach you how to use it." } },
  ] as WhyUsPoint[],
  cons: [
    { zh: "临时团队、游击队", en: "Temporary teams, no accountability" },
    { zh: "现买现装，售后慢", en: "Buy-then-install, slow after-sales" },
    { zh: "只卖设备，不管系统", en: "Hardware only, no system design" },
    { zh: "装完就走，无培训", en: "Leave after install, no training" }
  ] as BilingualText[]
};

export const ABOUT_CONTENT = {
  intro: {
    zh: "Diynet Solar 是一家专注于分布式光伏与家庭弱电系统的工程服务商。我们立足 Mandalay 及周边地区，致力于为家庭、别墅及小型工商业客户提供稳定可靠的电力与网络基础设施。我们不追求短期利益，只做能经得起时间考验的优质交付。",
    en: "Diynet Solar is an engineering service provider specializing in distributed solar PV and home low-voltage systems. Based in Mandalay and surrounding areas, we are dedicated to providing stable and reliable power and network infrastructure for homes, villas, and small businesses. We prioritize long-term reliability over short-term gains, delivering quality that stands the test of time."
  }
};