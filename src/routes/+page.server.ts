import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('cities').select('*, docs(*)');

	return {
		cities: data ?? []
	};
}
