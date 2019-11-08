<template>
    <ul :class="classes">
        <slot></slot>
    </ul>
</template>

<script>
    import Component from '@/utils/component'

    export default {
        name: "i-Information",
        props: {
            align: {
                type: String,
                default: 'left',
                validator(value) {
                    return Component.isExist(value, ['left', 'center', 'right']);
                }
            },
            size: {
                type: String,
                default: 'default',
                validator(value) {
                    return Component.isExist(value, ['small', 'middle', 'default', 'large']);
                }
            },
            split: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            classes() {
                return [
                    `i-information`,
                    `i-information-${this.align}`,
                    {
                        [`i-information-split`]: this.split,
                        [`i-information-${this.size}`]: this.size !== 'default'
                    }
                ]
            }
        }
    }
</script>
