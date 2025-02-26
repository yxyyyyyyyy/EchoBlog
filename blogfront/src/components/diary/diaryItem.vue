<template>
    <div class="dairy-item">
        <yk-space dir="vertical">
            <div class="topbar">
                <yk-space dir="vertical" size="4">
                    <p class="dairy-item-title">
                        {{ props.data!.title }}
                        <img :src="getWeatherIcon(props.data!.weatherId)" />
                    </p>
                    <yk-text type="third">{{ momentm2(props.data!.moment) }}</yk-text>
                </yk-space>
                <yk-popconfirm title="确定删除?" placement="top" content="删除将不可恢复" :show-cancel="false"
                    @confirm="deleteDarity()">
                    <IconDeleteOutline class="delete" />
                </yk-popconfirm>
            </div>

            <yk-text>{{ props.data?.content }}</yk-text>
            <div class="images">
                <yk-image-preview-group :src-list="pictures" width="80" height="80"
                    fit="cover"></yk-image-preview-group>
            </div>


        </yk-space>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { DairyDate } from '../../utils/interface'
import { momentm2 } from '../../utils/moment';
import { waetherLinks } from '../../utils/weather';

type DairyProps = {
    data?: DairyDate
}

const props = withDefaults(defineProps<DairyProps>(), {})
const emits = defineEmits(["delete"])

function deleteDarity() {
    emits("delete", props.data!.id)
}

function getWeatherIcon(weatherId: number): string {
    return './src/' + waetherLinks[weatherId]?.icon || '';
}

// 处理地址
const pictures = computed(() => {
    if (props.data?.picture) {
        let arr = JSON.parse(JSON.stringify(props.data?.picture))
        for (let i = 0; i < arr.length; i++) {
            arr[i] = './src/assets/photos/' + arr[i]
        }
        return arr
    }
    return undefined
})
</script>

<style lang="less" scoped>
.dairy-item {
    border-radius: @radius-m;
    padding: @space-l;
    background: @bg-color-l;
    width: 100%;

    .topbar {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .dairy-item-title {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 600;

        img {
            margin-left: @space-s;
            width: 24px;
            height: 24px;
        }
    }

    .delete {
        width: 20px;
        height: 20px;
        padding: 2px;
        color: @font-color-s;
        transition: color @animatb;
        display: none;

        &:hover {
            color: @font-color-l;
        }
    }

    &:hover {
        .delete {
            display: block;
        }
    }
}
</style>
<style lang="less">
.images {
    .yk-space {
        gap: 8px;
    }

    .yk-image {
        border-radius: 8px;
    }
}
</style>