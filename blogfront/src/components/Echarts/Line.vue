<template>
    <div :style="{height:chartHeight}" ref="chart" class="chart"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted, ref, watch,markRaw } from 'vue';
const chart = ref<HTMLDivElement>()
const myCharts = ref()
const props = defineProps(['data','chartHeight'])
const xAxisD = ref<string[]>([])
const seriesD = ref<number[]>([])
const option = ref()
const visit = (e: any) => {
    let data = e
    xAxisD.value = []
    seriesD.value = []
    for (let i = 0; i < data.length; i++) {
        xAxisD.value.push(data[i].data)
        seriesD.value.push(data[i].count)
    }

    option.value ={
        color:['#2B5AED'],
        grid:{
            top: '4%',
            right: '0%',
            bottom: '0%',
            left: '0%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: xAxisD.value
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: seriesD.value,
                type: 'line',
                smooth: true
            }
        ]
    }
}
onMounted(() => {
    myCharts.value = markRaw(echarts.init(chart.value as HTMLDivElement));
    window.addEventListener('resize', () => {
        myCharts.value.resize();
    })
})

watch(() => props.data, (n) => {
    visit(n);
    myCharts.value.setOption(option.value);
})
</script>

<style lang="less" scoped>
.chart{
    width: 100%;
}
</style>