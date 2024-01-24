// @ts-check
/** @type {import('tailwindcss').Config['theme']} */

const theme = {
  extend: {
    fontFamily: {
      poppins: [
        'Poppins-Black',
        'Poppins-Bold',
        'Poppins-ExtraBold',
        'Poppins-ExtraLight',
        'Poppins-Light',
        'Poppins-Medium',
        'Poppins-Regular',
        'Poppins-Semibold',
        'Poppins-Thin',
      ],
    },
    colors: {
      primary: {
        DEFAULT: '#2563eb',
        foreground: '#F1F5F9',
      },
      secondary: {
        DEFAULT: '#3b82f6',
        foreground: '#0F172A',
      },
      muted: {
        DEFAULT: '#f1f5f9',
        foreground: '#64748B',
      },
      accent: {
        DEFAULT: '#F1F5F9',
        foreground: '#0F172A',
      },
      popover: {
        DEFAULT: '#FFFFFF',
        foreground: '#020817',
      },
    },
  },
}

module.exports = {
  theme,
}
