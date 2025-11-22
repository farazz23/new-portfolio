import About from '@/components/main/About';
import Experience from '@/components/main/Experience';
import LandingPage from '@/components/main/LandingPage';
import TechStack from '@/components/main/TechStack';
import WhishperMe from '@/components/main/WhishperMe';

export default function Home() {
  return (
    <section className="relative w-full ">
      <LandingPage />
      <About />
      <TechStack />
      {/* <Experience /> */}
      <WhishperMe />
      {/* 
        <Project />
        <Quote />
        <Footer />
      */}
    </section>
  );
}
