import { useState } from "react";

const teamImages = [
  {
    src: "https://raw.githubusercontent.com/goldenmeows/pmu-brows-by-amber/main/public/honey-glow-beauty-bar-brows-by-amber-benicia-ca-2.png",
    alt: "Honey Glow Beauty Bar team in Benicia CA",
    caption: "At Honey Glow Beauty Bar in Benicia, CA — never overpower the beauty you already have, just give it a little glow.",
  },
  {
    src: "https://raw.githubusercontent.com/goldenmeows/pmu-brows-by-amber/main/public/honey-glow-beauty-bar-brows-by-amber-benicia-ca-1.png",
    alt: "Amber powder brow artist at Honey Glow Beauty Bar",
    caption: "From lash lifts to customized facials — every woman leaves 100% satisfied.",
  },
  {
    src: "https://raw.githubusercontent.com/goldenmeows/pmu-brows-by-amber/main/public/honey-glow-beauty-bar-brows-by-amber-benicia-ca-3.png",
    alt: "Honey Glow Beauty Bar studio Benicia CA",
    caption: "Powder brows that transform how you look and feel — no makeup routine required.",
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

  .ab-section {
    width: 100%;
    background: #7d6659;
    padding: 100px 0 120px;
    overflow: hidden;
    position: relative;
    font-family: 'Jost', sans-serif;
  }

  .ab-section::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 50% at 50% 45%, rgba(210,175,120,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .ab-inner {
    position: relative;
    z-index: 1;
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 60px;
  }

  .ab-label {
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 10px;
    letter-spacing: 0.38em;
    text-transform: uppercase;
    color: #C8A067;
    margin-bottom: 18px;
  }

  .ab-ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 64px;
  }
  .ab-line {
    width: 72px;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(200,160,103,0.7));
  }
  .ab-line-rev {
    width: 72px;
    height: 1px;
    background: linear-gradient(to left, transparent, rgba(200,160,103,0.7));
  }
  .ab-diamond {
    width: 5px;
    height: 5px;
    background: #C8A067;
    transform: rotate(45deg);
    flex-shrink: 0;
  }

  .ab-grid {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 72px;
    align-items: center;
  }

  /* LEFT */
  .ab-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .ab-portrait-wrap {
    position: relative;
    width: 210px;
    height: 210px;
    margin-bottom: 24px;
    flex-shrink: 0;
  }
  .ab-portrait-wrap::before {
    content: '';
    position: absolute;
    inset: -7px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #C8A067, #e8d5a3, #C8A067, #9d7a45, #C8A067);
    opacity: 0.75;
  }
  .ab-portrait-wrap::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: #7d6659;
  }
  .ab-portrait {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }
  .ab-portrait img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .ab-name {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: 27px;
    color: #F5EDE1;
    letter-spacing: 0.05em;
    margin-bottom: 5px;
  }
  .ab-role {
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 10px;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: #C8A067;
    margin-bottom: 34px;
  }

  .ab-heading {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 46px;
    line-height: 1.08;
    color: #F5EDE1;
    margin-bottom: 24px;
    letter-spacing: 0.01em;
  }
  .ab-heading em {
    font-style: italic;
    color: #C8A067;
    display: block;
  }

  .ab-divider {
    width: 34px;
    height: 1px;
    background: rgba(200,160,103,0.5);
    margin: 0 auto 24px;
  }

  .ab-body {
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 14.5px;
    line-height: 1.9;
    color: #E0CFC2;
    max-width: 320px;
  }

  /* RIGHT */
  .ab-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .ab-carousel {
    position: relative;
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    box-shadow:
      0 0 0 1px rgba(200,160,103,0.35),
      0 8px 40px rgba(0,0,0,0.3);
    background: #7d6659;
  }

  .ab-carousel img {
    width: 100%;
    height: 460px;
    object-fit: cover;
    object-position: center top;
    display: block;
    transition: opacity 0.45s ease;
  }

  .ab-carousel-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55%;
    background: linear-gradient(to bottom, transparent, rgba(85,60,50,0.88));
    pointer-events: none;
    z-index: 1;
  }

  .ab-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    padding: 20px 28px 22px;
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-style: italic;
    font-size: 20px;
    line-height: 1.55;
    color: rgba(245,237,225,0.92);
    transition: opacity 0.45s ease;
  }

  .ab-btn {
    position: absolute;
    top: 20%;
    transform: translateY(-50%);
    z-index: 3;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(85,60,50,0.65);
    border: 1px solid rgba(200,160,103,0.45);
    color: #C8A067;
    font-size: 22px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    backdrop-filter: blur(6px);
    transition: all 0.2s ease;
  }
  .ab-btn:hover {
    background: rgba(200,160,103,0.22);
    border-color: #C8A067;
  }
  .ab-btn-prev { left: 14px; }
  .ab-btn-next { right: 14px; }

  .ab-dots {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 18px;
  }
  .ab-dot {
    height: 2px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: rgba(200,160,103,0.28);
    width: 24px;
    border: none;
    padding: 0;
  }
  .ab-dot-on {
    background: #C8A067;
    width: 40px;
  }

  @media (max-width: 900px) {
    .ab-grid {
      grid-template-columns: 1fr;
      gap: 52px;
    }
    .ab-inner {
      padding: 0 28px;
    }
    .ab-section {
      padding: 72px 0 88px;
    }
    .ab-carousel img {
      height: 320px;
    }
  }
`;

export default function About() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const go = (idx) => {
    setFading(true);
    setTimeout(() => { setCurrent(idx); setFading(false); }, 230);
  };

  const prev = () => go(current === 0 ? teamImages.length - 1 : current - 1);
  const next = () => go(current === teamImages.length - 1 ? 0 : current + 1);

  return (
    <>
      <style>{styles}</style>
      <section className="ab-section">
        <div className="ab-inner">

          <p className="ab-label">The Artist</p>
          <div className="ab-ornament">
            <span className="ab-line" />
            <span className="ab-diamond" />
            <span className="ab-line-rev" />
          </div>

          <div className="ab-grid">

            {/* LEFT */}
            <div className="ab-left">
              <div className="ab-portrait-wrap">
                <div className="ab-portrait">
                  <img
                    src="https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/pmu-brows-by-amber-benicia-ca.png"
                    alt="Amber Amazar permanent powder brow artist in Benicia California"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <p className="ab-name">Amber Amazar</p>
              <p className="ab-role">Permanent Powder Brow Artist</p>

              <h2 className="ab-heading">
                My<em>Approach</em>
              </h2>

              <p className="ab-body">
                Every face is unique, so every set of brows I create is fully customized.
                I take time to carefully map your brows, study your facial symmetry,
                and design a shape that complements your natural beauty.
              </p>

              <div className="ab-divider" />

              <p className="ab-body">
                I specialize in soft, natural powder brows that heal beautifully and
                enhance your features without looking harsh or overdone. My goal is
                simple: help you wake up feeling confident and ready to roll out of bed beautiful.
              </p>
            </div>

            {/* RIGHT */}
            <div className="ab-right">
              <div className="ab-carousel">
                <img
                  src={teamImages[current].src}
                  alt={teamImages[current].alt}
                  referrerPolicy="no-referrer"
                  style={{ opacity: fading ? 0 : 1 }}
                />
                <div className="ab-carousel-overlay" />
                <div className="ab-caption" style={{ opacity: fading ? 0 : 1 }}>
                  {teamImages[current].caption}
                </div>
                <button className="ab-btn ab-btn-prev" onClick={prev} aria-label="Previous">‹</button>
                <button className="ab-btn ab-btn-next" onClick={next} aria-label="Next">›</button>
              </div>

              <div className="ab-dots">
                {teamImages.map((_, i) => (
                  <button
                    key={i}
                    className={`ab-dot${i === current ? " ab-dot-on" : ""}`}
                    onClick={() => go(i)}
                    aria-label={`Slide ${i + 1}`}
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