export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		'@nuxt/ui',
		'@nuxt/image',
		'@samk-dev/nuxt-vcalendar',
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Lato: {
						wght: [300, 400, 700],
						ital: [300]
					}
				}
			}
		],
		'nuxt-icon',
		'@pinia/nuxt',
		[
			'@vee-validate/nuxt',
			{
				autoImports: true
			}
		]
	],
	pinia: {
		storesDirs: ['./store/**']
	}
})
