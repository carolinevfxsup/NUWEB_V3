import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function main() {
  console.log('Querying Supabase database...');
  
  // Try common table names
  const tables = ['showcases', 'projects', 'assets', 'media', 'files', 'portfolio'];
  
  for (const table of tables) {
    try {
      const { data, error } = await supabase.from(table).select('*').limit(5);
      if (error) {
        console.log(` - Table '${table}': error or not found (${error.message})`);
      } else {
        console.log(`\n=== Table '${table}' ===`);
        console.log(JSON.stringify(data, null, 2));
      }
    } catch (err: any) {
      console.log(` - Table '${table}': threw exception (${err.message})`);
    }
  }
}

main().catch(console.error);
