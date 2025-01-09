<template>
    <yk-space dir="vertical" size="xl">
        <TopTile :is-seacher="true" :name="childName"></TopTile>
        <Car/>
    </yk-space>
</template>

<script lang="ts" setup>
import TopTile from '../components/TopTitleBar.vue'
import Car from '../components/overview/Card.vue'
const childName = '总览';
</script>

<style lang="less" scoped></style>