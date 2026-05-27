'use client';

import Folio from './Folio';

export default function ContactPage() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 mt-12">
      <Folio left="Sección · Contacto" center="Por correo" right="Pág. K" />
      <div className="rule-t border-rule/40 dark:border-[#E9E3D2]/30 mt-3 pt-10 grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-7">
          <h2 className="h-display text-[44px] md:text-[72px]">¿Tienes un proyecto?<br /><em className="italic opacity-80">Escríbeme.</em></h2>
          <p className="font-serif text-[18px] leading-[1.65] mt-6 max-w-[60ch]">
            Respondo en menos de 24 horas. Cuéntame el contexto, el plazo aproximado y el equipo con el que ya cuentas — el resto lo ordenamos juntos.
          </p>
        </div>
        <div className="col-span-12 md:col-span-5">
          <form className="grid grid-cols-1 gap-5" onSubmit={(e) => { e.preventDefault(); alert('Mensaje enviado (demo).'); }}>
            {[['text', 'Nombre'], ['email', 'Correo']].map(([type, label]) => (
              <label key={label} className="block">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">{label}</span>
                <input type={type} required className="mt-1 w-full bg-transparent rule-b border-rule/40 dark:border-[#E9E3D2]/40 py-2 font-serif text-[16px] outline-none focus:border-current" />
              </label>
            ))}
            <label className="block">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">Mensaje</span>
              <textarea rows={4} required className="mt-1 w-full bg-transparent rule-b border-rule/40 dark:border-[#E9E3D2]/40 py-2 font-serif text-[16px] outline-none focus:border-current resize-none" />
            </label>
            <button type="submit" className="mt-2 self-start inline-flex items-center gap-3 font-serif text-[16px] ulink">
              Enviar mensaje
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8m0 0L7 3m3 3L7 9" stroke="currentColor" strokeWidth="1" /></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
