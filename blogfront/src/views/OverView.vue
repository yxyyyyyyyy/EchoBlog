<template>
    <yk-space dir="vertical" size="xl">
        <TopTile :is-seacher="true" :name="childName"></TopTile>
        <Car />
        <yk-space style="width: 100%;">
            <Echarts style="width: 48%;top:-15px" />
            <Comments style="width: 48%;top:-15px" />
        </yk-space>
    </yk-space>
</template>

<script lang="ts" setup>
import TopTile from '../components/TopTitleBar.vue'
import Car from '../components/overview/Card.vue'
import Echarts from '../components/overview/DatasEcharts.vue'
import { Comments } from '../components/langue/index'
const childName = '总览';
</script>

<style lang="less" scoped>
.car {
    width: 100%;
    padding: 0 20px;
    top: -15px;

    .car-item {
        width: 25%;
        background: #eee;
        display: flex;
        justify-content: space-between;
        padding: @space-xl;
        border-radius: 15px;
        align-items: center;

        &:nth-child(1) {

            .yk-title,
            .yk-text {
                color: @white
            }

            ;
        }
    }
}
</style>