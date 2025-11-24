'use client';
import { easeInOut, motion } from 'motion/react';
import React, { useState } from 'react';
import { Button } from '../ui/moving-border';
import { Button2 } from '../ui/stateful-button';
import Link from 'next/link';
import Image from 'next/image';

const LandingPage = () => {
  const [currentState, setCurrentState] = useState('Resume');

  const handleClick = async () => {
    setCurrentState('Downloading...');
    await new Promise((r) => setTimeout(r, 1000));

    const link = document.createElement('a');
    link.href = '/FaraazResume.pdf';
    link.download = 'Faraaz_Resume';
    link.click();

    setCurrentState('Downloaded');
    await new Promise((r) => setTimeout(r, 1000));
    setCurrentState('Resume');
  };

  return (
    <section className="relative min-h-screen w-full ">
      <div className="container relative flex min-h-screen w-full flex-col items-center justify-center z-40 transition-colors duration-300">
        {/* Hero Text */}
        <div className="w-full text-center">
          <div className="font-quicksand text-neutral-800 dark:text-neutral-100 text-4xl md:text-5xl font-bold leading-tight">
            <div className="flex flex-col md:flex-row  items-center justify-center gap-2 md:gap-4">
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="font-fira-code text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-600 dark:to-blue-600"
              >
                Talk
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              >
                is
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
                className="font-fira-code text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-blue-600 dark:to-purple-600"
              >
                Cheap
              </motion.span>
            </div>

            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="max-w-5xl mx-auto pt-4"
            >
              Show me the Code
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="mx-auto font-quicksand mt-4 max-w-xl text-center text-neutral-700 dark:text-neutral-300 font-bold tracking-wider"
          >
            I’m{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-600 dark:to-blue-600 animate-pulse">
              Faraaz
            </span>
            , a Fullstack developer who enjoys building fast, clean, and
            visually polished web experiences.
          </motion.p>
        </div>

        {/* Middle Image */}
        <div className="mt-6 flex flex-col md:flex-row items-start justify-between md:gap-10 ">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="
      w-36 h-36             /* mobile */
      sm:w-44 sm:h-44       /* small screens */
      md:w-56 md:h-56       /* tablets */
      lg:w-60 lg:h-60       /* large screens */
      rounded-full overflow-hidden shadow-2xl
      border border-neutral-300 dark:border-neutral-700
    "
            >
              <Image
                src="/Snapchat-741402239.jpg"
                alt="Faraaz Photo"
                width={240}
                height={240}
                className="h-full w-full object-cover object-top"
              />
            </motion.div>
          </div>

          {/* Call-to-action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="flex flex-col items-center justify-between gap-6 mt-10"
          >
            <Link href="mailto:ashraffaraaz6@gmail.com" className="font-medium">
              <Button borderRadius="1.75rem">Hire Me</Button>
            </Link>

            <Button2
              onClick={handleClick}
              className=" bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-600 dark:to-blue-600 hover:ring-blue-600 text-black dark:text-white font-bold "
            >
              <span>{currentState}</span>
            </Button2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
