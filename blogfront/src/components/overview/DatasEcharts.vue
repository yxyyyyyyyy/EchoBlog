<template>
    <!-- 数据统计卡片 -->
    <yk-space dir="vertical" size="xl" style="width:48%; top:-15px">
        <div class="data-card">
            <div class="data-card-title">
                <p class="name">访问量</p>
                <yk-radio-group v-model="radio1" type="button" :solid="true" @change="getVisit">
                    <yk-radio value="week">近一周</yk-radio>
                    <yk-radio value="moon">近一月</yk-radio>
                </yk-radio-group>
            </div>
            <LineCharts :data="visit" chart-height="208px" />
        </div>
        <div class="data-card">
            <div class="data-card-title">
                <p class="name">数据监测</p>
                <yk-radio-group v-model="radio2" type="button" :solid="true">
                    <yk-radio value="week">近一周</yk-radio>
                    <yk-radio value="moon">近一月</yk-radio>
                </yk-radio-group>
            </div>
            <div style=" display: flex;">
                <Per :data="pieData.data.device" chart-height="208px" title="设备总数"/>
                <Per :data="pieData.data.website" chart-height="208px" title="访问总数" />
            </div>
        </div>
    </yk-space>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { LineCharts, Per } from '../Echarts/main';
import { visitData, pieData } from '../../utils/mock'

const radio1 = ref('moon')
const radio2 = ref('moon')

const visit = ref([])


const getVisit = (e: string) => {
    let data = visitData.data
    if (e == 'week') {
        visit.value = data.slice(0, 7)
    } else {
        visit.value = data
    }
}

onMounted(() => {
    getVisit(radio1.value)

})
</script>

<style lang="less" scoped>
.data-card {
    padding: @space-xl;
    border-radius: @radius-m;
    background: @bg-color-l;
    width: 100%;
    left: 20px;

    .data-card-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: @space-l;

        .name {
            font-size: 18px;
            font-weight: 600;
            color: @font-color-l;
        }
    }
}
</style>
