/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		extend: {
			borderRadius: {
				lg: "0.6rem",
				xl: "0.8rem"
			},
			boxShadow: {
				sm: "0 1px 2px 0 rgba(0,0,0,0.25)"
			}
		}
	},
	plugins: []
};


