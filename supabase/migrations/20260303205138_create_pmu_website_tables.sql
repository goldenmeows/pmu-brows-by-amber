/*
  # Permanent Makeup Artist Website Database Schema

  1. New Tables
    - `gallery_items`
      - `id` (uuid, primary key)
      - `image_url` (text) - URL to the gallery image
      - `title` (text) - Title/caption for the image
      - `category` (text) - Type of work (e.g., 'eyebrows', 'lips', 'eyeliner')
      - `display_order` (integer) - Order to display images
      - `created_at` (timestamp)
    
    - `testimonials`
      - `id` (uuid, primary key)
      - `client_name` (text) - Name of the client
      - `rating` (integer) - Rating out of 5
      - `comment` (text) - Testimonial text
      - `service` (text) - Service they received
      - `created_at` (timestamp)
      - `is_featured` (boolean) - Whether to feature on homepage
    
    - `bookings`
      - `id` (uuid, primary key)
      - `client_name` (text) - Name of the person booking
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone
      - `service` (text) - Requested service
      - `preferred_date` (date) - Preferred appointment date
      - `message` (text) - Additional message/notes
      - `status` (text) - Booking status (pending, confirmed, cancelled)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Public read access for gallery_items and testimonials
    - Insert access for bookings (anyone can submit a booking)
    - Admin policies can be added later for management
*/

-- Gallery Items Table
CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  title text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view gallery items"
  ON gallery_items FOR SELECT
  TO anon, authenticated
  USING (true);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  service text NOT NULL,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

-- Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  preferred_date date NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Insert sample gallery items
INSERT INTO gallery_items (image_url, title, category, display_order) VALUES
  ('https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800', 'Natural Microblading', 'eyebrows', 1),
  ('https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=800', 'Perfect Lip Blush', 'lips', 2),
  ('https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=800', 'Powder Brows', 'eyebrows', 3),
  ('https://images.pexels.com/photos/3997920/pexels-photo-3997920.jpeg?auto=compress&cs=tinysrgb&w=800', 'Eyeliner Enhancement', 'eyeliner', 4),
  ('https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg?auto=compress&cs=tinysrgb&w=800', 'Ombre Brows', 'eyebrows', 5),
  ('https://images.pexels.com/photos/3997398/pexels-photo-3997398.jpeg?auto=compress&cs=tinysrgb&w=800', 'Lip Liner Perfection', 'lips', 6);

-- Insert sample testimonials
INSERT INTO testimonials (client_name, rating, comment, service, is_featured) VALUES
  ('Sarah Mitchell', 5, 'Absolutely amazing work! My eyebrows look so natural and perfect. I wake up feeling beautiful every day.', 'Microblading', true),
  ('Jessica Chen', 5, 'Best decision ever! The lip blush is stunning and the process was so comfortable. Highly recommend!', 'Lip Blush', true),
  ('Amanda Rodriguez', 5, 'Professional, clean, and talented. My powder brows are exactly what I wanted. Thank you!', 'Powder Brows', true),
  ('Emily Thompson', 5, 'The eyeliner has changed my life! No more morning makeup routine. Simply perfect.', 'Eyeliner', false),
  ('Maria Garcia', 5, 'Outstanding results! Very skilled artist who really cares about the details.', 'Microblading', false);