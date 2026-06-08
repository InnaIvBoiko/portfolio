import Logo from './Logo';

export default function Footer() {
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
                            Inna Boiko — Sviluppatrice Frontend &amp; Full-Stack. React, Next.js (App Router) e TypeScript, con focus su SaaS scalabili, performance e sicurezza. Bari, Italia · disponibile da remoto.
                        </p>
                    </div>

                    {/* Nav */}
                    <div className="flex flex-col gap-3 font-mono text-sm tracking-widest uppercase">
                        <a href="#features" className="hover:text-accent transition-colors">Esperienza</a>
                        <a href="#philosophy" className="hover:text-accent transition-colors">Manifesto</a>
                        <a href="#protocol" className="hover:text-accent transition-colors">Progetti</a>
                        <a href="#stack" className="hover:text-accent transition-colors">Stack</a>
                    </div>

                    {/* Social / Links */}
                    <div className="flex flex-col gap-3 font-mono text-sm tracking-widest uppercase">
                        <a href="https://linkedin.com/in/inna-boiko" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                        <a href="https://github.com/InnaIvBoiko" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=inna_boiko@libero.it&su=Contatto%20dal%20portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Contatto</a>
                        {/* <a href="/Inna_Boiko_CV.pdf" download className="hover:text-accent transition-colors">Scarica CV</a> */}
                    </div>

                </div>

                <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="font-mono text-xs text-background/40">
                        &copy; 2026 Inna Boiko · Bari, Italia. Tutti i diritti riservati.
                    </div>

                    {/* System Status Indicator */}
                    <div className="flex items-center gap-3 bg-background/5 px-4 py-2 rounded-full border border-background/10">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </div>
                        <span className="font-mono leading-none text-[10px] uppercase text-accent tracking-widest translate-y-[1px]">
                            Open to work
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
