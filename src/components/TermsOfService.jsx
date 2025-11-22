import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <section style={{ padding: '120px 0 80px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-primary)' }}>Terms of Use</h1>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Effective Date: November 2, 2025</p>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                        Website: https://www.jobcalc.app
                    </p>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
                        Welcome to JobCalc ("we," "our," "us"). JobCalc is an AI-powered estimating app designed for skilled trade professionals in HVAC, plumbing, and electrical industries. By downloading, accessing, or using our mobile app ("App"), you agree to these Terms of Use.
                    </p>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>1. Use of the App</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                            JobCalc is intended for professional and personal use by tradespeople and contractors. You agree to use the App only for lawful purposes and in compliance with all applicable laws and regulations.
                        </p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.
                        </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>2. Subscriptions and Billing</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                            JobCalc Pro is available via auto-renewable subscription plans:
                        </p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                            <li><strong>Monthly Plan:</strong> $19.99/month</li>
                            <li><strong>Yearly Plan:</strong> $150/year (save $90)</li>
                            <li><strong>Free Trial:</strong> 7 days, with full access to all features</li>
                        </ul>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
                            Subscriptions are charged to your Apple ID account at confirmation of purchase. Your subscription automatically renews unless canceled at least 24 hours before the end of the current billing period. You can manage or cancel your subscription in your Apple App Store account settings at any time.
                        </p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            If you start a free trial and do not cancel, you will be automatically billed when the trial ends.
                        </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>3. Refunds</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            All payments and subscriptions are managed by Apple. Refunds are subject to Apple's App Store refund policies. We do not process refunds directly.
                        </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>4. Intellectual Property</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            All content, designs, software, and technology in JobCalc are owned by JobCalc LLC or its licensors. You may not copy, modify, distribute, or reverse-engineer any part of the App.
                        </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>5. Disclaimer of Warranties</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            JobCalc is provided "as is" and "as available." We make no warranties that the App will be uninterrupted, error-free, or suitable for any specific purpose.
                        </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>6. Limitation of Liability</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            To the maximum extent permitted by law, JobCalc and its affiliates shall not be liable for any indirect, incidental, or consequential damages arising from your use of the App.
                        </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>7. Termination</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            We may suspend or terminate your access to JobCalc at any time for violation of these Terms or misuse of the App.
                        </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>8. Changes to Terms</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            We may update these Terms from time to time. The latest version will always be available on our website. Continued use of the App means you accept the updated Terms.
                        </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>9. Contact Us</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
                            For questions or support, please contact:
                        </p>
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

export default TermsOfService;
