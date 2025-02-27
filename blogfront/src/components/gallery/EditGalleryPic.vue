<template>
    <div class="photos">
        <div class="top">
            <yk-upload :upload-url="uploadUrl" :draggable="true"></yk-upload>
            <div class="waterfull">
                <div class="picItem" v-for="(item, index) in picLists" :key="index">
                    <img :src="getPicUrl(item.url)" />
                    <IconStarFill class="coverIcon" v-if="item.id === converImageId" />
                    <yk-space size="ss">
                        <p class="coverTitle" v-show="item.id != converImageId" @click="changeImage(item.id)">设位封面</p>
                        <IconDeleteOutline class="deleteIcon" @click="deletePic(item.id)" />
                    </yk-space>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { picList } from "../../utils/mock"
import { getCurrentInstance } from 'vue'
const proxy: any = getCurrentInstance()?.proxy
const uploadUrl = ''
// pic List
const picLists = ref()
const getPics = () => {
    picLists.value = picList.data
}
function getPicUrl(path: string): string {
    return '../src/assets/photos/' + path
}

// 封面
const converImageId = ref<number>(0)
const changeImage = (e: number) => {
    converImageId.value = e
}

const deletePic = (e: number) => {
    picLists.value = picLists.value.filter((item: any) => item.id !== e)
    if (e === converImageId.value && picLists.value.length > 0) {
        converImageId.value = picLists.value[0].id
    } else if (e === converImageId.value && picLists.value.length === 0) {
        converImageId.value = -1
    }
    proxy.$message({ type: 'primary', message: '删除成功!' })
}
onMounted(() => {
    getPics()
})
</script>

<style lang="less" scoped>
.photos {
    background: @bg-color-l;
    border-radius: @radius-m;
    padding: @space-xl;
    width: 100%;
}

.waterfull {
    width: 100%;
    column-count: 3;
    column-gap: @space-xl;
    padding-top: 32px;

    .picItem {
        margin-bottom: @space-xl;
        border-radius: @radius-m;
        overflow: hidden;
        line-height: 0%;

        img {
            width: 100%;
        }

        .yk-space {
            position: absolute;
            top: @space-l;
            right: @space-l;
        }

        .coverIcon {
            position: absolute;
            left: @space-l;
            top: @space-l;
            width: 24px;
            height: 24px;
            color: @wcolor;
        }

        .coverTitle {
            line-height: 32px;
            padding: 0 @space-m;
            border-radius: @radius-m;
            background: rgba(255, 255, 255, 0.56);
            color: @pcolor;
            transition: all @animatb;
            opacity: 0;

            &:hover {
                background: rgba(255, 255, 255, 0.8);
                backdrop-filter: blur(2px);
            }
        }

        .deleteIcon {
            width: 32px;
            height: 32px;
            padding: 9px;
            border-radius: @radius-m;
            background: rgba(255, 255, 255, 0.56);
            color: @gray;
            cursor: pointer;
            transition: all @animatb;
            opacity: 0;

            &:hover {
                color: @ecolor;
                background: rgba(255, 255, 255, 0.8);
                backdrop-filter: blur(2px);
            }
        }

    }

    &:hover {
        .picItem {
            .coverTitle {
                opacity: 1;
            }

            .deleteIcon {
                opacity: 1;
            }
        }
    }
}
</style>