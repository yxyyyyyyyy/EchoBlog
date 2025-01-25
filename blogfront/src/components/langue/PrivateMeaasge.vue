<template>
    <yk-space size="m" class="reply">
        <yk-space dir="vertical" size="s" class="reply_main">
            <div class="reply_name">
                <yk-text strong>{{ props.content?.user.name }}</yk-text>
                <yk-text style="font-size: 12px" type="third">{{ props.content?.moment }}</yk-text>
            </div>
            <yk-text type="secondary">{{ props.content?.comment }}</yk-text>
        </yk-space>
    </yk-space>
   
</template>

<script lang="ts" setup>
import type { replyProps } from '../langue/index';
const props = withDefaults(defineProps<replyProps>(), {})
</script>

<style lang="less" scoped>
.reply {
    .reply_main {
        width: 100%;
        border: 1px dashed #efefef;
        padding: 4px;
        flex: 1;
        margin-bottom: 10px;
    }
  

    .reply_name {
        display: flex;
        flex-direction: column;
    }
}
</style>