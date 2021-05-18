module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extends:{    
      screens: {
        '1md': '768px',
        'sx': '240px' 
      },
    }
  },
  corePlugins: {
  	 preflight: false,
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
