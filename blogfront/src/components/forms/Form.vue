<template>
    <div class="form">
        <yk-space dir="vertical" size="xl">
            <input class="title" type="text" placeholder="请输入标题" v-model="formData.title" />
            <yk-space align="center">
                <div class="subset">
                    <input type="text" placeholder="选择分类" disabled="false" v-model="subsetName"
                        style="width: 120px; line-height: 28px;" />
                    <IconDownOutline />
                    <yk-dropdown @selected="subsetSelect">
                        <yk-dropdown-item v-for="item in subsetList" :value="item.id">{{ item.name }}</yk-dropdown-item>
                    </yk-dropdown>
                </div>

                <yk-space align="center">
                    <yk-tag v-for="(tag, index) in formData.label" :key="index" closeable shape="round" :type="tag"
                        @close="deleteLabel(tag)">
                        {{ tag }}
                    </yk-tag>
                    <yk-text type="third" @click="showModal" style="cursor: pointer; white-space:nowrap"
                        v-show="formData.label.length < 3">插入标签</yk-text>
                </yk-space>

            </yk-space>

            <div :class="{longText: props.classify == 0}">
                <yk-text-area v-model="formData.introduce" placeholder="请输入简介" :max-length="800" :auto-size="rows"></yk-text-area>
            </div>
        </yk-space>

        <div class="cover" v-if="props.classify == 0">
            <yk-upload :upload-url="uploadUrl" :file-list="fileUrl" desc="封面800*600" :limit="1"
                accept="image/*"></yk-upload>
        </div>


        <yk-modal v-model="visible" title="选择标签" size="s" :show-footer="false">
            <yk-space dir="vertical" size="l">
                <yk-input v-model="inputLabel" plaplaceholder="输入标签回车确定" style="width: 280px"
                    @submit="addLabel"></yk-input>
                <yk-space size="s">
                    <yk-tag v-for="(tag, index) in formData.label" :key="index" closeable shape="round" :type="tag"
                        @close="deleteLabel(tag)">
                        {{ tag }}
                    </yk-tag>
                </yk-space>
                <yk-space wrap size="s" style="padding-top: 10px;">
                    <yk-tag v-for="(tag, index) in tagArr" :key="index" shape="round" style="cursor: pointer;"
                        @click="selectLab(tag)">
                        {{ tag }}
                    </yk-tag>
                </yk-space>
            </yk-space>
        </yk-modal>
    </div>
</template>



<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { group, labelgroup } from '../../utils/mock'
import type { LabelItem } from '../../utils/interface'

const props = defineProps({
    
    classify: {
        default: 1,
        type: Number
    }
})

// 简介行数
const rows = computed(() => {
    if (props.classify === 0) {
        return {
            minRows: 4,
            maxRows: 10,
        }
    } else {
        return {
            minRows: 24,
            maxRows: 30,
        }
    }
})
const visible = ref<boolean>(false)
const showModal = () => {
    visible.value = true
}

const formData = ref<any>({
    title: "",
    subsetId: undefined,
    label: [],
    introduce: '',
    cover: '',
    classify:props.classify
})

// 分类名称
const subsetName = ref()
// 获取分类
const subsetList = ref()
// 所有标签
const tagLists = ref<LabelItem[]>([])
const tagArr = ref<any[]>([])

const addLabel = () => {
    if (inputLabel.value && formData.value.label.length < 3 && !formData.value.label.includes(inputLabel.value)) {
        formData.value.label.push(inputLabel.value)
        inputLabel.value = ''
    }
}

const deleteLabel = (e: any) => {
    tagArr.value.unshift(e)
    formData.value.label = formData.value.label.filter((item: any) => item !== e)
}
const selectLab = (e: any) => {
    if (formData.value.label.length < 3) {
        formData.value.label.push(e)
        tagArr.value = tagArr.value.filter((item: any) => {
            return item !== e
        })
    }
}



// 标签
const inputLabel = ref()
const getTag = () => {
    tagLists.value = labelgroup.data.list
    for (let i = 0; i < tagLists.value.length; i++) {
        tagArr.value.push(tagLists.value[i].name)
    }
}
const getSubset = () => {
    subsetList.value = group.data.list
}

// 
const subsetSelect = (e: number) => {
    formData.value.subsetId != e
    subsetName.value = subsetList.value.find((item: any) => item.id === e).name
}

const uploadUrl = ''
const fileUrl = ref([])
onMounted(() => {
    getSubset()
    getTag()
})

</script>

<style lang="less" scoped>
.form {
    position: relative;
    padding-top: @space-xl;

    input {
        border: none;
        background: transparent;
        outline: none;

        &::placeholder {
            color: @gray-4;
        }
    }

    .title {
        font-size: @size-xl;
        font-weight: 600
    }

    .yk-dropdown {
        position: absolute;
        top: 0;

    }

    .longText {
        width: 100%;
        border-bottom: 1px solid @gray-2;
    }

    .cover {
        position: absolute;
        top: 0;
        right: 0;
    }
}
</style>
<style lang="less">
.form {
    .yk-dropdown__title {
        width: 120px;
        height: 24px;
    }

    .yk-text-area {
        border: 0px solid transparent;
        background-color: transparent;
        padding: 0;
    }

    .yk-upload__picture-button,
    .yk-upload-picture {
        width: 160px;
        height: 120px;
    }
}
</style>
