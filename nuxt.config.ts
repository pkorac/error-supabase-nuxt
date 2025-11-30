// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxtjs/supabase"],

	// Nitro options
	nitro: {
		externals: {
			inline: ["@supabase/supabase-js"], // this fixes the issue
		},
	},
});
