import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import BilingualBlock from './ui/BilingualBlock';
import FadeIn from './ui/FadeIn';
import { FormData } from '../types';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    city: '',
    serviceType: 'Combined',
    propertyType: 'Residential',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.contact) {
      console.log('Form Submitted:', formData);
      setSubmitted(true);
      setTimeout(() => {
        alert('Thank you! We will contact you shortly.');
      }, 500);
    }
  };

  return (
    <section id="contact" className="py-28 bg-slate-950/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <SectionTitle
          title={{ zh: '预 约 上 门 勘 察 ', en: 'Book a Site Visit' }}
          subtitle={{
            zh: '留 下 信 息 ， 我 们 会 尽 快 联 系 你 ',
            en: 'Leave your details and we will get back to you soon.',
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left info */}
          <FadeIn delay={120}>
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-7 md:p-8 shadow-xl shadow-emerald-500/5 space-y-6">
              <BilingualBlock
                text={{
                  zh: '联 系 方 式 / Contact Info',
                  en: 'Contact Info',
                }}
                className="mb-4"
                zhClassName="text-lg font-semibold text-white"
                enClassName="text-sm text-slate-400"
              />

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-1 text-emerald-400" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">EMAIL</div>
                    <a
                      href="mailto:contact@diynet-solar.com"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      contact@diynet-solar.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-1 text-emerald-400" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">
                      PHONE / WHATSAPP
                    </div>
                    <a
                      href="tel:+959444010009"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      +95 9 444 010 009
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-emerald-400" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">LOCATION</div>
                    <p>Mandalay, Myanmar</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-slate-400 space-y-1">
                <p>服务城市：曼德勒及周边地区。</p>
                <p>Service area: Mandalay and nearby regions.</p>
              </div>
            </div>
          </FadeIn>

          {/* Right Form */}
          <FadeIn delay={200}>
            <div className="rounded-3xl border border-emerald-500/20 bg-slate-900/80 p-7 md:p-8 shadow-xl shadow-emerald-500/10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                  <CheckCircle2Icon size={40} />
                  <div className="text-white font-semibold">提交成功</div>
                  <div className="text-sm text-slate-400">Request Submitted Successfully</div>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div>
                    <BilingualBlock
                      text={{ zh: '姓名 / Name', en: 'Name' }}
                      zhClassName="text-xs font-medium text-slate-200"
                      enClassName="text-[11px] text-slate-500"
                    />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-2xl bg-slate-900/80 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                      placeholder="请输入姓名 / Your name"
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <BilingualBlock
                      text={{ zh: '电话 / Phone / WhatsApp', en: 'Phone / WhatsApp' }}
                      zhClassName="text-xs font-medium text-slate-200"
                      enClassName="text-[11px] text-slate-500"
                    />
                    <input
                      type="text"
                      name="contact"
                      required
                      value={formData.contact}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-2xl bg-slate-900/80 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                      placeholder="+95 9 444 010 009"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <BilingualBlock
                      text={{ zh: '城市 / City', en: 'City' }}
                      zhClassName="text-xs font-medium text-slate-200"
                      enClassName="text-[11px] text-slate-500"
                    />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-2xl bg-slate-900/80 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                      placeholder="Mandalay / City"
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <BilingualBlock
                      text={{ zh: '需求类型 / Service', en: 'Service Type' }}
                      zhClassName="text-xs font-medium text-slate-200"
                      enClassName="text-[11px] text-slate-500"
                    />
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-2xl bg-slate-900/80 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                    >
                      <option value="Network">网络 / Network</option>
                      <option value="Solar">光伏 / Solar</option>
                      <option value="LowVoltage">弱电 / Low-Voltage</option>
                      <option value="Combined">组合 / Combined</option>
                    </select>
                  </div>

                  {/* Property Type */}
                  <div>
                    <BilingualBlock
                      text={{ zh: '现场类型 / Property', en: 'Property Type' }}
                      zhClassName="text-xs font-medium text-slate-200"
                      enClassName="text-[11px] text-slate-500"
                    />
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-2xl bg-slate-900/80 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                    >
                      <option value="Residential">家用 / Residential</option>
                      <option value="Shop">商铺 / Shop</option>
                      <option value="Factory">小型工厂 / Factory</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <BilingualBlock
                      text={{ zh: '备注 / Notes', en: 'Notes' }}
                      zhClassName="text-xs font-medium text-slate-200"
                      enClassName="text-[11px] text-slate-500"
                    />
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      className="mt-2 w-full rounded-2xl bg-slate-900/80 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                      placeholder="简单描述一下现场与需求 / Briefly describe your site and needs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-semibold py-3.5 transition-colors"
                  >
                    <Send size={16} />
                    <span>提交申请 / Submit Request</span>
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// Helper icon
const CheckCircle2Icon = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="text-emerald-400"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

export default ContactSection;
