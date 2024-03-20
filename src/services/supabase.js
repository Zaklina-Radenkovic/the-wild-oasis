import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ygzdfmdqrttszxvtnyxj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnemRmbWRxcnR0c3p4dnRueXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0Mzk3MjIsImV4cCI6MjAyNjAxNTcyMn0.bBoYbG2BdWkDFchGCchpi8eIFxP3PMGq43a7SY-fypA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
