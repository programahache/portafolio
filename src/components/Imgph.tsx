import Image from 'next/image';

type Props = {
  tint?: string;
  label?: string;
  ratio?: string;
  src?: string;
  children?: React.ReactNode;
};

export default function Imgph({ tint = '#2a2a26', label = '', ratio = '4/3', src, children }: Props) {
  return (
    <div
      className="imgph img-hide img-replace relative overflow-hidden"
      style={{
        aspectRatio: ratio,
        background: src
          ? undefined
          : `linear-gradient(135deg, ${tint}11, ${tint}33), repeating-linear-gradient(135deg, rgba(0,0,0,.06) 0 1px, transparent 1px 7px)`,
      }}
    >
      {src ? (
        <Image src={src} alt={label} fill className="object-cover object-top" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-70" style={{ color: tint }}>
              {label}
            </div>
            <div className="mt-2 font-display text-2xl md:text-3xl" style={{ color: tint, opacity: 0.55 }}>
              ▮
            </div>
          </div>
        </div>
      )}
      <div className="absolute top-0 right-0 px-2 py-1 font-mono text-[9px] tracking-[0.2em] uppercase opacity-50 z-10">
        {children}
      </div>
    </div>
  );
}
