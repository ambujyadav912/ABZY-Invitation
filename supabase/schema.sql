-- Supabase Schema for ABZY Invitation

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- INVITATIONS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS public.invitations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL CHECK (status IN ('draft', 'preview', 'published', 'archived')),
    type TEXT NOT NULL,
    creator_name TEXT NOT NULL,
    recipient_name TEXT NOT NULL,
    event_title TEXT NOT NULL,
    event_date TEXT NOT NULL,
    event_time TEXT NOT NULL,
    venue TEXT NOT NULL,
    address TEXT NOT NULL,
    contact TEXT NOT NULL,
    message TEXT NOT NULL,
    photo_url TEXT,
    template TEXT NOT NULL,
    created_at BIGINT NOT NULL
);

-- Index for fast lookup by slug (very common for public invitation view)
CREATE INDEX IF NOT EXISTS idx_invitations_slug ON public.invitations(slug);

-- Enable Row Level Security
ALTER TABLE public.invitations ENABLE ROW LEVEL SECURITY;

-- Since we use service-role key on the server, we can block all public access directly to the DB.
-- All queries will bypass RLS because they use the SUPABASE_SERVICE_ROLE_KEY securely.
CREATE POLICY "Block public access to invitations" ON public.invitations FOR ALL USING (false);


-- ==========================================
-- REQUESTS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS public.requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    invitation_type TEXT NOT NULL,
    event_date TEXT NOT NULL,
    venue TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('New', 'Contacted', 'In Progress', 'Completed')),
    created_at BIGINT NOT NULL
);

ALTER TABLE public.requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Block public access to requests" ON public.requests FOR ALL USING (false);


-- ==========================================
-- SETTINGS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS public.settings (
    id TEXT PRIMARY KEY, -- We use 'general' as the ID
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    instagram TEXT NOT NULL
);

ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Block public access to settings" ON public.settings FOR ALL USING (false);

-- Insert default settings row if it doesn't exist
INSERT INTO public.settings (id, email, phone, instagram) 
VALUES ('general', 'ahirambuj4@gmail.com', '8652460120', '@abzy_cartoon_2026')
ON CONFLICT (id) DO NOTHING;
