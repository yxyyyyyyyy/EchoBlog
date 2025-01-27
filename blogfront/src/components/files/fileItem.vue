<template>
    <div class="file_main">
        <div class="file_main_img" :class="{ 'file_main_img_active': props.data?.selected }">
            <yk-image :src="url" width="200" height="200" :is-lazy="true" fit="contain"></yk-image>
            <yk-space class="file_main_icon" size="s">
                <IconDeleteOutline @click="emits('deleteId',props.data?.id)" />
                <yk-popconfirm title="选择分组" placement="bottomRight" @cancel="cancel" @confirm="confirm">
                    <template #content>
                        <yk-scrollbar height="148px" ref="scrollbar" class="subset">
                            <div v-for="item in subsetStore.data" class="subset_menu" @click="changeSubset(item.id)"
                                :class="{ 'subset_menu_active': subsetSelect == item.id }">
                                {{ item.name }} {{ item.value }}
                            </div>
                        </yk-scrollbar>
                    </template>
                    <IconSwitchOutline class="icon switch" />
                </yk-popconfirm>
            </yk-space>
            <div class="file_main_check"
            @click="emits('selected',props.data?.id)">
                <IconTickMinOutline class="file_main_check_icon" 
                style="color: white; font-size: 24px;"/>
            </div>
        </div>
        <yk-text class="name">{{ props.data?.fileName }}.{{ props.data?.format }}</yk-text>
    </div>
</template>

<script lang="ts" setup>
import type { FileDataType } from '../../utils/interface';
import { computed, getCurrentInstance, ref } from 'vue'
import { useCounterStore } from '../../store/subset'
const subsetStore = useCounterStore();
const proxy: any = getCurrentInstance()?.proxy
type FielItemProps = {
    data?: FileDataType
}
const props = withDefaults(defineProps<FielItemProps>(), {
})
const url = computed(() => {
    return "/src/assets/photos/" + props.data?.url
})

// 分类选择
const subsetSelect = ref<number | string>(props.data?.subsetId!)
// 切换分组
const changeSubset = (e: number | string) => {
    subsetSelect.value = e;
}

const emits=defineEmits(['changeSubsetId','selected','deleteId'])
function cancel() {
    // proxy.$message({ type: 'warning', message: '你点击了取消按钮' })
}
function confirm() {
    if(subsetSelect.value!=props.data?.subsetId){
        let data = {
            id: props.data?.id,
            subsetId: subsetSelect.value
        }
        emits('changeSubsetId',data)
        proxy.$message({ type: 'success', message: '修改成功' })
    }
}
</script>

<style lang="less" scoped>
.file_main {
    .file_main_img {
        position: relative;
        border-radius: @radius-s;
        border: 2px solid @bg-color-l;

        .file_main_check {
            width: 26px;
            height: 26px;
            border-radius: @radius-s;
            background: @gray-4;
            position: absolute;
            left: @space-s;
            top: @space-s;
            cursor: pointer;
            border: 1px solid rgba(255, 255, 255, 0.56);
            opacity: 0;
        }

        .file_main_icon {
            position: absolute;
            right: @space-s;
            bottom: @space-s;
            opacity: 0;

            .yk-icon {
                width: 32px;
                height: 32px;
                padding: 8px;
                background: rgba(255, 255, 255, 0.56);
                border-radius: @radius-m;
                transition: all @animatb;
                cursor: pointer;

                &:hover {
                    color: @pcolor;
                    background: rgba(255, 255, 255, 0.72);
                    backdrop-filter: blur(2px);
                }
            }
        }
    }

    &:hover {
        background: @pcolor-1;

        .file_main_icon {
            opacity: 1;
        }

        .file_main_check {
            opacity: 1;

            .file_main_check_icon {
                opacity: 0;
            }
        }
    }

    .file_main_img_active {
        background: @pcolor-1;
        border: 2px solid @pcolor-3;

        .file_main_icon {
            opacity: 0;
        }

        .file_main_check {
            background: @pcolor;
            opacity: 1;
        }

        &:hover {
            .file_main_icon {
                opacity: 0;
            }
        }
    }

    .name {
        padding-top: @space-l;
        text-align: center;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }

}

.subset {
    width: 240px;

    .subset_menu {
        width: 95%;
        background-color: @bg-color-m;
        line-height: 32px;
        padding: 0 @space-l;
        margin: @space-s 0;
        border-radius: 2px;
        cursor: pointer;
        transition: all @animatb;
        user-select: none;

        &:hover {
            background-color: @bg-color-s;
        }
    }

    .subset_menu_active {
        background-color: @pcolor-1;
        color: @pcolor;
        font-weight: 500;
    }
}
</style>