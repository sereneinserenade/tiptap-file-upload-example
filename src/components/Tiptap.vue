<script setup lang="ts">
import { EditorContent } from '@tiptap/vue-3'
import { gimmeEditor } from './tiptapSetup'

const editor = gimmeEditor()

const addFile = () => editor.value?.commands.setFile({ title: `File ${(Math.random() * 100).toPrecision(1)}`, file: { src: 'https://source.unsplash.com/8xznAGy4HcY/800x400' } })
</script>

<template>
  <section class="flex">
    <button class="btn btn-sm" @click="addFile">
      Add File
    </button>
  </section>
  <editor-content class="prose" :editor="editor" />
</template>

<style lang="scss">
.ProseMirror {
  @apply focus:outline-none
}
</style>
