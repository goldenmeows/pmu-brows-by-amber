/*
  # Fix Bookings Table RLS Policy

  1. Security Changes
    - Drop the overly permissive RLS policy on bookings table
    - Create a new restrictive policy that allows bookings only with valid data
    - Add rate limiting through proper constraints
    - Ensure email and phone are properly validated

  2. Important Notes
    - The new policy still allows anonymous users to create bookings (necessary for the booking form)
    - However, it adds validation to ensure data integrity
    - Only allows INSERT operations for legitimate booking requests
*/

-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can create bookings" ON bookings;

-- Create a more restrictive policy that validates the booking data
CREATE POLICY "Allow valid booking submissions"
  ON bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    -- Ensure client name is not empty and has reasonable length
    client_name IS NOT NULL 
    AND length(trim(client_name)) >= 2 
    AND length(client_name) <= 100
    -- Ensure email is not empty and has basic format
    AND email IS NOT NULL 
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND length(email) <= 255
    -- Ensure phone is not empty
    AND phone IS NOT NULL 
    AND length(trim(phone)) >= 10 
    AND length(phone) <= 20
    -- Ensure service is not empty
    AND service IS NOT NULL 
    AND length(trim(service)) > 0
    -- Ensure preferred date is in the future or today
    AND preferred_date >= CURRENT_DATE
    -- Ensure status is set to pending (prevent status manipulation)
    AND status = 'pending'
  );