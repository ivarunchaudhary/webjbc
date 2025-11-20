import React from 'react';

const Features = () => {
    const features = [
        {
            icon: "🧠",
            title: "AI Estimation Engine",
            desc: "GPT-4 Vision analyzes photos for complexity. Local market data ensures your prices are competitive yet profitable."
        },
        {
            icon: "📊",
            title: "Tiered Pricing",
            desc: "Automatically generate Good, Better, and Best options. Give customers choice and increase your average ticket."
        },
        {
            icon: "📄",
            title: "Professional PDF",
            desc: "Send branded, high-quality PDF proposals that look like they took hours to make, in seconds."
        },
        {
            icon: "⚡",
            title: "Offline Mode",
            desc: "No signal? No problem. Work completely offline and sync when you're back in range."
        },
        {
            icon: "💼",
            title: "Business Controls",
            desc: "Set company-wide markups and standardize pricing across your entire team of technicians."
        },
        {
            icon: "🔒",
            title: "Secure & Private",
            desc: "Enterprise-grade security with 99.9% uptime. Your data is encrypted and safe."
        }
    ];

    return (
        <section id="features" style={{ padding: 'var(--section-padding) 0', backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Everything You Need to Win</h2>
                <p className="section-subtitle">Built specifically for HVAC, Plumbing, and Electrical contractors.</p>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                    {features.map((feature, index) => (
                        <div key={index} className="card" style={{ backgroundColor: 'var(--bg-primary)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{feature.icon}</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
