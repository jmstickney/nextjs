import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://haqirrbygnphhtxjrkbh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcWlycmJ5Z25waGh0eGpya2JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1NTA3NzIsImV4cCI6MTk5MzEyNjc3Mn0.OEpZg2vw9eo60s9OPmQjlL6DM6XEi9gYGvckV-S2Pfc"
);
