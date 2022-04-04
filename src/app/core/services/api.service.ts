import { Injectable } from '@angular/core';
import { createClient } from "@supabase/supabase-js";
import SupabaseClient from "@supabase/supabase-js/dist/module/SupabaseClient";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  client: SupabaseClient | null = null;

  constructor() {
    this.client = createClient(environment.superbaseUrl, environment.superbaseKey)
  }
}
