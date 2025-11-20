import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import ProposalPreview from './components/ProposalPreview';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <ProposalPreview />
        <Features />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}

export default App;
