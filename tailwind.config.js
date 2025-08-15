/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          light: '#60A5FA',
        },
        secondary: {
          DEFAULT: '#F9FAFB',
          dark: '#1F2937',
        },
        accent: {
          DEFAULT: '#60A5FA',
          dark: '#3B82F6',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#60A5FA',
              '&:hover': {
                color: '#3B82F6',
              },
            },
            h1: {
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
              color: 'inherit',
            },
            h2: {
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
              color: 'inherit',
            },
            h3: {
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
              color: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};