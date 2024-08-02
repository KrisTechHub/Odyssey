import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import PropTypes from 'prop-types';
import logo from '@/assets/logo-nobg.png';
import { SelectedPage } from '@/shared/types';
import Link from './Link';
import animatedRocket from '@/assets/purplerocketanimation.json'

export default function Navbar({ selectedPage, setSelectedPage, isTopOfPage }) {
  const [rocketCompleted, setRocketCompleted] = useState(false);
  const [rocketClicked, setRocketClicked] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  const handleRocketComplete = () => {
    setRocketCompleted(true);
  };

  const handleRocketClick = () => {
    setRocketClicked(true);
    const contactSection = document.getElementById('footer');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('The contact section was not found.');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      setAtBottom(bottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (atBottom && rocketClicked) {
      setRocketClicked(false);
    }
  }, [atBottom, rocketClicked]);

  const limit = window.innerWidth - 400;

  const links = [
    { name: 'Launch Pad', href: '#launchpad' },
    { name: 'Mission Briefs', href: '#missionbriefs' },
    { name: 'Mission Control', href: '#missioncontrol' },
    { name: 'The Crew', href: '#thecrew' },
    { name: 'Star Maps', href: '#starmaps' }

  ];

  return (
    <nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full bg-gradient-to-b fixed top-0 z-30 border-t-[28px] border-black pt-6 pb-24"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.0))',
        }}
      >
        <div className="w-5/6 mx-auto flex items-center z-50 -mt-8">
          <a className="w-1/5 full-center cursor-pointer" 
            onClick={() => setSelectedPage(SelectedPage.LaunchPad)}
            href={"#launchpad"}>
                <img src={logo} alt="Logo" className="w-[100px] md:w-[150px] " />
                <h1 className="text-white font-saira text-3xl pt-8 -ms-7">IT CONSULTING</h1>
          </a>
          <motion.div
            className="list-none flex-between text-white w-3/5 px-24 ms-16"
            variants={{
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 1.2,
                  staggerChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {links.map((link, idx) => (
              <motion.li
                key={idx}
                className="font-montserrat text-lg pt-6"
                variants={{
                  hidden: { x: 20, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.5 },
                  },
                }}
              >
                {/* <a href={link.href} className="hover:underline">{link.name}</a> */}
                <Link page={link.name} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </motion.li>
            ))}
          </motion.div>
        </div>
        <div className='w-96 bg-transparent'>

        </div>
        <motion.div
          className="w-[14%] full-center relative -mt-56 pt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: limit },
          }}
          animate={
            rocketClicked && !atBottom
              ? { rotate: 90, y: '100vh', transition: { duration: 1.5 } }
              : atBottom
              ? { rotate: 180, y: 'calc(100vh - 220px)', transition: { duration: 1.5 } }
              : undefined
          }
          onAnimationComplete={handleRocketComplete}
        >
            <Lottie animationData={animatedRocket} className='rotate-90 cursor-pointer w-56' onClick={handleRocketClick}/>

          {/* <img src={rocket} alt="contact button" className="w-[220px]" /> */}
          {rocketCompleted && !rocketClicked && (isTopOfPage || !atBottom) && (
                <motion.button
                className=" text-black z-50 absolute -ms-64 font-bold py-1 hover:font-bold transition-all duration-200 bg-gray-300 rounded px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                >
                    ALLIANCE
                </motion.button>
          )}
        </motion.div>
      </motion.div>
    </nav>
  );
}

Navbar.propTypes = {
  selectedPage: PropTypes.oneOf(Object.values(SelectedPage)).isRequired,
  setSelectedPage: PropTypes.func.isRequired,
  isTopOfPage: PropTypes.bool.isRequired,
};
