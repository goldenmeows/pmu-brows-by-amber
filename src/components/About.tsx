import { useState } from "react";

const teamImages = [
  {
    src: "https://raw.githubusercontent.com/goldenmeows/pmu-brows-by-amber/main/public/honey-glow-beauty-bar-brows-by-amber-benicia-ca-2.png",
    alt: "Honey Glow Beauty Bar team in Benicia CA — lashes, hair, skin, and permanent makeup specialists",
    caption: "At Honey Glow Beauty Bar in Benicia, CA, our goal is simple: never overpower the beauty you already have — just give it a little glow. From lashes to hair to skin, every service is designed to make you feel welcomed, comfortable, and beautifully yourself.",
  },
  {
    src: "https://raw.githubusercontent.com/goldenmeows/pmu-brows-by-amber/main/public/honey-glow-beauty-bar-brows-by-amber-benicia-ca-1.png"
    alt: "Amber powder brow artist at Honey Glow Beauty Bar Benicia California",
    caption: , "From luxurious hair extensions and lash lifts to full-body waxing and customized facials, Honey Glow Beauty Bar in Benicia is a full-service beauty studio where every woman leaves 100% satisfied."
  },
  {
    src: "https://raw.githubusercontent.com/goldenmeows/pmu-brows-by-amber/main/public/honey-glow-beauty-bar-brows-by-amber-benicia-ca-3.png",
    alt: "Honey Glow Beauty Bar studio Benicia CA — hair extensions, waxing, facials, lash extensions",
    caption: "Powder brows at Honey Glow Beauty Bar transform how you look and feel — no makeup routine required."
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
          <p className="mt-4 text-sm italic text-[#E8DED6] text-center px-4">
            {teamImages[current].caption}
          </p>
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