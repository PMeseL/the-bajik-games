export default {

	content: [
		"./components/**/*.{js,vue,ts}",
		"*/components/**/*.{js,vue,ts}",
		"./composables/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
		"./src/**/*.vue"
	],

	theme: {

		extend: {

			colors: {

				neutral: {

					100: '#7a7a7a',
					90: '#696969',
					80: '#6a6b70',
					70: '#5b5c62',
					60: '#4b4c52',
					50: '#393a41',
					40: '#2f3037',
					30: '#26262c',
					20: '#1c1c21',
					10: '#131316',
				},

				primary: {

					100: '#00406c',
					90: '#003a61',
					80: '#003356',
					70: '#002e4e',
					60: '#002945',
					50: '#00253e',
					40: '#001824',
					30: '#00141f',
					20: '#00111a',
					10: '#000e14',
				},

				cta: {

					100: '#b7efc5',
					90: '#92e6a7',
					80: '#6ede8a',
					70: '#4ad66d',
					60: '#2dc653',
					50: '#25a244',
					40: '#208b3a',
					30: '#1a7431',
					20: '#155d27',
					10: '#10451d',
				},

				cta2: {

					100: '#e01e37',
					90: '#da1e37',
					80: '#c71f37',
					70: '#bd1f36',
					60: '#b21e35',
					50: '#a71e34',
					40: '#a11d33',
					30: '#85182a',
					20: '#6e1423',
					10: '#641220',
				},

				warning: {

					100: '#fff200',
					90: '#ffe600',
					80: '#ffd900',
					70: '#ffcc00',
					60: '#ffbf00',
					50: '#ffb300',
					40: '#ffa600',
					30: '#ff9900',
					20: '#ff8c00',
					10: '#ff8000',
				}
			},

			fontSize: {
				'2xs': '10px',
				'3xs': '8px',
			},

			boxShadow: {
				material: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
				weak_material: '0px 1px 2px rgba(0, 0, 0, 0.15), 0px 2px 6px 2px rgba(0, 0, 0, 0.05)',
				primary: '2px 2px 5px rgba(208, 9, 141, 0.4)',
				secondary: '2px 2px 5px rgba(33, 158, 188, 0.4)',
				white: '2px 2px 5px rgba(255, 255, 255, 0.4)',
			},
		
			keyframes: {
	
				'swipe-up': {
					from: { transform: 'translateY(50px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' },
				},
		
				dropdown: {
					from: { transform: 'translateY(-30px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' },
				},
		
				shine: {
					to: { 'background-position-x': '-200%;' },
				},
		
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
		
				buzz: {
					'0%': { transform: 'translateX(0)' },
					'20%': { transform: 'translateX(5px)' },
					'40%': { transform: 'translateX(-5px)' },
					'60%': { transform: 'translateX(5px)' },
					'80%': { transform: 'translateX(-5px)' },
					'100%': { transform: 'translateX(0)' }
				},

				emphasize: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.3)' },
					'100%': { transform: 'scale(1)' }
				}
			},
		
			animation: {

				skeleton: 'skeleton 1s infinite',
				shine: 'shine linear infinite',
				fade: 'fade 0.3s',
				dropdown: 'dropdown 0.3s',
				buzz: 'buzz 0.3s',
				emphasize: 'emphasize 0.3s'
			},
		},
	},

	plugins: [],
}

