'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

const TechStack = () => {
  const techStack = [
    {
      id: 1,
      label: 'Python',
      icon: '/tech/python-5.svg',
      link: 'https://www.python.org/community/logos/',
    },
    {
      id: 2,
      label: 'FastAPI',
      icon: '/tech/fastapi-1.svg',
      link: 'https://fastapi.tiangolo.com/',
    },
    {
      id: 3,
      label: 'PostgreSQL',
      icon: '/tech/postgresql.svg',
      link: 'https://www.postgresql.org/',
    },
    {
      id: 4,
      label: 'Redis',
      icon: '/tech/redis.svg',
      link: 'https://redis.io/',
    },
    {
      id: 5,
      label: 'Docker',
      icon: '/tech/docker-4.svg',
      link: 'https://www.docker.com/',
    },
    {
      id: 6,
      label: 'React.js',
      icon: '/tech/react-2.svg',
      link: 'https://react.dev/',
    },
    {
      id: 7,
      label: 'Next.js',
      icon: '/tech/next-js.svg',
      link: 'https://nextjs.org/',
    },
    {
      id: 8,
      label: 'TypeScript',
      icon: '/tech/typescript-2.svg',
      link: 'https://www.typescriptlang.org/',
    },
    {
      id: 9,
      label: 'TailwindCSS',
      icon: '/tech/tailwind-css-2.svg',
      link: 'https://tailwindcss.com/',
    },
    {
      id: 10,
      label: 'Node.js',
      icon: '/tech/nodejs-icon.svg',
      link: 'https://nodejs.org/en',
    },
    {
      id: 11,
      label: 'Express.js',
      icon: '/tech/Express.svg',
      link: 'https://expressjs.com/',
    },
    {
      id: 12,
      label: 'MongoDB',
      icon: '/tech/mongodb-icon-1.svg',
      link: 'https://www.mongodb.com/',
    },
    {
      id: 13,
      label: 'Java',
      icon: '/tech/java-icon.svg',
      link: 'https://www.mongodb.com/',
    },
    {
      id: 14,
      label: 'JavaScript',
      icon: '/tech/javascript-logo-svgrepo-com.svg',
      link: 'https://www.mongodb.com/',
    },
    {
      id: 15,
      label: 'PostmanAPI',
      icon: '/tech/postman-icon-svgrepo-com.svg',
      link: 'https://www.mongodb.com/',
    },
    {
      id: 16,
      label: 'Git',
      icon: '/tech/git-icon-logo-svgrepo-com.svg',
      link: 'https://www.mongodb.com/',
    },
    {
      id: 17,
      label: 'Stripe',
      icon: '/tech/stripe-svgrepo-com.svg',
      link: 'https://www.mongodb.com/',
    },
    {
      id: 18,
      label: 'Sentry',
      icon: '/tech/sentry-icon-svgrepo-com.svg',
      link: 'https://www.mongodb.com/',
    },
    {
      id: 19,
      label: 'C++',
      icon: '/tech/c-plus-plus-svgrepo-com.svg',
      link: 'https://www.mongodb.com/',
    },
    // {
    //   id: 20,
    //   label: 'C',
    //   icon: '/tech/icons8-c-programming-50.svg',
    //   link: 'https://www.mongodb.com/',
    // },

    {
      id: 22,
      label: 'VS Code',
      icon: '/tech/vscode.svg',
      link: 'https://www.mongodb.com/',
    },
  ];
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
