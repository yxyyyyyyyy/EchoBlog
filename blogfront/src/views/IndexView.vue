<template>
    <div class="index-dev">
        <!--  菜单栏组件开发 -->
        <MenuBar />
        <RouterView />
    </div>
</template>

<script lang="ts" setup>
import MenuBar from '../components/MenuBar.vue'
</script>

<style lang="less" scoped>
.index-dev{
    padding-left: 200px;
}


</style>