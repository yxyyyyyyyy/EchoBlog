<template>
    <yk-space dir="vertical" class="main">
        <TopTile name="摄影图库" :isSeacher="true"></TopTile>
        <Subset />
        <gallery/>
    </yk-space>
</template>

<script lang="ts" setup>
import TopTile from '../components/TopTitleBar.vue';
import Subset from '../components/subset/Subset.vue';
import gallery from '../components/gallery/gallery.vue';
</script>

<style lang="less" scoped>
.main {
    width: 100%;
    padding: 0 25px;
}
</style>