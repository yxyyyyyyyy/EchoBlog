<template>
    <div class="gallery-item">
        <yk-space size="s" dir="vertical">
            <div class="galleryDiv">
                <div class="images">
                    <yk-image :src="cover" width="238" height="160" :is-lazy="true" :preview="false" fit="cover" />
                </div>
                <yk-space :size="2">
                    <div class="image-left image-div">
                        <yk-image width="78" height="78" :is-lazy="true" :preview="false" fit="cover"
                            :src="'./src/assets/photos/' + props.data?.content![0]" v-if="props.data?.content![0]" />
                    </div>
                    <div class="image-center image-div">
                        <yk-image :src="'./src/assets/photos/' + props.data?.content![1]" v-if="props.data?.content![1]"
                            width="78" height="78" :is-lazy="true" :preview="false" fit="cover" />
                    </div>
                    <div class="image-right image-div">
                        <yk-image :src="'./src/assets/photos/' + props.data?.content![2]" v-if="props.data?.content![2]"
                            width="78" height="78" :is-lazy="true" :preview="false" fit="cover" />
                    </div>
                </yk-space>
            </div>

            <yk-space class="controls" :size="4">
                <IconModifyOutline />
                <IconDeleteOutline @click="deleteArt" />
            </yk-space>


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
                        </yk-space>
                        <yk-text type="third">
                            {{ momentm1(props.data!.moment) }}
                        </yk-text>
                    </yk-space>
                </div>
            </div>
        </yk-space>


    </div>
</template>

<script lang="ts" setup>
import { momentm1 } from '../../utils/moment'
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

</script>

<style lang="less" scoped>
.gallery-item {
    border-radius: @radius-m;
    background: @bg-color-l;
    width: 238px;


    .images {
        position: relative;
        border-radius: @radius-m @radius-m 0 0;
        overflow: hidden;
        flex: none;
        padding-bottom: 2px;
    }

    .image-div {
        width: 78px;
        height: 78px;
        background: @gray-2;
    }

    .image-left {
        border-radius: 0 0 0 @radius-m;
        overflow: hidden;
    }

    .image-right {
        overflow: hidden;
        border-radius: 0 0 @radius-m 0;
    }

    .title {
        .font-l();
        padding-top: @space-m;
        font-weight: 600;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        /* 添加标准属性 */
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }


    .datas {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .controls {
        position: absolute;
        right: @space-l;
        top: @space-l;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: @radius-m;
        padding: @space-ss;
        opacity: 0;

        .yk-icon {
            width: 24px;
            height: 24px;
            color: @gray;
            padding: 5px;
            cursor: pointer;

            &:hover {
                color: @pcolor;
            }
        }


        &:hover {
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(2px);
        }
    }


    &:hover {
        .controls {
            opacity: 1;
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
