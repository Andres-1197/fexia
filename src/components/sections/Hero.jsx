import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import VisualSplit from '../VisualSplit';
import { initHero } from '../../utils/BabylonLogic';

const Hero = () => (
    <section id="hero" className="hero">
        <VisualSplit
            isFullPage={true}
            babylonInitRight={initHero}
        >
            <div className="hero-content-wrapper">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text-pane"
                >
                    <span className="hero-eyebrow">Ecosistema Agéntico — Enterprise</span>
                    <h1 className="terminal-title">
                        El sistema nervioso de tu empresa. <span className="highlight">Activado.</span>
                    </h1>
                    <p className="hero-body">
                        Una red de agentes de IA especializados que conocen tu empresa desde adentro. No
                        una herramienta — una infraestructura cognitiva.
                    </p>


                </motion.div>
            </div>
        </VisualSplit>
    </section>
);

export default Hero;

