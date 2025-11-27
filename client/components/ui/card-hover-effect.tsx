'use client';
import { cn } from '@/lib/utils';
import { Trash } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const HoverEffect = ({
  items,
  className,
  onDelete,
}: {
  items: {
    id: number;
    username: string;
    message: string;
    created_at: string;
  }[];
  className?: string;
  onDelete: (id: number) => void;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            <CardTitle className="flex items-center gap-2">
              {item.username}
            </CardTitle>
            <FormatDate dateString={item.created_at} />
            <CardDescription>{item.message}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full p-4 overflow-hidden',
        // Light mode
        'bg-white/80 border border-slate-200 shadow-sm',
        // Dark mode
        'dark:bg-neutral-900/80 dark:border-neutral-800 dark:shadow-none',
        // Transition & hover polish
        'transition-colors duration-200',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        'dark:text-zinc-100 text-zinc-900 font-bold tracking-wide mt-4',
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        'mt-8 font-bold font-quicksand text-black dark:text-zinc-400 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  );
};

function FormatDate({ dateString }: { dateString: string }) {
  const date = new Date(dateString);
  const formatted = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return <span className="font-medium text-sm">{formatted}</span>;
}
