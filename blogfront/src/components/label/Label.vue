<template>
    <div class="label">
        <div class="label-item">
            <yk-title :level="4" style="margin:0;">标签</yk-title>
            <yk-space style="flex: none;">
                <yk-popconfirm title="请输入分组名称" @cancel="cancel" :placement="'bottom'">
                    <yk-text type="primary">
                        <IconPlusCircleOutline />新建
                    </yk-text>
                    <template #content>
                        <div style="margin: 10px 0 ;">
                            <yk-input show-counter :limit="6" placeholder="请输入..." style="width: 208px"
                                v-model="newGroupName" />
                        </div>
                    </template>
                </yk-popconfirm>
                <yk-text type="primary" @click="showModal">
                    <IconSettingsOutline />管理分组
                </yk-text>
            </yk-space>
            <yk-modal v-model="visible" title="管理分组">
                <labelTable />
                <template #footer>
                    <yk-button type="primary" @click="visible = false">确定</yk-button>
                </template>
            </yk-modal>
        </div>

        <yk-space wrap size="s">
            <yk-tag  v-for="item in labelStore" :key="item.id">
                {{ item.name }}
            </yk-tag>
        </yk-space>
    </div>
</template>

<script lang="ts" setup>
import { labelgroup } from '../../utils/mock'
import { onMounted, ref } from 'vue';
import type { LabelItem } from '../../utils/interface';
const selected = ref<number | string>(-1)
const visible = ref<boolean>(false)
const emit = defineEmits(['nowlabel'])
import { getCurrentInstance } from 'vue'
const proxy: any = getCurrentInstance()?.proxy
const newGroupName = ref('')
const showModal = () => {
    visible.value = true
}
function cancel() {
    newGroupName.value = ''
    proxy.$message({ type: 'warning', message: '你点击了取消按钮' })
}


const labelStore = ref<LabelItem[]>()
const rawlabel = () => {
    labelStore.value = labelgroup.data.list
}

onMounted(() => {
    rawlabel()
})

</script>

<style lang="less" scoped>
.label {
    width: 100%;
    padding: @space-l @space-l;
    background: @bg-color-l;
    border-radius: @radius-m;

    .label-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:@space-l;
    }

    .yk-text {
        cursor: pointer;
    }
}
</style>