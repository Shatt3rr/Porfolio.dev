import React, { useState, useEffect, useLayoutEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Arsenal from './components/Arsenal';
import Toolkit from './components/Toolkit';
//import Certifications from './components/Certifications';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const SectionSeparator: React.FC = () => (
  <div className="w-full flex justify-center">
    <div className="h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/5 to-transparent" />
  </div>
);

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [pendingTarget, setPendingTarget] = useState<string | null>(null);

  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname;
      if (path === '/privacy') {
        setCurrentPage('privacy');
      } else if (path === '/terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }      
      document.documentElement.style.scrollBehavior = 'auto';
      
      setTimeout(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = 'smooth';
        }, 50);
      }, 0);
    };


    handleLocation();

    window.addEventListener('popstate', handleLocation);
    
    return () => window.removeEventListener('popstate', handleLocation);
  }, []);

  useLayoutEffect(() => {
    if (currentPage === 'home' && pendingTarget) {
      const element = document.getElementById(pendingTarget);
      if (element) {
        document.documentElement.style.scrollBehavior = 'auto';
        element.scrollIntoView({ behavior: 'auto' });
        setPendingTarget(null);
        
        // Restore smooth scroll
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = 'smooth';
        }, 50);
      }
    }
  }, [currentPage, pendingTarget]);

  const navigateTo = (page: string, targetId?: string) => {
    const isPageChange = currentPage !== page;
    
    if (page === 'privacy') {
      document.documentElement.style.scrollBehavior = 'auto';
      window.history.pushState(null, '', '/privacy');
      setCurrentPage('privacy');
      
      setTimeout(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = 'smooth';
        }, 50);
      }, 0);
    } else if (page === 'terms') {
      document.documentElement.style.scrollBehavior = 'auto';
      window.history.pushState(null, '', '/terms');
      setCurrentPage('terms');

      setTimeout(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = 'smooth';
        }, 50);
      }, 0);
    } else {

      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
      }

      if (isPageChange) {
        document.documentElement.style.scrollBehavior = 'auto';
        
        if (targetId) {
          setPendingTarget(targetId);
        } else {
          window.scrollTo(0, 0);
        }
        
        setCurrentPage('home');
      } else {
        document.documentElement.style.scrollBehavior = 'smooth';
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  };
  return (
    <div className="min-h-screen font-sans selection:bg-cyber-primary/30 selection:text-white">
      <Header onNavigate={navigateTo} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={navigateTo} />
            <SectionSeparator />
            <Services />
            <SectionSeparator />
            <Projects />
            <SectionSeparator />
            <Arsenal />
            <SectionSeparator />
            <Toolkit />
            {/*<SectionSeparator />
            <Certifications />*/}
            <SectionSeparator />
            <About />
            <SectionSeparator />
            <Contact />
          </>
        )}
        {currentPage === 'privacy' && <Privacy />}
        {currentPage === 'terms' && <Terms />}
      </main>
     <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;