<template>
    <yk-space dir="vertical" size="xl" class="main">
        <TopTile :is-seacher="false" :name="childName">
            <template #custom>
                <yk-space align="center">
                    <yk-text type="third">图片、视频、音频大小不超过20M</yk-text>
                    <yk-button>上传</yk-button>
                </yk-space>
            </template>
        </TopTile>
        <Subset />
        <files :page-size="pageSize"/>
    </yk-space>
</template>

<script lang="ts" setup>
import TopTile from '../components/TopTitleBar.vue'
import Subset from '../components/subset/Subset.vue';
const childName = '本地文件';
import files from '../components/files/files.vue';
import { ref } from 'vue';
const pageSize = ref<number>(10);
</script>

<style lang="less" scoped>
.main {
    width: 100%;
    padding: 0 25px;
}
</style>