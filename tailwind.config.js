/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Rubik', 'sans-serif']
			},
			colors: {
				'border-footer': '#F8F8F8',
				'primary-01': '#8BAC3E',
				'primary-02': '#40A2B1',
				'primary-03': '#405EB6',
				'primary-04': '#B23F74',
				'primary-05': '#A4B441',
				'secondary-01': '#F0FEEB',
				'secondary-02': '#E6F3F5',
				'secondary-03': '#EAEEFA',
				'secondary-04': '#F9EEF3',
				'secondary-05': '#F3F7D9',
				'light-01': '#757575',
				'light-gray-02': '#F2F2F2',
				'red-01': '#E7462D',
				dark: '#333333',
				additional: '#F9FFF6'
			},
			boxShadow: {
				'custom-01': '0px 8px 32px 0px rgba(102, 107, 226, 0.35)',
				'custom-02': '0px 11px 39px 0px rgba(0, 0, 0, 0.07)'
			},
			backgroundImage: {
				'food-pattern': "url('@/assets/images/bgImg.jpeg')"
			}
		}
	},
	plugins: []
}
