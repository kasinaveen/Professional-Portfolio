import React, { useState } from 'react';
import { useSoundEffects } from './hooks/useSoundEffects';
import { useScrollSpy } from './hooks/useScrollSpy';

// Background & Layout
import { BootScreen } from './components/layout/BootScreen';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { SpaceBackground } from './components/background/SpaceBackground';

// Main Content Sections
import { HeroSection } from './components/hero/HeroSection';
import { QuickStats } from './components/stats/QuickStats';
import { AboutSection } from './components/about/AboutSection';
import { EducationTimeline } from './components/about/EducationTimeline';
import { SkillsMatrix } from './components/skills/SkillsMatrix';
import { JavaShowcase } from './components/skills/JavaShowcase';
import { DeveloperJourney } from './components/journey/DeveloperJourney';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { WebToMobileSection } from './components/projects/WebToMobileSection';
import { CaseStudiesSection } from './components/casestudies/CaseStudiesSection';
import { HackathonSection } from './components/achievements/HackathonSection';
import { NptelCertSection } from './components/achievements/NptelCertSection';
import { PresentationsSection } from './components/achievements/PresentationsSection';
import { CurrentlyLearning } from './components/learning/CurrentlyLearning';
import { ResumeSection } from './components/resume/ResumeSection';
import { ContactSection } from './components/contact/ContactSection';
import { DeclarationSection } from './components/contact/DeclarationSection';

// Common Components
import { Lightbox } from './components/common/Lightbox';

const SECTION_IDS = [
  'hero',
  'about',
  'education',
  'skills',
  'java',
  'projects',
  'mobile',
  'case-studies',
  'achievements',
  'journey',
  'learning',
  'resume',
  'contact'
];

export function App() {
  const [bootCompleted, setBootCompleted] = useState<boolean>(false);
  const { playClick, playHover, playTerminalKey, playSuccess } = useSoundEffects();
  const { activeSection } = useScrollSpy(SECTION_IDS, 180);

  // Lightbox Global State
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    caption: string;
    allImages?: Array<{ url: string; caption: string }>;
    initialIndex?: number;
  }>({
    isOpen: false,
    imageUrl: '',
    caption: '',
    allImages: [],
    initialIndex: 0
  });

  const handleOpenLightbox = (
    imageUrl: string, 
    caption: string, 
    allImages?: Array<{ url: string; caption: string }>, 
    initialIndex = 0
  ) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      caption,
      allImages: allImages || [{ url: imageUrl, caption }],
      initialIndex
    });
    if (playClick) playClick();
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
    if (playClick) playClick();
  };

  return (
    <div className="relative min-h-screen bg-[#020611] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 antialiased overflow-x-hidden">
      {/* Cinematic Space Initial Loading Screen */}
      {!bootCompleted && (
        <BootScreen onComplete={() => setBootCompleted(true)} />
      )}

      {/* 6-Layer Cinematic Space Background Canvas */}
      <SpaceBackground />
      <CustomCursor />

      {/* Floating Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        playClick={playClick}
        playHover={playHover}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection
          playClick={playClick}
          playHover={playHover}
          playTerminalKey={playTerminalKey}
          playSuccess={playSuccess}
        />

        {/* 2. Quick Profile Metrics */}
        <QuickStats playHover={playHover} />

        {/* 3. About Me Section */}
        <AboutSection playHover={playHover} />

        {/* 4. Education Timeline */}
        <EducationTimeline playHover={playHover} />

        {/* 5. Technical Skills Matrix & Constellation */}
        <SkillsMatrix playClick={playClick} playHover={playHover} />

        {/* 6. Java Primary Specialization Section */}
        <JavaShowcase
          playClick={playClick}
          playHover={playHover}
          playSuccess={playSuccess}
        />

        {/* 7. Things I've Built (Projects Suite) */}
        <ProjectsSection
          onOpenLightbox={handleOpenLightbox}
          playClick={playClick}
          playHover={playHover}
        />

        {/* 8. Web to Mobile Multi-Platform Section */}
        <WebToMobileSection playClick={playClick} playHover={playHover} />

        {/* 9. Engineering Case Studies */}
        <CaseStudiesSection playClick={playClick} playHover={playHover} />

        {/* 10. Hackathon Achievements */}
        <HackathonSection playClick={playClick} playHover={playHover} />

        {/* 11. NPTEL Certification & Technical Presentations */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NptelCertSection playClick={playClick} playHover={playHover} />
          <PresentationsSection playClick={playClick} playHover={playHover} />
        </div>

        {/* 12. Development Journey */}
        <DeveloperJourney playHover={playHover} />

        {/* 13. Currently Learning */}
        <CurrentlyLearning playHover={playHover} />

        {/* 15. The Complete Profile (Resume) */}
        <ResumeSection playClick={playClick} playHover={playHover} />

        {/* 16. Contact Section */}
        <ContactSection
          playClick={playClick}
          playHover={playHover}
          playSuccess={playSuccess}
        />

        {/* 17. Official Declaration */}
        <DeclarationSection />
      </main>

      {/* Global Minimal Footer */}
      <Footer playClick={playClick} playHover={playHover} />

      {/* High-Resolution Screenshot Lightbox */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        imageUrl={lightboxState.imageUrl}
        caption={lightboxState.caption}
        allImages={lightboxState.allImages}
        initialIndex={lightboxState.initialIndex}
        onClose={handleCloseLightbox}
        playClick={playClick}
        playHover={playHover}
      />
    </div>
  );
}

export default App;
