<template>
    <div class="edit-gallery">
        <div class="topbar">
            <p class="title">新建摄影图库</p>
            <yk-space>
                <yk-button>发布</yk-button>
                <yk-button type="secondary">取消</yk-button>
            </yk-space>
        </div>

        <yk-space style="width: 100%;">
            <!-- <EditGalleryPic /> -->
            <div class="edit-form">
                <Form style="width: 800px;"/>
            </div>
        </yk-space>
    </div>
</template>

<script lang="ts" setup>
import Form from '../components/forms/Form.vue';
// import EditGalleryPic from '../components/gallery/EditGalleryPic.vue';
</script>

<style lang="less" scoped>
.edit-gallery {
    padding: @space-xl 80px;
    .topbar {
        border-radius: @radius-m;
        background: @bg-color-l;
        padding: @space-l @space-xl;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: @space-l;

        .title {
            .font-xl();
            font-weight: 600;
        }
    }

    .edit-form {
        background: @bg-color-l;
        width: 100%;
        flex: none;
        border-radius: @radius-m;
        display: flex;
        justify-content: center;
        padding: 24px 0 ;
    }
}
</style>