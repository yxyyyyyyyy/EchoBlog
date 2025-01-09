<template>
    <TopTile :is-seacher="false" :name="childName">
        <!-- <template #custom>
            <yk-button>aaaa</yk-button>
        </template> -->
    </TopTile>
</template>

<script lang="ts" setup>
import TopTile from '../components/TopTitleBar.vue'
const childName = '总览';
</script>

<style lang="less" scoped>

</style>