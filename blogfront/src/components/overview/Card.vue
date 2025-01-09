<template>
    <!-- 总览卡片开发 -->
    <yk-space class="car">
        <div v-for="(item, index) in overviewTotall" :key="index" class="car-item"
            :style="{ background: 'linear-gradient(' + item.bgcolor + ')' }">
            <yk-space dir="vertical" size="s">
                <yk-text type="secondary">{{ item.name }}</yk-text>
                <yk-title :level="2" style="margin: 0;">{{ item.total }}</yk-title>
            </yk-space>

            <yk-button v-if="index > 0" size="xl" type="secondary" shape="square">
                <IconPlusOutline />
            </yk-button>
        </div>
    </yk-space>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { overviewTotal } from '../../utils/menu';
import { overviewData } from '../../utils/mock'

const overviewTotall = ref(overviewTotal)// 获取数据
const drawCarDAta = () => {
    let data = overviewData.data
    overviewTotall.value[0].total = data.file
    overviewTotall.value[1].total = data.article
    overviewTotall.value[2].total = data.gallery
    overviewTotall.value[3].total = data.diary
}

onMounted(() => {
    drawCarDAta()
})
</script>

<style lang="less" scoped>
.car {
    width: 100%;
    padding: 0 30px;

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