'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export const LayoutTextFlip = ({
  text = '',
  words = [],
  duration = 2000,
  className = '',
}: {
  text?: string;
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.span
        layoutId="subtext"
        className="text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl"
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className="relative w-fit px-4 py-2 font-sans text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -50, filter: 'blur(10px)' }}
            animate={{
              y: 0,
              filter: 'blur(0px)',
            }}
            exit={{ y: 50, filter: 'blur(10px)', opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn(`inline-block whitespace-nowrap ${className}`)}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
