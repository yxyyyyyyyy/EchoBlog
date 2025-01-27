<template>
    <div class="files">
        <div class="files-tool">
            <yk-space>
                <yk-checkbox :checked="checkedAll" :indeterminate="indeterminate" @change="handleChangeAll">
                    全选
                </yk-checkbox>
                <yk-text>已选择3项内容</yk-text>
                <yk-text type='primary' style='cursor:pointer;'>取消选择</yk-text>
            </yk-space>
            <yk-space algin="center">
                <IconDeleteOutline class="icon" />
                <yk-popconfirm title="选择分组" placement="bottomRight" trigger="click" @cancel="cancel" @confirm="confirm">
                    <template #content>
                        <yk-scrollbar height="148px" ref="scrollbar" class="subset">
                            <div v-for="item in subsetStore.data" class="subset_menu" @click="changeSubset(item.id)"
                                :class="{ 'subset_menu_active': subsetSelect == item.id }"
                                @changeSubsetId="changeSubsetIdfile"
                                @deleteId="deletefile"
                                @selected="selectedfile">
                                {{ item.name }} {{ item.value }}
                            </div>
                        </yk-scrollbar>
                    </template>
                    <IconSwitchOutline class="icon switch" />
                </yk-popconfirm>
            </yk-space>
        </div>

        <div class="file-item">
            <fileItem v-for="item in files" :key="item.id" :data="item" />
        </div>

        <div class="pageHelp">
            <yk-pagination :total="count" size="s" @change="changePage"></yk-pagination>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
const indeterminate = ref(false)
const checkedAll = ref(false)
import type { CommentsItemProps } from '../../utils/interface';
import fileItem from './fileItem.vue';
import { getCurrentInstance } from 'vue'
const proxy: any = getCurrentInstance()?.proxy
import { fileData } from '../../utils/mock'
import { useCounterStore } from '../../store/subset'
const subsetStore = useCounterStore();
const handleChangeAll = (value: boolean) => {
    indeterminate.value = false
    if (value) {
        checkedAll.value = true
    } else {
        checkedAll.value = false
    }
}

// 分类选择
const subsetSelect = ref<number | string>()
// 切换分组
const changeSubset = (e: number | string) => {
    subsetSelect.value = e;
}

// 总数
const count = ref<number>(1)
const files = ref()
//内容
const props = withDefaults(defineProps<CommentsItemProps>(), {
    pageSize: 10
})
// 请求
type Request = {
    token?: string;
    pageSzie: number;
    nowPage: number;
    count?: boolean;
}

const request: Request = {
    pageSzie: props.pageSize,
    nowPage: 1,
    count: false
}
//获取数据
const getFiletDate = (e: boolean) => {
    if (e) {
        count.value = fileData.count;
    }
    files.value = fileData.list.slice(
        (request.nowPage - 1) * request.pageSzie,
        request.nowPage * request.pageSzie
    )
    for (let i = 0; i < files.value.length; i++) {
        files.value[i].selected = false;
    }

}
// 翻页
const changePage = (e: number) => {
    request.nowPage = e;
    getFiletDate(false)
}

//
function cancel() {
    proxy.$message({ type: 'warning', message: '你点击了取消按钮' })
}
function confirm() {
    return new Promise((resolve) => {
        setTimeout(() => {
            proxy.$message({ type: 'primary', message: '你点击了确认按钮' })
            resolve(true)
        }, 2000)
    })
}

const changeSubsetIdfile = () => {
}

const deletefile = (e:number) => {
    console.log();
}

const selectedfile = (e:number) => {
}
onMounted(() => {
    getFiletDate(true)
})
</script>

<style lang="less" scoped>
.files {
    padding: @space-xl;
    border-radius: @radius-m;
    background: @bg-color-l;
    width: 100%;

    .file-item {
        padding: 24px 0 32px;
        display: grid;
        grid-template-columns: repeat(auto-fill, 200px);
        row-gap: 32px;
        column-gap: 24px;
        justify-content: center;
    }

    .pageHelp {
        padding: @space-l @space-xl;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .files-tool {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: @space-l;
        border-radius: @radius-m;
        background: @bg-color-m;

        .icon {
            width: 18px;
            height: 18px;
            color: @font-color-s;
            cursor: pointer;

            &:hover {
                color: @font-color-l;
            }
        }
    }
}

.subset {
    width: 240px;

    .subset_menu {
        width: 95%;
        background-color: @bg-color-m;
        line-height: 32px;
        padding: 0 @space-l;
        margin: @space-s 0;
        border-radius: 2px;
        cursor: pointer;
        transition: all @animatb;
        user-select: none;

        &:hover {
            background-color: @bg-color-s;
        }
    }

    .subset_menu_active {
        background-color: @pcolor-1;
        color: @pcolor;
        font-weight: 500;
    }
}
</style>