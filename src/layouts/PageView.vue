<template>
    <div>
        <template v-if="$route.meta.showPageHeader">
            <iPageHeader :title="title || $route.name">
                <template v-if="content">
                    {{content}}
                </template>
                <template v-else-if="$slots.content">
                    <slot name="content"/>
                </template>

                <template v-if="$slots.extra" slot="extra">
                    <slot name="extra"/>
                </template>
            </iPageHeader>
        </template>

        <div class="ant-layout-content-wrapper">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageView",
        props: {
            title: {
                type: String
            },
            content: {
                type: String
            }
        },
    }
</script>
