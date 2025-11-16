import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Solutions from '@/components/sections/Solutions';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Solutions />
        {/* More sections will be added here */}
      </main>
    </div>
  );
}
