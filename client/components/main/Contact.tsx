'use client';
import React from 'react';
import { motion } from 'motion/react';
import { AnimatedTooltip } from '../ui/animated-tooltip';
const Contact = () => {
  const people = [
    {
      id: 1,
      name: 'Gmail',
      image: '/contact/gm.svg',
      link: 'mailto:ashraffaraaz6@gmail.com',
    },
    {
      id: 2,
      name: 'LinkedIn',
      image: '/contact/ln.svg',
      link: 'https://www.linkedin.com/in/faraaz-ashraf-831796204/',
    },
    {
      id: 3,
      name: 'Git Hub',
      image: '/contact/gh.svg',
      link: 'https://github.com/farazz23',
    },
    {
      id: 4,
      name: 'Leetcode ',
      image: '/contact/lc.svg',
      link: 'https://leetcode.com/u/damon_23/',
    },
    {
      id: 5,
      name: 'Facebook',
      image: '/contact/fb.svg',
      link: 'https://www.facebook.com/profile.php?id=100018555752484',
    },
    {
      id: 6,
      name: 'Instagram',
      image: '/contact/ig.svg',
      link: 'https://www.instagram.com/_.theboynextdoor/',
    },
    {
      id: 7,
      name: 'Twitter',
      image: '/contact/tw.svg',
      link: 'https://x.com/heyanonymouss',
    },
  ];
  return (
    <section className="relative container md:smallcontainer w-full pt-28 md:pt-24  overflow-hidden min-h-full transition-colors duration-300">
      <div className="w-full mx-auto px-6 md:px-4 lg:px-36  flex flex-col">
        {/* Heading */}
        <div className="flex flex-col items-center justify-between gap-2">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeIn' }}
            className="font-quicksand text-2xl md:text-3xl font-bold "
          >
            Ping{' '}
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Me{' '}
            </span>
            Anytime
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeIn' }}
            className="text-neutral-600 dark:text-neutral-400 mt-2 mb-8 text-center max-w-lg font-bold"
          >
            I’m always open to interesting projects, challenges, and new
            connections.
          </motion.p>
        </div>

        <div className="flex items-center justify-center">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
