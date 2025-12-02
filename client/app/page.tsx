'use client';
import About from '@/components/main/About';
import Contact from '@/components/main/Contact';
import Experience from '@/components/main/Experience';
import Footer from '@/components/main/Footer';
import LandingPage from '@/components/main/LandingPage';
import Project from '@/components/main/Project';
import TechStack from '@/components/main/TechStack';
import WhishperMe from '@/components/main/WhishperMe';

export default function Home() {
  return (
    <section className="relative w-full ">
      <LandingPage />
      <About />
      <Experience />
      <TechStack />
      <Project />
      {/* <Freelancing /> */}
      <WhishperMe />
      <Contact />
      <Footer />
    </section>
  );
}
