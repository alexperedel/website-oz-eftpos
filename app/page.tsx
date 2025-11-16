import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Solutions from '@/components/sections/Solutions';
import Advantages from '@/components/sections/Advantages';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Advantages />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
