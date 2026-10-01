import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

import { supabaseServer } from './src/lib/supabase/server';

async function check() {
  console.log("Checking Supabase connection...");
  const { data, error } = await supabaseServer.from('invitations').select('count');
  
  if (error) {
    console.error("Connection failed or schema missing:", error.message);
  } else {
    console.log("Connection successful! Tables exist.");
    console.log("Invitations found:", data);
  }
}

check();
