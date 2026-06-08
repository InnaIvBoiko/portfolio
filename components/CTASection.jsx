'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle, Copy, Check, Mail, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

// 1. Crea una chiave gratuita su https://web3forms.com (inserisci inna_boiko@libero.it)
// 2. Incolla qui sotto l'Access Key che ricevi via email.
const WEB3FORMS_ACCESS_KEY = 'ac7334c6-4b0c-444d-b607-de4bf04ab583';

const EMAIL = 'inna_boiko@libero.it';
// Numero WhatsApp in formato internazionale, solo cifre (es. 393331234567). Sostituisci il segnaposto.
const WHATSAPP_NUMBER = '393892567905';

export default function CTASection() {
    const t = useTranslations('CTA');
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending');
        setError('');

        const formData = new FormData(e.target);
        formData.append('access_key', WEB3FORMS_ACCESS_KEY);
        formData.append('subject', t('subject'));
        formData.append('from_name', 'Portfolio Inna Boiko');

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
                setError(data.message || t('errorGeneric'));
            }
        } catch {
            setStatus('error');
            setError(t('errorNetwork'));
        }
    }

    return (
        <section id="cta" className="py-32 md:py-40 px-6 bg-background relative overflow-hidden border-t border-primary/5">

            {/* Background radial gradient for subtle highlight */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
                <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-6">
                    {t('eyebrow')}
                </p>

                <h2 className="text-5xl md:text-7xl lg:text-8xl text-title-sans text-primary mb-6 leading-[0.9]">
                    {t('titleLine1')}<br />
                    <span className="text-title-drama text-accent text-6xl md:text-8xl lg:text-[9rem]">{t('titleAccent')}</span>
                </h2>

                <p className="text-slate font-mono max-w-xl mx-auto mb-12 text-sm md:text-base">
                    {t('intro')}
                </p>

                {status === 'success' ? (
                    <div className="w-full max-w-xl rounded-[2rem] border border-accent/30 bg-accent/5 p-10 flex flex-col items-center gap-4">
                        <CheckCircle2 className="w-12 h-12 text-accent" />
                        <h3 className="text-2xl font-sans font-bold tracking-tight text-primary">{t('successTitle')}</h3>
                        <p className="font-mono text-sm text-slate">{t('successText')}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col gap-4 text-left">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder={t('namePlaceholder')}
                                className="font-mono text-sm px-5 py-4 rounded-2xl bg-background border border-primary/15 text-primary placeholder:text-slate/50 focus:outline-none focus:border-accent transition-colors"
                            />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder={t('emailPlaceholder')}
                                className="font-mono text-sm px-5 py-4 rounded-2xl bg-background border border-primary/15 text-primary placeholder:text-slate/50 focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>
                        <textarea
                            name="message"
                            required
                            rows={5}
                            placeholder={t('messagePlaceholder')}
                            className="font-mono text-sm px-5 py-4 rounded-2xl bg-background border border-primary/15 text-primary placeholder:text-slate/50 focus:outline-none focus:border-accent transition-colors resize-none"
                        />

                        {/* Honeypot anti-spam */}
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 rounded-[2rem] font-sans font-semibold tracking-tight text-lg bg-primary text-background border border-primary/20 hover:bg-slate transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                        >
                            {status === 'sending' ? (
                                <><Loader2 className="w-5 h-5 animate-spin" /> {t('sending')}</>
                            ) : (
                                <><Send className="w-5 h-5" /> {t('send')}</>
                            )}
                        </button>

                        {status === 'error' && (
                            <div className="flex items-center gap-2 font-mono text-sm text-red-500 justify-center">
                                <AlertCircle className="w-4 h-4" /> {error}
                            </div>
                        )}
                    </form>
                )}

                {/* Fallback diretti */}
                <div className="mt-10 flex flex-col items-center gap-4">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-slate/60">{t('orDirect')}</p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <button
                            onClick={copyEmail}
                            className="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded-full border border-primary/20 text-primary hover:border-accent hover:text-accent transition-colors"
                        >
                            {copied ? <><Check className="w-4 h-4 text-accent" /> {t('copied')}</> : <><Copy className="w-4 h-4" /> {t('copyEmail')}</>}
                        </button>

                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded-full border border-primary/20 text-primary hover:border-accent hover:text-accent transition-colors"
                        >
                            {/* WhatsApp glyph */}
                            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.039zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                            WhatsApp
                        </a>

                        <a
                            href="https://linkedin.com/in/inna-boiko"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded-full border border-primary/20 text-primary hover:border-accent hover:text-accent transition-colors"
                        >
                            <Linkedin className="w-4 h-4" /> LinkedIn
                        </a>

                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(t('subject'))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded-full border border-primary/20 text-primary hover:border-accent hover:text-accent transition-colors"
                        >
                            <Mail className="w-4 h-4" /> Email
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}
