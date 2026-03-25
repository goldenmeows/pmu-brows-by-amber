import { useEffect, useState } from 'react';
import { Sparkles, ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const baseAnim = 'transition-all duration-700 ease-out';
  const show = mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
backgroundImage: "url('https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/powder-brows-by-amber-permanent-makeup-artist-benicia-ca.png')",
        backgroundPosition: 'center center',
      }}
      role="region"
      aria-label="Hero section with booking information"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-24 text-center">
        <div
          className={`flex justify-center mb-10 ${baseAnim} ${show}`}
          style={{ transitionDelay: '80ms' }}
        >
          <img
            src="/Untitled_design_(26)_(1).png"
            alt="Brows By Amber logo"
            className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
          />
        </div>

        <div
          className={`inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-sm mb-8 ${baseAnim} ${show}`}
          style={{ transitionDelay: '200ms' }}
        >
          <Sparkles className="w-4 h-4 text-[#C8A28A]" aria-hidden="true" />
          <span
            className="text-sm font-medium text-[#3B2F2A]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Premium Permanent Makeup
          </span>
        </div>

        <div
          className={`flex flex-col items-center mb-6 ${baseAnim} ${show}`}
          style={{ transitionDelay: '100ms' }}
          role="img"
          aria-label="5 out of 5 stars rating"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#0C2C3A] text-[#C8A28A]" aria-hidden="true" />
            ))}
          </div>
          <span
            className="mt-2 text-sm text-[#564B41]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            5.0 Rated on Google
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#3B2F2A] leading-tight ${baseAnim} ${show}`}
          style={{ fontFamily: 'Cormorant, serif', transitionDelay: '320ms' }}
        >
          Brows By Amber
          <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 font-normal">
            Trusted Permanent Makeup Artist in Benicia, CA
          </span>
        </h1>

        <p
          className={`mt-8 text-lg sm:text-xl text-[#564B41] max-w-2xl mx-auto leading-relaxed ${baseAnim} ${show}`}
          style={{ fontFamily: 'Inter, sans-serif', transitionDelay: '440ms' }}
        >
          Precision-crafted brows and beauty services designed for long-lasting,
          effortless confidence.
        </p>

        <div
          className={`mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center ${baseAnim} ${show}`}
          style={{ transitionDelay: '560ms' }}
        >
          <button
            onClick={() => scrollTo('booking')}
            className="px-8 py-4 bg-[#3B2F2A] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B2F2A]"
            style={{ fontFamily: 'Inter, sans-serif' }}
            aria-label="Book an appointment for powder brows"
          >
            Book for Effortless Beauty
          </button>

          <button
            onClick={() => scrollTo('gallery')}
            className="px-8 py-4 bg-white text-[#3B2F2A] rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-[#C8A28A]/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B2F2A]"
            style={{ fontFamily: 'Inter, sans-serif' }}
            aria-label="View gallery of brow transformations"
          >
            View Results
          </button>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce ${baseAnim} ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '700ms' }}
        aria-hidden="true"
      >
        <ChevronDown className="w-8 h-8 text-[#3B2F2A]" />
      </div>
    </section>
  );
}