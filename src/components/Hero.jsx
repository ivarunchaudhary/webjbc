import React from 'react';

const Hero = () => {
    return (
        <section style={{
            paddingTop: '160px',
            paddingBottom: '80px',
            overflow: 'hidden'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginBottom: '60px'
                }}>
                    <div className="animate-fade-in" style={{
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        color: 'var(--accent-primary)',
                        padding: '6px 12px',
                        borderRadius: '100px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        marginBottom: '24px',
                        display: 'inline-block'
                    }}>
                        New: AI-Powered Estimates 2.0
                    </div>

                    <h1 className="animate-fade-in" style={{
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '24px',
                        color: '#111827',
                        maxWidth: '900px'
                    }}>
                        Instant AI Pricing for Contractors.
                    </h1>

                    <p className="animate-fade-in" style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        marginBottom: '40px',
                        animationDelay: '0.1s'
                    }}>
                        Create professional, tiered estimates in 30 seconds using photos & local market data. Win more jobs with "Good-Better-Best" proposals.
                    </p>

                    <div className="animate-fade-in" style={{
                        display: 'flex',
                        gap: '16px',
                        animationDelay: '0.2s'
                    }}>
                        <button className="btn btn-primary">
                            Download App
                        </button>
                        <button className="btn btn-secondary">
                            View Demo
                        </button>
                    </div>
                </div>

                <div className="animate-fade-in" style={{
                    position: 'relative',
                    borderRadius: '50px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
                    animationDelay: '0.4s',
                    maxWidth: '320px',
                    margin: '0 auto'
                }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 20%)',
                        zIndex: 1
                    }}></div>
                    <img
                        src="/app_dashboard.png"
                        alt="JobCalc Dashboard"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
