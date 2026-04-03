import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import VisualSplit from '../VisualSplit';

const Hero = () => (
    <section id="hero" className="hero">
        <VisualSplit
            isFullPage={true}
            // Removed babylonInit to take out the rotating 3D figure as requested
            splineScene="https://prod.spline.design/JogrHLCxXLfOr0SG/scene.splinecode"
        >
            <div className="hero-content-wrapper">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text-pane"
                >
                    <span className="hero-eyebrow">Ecosistema Agéntico — Enterprise</span>
                    <h1 className="hero-title">
                        El sistema nervioso <br />
                        de tu empresa. <em>Activado.</em>
                    </h1>
                    <p className="hero-body">
                        Una red de agentes de IA especializados que conocen tu empresa desde adentro.
                        No una herramienta — una infraestructura cognitiva.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary">Agendar diagnóstico <ChevronRight size={18} /></button>
                        <button className="btn btn-outline">Ver cómo funciona <ArrowRight size={18} /></button>
                    </div>
                </motion.div>
            </div>
        </VisualSplit>
    </section>
);

export default Hero;
