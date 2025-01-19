<template>
    <yk-space size="m" class="reply">
        <yk-avatar img-url="https://pic1.imgdb.cn/item/67225467d29ded1a8cbba11e.jpg" size="l"></yk-avatar>
        <yk-space dir="vertical" size="s" class="reply_main">
            <div class="reply_name">
                <yk-text strong>{{ content?.user.name }}</yk-text>
                <yk-text style="font-size: 12px" type="third">{{ content?.moment }}</yk-text>
            </div>
            <yk-text type="secondary">{{ content?.comment }}</yk-text>
            <yk-space size="s" align="center">
                <yk-tag type="primary" style="font-size: 12px;">
                    {{ content?.article?.title }}
                </yk-tag>
                <yk-text type="danger" style="font-size: 12px;" v-show="content?.complaint">举报数
                    {{ content?.complaint }}</yk-text>
            </yk-space>


            <IconDeleteOutline class="delete" @click="deleteReply(props.content!.id)"/>
        </yk-space>
    </yk-space>
</template>

<script lang="ts" setup>
import type { replyProps } from '../langue/index';
const props = withDefaults(defineProps<replyProps>(), {
    isComment: true
})

const emit = defineEmits(["delete"])
// delete
const deleteReply = (id: number) => {
    emit("delete", id)
}
</script>

<style lang="less" scoped>
.reply {
    .reply_main {
        border-bottom: 1px solid @line-color-s;
        width: 100%;
        padding-bottom: @space-l;
        flex: 1;
        position: relative;

        .delete {
            position: absolute;
            top: 0;
            width: 16px;
            height: 16px;
            right: 0;
            cursor: pointer;
            color: @font-color-s;
            display: none;
        }
    }

    .reply_name {
        display: flex;
        flex-direction: column;
    }

    &:hover {
        .delete {
            display: block;
        }
    }

}
</style>