/** @type {import('tailwindcss').Config} */

const primary = '#8B97AE'

module.exports = {
	content: [],
	theme: {
		extend: {
			colors: {
				primary,
				dark: {
					100: '#212C42',
					200: '#192233',
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
		},
	},
	plugins: [],
}
