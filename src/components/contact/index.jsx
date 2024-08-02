import React from 'react';
import PropTypes from 'prop-types'
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { SelectedPage } from '@/shared/types';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import circlesanimation from '@/assets/circlesanimation.json'


export default function Contact ({ setSelectedPage }) {

    return (
        <section className='h-screen relative z-20 mx-40 full-center' id='missioncontrol' >
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.MissionControl)} className=''>
                <div className='flex'>
                    <motion.div className='text-start flex flex-col w-4/6 p-6 pe-36 gap-6 text-white drop-shadow-2xl'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <p className='contact-paragraph'>Are you ready to set sail on the ultimate odyssey?</p>
                        <p className='text-7xl font-bold'>Embark on the Odyssey with Us</p>
                        <p className='contact-paragraph font-bold !text-4xl'>At Odyssey IT Consulting, we seek explorers who can fuse visionary minds with cutting-edge technology to bring groundbreaking ideas to life.</p>
                        <p className='contact-paragraph '>Join us on this cosmic journey, where innovation knows no bounds. Let's chart a course, discover new frontiers, and connect brilliance with possibility.</p>
                    </motion.div>
                    <motion.div 
                        className='w-2/6'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ duration: 0.7}}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}>
                            <Lottie animationData={circlesanimation} className=' w-full'/>
                    </motion.div>
                </div>
                <div className='absolute inset-0 z-0'>
                    <Canvas>
                        <Stars radius={40} count={3000} factor={2} fade speed={2}/>
                    </Canvas>
                </div>
            </motion.div>
        </section>
    );
}

Contact.propTypes = {
    setSelectedPage: PropTypes.func.isRequired,
}