import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vcisxehbamcajpssaqyp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjaXN4ZWhiYW1jYWpwc3NhcXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0NDA1MDgsImV4cCI6MjAxNTAxNjUwOH0.WfzZLFnUF24GJ-BHVFhkWku06TLKkOIFrkuOh3lF7ic";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
