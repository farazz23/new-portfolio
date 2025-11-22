'use client';
import {
  Sun,
  Moon,
  ChessQueen,
  Mail,
  Linkedin,
  Github,
  Facebook,
  Code,
  Instagram,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { FloatingNav } from '../ui/floating-navbar';
import Link from 'next/link';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const logos = [
    {
      id: 1,
      icon: <Mail />,
      link: 'mailto:ashraffaraaz6@gmail.com',
    },
    {
      id: 2,
      icon: <Linkedin />,
      link: 'https://github.com/farazz23',
    },
    {
      id: 3,
      icon: <Github />,
      link: 'https://github.com/farazz23',
    },
    {
      id: 4,
      icon: <Code />,
      link: 'https://leetcode.com/damon_23',
    },
    {
      id: 5,
      icon: <Facebook />,
      link: 'https://facebook.com/faraz',
    },
    {
      id: 6,
      icon: <Instagram />,
      link: 'https://instagram/__.theboynextdoor',
    },
  ];

  return (
    <header
      className=" fixed top-0 left-0 right-0 w-full z-50
    backdrop-blur-md 
    container flex items-center justify-between 
    py-2 md:py-5 lg:py-6 px-3 md:px-4 lg:px-6 mx-auto"
    >
      {/* Left side :- Logo */}
      <div className="lg:flex-1 ">
        <div className="flex items-center gap-1.5">
          <ChessQueen className="hover:scale-105" />
          <h3 className="font-bold text-xl">
            FA<span className="text-rose-500">R</span>AZ
          </h3>
        </div>
      </div>

      {/* Middle side : Navigatin bar */}
      <div className="hidden md:block">
        <div className="flex items-center gap-5 cursor-pointer">
          {logos.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="hover:scale-125 transition-all duration-300 ease-in-out hover:text-rose-400 w-4 h-4"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Right side :- Links */}
      <div className="flex lg:justify-end lg:flex-1">
        <div></div>
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="relative w-16 h-8 rounded-full bg-neutral-300 dark:bg-neutral-800 p-1 flex items-center justify-start dark:justify-end overflow-hidden"
        >
          {/* Icons */}
          <Sun className="absolute left-2 text-yellow-500" size={16} />
          <Moon className="absolute right-2 text-blue-300" size={16} />

          {/* Animated knob */}
          <motion.div
            layout
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 10,
              // duration: 150,
            }}
            className="w-6 h-6 rounded-full bg-white dark:bg-pink-100 shadow-md transition-all duration-500 ease-in-out"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
