/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
        'graident-three':
        `linear-gradient(315deg, #3658BF, rgba(255,255,255,0) 70.71%),
        linear-gradient(225deg, #ADEBE9, rgba(255,255,255,0) 70.71%), 
        linear-gradient(135deg, #78BCE2, rgba(255,255,255,0) 70.71%),
        linear-gradient(45deg, #ADEBE9, rgba(255,255,255,0) 70.71%)`
      },
      boxShadow: {
        content: '0 0 20px rgba(0, 0, 0, 0.3)',
        insetContent: '0 0 10px rgba(0, 0, 0, 0.4) inset'
      },
      colors: {
      gunmetal: '#11272D',
      indigoDye: '#18324E',
      marianBlue: '#3658BF',
      pictonBlue: '#78BCE2',
      tiffanyBlue: '#ADEBE9'
      },
      fontFamily: {
        Montserrat: "'Montserrat'",
      },
    }
  },
  plugins: [],
}