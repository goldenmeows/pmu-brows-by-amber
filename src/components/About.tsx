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

  /* ─── Section shell ─── */
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

  /* ─── Shared ornament ─── */
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

  /* ═══════════════════════════════════════
     PART 1 — Amber bio (portrait + text)
  ═══════════════════════════════════════ */
  .ab-bio-grid {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 72px;
    align-items: center;
    margin-bottom: 96px;
  }
  .ab-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* Portrait ring */
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

  /* Carousel (right of bio) */
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
  .ab-caption {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-style: italic;
    font-size: 15px;
    line-height: 1.6;
    color: #E0CFC2;
    text-align: center;
    padding: 16px 12px 0;
    min-height: 50px;
    transition: opacity 0.45s ease;
  }
  .ab-btn {
    position: absolute;
    top: 42%;
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
    margin-top: 16px;
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

  /* ═══════════════════════════════════════
     SECTION BREAK between the two halves
  ═══════════════════════════════════════ */
  .ab-section-break {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 72px;
  }
  .ab-break-line {
    flex: 1;
    height: 1px;
    background: rgba(200,160,103,0.2);
  }
  .ab-break-label {
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 10px;
    letter-spacing: 0.38em;
    text-transform: uppercase;
    color: #C8A067;
    opacity: 0.8;
    white-space: nowrap;
  }
  .ab-break-diamond {
    width: 5px;
    height: 5px;
    background: rgba(200,160,103,0.4);
    transform: rotate(45deg);
    flex-shrink: 0;
  }

  /* ═══════════════════════════════════════
     PART 2 — Studio + Map grid
  ═══════════════════════════════════════ */
  .ab-studio-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items: start;
  }

  /* ── Studio left panel ── */
  .ab-studio-left {
    display: flex;
    flex-direction: column;
  }
  .ab-studio-heading {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 38px;
    line-height: 1.1;
    color: #F5EDE1;
    margin-bottom: 8px;
    letter-spacing: 0.01em;
  }
  .ab-studio-heading em {
    font-style: italic;
    color: #C8A067;
    display: block;
  }
  .ab-studio-tagline {
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 10px;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: #C8A067;
    margin-bottom: 28px;
  }
  .ab-studio-body {
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 14.5px;
    line-height: 1.9;
    color: #E0CFC2;
    margin-bottom: 32px;
  }

  /* Info pills */
  .ab-info-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 32px;
  }
  .ab-info-row {
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }
  .ab-info-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid rgba(200,160,103,0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .ab-info-icon svg {
    width: 12px;
    height: 12px;
    stroke: #C8A067;
    fill: none;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .ab-info-text {
    display: flex;
    flex-direction: column;
  }
  .ab-info-label {
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #C8A067;
    margin-bottom: 2px;
  }
  .ab-info-value {
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 14px;
    color: #E0CFC2;
    line-height: 1.5;
  }

  /* Hours accordion toggle */
  .ab-hours-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 14px;
    color: #E0CFC2;
    line-height: 1.5;
  }
  .ab-hours-toggle svg {
    width: 10px;
    height: 10px;
    stroke: #C8A067;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    transition: transform 0.25s ease;
  }
  .ab-hours-toggle svg.open {
    transform: rotate(180deg);
  }
  .ab-hours-list {
    margin-top: 10px;
    padding-left: 42px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .ab-hours-row {
    display: flex;
    justify-content: space-between;
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 13px;
    color: #C4B09A;
  }
  .ab-hours-day {
    min-width: 90px;
  }

  /* ── Map right panel ── */
  .ab-map-panel {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 32px;
  }
  .ab-map-frame {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    box-shadow:
      0 0 0 1px rgba(200,160,103,0.35),
      0 8px 40px rgba(0,0,0,0.3);
  }
  /* Gold corner accents */
  .ab-map-frame::before,
  .ab-map-frame::after {
    content: '';
    position: absolute;
    z-index: 2;
    pointer-events: none;
  }
  .ab-map-frame::before {
    top: 10px;
    left: 10px;
    width: 22px;
    height: 22px;
    border-top: 1px solid rgba(200,160,103,0.6);
    border-left: 1px solid rgba(200,160,103,0.6);
  }
  .ab-map-frame::after {
    bottom: 10px;
    right: 10px;
    width: 22px;
    height: 22px;
    border-bottom: 1px solid rgba(200,160,103,0.6);
    border-right: 1px solid rgba(200,160,103,0.6);
  }
  .ab-map-frame iframe {
    display: block;
    width: 100%;
    height: 360px;
    border: none;
    filter: saturate(0.7) brightness(0.88) contrast(1.05) sepia(0.12);
    transition: filter 0.3s ease;
  }
  .ab-map-frame:hover iframe {
    filter: saturate(0.9) brightness(0.96) contrast(1.02) sepia(0.05);
  }

  /* Address card below map */
  .ab-address-card {
    margin-top: 16px;
    padding: 18px 20px;
    border: 1px solid rgba(200,160,103,0.18);
    border-radius: 6px;
    background: rgba(255,255,255,0.03);
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .ab-address-pin {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid rgba(200,160,103,0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .ab-address-pin svg {
    width: 13px;
    height: 13px;
    stroke: #C8A067;
    fill: none;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .ab-address-text {
    display: flex;
    flex-direction: column;
  }
  .ab-address-name {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: 16px;
    color: #F5EDE1;
    margin-bottom: 2px;
  }
  .ab-address-line {
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 12.5px;
    color: #C4B09A;
    letter-spacing: 0.02em;
  }
  .ab-directions-link {
    margin-left: auto;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #C8A067;
    text-decoration: none;
    border-bottom: 1px solid rgba(200,160,103,0.3);
    padding-bottom: 2px;
    white-space: nowrap;
    transition: border-color 0.2s ease;
  }
  .ab-directions-link:hover {
    border-color: #C8A067;
  }

  /* ─── Responsive ─── */
  @media (max-width: 960px) {
    .ab-bio-grid,
    .ab-studio-grid {
      grid-template-columns: 1fr;
      gap: 52px;
    }
    .ab-inner { padding: 0 28px; }
    .ab-section { padding: 72px 0 88px; }
    .ab-carousel img { height: 320px; }
    .ab-map-panel { position: static; }
  }
`;

const hours = [
  { day: "Monday",    time: "9:00 AM – 6:00 PM" },
  { day: "Tuesday",   time: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
  { day: "Thursday",  time: "9:00 AM – 6:00 PM" },
  { day: "Friday",    time: "9:00 AM – 6:00 PM" },
  { day: "Saturday",  time: "9:00 AM – 4:00 PM" },
  { day: "Sunday",    time: "Closed" },
];

export default function About() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [hoursOpen, setHoursOpen] = useState(false);

  const go = (idx) => {
    setFading(true);
    setTimeout(() => { setCurrent(idx); setFading(false); }, 230);
  };
  const prev = () => go(current === 0 ? teamImages.length - 1 : current - 1);
  const next = () => go(current === teamImages.length - 1 ? 0 : current + 1);

  return (
    <>
      <style>{styles}</style>
      <section className="ab-section" aria-label="About Amber Amazar">
        <div className="ab-inner">

          {/* ── Section label + ornament ── */}
          <p className="ab-label">The Artist</p>
          <div className="ab-ornament" aria-hidden="true">
            <span className="ab-line" />
            <span className="ab-diamond" />
            <span className="ab-line-rev" />
          </div>

          {/* ══════════════════════════════
              PART 1 — Bio + Carousel
          ══════════════════════════════ */}
          <div className="ab-bio-grid">

            {/* LEFT — Portrait + copy */}
            <div className="ab-left">
              <div className="ab-portrait-wrap" aria-hidden="true">
                <div className="ab-portrait">
                  <img
                    src="https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/pmu-brows-by-amber-benicia-ca.png"
                    alt="Amber Amazar, permanent powder brow artist at Honey Glow Beauty Bar in Benicia, California"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <p className="ab-name">Amber Amazar</p>
              <p className="ab-role">Permanent Powder Brow Artist</p>
              <h2 className="ab-heading">My<em>Approach</em></h2>
              <p className="ab-body">
                Every face is unique, so every set of brows I create is fully customized.
                I take time to carefully map your brows, study your facial symmetry,
                and design a shape that complements your natural beauty.
              </p>
              <div className="ab-divider" aria-hidden="true" />
              <p className="ab-body">
                I specialize in soft, natural powder brows that heal beautifully and
                enhance your features without looking harsh or overdone. My goal is
                simple: help you wake up feeling confident and ready to roll out of bed beautiful.
              </p>
            </div>

            {/* RIGHT — Carousel */}
            <div className="ab-right">
              <div className="ab-carousel" role="region" aria-label="Studio photo gallery">
                <img
                  src={teamImages[current].src}
                  alt={teamImages[current].alt}
                  referrerPolicy="no-referrer"
                  style={{ opacity: fading ? 0 : 1 }}
                />
                <button className="ab-btn ab-btn-prev" onClick={prev} aria-label="Previous slide">‹</button>
                <button className="ab-btn ab-btn-next" onClick={next} aria-label="Next slide">›</button>
              </div>

              <p className="ab-caption" style={{ opacity: fading ? 0 : 1 }} aria-live="polite">
                {teamImages[current].caption}
              </p>

              <div className="ab-dots" role="group" aria-label="Slide indicators">
                {teamImages.map((_, i) => (
                  <button
                    key={i}
                    className={`ab-dot${i === current ? " ab-dot-on" : ""}`}
                    onClick={() => go(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === current ? "true" : "false"}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* ══════════════════════════════
              Section break
          ══════════════════════════════ */}
          <div className="ab-section-break" aria-hidden="true">
            <span className="ab-break-line" />
            <span className="ab-break-diamond" />
            <span className="ab-break-label">The Studio</span>
            <span className="ab-break-diamond" />
            <span className="ab-break-line" style={{ background: "rgba(200,160,103,0.2)" }} />
          </div>

          {/* ══════════════════════════════
              PART 2 — Studio info + Map
          ══════════════════════════════ */}
          <div className="ab-studio-grid">

            {/* LEFT — Studio info */}
            <div className="ab-studio-left">
              <h3 className="ab-studio-heading">
                Honey Glow<em>Beauty Bar</em>
              </h3>
              <p className="ab-studio-tagline">Benicia, California</p>
              <p className="ab-studio-body">
                Honey Glow Beauty Bar is a full-service beauty studio where every woman
                is treated with intention and care. From luxurious hair extensions and lash
                lifts to full-body waxing and customized facials — this is a space designed
                to make you feel welcomed, seen, and beautifully yourself.
              </p>

              <div className="ab-info-list">

                {/* Address */}
                <div className="ab-info-row">
                  <div className="ab-info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z"/><circle cx="12" cy="9" r="2.5"/></svg>
                  </div>
                  <div className="ab-info-text">
                    <span className="ab-info-label">Address</span>
                    <span className="ab-info-value">2150 Columbus Pkwy, Benicia, CA 94510</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="ab-info-row">
                  <div className="ab-info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 4.18 2 2 0 0 1 5.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 23 16.92z"/></svg>
                  </div>
                  <div className="ab-info-text">
                    <span className="ab-info-label">Phone</span>
                    <a href="tel:+17077580273" className="ab-info-value" style={{ textDecoration: "none", color: "#E0CFC2" }}>
                      (707) 758-0273
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="ab-info-row">
                  <div className="ab-info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div className="ab-info-text">
                    <span className="ab-info-label">Hours</span>
                    <button
                      className="ab-hours-toggle"
                      onClick={() => setHoursOpen(o => !o)}
                      aria-expanded={hoursOpen}
                      aria-controls="ab-hours-list"
                    >
                      {hoursOpen ? "Hide hours" : "View all hours"}
                      <svg viewBox="0 0 10 6" className={hoursOpen ? "open" : ""} aria-hidden="true">
                        <path d="M1 1l4 4 4-4"/>
                      </svg>
                    </button>
                    {hoursOpen && (
                      <div className="ab-hours-list" id="ab-hours-list">
                        {hours.map(({ day, time }) => (
                          <div key={day} className="ab-hours-row">
                            <span className="ab-hours-day">{day}</span>
                            <span style={{ color: time === "Closed" ? "rgba(196,176,154,0.5)" : "#C4B09A" }}>{time}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT — Map */}
            <div className="ab-map-panel">
              <div className="ab-map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.812!2d-122.1940022!3d38.0819027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857319ab72cc17%3A0x801b221f4247776!2sHoney%20Glow%20Beauty%20Bar!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  title="Honey Glow Beauty Bar location map — 2150 Columbus Pkwy, Benicia, CA 94510"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing Honey Glow Beauty Bar at 2150 Columbus Pkwy, Benicia, CA"
                />
              </div>

              {/* Address card */}
              <address className="ab-address-card" style={{ fontStyle: "normal" }}>
                <div className="ab-address-pin" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z"/><circle cx="12" cy="9" r="2.5"/></svg>
                </div>
                <div className="ab-address-text">
                  <span className="ab-address-name">Honey Glow Beauty Bar</span>
                  <span className="ab-address-line">2150 Columbus Pkwy, Benicia, CA 94510</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Honey+Glow+Beauty+Bar+2150+Columbus+Pkwy+Benicia+CA+94510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ab-directions-link"
                  aria-label="Get directions to Honey Glow Beauty Bar in Google Maps"
                >
                  Directions ↗
                </a>
              </address>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}