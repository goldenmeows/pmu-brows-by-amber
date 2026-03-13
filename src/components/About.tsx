export default function About() {
  return (
    <section className="w-full py-28 bg-[#7d6659]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#F5EFEA] mb-6">
            My Approach
          </h2>

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

        {/* RIGHT IMAGE + NAME */}
        <div className="flex flex-col items-center text-center">

          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#C8A98B] shadow-xl">
            <img
              src="https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/pmu-brows-by-amber-benicia-ca.png"
              alt="Amber permanent powder brow artist in Benicia California"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Name under photo */}
          <p className="mt-6 text-xl font-semibold text-[#F5EFEA] tracking-wide">
            Amber Amazar
          </p>

          <p className="text-sm text-[#C8A98B] mt-1">
            Permanent Powder Brow Artist
          </p>

        </div>

      </div>
    </section>
  );
}