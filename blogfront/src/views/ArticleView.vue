<template>
    <yk-space dir="vertical" class="main">
        <TopTile name="博客文章" :isSeacher="true"></TopTile>
        <Subset />
        <yk-space style="width:100%">
            <Artcile style="width:100%" />
            <labelTable style="width:280px;flex:none" />
        </yk-space>
    </yk-space>
</template>

<script lang="ts" setup>
import labelTable from '../components/label/Label.vue';
import TopTile from '../components/TopTitleBar.vue';
import Subset from '../components/subset/Subset.vue';
import Artcile from '../components/article/Aericle.vue';
</script>

<style lang="less" scoped>
.main {
    width: 100%;
    padding: 0 25px;
}
</style>