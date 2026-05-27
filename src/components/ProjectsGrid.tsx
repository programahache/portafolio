import Folio from './Folio';
import Imgph from './Imgph';
import { TINTS, GRID_PATTERN, SPAN_CLASS, type Project } from '@/lib/data';

type Props = {
  projects: Project[];
  onOpen: (p: Project) => void;
  title?: string;
};

export default function ProjectsGrid({ projects, onOpen, title = 'Sección · Proyectos' }: Props) {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 mt-20 md:mt-28">
      <Folio left={title} center={`${projects.length} entradas`} right="Continúa →" />
      <div className="rule-t border-rule/40 dark:border-[#E9E3D2]/30 mt-3 pt-8">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14 md:gap-y-20">
          {projects.map((p, i) => {
            const [span, ratio] = GRID_PATTERN[i % GRID_PATTERN.length];
            return (
              <article
                key={p.slug}
                className={`col-span-12 ${SPAN_CLASS[span] ?? 'md:col-span-4'} group cursor-pointer`}
                onClick={() => onOpen(p)}
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <div className="min-w-0">
                    <h3 className="h-display text-[28px] md:text-[34px] truncate text-accent">{p.title}</h3>
                    <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60 mt-0.5">{p.client}</div>
                  </div>
                  <div className="font-mono text-[12px] tracking-[0.22em] opacity-70 shrink-0">{p.num}</div>
                </div>

                <div className="img-replace">
                  <Imgph tint={TINTS[p.num] ?? '#222'} ratio={ratio} label={p.title} src={p.img}>{p.year}</Imgph>
                </div>

                <div className="rule-t border-rule/30 dark:border-[#E9E3D2]/20 mt-3 pt-3 flex items-start justify-between gap-6">
                  <p className="font-serif text-[14px] leading-snug max-w-[44ch]">{p.one}</p>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-60 text-right shrink-0">
                    <div>{p.role}</div>
                    <div className="mt-0.5">→ Leer ficha</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
