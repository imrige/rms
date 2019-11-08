<template>
    <div class="i-trend-item">
        <div class="i-trend-item-title">
            <template v-if="title">
                <span>{{title}}</span>
            </template>
            <template v-else-if="$slots.title !== undefined">
                <slot name="title"/>
            </template>
        </div>
        <div class="i-trend-item-value">
            <template v-if="value">
                <span>{{value}}</span>
            </template>
            <template v-else-if="$slots.value !== undefined">
                <slot name="value"/>
            </template>
        </div>
        <div class="i-trend-item-icon">
            <template v-if="type === 'up'">
                <a-icon type="caret-up" style="color: #f5222d;"/>
            </template>
            <template v-else-if="type === 'down'">
                <a-icon type="caret-down" style="color: #52c41b;"/>
            </template>
        </div>
    </div>
</template>

<script>
    import Component from '@/utils/component';

    export default {
        name: "iTrendItem",
        props: {
            title: {
                type: String
            },
            value: {
                type: [String, Number]
            },
            type: {
                type: String,
                validator(value) {
                    return Component.isExist(value, ['up', 'down'])
                }
            }
        }
    }
</script>
