<template>
    <yk-space dir="vertical" size="xl" style="width: 100%;">
        <ArticleItem v-for="item in articleList" :key="item.id" :data="item" @delete="deleteItem" @state="changeState">
        </ArticleItem>
        <div class="pageHelp">
            <yk-pagination :total="count" size="m" @change="changePage"></yk-pagination>
        </div>
    </yk-space>

</template>

<script lang="ts" setup>
import ArticleItem from './AericleItem.vue';
import { mkarticle } from '../../utils/mock';
import type { AericleDate } from '../../utils/interface'
import { onMounted, ref } from 'vue';
import { getCurrentInstance } from 'vue'
const proxy: any = getCurrentInstance()?.proxy
const props = defineProps({
    pageSize: {
        type: Number,
        default: 8
    },
    subsetId: {
        type: Number,
        default: -1
    },
    state: {
        type: Number,
        default: -1
    },
    serchTerm: {
        type: String,
        default: ''
    }
})

const request = {
    pageSize: props.pageSize,
    nowPage: 1,
    state: props.state,
    subsetId: props.subsetId,
    count: true,
    serchTerm: props.serchTerm
}

// 获取文章
const articleList = ref<AericleDate[]>([])
// 文章总数
const count = ref<number>(0)
const getDate = (e: boolean) => {
    if (e) {
        count.value = mkarticle.data.count;
    }
    let arr = mkarticle.data.list.slice(
        (request.nowPage - 1) * request.pageSize,
        request.nowPage * request.pageSize
    )
    articleList.value = [...arr]
}

// 改变状态
const changeState = (e: any) => {
    articleList.value.filter((item: { id: number; state: number }) => {
        if (item.id == e.id) {
            item.state = e.state
            if (e.state === 1) {
                proxy.$message({ type: 'primary', message: '发布成功' })
            } else {
                proxy.$message({ type: 'primary', message: '撤回一条文章~' })
            }
        }
    })
}
// 删除
const deleteItem = (id: number) => {
    articleList.value = articleList.value.filter(item => item.id !== id)
    count.value--
    proxy.$message({ type: 'primary', message: '文章删除完成' })
}

const changePage = (e: number) => {
    request.nowPage = e;
    getDate(false)
}

onMounted(() => {
    getDate(true)
})

</script>

<style lang="less" scoped>
.pageHelp {
    padding: @space-s 0 @space-l;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
}
</style>