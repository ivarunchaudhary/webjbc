import React from 'react';

const ProposalPreview = () => {
    return (
        <section style={{ padding: 'var(--section-padding) 0', backgroundColor: 'var(--bg-primary)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title">Look Professional, Win More Jobs</h2>
                <p className="section-subtitle">
                    Send beautiful, branded PDF proposals that impress customers and build trust instantly.
                </p>

                <div style={{
                    marginTop: '48px',
                    position: 'relative',
                    display: 'inline-block',
                    borderRadius: '50px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
                    maxWidth: '280px',
                    width: '100%'
                }}>
                    <img
                        src="/app_proposal.png"
                        alt="Professional PDF Proposal"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProposalPreview;
