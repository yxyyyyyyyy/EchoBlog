<template>
    <yk-space dir="vertical" size="xl" style="width: 100%;">
        <ArticleItem v-for="item in articleList" :key="item.id" :data="item"></ArticleItem>
    </yk-space>
</template>

<script lang="ts" setup>
import ArticleItem from './AericleItem.vue';
import { mkarticle } from '../../utils/mock';
import type { AericleDate } from '../../utils/interface'
import { onMounted, ref } from 'vue';
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

onMounted(() => {
    getDate(true)
})

</script>

<style lang="less" scoped></style>