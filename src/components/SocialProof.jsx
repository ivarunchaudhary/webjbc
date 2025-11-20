import React from 'react';

const SocialProof = () => {
    return (
        <section id="testimonials" style={{ padding: 'var(--section-padding) 0' }}>
            <div className="container">
                <h2 className="section-title">Trusted by Pros</h2>
                <p className="section-subtitle">Join thousands of contractors growing their business with JobCalc.</p>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    <div className="card">
                        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '24px' }}>
                            "I used to spend my evenings doing paperwork. Now I send estimates from the truck before I even leave the driveway. Game changer."
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#333' }}></div>
                            <div>
                                <div style={{ fontWeight: '600' }}>Mike R.</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>HVAC Owner, Texas</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '24px' }}>
                            "My technicians were guessing on prices. JobCalc standardized everything. Our margins are up 20% in just two months."
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#333' }}></div>
                            <div>
                                <div style={{ fontWeight: '600' }}>David S.</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Plumbing Services CEO</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '24px' }}>
                            "The Good/Better/Best options are amazing. Customers almost always pick the middle option instead of the cheapest one now."
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#333' }}></div>
                            <div>
                                <div style={{ fontWeight: '600' }}>Sarah L.</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Electrical Tech</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
