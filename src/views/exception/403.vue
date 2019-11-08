<template>
    <Common>
        <h1>403</h1>
        <p>无法访问资源，可能是因为没有相应权限或登录已过期</p>
        <a-button>重新登录</a-button>
    </Common>
</template>

<script>
    import {StorageUtil} from '@/utils';
    import Common from "./Common";

    export default {
        name: "403",
        components: {Common},
        mounted() {
            StorageUtil.clear();
        }
    }
</script>
