import React from 'react';

const About = () => {
  return (
    <section
      className="relative w-full pt-28 md:pt-24 pb-20 overflow-hidden min-h-screen 
                     transition-colors duration-300"
    >
      {/* Soft background glow */}
      <div
        className="pointer-events-none absolute -top-20 left-0 w-64 h-64 
                  bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-40"
      />

      <div className="w-full max-w-5xl mx-auto px-6 md:px-4 lg:px-36 flex flex-col gap-8">
        {/* Heading */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 relative">
            About
            <span className="block w-14 h-[3px] mt-2 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
          </h1>
        </div>

        {/* Body content */}
        <div
          className="flex flex-col gap-4 font-sans text-base leading-relaxed 
                    text-gray-600 dark:text-gray-300 tracking-normal"
        >
          <p>
            Hey, I’m{' '}
            <strong className="text-gray-900 dark:text-gray-100">
              Faraaz Ashraf
            </strong>{' '}
            — a backend-focused Software Engineer passionate about building
            clean, reliable, and scalable systems. I’m currently working at{' '}
            <strong className="text-blue-600 dark:text-blue-400">
              Klugsys
            </strong>
            , a Germany-based company, as a Backend Developer specializing in{' '}
            <strong className="text-gray-900 dark:text-gray-100">Python</strong>
            ,{' '}
            <strong className="text-gray-900 dark:text-gray-100">
              FastAPI
            </strong>
            ,{' '}
            <strong className="text-gray-900 dark:text-gray-100">
              PostgreSQL
            </strong>
            , and{' '}
            <strong className="text-gray-900 dark:text-gray-100">Docker</strong>
            .
          </p>

          <p>
            I enjoy solving complex technical challenges — from designing robust
            APIs to handling edge cases that ensure systems behave predictably
            in real-world environments.
          </p>

          <p>
            I’m currently deepening my Python ecosystem expertise, building
            high-performance FastAPI services, and strengthening my DevOps
            fundamentals with Docker and containerized workflows.
          </p>

          <p>
            I focus on blending engineering precision with product awareness —
            ensuring everything I build is scalable, reliable, and aligned with
            real business needs.
          </p>

          <p>
            I don’t just build for today — I architect systems designed to
            evolve and perform for years.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
