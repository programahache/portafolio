'use client';

type Props = {
  active: boolean;
  onClick: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Toggle({ active, onClick, title, children }: Props) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`group flex items-center gap-2 leading-none transition-opacity ${active ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
    >
      <span className={`inline-block w-2 h-2 rounded-full border border-current ${active ? 'bg-current' : 'bg-transparent'}`} />
      <span>{children}</span>
    </button>
  );
}
