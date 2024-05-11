import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zytobkwawsejyyyxpifu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5dG9ia3dhd3Nlanl5eXhwaWZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1MTM3NzEsImV4cCI6MjAzMDA4OTc3MX0.LgW1gmQ9j5AJ3kfOpNs-SStaaMY2uF6_2zliISAqngU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
