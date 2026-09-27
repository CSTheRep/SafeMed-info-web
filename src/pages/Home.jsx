import React from 'react';
import Hero from '../components/Hero';
import WhySafeMed from '../components/WhySafeMed';
import OriginStory from '../components/OriginStory';
import PrototypeSection from '../components/PrototypeSection';
import SurveySection from '../components/SurveySection';
import ResearchJourney from '../components/ResearchJourney';
import ResearchPapersSection from '../components/ResearchPapersSection';
import ResearchConnection from '../components/ResearchConnection';
import SafeMedWorkflow from '../components/SafeMedWorkflow';
import TechnologyStack from '../components/TechnologyStack';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import CurrentProgress from '../components/CurrentProgress';
import FutureVision from '../components/FutureVision';
import About from '../components/About';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Why SafeMed Section */}
      <WhySafeMed />

      {/* 3. Origin Story Section */}
      <OriginStory />

      {/* 4. Prototype Section */}
      <PrototypeSection />

      {/* 5. Survey / Review Stage Section */}
      <SurveySection />

      {/* 6. Main Research Journey (Centerpiece Timeline) */}
      <ResearchJourney />

      {/* 7. Research Papers Section (3 Major Cards) */}
      <ResearchPapersSection />

      {/* 8. From Research to SafeMed (Feedback Loop) */}
      <ResearchConnection />

      {/* 9. How SafeMed Works (Step-by-Step Workflow) */}
      <SafeMedWorkflow />

      {/* 10. Technology Behind SafeMed */}
      <TechnologyStack />

      {/* 11. High-Level System Architecture */}
      <ArchitectureDiagram />

      {/* 12. Current Progress */}
      <CurrentProgress />

      {/* 13. Future Vision */}
      <FutureVision />

      {/* 14. About SafeMed */}
      <About />
    </div>
  );
}
