import Folio from './Folio';
import Imgph from './Imgph';
import { COVER, TINTS, type Project } from '@/lib/data';

type Props = { onOpen: (p: Project) => void };

export default function CoverStory({ onOpen }: Props) {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 mt-10 md:mt-16">
      <Folio left="Portada" center="No. 00 · LogiChef" right="Continúa en sección Proyectos" />
      <div className="rule-t border-rule/40 dark:border-[#E9E3D2]/30 mt-3 pt-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Kicker + headline */}
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-70">{COVER.kicker}</div>
            <h1 className="h-display mt-4 text-[44px] md:text-[88px]">
              LogiChef: la revolución del <em className="italic">SaaS</em> gastronómico con{' '}
              <span className="text-accent">inteligencia artificial</span>.
            </h1>
            <div className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase opacity-70 flex flex-wrap gap-x-6 gap-y-1">
              <span>Por Harold Palacios</span>
              <span>· Fullstack · Producto</span>
              <span>· 8 min de lectura</span>
              <span>· Publicado 2025</span>
            </div>
          </div>

          {/* Lead image */}
          <div className="col-span-12 md:col-span-5">
            <Imgph tint={TINTS['00']} label="LogiChef · UI · dashboard" ratio="4/5" src={COVER.img}>FIG. I</Imgph>
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-60 mt-2">
              Fig. I — Vista de operaciones, servicio del viernes.
            </div>
          </div>
        </div>

        {/* Deck + body */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mt-12">
          {/* Ficha */}
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">Ficha</div>
            <dl className="mt-2 text-[13px] font-serif space-y-1.5">
              {([['ID', '/00'], ['Año', COVER.year], ['Rol', COVER.role], ['Cliente', COVER.client], ['Stack', COVER.tech.join(' · ')]] as [string, string][]).map(([k, v]) => (
                <div key={k} className="grid grid-cols-3 gap-3">
                  <dt className="opacity-60 col-span-1">{k}</dt>
                  <dd className="col-span-2">{v}</dd>
                </div>
              ))}
            </dl>
            <button onClick={() => onOpen(COVER)} className="mt-6 inline-flex items-center gap-2 font-serif text-[15px] ulink">
              Leer reportaje completo
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8m0 0L7 3m3 3L7 9" stroke="currentColor" strokeWidth="1" /></svg>
            </button>
          </div>

          {/* Deck */}
          <div className="col-span-12 md:col-span-6 md:col-start-4">
            <p className="font-serif text-[20px] md:text-[24px] leading-[1.35] dropcap">{COVER.deck}</p>
            <p className="font-serif text-[16px] leading-[1.65] mt-6 max-w-[60ch] opacity-90">
              El proyecto sostiene tres pilares — predicción de demanda con modelos entrenados sobre el histórico del local,
              una capa transaccional en .NET 8 que orquesta inventarios y compras, y un frontend React que muestra todo eso
              a la velocidad del servicio.{' '}
              <em>No hay magia: hay ingeniería bien aburrida y una IA que aprende a callarse cuando no tiene nada útil que decir.</em>
            </p>
          </div>

          {/* En cifras */}
          <aside className="col-span-12 md:col-span-3 md:col-start-10">
            <div className="rule-l border-rule/40 dark:border-[#E9E3D2]/30 pl-4">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">En cifras</div>
              <ul className="mt-2 font-serif text-[14px] space-y-2">
                <li className="flex justify-between gap-3"><span className="opacity-70">Mermas</span><span>↓ 18%</span></li>
                <li className="flex justify-between gap-3"><span className="opacity-70">Tiempo de cierre</span><span>↓ 34 min</span></li>
                <li className="flex justify-between gap-3"><span className="opacity-70">Locales activos</span><span>12</span></li>
                <li className="flex justify-between gap-3"><span className="opacity-70">Modelos prod.</span><span>3</span></li>
              </ul>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60 mt-4">Tecnologías</div>
              <div className="mt-2 font-serif text-[14px] leading-relaxed">{COVER.tech.join(' · ')}</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
