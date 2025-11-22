'use client';
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  CodeXml,
  ChessQueen,
  Flame,
  MoonStar,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { FloatingNavDemo } from '../aceternity/FloatingNavDemo';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  // const handleThemeButton = () => {
  //   setTheme(theme === 'dark' ? 'light' : 'dark');
  // };

  return (
    // <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg">
    //   <section
    //     className="font-sans w-full max-w-7xl mx-auto flex items-center justify-between
    //                   py-4 md:py-5 lg:py-5 px-6 md:px-4 lg:px-28"
    //   >
    //     {/* Left side */}
    //     <div className="flex items-center justify-start lg:flex-1">
    //       <h1
    //         className="hover:-rotate-12 transform transition duration-200 ease-in-out
    //                  font-extrabold lg:text-xl text-gray-900 dark:text-gray-50"
    //       >
    //         TBND
    //       </h1>
    //     </div>

    //     {/* Floating Navbar */}
    //     <FloatingNavDemo />

    //     {/* Right side */}
    //     <div className="flex lg:justify-end lg:items-center lg:flex-1">
    //       <div className="flex items-center gap-3 mr-2">
    //         <Link href="mailto:ashraffaraaz6@gmail.com">
    //           <Mail className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
    //         </Link>

    //         <Link href="https://github.com/farazz23">
    //           <Github className="h-5 w-5 sm:h-6 sm:w-6 lg:h-5 lg:w-5" />
    //         </Link>

    //         <Link href="https://linkedin.com/farazz23" target="blank">
    //           <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 lg:h-5 lg:w-5" />
    //         </Link>

    //         <Link href="https://linkedin.com/farazz23" target="blank">
    //           <CodeXml className="h-5 w-5 sm:h-6 sm:w-6 lg:h-5 lg:w-5" />
    //         </Link>

    //         <div className="cursor-pointer text-gray-900 dark:text-gray-50">
    //           {theme === 'light' ? (
    //             <Moon
    //               onClick={handleThemeButton}
    //               className="h-5 w-5 sm:h-6 sm:w-6 lg:h-5 lg:w-5"
    //             />
    //           ) : (
    //             <Sun
    //               onClick={handleThemeButton}
    //               className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
    //             />
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </header>
    <header className="container flex items-center justify-between py-4 md:py-5 lg:py-8 px-3 md:px-4 lg:px-6 mx-auto">
      {/* Left side :- Logo */}
      <div className="lg:flex-1 ">
        <div className="flex items-center gap-1.5">
          <ChessQueen className="hover:scale-105" />
          <h3 className="font-bold text-xl tracking-wider">
            T<span className="text-rose-500 text-2xl">B</span>ND
          </h3>
        </div>
      </div>
      {/* Right side :- Links */}
      <div className="flex lg:justify-end lg:flex-1">
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
