<template>
    <li class="i-information-item">
        <template v-if="title">
            <span class="i-information-item-title">{{title}}</span>
        </template>
        <template v-else-if="showTitle">
            <span class="i-information-item-title"><slot name="title"/></span>
        </template>

        <template v-if="content">
            <p class="i-information-item-content">{{content}}</p>
        </template>
        <template v-else-if="showContent">
            <p class="i-information-item-content">
                <slot name="content"/>
            </p>
        </template>

        <em></em>
    </li>
</template>

<script>
    export default {
        name: "iInformationItem",
        props: {
            title: {
                type: [String, Number]
            },
            content: {
                type: [String, Number]
            }
        },
        data() {
            return {
                showTitle: false,
                showContent: false
            }
        },
        mounted() {
            this.showTitle = this.$slots.title !== undefined;
            this.showContent = this.$slots.content !== undefined;
        }
    }
</script>
