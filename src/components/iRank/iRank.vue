<template>
    <ul class="i-rank">
        <slot/>
    </ul>
</template>

<script>
    export default {
        name: "iRank",
        props: {
            dataSource: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>
