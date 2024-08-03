import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('docs').select();
	return {
		docs: data ?? []
	};
}
