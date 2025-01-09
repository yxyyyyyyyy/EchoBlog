<template>
    <div class="top-title">
        <yk-title :level="3" style="margin:0">{{ props.name }}</yk-title>
        <slot name="custom" />
        <yk-space size="s" v-if="isSeacher">
            <yk-button type="secondary" v-show="SearchContent" @click="cancelSearch">取消搜索</yk-button>
            <yk-input-search style="width: 320px" placeholder="请输入标题/简介..." v-model="SearchContent"
            @search="search">
                <template #suffix>
                    <yk-button type="secondary">
                        <IconSearchOutline />
                    </yk-button>
                </template>
            </yk-input-search>
        </yk-space>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const SearchContent = ref('')

type titleProps = {
    name: string;
    isSeacher:boolean;
}
const props = withDefaults(defineProps<titleProps>(), {
    name: '总览',
    isSeacher:true
})

const emit= defineEmits(['search'])
// 搜索事件
const search = () => {
    emit('search',SearchContent.value)
}
// 取消搜索
const cancelSearch = () => {
    emit('search','')
    SearchContent.value=''
}
</script>

<style lang="less" scoped>
.top-title {
    width: 95%;
    display: flex;
    justify-content:space-between;
    align-items:center;
    margin: 20px;
}
</style>