const plugin = require('tailwindcss/plugin')

const primary = '#8B97AE'

module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary,
				dark: {
					50: '#707D96',
					100: '#212C42',
					200: '#192233',
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
			spacing: {
				layout: '2rem',
				'2layout': '4rem',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: theme('colors.gray.500'),
					color: '#fff',
					borderRadius: '0.65rem',
					padding: '8px 15px',
					transition: 'background-color .3s ease-in-out',
					'&:hover': {
						backgroundColor: theme('colors.gray.600'),
					},
				},
			})
			addUtilities({
				'.text-shadow': {
					textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
				},
				'.outline-border-none': {
					outline: 'none',
					border: 'none',
				},
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				},
				'.flex-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
			})
		}),
	],
}
