<template>
    <a-modal :visible="value"
             :footer="null" :closable="false"
             :bodyStyle="{padding: 0}"
             :maskStyle="{background: 'rgba(0, 0, 0, .5)'}"
             @cancel="bindClickClose">
        <a-input-search size="large" placeholder="全局搜索"/>
    </a-modal>
</template>

<script>
    import Mixin from './mixin';

    export default {
        name: "HeaderSearch",
        mixins: [Mixin]
    }
</script>
