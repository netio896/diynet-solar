import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ProjectItem } from '../types';
import SectionTitle from './ui/SectionTitle';
import BilingualBlock from './ui/BilingualBlock';
import FadeIn from './ui/FadeIn';
import { Clock, Zap, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

type ViewerState = {
  images: string[];
  index: number;
};

const ProjectsSection: React.FC = () => {
  const [viewer, setViewer] = useState<ViewerState | null>(null);
  const [detail, setDetail] = useState<ProjectItem | null>(null);

  const openViewer = (images: string[], index: number) => {
    if (!images.length) return;
    setViewer({ images, index });
  };

  const closeViewer = () => setViewer(null);

  const prevImage = () => {
    if (!viewer) return;
    setViewer({
      ...viewer,
      index: viewer.index === 0 ? viewer.images.length - 1 : viewer.index - 1,
    });
  };

  const nextImage = () => {
    if (!viewer) return;
    setViewer({
      ...viewer,
      index: viewer.index === viewer.images.length - 1 ? 0 : viewer.index + 1,
    });
  };

  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-4 md:px-10">
        <SectionTitle
          title={{ zh: '真 实 工 程 案 例', en: 'Real Projects' }}
          subtitle={{ zh: '点 击 图 片 或 参 数 查 看 详 情', en: 'Tap images or details for more info' }}
        />

        <div className="space-y-32">
          {PROJECTS.map((project, index) => {
            const images = project.images?.length ? project.images : project.image ? [project.image] : [];

            return (
              <FadeIn key={project.id} delay={index * 120}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  
                  {/* 左侧：大图阵列 */}
                  <div className="grid grid-cols-2 gap-4">
                    {images.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => openViewer(images, i)}
                        className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-black cursor-zoom-in"
                      >
                        <img
                          src={img}
                          alt={project.title.en}
                          loading="lazy"
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>

                  {/* 右侧：项目信息 */}
                  <div className="bg-slate-900/60 backdrop-blur rounded-3xl p-8 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-4 py-1 mb-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-semibold">
                        {project.details.capacity}
                      </span>

                      <h3 className="text-2xl font-bold text-white mb-4">
                        <BilingualBlock
                          text={project.title}
                          enClassName="text-sm font-normal text-slate-400 mt-1"
                        />
                      </h3>

                      <div className="flex gap-8 text-sm text-slate-300 mt-6">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-emerald-400" />
                          <span>{project.details.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap size={16} className="text-yellow-400" />
                          <BilingualBlock
                            text={project.details.purpose}
                            zhClassName="text-sm text-slate-200"
                            enClassName="text-xs text-slate-400"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setDetail(project)}
                      className="mt-8 inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm"
                    >
                      <Info size={16} />
                      查看项目参数 / View Details
                    </button>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* ✅ 图片全屏预览 */}
      {viewer && (
        <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center" onClick={closeViewer}>
          <div className="relative max-w-6xl w-full px-6" onClick={(e) => e.stopPropagation()}>
            <img src={viewer.images[viewer.index]} className="w-full max-h-[85vh] object-contain rounded-xl" />

            <button onClick={closeViewer} className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white hover:bg-black">
              <X size={22} />
            </button>

            {viewer.images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white hover:bg-black">
                  <ChevronLeft size={28} />
                </button>
                <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white hover:bg-black">
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ✅ 项目参数详情弹窗 */}
      {detail && (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center" onClick={() => setDetail(null)}>
          <div className="bg-slate-900 text-white rounded-3xl max-w-lg w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setDetail(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold mb-6">
              <BilingualBlock text={detail.title} enClassName="text-sm font-normal text-slate-400 mt-1" />
            </h3>

            <div className="space-y-3 text-sm text-slate-300">
              <div>逆变器 / Inverter: {detail.extra?.inverter || '—'}</div>
              <div>电池 / Battery: {detail.extra?.battery || '—'}</div>
              <div>并网方式 / Grid Mode: {detail.extra?.grid || '—'}</div>
              <div>项目地点 / Location: {detail.extra?.location || '—'}</div>
              <div>施工周期 / Duration: {detail.details.duration}</div>
              <div className="space-y-1">
                <div className="text-slate-400">项目用途 / Purpose</div>
                <BilingualBlock text={detail.details.purpose} enClassName="text-xs text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
