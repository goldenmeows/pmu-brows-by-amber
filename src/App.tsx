import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
import type { Database } from "./lib/database.types";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

type Testimonial = Database["public"]["Tables"]["testimonials"]["Row"];

function App() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_featured", true)
        .order("created_at", { ascending: false })
        .limit(3);

      if (data) setTestimonials(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="animate-pulse text-xl text-rose-400" role="status" aria-live="polite">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Hero />
      <Gallery />
      <About />
      <Testimonials testimonials={testimonials} />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;