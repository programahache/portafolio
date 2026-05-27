import Folio from './Folio';
import { CONTACT } from '@/lib/data';

export default function MePage() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 mt-12">
      <Folio left="Sección · Información" center="Perfil del autor" right="Pág. M" />
      <div className="rule-t border-rule/40 dark:border-[#E9E3D2]/30 mt-3 pt-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">Ubicación</div>
            <div className="mt-2 font-serif text-[16px] leading-snug">
              {CONTACT.location.city},<br />{CONTACT.location.region},<br />{CONTACT.location.country}.
            </div>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60 mt-8">Redes</div>
            <ul className="mt-2 font-serif text-[15px] space-y-1.5">
              <li><a href={`mailto:${CONTACT.email}`} className="ulink">{CONTACT.email}</a></li>
              <li><a href={CONTACT.phone.href} className="ulink">{CONTACT.phone.display}</a></li>
              <li><a href={CONTACT.github.href} className="ulink">{CONTACT.github.label}</a></li>
              <li><a href={CONTACT.linkedin.href} className="ulink">{CONTACT.linkedin.label}</a></li>
            </ul>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60 mt-8">Disponibilidad</div>
            <div className="mt-2 font-serif text-[15px]">{CONTACT.availability}</div>
          </aside>

          {/* Lead copy */}
          <div className="col-span-12 md:col-span-6">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-70">Entrevista · auto-retrato</div>
            <h2 className="h-display mt-3 text-[40px] md:text-[60px]">
              Soy un desarrollador de software <em className="italic">en evolución constante</em>, enfocado en convertir ideas en producto.
            </h2>
            <p className="font-serif text-[17px] leading-[1.7] mt-6 dropcap">
              Con experiencia en frontend (HTML, CSS, JavaScript, React) y backend (Node.js, PHP, Laravel, .NET), trabajo a gusto en ambos lados del puente. Conozco SQL y MongoDB y aprendo rápido cuando un proyecto pide herramientas nuevas. Me importa el detalle, me importa el equipo, y me importa que el producto se pueda mantener tres años después sin pedir perdón.
            </p>
            <p className="font-serif text-[17px] leading-[1.7] mt-4 max-w-[58ch]">
              Disfruto los problemas complejos donde el diseño y la ingeniería se trenzan: dashboards densos, productos B2B, herramientas internas con muchos estados. Suelo pedir contexto antes de pedir requisitos.
            </p>
            <div className="mt-10">
              <div className="font-display italic text-3xl md:text-4xl">— Hagamos algo increíble juntos.</div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">Harold Palacios · Fullstack Developer</div>
            </div>
          </div>

          {/* Especialidades */}
          <aside className="col-span-12 md:col-span-3">
            <div className="rule-l border-rule/40 dark:border-[#E9E3D2]/30 pl-4">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">Especialidades</div>
              <ul className="mt-3 space-y-3 font-serif text-[15px]">
                {[['UI / UX', '03 años'], ['Front-end', '05 años'], ['Backend', '04 años'], ['Producto', '02 años']].map(([skill, years], i, arr) => (
                  <li key={skill} className={`flex items-baseline justify-between gap-4 pb-2 ${i < arr.length - 1 ? 'rule-b border-rule/20 dark:border-[#E9E3D2]/15' : ''}`}>
                    <span>{skill}</span><span className="font-mono opacity-70">{years}</span>
                  </li>
                ))}
              </ul>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60 mt-8">Pila técnica</div>
              <div className="mt-3 font-serif text-[15px] leading-relaxed">
                React · TypeScript · .NET · C# · Node.js · PHP · Laravel · SQL Server · PostgreSQL · MongoDB · Azure · Tailwind.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
