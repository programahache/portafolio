'use client';

import { useEffect } from 'react';
import Toggle from './Toggle';
import { CONTACT } from '@/lib/data';

export type Page = 'home' | 'work' | 'me' | 'contact';

type Props = {
  page: Page;
  setPage: (p: Page) => void;
  textMode: boolean;
  setTextMode: (fn: (v: boolean) => boolean) => void;
  dark: boolean;
  setDark: (fn: (v: boolean) => boolean) => void;
};

function downloadCV() {
  const { name, role, location, email, phone, stack } = CONTACT;
  const txt = `${name} — ${role}\n${location.city}, ${location.country}\n${email}\n${phone.display}\n\nStack: ${stack}.\n`;
  const blob = new Blob([txt], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${name.replace(' ', '-')}-CV.txt`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const PAGE_LABELS: Record<Page, string> = {
  home: 'Portada', work: 'Proyectos', me: 'Información', contact: 'Contacto',
};

export default function Header({ page, setPage, textMode, setTextMode, dark, setDark }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA') return;
      if (e.key.toLowerCase() === 'n') setTextMode(v => !v);
      if (e.key.toLowerCase() === 'd') setDark(v => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setTextMode, setDark]);

  const today = new Date().toLocaleDateString('es-CO', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <header className="relative">
      {/* Meta strip */}
      <div className="rule-b border-rule/40 dark:border-[#E9E3D2]/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-2 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase opacity-70">
          <div>Vol. III · Núm. 04 · Edición digital</div>
          <div className="hidden md:block">Medellín, Colombia · {today}</div>
          <div>Clima · 21°C · Tipográfico</div>
        </div>
      </div>

      {/* Masthead Hapacai — backflip */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-10 md:pt-14" style={{ perspective: '1400px' }}>
        <button
          onClick={() => setPage('home')}
          className="block w-full group"
          aria-label="Inicio"
        >
          <div
            className="relative [transform-style:preserve-3d] transition-[transform] duration-700 ease-in-out group-hover:[transform:rotateX(180deg)]"
          >
            {/* Cara frontal: HAPACAI */}
            <div className="[backface-visibility:hidden] flex justify-between w-full h-display text-[19vw] md:text-[15vw] leading-[0.85] select-none">
              {'HAPACAI'.split('').map((l, i) => <span key={i}>{l}</span>)}
            </div>

            {/* Cara trasera: nombre completo */}
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateX(180deg)] flex flex-col justify-center gap-[1vw]">
              <div className="flex justify-between w-full h-display text-[8.2vw] md:text-[6.8vw] leading-none select-none">
                {['HAROLD', 'ANDRÉS'].map((w, i) => <span key={i}>{w}</span>)}
              </div>
              <div className="flex justify-between w-full h-display text-[8.2vw] md:text-[6.8vw] leading-none select-none">
                {['PALACIOS', 'CAICEDO'].map((w, i) => <span key={i}>{w}</span>)}
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Sub-row */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-6 pb-4">
        <div className="rule-t border-rule/40 dark:border-[#E9E3D2]/30 pt-4">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-6 text-[12px]">
            <div className="md:col-span-3">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">Editor</div>
              <div className="mt-1 font-serif text-[15px] leading-snug">
                {CONTACT.nameDisplay}<br />
                <span className="opacity-70">{CONTACT.role} · {CONTACT.location.city}</span>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">Secciones</div>
              <nav className="mt-1 flex flex-wrap gap-x-4 gap-y-1 font-serif text-[15px]">
                {(Object.keys(PAGE_LABELS) as Page[]).map((p) => (
                  <button key={p} data-active={page === p} onClick={() => setPage(p)} className="nav-link">
                    {PAGE_LABELS[p]}
                  </button>
                ))}
              </nav>
            </div>

            <div className="md:col-span-3">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">Lectura</div>
              <div className="mt-1 flex flex-col gap-1 font-serif text-[15px]">
                <Toggle active={textMode} onClick={() => setTextMode(v => !v)} title="Modo texto (N)">
                  Text mode <span className="kbd ml-1 opacity-70">N</span>
                </Toggle>
                <Toggle active={dark} onClick={() => setDark(v => !v)} title="Modo oscuro (D)">
                  Dark mode <span className="kbd ml-1 opacity-70">D</span>
                </Toggle>
              </div>
            </div>

            <div className="md:col-span-3 md:text-right">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">Descargas</div>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); downloadCV(); }}
                className="mt-1 inline-flex items-center gap-2 font-serif text-[15px] ulink"
              >
                Curriculum Vitae · PDF
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="-mt-[1px]">
                  <path d="M6 1v8m0 0 3-3m-3 3-3-3M1 11h10" stroke="currentColor" strokeWidth="1" />
                </svg>
              </a>
              <div className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase opacity-60">v 2026.05 · ES/EN</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="rule-t rule-b border-rule/40 dark:border-[#E9E3D2]/30 overflow-hidden">
        <div className="ticker-track flex gap-10 whitespace-nowrap py-2 font-mono text-[10px] tracking-[0.22em] uppercase opacity-70" style={{ width: '200%' }}>
          {[0, 1].flatMap((copy) =>
            CONTACT.tickerItems.map((item, i) => (
              <span key={`${copy}-${i}`}>● {item}</span>
            ))
          )}
        </div>
      </div>
    </header>
  );
}
