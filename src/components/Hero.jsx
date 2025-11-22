import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section style={{
            paddingTop: '160px',
            paddingBottom: '80px',
            overflow: 'hidden'
        }}>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        marginBottom: '60px'
                    }}
                >
                    <motion.div variants={itemVariants} style={{
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        color: 'var(--accent-primary)',
                        padding: '6px 12px',
                        borderRadius: '100px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        marginBottom: '24px',
                        display: 'inline-block'
                    }}>
                        AI-Powered Estimates
                    </motion.div>

                    <motion.h1 variants={itemVariants} style={{
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '24px',
                        color: '#111827',
                        maxWidth: '900px'
                    }}>
                        Instant AI Pricing for Contractors.
                    </motion.h1>

                    <motion.p variants={itemVariants} style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        marginBottom: '40px'
                    }}>
                        Create professional, tiered estimates in 30 seconds using photos & local market data. Win more jobs with "Good-Better-Best" proposals.
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-buttons" style={{
                        display: 'flex',
                        gap: '16px'
                    }}>
                        <a href="https://apps.apple.com/in/app/jobcalc-estimator/id6753925133" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                            Download App
                        </a>
                        <button className="btn btn-secondary">
                            View Demo
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    style={{
                        position: 'relative',
                        borderRadius: '50px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
                        maxWidth: '320px',
                        margin: '0 auto'
                    }}
                >
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
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
