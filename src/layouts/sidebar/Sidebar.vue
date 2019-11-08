<template>
    <a-layout-sider collapsible
                    v-model="theme.collapsed"
                    :width="width"
                    :trigger="null"
                    :style="sidebarStyles"
                    breakpoint="lg"
                    @breakpoint="bindBreakpoint">
        <Brand/>
        <Menu/>
    </a-layout-sider>
</template>

<script>
    import Brand from "@/layouts/brand";
    import Menu from "@/layouts/menu";
    import Mixin from "@/layouts/mixin";

    export default {
        name: "Sidebar",
        components: {Brand, Menu},
        mixins: [Mixin],
        props: {
            width: {
                type: [String, Number],
                default: 256
            },
            collapsedWidth: {
                type: [String, Number],
                width: 128
            }
        },
        methods: {
            bindBreakpoint(value) {
                this.$emit("input", value);
            }
        },
    }
</script>
