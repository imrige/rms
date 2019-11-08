<template>
    <li class="i-rank-item">
        <span :class="indexClasses">
            {{index}}
        </span>
        <span class="i-rank-item-title">
            {{title}}
        </span>
        <span class="i-rank-item-value">
            {{value}}
        </span>
    </li>
</template>

<script>
    export default {
        name: "iRankItem",
        props: {
            index: {
                type: [String, Number]
            },
            title: {
                type: String
            },
            value: {
                type: [String, Number]
            }
        },
        computed: {
            indexClasses() {
                return [
                    `i-rank-item-index`,
                    {
                        [`i-rank-item-index-active`]: this.index < 3
                    }
                ]
            }
        }
    }
</script>
