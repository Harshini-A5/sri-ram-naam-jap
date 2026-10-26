
const SUPABASE_URL = "https://slixdfnbeikerpcoaoeo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_9_mbseo6FTUWPG8rpPLHSA_9nm2PGTm";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
window.supabaseClient = supabaseClient;