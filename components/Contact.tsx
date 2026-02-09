import React, { useState } from 'react';
import { Send, Copy, ShieldCheck, Loader2, CheckCircle, AlertTriangle, AlertCircle, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [botCheck, setBotCheck] = useState(false);

  const ACCESS_KEY = (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof typeof formData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};
    const { name, email, phone, message } = formData;

    const nameRegex = /^[a-zA-Z\u00C0-\u00FF\s'-]+$/;
    if (!name.trim()) {
      newErrors.name = t('contact.form.validation.name_req');
    } else if (!nameRegex.test(name)) {
      newErrors.name = t('contact.form.validation.name_chars');
    } else if (name.trim().length < 2) {
      newErrors.name = t('contact.form.validation.name_short');
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      newErrors.email = t('contact.form.validation.email_req');
    } else if (!emailRegex.test(email)) {
      newErrors.email = t('contact.form.validation.email_fmt');
    }

    if (phone.trim()) {
      const phoneRegex = /^[\d\s\+\-\(\)]+$/;
      const digitCount = phone.replace(/\D/g, '').length;
      
      if (!phoneRegex.test(phone)) {
        newErrors.phone = t('contact.form.validation.phone_chars');
      } else if (digitCount < 6) {
        newErrors.phone = t('contact.form.validation.phone_short');
      }
    }

    if (!message.trim()) {
      newErrors.message = t('contact.form.validation.msg_req');
    } else if (message.trim().length < 10) {
      newErrors.message = t('contact.form.validation.msg_short');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (botCheck) {
      return; 
    }

    if (!validateForm()) {
      return;
    }
  
    if (!ACCESS_KEY) {
      setStatus('error');
      setErrorMessage("Configuration Error: Missing API Key.");
      console.error("Missing Web3Forms Access Key");
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `Nuevo mensaje de ${formData.name}`,
          from_name: "CyberAnalyst Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.message || t('contact.form.error_fail'));
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(t('contact.form.error_network'));
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="cyber-card rounded-card overflow-hidden">

            <div className="bg-black/40 border-b border-white/5 px-5 py-3.5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-cyber-danger/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-cyber-accent/60" />
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em] font-bold">
                {t('contact.protocol')}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">

              <div className="p-10 border-r border-white/5 relative">
                <h3 className="text-xl font-bold text-white mb-2">{t('contact.title')}</h3>
                <p className="text-[11px] text-slate-500 mb-8 font-medium">{t('contact.subtitle')}</p>

                <form className="space-y-6" onSubmit={handleSubmit} noValidate>

                  <input 
                    type="checkbox" 
                    name="botcheck" 
                    className="hidden" 
                    style={{ display: 'none' }}
                    checked={botCheck}
                    onChange={(e) => setBotCheck(e.target.checked)}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-mono text-cyber-primary font-bold uppercase tracking-widest">{t('contact.form.name_label')}</label>
                      {errors.name && <span className="text-[9px] text-cyber-danger font-bold flex items-center gap-1"><AlertCircle className="w-2.5 h-2.5" /> {t('contact.form.invalid')}</span>}
                    </div>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      disabled={status === 'submitting' || status === 'success'}
                      className={`w-full bg-black/30 border rounded p-3 text-xs text-white outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        errors.name 
                          ? 'border-cyber-danger focus:border-cyber-danger' 
                          : 'border-white/10 focus:border-cyber-primary'
                      }`}
                      placeholder={t('contact.form.placeholder_name')} 
                    />
                    {errors.name && <p className="text-cyber-danger text-[10px] opacity-80 pl-1">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-mono text-cyber-primary font-bold uppercase tracking-widest">{t('contact.form.email_label')}</label>
                      {errors.email && <span className="text-[9px] text-cyber-danger font-bold flex items-center gap-1"><AlertCircle className="w-2.5 h-2.5" /> {t('contact.form.invalid')}</span>}
                    </div>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      disabled={status === 'submitting' || status === 'success'}
                      className={`w-full bg-black/30 border rounded p-3 text-xs text-white outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        errors.email
                          ? 'border-cyber-danger focus:border-cyber-danger' 
                          : 'border-white/10 focus:border-cyber-primary'
                      }`}
                      placeholder={t('contact.form.placeholder_email')} 
                    />
                    {errors.email && <p className="text-cyber-danger text-[10px] opacity-80 pl-1">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-mono text-cyber-primary font-bold uppercase tracking-widest">{t('contact.form.phone_label')}</label>
                      {errors.phone && <span className="text-[9px] text-cyber-danger font-bold flex items-center gap-1"><AlertCircle className="w-2.5 h-2.5" /> {t('contact.form.invalid')}</span>}
                    </div>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={status === 'submitting' || status === 'success'}
                      className={`w-full bg-black/30 border rounded p-3 text-xs text-white outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        errors.phone
                          ? 'border-cyber-danger focus:border-cyber-danger' 
                          : 'border-white/10 focus:border-cyber-primary'
                      }`}
                      placeholder={t('contact.form.placeholder_phone')} 
                    />
                    {errors.phone && <p className="text-cyber-danger text-[10px] opacity-80 pl-1">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-mono text-cyber-primary font-bold uppercase tracking-widest">{t('contact.form.message_label')}</label>
                      {errors.message && <span className="text-[9px] text-cyber-danger font-bold flex items-center gap-1"><AlertCircle className="w-2.5 h-2.5" /> {t('contact.form.invalid')}</span>}
                    </div>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      disabled={status === 'submitting' || status === 'success'}
                      className={`w-full bg-black/30 border rounded p-3 text-xs text-white outline-none resize-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        errors.message
                          ? 'border-cyber-danger focus:border-cyber-danger' 
                          : 'border-white/10 focus:border-cyber-primary'
                      }`}
                      placeholder={t('contact.form.placeholder_message')}
                    ></textarea>
                    {errors.message && <p className="text-cyber-danger text-[10px] opacity-80 pl-1">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-cyber-danger text-xs font-bold bg-cyber-danger/10 p-3 rounded border border-cyber-danger/20">
                      <AlertTriangle className="w-4 h-4" />
                      {errorMessage}
                    </div>
                  )}

                  {status === 'success' ? (
                     <div className="w-full bg-cyber-accent/10 border border-cyber-accent/20 text-cyber-accent font-bold text-xs py-3.5 rounded-lg flex items-center justify-center gap-2.5 animate-pulse">
                      <CheckCircle className="w-4 h-4" />
                      {t('contact.form.submit_success')}
                    </div>
                  ) : (
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-cyber-primary hover:brightness-110 text-white font-bold text-xs py-3.5 rounded-lg flex items-center justify-center gap-2.5 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          {t('contact.form.submit_loading')}
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          {t('contact.form.submit_idle')}
                        </>
                      )}
                    </button>
                  )}
                </form>
              </div>

              <div className="p-10 bg-black/20 flex flex-col">
                <div className="flex-1 bg-black/50 border border-white/5 p-5 rounded font-mono text-[9px] text-slate-600 leading-tight relative overflow-hidden">
                  <div className="flex justify-between mb-4 pb-2 border-b border-white/5">
                    <span className="text-cyber-primary font-bold">{t('contact.pgp.public_key')}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-cyber-primary opacity-60" />
                  </div>
                  <p className="text-cyber-primary/40 mb-2">-----BEGIN PGP PUBLIC KEY BLOCK-----</p>
                  <div className="opacity-40 select-none">
                    mQINBF2s5gBEAC...<br />
                    9Kj2f/4kLqX8...<br />
                    23lS/x9Pz...<br />
                    [KEY_DATA_REDACTED]<br />
                    [KEY_DATA_REDACTED]<br />
                    [KEY_DATA_REDACTED]<br />
                    ...
                  </div>
                  <p className="text-cyber-primary/40 mt-2">-----END PGP PUBLIC KEY BLOCK-----</p>
                  
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  
                  <button className="absolute bottom-5 left-5 right-5 py-2.5 bg-[#0b1224] border border-white/10 rounded text-[10px] font-bold text-slate-400 flex items-center justify-center gap-2 hover:bg-slate-800 transition-all cursor-copy">
                    <Copy className="w-3.5 h-3.5" /> {t('contact.pgp.copy')}
                  </button>
                </div>

                <div className="mt-8">
                  <h4 className="text-white/60 font-bold text-[10px] mb-4 uppercase tracking-[0.2em] flex items-center gap-2">
                     {t('contact.security_context.title')}
                  </h4>
                  <div className="flex items-start gap-3">
                    <Lock className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" />
                    <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                      {t('contact.security_context.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;