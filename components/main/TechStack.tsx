'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const TechStack = () => {
  const techStack = [
    { id: 1, label: 'Python', icon: '/tech/python-5.svg' },
    { id: 2, label: 'FastAPI', icon: '/tech/fastapi-1.svg' },
    { id: 3, label: 'PostgreSQL', icon: '/tech/postgresql.svg' },
    { id: 4, label: 'Redis', icon: '/tech/redis.svg' },
    { id: 5, label: 'Docker', icon: '/tech/docker-4.svg' },
    { id: 6, label: 'React.js', icon: '/tech/react-2.svg' },
    { id: 7, label: 'Next.js', icon: '/tech/next-js.svg' },
    { id: 8, label: 'TypeScript', icon: '/tech/typescript-2.svg' },
    { id: 9, label: 'TailwindCSS', icon: '/tech/tailwind-css-2.svg' },
    { id: 10, label: 'Node.js', icon: '/tech/nodejs-icon.svg' },
    { id: 11, label: 'Express.js', icon: '/tech/Express.svg' },
    { id: 12, label: 'MongoDB', icon: '/tech/mongodb-icon-1.svg' },
  ];
  return (
    <section className="container relative overflow-hidden mx-auto">
      <div className="mt-16 mb-4 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeIn' }}
          className="font-quicksand text-2xl md:text-3xl font-bold "
        >
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Technologies
          </span>{' '}
          I Work With
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeIn' }}
          className="text-neutral-600 dark:text-neutral-400 mt-2 mb-8 text-center max-w-md"
        >
          A quick glance at the tools I use to craft clean, scalable, and
          production‑ready applications.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: 'easeIn',
                delay: index * 0.2,
              }}
              className="p-4 rounded-2xl bg-white dark:bg-neutral-900 shadow-md 
                 border border-neutral-200 dark:border-neutral-800 
                 text-center font-medium 
                 text-neutral-700 dark:text-neutral-300 
                 hover:shadow-xl hover:shadow-gray-700 cursor-default flex 
                  items-center gap-3 hover:scale-110 transition-all duration-300 ease-in "
            >
              <Image
                src={tech.icon}
                alt={tech.label}
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="font-fira-code">{tech.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
