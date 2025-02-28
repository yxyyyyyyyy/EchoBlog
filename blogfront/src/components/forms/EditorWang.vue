<template>
  <yk-affix :offset="60" @change="toolbarTop">
    <Toolbar class="toolbar" :class="{ 'istop': top }" :editor="editorRef"
      :mode="mode" />
  </yk-affix>

  <div class="Editormain">
    
    <slot></slot>
    <Editor style="min-height: 500px; width:820px;overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
      :mode="mode" @onCreated="handleCreated" @onChange="onChange"/>
  </div>

</template>

<script lang="ts" setup>
import type { IEditorConfig } from '@wangeditor/editor'
import './index.less'
// @ts-ignore
import { colors } from './color'
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
// @ts-ignore
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
// 定义 mode 变量，并初始化为默认模式
const mode = ref('default') // 或者 'simple'，根据需求选择
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
const emit=defineEmits(['formHtml'])
const onChange = () => {
  emit('formHtml',valueHtml.value)
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