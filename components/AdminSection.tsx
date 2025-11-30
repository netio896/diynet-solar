import React, { useMemo, useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import FadeIn from './ui/FadeIn';
import BilingualBlock from './ui/BilingualBlock';
import {
  AlertTriangle,
  Check,
  Clipboard,
  ClipboardCheck,
  Eye,
  EyeOff,
  FileCode,
  Lock,
  PlusCircle,
  ShieldCheck,
  Trash2,
} from 'lucide-react';
import { ProjectItem } from '../types';

const ADMIN_PASSWORD = (import.meta.env.VITE_ADMIN_PASSWORD as string | undefined)?.trim();
const IMAGE_DOMAIN = 'https://cloud.diynet.club/';

type ManagedProject = ProjectItem & {
  images?: string[];
  extra?: {
    inverter?: string;
    battery?: string;
    grid?: string;
    location?: string;
    status?: string;
  };
};

interface ProjectForm {
  id: string;
  titleZh: string;
  titleEn: string;
  capacity: string;
  duration: string;
  purposeZh: string;
  purposeEn: string;
  imageUrls: string;
  location: string;
  inverter: string;
  battery: string;
  grid: string;
  status: string;
}

const defaultForm: ProjectForm = {
  id: '',
  titleZh: '',
  titleEn: '',
  capacity: '',
  duration: '',
  purposeZh: '',
  purposeEn: '',
  imageUrls: '',
  location: '',
  inverter: '',
  battery: '',
  grid: '',
  status: '',
};

const AdminSection: React.FC = () => {
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [managerOpen, setManagerOpen] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [projects, setProjects] = useState<ManagedProject[]>([]);
  const [form, setForm] = useState<ProjectForm>(defaultForm);
  const [showPassword, setShowPassword] = useState(false);
  const [checking, setChecking] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!ADMIN_PASSWORD) {
      setError('未设置 VITE_ADMIN_PASSWORD / Set password in env');
      return;
    }

    setChecking(true);
    try {
      if (password.trim() !== ADMIN_PASSWORD) {
        setError('密码不正确，请重试 / Incorrect password, please try again');
        return;
      }
      setAuthorized(true);
      setError('');
    } catch (err) {
      console.error(err);
      setError('验证失败，请稍后重试 / Verification failed, please retry');
    } finally {
      setChecking(false);
    }
  };

  const parseImages = (value: string) =>
    value
      .split(/\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);

  const escapeValue = (val: string) => val.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

  const addProject = () => {
    setError('');
    const images = parseImages(form.imageUrls);

    if (!form.titleZh || !form.titleEn || !form.capacity || !form.duration || !form.purposeZh || !form.purposeEn) {
      setError('请完整填写必填字段 / Please fill all required fields');
      return;
    }

    if (!images.length) {
      setError('请提供至少一张项目图片 / Provide at least one project image');
      return;
    }

    if (images.length > 6) {
      setError('每个项目最多 6 张图片 / Up to 6 images per project');
      return;
    }

    const invalidImage = images.find((url) => !url.startsWith(IMAGE_DOMAIN) || url === IMAGE_DOMAIN);
    if (invalidImage) {
      setError('项目图片必须来自 https://cloud.diynet.club/ 域名并包含文件路径 / Images must use the allowed domain with file paths');
      return;
    }

    const trimmedExtras = {
      location: form.location.trim(),
      inverter: form.inverter.trim(),
      battery: form.battery.trim(),
      grid: form.grid.trim(),
      status: form.status.trim(),
    };

    const newProject: ManagedProject = {
      id: form.id.trim() || `p${projects.length + 1}`,
      title: { zh: form.titleZh.trim(), en: form.titleEn.trim() },
      details: {
        capacity: form.capacity.trim(),
        duration: form.duration.trim(),
        purpose: { zh: form.purposeZh.trim(), en: form.purposeEn.trim() },
      },
      image: images[0],
      ...(images.length > 1 ? { images } : {}),
    };

    if (Object.values(trimmedExtras).some(Boolean)) {
      newProject.extra = { ...trimmedExtras };
    }

    setProjects((prev) => [...prev, newProject]);
    setForm({ ...defaultForm });
    setCopied(false);
  };

  const removeProject = (id: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const projectToCode = (project: ManagedProject) => {
    const codeLines = [
      '{',
      `  id: "${escapeValue(project.id)}",`,
      `  title: { zh: "${escapeValue(project.title.zh)}", en: "${escapeValue(project.title.en)}" },`,
      '  details: {',
      `    capacity: "${escapeValue(project.details.capacity)}",`,
      `    duration: "${escapeValue(project.details.duration)}",`,
      `    purpose: { zh: "${escapeValue(project.details.purpose.zh)}", en: "${escapeValue(project.details.purpose.en)}" },`,
      '  },',
      `  image: "${escapeValue(project.image)}",`,
    ];

    if (project.images?.length) {
      codeLines.push('  images: [');
      project.images.forEach((img) => codeLines.push(`    "${escapeValue(img)}",`));
      codeLines.push('  ],');
    }

    if (project.extra) {
      const extras: string[] = [];
      if (project.extra.inverter) extras.push(`inverter: "${escapeValue(project.extra.inverter)}"`);
      if (project.extra.battery) extras.push(`battery: "${escapeValue(project.extra.battery)}"`);
      if (project.extra.grid) extras.push(`grid: "${escapeValue(project.extra.grid)}"`);
      if (project.extra.location) extras.push(`location: "${escapeValue(project.extra.location)}"`);
      if (project.extra.status) extras.push(`status: "${escapeValue(project.extra.status)}"`);

      if (extras.length) {
        codeLines.push(`  extra: { ${extras.join(', ')} },`);
      }
    }

    codeLines.push('}');
    return codeLines.join('\n');
  };

  const generatedCode = useMemo(() => {
    if (!projects.length) {
      return '// Add projects above, then click 生成代码并复制 / Generate and Copy';
    }

    return `export const PROJECTS = [\n${projects.map(projectToCode).join(',\n')}\n];`;
  }, [projects]);

  const handleCopy = async () => {
    if (!projects.length) {
      setError('请先添加至少一个项目 / Please add at least one project');
      return;
    }

    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError('无法复制，请手动复制代码 / Copy failed, please copy manually');
    }
  };

  return (
    <section id="admin" className="py-28 bg-slate-950/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <SectionTitle
          title={{ zh: '管 理 员 工 具', en: 'Admin Console' }}
          subtitle={{
            zh: '用 输 入 密 码 的 轻 量 工 具，收 集 项 目 并 生 成 constants.ts 用 的 数 组',
            en: 'Lightweight password-gated tool to collect projects and generate the constants.ts PROJECTS array.',
          }}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <FadeIn>
            <div className="rounded-3xl border border-emerald-500/20 bg-slate-900/70 backdrop-blur p-8 shadow-2xl shadow-emerald-500/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-300">
                  <Lock />
                </div>
                <div>
                  <div className="text-white font-semibold">管理员登录 / Admin Login</div>
                  <div className="text-sm text-slate-400">使用环境变量中的密码解锁 / Password from env</div>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 uppercase tracking-[0.2em]">Password / 密码</label>
                  <div className="mt-2 relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="输入密码进行校验 / Enter password to verify"
                      className="w-full rounded-2xl bg-slate-900 border border-white/10 px-4 py-3 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm py-3 transition-colors"
                  disabled={checking}
                >
                  <ShieldCheck size={18} />
                  <span>{checking ? '验 证 中 / Verifying' : '解 锁 / Unlock'}</span>
                </button>
              </form>

              {authorized ? (
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-100 px-4 py-3 flex items-start gap-3">
                  <Check className="mt-0.5" size={18} />
                  <div className="text-sm space-y-1">
                    <div>已通过 / Verified</div>
                    <div className="text-emerald-200">点击“管理项目”展开表单 / Click "Manage Projects" to open the form.</div>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-100 px-4 py-3 flex items-start gap-3">
                  <AlertTriangle className="mt-0.5" size={18} />
                  <div className="text-sm space-y-1">
                    <div>密码存储：VITE_ADMIN_PASSWORD / Password stored in env</div>
                    <div className="text-amber-200">上线前请在部署环境中设置强口令 / Set a strong password for production.</div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-3">
                <div className="rounded-2xl bg-slate-900/90 border border-white/5 p-4">
                  <BilingualBlock
                    text={{ zh: '操 作 流 程', en: 'Workflow' }}
                    zhClassName="text-sm font-semibold text-white"
                    enClassName="text-xs text-slate-400"
                    className="mb-3"
                  />
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>1) 导航栏点“管理员登录” / Use navbar entry</li>
                    <li>2) 输入码：Maung1985 / Enter the default code</li>
                    <li>3) 点击“管理项目”展开表单 / Expand the manager</li>
                    <li>4) 填表后点“添加到列表” / Add to list</li>
                    <li>5) 点“生成代码并复制” / Generate & copy code</li>
                    <li>6) 粘贴到 constants.ts 的 PROJECTS 数组 / Paste into PROJECTS</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-red-500/10 border border-red-500/30 p-4 text-sm text-red-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={16} />
                    <BilingualBlock
                      text={{ zh: '生产安全提示', en: 'Production Security' }}
                      zhClassName="font-semibold text-red-100"
                      enClassName="text-xs text-red-200"
                    />
                  </div>
                  <ol className="mt-2 space-y-1.5 list-decimal list-inside text-red-50">
                    <li>
                      <BilingualBlock
                        text={{ zh: '更换默认密码', en: 'Change the default password.' }}
                        zhClassName="text-sm text-red-50"
                        enClassName="text-xs text-red-200"
                      />
                    </li>
                    <li>
                      <BilingualBlock
                        text={{ zh: '可用环境变量存储密码', en: 'Store secrets in env vars.' }}
                        zhClassName="text-sm text-red-50"
                        enClassName="text-xs text-red-200"
                      />
                    </li>
                    <li>
                      <BilingualBlock
                        text={{ zh: '配置更复杂认证', en: 'Add stronger authentication.' }}
                        zhClassName="text-sm text-red-50"
                        enClassName="text-xs text-red-200"
                      />
                    </li>
                    <li>
                      <BilingualBlock
                        text={{ zh: '限制管理界面访问', en: 'Restrict admin access.' }}
                        zhClassName="text-sm text-red-50"
                        enClassName="text-xs text-red-200"
                      />
                    </li>
                  </ol>
                </div>
              </div>

              {error && (
                <div className="rounded-xl border border-red-500/40 bg-red-500/10 text-red-100 text-sm px-4 py-3">
                  {error}
                </div>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur shadow-2xl shadow-emerald-500/5 p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <div className="text-white font-semibold">管理项目 / Manage Projects</div>
                  <div className="text-sm text-slate-400">填好后添加到列表，最后生成代码。</div>
                </div>
                <button
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 px-4 py-2 text-sm text-emerald-100 hover:bg-emerald-500/30 transition-colors disabled:opacity-60"
                  disabled={!authorized}
                  onClick={() => setManagerOpen((prev) => !prev)}
                >
                  <PlusCircle size={16} />
                  <span>{managerOpen ? '收 起 / Hide' : '管理项目 / Manage Projects'}</span>
                </button>
              </div>

              {!authorized && (
                <div className="rounded-2xl border border-white/5 bg-slate-900/70 p-6 text-slate-400 text-sm flex items-start gap-3">
                  <Lock size={18} className="mt-0.5" />
                  <div>登录后可编辑与生成代码 / Login to edit and generate code.</div>
                </div>
              )}

              {authorized && managerOpen && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <BilingualBlock
                        text={{ zh: '项目 ID', en: 'Project ID' }}
                        zhClassName="text-xs font-medium text-slate-200"
                        enClassName="text-[11px] text-slate-500"
                      />
                      <input
                        type="text"
                        value={form.id}
                        onChange={(e) => setForm({ ...form, id: e.target.value })}
                        placeholder="留空自动生成 / Leave blank to auto-generate"
                        className="mt-2 w-full rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <BilingualBlock
                        text={{ zh: '容量 / 容量(kW)', en: 'Capacity (kW)' }}
                        zhClassName="text-xs font-medium text-slate-200"
                        enClassName="text-[11px] text-slate-500"
                      />
                      <input
                        type="text"
                        value={form.capacity}
                        onChange={(e) => setForm({ ...form, capacity: e.target.value })}
                        className="mt-2 w-full rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                        placeholder="10 kW / 25 kW ..."
                      />
                    </div>

                    <div>
                      <BilingualBlock
                        text={{ zh: '项目中文名', en: 'Title (Chinese)' }}
                        zhClassName="text-xs font-medium text-slate-200"
                        enClassName="text-[11px] text-slate-500"
                      />
                      <input
                        type="text"
                        value={form.titleZh}
                        onChange={(e) => setForm({ ...form, titleZh: e.target.value })}
                        className="mt-2 w-full rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                        placeholder="例：曼德勒别墅屋顶光伏"
                      />
                    </div>

                    <div>
                      <BilingualBlock
                        text={{ zh: '项目英文名', en: 'Title (English)' }}
                        zhClassName="text-xs font-medium text-slate-200"
                        enClassName="text-[11px] text-slate-500"
                      />
                      <input
                        type="text"
                        value={form.titleEn}
                        onChange={(e) => setForm({ ...form, titleEn: e.target.value })}
                        className="mt-2 w-full rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                        placeholder="Mandalay Villa Rooftop PV"
                      />
                    </div>

                    <div>
                      <BilingualBlock
                        text={{ zh: '工期 / Duration', en: 'Duration' }}
                        zhClassName="text-xs font-medium text-slate-200"
                        enClassName="text-[11px] text-slate-500"
                      />
                      <input
                        type="text"
                        value={form.duration}
                        onChange={(e) => setForm({ ...form, duration: e.target.value })}
                        className="mt-2 w-full rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                        placeholder="7 Days / 14 Days"
                      />
                    </div>

                    <div>
                      <BilingualBlock
                        text={{ zh: '用途描述', en: 'Purpose' }}
                        zhClassName="text-xs font-medium text-slate-200"
                        enClassName="text-[11px] text-slate-500"
                      />
                      <input
                        type="text"
                        value={form.purposeZh}
                        onChange={(e) => setForm({ ...form, purposeZh: e.target.value })}
                        className="mt-2 w-full rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                        placeholder="自用+储能 / 商用备电"
                      />
                      <input
                        type="text"
                        value={form.purposeEn}
                        onChange={(e) => setForm({ ...form, purposeEn: e.target.value })}
                        className="mt-2 w-full rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                        placeholder="Self-use + Storage"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <BilingualBlock
                        text={{ zh: '图片链接（逗号或换行分隔，需 cloud.diynet.club 域名）', en: 'Image URLs (comma or newline, cloud.diynet.club only)' }}
                        zhClassName="text-xs font-medium text-slate-200"
                        enClassName="text-[11px] text-slate-500"
                      />
                      <textarea
                        value={form.imageUrls}
                        onChange={(e) => setForm({ ...form, imageUrls: e.target.value })}
                        rows={3}
                        className="mt-2 w-full rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                        placeholder="https://cloud.diynet.club/project-001/cover.jpg"
                      />
                    </div>

                    <div>
                      <BilingualBlock
                        text={{ zh: '项目地点', en: 'Location' }}
                        zhClassName="text-xs font-medium text-slate-200"
                        enClassName="text-[11px] text-slate-500"
                      />
                      <input
                        type="text"
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        className="mt-2 w-full rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                        placeholder="Mandalay / Nay Pyi Taw"
                      />
                    </div>

                    <div>
                      <BilingualBlock
                        text={{ zh: '逆变器型号', en: 'Inverter' }}
                        zhClassName="text-xs font-medium text-slate-200"
                        enClassName="text-[11px] text-slate-500"
                      />
                      <input
                        type="text"
                        value={form.inverter}
                        onChange={(e) => setForm({ ...form, inverter: e.target.value })}
                        className="mt-2 w-full rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                        placeholder="e.g. 10kW Hybrid"
                      />
                    </div>

                    <div>
                      <BilingualBlock
                        text={{ zh: '电池配置', en: 'Battery' }}
                        zhClassName="text-xs font-medium text-slate-200"
                        enClassName="text-[11px] text-slate-500"
                      />
                      <input
                        type="text"
                        value={form.battery}
                        onChange={(e) => setForm({ ...form, battery: e.target.value })}
                        className="mt-2 w-full rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                        placeholder="e.g. 20 kWh LFP"
                      />
                    </div>

                    <div>
                      <BilingualBlock
                        text={{ zh: '并网/离网', en: 'Grid Mode' }}
                        zhClassName="text-xs font-medium text-slate-200"
                        enClassName="text-[11px] text-slate-500"
                      />
                      <input
                        type="text"
                        value={form.grid}
                        onChange={(e) => setForm({ ...form, grid: e.target.value })}
                        className="mt-2 w-full rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                        placeholder="Hybrid / On-grid / Off-grid"
                      />
                    </div>

                    <div>
                      <BilingualBlock
                        text={{ zh: '交付状态', en: 'Delivery Status' }}
                        zhClassName="text-xs font-medium text-slate-200"
                        enClassName="text-[11px] text-slate-500"
                      />
                      <input
                        type="text"
                        value={form.status}
                        onChange={(e) => setForm({ ...form, status: e.target.value })}
                        className="mt-2 w-full rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                        placeholder="Delivered / In progress"
                      />
                    </div>
                  </div>

                  <button
                    onClick={addProject}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm py-3 transition-colors"
                  >
                    <PlusCircle size={18} />
                    <span>添加到列表 / Add to list</span>
                  </button>

                  {projects.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clipboard size={18} className="text-emerald-400" />
                        <div className="text-sm text-slate-300">
                          已添加 {projects.length} 条 / {projects.length} project(s) added
                        </div>
                      </div>

                      <div className="space-y-3">
                        {projects.map((project) => (
                          <div
                            key={project.id}
                            className="rounded-2xl border border-white/5 bg-slate-900/70 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                          >
                            <div>
                              <div className="text-white font-semibold">{project.title.zh}</div>
                              <div className="text-xs text-slate-400 uppercase tracking-[0.2em]">{project.id}</div>
                              <div className="text-sm text-slate-300 mt-1">
                                {project.details.capacity} · {project.details.duration} · {project.details.purpose.en}
                              </div>
                            </div>
                            <button
                              onClick={() => removeProject(project.id)}
                              className="inline-flex items-center gap-2 rounded-xl border border-red-500/40 text-red-200 px-3 py-2 text-xs hover:bg-red-500/10"
                            >
                              <Trash2 size={14} />
                              <span>移除 / Remove</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/60 p-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-emerald-200">
                      <FileCode size={16} />
                      <span>生成代码 / Generate code</span>
                    </div>
                    <pre className="bg-black/30 border border-white/5 rounded-xl p-4 text-xs text-emerald-100 overflow-x-auto whitespace-pre-wrap">
                      {generatedCode}
                    </pre>
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 text-slate-950 text-sm font-semibold px-4 py-2 hover:bg-emerald-400 transition-colors"
                    >
                      {copied ? <ClipboardCheck size={16} /> : <Clipboard size={16} />}
                      <span>生成代码并复制 / Generate & Copy</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
