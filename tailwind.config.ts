import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      center:true
    },
    extend: {
      colors:{
        primary:'#094952',
        secondary:'#ddf1f8',
        footer:'#053338'
      },
      backgroundImage:{
        'banner':"url('/cover.jpg')"
      }
    },
  },
  plugins: [],
}
export default config
