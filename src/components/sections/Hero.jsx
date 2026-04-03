import React from 'react';
import VisualSplit from '../VisualSplit';
import { initHero } from '../../utils/BabylonLogic';

const Hero = () => (
    <section className="hero">
        <VisualSplit
            isFullPage={true}
            babylonInit={initHero}
            splineScene="https://prod.spline.design/JogrHLCxXLfOr0SG/scene.splinecode"
        />
    </section>
);

export default Hero;
