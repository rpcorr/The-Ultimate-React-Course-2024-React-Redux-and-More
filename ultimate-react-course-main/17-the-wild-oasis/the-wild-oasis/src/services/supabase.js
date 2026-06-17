import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://gonemrwsjaehshcexylf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvbmVtcndzamFlaHNoY2V4eWxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNzYzNTcsImV4cCI6MjA5Njc1MjM1N30.CfW1tAiURyA_xnVjhE-z90BbpHlHtpuBJSHONoW0WbY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
