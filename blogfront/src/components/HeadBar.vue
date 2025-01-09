<template>
    <!-- HeadBar组件开发 -->
    <div class="headbar">
        <yk-space align="center" :size="12" style="cursor: pointer" @click=backHome()>
            <img src="../assets/vite.svg" class="logo" width="30px" height="30px">
            <span class="name">EchoYu博客后台</span>
        </yk-space>

        <yk-space  align="center" size="xl">
            <yk-badge is-dot>
                <IconEmailFill style="font-size: 20px;"/>
            </yk-badge>

            <yk-avatar img-url="https://pic1.imgdb.cn/item/677f4a43d0e0a243d4f274b7.png"></yk-avatar>

            <div><yk-theme /></div>
            <yk-button>退出</yk-button>
        </yk-space>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();

// 返回总览
const backHome = () => {
    router.push('/');
};
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