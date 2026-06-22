import { createClient } from '@supabase/supabase-js';

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabaseKEY = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('URL:', supabaseURL); // debug temporário
console.log('Key existe?', !!supabaseKEY );

const supabase = createClient(supabaseURL, supabaseKEY)

export default supabase;