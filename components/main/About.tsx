'use client';
import React from 'react';
import { motion } from 'motion/react';
import { LayoutTextFlip } from '../ui/layout-text-flip';

const About = () => {
  const aboutMe = [
    'Developer',
    'Freelancer',
    'Enthusiast',
    'Coder',
    'Programmer',
    'Builder',
    'Learner',
    'Creator',
  ];

  const paragraphs = [
    <React.Fragment key="p1">
      <p>
        Hey, I’m{' '}
        <strong className="text-gray-700 dark:text-gray-300">
          Faraaz Ashraf
        </strong>{' '}
        — a backend-focused Software Engineer dedicated to building clean,
        scalable, and reliable systems. I work at{' '}
        <strong className="text-blue-600 dark:text-blue-400 font-extrabold">
          Klugsys
        </strong>
        , a Germany-based tech company, where I build backend services using{' '}
        <strong className="text-gray-700 dark:text-gray-300">
          Python, FastAPI, PostgreSQL, and Docker
        </strong>
        . My focus is on developing predictable, production-grade systems that
        prioritize clarity, maintainability, and long-term stability.
      </p>
    </React.Fragment>,

    <React.Fragment key="p2">
      <p>
        I love solving challenging technical problems — whether it’s designing
        high-performance APIs, optimizing data flow, or refining architecture to
        eliminate bottlenecks. My engineering approach ensures the systems I
        build are{' '}
        <strong className="text-green-700 dark:text-green-300">
          robust and future-ready
        </strong>
        . Clean code and predictable behavior guide how I work.
      </p>
    </React.Fragment>,

    <React.Fragment key="p3">
      <p>
        Before becoming backend-focused, I worked extensively with{' '}
        <strong className="text-green-700 dark:text-green-300">
          React, Next.js, TypeScript, and TailwindCSS
        </strong>
        . This full-stack foundation helps me design backends that pair
        perfectly with real-world frontend requirements.
      </p>
    </React.Fragment>,

    <React.Fragment key="p4">
      <p>
        I’m deepening my backend expertise — exploring advanced{' '}
        <strong className="text-amber-700 dark:text-amber-300">FastAPI</strong>{' '}
        patterns, optimizing{' '}
        <strong className="text-amber-700 dark:text-amber-300">
          database performance
        </strong>
        , and strengthening DevOps workflows with{' '}
        <strong className="text-amber-700 dark:text-amber-300">Docker</strong>.
        I code daily, build side projects, and study system design to sharpen my
        fundamentals.
      </p>
    </React.Fragment>,
  ];

  return (
    <section
      className="relative container w-full pt-28 md:pt-24 pb-20 overflow-hidden min-h-screen 
                     transition-colors duration-300"
    >
      <div className="w-full mx-auto px-6 md:px-4 lg:px-36  flex flex-col">
        {/* Heading */}
        <div>
          <h1 className="text-3xl font-quicksand md:text-4xl font-semibold text-gray-900 dark:text-gray-100 relative">
            About
            <motion.span
              initial={{ opacity: 1, width: 0 }}
              whileInView={{ opacity: 1, width: 150 }}
              transition={{ duration: 0.8, ease: 'easeIn' }}
              className="block  h-[3px] mt-2 bg-rose-500 dark:bg-rose-400 rounded-full"
            ></motion.span>
          </h1>
        </div>

        {/* Body content */}
        <div className="flex flex-col mt-4">
          <motion.div className="relative mx-4  flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
            <LayoutTextFlip
              words={aboutMe}
              className="text-4xl md:text-5xl font-fira-code text-transparent text-clip bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-600 dark:to-blue-600"
            />
          </motion.div>
          <motion.div className="flex flex-col items-start gap-6 font-quicksand font-bold mt-8 tracking-wider">
            {paragraphs.map((Para, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2, // 1 second per paragraph
                  ease: 'easeOut',
                }}
                className="leading-relaxed"
              >
                {Para}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
