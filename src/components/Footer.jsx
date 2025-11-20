import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '64px 0',
            borderTop: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-primary)'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '48px',
                    marginBottom: '48px'
                }}>
                    <div>
                        <img src="/logo.png" alt="JobCalc" style={{ height: '48px', width: 'auto', marginBottom: '16px' }} />
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
                            The #1 AI estimation app for HVAC, Plumbing, and Electrical contractors.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
                        <div>
                            <h4 style={{ fontWeight: '600', marginBottom: '16px' }}>Product</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)' }}>
                                <a href="#">Features</a>
                                <a href="#">Pricing</a>
                                <a href="https://apps.apple.com/in/app/jobcalc-estimator/id6753925133" target="_blank" rel="noopener noreferrer">Download</a>
                                <a href="#">Changelog</a>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ fontWeight: '600', marginBottom: '16px' }}>Company</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)' }}>
                                <a href="#">About</a>
                                <a href="#">Blog</a>
                                <a href="#">Careers</a>
                                <a href="#">Contact</a>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ fontWeight: '600', marginBottom: '16px' }}>Legal</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)' }}>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    paddingTop: '32px',
                    borderTop: '1px solid var(--border-color)',
                    textAlign: 'center',
                    color: 'var(--text-tertiary)',
                    fontSize: '0.875rem'
                }}>
                    © {new Date().getFullYear()} JobCalc Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
