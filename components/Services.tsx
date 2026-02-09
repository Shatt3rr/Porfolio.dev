import React from 'react';
import { ShieldCheck, FileSearch, Brain} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.pentest.title'),
      desc: t('services.pentest.desc'),
      icon: ShieldCheck,
      checklist: [t('services.pentest.item1'), t('services.pentest.item2')],
      color: 'text-cyber-primary',
      iconBg: 'bg-cyber-primary/10'
    },
    {
      title: t('services.assessment.title'),
      desc: t('services.assessment.desc'),
      icon: FileSearch,
      checklist: [t('services.assessment.item1'), t('services.assessment.item2')],
      color: 'text-cyber-primary',
      iconBg: 'bg-cyber-primary/10'
    },
    {
      title: t('services.analysis.title'),
      desc: t('services.analysis.desc'),
      icon: Brain,
      checklist: [t('services.analysis.item1'), t('services.analysis.item2')],
      color: 'text-cyber-primary',
      iconBg: 'bg-cyber-primary/10'
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">{t('services.title')}</h2>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              {t('services.subtitle')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="cyber-card p-8 rounded-card transition-all duration-300 hover:border-cyber-primary/40 group">
              <div className={`w-10 h-10 ${s.iconBg} rounded flex items-center justify-center mb-6`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors">{s.title}</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed mb-6 font-medium">
                {s.desc}
              </p>
              <ul className="space-y-2">
                {s.checklist.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                    <span className="text-cyber-accent">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;