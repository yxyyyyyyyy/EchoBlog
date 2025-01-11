<template>
    <yk-space dir="vertical" size="xl">
        <TopTile :is-seacher="true" :name="childName"></TopTile>
        <Car/>
        <yk-space style="width: 100%;">
            <Echarts/>
            <div style="background-color: aquamarine;height:30px; left:30px">评论</div>
        </yk-space>
    </yk-space>
</template>

<script lang="ts" setup>
import TopTile from '../components/TopTitleBar.vue'
import Car from '../components/overview/Card.vue'
import Echarts from '../components/overview/DatasEcharts.vue'
const childName = '总览';
</script>

<style lang="less" scoped></style>