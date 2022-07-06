import { useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

import { File } from './extensions'

export const gimmeEditor = () => useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p><file data-file="{&quot;src&quot;:&quot;https://source.unsplash.com/8xznAGy4HcY/800x400&quot;}" data-title="File 7e+1"></file>',
  extensions: [
    StarterKit,
    File,
  ],
  onUpdate: ({ editor }) => console.log(editor.getHTML())
})
