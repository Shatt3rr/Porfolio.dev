import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyber-primary/20 to-cyber-primary/20 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000" />
          <div className="relative rounded-lg overflow-hidden aspect-[4/5] border border-white/10 bg-black shadow-2xl">
            <img 
              src="/assets/logo.png" 
              alt="Profile" 
              className="w-full h-full object-cover opacity-80 transition duration-700"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-cyber-primary pl-4">{t('about.title')}</h2>
          
          <div className="space-y-6 text-slate-400 text-sm lg:text-base leading-relaxed max-w-2xl font-medium">
            <p>
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2')}
            </p>
            <p>
              {t('about.p3')}
            </p>
          </div>

          <div className="flex gap-12 mt-12 pt-10 border-t border-white/10">
            <div>
              <p className="text-3xl font-bold text-cyber-primary">2+</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-2">{t('about.years_exp')}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyber-primary tracking-tighter">{t('about.global')}</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-2">{t('about.client_base')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;