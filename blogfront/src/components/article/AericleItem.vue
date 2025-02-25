<template>
    <div class="article-item">
        <yk-space size="xl">
            <div class="images">
                <yk-image :src="cover" width="160" height="120" :is-lazy="true" :preview="false" fit="cover" />
                <p class="unpublish" v-if="props.data?.state === 0">未发布</p>
            </div>

            <div style="width: 100%;">
                <p class="title">{{ props.data?.title }}</p>
                <p class="introduce">{{ props.data?.introduce }}</p>
                <div class="datas">
                    <yk-space size="xl">
                        <yk-text type="secondary">{{ subsetStore.subsetGetName(props.data?.subsetId) }}
                            <yk-text v-if="props.data!.label!.length > 0">
                                /
                                <span v-for="item in props.data?.label" style="padding-right: 5px;">{{ item }}</span>
                            </yk-text>
                        </yk-text>

                        <yk-text type="third">
                            {{ momentm(props.data!.moment) }}
                        </yk-text>
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
import { getCurrentInstance } from 'vue'
const proxy: any = getCurrentInstance()?.proxy
import { computed } from 'vue';
import type { AericleDate } from '../../utils/interface'
import { useCounterStore } from '../../store/subset';
const subsetStore = useCounterStore()
type ArtProps = {
    data?: AericleDate
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
const updateState = (e: number) =>{
    emits("state", { id: props.data!.id, state: e })
}
</script>

<style lang="less" scoped>
.article-item {
    border-radius: @radius-m;
    background: @bg-color-l;
    padding: @space-xl;
    width: 100%;

    .images {
        position: relative;
        border-radius: @radius-m;
        overflow: hidden;
        width: 160px;
        flex: none;
    }

    .unpublish {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        background: rgba(43, 90, 237, 0.8);
        line-height: 36px;
        color: @white;
        font-weight: 600;
    }

    .title {
        font-size: 20px;
        font-weight: 600;
        padding-bottom: @space-s;
    }

    .introduce {
        .font-m();
        height: 48px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        /* 添加标准属性 */
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        color: @font-color-l;
        margin-bottom: @space-m;
        max-width: 720px;
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
