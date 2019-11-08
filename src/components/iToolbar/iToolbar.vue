<template>
    <a-affix :offset-top="offsetTop" :offset-bottom="offsetBottom">
        <div class="i-toolbar">
            <slot/>
        </div>
    </a-affix>
</template>

<script>
    export default {
        name: "iToolbar",
        props: {
            offsetTop: {
                type: Number,
                default: 0
            },
            offsetBottom: {
                type: Number
            }
        }
    }
</script>
