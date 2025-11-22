'use client';
import React from 'react';
import { DottedGlowBackground } from '../ui/dotted-glow-background';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

const MainPage = () => {
  const list = [
    '#DEVELOPER',
    '#WEB DESIGN',
    '#FREELANCER',
    '#OPEN SOURCE',
    '#TECH_ENTHUSIAST',
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between each item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    // SECTION: Added 'bg-slate-950' to force that dark "image look" immediately
    // (assuming you want this dark vibe).
    <section className="relative w-full pt-16 md:pt-8 pb-20 overflow-hidden  min-h-screen mt-3 md:mt-12">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4 lg:px-36">
        {/* --- Name Banner Wrapper --- */}
        <div className="text-center mb-16 lg:mb-24">
          {/* KEY CHANGE: 'inline-block' 
             This makes the div wrap tightly around the text so we can 
             center the glow perfectly relative to the words.
          */}
          <div className="relative inline-block z-10">
            {/* --- THE GLOW POSITIONING --- */}
            {/* 1. absolute: Takes it out of flow.
                2. top/left-1/2 + translate: Centers it perfectly behind text.
                3. w-[120%] h-[150%]: Makes it slightly larger than the text (the "Halo" effect).
                4. -z-10: Puts it BEHIND the text.
            */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] -z-10 opacity-80 pointer-events-none">
              {/* If DottedGlowBackground fills its parent, it will now fill this 
                  invisible box sitting behind your name.
               */}
              <DottedGlowBackground />
            </div>

            {/* --- The Text --- */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold  tracking-tighter leading-[0.9] text-blue-950 dark:text-blue-200">
              {/* Updated Gradient to match the Cyan -> Pink image */}
              <span className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 dark:from-fuchsia-500 dark:via-purple-500 dark:to-cyan-400">
                FARAAZ
              </span>{' '}
              <br className="md:hidden" />
              ASHRAF
            </h1>
          </div>

          {/* Sub-list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mt-10 hidden lg:flex items-center justify-between w-full max-w-3xl mx-auto border-t border-slate-800 pt-6"
          >
            {list.map((item, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="text-sm font-bold text-slate-500 tracking-widest hover:text-cyan-400 transition-colors duration-300 cursor-default uppercase"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* --- Description Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: The Avatar Glow Effect */}
          <div className="relative flex items-center justify-center">
            {/* Decorative circular glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-[80px] opacity-20 animate-pulse"></div>

            <div className="relative aspect-square w-full max-w-xs md:max-w-md bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex items-center justify-center z-10">
              <Image
                src="/Snapchat-741402239.jpg"
                alt="profile_pic"
                fill
                priority
                className="object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
              />
            </div>
          </div>

          {/* Right side: Text */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h2 className="text-3xl font-mono md:text-4xl font-bold text-blue-950 dark:text-white">
              Building digital experiences that{' '}
              <span className="text-cyan-400">matter.</span>
            </h2>
            <p className="font-mono text-md text-slate-400 leading-relaxed">
              I am a passionate developer focused on creating intuitive and
              dynamic user experiences. With a deep love for open source and web
              technologies, I turn complex problems into elegant solutions.
            </p>

            <div className="pt-4">
              {/* Button styled to match the image vibe */}
              <Link href="mailto:ashraffaraaz6@gmail.com">
                <button className="px-8 py-3 rounded-full cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
