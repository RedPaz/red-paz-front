import { defineConfig, presetIcons, presetUno, transformerDirectives } from 'unocss';

export default defineConfig({
  shortcuts: {
    // center: 'flex justify-center items-center',
    // between: 'flex justify-between items-center',
    // around: 'flex justify-around items-center',
    // btn: 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    // 'center-col': 'flex flex-col justify-center items-center',
    // 'between-col': 'flex flex-col justify-between items-center',
    // 'start-col': 'flex flex-col items-center',
    // 'sidebar-icon': 'block text-xl mr-4',
    // 'sidebar-item': 'flex items-center py-4 px-8 block hover:bg-hubster-orange-900 dark:hover:bg-hubster-orange-600 transition duration-200 no-underline text-lg text-white bg-transparent border-0 w-full text-left',
    // 'icon-btn': 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none',
  },

  presets: [
    presetUno(),
    // mdiIcons
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      }
    })
  ],

  rules: [

  ],
  transformers: [transformerDirectives()],

  theme: {
    colors: {
      grayUnal: {
        100: '#777777',
        200: '#666666',
        300: '#555555',
        400: '#5b5b5b',
        500: '#484848',
        600: '#383838',
        700: '#3A3B3A',
        800: '#333333',
      },
      greenUnal: '#50992E',
      greenRed: '#4DB372',
    },
    backgroundImage: {
      social: "url('/assets/images/header-unal/redes_sociales.png')"
    },
  },
})
