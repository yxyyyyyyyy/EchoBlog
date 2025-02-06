<template>
    <div class="subset">
        <yk-space wrap>
            <div class="subset_menu" :class="{ 'subset_menu_active': selected == -1 }" @click="changeSubset(-1, '')">
                全部{{ subsetStore.count }}
            </div>

            <div class="subset_menu" v-for="item in articleStatus.data" :key="item.id"
                :class="{ 'subset_menu_active': selected == item.id + 'articleStatus' }"
                @click="changeSubset(item.id, 'articleStatus')">
                {{ item.name }}{{ item.value }}
            </div>
            <div class="subset_menu" :class="{ 'subset_menu_active': selected == subsetStore.exclude.id + 'exclude' }"
                @click="changeSubset(subsetStore.exclude.id, 'exclude')">
                {{ subsetStore.exclude.name }}{{ subsetStore.exclude.value }}
            </div>
            <div class="subset_menu" v-for="item in subsetStore.data" :key="item.id"
                :class="{ 'subset_menu_active': selected == item.id + 'subsetStore' }"
                @click="changeSubset(item.id, 'subsetStore')">
                {{ item.name }}{{ item.value }}
            </div>

        </yk-space>

        <yk-space style="flex: none;">
            <yk-popconfirm title="请输入分组名称" @cancel="cancel" :placement="'bottom'" @confirm="confirm">
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
            <subsetTable/>
            <template #footer>
                <yk-button type="primary" @click="visible = false">确定</yk-button>
            </template>
        </yk-modal>
    </div>
</template>

<script lang="ts" setup>
import { group, articleStatus } from '../../utils/mock'
import { useCounterStore } from '../../store/subset'
import { onMounted, ref } from 'vue';
import subsetTable from './subsetTable.vue';
const subsetStore = useCounterStore();
const selected = ref<number | string>(-1)
const visible = ref<boolean>(false)
const emit = defineEmits(['nowSubset'])
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
function confirm() {
    if (newGroupName.value) {
        let obj = {
            id: -2,
            name: newGroupName.value,
            value: 0,
            moment:Date.now().toString()
        }
        subsetStore.data.push(obj)
        proxy.$message({ type: 'primary', message: '新增分组成功' })
    } else {
        proxy.$message({ type: 'error', message: '新增分组失败' })
    }
}
// 获取分组数据
const rawSubset = () => {
    subsetStore.data = group.data.list
    subsetStore.count = group.data.count
}

onMounted(() => {
    rawSubset()
})

// 切换
const changeSubset = (id: number | string, type: string) => {
    if (id + type !== selected.value) {
        selected.value = id + type
        emit("nowSubset", id, type)
    }
}
</script>

<style lang="less" scoped>
.subset {
    width: 100%;
    padding: @space-l @space-l;
    background: @bg-color-l;
    border-radius: @radius-m;
    display: flex;
    justify-content: space-between;

    .yk-text {
        cursor: pointer;
    }

    .subset_menu {
        padding: 0 @space-l;
        background: @bg-color-m;
        border-radius: @radius-r;
        line-height: 28px;
        user-select: none;
        cursor: pointer;
    }

    .subset_menu_active {
        color: @pcolor;
        font-weight: 500;
        background: @pcolor-1;
    }
}
</style>