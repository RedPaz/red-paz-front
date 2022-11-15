
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// Plugins
import Unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    vue(),

     // https://github.com/antfu/unocss
     Unocss(),

     // https://github.com/antfu/unplugin-auto-import
     AutoImport({
       include: [
         /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
         /\.vue$/, /\.vue\?vue/, // .vue
         /\.md$/, // .md
       ],
 
       imports: [
         'vue',
         'vue-router',
       ],
 
       dirs: [
         './src/common/composables/**',
         './src/common/constants/**',
         './src/common/enums/**',
         './src/common/interfaces/**',
         './src/common/utils/**',
         './src/helpers/**',
         './src/mocks/**',
         './src/store/**',
       ],
 
       dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: [
        'src/common/components',
        'src/common/layouts',
        'src/common/ui',
        'src/views',
      ],

      dts: 'src/components.d.ts',

      extensions: ['vue'],

      deep: true,

      types: [{
        from: 'vue-router',
        names: ['RouterLink', 'RouterView'],
      }],

      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
})
