
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import ContactPage from './components/ContactPage.tsx';
import Footer from './components/Footer.tsx';
import SkillDetailView from './components/SkillDetailView.tsx';
import AboutUsPage from './components/AboutUsPage.tsx';
import { Skill } from './types.ts';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [currentView, setCurrentView] = useState<'landing' | 'about-us' | 'contact'>('landing');
  const [initialAboutSection, setInitialAboutSection] = useState<string | undefined>();

  useEffect(() => {
    if (selectedSkill || currentView !== 'landing') return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedSkill, currentView]);

  const handleNavigate = (view: 'landing' | 'about-us' | 'contact', section?: string) => {
    setCurrentView(view);
    setInitialAboutSection(section);
    setSelectedSkill(null);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (selectedSkill) {
      return (
        <div className="pt-20">
          <SkillDetailView skill={selectedSkill} onBack={() => setSelectedSkill(null)} />
        </div>
      );
    }

    if (currentView === 'about-us') {
      return (
        <AboutUsPage 
          initialSection={initialAboutSection} 
          onBack={() => setCurrentView('landing')} 
        />
      );
    }

    if (currentView === 'contact') {
      return (
        <ContactPage onBack={() => setCurrentView('landing')} />
      );
    }

    return (
      <main>
        <Hero onContactClick={() => handleNavigate('contact')} />
        <About onContactClick={() => handleNavigate('contact')} />
        <Skills onSkillClick={(skill) => setSelectedSkill(skill)} />
        <Projects />
        <Contact />
      </main>
    );
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background blobs for aesthetic */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full -z-10"></div>

      <Navbar 
        activeSection={currentView === 'landing' ? activeSection : (currentView === 'contact' ? 'contact' : '')} 
        onNavigate={handleNavigate} 
        currentView={currentView} 
      />
      
      {renderContent()}

      <Footer />
    </div>
  );
};

export default App;
