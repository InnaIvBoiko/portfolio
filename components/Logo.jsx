export default function Logo({ className = '' }) {
    return (
        <span
            className={`group inline-flex items-center font-mono font-bold tracking-tight leading-none select-none ${className}`}
            aria-label="Inna Boiko"
        >
            <span className="text-accent transition-transform duration-300 ease-out group-hover:-translate-x-1">{'{'}</span>
            <span className="px-1.5">IB</span>
            <span className="text-accent transition-transform duration-300 ease-out group-hover:translate-x-1">{'}'}</span>
        </span>
    );
}
