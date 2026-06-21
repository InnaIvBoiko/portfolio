import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background text-primary font-sans antialiased flex flex-col items-center justify-center px-6 text-center selection:bg-accent selection:text-primary">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">404</p>
            <h1 className="font-sans font-bold text-6xl md:text-8xl mb-4 leading-[0.9] tracking-tight">
                Page not<br />
                <span className="italic text-accent">found.</span>
            </h1>
            <p className="font-mono text-sm text-slate mb-10 max-w-xs">
                This page doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/"
                className="font-mono text-sm px-6 py-3 rounded-full border border-primary/20 text-primary hover:border-accent hover:text-accent transition-colors"
            >
                ← Back home
            </Link>
        </div>
    );
}
