import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { 
  Shield, 
  Lock, 
  FileText, 
  Activity, 
  Fingerprint, 
  CheckCircle,
  Globe,
  Database,
  Clock,
  Share2,
  Cookie,
  Scale,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Privacy: React.FC = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('intro');
  const visibleSections = useRef<Set<string>>(new Set());

  const sections = [
    { id: 'intro', title: t('privacy.sections.intro.title'), icon: FileText },
    { id: 'collection', title: t('privacy.sections.collection.title'), icon: Database },
    { id: 'usage', title: t('privacy.sections.usage.title'), icon: Activity },
    { id: 'retention', title: t('privacy.sections.retention.title'), icon: Clock },
    { id: 'third-party', title: t('privacy.sections.third_party.title'), icon: Share2 },
    { id: 'cookies', title: t('privacy.sections.cookies.title'), icon: Cookie },
    { id: 'rights', title: t('privacy.sections.rights.title'), icon: Scale },
    { id: 'security', title: t('privacy.sections.security.title'), icon: Shield },
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
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (window.scrollY < 100) {
        setActiveSection('intro');
        return;
      }

      if (scrollPosition >= documentHeight - 50) {
        setActiveSection('security');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.current.add(entry.target.id);
          } else {
            visibleSections.current.delete(entry.target.id);
          }
        });

        if (window.scrollY < 100 || (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
           return;
        }

        const visibleId = sections.find(section => visibleSections.current.has(section.id))?.id;
        
        if (visibleId) {
          setActiveSection(visibleId);
        }
      },
      { 

        rootMargin: '-40% 0px -40% 0px',
        threshold: 0 
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
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
        
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-primary/10 border border-cyber-primary/20 rounded mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-cyber-primary animate-pulse"></div>
            <span className="text-[10px] font-mono font-bold text-cyber-primary tracking-widest uppercase">{t('privacy.last_updated')}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {t('privacy.title')}
          </h1>
          
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mb-10 font-medium">
            {t('privacy.intro_desc')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <div className="bg-cyber-card-bg border border-white/5 rounded-lg p-4 flex flex-col">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                <Activity className="w-3 h-3" /> {t('privacy.status.label')}
              </span>
              <span className="text-sm font-bold text-white">{t('privacy.status.active')}</span>
            </div>
            <div className="bg-cyber-card-bg border border-white/5 rounded-lg p-4 flex flex-col">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                <FileText className="w-3 h-3" /> {t('privacy.status.compliance')}
              </span>
              <span className="text-sm font-bold text-white">{t('privacy.status.gdpr')}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          
          <div className="lg:col-span-8 space-y-16">
            
            <div id="intro" className="scroll-mt-32">
              <div className="inline-block px-2 py-1 bg-cyber-accent/10 border border-cyber-accent/20 text-cyber-accent font-mono text-[10px] font-bold mb-6 rounded">
                [SECTION_01]
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-cyber-primary" />
                {t('privacy.sections.intro.title')}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {t('privacy.sections.intro.content')}
              </p>
            </div>

            <div id="collection" className="scroll-mt-32 border-t border-white/5 pt-16">
              <div className="inline-block px-2 py-1 bg-cyber-accent/10 border border-cyber-accent/20 text-cyber-accent font-mono text-[10px] font-bold mb-6 rounded">
                [SECTION_02]
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-cyber-primary" />
                {t('privacy.sections.collection.title')}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {t('privacy.sections.collection.content')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/20 border border-white/5 p-4 rounded-lg">
                  <Fingerprint className="w-5 h-5 text-cyber-primary mb-3" />
                  <h3 className="text-xs font-bold text-white mb-2">{t('privacy.sections.collection.tech_title')}</h3>
                  <p className="text-slate-500 text-xs">{t('privacy.sections.collection.tech_desc')}</p>
                </div>
                <div className="bg-black/20 border border-white/5 p-4 rounded-lg">
                  <Globe className="w-5 h-5 text-cyber-primary mb-3" />
                  <h3 className="text-xs font-bold text-white mb-2">{t('privacy.sections.collection.personal_title')}</h3>
                  <p className="text-slate-500 text-xs">{t('privacy.sections.collection.personal_desc')}</p>
                </div>
              </div>
            </div>

            <div id="usage" className="scroll-mt-32 border-t border-white/5 pt-16">
              <div className="inline-block px-2 py-1 bg-cyber-accent/10 border border-cyber-accent/20 text-cyber-accent font-mono text-[10px] font-bold mb-6 rounded">
                [SECTION_03]
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Activity className="w-6 h-6 text-cyber-primary" />
                {t('privacy.sections.usage.title')}
              </h2>
              <ul className="space-y-3">
                {[
                  t('privacy.sections.usage.li1'),
                  t('privacy.sections.usage.li2'),
                  t('privacy.sections.usage.li3'),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-cyber-primary shrink-0 mt-0.5" />
                    <span className="text-slate-400 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="retention" className="scroll-mt-32 border-t border-white/5 pt-16">
              <div className="inline-block px-2 py-1 bg-cyber-accent/10 border border-cyber-accent/20 text-cyber-accent font-mono text-[10px] font-bold mb-6 rounded">
                [SECTION_04]
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-cyber-primary" />
                {t('privacy.sections.retention.title')}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('privacy.sections.retention.content')}
              </p>
            </div>

             <div id="third-party" className="scroll-mt-32 border-t border-white/5 pt-16">
              <div className="inline-block px-2 py-1 bg-cyber-accent/10 border border-cyber-accent/20 text-cyber-accent font-mono text-[10px] font-bold mb-6 rounded">
                [SECTION_05]
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Share2 className="w-6 h-6 text-cyber-primary" />
                {t('privacy.sections.third_party.title')}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('privacy.sections.third_party.content')}
              </p>
            </div>

            <div id="cookies" className="scroll-mt-32 border-t border-white/5 pt-16">
              <div className="inline-block px-2 py-1 bg-cyber-accent/10 border border-cyber-accent/20 text-cyber-accent font-mono text-[10px] font-bold mb-6 rounded">
                [SECTION_06]
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Cookie className="w-6 h-6 text-cyber-primary" />
                {t('privacy.sections.cookies.title')}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('privacy.sections.cookies.content')}
              </p>
            </div>

            <div id="rights" className="scroll-mt-32 border-t border-white/5 pt-16">
              <div className="inline-block px-2 py-1 bg-cyber-accent/10 border border-cyber-accent/20 text-cyber-accent font-mono text-[10px] font-bold mb-6 rounded">
                [SECTION_07]
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Scale className="w-6 h-6 text-cyber-primary" />
                {t('privacy.sections.rights.title')}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {t('privacy.sections.rights.content')}
              </p>
              <div className="bg-cyber-card-bg border border-white/5 rounded-lg p-4">
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyber-accent rounded-full"></div>{t('privacy.sections.rights.r1')}</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyber-accent rounded-full"></div>{t('privacy.sections.rights.r2')}</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyber-accent rounded-full"></div>{t('privacy.sections.rights.r3')}</li>
                </ul>
              </div>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                {t('privacy.sections.rights.note')}
              </p>
            </div>

            <div id="security" className="scroll-mt-32 border-t border-white/5 pt-16">
              <div className="inline-block px-2 py-1 bg-cyber-accent/10 border border-cyber-accent/20 text-cyber-accent font-mono text-[10px] font-bold mb-6 rounded">
                [SECTION_08]
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-cyber-primary" />
                {t('privacy.sections.security.title')}
              </h2>
              
              <div className="bg-cyber-card-bg border border-white/5 rounded-lg p-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-cyber-primary"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-cyber-primary/10 rounded-lg">
                    <Lock className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{t('privacy.sections.security.card_title')}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {t('privacy.sections.security.card_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4 pl-8">
            <div className="sticky top-32">
              <div className="bg-cyber-card-bg border border-white/5 rounded-xl p-6 mb-6 backdrop-blur-md">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">{t('privacy.sections.toc')}</h3>
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

              <div className="rounded-full border border-white/5 bg-black/20 p-3 text-center">
                <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2">
                  <Shield className="w-3 h-3" /> {t('privacy.sections.compliant_badge')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Privacy;