import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })

export default defineConfig(({ mode }) => {
  const config: UserConfigExport = {
    plugins: [
      vue(),
    ],
    base: mode === 'production' ? '/tiptap-file-upload-example/' : '/'
  }

  return config
})

