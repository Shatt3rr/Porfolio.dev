import React from 'react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onNavigate: (page: string, targetId?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-48 overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] hero-glow z-0" />

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 px-2.5 py-1 bg-cyber-accent/10 border border-cyber-accent/20 rounded text-cyber-accent w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] uppercase">{t('hero.system_secure')}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white break-words">
            {t('hero.title_1')}<br />
            <span className="gradient-text">{t('hero.title_2')}</span>
          </h1>

          <p className="text-sm lg:text-base text-slate-400 leading-relaxed max-w-lg">
            {t('hero.subtitle')}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); onNavigate('home', 'projects'); }}
              className="bg-cyber-primary text-white font-bold text-xs py-3 px-6 rounded-lg hover:brightness-110 transition-all glow-primary inline-flex items-center justify-center text-center cursor-pointer"
            >
              {t('hero.cta_projects')}
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); onNavigate('home', 'contact'); }}
              className="bg-transparent border border-slate-700 text-white font-bold text-xs py-3 px-6 rounded-lg hover:bg-slate-800/50 transition-all inline-flex items-center justify-center text-center cursor-pointer"
            >
              {t('hero.cta_contact')}
            </a>
          </div>

          <div className="flex gap-12 mt-10">
            <div>
              <p className="text-2xl font-bold text-white">30+</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">{t('hero.stat_vulns')}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">15+</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">{t('hero.stat_audits')}</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="cyber-card relative rounded-card p-6 overflow-hidden min-h-[340px]">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70"
              style={{
                backgroundImage: `url('/assets/terminal-bg.png')`
              }}
            />
            
            <div className="absolute inset-0 z-10 bg-[#070B14]/70 backdrop-blur-[1px]" />
            
            <div className="relative z-20">
              <div className="flex gap-1.5 mb-6 opacity-30">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              
              <pre className="font-mono text-[11px] lg:text-xs leading-relaxed text-slate-100">
                <span className="text-cyber-primary">const</span> <span className="text-cyber-accent">securityProtocol</span> = {'{'}<br />
                &nbsp;&nbsp;status: <span className="text-yellow-200">"active"</span>,<br />
                &nbsp;&nbsp;level: <span className="text-yellow-200">"max"</span>,<br />
                &nbsp;&nbsp;modules: [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">"firewall"</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">"encryption"</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">"threat_detection"</span><br />
                &nbsp;&nbsp;]<br />
                {'}'};<br /><br />
                <span className="text-cyber-primary">function</span> <span className="text-green-400">initDefense</span>() {'{'}<br />
                &nbsp;&nbsp;console.<span className="text-blue-300">log</span>(<span className="text-yellow-200">"{t('hero.defense_init')}"</span>);<br />
                &nbsp;&nbsp;<span className="text-cyber-primary">return</span> <span className="text-blue-300">true</span>;<br />
                {'}'}
              </pre>
            </div>
            
            <div className="absolute bottom-6 right-6 bg-black/90 border border-cyber-danger/30 px-3 py-2 rounded-lg shadow-2xl flex items-center gap-3 min-w-[160px] backdrop-blur-md z-30">
              <div className="w-2 h-2 rounded-full bg-cyber-danger animate-pulse shadow-[0_0_8px_#FF3B3B]" />
              <div className="flex-1">
                <p className="text-[9px] text-cyber-danger font-bold uppercase tracking-widest">{t('hero.threat_blocked')}</p>
                <div className="h-[2px] w-full bg-slate-900 rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full bg-cyber-danger w-1/3 animate-progress" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;