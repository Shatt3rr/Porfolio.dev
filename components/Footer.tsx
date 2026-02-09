import React from 'react';
import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  onNavigate: (page: string, targetId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-cyber-primary" />
          <span className="font-sans font-bold text-sm text-white">
            Daniel <span className="text-slate-400">Haba</span>
          </span>
        </div>

        <div className="flex items-center gap-10 text-[11px] text-slate-500 font-medium">
          <button
            type="button"
            onClick={() => onNavigate('privacy')}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            {t('footer.privacy')}
          </button>
          <button 
            type="button"
            onClick={() => onNavigate('terms')}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            {t('footer.terms')}
          </button>
          <a 
            href="https://github.com/Shatt3rr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/daniel-haba-lechiguero-a61158227/?locale=en-US" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-[10px] text-slate-600 font-medium">
          © {new Date().getFullYear()} Daniel Haba. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;