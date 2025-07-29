import { createClient } from '@supabase/supabase-js';

// Lovable's native Supabase integration automatically provides the client
export const supabase = createClient(
  'https://placeholder-url.supabase.co',
  'placeholder-anon-key'
);