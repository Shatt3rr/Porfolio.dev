import React from 'react';
import { Shield, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  onNavigate: (page: string, targetId?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { t, i18n } = useTranslation();

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (target === 'home') {
      onNavigate('home');
    } else {
      onNavigate('home', target);
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };
  
  const navItems = [
    { key: 'home', label: t('header.home') },
    { key: 'projects', label: t('header.projects') },
    { key: 'about', label: t('header.about') },
    { key: 'contact', label: t('header.contact') }
  ];

  const activeLang = i18n.resolvedLanguage || 'en';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-cyber-bg/70 border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 group cursor-pointer" 
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <Shield className="w-5 h-5 text-cyber-primary" />
          <span className="font-sans font-bold text-sm text-white">
            Daniel <span className="text-slate-400">Haba</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              onClick={(e) => handleNavClick(e, item.key)}
              className="text-[11px] font-medium text-slate-400 hover:text-cyber-primary transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

         <div className="flex items-center gap-3 md:gap-4">
          {/*<button className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-cyber-accent/50 rounded text-cyber-accent text-[10px] font-bold uppercase tracking-wider hover:bg-cyber-accent/10 transition-all">
            <FileText className="w-3.5 h-3.5" />
            Resume.pdf
          </button>
          */}
          
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase">
            <span 
              onClick={() => changeLanguage('en')}
              className={`cursor-pointer transition-colors ${activeLang === 'en' ? 'text-white' : 'hover:text-white'}`}
            >
              EN
            </span>
            <span className="opacity-20">|</span>
            <span 
              onClick={() => changeLanguage('es')}
              className={`cursor-pointer transition-colors ${activeLang === 'es' ? 'text-white' : 'hover:text-white'}`}
            >
              ES
            </span>
          </div>

          <button 
            onClick={() => onNavigate('home', 'contact')}
            className="bg-cyber-primary text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 md:px-4 md:py-2 rounded shadow-lg hover:brightness-110 transition-all"
          >
            {t('header.hire_me')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;