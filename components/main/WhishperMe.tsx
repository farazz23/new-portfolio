'use client';
import { motion } from 'framer-motion'; // use framer-motion if possible
import { Input } from '../ui/input';

const WhisperMe = () => {
  // const placeholders = [
  //   "What's the first rule of Fight Club?",
  //   'Who is Tyler Durden?',
  //   'Where is Andrew Laeddis hiding?',
  //   'Write a JavaScript method to reverse a string',
  //   'How to assemble your own PC?',
  // ];

  return (
    <section className="relative container w-full pt-24 pb-20 md:pt-28 min-h-screen overflow-hidden">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        {/* Top Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-quicksand text-3xl md:text-4xl font-bold "
        >
          Say{' '}
          <span
            className="bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-600 to-purple-600"
          >
            something…
          </span>{' '}
          or say{' '}
          <span
            className="bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-600 to-purple-600 bg-black "
          >
            nothing{' '}
          </span>
          <span className="text-black dark:text-white">in a Bottle</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="font-bold font-quicksand tracking-wide text-neutral-600 dark:text-neutral-400 py-1.5 max-w-md "
        >
          Drop your thoughts anonymously — your identity is optional.
        </motion.p>

        {/* Action Words */}
        <div className="flex items-center justify-center gap-1.5 ">
          {['Your ', 'whisper', 'my', 'inbox'].map((item, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: idx * 0.35 }}
              className="font-quicksand text-xl md:text-2xl font-semibold dark:text-white"
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhisperMe;
