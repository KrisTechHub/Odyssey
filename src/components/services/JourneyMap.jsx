/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { journeyData } from './journeyData';
import Planet from './Planet';
import DetailModal from './DetailModal';
import Lottie from 'lottie-react';
import animatedRocket from '@/assets/purplerocketanimation.json';

export default function JourneyMap({ isServicePageVisible }) { // Add this prop
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const planetsRef = useRef([]); // For tracking each planet's ref
    const { scrollYProgress } = useScroll();
    const rocketRef = useRef(null);

    // Calculate the rocket's vertical position based on scroll progress
    const rocketTop = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight - 100]);

    const handlePlanetClick = (planet, e) => {
        setSelectedPlanet(planet);
        const rect = e.target.getBoundingClientRect();
        setModalPosition({ top: rect.top, left: rect.left });
    };

    const handleCloseModal = () => {
        setSelectedPlanet(null);
    };

    return (
        <div className=" full-center flex-col gap-24 relative ">
            <div className="w-2/3 mx-auto">
                {journeyData.map((planet, i) => (
                    <div key={planet.id} className='p-48'>
                        <Planet ref={el => planetsRef.current[i] = el} data={planet} onClick={(e) => handlePlanetClick(planet, e)} />
                    </div>
                ))}
            </div>

            {isServicePageVisible && ( // Only render rocket when the services page is visible
                <motion.div 
                    ref={rocketRef}
                    className="fixed left-0 right-0 mx-auto z-50"
                    style={{ top: rocketTop }}
                    initial='hidden'
                    animate='visible'
                    variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 0.8, y: 0 }
                    }}
                    transition={{ duration: 0.7 }}
                >
                    <Lottie animationData={animatedRocket} className='rotate-180 cursor-pointer w-48 mx-auto' />
                </motion.div>
            )}

            {selectedPlanet && (
                <DetailModal data={selectedPlanet} position={modalPosition} onClose={handleCloseModal} />
            )}
        </div>
    );
}


JourneyMap.propTypes = {
    isServicePageVisible: PropTypes.bool.isRequired,
}