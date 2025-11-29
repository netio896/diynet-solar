import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import SectionTitle from './ui/SectionTitle';
import BilingualBlock from './ui/BilingualBlock';
import FadeIn from './ui/FadeIn';
import { Clock, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [viewer, setViewer] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const openViewer = (images: string[], index: number) => {
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
          subtitle={{ zh: '点 击 图 片 可 全 屏 查 看', en: 'Tap images for fullscreen preview' }}
        />

        <div className="space-y-32">
          {PROJECTS.map((project, index) => {
            const images = project.images || (project.image ? [project.image] : []);

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
                  <div className="bg-slate-900/50 backdrop-blur rounded-3xl p-8 flex flex-col justify-between">
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
                          <span>{project.details.purpose.en}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* ✅ 全屏预览灯箱 */}
      {viewer && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center"
          onClick={closeViewer}
        >
          <div
            className="relative max-w-6xl w-full px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={viewer.images[viewer.index]}
              className="w-full max-h-[85vh] object-contain rounded-xl"
            />

            {/* 关闭按钮 */}
            <button
              onClick={closeViewer}
              className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white hover:bg-black"
            >
              <X size={22} />
            </button>

            {/* 左右切换 */}
            {viewer.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white hover:bg-black"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white hover:bg-black"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
