'use client';

import { useEffect, useState, useRef } from 'react';
import Imgph from './Imgph';
import { TINTS, type Project } from '@/lib/data';

type Props = { project: Project | null; onClose: () => void };

export default function DetailPanel({ project, onClose }: Props) {
  const [snapshot, setSnapshot] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    clearTimeout(timer.current);
    if (project) {
      setSnapshot(project);
      // double-rAF so the element is painted before the transition fires
      requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
    } else {
      setOpen(false);
      timer.current = setTimeout(() => setSnapshot(null), 520);
    }
    return () => clearTimeout(timer.current);
  }, [project]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  // Nothing in the DOM when no project — fixes iOS Safari backdrop-filter touch bug
  if (!snapshot) return null;

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-ink/30 backdrop-blur-[2px] transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`panel fixed top-0 right-0 z-50 h-screen w-full md:w-160 bg-paper dark:bg-[#0E0E0D] text-ink dark:text-[#E9E3D2] rule-l border-rule/40 dark:border-[#E9E3D2]/30 overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!open}
      >
        <div className="p-8 md:p-12">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-70">Ficha técnica · No. {snapshot.num}</div>
              <h3 className="h-display mt-3 text-[44px] md:text-[60px] leading-[0.95]">{snapshot.title}</h3>
              <div className="font-serif text-[16px] opacity-80 mt-1">{snapshot.client}</div>
            </div>
            <button onClick={onClose} aria-label="Cerrar" className="font-mono text-[11px] tracking-[0.22em] uppercase opacity-70 hover:opacity-100">
              Cerrar [Esc]
            </button>
          </div>

          <div className="rule-t border-rule/40 dark:border-[#E9E3D2]/30 mt-8 pt-6">
            <div className="img-replace">
              <Imgph tint={TINTS[snapshot.num] ?? '#222'} ratio="4/3" label={snapshot.title} src={snapshot.img}>{snapshot.year}</Imgph>
            </div>
          </div>

          <dl className="mt-10 font-serif text-[15px]">
            {[['ID', '/' + snapshot.num], ['Año', snapshot.year], ['Cliente', snapshot.client], ['Rol', snapshot.role], ['Tecnologías', (snapshot.tech ?? []).join(' · ')]].map(([k, v]) => (
              <div key={k} className="grid grid-cols-12 gap-4 py-4 rule-b border-rule/25 dark:border-[#E9E3D2]/20">
                <dt className="col-span-4 font-mono text-[11px] tracking-[0.22em] uppercase opacity-60">{k}</dt>
                <dd className="col-span-8">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">Reportaje</div>
            <p className="font-serif text-[17px] leading-[1.65] mt-3 dropcap">{snapshot.description ?? snapshot.one}</p>
            {!snapshot.description && (
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
      </aside>
    </>
  );
}
