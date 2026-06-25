module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F766E',
        secondary: '#16A34A',
        dark: '#0F172A',
        light: '#F8FAFC',
        accent: '#84CC16'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-in',
        'slideUp': 'slideUp 0.6s ease-out',
        'slideDown': 'slideDown 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
