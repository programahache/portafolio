'use client';

import { useEffect } from 'react';
import Imgph from './Imgph';
import { TINTS, type Project } from '@/lib/data';

type Props = { project: Project | null; onClose: () => void };

export default function DetailPanel({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [project, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-ink/30 backdrop-blur-[2px] transition-opacity duration-300 ${project ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />
      <aside
        className={`panel fixed top-0 right-0 z-50 h-screen w-full md:w-[640px] bg-paper dark:bg-[#0E0E0D] text-ink dark:text-[#E9E3D2] rule-l border-rule/40 dark:border-[#E9E3D2]/30 overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] ${project ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!project}
      >
        {project && (
          <div className="p-8 md:p-12">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-70">Ficha técnica · No. {project.num}</div>
                <h3 className="h-display mt-3 text-[44px] md:text-[60px] leading-[0.95]">{project.title}</h3>
                <div className="font-serif text-[16px] opacity-80 mt-1">{project.client}</div>
              </div>
              <button onClick={onClose} aria-label="Cerrar" className="font-mono text-[11px] tracking-[0.22em] uppercase opacity-70 hover:opacity-100">
                Cerrar [Esc]
              </button>
            </div>

            <div className="rule-t border-rule/40 dark:border-[#E9E3D2]/30 mt-8 pt-6">
              <div className="img-replace">
                <Imgph tint={TINTS[project.num] ?? '#222'} ratio="4/3" label={project.title} src={project.img}>{project.year}</Imgph>
              </div>
            </div>

            <dl className="mt-10 font-serif text-[15px]">
              {[['ID', '/' + project.num], ['Año', project.year], ['Cliente', project.client], ['Rol', project.role], ['Tecnologías', (project.tech ?? []).join(' · ')]].map(([k, v]) => (
                <div key={k} className="grid grid-cols-12 gap-4 py-4 rule-b border-rule/25 dark:border-[#E9E3D2]/20">
                  <dt className="col-span-4 font-mono text-[11px] tracking-[0.22em] uppercase opacity-60">{k}</dt>
                  <dd className="col-span-8">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">Reportaje</div>
              <p className="font-serif text-[17px] leading-[1.65] mt-3 dropcap">{project.description ?? project.one}</p>
              {!project.description && (
                <p className="font-serif text-[16px] leading-[1.7] opacity-90 mt-4 max-w-[60ch]">
                  Proyecto desarrollado con un alcance claro y entregables medibles. El equipo trabajó en sprints cortos con foco en accesibilidad, rendimiento y mantenibilidad — tres adjetivos que en boca de cualquier desarrollador suenan a cliché y que, sin embargo, suelen ser lo único que distingue un producto vivo de uno arrumado en un repositorio.
                </p>
              )}
            </div>

            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <a href="#" className="font-serif text-[15px] ulink">Ver caso completo</a>
              <a href="#" className="font-serif text-[15px] ulink">Repositorio</a>
              <a href="#" className="font-serif text-[15px] ulink">Sitio en vivo</a>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
