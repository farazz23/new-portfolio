'use client';
import React from 'react';
import { FloatingNav } from '../ui/floating-navbar';
export function FloatingNavDemo() {
  const navItems = [
    {
      name: 'About',
      link: '/',
    },
    {
      name: 'Experience',
      link: '/experience',
    },
    {
      name: 'Project',
      link: '/projects',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
