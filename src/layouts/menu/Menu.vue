<template>
    <a-menu class="ant-layout-menu"
            :mode="mode"
            :theme="theme.style"
            :openKeys="openKeys"
            :selectedKeys="selectedKeys"
            :rootSubmenuKeys="rootSubmenuKeys"
            @click="bindClick"
            @openChange="bindOpenChange">
        <a-sub-menu v-for="item in routes" :key="item.path">
            <template slot="title">
                <template v-if="item.meta.icon && item.meta.icon !== ''">
                    <a-icon :type="item.meta.icon"/>
                </template>
                <span>{{item.name}}</span>
            </template>
            <template v-if="item.children && item.children.length">
                <a-menu-item v-for="_item in item.children" :key="_item.path">
                    <template v-if="_item.meta.icon && _item.meta.icon !== ''">
                        <a-icon :type="_item.meta.icon"/>
                    </template>
                    <span>{{_item.name}}</span>
                </a-menu-item>
            </template>
        </a-sub-menu>
    </a-menu>
</template>

<script>
    import {mapState} from 'vuex';
    import Config from '@/config';

    export default {
        name: "Menu",
        data() {
            return {
                routes: Config.routes,
                rootSubmenuKeys: [],
                openKeys: [],
                selectedKeys: []
            }
        },
        computed: {
            ...mapState({
                theme: state => state.setting.theme,
                defaultTheme: state => state.setting.defaultTheme,
            }),
            mode() {
                let {layout, collapsed} = this.theme;

                if (layout === 'top') return 'horizontal';
                else if (collapsed) return 'vertical';
                else return 'inline';
            }
        },
        mounted() {
            this.getKeys();
            this.rootSubmenuKeys = this.routes.map(item => {
                return item.path;
            });
        },
        methods: {
            bindClick({key}) {
                this.$router.push(key);
            },
            bindOpenChange(openKeys) {
                const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
                if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) this.openKeys = openKeys;
                else this.openKeys = latestOpenKey ? [latestOpenKey] : [];
            },
            getKeys() {
                let {matched} = this.$route;
                let {layout} = this.theme;

                if (layout === 'side') this.openKeys = [matched[1].path];
                this.selectedKeys = [matched[2].path];
            }
        },
        watch: {
            $route() {
                this.getKeys();
            }
        }
    }
</script>
