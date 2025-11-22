import React from 'react';
import { motion } from 'framer-motion';

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="how-it-works" style={{ padding: 'var(--section-padding) 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Estimates in Under 30 Seconds</h2>
                    <p className="section-subtitle">From job site to signed contract in three simple steps.</p>
                </motion.div>

                <div className="how-it-works-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '64px',
                    alignItems: 'center'
                }}>
                    <motion.div
                        className="how-it-works-content"
                        style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                style={{ display: 'flex', gap: '24px', textAlign: 'left' }}
                                variants={itemVariants}
                            >
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
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="how-it-works-image"
                        style={{
                            position: 'relative',
                            borderRadius: '50px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            maxWidth: '280px',
                            margin: '0 auto'
                        }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img src="/app_estimate.png" alt="JobCalc Estimate Screen" style={{ width: '100%' }} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
