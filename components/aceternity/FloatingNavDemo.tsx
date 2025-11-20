'use client';
import React from 'react';
import { FloatingNav } from '../ui/floating-navbar';
import { Briefcase, FolderGit2, Mail, User } from 'lucide-react';
export function FloatingNavDemo() {
  const navItems = [
    {
      name: 'About',
      link: '/',
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Experience',
      link: '/experience',
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Project',
      link: '/projects',
      icon: <FolderGit2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
