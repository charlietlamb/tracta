import { SupabaseClient } from "@supabase/supabase-js";
import { Database as DB } from "./types/supabase";

declare global {
  type TODO = any;
  type Database = DB;
  type Supabase = SupabaseClient;
  type User = DB["public"]["Tables"]["users"]["Row"];
}