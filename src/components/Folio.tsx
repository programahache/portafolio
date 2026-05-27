type Props = { left: string; center: string; right: string };

export default function Folio({ left, center, right }: Props) {
  return (
    <div className="font-mono text-[10px] tracking-[0.22em] uppercase flex justify-between opacity-70">
      <div>{left}</div>
      <div>{center}</div>
      <div>{right}</div>
    </div>
  );
}
