'use client';
import { cn } from '@/lib/utils';
import { easeInOut, motion } from 'motion/react';
import React from 'react';

const experiences = [
  {
    title: 'Backend Developer',
    company: 'Klugsys',
    country: 'Germany',
    state: 'Aachen',
    type: 'Full-Time', // Assumed based on role description
    period: 'Present',
    span_color: 'bg-green-500',
    points: [
      'Developed and maintained scalable REST APIs using FastAPI, ensuring high performance and adherence to clean architecture principles.',
      'Optimized Docker images and container workflows by applying multi-stage builds, reducing image size and build time while improving deployment efficiency.',
      'Designed and executed complex SQL queries and database operations in PostgreSQL, including indexing, query tuning, and schema updates to improve performance.',
      'Implemented API versioning, dependency injection, validation, and async patterns to ensure reliability, maintainability, and scalability.',
      'Improved system performance and workflow efficiency by refactoring code, eliminating bottlenecks, and implementing async patterns where applicable.',
    ],
  },
  {
    title: 'Full Stack Web Developer',
    company: 'DS Energize',
    country: 'India',
    state: 'New Delhi',
    type: 'Full-Time',
    span_color: 'bg-gray-500',
    period: 'Jan 2025 - Aug 2025',
    points: [
      'Collaborated with a cross-functional team to design and implement an IoT-enabled web application for real-time data integration and visualization.',
      'Developed and optimized backend services to asynchronously fetch real-time data from databases, ensuring seamless, low-latency communication with the frontend.',
      'Engineered robust data parsing logic to transform raw IoT logger data into structured, readable formats, improving data usability and storage efficiency.',
      'Contributed to secure and scalable database design, supporting reliable storage and retrieval of high-frequency IoT-generated data for real-time applications.',
      'Integrated IoT protocols and principles with modern web technologies to enable efficient data transmission between hardware devices and the web interface.',
      'Assisted in developing a responsive, user-friendly frontend for real-time IoT data visualization.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Noveracian Global',
    country: 'India',
    state: 'Maharashtra',
    type: 'Full-Time',
    span_color: 'bg-gray-500',
    period: 'June 2023 - Mar 2024',
    points: [
      'Developed and implemented user interfaces using React.js, enhancing application responsiveness and user experience across various devices.',
      'Optimized user interface design, reducing user complaints by 20% and increasing user satisfaction.',
      'Identified and resolved bugs in the codebase, decreasing unresolved issues by 25% and ensuring smoother application performance.',
      'Collaborated with the development team to refine user-centric design elements, improving overall user engagement and satisfaction.',
    ],
  },
];
const ExperienceTimeline = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-4 ">
      <div className="relative ">
        {experiences.map((exp, index) => (
          // 2. Wrap each box in a motion.div to apply the itemVariant
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeIn', delay: index * 0.2 }}
          >
            <ExperienceBox
              title={exp.title}
              company={exp.company}
              country={exp.country}
              state={exp.state}
              type={exp.type}
              period={exp.period}
              points={exp.points}
              span_color={exp.span_color}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;

const ExperienceBox = ({
  company,
  title,
  country,
  state,
  type,
  period,
  points,
  span_color,
}: {
  company: string;
  title: string;
  country: string;
  state: string;
  type: string;
  period: string;
  points: string[];
  span_color: string;
}) => {
  return (
    <div className="mb-10 ml-6 relative">
      {/* Timeline Dot */}
      <span
        className={cn(
          `absolute -left-5 top-1.5 w-3 h-3 rounded-full ${span_color}`,
          `${span_color === 'bg-green-500' ? 'animate-pulse' : ''}`
        )}
      ></span>

      <h3 className="text-lg lg:text-xl font-extrabold font-quicksand">
        {title}
      </h3>
      <p className="text-sm md:text-md lg:text-lg text-gray-400 dark:text-gray-300 mb-1 font-medium">
        {company} • {state} • {country} • {type}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-bold">
        {period}
      </p>
      <ul className="list-disc ml-5 space-y-1 text-gray-600 dark:text-gray-300">
        {points.map((point, idx) => (
          <li key={idx} className="font-bold">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};
