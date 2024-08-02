import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { SelectedPage } from '@/shared/types';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Aurora from './Aurora';

export default function Home({ setSelectedPage }) {
  const [border, setBorder] = useState('');
  const [onHover, setOnHover] = useState(false);

  return (
    <section className="h-screen -mt-12 z-10" id="launchpad">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.LaunchPad)}>
        <Aurora setBorder={setBorder} radiantPosition={10}>
          <motion.div
            className="relative z-10 full-center flex-col text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.span
              className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Barb AI Now Live!
            </motion.span>
            <h1 className="max-w-5xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-7xl font-medium leading-tight text-transparent">
              Navigate the <br /> Future of Technology
            </h1>
            <p className="my-6 max-w-xl text-center text-lg leading-relaxed">
              Embark on an extraordinary adventure into the realm of technology. Unlock new horizons and redefine the boundaries of what's possible.
            </p>

            <motion.a
              className={`group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors ${
                onHover ? 'hover:bg-gray-950/50' : ''
              }`}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              style={{ border }}
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
              onClick={() => setSelectedPage(SelectedPage.MissionBriefs)}
              href="#missionbriefs"
            >
              Start your journey with us
              <ArrowRightIcon className={`w-4 transition-transform duration-300 ${onHover ? 'rotate-45' : ''}`} />
            </motion.a>
          </motion.div>
        </Aurora>
      </motion.div>
    </section>
  );
}

Home.propTypes = {
  setSelectedPage: PropTypes.func.isRequired,
};
