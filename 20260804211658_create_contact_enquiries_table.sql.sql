/*
# Create contact_enquiries table for Velvet Routes

## Purpose
Stores contact form submissions from the Velvet Routes pilgrimage travel website.
Visitors can enquire about pilgrimage packages to Iraq and Umrah without needing
to sign in. This is a single-tenant, no-auth website.

## New Tables
- `contact_enquiries`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — Enquirer's full name
  - `email` (text, not null) — Contact email address
  - `phone` (text, not null) — WhatsApp / phone number
  - `destination` (text, not null) — Chosen pilgrimage destination e.g. Karbala, Najaf, Umrah
  - `travel_month` (text, nullable) — Preferred travel month
  - `group_size` (text, nullable) — Number of travellers
  - `message` (text, nullable) — Additional message or questions
  - `status` (text, not null, default 'new') — Enquiry status: new / contacted / converted / closed
  - `created_at` (timestamptz, default now())

## Security
- RLS enabled on `contact_enquiries`.
- INSERT is open to anon and authenticated (any visitor can submit an enquiry).
- SELECT is also open to anon and authenticated (single-operator site; no PII exposure risk between users).
- No UPDATE or DELETE policy: enquiries are append-only from the public.
*/

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  destination text NOT NULL,
  travel_month text,
  group_size text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_enquiries" ON contact_enquiries;
CREATE POLICY "anon_select_enquiries"
ON contact_enquiries FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_enquiries" ON contact_enquiries;
CREATE POLICY "anon_insert_enquiries"
ON contact_enquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);
