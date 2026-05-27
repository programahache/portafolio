'use client';

import { useState, useEffect, useMemo } from 'react';
import Header, { type Page } from '@/components/Header';
import CoverStory from '@/components/CoverStory';
import ProjectsGrid from '@/components/ProjectsGrid';
import TypographicIndex from '@/components/TypographicIndex';
import MePage from '@/components/MePage';
import ContactPage from '@/components/ContactPage';
import DetailPanel from '@/components/DetailPanel';
import Footer from '@/components/Footer';
import { PROJECTS, type Project } from '@/lib/data';

export default function PortfolioPage() {
  const [page, setPage] = useState<Page>('home');
  const [textMode, setTextMode] = useState(false);
  const [dark, setDark] = useState(false);
  const [openProject, setOpenProject] = useState<Project | null>(null);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) html.classList.add('dark');
    else html.classList.remove('dark');
  }, [dark]);

  const wrapClass = [
    textMode ? 'text-mode' : '',
    dark ? 'bg-[#0E0E0D] text-[#E9E3D2]' : 'bg-paper text-ink',
    'min-h-screen',
  ].filter(Boolean).join(' ');

  const pageBody = useMemo(() => {
    switch (page) {
      case 'home':
        return (
          <div key="home" className="pageturn">
            <CoverStory onOpen={setOpenProject} />
            {textMode
              ? <TypographicIndex projects={PROJECTS} onOpen={setOpenProject} />
              : <ProjectsGrid projects={PROJECTS} onOpen={setOpenProject} />}
          </div>
        );
      case 'work':
        return (
          <div key="work" className="pageturn">
            {textMode
              ? <TypographicIndex projects={PROJECTS} onOpen={setOpenProject} />
              : <ProjectsGrid projects={PROJECTS} onOpen={setOpenProject} title="Sección · Proyectos completos" />}
          </div>
        );
      case 'me':      return <div key="me"      className="pageturn"><MePage /></div>;
      case 'contact': return <div key="contact" className="pageturn"><ContactPage /></div>;
    }
  }, [page, textMode]);

  return (
    <div className={wrapClass}>
      <Header
        page={page} setPage={setPage}
        textMode={textMode} setTextMode={setTextMode}
        dark={dark} setDark={setDark}
      />
      {pageBody}
      <Footer />
      <DetailPanel project={openProject} onClose={() => setOpenProject(null)} />
    </div>
  );
}
