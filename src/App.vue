<template>
    <a-locale-provider :locale="locale">
        <div id="app">
            <router-view/>
        </div>
    </a-locale-provider>
</template>

<script>
    import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
    import en_US from 'ant-design-vue/lib/locale-provider/en_US';

    export default {
        provide: {
            gutter: 24
        },
        computed: {
            locale() {
                return zh_CN;
            }
        }
    }
</script>

<style lang="scss">
    @import "./styles/antd";
    @import "./styles/style";
</style>
