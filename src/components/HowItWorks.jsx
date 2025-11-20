import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            num: "01",
            title: "Snap & Describe",
            desc: "Select job category, take up to 5 photos, and add a quick voice or text description."
        },
        {
            num: "02",
            title: "AI Analysis",
            desc: "Our AI analyzes complexity, checks local market rates, and applies your business margins."
        },
        {
            num: "03",
            title: "Close the Deal",
            desc: "Present a professional Good/Better/Best proposal instantly. Send via SMS or Email."
        }
    ];

    return (
        <section id="how-it-works" style={{ padding: 'var(--section-padding) 0' }}>
            <div className="container">
                <h2 className="section-title">Estimates in Under 30 Seconds</h2>
                <p className="section-subtitle">From job site to signed contract in three simple steps.</p>

                <div className="how-it-works-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '64px',
                    alignItems: 'center'
                }}>
                    <div className="how-it-works-content" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                        {steps.map((step, index) => (
                            <div key={index} style={{ display: 'flex', gap: '24px', textAlign: 'left' }}>
                                <div style={{
                                    fontSize: '2rem',
                                    fontWeight: '800',
                                    color: 'var(--bg-tertiary)',
                                    WebkitTextStroke: '1px var(--text-tertiary)',
                                    lineHeight: '1'
                                }}>
                                    {step.num}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>{step.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="how-it-works-image" style={{
                        position: 'relative',
                        borderRadius: '50px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        maxWidth: '280px',
                        margin: '0 auto'
                    }}>
                        <img src="/app_estimate.png" alt="JobCalc Estimate Screen" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
