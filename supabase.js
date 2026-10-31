const SUPABASE_URL = "https://slixdfnbeikerpcoaoeo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_EXISTING_PUBLISHABLE_KEY";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      storage: window.sessionStorage
    }
  }
);

window.supabaseClient = supabaseClient;