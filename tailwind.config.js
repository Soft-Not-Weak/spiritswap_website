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
        bounce : 'bounce 1200ms ease infinite',
        'music-bounce' : 'music-bounce 1200ms ease infinite',
      },
      keyframes : {
        'music-bounce' : {
          '0%, 100%' : { 
            transform: 'translateY(-25%) rotate(20deg)',
            "animation-timing-function" : "cubic-bezier(0.8,0,1,1)"
           },
          '50%' : {
            transform: 'translateY(0%) rotate(-10deg)',
            "animation-timing-function" : "cubic-bezier(0,0,0.2,1)"
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
