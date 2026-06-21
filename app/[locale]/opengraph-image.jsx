import { ImageResponse } from 'next/og';

export const alt = 'Inna Boiko — Frontend & Full-Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        <div
            style={{
                background: '#0A0A14',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                padding: '72px 80px',
                position: 'relative',
            }}
        >
            {/* Accent glow */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '700px',
                    height: '500px',
                    background:
                        'radial-gradient(ellipse at 65% 35%, rgba(123,97,255,0.38) 0%, transparent 65%)',
                }}
            />

            {/* Logo */}
            <div
                style={{
                    display: 'flex',
                    marginBottom: '44px',
                    fontSize: '26px',
                    fontWeight: 'bold',
                    letterSpacing: '-0.5px',
                }}
            >
                <span style={{ color: '#7B61FF' }}>{'{'}</span>
                <span style={{ color: '#F0EFF4', margin: '0 5px' }}>IB</span>
                <span style={{ color: '#7B61FF' }}>{'}'}</span>
            </div>

            {/* Main heading */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    marginBottom: '44px',
                }}
            >
                <span
                    style={{
                        color: '#F0EFF4',
                        fontSize: '58px',
                        fontWeight: '700',
                        lineHeight: 1.05,
                        letterSpacing: '-2px',
                    }}
                >
                    Frontend · Full-Stack
                </span>
                <span
                    style={{
                        color: '#7B61FF',
                        fontSize: '74px',
                        fontWeight: '700',
                        lineHeight: 1,
                        letterSpacing: '-3px',
                        fontStyle: 'italic',
                    }}
                >
                    Developer.
                </span>
            </div>

            {/* Bottom line */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    fontSize: '21px',
                }}
            >
                <span style={{ color: '#F0EFF4', fontWeight: '600' }}>Inna Boiko</span>
                <span style={{ color: '#7B61FF' }}>·</span>
                <span style={{ color: 'rgba(240,239,244,0.55)' }}>React</span>
                <span style={{ color: '#7B61FF' }}>·</span>
                <span style={{ color: 'rgba(240,239,244,0.55)' }}>Next.js</span>
                <span style={{ color: '#7B61FF' }}>·</span>
                <span style={{ color: 'rgba(240,239,244,0.55)' }}>TypeScript</span>
                <span style={{ color: '#7B61FF' }}>·</span>
                <span style={{ color: 'rgba(240,239,244,0.55)' }}>Bari, Italia</span>
            </div>
        </div>,
        size,
    );
}
