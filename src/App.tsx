/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ExpertiseSection } from './components/ExpertiseSection';
import { PortfolioSection } from './components/PortfolioSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledContactNotes, setPrefilledContactNotes] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section for navigation highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['expertise', 'portfolio', 'before-after', 'process', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 400) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConsultation = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePortfolio = () => {
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setPrefilledContactNotes(`Inquiry regarding ${serviceTitle}. Looking for a comprehensive site assessment and free on-site quotation.`);
    handleOpenConsultation();
  };

  const handleBookConsultationForProject = (projectTitle: string) => {
    setPrefilledContactNotes(`Inquiry regarding project build similar to: "${projectTitle}". Interested in architectural consultation and scope review.`);
    handleOpenConsultation();
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col selection:bg-[#d4af37]/30 selection:text-[#554300]">
      {/* Top Navigation */}
      <Header 
        onOpenConsultation={handleOpenConsultation}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onExplorePortfolio={handleExplorePortfolio}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Key Metrics / Stats Bar */}
        <StatsBar />

        {/* Our Expertise Section */}
        <ExpertiseSection 
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* Featured Portfolio Section */}
        <PortfolioSection 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Before & After Interactive Comparison Slider */}
        <BeforeAfterSlider />

        {/* 4-Stage Master Build Process */}
        <ProcessSection />

        {/* Client Endorsements & Accreditations */}
        <TestimonialsSection />

        {/* Architectural Consultation & Inquiry Form */}
        <ContactSection 
          prefilledNotes={prefilledContactNotes}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onBookConsultationForProject={handleBookConsultationForProject}
        />
      )}
    </div>
  );
}
