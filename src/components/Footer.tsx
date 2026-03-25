import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3B2A24] text-[#F6EFE8] py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-[#E7D8CC] fill-[#E7D8CC]" aria-hidden="true" />
              Brows By Amber
            </h3>
            <p className="text-[#E7D8CC] leading-relaxed">
              Professional permanent makeup artistry dedicated to enhancing your natural
              beauty with precision and care in the Benicia area.
            </p>
          </div>

          <nav aria-label="Contact information">
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+17075611588"
                className="flex items-center gap-3 hover:text-white transition-colors group focus:outline-none focus:ring-2 focus:ring-[#E7D8CC] rounded px-1"
                aria-label="Call (707) 561-1588"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true" />
                (707) 561-1588
              </a>

              <a
                href="mailto:amberazamar@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors group focus:outline-none focus:ring-2 focus:ring-[#E7D8CC] rounded px-1"
                aria-label="Email amberazamar@gmail.com"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true" />
                amberazamar@gmail.com
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                Benicia, CA
              </div>
            </div>
          </nav>

          <div>
            <nav aria-label="Social media links">
              <h4 className="text-lg font-semibold text-white mb-4">Follow</h4>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/amber.browsbyme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors group focus:outline-none focus:ring-2 focus:ring-[#E7D8CC] rounded px-1"
                  aria-label="Visit Instagram profile (opens in new window)"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true" />
                  @amber.browsbyme
                </a>
              </div>
            </nav>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Hours</h4>
              <div className="space-y-2 text-sm text-[#E7D8CC]">
                <p>Monday - Friday: 8am - 9pm</p>
                <p>Saturday: 9am - 5pm</p>
                <p>Sunday: 8am - 4pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/15 text-center text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Brows By Amber. All rights reserved. A <a href="https://solorodesign.com" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>Soloro Design</a> experience.</p>
        </div>
      </div>
    </footer>
  );
}