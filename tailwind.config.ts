/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: '#ffffff',
          50: '#fcfcfc',
          100: '#f5f5f5',
          200: '#f0f0f0',
          300: '#d9d9d9',
          400: '#bfbfbf',
          500: '#8c8c8c',
          600: '#595959',
          700: '#454545',
          800: '#262626',
          900: '#1f1f1f',
          950: '#141414',
        },
        blue: {
          50: '#E9EBF8',
          100: '#E3EDF8',
          200: '#C0DCF7',
          300: '#88BFF1',
          400: '#499FE7',
          500: '#1364B3',
          600: '#115193',
          700: '#12467A',
          800: '#153C65',
          900: '#0E2643',
        },
        green: {
          50: '#F0FDFB',
          100: '#CDFAF3',
          200: '#9CF3E7',
          300: '#62E6D9',
          400: '#32CFC6',
          500: '#18C5BD',
          600: '#11908D',
          700: '#127372',
          800: '#154C4C',
          900: '#052C2E',
        },
        orange: {
          50: '#FFF2F0',
          100: '#FFE2DB',
          200: '#FFC8BD',
          300: '#FFAB99',
          400: '#FFB875', // tal cual de la imagen
          500: '#FF7456',
          600: '#FF3A0F',
          700: '#CC2400',
          800: '#8A1800',
          900: '#420C00',
        },
        yellow: {
          50: '#FFF8E5',
          100: '#FFF1CC',
          200: '#FFE399',
          300: '#FFD466',
          400: '#FFC633',
          500: '#FFB800',
          600: '#CC9300',
          700: '#996E00',
          800: '#664A00',
          900: '#332500',
        },
      },
      // Sistema de Espaciado basado en Figma
      spacing: {
        // Tokens de spacing de Figma
        0: '0px', // $spacing-0
        '012': '2px', // $spacing-012
        '025': '4px', // $spacing-025
        '050': '8px', // $spacing-050
        '075': '12px', // $spacing-075
        100: '16px', // $spacing-100
        150: '24px', // $spacing-150
        200: '32px', // $spacing-200
        250: '40px', // $spacing-250
        300: '48px', // $spacing-300
        400: '64px', // $spacing-400
        500: '80px', // $spacing-500

        // Valores en rem para compatibilidad
        '0-rem': '0rem', // $spacing-0
        '012-rem': '0.125rem', // $spacing-012
        '025-rem': '0.25rem', // $spacing-025
        '050-rem': '0.5rem', // $spacing-050
        '075-rem': '0.75rem', // $spacing-075
        '100-rem': '1rem', // $spacing-100
        '150-rem': '1.5rem', // $spacing-150
        '200-rem': '2rem', // $spacing-200
        '250-rem': '2.5rem', // $spacing-250
        '300-rem': '3rem', // $spacing-300
        '400-rem': '4rem', // $spacing-400
        '500-rem': '5rem', // $spacing-500

        // Espaciado personalizado adicional (mantener compatibilidad)
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px',
        20: '80px',
        24: '96px',
        32: '128px',
        40: '160px',
        48: '192px',
        56: '224px',
        64: '256px',
        72: '288px',
        80: '320px',
        96: '384px',
        128: '512px',
        160: '640px',
        192: '768px',
        224: '896px',
        256: '1024px',
        288: '1152px',
        320: '1280px',
        384: '1536px',
        448: '1792px',
        512: '2048px',
      },
      // Sistema de Bordes basado en Figma
      borderWidth: {
        0: '0px', // $border-0
        1: '1px', // $border-1
        2: '2px', // $border-2
      },
      // Sistema de Border Radius basado en Figma
      borderRadius: {
        0: '0px', // $border-radius-0
        8: '8px', // $border-radius-8
        16: '16px', // $border-radius-16
        24: '24px', // $border-radius-24
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '12px',
        full: '9999px',
      },
      // Sistema de Sombras basado en Figma
      boxShadow: {
        0: 'none', // $shadow-0
        soft: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'elevation-1': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'elevation-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevation-3': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elevation-4': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      // Sistema de Z-index basado en Figma
      zIndex: {
        100: '100', // $z-index-100
        300: '300', // $z-index-300
        600: '600', // $z-index-600
        900: '900', // $z-index-900
      },
      // Sistema de Breakpoints basado en Figma Grid
      screens: {
        s: '320px', // Small: 320px - 768px
        m: '769px', // Medium: 769px - 1200px
        l: '1201px', // Large: 1201px - 1679px
        xl: '1680px', // Extra Large: 1680px and more
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        '2xl': '1536px',
      },
      // Tipografía DM Sans
      fontFamily: {
        'dm-sans': ['DM Sans', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      // Tipografía basada en Figma - Estilos H1-H6, P, Small
      fontSize: {
        // H1 Header - S:48px, M:56px, L:64px
        'h1-s': ['48px', { lineHeight: '58px', fontWeight: '500' }],
        'h1-m': ['56px', { lineHeight: '68px', fontWeight: '500' }],
        'h1-l': ['64px', { lineHeight: '78px', fontWeight: '500' }],

        // H2 Header - S:40px, M:46px, L:52px
        'h2-s': ['40px', { lineHeight: '48px', fontWeight: '500' }],
        'h2-m': ['46px', { lineHeight: '52px', fontWeight: '500' }],
        'h2-l': ['52px', { lineHeight: '56px', fontWeight: '500' }],

        // H3 Header - S:32px, M:36px, L:40px
        'h3-s': ['32px', { lineHeight: '40px', fontWeight: '500' }],
        'h3-m': ['36px', { lineHeight: '44px', fontWeight: '500' }],
        'h3-l': ['40px', { lineHeight: '46px', fontWeight: '500' }],

        // H4 Header - S:24px, M:28px, L:32px
        'h4-s': ['24px', { lineHeight: '36px', fontWeight: '500' }],
        'h4-m': ['28px', { lineHeight: '38px', fontWeight: '500' }],
        'h4-l': ['32px', { lineHeight: '46px', fontWeight: '500' }],

        // H5 Header - S:20px, M:24px, L:24px
        'h5-s': ['20px', { lineHeight: '36px', fontWeight: '500' }],
        'h5-m': ['24px', { lineHeight: '36px', fontWeight: '500' }],
        'h5-l': ['24px', { lineHeight: '36px', fontWeight: '500' }],

        // H6 Header - S:18px, M:20px, L:20px
        'h6-s': ['18px', { lineHeight: '32px', fontWeight: '500' }],
        'h6-m': ['20px', { lineHeight: '36px', fontWeight: '500' }],
        'h6-l': ['20px', { lineHeight: '36px', fontWeight: '500' }],

        // P Body - S:18px, M:18px, L:18px
        'p-s': ['18px', { lineHeight: '36px', fontWeight: '500' }],
        'p-m': ['18px', { lineHeight: '36px', fontWeight: '500' }],
        'p-l': ['18px', { lineHeight: '36px', fontWeight: '500' }],

        // Small - S:14px, M:14px, L:14px
        'small-s': ['14px', { lineHeight: '22px', fontWeight: '500' }],
        'small-m': ['14px', { lineHeight: '22px', fontWeight: '500' }],
        'small-l': ['14px', { lineHeight: '22px', fontWeight: '500' }],

        // Tamaños estándar de Tailwind (mantener compatibilidad)
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '48px' }],
        '6xl': ['60px', { lineHeight: '60px' }],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
};
