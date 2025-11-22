import About from '@/components/main/About';
import LandingPage from '@/components/main/LandingPage';
import TechStack from '@/components/main/TechStack';

export default function Home() {
  return (
    <section className="relative w-full ">
      <LandingPage />
      <About />
      <TechStack />
      {/* 
        <Experience />
        <Project />
        <Contact us />
        <Quote />
        <Footer />
      */}
    </section>
  );
}
