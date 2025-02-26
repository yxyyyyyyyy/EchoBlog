<template>
    <div class="dairy">
        <yk-space dir="vertical" size="xl" style="width: 100%;">
            <dairyItem v-for="item in dairyList" :key="item.id" :data="item" @delete="deleteItem">
            </dairyItem>
        </yk-space>
        <div class="pageHelp">
            <yk-pagination :total="count" size="m" @change="changePage"></yk-pagination>
        </div>
    </div>


</template>

<script lang="ts" setup>
import { mkdairy } from '../../utils/mock';
import type { DairyDate } from '../../utils/interface'
import dairyItem from './diaryItem.vue'
import { onMounted, ref } from 'vue';
import { getCurrentInstance } from 'vue'
const proxy: any = getCurrentInstance()?.proxy
const props = defineProps({
    pageSize: {
        type: Number,
        default: 8
    },
    serchTerm: {
        type: String,
        default: ''
    }
})

const request = {
    pageSize: props.pageSize,
    nowPage: 1,
    count: true,
    serchTerm: props.serchTerm
}

// 获取日记
const dairyList = ref<DairyDate[]>([])
// 日记总数
const count = ref<number>(0)
const getDate = () => {
    if (request.nowPage == 1) {
        count.value = mkdairy.data.count;
    }
    let arr = mkdairy.data.list.slice(
        (request.nowPage - 1) * request.pageSize,
        request.nowPage * request.pageSize
    )
    dairyList.value = [...arr]
}

// 删除
const deleteItem = (id: number) => {
    dairyList.value = dairyList.value.filter(item => item.id !== id)
    count.value--
    proxy.$message({ type: 'primary', message: '文章删除完成' })
}


// 翻页
const changePage = (e: number) => {
    request.nowPage = e;
    getDate()
}

onMounted(() => {
    getDate()
})

</script>

<style lang="less" scoped>
.dairy {
    width: 100%;

    .pageHelp {
        padding: @space-s 0 @space-l;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
    }

}
</style>