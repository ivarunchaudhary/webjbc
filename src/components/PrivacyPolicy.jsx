import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <section style={{ padding: '120px 0 80px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-primary)' }}>Privacy Policy</h1>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Effective Date: November 2, 2025</p>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                        Website: https://www.jobcalc.app
                    </p>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
                        This Privacy Policy explains how JobCalc ("we," "our," "us") collects, uses, and protects your information when you use our mobile app ("App") and website.
                    </p>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>1. Information We Collect</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>We collect the following types of information:</p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li><strong>Account Information:</strong> Name, email, and login credentials.</li>
                            <li><strong>Usage Data:</strong> Information about how you use the App to improve performance and features.</li>
                            <li><strong>Customer Data:</strong> Job details, pricing, photos, or notes that you choose to input.</li>
                            <li><strong>Device Information:</strong> Technical data such as device type, operating system, and app version.</li>
                            <li><strong>Payment Information:</strong> Processed securely by Apple; we do not store your payment details.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>2. How We Use Information</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>We use your information to:</p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li>Operate and improve the App.</li>
                            <li>Generate estimates and provide AI-powered results.</li>
                            <li>Communicate updates, support, and offers (if opted in).</li>
                            <li>Maintain compliance with legal obligations.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>3. Data Sharing</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            We do not sell your data. We may share limited data with trusted service providers who help us operate our business (e.g., hosting, analytics). All partners are bound by confidentiality agreements.
                        </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>4. Data Security</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            We use encryption, secure servers, and best practices to protect your information from unauthorized access.
                        </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>5. Your Rights</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            You can request to access, update, or delete your data by contacting <a href="mailto:support@jobcalc.app" style={{ color: 'var(--accent-primary)' }}>support@jobcalc.app</a>. You can also opt out of promotional emails at any time.
                        </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>6. Third-Party Services</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            JobCalc may integrate with third-party services such as Apple, Stripe, or AI providers. Their data handling is governed by their own privacy policies.
                        </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>7. Children's Privacy</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            JobCalc is not intended for use by anyone under 16 years of age. We do not knowingly collect data from minors.
                        </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>8. Changes to This Policy</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            We may update this Privacy Policy periodically. Any updates will be posted at <a href="https://www.jobcalc.app/privacy" style={{ color: 'var(--accent-primary)' }}>https://www.jobcalc.app/privacy</a>.
                        </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>9. Contact Us</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
                            Email: <a href="mailto:support@jobcalc.app" style={{ color: 'var(--accent-primary)' }}>support@jobcalc.app</a>
                        </p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Mailing Address: JobCalc LLC, Cumming, GA 30040
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
