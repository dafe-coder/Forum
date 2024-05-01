/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
	future: {},
	theme: {
		screens: {
			...defaultTheme.screens,
			xs: '480px', // phones
		},
		container: {
			center: true,
			padding: '20px',
			screens: {
				xl: '1114px', // container width
			},
		},
		extend: {
			spacing: {
				13: '3.125rem', // 50px
				17: '4.375rem', // 70px
				25: '6.25rem', // 100px
				37: '9.375rem', // 150px
			},
		},
		colors: {
			white: colors.white,
			black: colors.black,
			brown: {
				200: '#9F6F6D',
				500: '#3D3D46',
			},
			gray: {
				...colors.gray,
				300: '#EAEEF5',
				400: '#EDEDED',
				500: '#BDBDBD',
			},
			red: {
				200: '#FEF1F1',
				600: '#F56A65',
			},
			yellow: {
				200: '#FEF8EA',
				600: '#FFBE00',
				700: '#EC9E49',
			},
			violet: {
				200: '#F0F0FB',
				600: '#595BE4',
			},
			blue: {
				200: '#EBF9FF',
				600: '#00BBFF',
				800: '#273E54',
			},
		},
	},
	fontFamily: {
		poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
	},
	content: ['./**/*.{html,js}'],
	variants: {},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		plugin(function ({ addComponents, addBase, theme }) {
			addComponents({
				'.btn-primary': {
					minWidth: theme('spacing[25]'),
					backgroundColor: theme('colors.gray[400]'),
					color: theme('colors.brown[500]'),
					padding: `${theme('spacing[2.5]')} ${theme('spacing[10]')}`,
					fontWeight: 500,
					borderRadius: theme('spacing[2.5]'),
				},
				'.circle-sm': {
					display: 'block',
					width: theme('spacing[4]'),
					height: theme('spacing[4]'),
					borderRadius: '9999px',
					backgroundColor: theme('colors.red[600]'),
				},
				'.circle-xs': {
					display: 'block',
					width: theme('spacing[3]'),
					height: theme('spacing[3]'),
					borderRadius: '9999px',
					backgroundColor: theme('colors.red[600]'),
				},
				'.badge-sm': {
					display: 'flex',
					alignItems: 'center',
					gap: '0.3125rem',
					padding: '0.3125rem 0.75rem 0.3125rem 0.375rem',
					backgroundColor: theme('colors.red[200]'),
					fontSize: theme('spacing[2.5]'),
					fontWeight: 500,
					lineHeight: theme('spacing[3.5]'),
					borderRadius: '100px',
				},
				'.replies-avatars': {
					display: 'flex',
					paddingRight: '0.3125rem',
					'> li': {
						position: 'relative',
						marginRight: '-0.3125rem',
						'@media not all and (min-width: 768px)': {
							display: 'none',
							'&:first-child': {
								display: 'block',
							},
						},
						'&:nth-child(1)': {
							zIndex: 5,
						},
						'&:nth-child(2)': {
							zIndex: 4,
						},
						'&:nth-child(3)': {
							zIndex: 3,
						},
						'&:nth-child(4)': {
							zIndex: 2,
						},
						'&:nth-child(5)': {
							zIndex: 1,
						},
					},
					'> li > a': {
						display: 'block',
						width: theme('spacing[7]'),
						height: theme('spacing[7]'),
						borderRadius: '9999px',
						overflow: 'hidden',
						transition: 'all ease .3s',
						'&:hover': {
							transform: 'scale(1.15)',
						},
						'> img': {
							objectFit: 'cover',
							height: '100%',
							width: '100%',
						},
					},
				},
			})
			addBase({
				h1: {
					fontSize: '5.625rem',
					lineHeight: '5.0625rem',
					letterSpacing: '5%',
					fontWeight: '700',
				},
			})
		}),
	],
}
