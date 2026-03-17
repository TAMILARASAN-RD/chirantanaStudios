/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroNarrative from './components/IntroNarrative';
import TheProblem from './components/TheProblem';
import WhoWeAre from './components/WhoWeAre';
import HowWeThink from './components/HowWeThink';
import NarrativeEcosystem from './components/NarrativeEcosystem';
import TrustAnchors from './components/TrustAnchors';
import Manifesto from './components/Manifesto';
import Pillar1 from './components/Pillar1';
import Pillar2 from './components/Pillar2';
import Pillar3 from './components/Pillar3';
import SelectedWork from './components/SelectedWork';
import Pillar4 from './components/Pillar4';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-brand-black min-h-screen font-sans text-brand-white selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <IntroNarrative />
        <TheProblem />
        <WhoWeAre />
        <HowWeThink />
        <NarrativeEcosystem />
        <TrustAnchors />
        <Manifesto />
        <Pillar1 />
        <Pillar2 />
        <Pillar3 />
        <SelectedWork />
        <Pillar4 />
        <Testimonials />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
