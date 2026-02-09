import React, { useState, useEffect, useLayoutEffect } from 'react';
import { 
  AlertTriangle, 
  Ban, 
  FileText,
  Shield,
  Scale
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Terms: React.FC = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('tos-01');

  const sections = [
    { id: 'tos-01', label: '[TOS_01]', title: t('terms.s1.title'), icon: FileText },
    { id: 'tos-02', label: '[TOS_02]', title: t('terms.s2.title'), icon: Shield },
    { id: 'tos-03', label: '[TOS_03]', title: t('terms.s3.title'), icon: AlertTriangle },
    { id: 'tos-04', label: '[TOS_04]', title: t('terms.s4.title'), icon: Scale },
  ];

  useLayoutEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    
    const timeout = setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 50);
    
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      
      if (scrollY < 50) {
        setActiveSection('tos-01');
        return;
      }

      if (scrollY + viewportHeight >= fullHeight - 5) {
        setActiveSection('tos-04');
        return;
      }

let currentSectionId = sections[0].id;
let minDistance = Infinity;

sections.forEach(section => {
  const el = document.getElementById(section.id);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const sectionCenter = rect.top + rect.height / 2;
  const viewportCenter = viewportHeight / 2;

  const distance = Math.abs(sectionCenter - viewportCenter);

  if (distance < minDistance) {
    minDistance = distance;
    currentSectionId = section.id;
  }
});

setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]); 

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      setActiveSection(id);
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative pt-32 pb-24 min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] hero-glow z-0" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="mb-16 border-b border-white/5 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {t('terms.title')}
          </h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-primary/10 border border-cyber-primary/20 rounded">
            <div className="w-1.5 h-1.5 rounded-full bg-cyber-primary animate-pulse"></div>
            <span className="text-[10px] font-mono font-bold text-cyber-primary tracking-widest uppercase">
              {t('terms.last_updated')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-16">

            <div id="tos-01" className="scroll-mt-32">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-cyber-primary font-bold text-sm tracking-wide">[TOS_01]</span>
                <h2 className="text-2xl font-bold text-white">{t('terms.s1.title')}</h2>
              </div>
              
              <div className="bg-[#0f172a]/60 border border-white/5 backdrop-blur-md rounded-xl p-8 shadow-xl">
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t('terms.s1.content')}
                </p>
              </div>
            </div>

            <div id="tos-02" className="scroll-mt-32">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-cyber-primary font-bold text-sm tracking-wide">[TOS_02]</span>
                <h2 className="text-2xl font-bold text-white">{t('terms.s2.title')}</h2>
              </div>
              
              <div className="bg-[#0f172a]/60 border border-white/5 backdrop-blur-md rounded-xl p-8 shadow-xl space-y-6">
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t('terms.s2.content')}
                </p>

                <div className="bg-[#1a1600]/60 border border-yellow-500/20 rounded-lg p-5 flex gap-4 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500" />
                  <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-1.5">{t('terms.s2.alert_title')}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {t('terms.s2.alert_content')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="tos-03" className="scroll-mt-32">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-cyber-primary font-bold text-sm tracking-wide">[TOS_03]</span>
                <h2 className="text-2xl font-bold text-white">{t('terms.s3.title')}</h2>
              </div>
              
              <div className="bg-[#0f172a]/60 border border-white/5 backdrop-blur-md rounded-xl p-8 shadow-xl space-y-6">
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t('terms.s3.content')}
                </p>

                <div className="bg-[#1a0505]/60 border border-cyber-danger/20 rounded-lg p-5 flex gap-4 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyber-danger" />
                  <Ban className="w-5 h-5 text-cyber-danger shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-cyber-danger text-xs font-bold uppercase tracking-widest mb-1.5">{t('terms.s3.alert_title')}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {t('terms.s3.alert_content')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="tos-04" className="scroll-mt-32">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-cyber-primary font-bold text-sm tracking-wide">[TOS_04]</span>
                <h2 className="text-2xl font-bold text-white">{t('terms.s4.title')}</h2>
              </div>
              
              <div className="bg-[#0f172a]/60 border border-white/5 backdrop-blur-md rounded-xl p-8 shadow-xl">
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t('terms.s4.content')}
                </p>
              </div>
            </div>

          </div>

          <div className="hidden lg:block lg:col-span-4 pl-8">
            <div className="sticky top-32">

              <div className="bg-cyber-card-bg border border-white/5 rounded-xl p-6 backdrop-blur-md">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">{t('terms.toc')}</h3>
                <nav className="space-y-1">
                  {sections.map((item, i) => (
                    <button 
                      key={i}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all flex items-center gap-3 group border-l-2 ${
                        activeSection === item.id 
                          ? 'bg-white/5 text-white border-cyber-primary' 
                          : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <item.icon className={`w-4 h-4 transition-colors ${
                        activeSection === item.id ? 'text-cyber-primary' : 'text-slate-600 group-hover:text-cyber-primary'
                      }`} />
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Terms;