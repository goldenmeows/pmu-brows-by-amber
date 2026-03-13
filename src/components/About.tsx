import { useState } from "react";

const teamImages = [
  {
    src: "https://raw.githubusercontent.com/goldenmeows/pmu-brows-by-amber/public/honey-glow-beauty-bar-brows-by-amber-benicia-ca-1.png",
    alt: "Honey Glow Beauty Bar studio team in Benicia, CA — powder brow specialists",
    caption: "Our team at Honey Glow Beauty Bar, Benicia's premier PMU studio.",
  },
  {
    src: "https://raw.githubusercontent.com/goldenmeows/pmu-brows-by-amber/public/honey-glow-beauty-bar-brows-by-amber-benicia-ca-2.png",
    alt: "Amber and her team providing powder brow services in Benicia California",
    caption: "A welcoming space where every client feels seen, safe, and beautiful.",
  },
  {
    src: "https://raw.githubusercontent.com/goldenmeows/pmu-brows-by-amber/public/honey-glow-beauty-bar-brows-by-amber-benicia-ca-3.png",
    alt: "Permanent makeup studio at Honey Glow Beauty Bar in Benicia CA",
    caption: "Serving Benicia, Vallejo, Fairfield & the greater Bay Area.",
  },
];

export default function About() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? teamImages.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === teamImages.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full py-28 bg-[#7d6659]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — Headshot + Mission */}
        <div className="flex flex-col items-center text-center">
          <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-[#C8A98B] shadow-xl mb-6">
            <img
              src="https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/pmu-brows-by-amber-benicia-ca.png"
              alt="Amber Amazar permanent powder brow artist in Benicia California"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-xl font-semibold text-[#F5EFEA] tracking-wide">Amber Amazar</p>
          <p className="text-sm text-[#C8A98B] mt-1 mb-6">Permanent Powder Brow Artist</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#F5EFEA] mb-4">My Approach</h2>
          <p className="italic text-lg leading-relaxed text-[#E8DED6]">
            Every face is unique, so every set of brows I create is fully customized.
            I take time to carefully map your brows, study your facial symmetry,
            and design a shape that complements your natural beauty.
            <br /><br />
            I specialize in soft, natural powder brows that heal beautifully and
            enhance your features without looking harsh or overdone. My goal is
            simple: to help you wake up feeling confident and ready to roll out
            of bed beautiful.
          </p>
        </div>

        {/* RIGHT — Carousel */}
        <div className="flex flex-col items-center">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-2 border-[#C8A98B]">
            <img
              src={teamImages[current].src}
              alt={teamImages[current].alt}
              className="w-full h-80 object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Prev / Next */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#7d6659]/70 hover:bg-[#7d6659] text-[#F5EFEA] rounded-full w-9 h-9 flex items-center justify-center text-lg transition"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#7d6659]/70 hover:bg-[#7d6659] text-[#F5EFEA] rounded-full w-9 h-9 flex items-center justify-center text-lg transition"
            >
              ›
            </button>
          </div>

          {/* Caption */}
          <p className="mt-4 text-sm italic text-[#E8DED6] text-center px-4">
            {teamImages[current].caption}
          </p>

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {teamImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === current ? "bg-[#C8A98B]" : "bg-[#F5EFEA]/40"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}