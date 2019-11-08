<template>
    <div class="i-result">
        <div class="i-result-icon">
            <a-icon type="check-circle" theme="filled" style="color: #52c41b; font-size: 64px"/>
        </div>

        <h1 class="i-result-title">{{title}}</h1>

        <template v-if="$slots.description">
            <p class="i-result-description">
                <slot name="description"/>
            </p>
        </template>
        <template v-else-if="description">
            <p class="i-result-description">{{description}}</p>
        </template>

        <div class="i-result-content">
            <slot></slot>
        </div>

        <template v-if="$slots.action">
            <div class="i-result-action">
                <slot name="action"/>
            </div>
        </template>
        <template v-else>
            <div class="i-result-action">
                <a-button>返回</a-button>
                <a-button type="primary">确定</a-button>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "iResult",
        props: {
            title: {
                type: String,
                default: '操作成功'
            },
            description: {
                type: String
            },
            type: {
                type: String,
                default: 'success'
            }
        }
    }
</script>
