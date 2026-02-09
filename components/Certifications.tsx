import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const { t } = useTranslation();

  const certs = [
    { 
      name: 'OSCP', 
      issuer: t('certifications.oscp.issuer'), 
      desc: t('certifications.oscp.desc'),
      link: '#'
    },
    { 
      name: 'CISSP', 
      issuer: t('certifications.cissp.issuer'), 
      desc: t('certifications.cissp.desc'),
      link: '#'
    },
    { 
      name: 'Sec+', 
      issuer: t('certifications.sec_plus.issuer'), 
      desc: t('certifications.sec_plus.desc'),
      link: '#'
    },
    { 
      name: 'CEH', 
      issuer: t('certifications.ceh.issuer'), 
      desc: t('certifications.ceh.desc'),
      link: '#'
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <h2 className="text-3xl font-bold text-white border-l-4 border-cyber-primary pl-6">
            {t('certifications.title')}
          </h2>
          <p className="text-slate-500 text-xs font-mono mt-4 md:mt-0 uppercase tracking-widest">
            {t('certifications.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certs.map((c, i) => (
            <div key={i} className="group flex flex-col items-center justify-center p-10 cyber-card rounded-card relative transition-all overflow-hidden hover:border-cyber-primary/30">
              <div className="w-24 h-24 rounded-full border-4 border-white/5 bg-black/30 flex items-center justify-center mb-6 ring-4 ring-transparent group-hover:ring-cyber-primary/10 group-hover:border-cyber-primary transition-all duration-500">
                <span className="text-xl font-black text-white group-hover:scale-110 transition-transform">{c.name}</span>
              </div>

              <h3 className="text-lg font-bold text-white text-center">{c.issuer}</h3>
              <p className="text-[10px] font-mono text-slate-500 mt-1 text-center uppercase tracking-tighter mb-6">{c.desc}</p>
              
              <a 
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-bold text-cyber-primary hover:text-white transition-colors border border-cyber-primary/20 hover:bg-cyber-primary/10 px-4 py-2 rounded uppercase tracking-wider"
              >
                {t('certifications.view_cert')} <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;