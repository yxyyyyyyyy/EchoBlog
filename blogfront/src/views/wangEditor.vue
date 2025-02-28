<template>
    <div class="edit-gallery">
        <div class="topbar">
            <p class="title">新建博客文章</p>
            <yk-space>
                <yk-button>保存</yk-button>
                <yk-button type="secondary">发布</yk-button>
            </yk-space>
        </div>

        <EditorWang style="width: 1200px;"/>
    </div>
</template>

<script lang="ts" setup>
// import Form from '../components/forms/Form.vue';
import EditorWang from '../components/forms/EditorWang.vue';
</script>

<style lang="less" scoped>
.edit-gallery {
    padding: @space-xl 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .topbar {
        border-radius: @radius-m;
        background: @bg-color-l;
        padding: @space-l @space-xl;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: @space-l;
        width: 1200px;

        .title {
            .font-xl();
            font-weight: 600;
        }
    }
}
</style>