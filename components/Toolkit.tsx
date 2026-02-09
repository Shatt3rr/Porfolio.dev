import React from 'react';
import { Target, Search, Radio, Key, Code, Zap, Globe, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Toolkit: React.FC = () => {
  const { t } = useTranslation();

  const toolkit = [
    { name: 'Burp Suite', desc: t('toolkit.desc.web_exploit'), icon: Shield, color: 'text-orange-500' },
    { name: 'Wfuzz', desc: t('toolkit.desc.web_fuzz'), icon: Search, color: 'text-purple-500' },
    { name: 'Nmap', desc: t('toolkit.desc.net_discovery'), icon: Radio, color: 'text-blue-500' },
    { name: 'BloodHound', desc: t('toolkit.desc.ad_recon'), icon: Target, color: 'text-red-500' },
    { name: 'NetExec', desc: t('toolkit.desc.net_exploit'), icon: Zap, color: 'text-green-500' },
    { name: 'Responder', desc: t('toolkit.desc.llmnr'), icon: Globe, color: 'text-yellow-500' },
    { name: 'Kerbrute', desc: t('toolkit.desc.kerberos'), icon: Key, color: 'text-cyan-500' },
    { name: 'Custom Scripts', desc: t('toolkit.desc.scripts'), icon: Code, color: 'text-slate-400' }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 border-l-4 border-cyber-primary pl-6">{t('toolkit.title')}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {toolkit.map((tool, i) => (
            <div key={i} className="group relative cyber-card p-6 rounded-card transition-all hover:-translate-y-1 hover:border-cyber-primary/40">
              <div className={`w-12 h-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-black/50 ${tool.color}`}>
                <tool.icon size={24} />
              </div>
              <h3 className="font-bold text-white text-sm group-hover:text-cyber-primary transition-colors">{tool.name}</h3>
              <p className="text-[10px] font-mono text-slate-500 mt-1 uppercase">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;