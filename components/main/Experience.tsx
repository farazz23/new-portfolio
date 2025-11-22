'use client';
import { easeInOut, motion } from 'motion/react';
const Experience = () => {
  return (
    <section
      className="relative container w-full pt-28 md:pt-24 pb-20 overflow-hidden min-h-screen 
                     transition-colors duration-300"
    >
      <div className="w-full mx-auto px-6 md:px-4 lg:px-36  flex flex-col">
        {/* Heading */}
        <div>
          <h1 className="text-3xl font-quicksand md:text-4xl font-semibold text-gray-900 dark:text-gray-100 relative">
            Career Journey
            <motion.span
              initial={{ opacity: 1, width: 0 }}
              whileInView={{ opacity: 1, width: 270 }}
              transition={{ duration: 0.8, ease: 'easeIn' }}
              className="block  h-[3px] mt-2 bg-rose-500 dark:bg-rose-400 rounded-full"
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Experience;
