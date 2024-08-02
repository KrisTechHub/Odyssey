import React from 'react';
import { motion } from 'framer-motion';


export default function Footer () {
    return (
        <footer id='footer' className='h-[900px] flex items-end '>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full bg-gradient-to-t z-30 bottom-0"
                style={{
                backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.0))',
                }}
            >
                <p className='bg-black'>
                    
                </p>
            </motion.div>
        </footer>
    );
}