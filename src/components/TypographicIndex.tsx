import Folio from './Folio';
import { COVER, type Project } from '@/lib/data';

type Props = { projects: Project[]; onOpen: (p: Project) => void };

export default function TypographicIndex({ projects, onOpen }: Props) {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 mt-20">
      <Folio left="Índice tipográfico" center="A–Z" right="Solo texto" />
      <div className="rule-t border-rule/40 dark:border-[#E9E3D2]/30 mt-3 pt-6">
        <ol className="divide-y divide-current/10">
          {[COVER, ...projects.filter(p => p.slug !== COVER.slug)].map((p) => (
            <li
              key={p.slug}
              onClick={() => onOpen(p)}
              className="grid grid-cols-12 gap-4 py-4 cursor-pointer items-baseline hover:bg-paperdeep dark:hover:bg-white/5 transition-colors px-2 -mx-2"
            >
              <div className="col-span-1 font-mono text-[12px] tracking-[0.22em] opacity-70">{p.num}</div>
              <div className="col-span-11 md:col-span-5 h-display text-[22px] md:text-[28px]">{p.title}</div>
              <div className="col-span-6 md:col-span-3 font-serif text-[14px] opacity-80">{p.client}</div>
              <div className="col-span-3 md:col-span-2 font-mono text-[10px] tracking-[0.22em] uppercase opacity-70">{p.year}</div>
              <div className="col-span-3 md:col-span-1 font-mono text-[10px] tracking-[0.22em] uppercase opacity-70 text-right">{p.role}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
