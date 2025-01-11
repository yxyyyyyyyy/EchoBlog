<template>
    <yk-space dir="vertical" class="menu-bar" size="m">
        <RouterLink :to="item.path" v-for="item in navLinks" :key="item.path" class="menu-item">
            <yk-space align="center" size="m">
                <component :is="item.icon"></component>
                <yk-text>{{ item.name }}</yk-text>
            </yk-space>
        </RouterLink>
    </yk-space>
</template>

<script lang="ts" setup>
import { navLinks } from '../utils/menu'
</script>

<style lang="less" scoped>
.menu-bar {
    width: 160px;
    padding: @space-l;
    position: fixed;
    top: 72px;
    left: 8px;

    .menu-item {
        width: 160px;
        height: 40px;
        border-radius: 10px;
        padding: 0 @space-l;
        display: flex;
        align-items: center;
        text-decoration: none;

        .yk-icon {
            color: @font-color-ss;
            height: 16px;
            width: 16px;
        }

        &:hover {
            background: @bg-color-l;

            .yk-text {
                font-weight: 600;
            }
        }
    }

    .router-link-active {
        background: linear-gradient(180deg, #2b5aedde 0%, #2B5AED 100%);

        .yk-icon {
            color: #fff;
        }

        .yk-text {
            color: #fff;
            font-weight: 600;
        }
    }
}
</style>