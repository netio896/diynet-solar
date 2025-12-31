
import { NavItem, ServiceItem, ProjectItem, WorkflowStep, WhyUsPoint, BilingualText } from './types';

export const BRAND_NAME = "Diynet Solar";

export const NAV_ITEMS: NavItem[] = [
  { label: { zh: "首页", en: "Home" }, href: "#hero" },
  { label: { zh: "技术服务", en: "Engineering" }, href: "#services" },
  { label: { zh: "交付案例", en: "Deliverables" }, href: "#projects" },
  { label: { zh: "关于我们", en: "About" }, href: "#about" },
  { label: { zh: "需求咨询", en: "Consultation" }, href: "#contact" },
];

export const HERO_CONTENT = {
  title: {
    zh: "专业光伏、网络与弱电工程，打造高可靠性数字基础设施",
    en: "Professional Solar, Network & Low-Voltage Engineering for Reliable Digital Infrastructure."
  },
  subtitle: {
    zh: "深耕 Mandalay，我们专注于从勘察设计到标准化施工的闭环交付，拒绝外包，只为长期稳定运行而生。",
    en: "Based in Mandalay, we focus on closed-loop delivery from survey to standardized construction. No outsourcing, built for long-term stability."
  },
  ctaPrimary: { zh: "预约专家上门", en: "Request Engineering Survey" },
  ctaSecondary: { zh: "查看技术标准", en: "View Technical Standards" }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "network",
    title: { zh: "企业级网络与结构化布线", en: "Enterprise Network & Structured Cabling" },
    icon: "Network",
    points: [
      { zh: "Cat6/光纤骨干布线与弱电井整改", en: "Cat6/Fiber backbone cabling & MDF/IDF rectification" },
      { zh: "多 AP 无缝漫游与高可用路由方案", en: "Multi-AP seamless roaming & high-availability routing" },
      { zh: "私有云存储(NAS)与专用网络隔离规划", en: "Private cloud (NAS) & dedicated network VLAN planning" }
    ]
  },
  {
    id: "solar",
    title: { zh: "分布式光伏与多能源储能系统", en: "Distributed Solar & Multi-Energy Storage" },
    icon: "Sun",
    points: [
      { zh: "6kW-150kW 高性能并离网混合系统", en: "6kW-150kW high-performance hybrid systems" },
      { zh: "磷酸铁锂(LiFePO4)储能与 UPS 级切电", en: "LiFePO4 storage & UPS-grade power switching" },
      { zh: "云端智能运维与本地 EMS 监控集成", en: "Cloud intelligent O&M & local EMS integration" }
    ]
  },
  {
    id: "cctv",
    title: { zh: "工业级安防监控与智能控制", en: "Industrial Surveillance & Smart Control" },
    icon: "Shield",
    points: [
      { zh: "4K/全彩 AI 监控系统与远程联防", en: "4K/Full-color AI surveillance & remote defense" },
      { zh: "智能门禁、联动报警与周界防护", en: "Smart access control & perimeter protection" },
      { zh: "一体化机柜集成与动力环境监测", en: "Integrated rack systems & power/env monitoring" }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: { zh: "工商业级配电与防雷中心", en: "Industrial-Grade Power Distribution & SPD Center" },
    details: {
      capacity: "70 kW",
      duration: "12 Days",
      purpose: { zh: "高标准配电安全性", en: "High-Standard Electrical Safety" }
    },
    image: "https://cloud.diytv.site/raw/public/solar/deye%2070kw/20251228_165849.jpg",
    badge: { zh: "标准化直流/交流柜 · 精密布线", en: "Standard DC/AC Cabinet · Precision Wiring" }
  },
  {
    id: "p2",
    title: { zh: "屋顶高性能光伏阵列部署", en: "High-Performance Rooftop PV Array" },
    details: {
      capacity: "70 kW",
      duration: "InProgress",
      purpose: { zh: "最大化发电增益", en: "Maximize Generation Yield" }
    },
    image: "https://cloud.diytv.site/raw/public/solar/deye%2070kw/1",
    badge: { zh: "双面双玻组件 · 铝合金支架", en: "Bi-facial Modules · Al-Alloy Racking" }
  },
  {
    id: "p3",
    title: { zh: "Deye 三相混合储能系统集成", en: "Deye 3-Phase Hybrid Storage Integration" },
    details: {
      capacity: "70 kW",
      duration: "8 Days",
      purpose: { zh: "全天候能源自治", en: "24/7 Energy Autonomy" }
    },
    image: "https://cloud.diytv.site/raw/public/solar/deye%2070kw/20251228_170315.jpg",
    badge: { zh: "三相不平衡负载支持 · 储能阵列", en: "3-Phase Unbalanced Load · Battery Array" }
  },
  {
    id: "p4",
    title: { zh: "机房动力环境与网络柜交付", en: "Data Room Power & Network Cabinet" },
    details: {
      capacity: "N/A",
      duration: "5 Days",
      purpose: { zh: "系统中心化管理", en: "Centralized System Management" }
    },
    image: "https://cloud.diytv.site/raw/public/solar/deye%2070kw/4",
    badge: { zh: "结构化布线 · 核心交换系统", en: "Structured Cabling · Core Switching" }
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { step: 1, title: { zh: "深度勘测", en: "Technical Audit" }, description: { zh: "电力负荷分析与屋顶载荷建模", en: "Load analysis & rooftop structural modeling" } },
  { step: 2, title: { zh: "工程设计", en: "Engineering Design" }, description: { zh: "单线图设计与 BOM 系统配置", en: "SLD design & BOM configuration" } },
  { step: 3, title: { zh: "标准化施工", en: "Standardized Build" }, description: { zh: "自营技工团队，施工规范高于国标", en: "In-house pros, exceeding industry standards" } },
  { step: 4, title: { zh: "测试调优", en: "Commissioning" }, description: { zh: "绝缘测试、热成像与联调优化", en: "Insulation testing & thermal imaging" } },
  { step: 5, title: { zh: "终身运维", en: "Lifecycle O&M" }, description: { zh: "7x24 远程监控与定期现场回访", en: "24/7 remote monitoring & preventive visits" } },
];

export const WHY_US = {
  pros: [
    { title: { zh: "拒绝外包：自营核心工程团队", en: "Zero Outsourcing: In-house Engineering Team" }, description: { zh: "确保每一个接头、每一个支架都符合 Diynet 交付标准。", en: "Ensuring every connector and bracket meets Diynet delivery standards." } },
    { title: { zh: "仓储现货：关键备件 0 等待", en: "Local Stock: Zero Lead-time for Spares" }, description: { zh: "Mandalay 本地仓库，保障紧急维修与快速交付。", en: "Local Mandalay warehouse for rapid repair and fast delivery." } },
    { title: { zh: "架构协同：光伏+网络一体化规划", en: "Architectural Synergy: Solar + Network Integration" }, description: { zh: "从源头解决网络干扰、地线回路等复杂的弱电兼容问题。", en: "Solving complex compatibility issues like signal interference at the source." } },
    { title: { zh: "透明交付：完整的验收报告与培训", en: "Transparent Delivery: Full Handover & Training" }, description: { zh: "提供完整竣工图纸、测试报告，并手把手教会您系统管理。", en: "Providing full as-built drawings and hands-on system training." } },
  ] as WhyUsPoint[],
  cons: [
    { zh: "临时雇员组成的“游击队”", en: "Temporary 'guerrilla' worker teams" },
    { zh: "无本地仓储，售后遥遥无期", en: "No local stock, endless wait for service" },
    { zh: "各系统独立施工，互不兼容", en: "Incompatible systems from multiple vendors" },
    { zh: "装完收钱，无图纸无后期", en: "Pay-and-leave, no documentation provided" }
  ] as BilingualText[]
};

export const ABOUT_CONTENT = {
  intro: {
    zh: "Diynet Solar 不仅仅是安装商，更是您在缅甸的数字化与能源基础设施合作伙伴。我们专注分布式光伏(PV)与高标准弱电布线，服务范围覆盖 Mandalay 及其周边地区。我们坚持“工程质量即生命”，通过标准化的技术流程，为高端住宅及中小企业提供真正可持续的电力与网络解决方案。",
    en: "Diynet Solar is more than an installer; we are your digital and energy infrastructure partner in Myanmar. Specializing in Distributed PV and high-standard low-voltage cabling, we serve Mandalay and surrounding areas. We adhere to the philosophy that 'Engineering Quality is Life,' providing truly sustainable power and network solutions for high-end residences and SMEs through standardized technical processes."
  }
};
