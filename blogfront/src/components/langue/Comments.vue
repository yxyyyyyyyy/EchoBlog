<template>
    <div class="data-card">
        <div class="data-card-title">
            <p class="name">评论</p>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.data-card {
    padding: @space-xl;
    border-radius: @radius-m;
    background: @bg-color-l;
    width: 100%;
    left: 20px;
    .data-card-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: @space-l;
        .name {
            font-size: 18px;
            font-weight: 600;
            color: @font-color-l;
        }
    }
}
</style>