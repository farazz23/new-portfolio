import About from '@/components/main/About';
import MainPage from '@/components/main/MainPage';

export default function Home() {
  return (
    <section className="mt-24">
      {/* <DottedGlowBackgroundDemoSecond /> */}
      <MainPage />
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
