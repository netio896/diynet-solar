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
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.contact) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      setTimeout(() => {
          alert("Thank you! We will contact you shortly.");
      }, 500);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle 
           title={{ zh: "预约上门勘察", en: "Book a Site Visit" }}
        />

        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          
          {/* Left info */}
          <div className="lg:w-1/3 space-y-8">
             <FadeIn>
               <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                  
                  <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="text-xs opacity-70 uppercase tracking-widest">Email</div>
                        <div className="font-medium">contact@diynet-solar.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                         <Phone size={20} />
                      </div>
                      <div>
                        <div className="text-xs opacity-70 uppercase tracking-widest">Phone</div>
                        <div className="font-medium">+95 9 123 456 789</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                         <MapPin size={20} />
                      </div>
                      <div>
                        <div className="text-xs opacity-70 uppercase tracking-widest">Location</div>
                        <div className="font-medium">Mandalay, Myanmar</div>
                      </div>
                    </div>
                  </div>
               </div>
             </FadeIn>
             
             <FadeIn delay={200}>
               <p className="text-slate-400 leading-relaxed px-2">
                 <BilingualBlock 
                    text={{ 
                      zh: "填写右侧表单，我们的工程师将在 24 小时内联系您。", 
                      en: "Fill out the form, and our engineer will contact you within 24 hours." 
                    }} 
                  />
               </p>
             </FadeIn>
          </div>

          {/* Right Form */}
          <FadeIn delay={300} className="lg:w-2/3">
            <div className="glass-card p-8 md:p-10 rounded-3xl">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2Icon size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">提交成功</h3>
                  <p className="text-slate-400">Request Submitted Successfully</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Name */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                      姓名 / Name
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all"
                      placeholder="Your Name"
                      onChange={handleChange}
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                      电话 / Phone
                    </label>
                    <input 
                      type="text" 
                      name="contact" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all"
                      placeholder="+95 ..."
                      onChange={handleChange}
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                      城市 / City
                    </label>
                    <input 
                      type="text" 
                      name="city" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all"
                      placeholder="Mandalay"
                      onChange={handleChange}
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                      需求类型 / Service
                    </label>
                    <div className="relative">
                      <select 
                        name="serviceType" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                        onChange={handleChange}
                        value={formData.serviceType}
                      >
                        <option className="bg-slate-900" value="Network">网络 / Network</option>
                        <option className="bg-slate-900" value="Solar">光伏 / Solar</option>
                        <option className="bg-slate-900" value="Low-Voltage">弱电 / Low-Voltage</option>
                        <option className="bg-slate-900" value="Combined">组合 / Combined</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                    </div>
                  </div>

                  {/* Property Type */}
                  <div>
                     <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                      现场类型 / Property
                    </label>
                    <div className="relative">
                      <select 
                        name="propertyType" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                        onChange={handleChange}
                        value={formData.propertyType}
                      >
                        <option className="bg-slate-900" value="Residential">家用 / Residential</option>
                        <option className="bg-slate-900" value="Shop">商铺 / Shop</option>
                        <option className="bg-slate-900" value="Small Factory">小型工厂 / Factory</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                      备注 / Notes
                    </label>
                    <textarea 
                      name="notes" 
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all resize-none"
                      placeholder="Describe your requirements..."
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 mt-4">
                    <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:to-teal-500 text-white font-bold py-5 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-3 group">
                      <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <span className="block leading-none mb-1">提交申请</span>
                        <span className="block text-[10px] font-normal opacity-80 uppercase tracking-widest leading-none">Submit Request</span>
                      </div>
                    </button>
                  </div>
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
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

export default ContactSection;