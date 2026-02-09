import React from 'react';
import { Network, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Arsenal: React.FC = () => {
  const { t } = useTranslation();

  const skills = [
    {
      category: t('arsenal.web_security'),
      icon: Network,
      items: [
        { name: t('arsenal.skills.web_testing'), value: 85 },
        { name: t('arsenal.skills.owasp'), value: 90 },
        { name: t('arsenal.skills.auth_flaws'), value: 80 }
      ]
    },
    {
      category: t('arsenal.offensive_tools'),
      icon: Terminal,
      items: [
        { name: t('arsenal.skills.burp'), value: 88 },
        { name: t('arsenal.skills.linux'), value: 85 },
        { name: t('arsenal.skills.network_enum'), value: 80 }
      ]
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-12 border-l-4 border-cyber-primary pl-4">{t('arsenal.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skills.map((s, idx) => (
            <div key={idx} className="cyber-card p-8 rounded-card">
              <div className="flex items-center gap-3 mb-8">
                <s.icon className="w-5 h-5 text-cyber-primary" />
                <h3 className="text-lg font-bold text-white">{s.category}</h3>
              </div>
              <div className="space-y-6">
                {s.items.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-bold mb-2 uppercase tracking-widest text-slate-500">
                      <span>{item.name}</span>
                      <span className="text-cyber-primary">{item.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-cyber-primary rounded-full transition-all duration-1000"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arsenal;