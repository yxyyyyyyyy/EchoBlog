<template>
    <div class="gallery">
        <div class="content">
            <div class="files">
                <galleryItem v-for="item in galleryList" :key="item.id" :data="item" @delete="deleteItem"
                    @state="changeState">
                </galleryItem>
            </div>
        </div>
        <div class="pageHelp">
            <yk-pagination :total="count" size="m" @change="changePage"></yk-pagination>
        </div>
    </div>


</template>

<script lang="ts" setup>
import { mkgallery } from '../../utils/mock';
import type { GalleryDate } from '../../utils/interface'
import { onMounted, ref } from 'vue';
import { getCurrentInstance } from 'vue'
import galleryItem from './galleryItem.vue';
const proxy: any = getCurrentInstance()?.proxy
const props = defineProps({
    pageSize: {
        type: Number,
        default: 8
    },
    subsetId: {
        type: Number,
        default: -1
    },
    state: {
        type: Number,
        default: -1
    },
    serchTerm: {
        type: String,
        default: ''
    }
})

const request = {
    pageSize: props.pageSize,
    nowPage: 1,
    state: props.state,
    subsetId: props.subsetId,
    count: true,
    serchTerm: props.serchTerm
}

// 获取文章
const galleryList = ref<GalleryDate[]>([])
// 文章总数
const count = ref<number>(0)
const getDate = (e: boolean) => {
    if (e) {
        count.value = mkgallery.data.count;
    }
    let arr = mkgallery.data.list.slice(
        (request.nowPage - 1) * request.pageSize,
        request.nowPage * request.pageSize
    )
    galleryList.value = [...arr]
}

// 改变状态
const changeState = (e: any) => {
    galleryList.value.filter((item: { id: number; state: number }) => {
        if (item.id == e.id) {
            item.state = e.state
            if (e.state === 1) {
                proxy.$message({ type: 'primary', message: '发布成功' })
            } else {
                proxy.$message({ type: 'primary', message: '撤回一条文章~' })
            }
        }
    })
}
// 删除
const deleteItem = (id: number) => {
    galleryList.value = galleryList.value.filter(item => item.id !== id)
    count.value--
    proxy.$message({ type: 'primary', message: '文章删除完成' })
}

const changePage = (e: number) => {
    request.nowPage = e;
    getDate(false)
}

onMounted(() => {
    getDate(true)
})

</script>

<style lang="less" scoped>
.gallery {
    width: 100%;
    background: @bg-color-l;
    padding: 32px24px 24px;
    border-radius: @radius-m;

    .content {
        display: inline;

        .files {
            display: grid;
            grid-template-columns: repeat(auto-fill, 238px);
            row-gap: 32px;
            column-gap: 24px;
            justify-content: center;
        }
    }

    .pageHelp {
        padding: @space-s 0 @space-l;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
    }

}
</style>