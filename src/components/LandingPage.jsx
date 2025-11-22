import React from 'react';
import Hero from './Hero';
import ProblemSection from './ProblemSection';
import HowItWorks from './HowItWorks';
import ProposalPreview from './ProposalPreview';
import Features from './Features';
import Pricing from './Pricing';
import SocialProof from './SocialProof';

const LandingPage = () => {
    return (
        <>
            <Hero />
            <ProblemSection />
            <HowItWorks />
            <ProposalPreview />
            <Features />
            <Pricing />
            <SocialProof />
        </>
    );
};

export default LandingPage;
