<template>
    <a-layout-header>
        <div class="ant-layout-header-wrapper">
            <template v-if="isSideLayout">
                <span class="ant-layout-header-trigger" @click="bindClickCollapsed">
                    <a-icon type="menu-fold" :style="triggerStyles"/>
                </span>
            </template>

            <Brand v-if="isTopLayout"/>

            <Menu v-if="isTopLayout"/>

            <div class="ant-layout-header-actions">
                <a-tooltip placement="bottom" title="全站搜索">
                    <span class="ant-layout-header-action" @click="showSearch = true">
                        <a-icon type="search"/>
                        <HeaderSearch v-model="showSearch"/>
                    </span>
                </a-tooltip>
                <a-tooltip placement="bottom" title="使用帮助">
                    <span class="ant-layout-header-action">
                        <a-icon type="question-circle"/>
                    </span>
                </a-tooltip>
                <a-popover placement="bottomRight" trigger="click" :overlayStyle="{width: '340px', padding: 0}">
                    <span class="ant-layout-header-action">
                        <a-badge count="9">
                            <a-icon type="bell"/>
                        </a-badge>
                    </span>
                    <HeaderNotification slot="content"/>
                </a-popover>
                <span class="ant-layout-header-action">
                    <HeaderAvatar :user="user"/>
                </span>
                <span class="ant-layout-header-action" @click="showSetting = true">
                    <a-icon type="setting"/>
                    <HeaderSetting v-model="showSetting"/>
                </span>
            </div>
        </div>
    </a-layout-header>
</template>

<script>
    import Setting from '@/layouts/mixin';
    import Menu from "@/layouts/menu/Menu";
    import Brand from "@/layouts/brand/Brand";
    import HeaderAvatar from "./HeaderAvatar";
    import HeaderNotification from "./HeaderNotification";
    import HeaderSetting from "./HeaderSetting";
    import HeaderSearch from "./HeaderSearch";
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: "Header",
        components: {HeaderAvatar, HeaderNotification, HeaderSetting, HeaderSearch, Brand, Menu},
        mixins: [Setting],
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                showSetting: false,
                showSearch: false,
            }
        },
        computed: {
            ...mapState({
                user: state => state.account.user,
                theme: state => state.setting.theme
            }),
            triggerStyles() {
                let {collapsed} = this.theme;

                return {
                    transform: `rotate(${collapsed ? 180 : 0}deg)`,
                }
            }
        },
        methods: {
            ...mapMutations({
                setTheme: "setting/setTheme"
            }),
            bindClickCollapsed() {
                let {collapsed} = this.theme;
                this.theme.collapsed = !collapsed;
                this.setTheme(this.theme);
            }
        }
    }
</script>
