<template>
    <a-layout :class="classes">
        <template v-if="isSideLayout">
            <Sidebar/>
        </template>

        <a-layout style="min-height: 100vh">
            <Header/>

            <Content>
                <keep-alive>
                    <router-view v-if="$route.meta.keepalive"/>
                </keep-alive>

                <router-view v-if="!$route.meta.keepalive"/>
            </Content>

            <Footer/>
        </a-layout>
    </a-layout>
</template>

<script>
    import Mixin from '@/layouts/mixin';
    import Header from "@/layouts/header";
    import Content from "@/layouts/content";
    import Sidebar from "@/layouts/sidebar";
    import Footer from "@/layouts/footer";
    import {mapState} from 'vuex';

    export default {
        name: "LayoutView",
        components: {Header, Content, Sidebar, Footer},
        mixins: [Mixin],
        data() {
            return {
                collapsed: false,
                sidebarWidth: 256,
                sidebarCollapsedWidth: 80,
                headerHeight: 64
            }
        },
        computed: {
            ...mapState({
                theme: state => state.setting.theme,
                user: state => state.account.user
            }),
            contentStyles() {
                const fixHeader = this.theme.fixHeader;

                if (fixHeader) return {
                    marginTop: `${this.headerHeight}px`
                };
                else return {};
            }
        },
        mounted() {
            this.collapsed = this.theme.collapsed;
            this.$on('collapsed', value => this.collapsed = value);
        }
    }
</script>

<style lang="scss" src="./Layout.scss"/>
