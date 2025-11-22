import About from '@/components/main/About';
import LandingPage from '@/components/main/LandingPage';

export default function Home() {
  return (
    <section className="relative w-full ">
      <LandingPage />
      <About />
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
