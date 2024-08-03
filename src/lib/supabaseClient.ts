import { createClient } from '@supabase/supabase-js';
import { URL, API_KEY } from '$env/static/private';
export const supabase = createClient(URL, API_KEY);
