<template>
  <yk-affix :offset="60" @change="toolbarTop">
    <Toolbar class="toolbar" :class="{ 'istop': top }" :editor="editorRef" :defaultConfig="toolbarConfig"
      :mode="mode" />
  </yk-affix>

  <div class="Editormain">
    <From style="width: 820px;" :classify="0" />
    <Editor style="height: 500px; width:820px;overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
      :mode="mode" @onCreated="handleCreated" />
  </div>

</template>

<script lang="ts" setup>
import From from './Form.vue'
import './index.less'

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})

// 工具栏固定
const top = ref<boolean>(false)
const toolbarTop = (e: boolean) => {
  top.value = e
}
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<style lang="less" scoped>
.toolbar {
  border-radius: @radius-s;
  width: 1200px;
  background-color: @bg-color-l;
}

.istop {
  box-shadow: @shadow-m;
  border: 1px solid @line-color-m;
}

.Editormain {
  padding-top: @space-xl;
  margin-top: @space-s;
  border-radius: @radius-m;
  background: @bg-color-l;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>