<template>
    <yk-space dir="vertical" class="main" szie="l">
        <TopTile name="博客文章" :isSeacher="true"></TopTile>
        <yk-space style="width: 100%;" size="l">
            <Gallery />
            <GalleryEditor style="flex:none;width:600px"/>
        </yk-space>
    </yk-space>
</template>

<script lang="ts" setup>
import TopTile from '../components/TopTitleBar.vue';
import Gallery from '../components/diary/Diary.vue';
import GalleryEditor from '../components/diary/diaryEditor.vue';
</script>

<style lang="less" scoped>
.main {
    width: 100%;
    padding: 0 25px;
}
</style>