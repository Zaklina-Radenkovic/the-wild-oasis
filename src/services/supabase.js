import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://acdzrhbhdvytsbfvyvyp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjZHpyaGJoZHZ5dHNiZnZ5dnlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMDAwMDEsImV4cCI6MjA3MTg3NjAwMX0.z3EDIstQ5okEa-0lt0Udr6Lx9xa-CNCrR7jNaZTcEwk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
