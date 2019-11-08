<template>
    <a-card class="i-chart-card" :bordered="bordered" :bodyStyle="bodyStyle" :loading="loading">
        <template v-if="title || showTitle">
            <div class="i-chart-card-header">
                <span class="i-chart-card-title">
                    <template v-if="title">
                        {{title}}
                    </template>
                    <template v-else-if="showTitle">
                        <slot name="title"/>
                    </template>
                </span>
                <span class="i-chart-card-extra float-right">
                    <template v-if="extra">
                        {{extra}}
                    </template>
                    <template v-else-if="showExtra">
                        <slot name="extra"/>
                    </template>
                </span>
                <span class="i-chart-card-value">
                    <template v-if="value">
                        <span>{{value}}</span>
                    </template>
                    <template v-else-if="showValue">
                        <slot name="value"/>
                    </template>
                </span>
            </div>
        </template>

        <template v-if="$slots.default">
            <div class="i-chart-card-content">
                <slot/>
            </div>
        </template>

        <template v-if="$slots.footer">
            <div class="i-chart-card-footer">
                <slot name="footer"/>
            </div>
        </template>
    </a-card>
</template>

<script>
    export default {
        name: "iChartCard",
        props: {
            title: {
                type: String
            },
            value: {
                type: [String, Number]
            },
            extra: {
                type: String
            },
            loading: {
                type: Boolean,
                default: false
            },
            bordered: {
                type: Boolean,
                default: true
            },

            bodyStyle: {
                type: Object,
                default() {
                    return {
                        padding: '24px'
                    }
                }
            }
        },
        data() {
            return {
                showTitle: false,
                showExtra: false,
                showValue: false,
            }
        },
        mounted() {
            this.showTitle = this.$slots.title !== undefined;
            this.showExtra = this.$slots.extra !== undefined;
            this.showValue = this.$slots.value !== undefined;
        }
    }
</script>
