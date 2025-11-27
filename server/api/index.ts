import { serverSupabaseServiceRole } from "#supabase/server";

export default defineEventHandler(async (event) => {
	const supa = serverSupabaseServiceRole(event);

	return {
		ok: true,
	};
});
