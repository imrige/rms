<template>
    <div class="ant-layout-brand">
        <a href="/">
            <img src="../../assets/logo.svg" alt="logo">
            <h1 style="display: inline-block; margin-left: 16px; margin-bottom: 0;">{{title}}</h1>
        </a>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "Brand",
        computed: {
            ...mapState({
                title: state => state.setting.title
            })
        }
    }
</script>
