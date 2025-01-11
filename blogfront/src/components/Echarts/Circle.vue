<template>
    <div :style="{ height: chartHeight }" ref="chart1" class="chart"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted, ref, watch, markRaw, onUnmounted } from 'vue';
const chart1 = ref<HTMLDivElement>()
const myCharts = ref()
const props = defineProps(['data', 'title', 'chartHeight'])
const option = ref()
const survey = (e: any) => {
    console.log(e);

    let total: number = 0
    for (let i = 0; i < e.length; i++) {
        total += e[i].value
    }
    option.value = {
        color: ['#2B5AED', '#FA5247', '#1CCBB6', '#F625AF', '#FFB435'],
        title: {
            text: total,
            subtext: props.title,
            left: 'center',
            top: '34%',
            textStyle: {
                fontSize: 30,
                color: "#686B73",
                align: "center"
            },
            subtextStyle: {
                fontSize: 14,
                color: "#686B73",
            }
        },
        tooltip: {
            trigger: 'item',
        },
        legend: {
            show: false,
            bottom: 0,
            icon: 'circle'
        },
        series: [
            {
                type: 'pie',
                radius: ['60%', '76%'],
                data: e,
                minShowLabelAngle: 10,
                avoidLabelOverlap: true,
                label: {
                    normal: {
                        show: true,
                    },
                    emphasis: {
                        show: false,
                    },
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold',
                    },
                },
                labelLine: {
                    show: false,
                },
            },
        ],

    }
}

survey(props.data)

onMounted(() => {
    myCharts.value = markRaw(echarts.init(chart1.value as HTMLDivElement));
    myCharts.value.setOption(option.value);
    window.addEventListener('resize', () => {
        myCharts.value.resize();
    })
})

watch(() => props.data, (n) => {
    survey(n);
    myCharts.value.setOption(option.value);
})
onUnmounted(() => {
    window.removeEventListener('resize', () => {
        myCharts.value.resize();
    });
});

</script>

<style lang="less" scoped>
.chart {
    width: 100%;
}
</style>