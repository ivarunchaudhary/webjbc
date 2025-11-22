import React from 'react';
import { motion } from 'framer-motion';

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
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
        <section id="features" style={{ padding: 'var(--section-padding) 0', backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Everything You Need to Win</h2>
                    <p className="section-subtitle">Built specifically for HVAC, Plumbing, and Electrical contractors.</p>
                </motion.div>

                <motion.div
                    className="grid"
                    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            style={{ backgroundColor: 'var(--bg-primary)' }}
                            variants={cardVariants}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{feature.icon}</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
