<template>
  <yk-affix :offset="60" @change="toolbarTop">
    <Toolbar class="toolbar" :class="{ 'istop': top }" :editor="editorRef" :defaultConfig="toolbarConfig"
      :mode="mode" />
  </yk-affix>

  <div class="Editormain">
    <From style="width: 820px;" :classify="0" />
    <Editor style="min-height: 500px; width:820px;overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
      :mode="mode" @onCreated="handleCreated" @onChange="onChange"/>
  </div>

</template>

<script lang="ts" setup>
import type { IEditorConfig } from '@wangeditor/editor'
import From from './Form.vue'
import './index.less'
import { colors } from './color'

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

// 初始化 MENU_CONF 属性
const editorConfig: Partial<IEditorConfig> = {
  MENU_CONF: {
    color: {
      colors: colors
    },
    bgColor: {
      colors: colors
    },
    uploadImage: {
      server: 'http://localhost:3000/api/upload',
      // async customInsert(res: any, insertFn: InsertFnType) {
      //   const from = new FormData()
      //   from.append('file', res.file)
      //   from.append('id', "Echo")
      //   uploadApi(from).then(() => {
      //     insertFn(url, alt, href)
      //   })
      // },
    }
  },
}
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
// 内容 HTML
const valueHtml = ref('<p>hello</p>')

const onChange = () => {
  
}
onMounted(() => {
})

// 工具栏固定
const top = ref<boolean>(false)
const toolbarTop = (e: boolean) => {
  top.value = e
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor
  editor.getAllMenuKeys()
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