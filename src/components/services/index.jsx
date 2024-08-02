import {useState} from 'react';
import PropTypes from 'prop-types'
import { motion } from 'framer-motion';
import { SelectedPage } from '@/shared/types';
import Aurora from '../home/Aurora';
import Lottie from 'lottie-react';
import animation3 from '@/assets/planets.json';
import circlesanimation from '@/assets/circlesanimation.json'
import galaxy6 from '@/assets/galaxy6.jpg'
import galaxy5 from '@/assets/galaxy5.png'
import JourneyMap from './JourneyMap';


export default function Services ({ selectedPage,setSelectedPage }) {

    return (
        <section className='h-auto min-h-screen w-screen ' id='missionbriefs'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.MissionBriefs)}>
                <Aurora radiantPosition={90} count={10000}>
                    <div>
                        <motion.div className='full-center'
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{ once: true, amount: 0.5 }} 
                            transition={{ delay: 0.2, duration: 0.5 }} 
                            variants={{ 
                                hidden: { opacity: 0, x:-50 },
                                visible: { opacity: 1, x: 0 } 
                            }}
                        >
                            <div className='text-center relative w-screen'>
                                <motion.div 
                                    className='absolute -top-28 left-6'
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{ once: true, amount: 0.5}}
                                    transition={{ duration: 0.7}}
                                    variants={{
                                        hidden: { opacity: 0, y: -10 },
                                        visible: { opacity: 1, y: 0 }
                                    }}>
                                    <Lottie animationData={circlesanimation} className='rotate-180 cursor-pointer w-64 mx-auto opacity-50'/>
                                </motion.div>
                                <h1 className='text-4xl mb-2'>WHAT WE DO</h1>
                                <p className='text-xl'>Click the plane to start travelling</p>
                            </div>
                        </motion.div>
                        
                        <div className='w-screen z-0 full-center relative'>
                            <motion.div className="absolute top-24 right-0"
                                initial="hidden" 
                                whileInView="visible" 
                                viewport={{ once: true, amount: 0.5 }} 
                                transition={{ delay: 0.2, duration: 0.5 }} 
                                variants={{ 
                                    hidden: { opacity: 0, x:50 },
                                    visible: { opacity: 1, x: 0 } 
                                }}>
                                    <Lottie animationData={animation3} className='h-[360px] opacity-40'/>
                            </motion.div>
                            <div className='absolute -top-[300px] right-0'>
                                <img src={galaxy5} alt="galaxy" className='w-[860px] opacity-35'/>
                            </div>
                            <div className='absolute top-[100px] -left-10'>
                                <img src={galaxy5} alt="galaxy" className='rotate-180 w-[860px] opacity-20'/>
                            </div>
                            <div className='absolute -top-[900px] -left-56 z-20'>
                                <img src={galaxy5} alt="galaxy" className='rotate-180 w-[1060px] opacity-60'/>
                            </div>
                            <div className='absolute top-96 left-0'>
                                <img src={galaxy6} alt="flare" className='h-[160px] mt-[2500px] opacity-40'/>
                            </div>
                        </div>
                        <div className='w-full'>
                        <JourneyMap isServicePageVisible={selectedPage === SelectedPage.MissionBriefs} />
                        </div>
                    </div>
                </Aurora>
            </motion.div>
        </section>
    );
}

Services.propTypes = {
    setSelectedPage: PropTypes.func.isRequired,
    selectedPage: PropTypes.oneOf(Object.values(SelectedPage)).isRequired,

}