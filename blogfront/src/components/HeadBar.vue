<template>
    <!-- HeadBar组件开发 -->
    <div class="headbar">
        <yk-space align="center" :size="12" style="cursor: pointer" @click=backHome()>
            <img src="../assets/vite.svg" class="logo" width="30px" height="30px">
            <span class="name">祝余Yu博客后台</span>
        </yk-space>

        <yk-space align="center" size="xl">
            <yk-badge is-dot>
                <IconEmailFill style="font-size: 20px;" @click="active = true" />
            </yk-badge>

            <yk-avatar img-url="https://pic1.imgdb.cn/item/677f4a43d0e0a243d4f274b7.png"></yk-avatar>

            <div><yk-theme /></div>
            <yk-button>退出</yk-button>
        </yk-space>
    </div>
    <!-- 抽屉 -->
    <yk-drawer placement="right" :show="active" @close="active = false">
        <template #header>
            <h3>
                <IconBulbOutline />
                私信
            </h3>
        </template>
        <PrivateMessage v-for="item in comments" :key="item.is" :content="item" :is-comment="false" />
        <template #footer>
            <yk-pagination :total="count" simple @change="changePage"></yk-pagination>
        </template>
    </yk-drawer>

</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
const router = useRouter();
const active = ref(false)
// 返回总览
const backHome = () => {
    router.push('/');
};

// 私信
import PrivateMessage from './langue/PrivateMeaasge.vue';
import type { CommentsItemProps } from './langue/index';
import { comment } from '../utils/mock'
const comments = ref()
const count = ref<number>(123)
//内容
const props = withDefaults(defineProps<CommentsItemProps>(), {
    pageSize: 8
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

const changePage = (e: number) => {
    request.nowPage = e;
    getCommentDate()
}
onMounted(() => {
    getCommentDate()
})
</script>

<style lang="less" scoped>
.headbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    background: @bg-color-l;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 @space-xl;

    .name {
        font-size: 20px;
        font-weight: 600;
    }
}
</style>