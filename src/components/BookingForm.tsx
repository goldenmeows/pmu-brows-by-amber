import { useEffect, useRef } from "react";
import { CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";

export default function Booking() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetLoaded = useRef(false);

  useEffect(() => {
    if (widgetLoaded.current) return;
    widgetLoaded.current = true;

    const script = document.createElement("script");
    script.src =
      "https://square.site/appointments/buyer/widget/e75caz31cukc42/LNMX8S776JED5.js";
    script.async = true;

    containerRef.current?.appendChild(script);
  }, []);

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[#F6EFE8] py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-[#E9D8C7]/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#D9C2B0]/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.35fr]">

          {/* LEFT SIDE CONTENT */}

          <div className="lg:sticky lg:top-24">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#3B2A24]/10 bg-white/80 px-4 py-2 text-sm font-medium text-[#3B2A24] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Smooth online booking
            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              Book Your
              <span className="block text-[#3B2A24]">Powder Brows</span>
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-8 text-stone-600">
              Choose your appointment time directly below for a seamless booking
              experience for your PMU Appointment in Benicia, CA | Brows by Amber
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-black/5">
                <CalendarDays className="mt-0.5 h-5 w-5 text-[#3B2A24]" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-stone-900">
                    Easy scheduling
                  </p>
                  <p className="text-sm text-stone-600">
                    View available times and reserve your appointment quickly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-black/5">
                <Clock3 className="mt-0.5 h-5 w-5 text-[#3B2A24]" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-stone-900">
                    Quick and convenient
                  </p>
                  <p className="text-sm text-stone-600">
                    Start your booking right here on the page.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-black/5">
                <MapPin className="mt-0.5 h-5 w-5 text-[#3B2A24]" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-stone-900">
                    Professional care
                  </p>
                  <p className="text-sm text-stone-600">
                    Select your appointment with confidence.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE BOOKING CARD */}

          <div className="rounded-[2rem] bg-white/90 p-3 shadow-[0_20px_80px_rgba(59,42,36,0.10)] ring-1 ring-black/5 backdrop-blur">

            <div className="overflow-hidden rounded-[1.5rem] bg-[#FCF8F4]">

              <div className="border-b border-stone-200/70 bg-white/80 px-6 py-4">
                <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                  Secure Booking
                </p>

                <p className="mt-1 text-lg font-semibold text-stone-900">
                  Reserve your appointment below
                </p>
              </div>

              {/* BOOKING WIDGET */}

              <div className="p-4">

                <div className="overflow-hidden rounded-2xl bg-white">

                  <div
                    ref={containerRef}
                    className="square-booking-widget w-full h-[760px]"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}