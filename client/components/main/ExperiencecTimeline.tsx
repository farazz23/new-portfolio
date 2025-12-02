'use client';
import { experiences } from '@/lib/experience-lib';
import { cn } from '@/lib/utils';
import { easeInOut, motion } from 'motion/react';
import React from 'react';

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
