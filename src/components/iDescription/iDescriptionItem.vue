<template>
    <a-col class="i-description-item" :span="span" :style="itemStyle">
        <template v-if="label">
            <span class="i-description-item-label" :style="labelStyles">
                {{label}}
            </span>
        </template>
        <template v-else-if="showLabel">
            <span class="i-description-item-label" :style="labelStyles">
                <slot name="label"/>
            </span>
        </template>

        <template v-if="content">
            <span class="i-description-item-content">
                {{content}}
            </span>
        </template>
        <template v-else-if="showContent">
            <span class="i-description-item-content">
                <slot/>
            </span>
        </template>
    </a-col>
</template>

<script>
    export default {
        name: "iDescriptionItem",
        props: {
            label: {
                type: String,
            },
            content: {
                type: String,
            },
            span: {
                type: Number,
                default: 8
            }
        },
        data() {
            return {
                labelWidth: 100,
                showLabel: false,
                showContent: false,
                itemStyle: {}
            }
        },
        computed: {
            labelStyles() {
                return {
                    minWidth: `${this.labelWidth}px`
                }
            }
        },
        mounted() {
            this.showLabel = this.$slots.label !== undefined;
            this.showContent = this.$slots.default !== undefined;
            this.$on('update-label-width', value => this.labelWidth = value);
            this.$on('update-item-style', value => this.itemStyle = value);
        }
    }
</script>
