<template>
    <yk-table :data="dataList">
        <yk-table-column property="groupName" label="分组名称"></yk-table-column>
        <yk-table-column property="articleNumber" label="关联文章数"></yk-table-column>
        <yk-table-column property="monent" label="创建时间"></yk-table-column>
        <yk-table-column
          property="manage"
          label="操作"
          align="right"
        ></yk-table-column>
        <template #tbody>
          <tr v-for="(item, index) in subsetStore.data" :key="index" class="yk-table__row">
            <td class="yk-table__cell">
              <yk-input v-model="item.name" @focus="focusSubset(item.id)" @blur="blurSubset(item.id)"/>
            </td>
            <td class="yk-table__cell">
              {{ item.value }}
            </td>
            <td class="yk-table__cell">
              {{ item.moment}}
            </td>

            <td class="yk-table__cell text-right">
              <yk-text type="primary" style="cursor: pointer" @click="deleteSubset(item.id)">删除</yk-text>
            </td>
          </tr>
        </template>
      </yk-table>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import { useCounterStore } from '../../store/subset'
const subsetStore = useCounterStore();
const proxy: any = getCurrentInstance()?.proxy
const dataList: any[] = []
// 当前分组名称
let subsetName:string|number
const focusSubset = (id: number|string) => {
    let result = subsetStore.data.find(item => item.id === id)
    if(result) subsetName = result.name
}
const blurSubset = (id: number|string) => {
    let result = subsetStore.data.find(item => item.id === id)
    if(result && result.name != subsetName) {
        // 提交后端处理
        proxy.$message({ type: 'success', message: '修改成功' })
    }
}

const deleteSubset = (id: number|string) => {
    let result = subsetStore.data.find(item => item.id === id)
    if(result) {
        subsetStore.data.splice(subsetStore.data.indexOf(result), 1)
        proxy.$message({ type: 'success', message: '删除成功' })
    }
}
</script>

<style lang="less" scoped>

</style>