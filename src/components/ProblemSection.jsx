import React from 'react';

const ProblemSection = () => {
    const problems = [
        {
            title: "Hours of Paperwork",
            description: "Estimates take 2–4 hours manually. That's time away from your family or billable work.",
            stat: "40% of estimates never delivered"
        },
        {
            title: "Inconsistent Pricing",
            description: "Different techs quote different prices. You lose margin or lose the job.",
            stat: "15-20% revenue lost"
        },
        {
            title: "Missed Upsells",
            description: "Handwritten quotes don't show 'Good-Better-Best' options effectively.",
            stat: "Lower average ticket size"
        }
    ];

    return (
        <section style={{ padding: 'var(--section-padding) 0', backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Stop Leaving Money on the Table</h2>
                <p className="section-subtitle">
                    The old way of estimating is costing you time and profits.
                </p>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {problems.map((item, index) => (
                        <div key={index} className="card" style={{ backgroundColor: 'var(--bg-primary)' }}>
                            <div style={{
                                color: 'var(--accent-primary)',
                                fontWeight: '700',
                                fontSize: '0.9rem',
                                marginBottom: '8px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                Problem #{index + 1}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontWeight: '600' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>{item.description}</p>
                            <div style={{
                                paddingTop: '16px',
                                borderTop: '1px solid var(--border-color)',
                                color: '#ef4444',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <span style={{ fontSize: '1.2rem' }}>⚠️</span> {item.stat}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
