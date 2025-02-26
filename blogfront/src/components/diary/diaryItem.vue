<template>
    <div class="dairy-item">
        <yk-space>
            <div>
                <yk-space>
                    <p class="dairy-item-title">
                        {{  props.data!.title }}
                    </p>
                </yk-space>
            </div>
        </yk-space>
    </div>
</template>

<script lang="ts" setup>
import type { DairyDate } from '../../utils/interface'
type DairyProps = {
    data?: DairyDate
}
const props = withDefaults(defineProps<DairyProps>(), {})
const emits = defineEmits(["delete"])


function deleteArt() {
    emits("delete", props.data!.id)
}

</script>

<style lang="less" scoped>
.dairy-item {
    border-radius: @radius-m;
    padding: @space-l;
    background: @bg-color-l;
    width: 100%;
}
</style>
