import React from 'react';
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';

export function DottedGlowBackgroundDemoSecond() {
  const list = [
    '#DEVELOPER',
    '#WEB DESIGN',
    '#FREELANCER',
    '#OPEN SOURCE',
    '#TECH ENTHUSIAST',
  ];
  return (
    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />

      <div className="relative z-10 flex w-full flex-col items-center justify-between space-y-6 px-8 py-16 text-center md:flex-row">
        <div className="max-w-5xl md:max-w-6xl lg:max-w-6xl mx-auto px-8 text-center  lg:px-16">
          <div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-blue-950 dark:text-gray-200">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-pink-600 dark:via-purple-600 dark:to-blue-600 ">
                FARAAZ
              </span>{' '}
              ASHRAF
            </h1>
          </div>
          <div className="hidden lg:flex items-center justify-between gap-4 px-10">
            {list.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
