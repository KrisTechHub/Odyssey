import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useTransform } from 'framer-motion';
import { useScroll } from 'framer-motion';


export default function Planet ({ data, onClick }) {
    const isEven = data.id % 2 === 0;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.45 1"]
    });
    const scaleProgress =  useTransform(scrollYProgress, [0, 1], [0.1, 1]);

    return (
        <motion.div ref={ref} 
        className={`w-1/2 h-auto planet z-30 cursor-pointer ${isEven ? ' float-right clear-right mb-[1rem]' : 'float-left clear-left mb-[1rem]'}`} 
        onClick={onClick}
        style={{
            scale: scaleProgress,
            opacity: scrollYProgress,
        }}>
            {data.img && (
                <div className={` ${data.containerClass} relative `}>
                    <img src={data.img} className={`${data.customClass} drop-shadow-2xl`} alt="" />
                    <motion.div className={`absolute top-[50%] bg-blue-gray-300/85 rounded-lg text-gray-900 w-2/3 p-6 ${isEven ? 'text-left' : 'text-right'}`}
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.5 }} 
                        transition={{ delay: 0.2, duration: 0.5 }} 
                        variants={{ 
                            hidden: { opacity: 0, x:50 },
                            visible: { opacity: 1, x: 0 } 
                        }}>
                            <h1 className='font-bold text-2xl'> {data.name.toUpperCase()} </h1>
                            <p className='text-lg'> {data.description} </p>
                    </motion.div>
                </div>
            )}
        </motion.div>
    );
}

Planet.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };