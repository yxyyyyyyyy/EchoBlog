<template>
    <div class="article-item">
        <yk-space>
            <div class="images">
                <yk-image :src="cover" width="160" height="120" :is-lazy="true" :preview="false" fit="cover" />
                <p class="unpublish" v-if="props.data?.state === 0">未发布</p>
            </div>
        </yk-space>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { AericleDate } from '../../utils/interface'
type ArtProps = {
    data?: AericleDate
}
const props = withDefaults(defineProps<ArtProps>(), {})

// 处理封面地址
const cover = computed(() => {
    return './src/assets/photos/' + props.data?.cover
})

</script>

<style lang="less" scoped>
.article-item {
    border-radius: @radius-m;
    background: @bg-color-l;
    padding: @space-xl;
    width: 100%;
    .unpublish{
        
    }
}
</style>
