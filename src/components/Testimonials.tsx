import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "fill-amber-400 text-amber-400"
              : "fill-white/30 text-white/30"
          }`}
        />
      ))}
    </div>
  );
}

const reviews = [
  {
    id: "patricia",
    rating: 5,
    quote: "I get compliments everywhere I go. My brows look natural, the coloring is amazing.",
    name: "Patricia",
    service: "Powder Brows",
  },
  {
    id: "denise",
    rating: 5,
    quote: "I cannot say enough about Amber! I was very apprehensive about getting my eyebrows done until I met Amber and she instantly put me at ease. What an easy, pain free, relaxing time she made for me.",
    name: "Denise",
    service: "Powder Brows",
  },
  {
    id: "debbie",
    rating: 5,
    quote: "I went to see Amber six months ago and she did an awesome job on my permanent make up. I was a little hesitant but I have zero regrets.",
    name: "Debbie",
    service: "Powder Brows",
  },
  {
    id: "betty",
    rating: 5,
    quote: "Best ever, pain free, perfect brows by wonderful Amber. I'm a 70 yr old who came in with my 72 year old sister. Amber patiently listens to what you want, and delivers. Her technique of numbing while she works cuts out the unnecessary 20 minute wait as she works her magic!",
    name: "Betty",
    service: "Powder Brows",
  },
  {
    id: "april",
    rating: 5,
    quote: "Amber is amazing at what she does! She helped me bring back some confidence in myself. She had an amazing personality and kept asking if I was ok with how they looked before she started, which showed me she truly cared. She is also very light handed — I literally fell asleep. Highly recommend!",
    name: "April",
    service: "Powder Brows",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  }, [animating]);

  const prev = useCallback(() => goTo((current - 1 + reviews.length) % reviews.length), [current, goTo]);
  const next = useCallback(() => goTo((current + 1) % reviews.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current, paused, next]);

  const review = reviews[current];

  return (
    <section
      className="relative py-32 overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/top-rated-pmu-brows-by-amber-benicia-ca.png')",
        }}
        role="presentation"
      />

      {/* Dark overlay for contrast — WCAG AA compliant */}
      <div className="absolute inset-0 bg-[#1a0f0a]/70" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Client Reviews
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <StarRating rating={5} />
            <span className="text-2xl font-bold text-white">5.0</span>
            <span className="text-white/80">out of 5</span>
          </div>
          <p className="text-lg text-white/80">See what beautiful clients have to say</p>
        </div>

        {/* Carousel */}
        <div
          role="region"
          aria-label="Review carousel"
          aria-live="polite"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Liquid Glass Card */}
          <div
            className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-300 ${
              animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
            aria-atomic="true"
          >
            <Quote
              className="absolute top-6 right-6 w-10 h-10 text-white/20"
              aria-hidden="true"
            />
            <StarRating rating={review.rating} />
            <blockquote className="mt-6 mb-8">
              <p className="text-white text-lg leading-relaxed">
                "{review.quote}"
              </p>
            </blockquote>
            <div className="pt-4 border-t border-white/20">
              <p className="font-semibold text-white">{review.name}</p>
              <p className="text-sm mt-1 text-amber-300">{review.service}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <ChevronLeft className="w-5 h-5 text-white" aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Select review">
              {reviews.map((r, i) => (
                <button
                  key={r.id}
                  onClick={() => goTo(i)}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Review by ${r.name}`}
                  className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                    i === current
                      ? "w-6 h-2 bg-white"
                      : "w-2 h-2 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next review"
              className="p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <ChevronRight className="w-5 h-5 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}