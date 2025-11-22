import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
                padding: '64px 0',
                borderTop: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-primary)'
            }}
        >
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
                        <p style={{ color: 'var(--text-secondary)', marginTop: '12px' }}>
                            <a href="mailto:support@jobcalc.app" style={{ color: 'var(--accent-primary)' }}>support@jobcalc.app</a>
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ flex: '1', minWidth: '100px' }}>
                            <h4 style={{ fontWeight: '600', marginBottom: '16px', fontSize: '0.95rem' }}>Product</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                <a href="#">Features</a>
                                <a href="#">Pricing</a>
                                <a href="https://apps.apple.com/in/app/jobcalc-estimator/id6753925133" target="_blank" rel="noopener noreferrer">Download</a>

                            </div>
                        </div>

                        <div style={{ flex: '1', minWidth: '100px' }}>
                            <h4 style={{ fontWeight: '600', marginBottom: '16px', fontSize: '0.95rem' }}>Company</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                <a href="#">About</a>
                                <a href="#">Contact</a>
                            </div>
                        </div>

                        <div style={{ flex: '1', minWidth: '100px' }}>
                            <h4 style={{ fontWeight: '600', marginBottom: '16px', fontSize: '0.95rem' }}>Legal</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                <Link to="/privacy">Privacy Policy</Link>
                                <Link to="/terms">Terms of Service</Link>
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
        </motion.footer>
    );
};

export default Footer;
