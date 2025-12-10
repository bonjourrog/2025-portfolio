'use client'
import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects/projects';
import Skills from '@/components/skills';
import React, { useState, useEffect } from 'react';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const handleScroll = () => {
    const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    if (current) setActiveSection(current);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', backgroundColor: '#ffffff', color: '#1a1a1a', lineHeight: 1.6 }}>
      <Header />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <Hero />
        <About />
        <Experience/>
        <Projects />
        <Skills/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
};

export default Portfolio;