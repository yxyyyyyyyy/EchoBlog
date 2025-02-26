<template>
    <div class="gallery-item">
        <yk-space size="xl">
            <div class="galleryDiv">
                <div class="images">
                    <yk-image :src="cover" width="238" height="160" :is-lazy="true" :preview="false" fit="cover" />
                </div>
                <yk-space :size="2">
                    <div class="image-left">
                        <yk-image :src="cover" width="78" height="78" :is-lazy="true" :preview="false" fit="cover" />
                    </div>
                    <div class="image-center">
                        <yk-image :src="cover" width="78" height="78" :is-lazy="true" :preview="false" fit="cover" />
                    </div>
                    <div class="image-right">
                        <yk-image :src="cover" width="78" height="78" :is-lazy="true" :preview="false" fit="cover" />
                    </div>
                </yk-space>
            </div>

            <div style="width: 100%;">
                <p class="title">{{ props.data?.title }}</p>
                <div class="datas">
                    <yk-space size="xl">
                        <yk-space>
                            <yk-text type="third">
                                <IconEyeOutline />
                                {{ props.data?.views }}
                            </yk-text>
                            <yk-text type="third">
                                <IconLikeOutline />
                                {{ props.data?.praise }}
                            </yk-text>
                            <yk-text type="third">
                                <IconCommentOutline />
                                {{ props.data?.comment }}
                            </yk-text>
                        </yk-space>
                        <yk-text type="third">
                            {{ momentm(props.data!.moment) }}
                        </yk-text>

                    </yk-space>
                    <yk-space class="controls" size="xl">
                        <yk-tooltip placement="top" title="发布" v-if="props.data?.state === 0">
                            <IconSendOutline @click="updateState(1)" />
                        </yk-tooltip>
                        <yk-tooltip placement="top" title="撤回" v-if="props.data?.state === 1">
                            <IconRevokeOutline @click="updateState(0)" />
                        </yk-tooltip>
                        <IconModifyOutline />

                        <yk-popconfirm title="确定删除?" placement="topRight" content="删除将不可恢复" :show-cancel="false"
                            @confirm="deleteArt()">
                            <IconDeleteOutline />
                        </yk-popconfirm>
                    </yk-space>
                </div>
            </div>
        </yk-space>
    </div>
</template>

<script lang="ts" setup>
import { momentm } from '../../utils/moment'
// import { getCurrentInstance } from 'vue'
// const proxy: any = getCurrentInstance()?.proxy
import { computed } from 'vue';
import type { GalleryDate } from '../../utils/interface'
type ArtProps = {
    data?: GalleryDate
}
const props = withDefaults(defineProps<ArtProps>(), {})

// 处理封面地址
const cover = computed(() => {
    return './src/assets/photos/' + props.data?.cover
})
const emits = defineEmits(["delete", "state"])

function deleteArt() {
    emits("delete", props.data!.id)
}

// 修改状态
const updateState = (e: number) => {
    emits("state", { id: props.data!.id, state: e })
}
</script>

<style lang="less" scoped>
.gallery-item {
    border-radius: @radius-m;
    background: @bg-color-l;
    padding: @space-xl;
    width: 100%;

    .images {
        position: relative;
        border-radius: @radius-m @radius-m 0 0;
        overflow: hidden;
        flex: none;
        padding-bottom: 2px;
    }

    .image-left {
        border-radius: 0 0 0 @radius-m;
        overflow: hidden;
    }

    .image-right {
        overflow: hidden;
        border-radius: 0 0 @radius-m 0 ;
    }

    .title {
        font-size: 20px;
        font-weight: 600;
        padding-bottom: @space-s;
    }


    .datas {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .controls {
            .yk-icon {
                width: 18px;
                height: 18px;
                color: @font-color-s;
                cursor: pointer;

                &:hover {
                    color: @pcolor;
                }
            }
        }
    }
}
</style>

<style lang="less">
.gallery-item {
    .yk-image__img {
        border-radius: 0;
    }
}
</style>
