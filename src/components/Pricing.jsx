import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
    const plans = [
        {
            name: "Pro",
            price: 29,
            period: "/mo",
            //yearlyPrice: "or $150/year",
            desc: "For growing businesses that need more power.",
            features: [
                "Unlimited Estimates",
                "Custom Branding",
                "AI-Powered Descriptions",
                "Priority Support",
                "Client Dashboard"
            ],
            cta: "Start 14-Day Trial",
            popular: true
        },
        {
            name: "Yearly",
            price: 150,
            period: "/yr",
            //yearlyPrice: "or $299/year",
            desc: "Advanced features for teams and scaling companies.",
            features: [
                "Everything in Pro",
                "Team Management",
                "API Access",
                "Dedicated Account Manager",
                "Advanced Analytics"
            ],
            cta: "Contact Sales",
            popular: false
        }
    ];

    return (
        <section id="pricing" style={{ padding: 'var(--section-padding) 0', backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 className="section-title">Simple, Transparent Pricing</h2>
                    <p className="section-subtitle">Choose the plan that fits your business size and needs.</p>
                </motion.div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{
                                position: 'relative',
                                backgroundColor: 'var(--bg-secondary)',
                                borderRadius: '24px',
                                padding: '40px',
                                border: plan.popular ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: plan.popular ? '0 20px 40px -12px rgba(37, 99, 235, 0.2)' : 'none'
                            }}
                        >
                            {plan.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'var(--accent-primary)',
                                    color: 'white',
                                    padding: '4px 16px',
                                    borderRadius: '100px',
                                    fontSize: '0.875rem',
                                    fontWeight: '600'
                                }}>
                                    Most Popular
                                </div>
                            )}

                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '8px' }}>{plan.name}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', minHeight: '48px' }}>{plan.desc}</p>

                            <div style={{ marginBottom: '32px' }}>
                                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                    <span style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-primary)' }}>${plan.price}</span>
                                    <span style={{ color: 'var(--text-secondary)', marginLeft: '4px' }}>{plan.period}</span>
                                </div>
                                <div style={{ color: 'var(--accent-secondary)', fontSize: '0.875rem', fontWeight: '600', marginTop: '4px' }}>
                                    {plan.yearlyPrice}
                                </div>
                            </div>

                            <ul style={{ listStyle: 'none', marginBottom: '40px', flex: 1 }}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', color: 'var(--text-secondary)' }}>
                                        <span style={{
                                            color: 'var(--accent-secondary)',
                                            marginRight: '12px',
                                            fontSize: '1.25rem'
                                        }}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={plan.popular ? 'btn btn-primary' : 'btn btn-secondary'} style={{ width: '100%' }}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
