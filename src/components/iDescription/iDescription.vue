<template>
    <div :class="classes">
        <a-row :type="type" :align="align" :justify="justify">
            <template v-if="title">
                <a-col span="24">
                    <div class="i-description-title">
                        {{title}}
                    </div>
                </a-col>
            </template>
            <template v-else-if="showTitle">
                <a-col span="24">
                    <div class="i-description-title">
                        <slot name="title"/>
                    </div>
                </a-col>
            </template>

            <div class="i-description-view">
                <slot/>
            </div>
        </a-row>
    </div>
</template>

<script>
    import Emitter from '@/mixins/emitter';

    export default {
        name: "iDescription",
        mixins: [Emitter],
        props: {
            title: {
                type: String
            },
            bordered: {
                type: Boolean,
                default: false
            },
            labelWidth: {
                type: Number,
                default: 100
            },
            itemStyle: {
                type: Object,
                default() {
                    return {}
                }
            },
            type: {
                type: String,
                default: 'flex'
            },
            align: {
                type: String,
                default: 'top'
            },
            justify: {
                type: String,
                default: 'space-between'
            }
        },
        data() {
            return {
                showTitle: false
            }
        },
        computed: {
            classes() {
                return [
                    `i-description`,
                    {
                        [`i-description-bordered`]: this.bordered
                    }
                ]
            }
        },
        mounted() {
            this.updateLabelWidth(this.labelWidth);
            this.updateItemStyle(this.itemStyle);
            this.showTitle = this.$slots.title !== undefined;
        },
        methods: {
            updateLabelWidth(value) {
                this.broadcast('iDescriptionItem', 'update-label-width', value);
            },
            updateItemStyle(value) {
                this.broadcast('iDescriptionItem', 'update-item-style', value);
            }
        },
        watch: {
            labelWidth(value) {
                this.updateLabelWidth(value);
            },
            itemStyle(value) {
                this.updateItemStyle(value);
            }
        }
    }
</script>
