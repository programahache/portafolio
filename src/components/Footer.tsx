import { CONTACT } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="mt-32">
      <div className="rule-t border-rule/40 dark:border-[#E9E3D2]/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="h-display text-[48px] leading-none">{CONTACT.nameInitials[0]}<span className="inline-block w-10" />{CONTACT.nameInitials[1]}</div>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60 mt-2">{CONTACT.name} · MMXXVI</div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">Colofón</div>
            <p className="font-serif text-[14px] opacity-90 mt-2 leading-snug">
              Compuesto en DM Serif Display, Newsreader e Inter. Etiquetas en JetBrains Mono. Papel digital sobre fondo crema.
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">Suscripción</div>
            <form onSubmit={(e) => e.preventDefault()} className="mt-2 flex items-center gap-3 rule-b border-rule/40 dark:border-[#E9E3D2]/40 py-1">
              <input placeholder="correo@dominio.com" className="bg-transparent flex-1 font-serif text-[14px] outline-none placeholder:opacity-40" />
              <button className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-80 hover:opacity-100">Suscribir →</button>
            </form>
          </div>
          <div className="col-span-12 md:col-span-2 md:text-right">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">Edición</div>
            <div className="font-serif text-[14px] mt-2">v 2026.05<br />ES / EN</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
