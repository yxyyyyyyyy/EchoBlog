<template>
  <yk-table style="width: 100%; height:300px">
    <yk-table-column property="groupName" label="标签名称"></yk-table-column>
    <yk-table-column property="moment" label="创建时间"></yk-table-column>
    <yk-table-column property="manage" label="操作" align="right"></yk-table-column>
    <template #tbody>
      <tr v-for="(item, index) in labelData" :key="index" class="yk-table__row">
        <td class="yk-table__cell">
          {{ item.name }}
        </td>
        <td class="yk-table__cell">
          {{ item.moment }}
        </td>
        <td class="yk-table__cell text-right">
          <yk-text type="primary" style="cursor: pointer" @click="deleteSubset(item.id)">删除</yk-text>
        </td>
      </tr>
    </template>
  </yk-table>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { LabelItem } from '../../utils/interface';

type labelProps = {
  label: LabelItem[]
};

const props = withDefaults(defineProps<labelProps>(), {});

// 当前分组名称
let labelData = ref<LabelItem[]>([]);

watch(() => props.label, (val) => {
  labelData.value = [...val];
  {
    immediate:true
  }
});

const deleteSubset = (id: number | string) => {
  labelData.value = labelData.value.filter(item => item.id !== id);
};
</script>

<style lang="less" scoped></style>