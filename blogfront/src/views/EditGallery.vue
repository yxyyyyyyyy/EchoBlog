<template>
    <div class="edit-gallery">
        <div class="topbar">
            <p class="title">新建摄影图库</p>
            <yk-space>
                <yk-button>发布</yk-button>
                <yk-button type="secondary">取消</yk-button>
            </yk-space>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.edit-gallery {
    padding: @space-xl;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .topbar {
        border-radius: @radius-m;
        background: @bg-color-l;
        padding: @space-l @space-xl;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1200px;

        .title {
            .font-xl();
            font-weight: 600;
        }
    }
}
</style>