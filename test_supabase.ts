import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing from process.env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function main() {
  console.log('Listing assets/LW_Uploads...');
  
  const { data, error } = await supabase.storage.from('Src').list('assets/LW_Uploads', {
    limit: 100,
  });
  
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('=== Under "assets/LW_Uploads" ===');
    data?.forEach(file => {
      console.log(` - ${file.name}`);
    });
  }
}

main().catch(console.error);
