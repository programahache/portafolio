import type { Metadata } from 'next';
import { DM_Serif_Display, Newsreader, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--nf-display',
  display: 'swap',
});

const newsreader = Newsreader({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--nf-serif',
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--nf-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--nf-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Harold Palacios — Portafolio',
  description: 'Fullstack Developer · Medellín, Colombia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${dmSerifDisplay.variable} ${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning className="font-sans text-ink antialiased selection:bg-ink selection:text-paper">
        {children}
      </body>
    </html>
  );
}
