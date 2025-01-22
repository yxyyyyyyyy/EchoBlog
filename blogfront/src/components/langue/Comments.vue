<template>
    <div class="data-card">
        <div class="data-card-title">
            <p class="name">评论{{ count }}</p>
        </div>
        <yk-scrollbar ref="scrollbarRef" height="450px" style="padding: 0 24px">
            <yk-space dir="vertical">
                <CommentItem v-for="item in comments" :key="item.is" :content="item" :is-comment="true"
                    @delete="deleteComments" />
            </yk-space>
        </yk-scrollbar>

        <div class="pageHelp">
            <yk-pagination :total="count" size="s" @change="changePage"></yk-pagination>
        </div>
    </div>
</template>

<script lang="ts" setup>
import CommentItem from './CommentItem.vue';
import { comment } from '../../utils/mock'
import { onMounted, ref } from 'vue'
import type { CommentsItemProps } from '../langue/index';
import { ElMessage } from 'element-plus';
// 总数
const count = ref<number>(123)
const comments = ref()
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
const getCommentDate = () => {
    let data = comment.data
    count.value = data.count;
    comments.value = data.list.slice(
        (request.nowPage - 1) * request.pageSzie,
        request.nowPage * request.pageSzie
    )
}
// 删除
const deleteComments = (e: number) => {
    comments.value = comments.value.filter((obj: any) => {
        return obj.id != e
    })
    ElMessage.success('删除成功');
}

// 翻页
const changePage = (e: number) => {
    request.nowPage = e;
    getCommentDate()
}
onMounted(() => {
    getCommentDate()
})
</script>

<style lang="less" scoped>
.data-card {
    padding: @space-xl;
    border-radius: @radius-m;
    background: @bg-color-l;
    width: 100%;
    left: 20px;

    .data-card-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: @space-l;

        .name {
            font-size: 18px;
            font-weight: 600;
            color: @font-color-l;
        }
    }

    .pageHelp {
        padding: @space-l @space-xl;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-top: 1px solid @line-color-s;
    }
}
</style>