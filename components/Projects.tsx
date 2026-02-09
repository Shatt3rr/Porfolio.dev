import React from 'react';
import { ExternalLink, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();

  const gridColsClass = i18n.resolvedLanguage === 'es' ? 'grid-cols-[3.8rem_1fr]' : 'grid-cols-[3rem_1fr]';

  const projects = [
    {
      title: t('projects.p1.title'),
      tag: t('projects.p1.tag'),
      year: '2024',
      desc: t('projects.p1.desc'),
      link: '#',
      details: [
        { key: t('projects.p1.target_label'), val: t('projects.p1.target_val') },
        { key: t('projects.p1.vector_label'), val: t('projects.p1.vector_val') },
        { key: t('projects.p1.status_label'), val: t('projects.p1.status_val'), color: 'text-cyber-accent' }
      ],
      img: '/assets/image.png'
    },
    {
      title: t('projects.p2.title'),
      tag: t('projects.p2.tag'),
      year: '2024',
      desc: t('projects.p2.desc'),
      link: '#',
      details: [
        { key: t('projects.p2.scope_label'), val: t('projects.p2.scope_val') },
        { key: t('projects.p2.vector_label'), val: t('projects.p2.vector_val') },
        { key: t('projects.p2.impact_label'), val: t('projects.p2.impact_val'), color: 'text-cyber-accent' }
      ],
      img: '/assets/image2.png'
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-10 border-l-4 border-cyber-primary pl-4">
          {t('projects.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="cyber-card rounded-card overflow-hidden transition-all hover:border-cyber-primary/30 flex flex-col group">
              <div className="relative h-56 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white/40" />
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-cyber-primary uppercase tracking-widest">
                    {p.tag}
                  </span>
                  <span className="text-[10px] font-mono text-slate-600">{p.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-1 font-medium">
                  {p.desc}
                </p>

              <div className={`bg-black/40 border border-white/5 rounded-lg p-4 font-mono text-[10px] mb-6 grid ${gridColsClass} gap-y-1.5`}>
                  {p.details.map((d, i) => (
                    <React.Fragment key={i}>
                      <div className="text-slate-600 font-bold">{d.key}:</div>
                      <div className={d.color || 'text-slate-400'}>{d.val}</div>
                    </React.Fragment>
                  ))}
                </div>

                {/*<a href={p.link} className="inline-flex items-center gap-2 text-[11px] font-bold text-white hover:text-cyber-primary transition-colors">
                  {t('projects.view_case')} <ExternalLink className="w-3.5 h-3.5" />
                </a>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;