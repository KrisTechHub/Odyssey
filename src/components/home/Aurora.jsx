import React, { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import PropTypes from 'prop-types';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const colors = ["#13ffaa", "#1e67c6", "#ce84cf", "#dd335c"]

export default function Aurora ({children, setBorder, radiantPosition, count }) {
    const color = useMotionValue(colors[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 100% at 50% ${radiantPosition}%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`

    useEffect(() => {
        animate(color, colors, {
            ease: 'easeInOut',
            duration: 10, 
            repeat: Infinity,
            repeatType: "mirror"
        });

        if (setBorder) setBorder(border);
    }, [color, setBorder, border])

    return (
        <motion.section className='relative grid min-h-screen place-content-center bg-gray-950 px-4 py-24 text-gray-200 w-full z-10'
            style={{ backgroundImage }} >
                {children}
                <div className='absolute inset-0 z-0'>
                    <Canvas>
                        <Stars radius={20} count={count} factor={2} fade speed={2}/>
                    </Canvas>
                </div>
        </motion.section>
    );
}

Aurora.propTypes = {
    children: PropTypes.element,
    setBorder: PropTypes.func,
    radiantPosition: PropTypes.number,
    count: PropTypes.number,

}