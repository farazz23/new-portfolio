'use client';
import { motion } from 'motion/react';
import ExperienceTimeline from './ExperiencecTimeline';
const Experience = () => {
  return (
    <section
      className="relative  md:smallcontainer w-full pt-28 md:pt-24 pb-20 overflow-hidden min-h-screen 
                     transition-colors duration-300"
    >
      <div className="w-full mx-auto px-6 md:px-4 lg:px-36  flex flex-col">
        {/* Heading */}
        <div className="flex flex-col items-center justify-between gap-2">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeIn' }}
            className="font-quicksand text-2xl md:text-3xl font-bold "
          >
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Career{' '}
            </span>
            Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeIn' }}
            className="text-neutral-600 dark:text-neutral-400 mt-2 mb-8 text-center max-w-md font-bold"
          >
            Every experience unlocked a new skill, every project a new
            achievement.
          </motion.p>
        </div>
        <ExperienceTimeline />
      </div>
    </section>
  );
};

export default Experience;
