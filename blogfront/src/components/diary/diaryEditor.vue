<template>
    <div class="diary-editor">
        <div class="form">
            <div class="formtop">
                <input type="text" class="title" placeholder="请输入标题" v-model="diaryForm.title">
                <yk-popover placement="bottomRight" title="选择天气">
                    <template #content>
                        <yk-space wrap :size="[32, 16]" style="padding: 16px 0 16px 14px;">
                            <div class="weather" v-for="item in waetherLinks"
                                :class="{ 'weather_active': diaryForm.weatherId == item.id }"
                                @click="selectWeather(item.id)">
                                <img :src="getWeatherIcon(item.id)">
                            </div>
                        </yk-space>
                    </template>
                    <img class="avatar" :src="getWeatherIcon(diaryForm.weatherId)">
                </yk-popover>
            </div>
            <yk-text-area v-model="diaryForm.content" :max-length="160" :auto-size="{
                minRows: 26,
                maxRows: 26,
            }" placeholder="请输入..."></yk-text-area>
            <div class="pics">
                <yk-upload :upload-url="uploadUrl" :file-list="diaryForm.picture" accept="image/*"></yk-upload>
            </div>
        </div>

        <div class="foot">
            <yk-space size="s">
                <yk-button type="secondary">取消</yk-button>
                <yk-button>新建笔记</yk-button>
            </yk-space>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { waetherLinks } from '../../utils/weather';

type DiaryFrom = {
    title?: string
    weatherId: number
    content?: string
    picture?: string[]
}
function getWeatherIcon(weatherId: number): string {
    return './src/' + waetherLinks[weatherId]?.icon || '';
}

const diaryForm = ref<DiaryFrom>({ weatherId: 0 })

//select weather
const selectWeather = (id: number) => {
    diaryForm.value.weatherId = id;
}

const uploadUrl = 'https://www.huohuo90.com:3005/upload'
</script>

<style lang="less" scoped>
.diary-editor {
    background: @bg-color-l;
    border-radius: @radius-m;
    width: 100%;

    .form {
        padding: @space-xl;

        .formtop {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .title {
            font-size: @size-xl;
            font-weight: bold;
            color: @font-color-l;
            padding-bottom: @space-m;
        }

        img {
            width: 24px;
            height: 24px;
        }

        .weather_active {
            &::before {
                position: absolute;
                bottom: -4px;
                left: 9px;
                content: "";
                display: block;
                width: 6px;
                height: 6px;
                border-radius: 4px;
                background: @pcolor;
            }
        }
    }

    input {
        border: none;
        background-color: transparent;
        outline: none;

        &::placeholder {
            color: @gray-4;
        }
    }


    .foot {
        display: flex;
        justify-content: end;
        padding: @space-m;
        border-top: 1px solid @line-color-s;
    }
}
</style>
<style lang="less">
.diary-editor {
    .yk-text-area {
        background-color: transparent;
        border: none;
        border-radius: 0;
        padding: 0px;
    }

    yk-text-area__inner {
        font-size: @size-m;
        line-height: 1.5;

        &::placeholder {
            color: @gray-5;
        }
    }
}
</style>