import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItem {
  id: number;
  image_url: string;
  title: string;
  category: string;
}

const items: GalleryItem[] = [
  { id: 1, image_url: 'https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-1.png', title: 'Water and Smudge Proof Brows', category: '' },
  { id: 2, image_url: 'https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-2.png', title: 'Natural Brow Enhancement', category: '' },
  { id: 3, image_url: 'https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-3.png', title: 'Perfectly Filled-In Look', category: '' },
  { id: 4, image_url: 'https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-4.png', title: 'Beautifully Matching Eyebrows', category: '' },
  { id: 5, image_url: 'https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-5.png', title: 'Brows on Fleek', category: '' },
  { id: 6, image_url: 'https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-6.png', title: 'Soft Natural Results', category: '' },
  { id: 7, image_url: 'https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-7.png', title: 'Defined Brow Shape', category: '' },
  { id: 8, image_url: 'https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-8.png', title: 'Balanced Brow Enhancement', category: '' },
  { id: 9, image_url: 'https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-9.png', title: 'Elegant Powder Brows', category: '' },
  { id: 10, image_url: 'https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-10.png', title: 'Flawless Brow Finish', category: '' },
  { id: 11, image_url: 'https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-11.png', title: 'Natural Yet Defined', category: '' },
  { id: 12, image_url: 'https://raw.githubusercontent.com/goldenmeows/pmubrowsbyamber/main/public/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-12.png', title: 'Beautiful Brow Transformation', category: '' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <>
      <section id="gallery" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
<h2 style={{ textAlign: 'center', fontFamily: "'Cormorant', serif", fontWeight: 600, fontSize: '50px', fontStyle: 'italic', color: '#C8A067', marginBottom: '18px' }}
              Crafted By Amber
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Browse through Amber's permanent makeup transformations
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 w-full text-left"
                onClick={() => setSelectedImage(item)}
                aria-label={`Open image: ${item.title}`}
              >
                <img
                  src={item.image_url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6">
                    <h3 className="text-white font-semibold text-sm sm:text-base lg:text-xl mb-1">{item.title}</h3>
                    <p className="text-rose-200 text-xs sm:text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button
            type="button"
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close image"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
          <div
            className="max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image_url}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg mx-auto"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-semibold" id="modal-title">{selectedImage.title}</h3>
              <p className="text-rose-300 capitalize mt-1">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}