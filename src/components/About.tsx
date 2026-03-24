import { useState, useEffect } from "react";

const teamImages = [
  {
    src: "https://raw.githubusercontent.com/goldenmeows/pmu-brows-by-amber/main/public/honey-glow-beauty-bar-brows-by-amber-benicia-ca-2.png",
    alt: "Honey Glow Beauty Bar team in Benicia CA — lashes, hair, skin, and permanent makeup specialists",
    caption: "At Honey Glow Beauty Bar in Benicia, CA, our goal is simple: never overpower the beauty you already have — just give it a little glow.",
  },
  {
    src: "https://raw.githubusercontent.com/goldenmeows/pmu-brows-by-amber/main/public/honey-glow-beauty-bar-brows-by-amber-benicia-ca-1.png",
    alt: "Amber powder brow artist at Honey Glow Beauty Bar Benicia California",
    caption: "From luxurious hair extensions and lash lifts to full-body waxing and customized facials — every woman leaves 100% satisfied.",
  },
  {
    src: "https://raw.githubusercontent.com/goldenmeows/pmu-brows-by-amber/main/public/honey-glow-beauty-bar-brows-by-amber-benicia-ca-3.png",
    alt: "Honey Glow Beauty Bar studio Benicia CA — hair extensions, waxing, facials, lash extensions",
    caption: "Powder brows that transform how you look and feel — no makeup routine required.",
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

  .about-section {
    position: relative;
    width: 100%;
    padding: 120px 0 140px;
    background: #7d6659;
    overflow: hidden;
    font-family: 'Jost', sans-serif;
  }

  /* Noise texture overlay */
  .about-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    opacity: 0.35;
    pointer-events: none;
  }

  /* Warm radial glow from center */
  .about-section::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(180, 130, 80, 0.09) 0%, transparent 70%);
    pointer-events: none;
  }

  .about-inner {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 48px;
  }

  /* ─── Section label ─── */
  .about-label {
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 11px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #C8A067;
    margin-bottom: 20px;
  }

  /* ─── Divider ornament ─── */
  .ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 72px;
  }
  .ornament-line {
    width: 80px;
    height: 1px;
    background: linear-gradient(to right, transparent, #C8A067 60%, transparent);
  }
  .ornament-diamond {
    width: 6px;
    height: 6px;
    background: #C8A067;
    transform: rotate(45deg);
    flex-shrink: 0;
  }

  /* ─── Two column grid ─── */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
  }

  /* ─── LEFT column ─── */
  .about-left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Portrait frame */
  .portrait-frame {
    position: relative;
    width: 240px;
    height: 240px;
    margin-bottom: 28px;
  }
  .portrait-frame::before {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #C8A067, #e8d5a3, #C8A067, #9d7a45, #C8A067);
    opacity: 0.7;
  }
  .portrait-frame::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: #7d6659;
  }
  .portrait-img {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #C8A067;
  }
  .portrait-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  .artist-name {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: 26px;
    color: #F5EDE1;
    letter-spacing: 0.06em;
    margin-bottom: 4px;
    text-align: center;
  }
  .artist-title {
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 11px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #C8A067;
    margin-bottom: 40px;
    text-align: center;
  }

  /* Approach text */
  .approach-heading {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 42px;
    line-height: 1.1;
    color: #F5EDE1;
    margin-bottom: 24px;
    text-align: center;
    letter-spacing: 0.02em;
  }
  .approach-heading em {
    font-style: italic;
    color: #C8A067;
  }

  .approach-text {
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.9;
    color: #C4B09A;
    text-align: center;
    max-width: 380px;
  }

  .approach-divider {
    width: 40px;
    height: 1px;
    background: #C8A067;
    margin: 28px auto;
    opacity: 0.6;
  }

  /* ─── RIGHT column ─── */
  .about-right {
    display: flex;
    flex-direction: column;
    padding-top: 12px;
  }

  .carousel-wrapper {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    box-shadow:
      0 4px 24px rgba(0,0,0,0.5),
      0 0 0 1px rgba(200, 160, 103, 0.25);
  }

  .carousel-img {
    width: 500px;
    height: 400px;
    object-fit: cover;
    display: block;
    transition: opacity 0.5s ease;
  }

  /* Golden overlay on image */
  .carousel-wrapper::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(100, 79, 68, 0.82) 100%
    );
    pointer-events: none;
  }

  /* Caption overlaid on image bottom */
  .carousel-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    padding: 28px 28px 24px;
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-style: italic;
    font-size: 16px;
    line-height: 1.6;
    color: rgba(245, 237, 225, 0.9);
  }

  /* Nav arrows */
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    width: 40px;
    height: 40px;
    background: rgba(100, 79, 68, 0.7);
    border: 1px solid rgba(200, 160, 103, 0.4);
    color: #C8A067;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.25s ease;
    backdrop-filter: blur(4px);
    line-height: 1;
  }
  .carousel-btn:hover {
    background: rgba(200, 160, 103, 0.2);
    border-color: #C8A067;
  }
  .carousel-btn.prev { left: 16px; }
  .carousel-btn.next { right: 16px; }

  /* Dots */
  .carousel-dots {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
  }
  .dot {
    width: 28px;
    height: 2px;
    background: rgba(200, 160, 103, 0.25);
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .dot.active {
    background: #C8A067;
    width: 44px;
  }

  /* ─── Responsive ─── */
  @media (max-width: 768px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 56px;
    }
    .about-inner {
      padding: 0 24px;
    }
    .about-section {
      padding: 80px 0 100px;
    }
    .portrait-frame {
      width: 200px;
      height: 200px;
    }
  }
`;

export default function About() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const go = (idx) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 250);
  };

  const prev = () => go(current === 0 ? teamImages.length - 1 : current - 1);
  const next = () => go(current === teamImages.length - 1 ? 0 : current + 1);

  return (
    <>
      <style>{styles}</style>
      <section className="about-section">
        <div className="about-inner">

          {/* Label + ornament */}
          <p className="about-label">The Studio &amp; the Artist</p>
          <div className="ornament">
            <span className="ornament-line" />
            <span className="ornament-diamond" />
            <span className="ornament-line" style={{ background: "linear-gradient(to left, transparent, #C8A067 60%, transparent)" }} />
          </div>

          <div className="about-grid">

            {/* LEFT */}
            <div className="about-left">
              <div className="portrait-frame">
                <div className="portrait-img">
                  <img
                    src="https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/pmu-brows-by-amber-benicia-ca.png"
                    alt="Amber Amazar permanent powder brow artist in Benicia California"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <p className="artist-name">Amber Amazar</p>
              <p className="artist-title">Permanent Powder Brow Artist</p>

              <h2 className="approach-heading">
                My<br /><em>Approach</em>
              </h2>

              <p className="approach-text">
                Every face is unique, so every set of brows I create is fully customized.
                I take time to carefully map your brows, study your facial symmetry,
                and design a shape that complements your natural beauty.
              </p>

              <div className="approach-divider" />

              <p className="approach-text">
                I specialize in soft, natural powder brows that heal beautifully and
                enhance your features without looking harsh or overdone. My goal is
                simple: help you wake up feeling confident and ready to roll out of bed beautiful.
              </p>
            </div>

            {/* RIGHT */}
            <div className="about-right">
              <div className="carousel-wrapper">
                <img
                  src={teamImages[current].src}
                  alt={teamImages[current].alt}
                  className="carousel-img"
                  referrerPolicy="no-referrer"
                  style={{ opacity: fading ? 0 : 1 }}
                />
                <div className="carousel-caption" style={{ opacity: fading ? 0 : 1, transition: "opacity 0.5s ease" }}>
                  {teamImages[current].caption}
                </div>
                <button className="carousel-btn prev" onClick={prev} aria-label="Previous">‹</button>
                <button className="carousel-btn next" onClick={next} aria-label="Next">›</button>
              </div>

              <div className="carousel-dots">
                {teamImages.map((_, i) => (
                  <button
                    key={i}
                    className={`dot${i === current ? " active" : ""}`}
                    onClick={() => go(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}