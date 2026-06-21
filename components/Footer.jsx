import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Logo from './Logo';

export default function Footer() {
    const t = useTranslations('Footer');
    const tNav = useTranslations('Nav');
    const locale = useLocale();

    // Section anchors live on the home page; prefix with the locale so they also
    // work when the footer is rendered on a sub-page (e.g. /services).
    const home = `/${locale}`;

    return (
        <footer className="bg-primary text-background rounded-t-[4rem] px-8 pt-20 pb-8 mt-[-4rem] relative z-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                            <Logo className="text-3xl" />
                        </div>
                        <p className="font-mono text-sm text-background/60 max-w-sm">
                            {t('description')}
                        </p>
                    </div>

                    {/* Nav */}
                    <div className="flex flex-col gap-3 font-mono text-sm tracking-widest uppercase">
                        <a href={`${home}#features`} className="hover:text-accent transition-colors">{tNav('experience')}</a>
                        <a href={`${home}#philosophy`} className="hover:text-accent transition-colors">{tNav('manifesto')}</a>
                        <a href={`${home}#protocol`} className="hover:text-accent transition-colors">{tNav('projects')}</a>
                        <a href={`${home}#stack`} className="hover:text-accent transition-colors">{tNav('stack')}</a>
                        <Link href="/services" className="hover:text-accent transition-colors">{tNav('services')}</Link>
                    </div>

                    {/* Social / Links */}
                    <div className="flex flex-col gap-3 font-mono text-sm tracking-widest uppercase">
                        <a href="https://linkedin.com/in/inna-boiko" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                        <a href="https://github.com/InnaIvBoiko" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=inna_boiko@libero.it&su=Contatto%20dal%20portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">{t('contact')}</a>
                        {/* <a href="/Inna_Boiko_CV.pdf" download className="hover:text-accent transition-colors">Scarica CV</a> */}
                    </div>

                </div>

                <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="font-mono text-xs text-background/40">
                        {t('copyright')}
                    </div>

                    {/* System Status Indicator */}
                    <div className="flex items-center gap-3 bg-background/5 px-4 py-2 rounded-full border border-background/10">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </div>
                        <span className="font-mono leading-none text-[10px] uppercase text-accent tracking-widest translate-y-[1px]">
                            {t('openToWork')}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
