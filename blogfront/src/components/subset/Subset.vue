<template>
    <div class="subset">
        <yk-space>
            <div class="subset_menu">
                全部{{ subsetStore.count }}
            </div>
           
            <div class="subset_menu" v-for="item in articleStatus.data" :key="item.id">
                {{ item.name }}{{ item.value }}
            </div>
            <div class="subset_menu">
                {{ subsetStore.exclude.name }}{{ subsetStore.exclude.value }}
            </div>
            <div class="subset_menu" v-for="item in subsetStore.data" :key="item.id">
                {{ item.name }}{{ item.value }}
            </div>

        </yk-space>
    </div>
</template>

<script lang="ts" setup>
import { group, articleStatus } from '../../utils/mock'
import type { GroupData } from '../langue/index'
import { useCounterStore } from '../../store/subset'
import { onMounted } from 'vue';

const subsetStore = useCounterStore();

// 获取分组数据
const rawSubset = () => {
    subsetStore.data = group.data.list
    subsetStore.count = group.data.count
}

onMounted(() => {
    rawSubset()
})

</script>

<style lang="less" scoped>
.subset {
    width: 100%;
    padding: @space-l @space-xl;
    background: @bg-color-l;
    border-radius: @radius-m;
}
</style>