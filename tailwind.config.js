module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      maxWidth: {
        'w-screen': '100vw',
        'h-screen': '100vh'
      },
      borderRadius: {
        '4xl': '32px'
      },
      fontFamily: {
        'sans': ["NutmegHeadline-Regular","ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
        'header': ["NutmegHeadline-Black"]
      },
      keyframes: {
        scroll: {
          '0%, 100%': {backgroundPosition: '0% 50%'},
          '50%': {backgroundPosition: '100% 50%'}
        }
      },
      animation: {
        'scroll': 'scroll 4s ease infinite',
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
