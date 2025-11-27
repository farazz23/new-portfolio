'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';
import { techStack } from '@/lib/techStack';

const TechStack = () => {
  return (
    <section className="container relative overflow-hidden mx-auto ">
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
          className="text-neutral-600 dark:text-neutral-400 mt-2 mb-8 text-center max-w-md font-bold"
        >
          A quick glance at the tools I use to craft clean, scalable, and
          production‑ready applications.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
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
              <Link href={tech.link} className="font-fira-code" target="_blank">
                {tech.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
