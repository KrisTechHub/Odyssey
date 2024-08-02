import React, { useEffect, useRef, useState } from 'react';
import brand2 from '@/assets/brand2.png'
import brand3 from '@/assets/brand3.png'
import brand4 from '@/assets/brand4.png'
import brand6 from '@/assets/brand6.png'
import brand7 from '@/assets/brand7.png'
import brand9 from '@/assets/brand9.png'
import brand10 from '@/assets/brand10.png'
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const imgs = [ brand2, brand3, brand4, brand2, brand6, brand7, brand3, brand9, brand10, brand4, brand2, brand6 ]


export default function Alliances () {
  const [scrollPosition, setScrollPosition] = useState(0);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
        if (horizontalRef.current) {
          const rect = horizontalRef.current.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          const windowHeight = window.innerHeight;
          const startScroll = offsetTop - windowHeight;
          const endScroll = offsetTop + rect.height;
  
          if (window.scrollY > startScroll && window.scrollY < endScroll) {
            const progress = (window.scrollY - startScroll) / (endScroll - startScroll);
            setScrollPosition(progress % 1); // Use modulus for infinite effect
          }
        }
      };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={horizontalRef} className='text-white py-8 relative overflow-hidden '>   
        <h1 className='text-3xl px-14'>OUR ALLIANCES</h1>
        <div className='flex gap-40 py-20'
            style={{
            transform: `translateX(-${scrollPosition * 100}%)`,
            transition: 'transform 0.6s',
            }} >
            {imgs.map((img, i) => (
                <img src={img} alt=""  className='w-48' key={i}/>
            ))}
        </div>
        <div className='absolute inset-0 z-0'>
            <Canvas>
                <Stars radius={50} count={1500} factor={1} fade speed={2}/>
            </Canvas>
        </div>
    </section>
  );
}