<script setup lang="ts">
import { Editor, Node, NodeViewContent, NodeViewWrapper } from '@tiptap/vue-3'
import { computed } from '@vue/reactivity';
import { Node as ProseMirrorNode } from 'prosemirror-model'
import { Decoration } from 'prosemirror-view'


interface Props {
  editor: Editor
  node: ProseMirrorNode
  decorations: Decoration
  selected: boolean
  extension: Node<any, any>
  getPos: () => number
  updateAttributes: (attributes: Record<string, any>) => void
  deleteNode: () => void
}

const props = defineProps<Props>()

const file = computed<Record<string, string>>(() => props.node.attrs.file)

const title = computed<Record<string, string>>(() => props.node.attrs.title)
</script>

<template>
  <node-view-wrapper as="section" class="card bg-neutral w-96 shadow-xl" contenteditable="false">
    <article class="card-body w-full flex flex-row">
      <a class="badge text-2xl" :href="file.src">{{ title }}</a>
    </article>
    
    <NodeViewContent class="hidden" />
  </node-view-wrapper>
</template>

<style lang="scss">
</style>
