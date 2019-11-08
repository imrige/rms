<template>
    <div class="i-page-header">
        <div class="ant-layout-content-wrapper">
            <iBreadcrumb/>

            <div class="i-page-header-heading">
                <span class="i-page-header-heading-title">{{title}}</span>
            </div>

            <template v-if="$slots.default || $slots.extra">
                <div class="i-page-header-content">
                    <template v-if="$slots.default">
                        <div class="i-page-header-content-main">
                            <slot/>
                        </div>
                    </template>
                    <template v-if="$slots.extra">
                        <div class="i-page-header-content-extra">
                            <slot name="extra"/>
                        </div>
                    </template>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "iPageHeader",
        props: {
            title: {
                type: String
            }
        }
    }
</script>
